import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

// eslint-disable-line no-unused-vars
let onUsersUpdated = null;

async function registerUser(email, password, userName) {
    try {
        const userInfo = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const userRef = firebase.database().ref(`users/${userInfo.user.uid}`);

        userRef.set({
            email, userName
        });
    }
    catch (error) {
        console.log(error)
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
    }
}


async function loginUser(email, password) {
    try {
        const userInfo = await firebase.auth().signInWithEmailAndPassword(email, password);
        return {
            email: userInfo.user.email,
            id: userInfo.user.uid
        };
    } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        return null;
    }
}

function subscribeToUsers(callback) {
    onUsersUpdated = snapshot => {
        const users = snapshot.val();
        const mappedUsers = Object.keys(users).map(k => ({
            id: k,
            ...users[k]
        }));
        callback(mappedUsers);
    };

    firebase.database().ref("users").on("value", onUsersUpdated);
}

async function logout() {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
        firebase.database().ref(`users`).off("value", onUsersUpdated);
        await firebase.auth().signOut();
    }
}

export default {
    registerUser, loginUser, subscribeToUsers, logout
}