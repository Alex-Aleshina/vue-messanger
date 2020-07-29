import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/functions";

// eslint-disable-line no-unused-vars
let onUsersUpdated = null;
let onMessagesUpdated = null;

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

function subscibeToDialogs(callback) {
    const currentUserId = firebase.auth().currentUser.uid;

    onMessagesUpdated = snapshot => {
        const messages = snapshot.val();
        const mappedMessages = {};
        
        Object.keys(messages).forEach(msgId => {
            const msg = messages[msgId];
            const isIncoming = msg.senderUserId !== currentUserId;
            const otherUserId = isIncoming ? msg.senderUserId : msg.recipientUserId;
            const mappedMsg = {
                id: msgId,
                text: msg.text,
                sentAt: msg.sentAt,
                isIncoming
            }
            
            if (mappedMessages[otherUserId]) {
                mappedMessages[otherUserId].push(mappedMsg);
            } else {
                mappedMessages[otherUserId] = [mappedMsg];
            }
        });

        callback(mappedMessages);
    }

    firebase.database().ref(`dialogs/${currentUserId}`)
        .orderByChild('sentAt')
        .on('value', onMessagesUpdated);
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
        firebase.database().ref(`dialogs`).off("value", onMessagesUpdated);
        await firebase.auth().signOut();
    }
}

async function addMessage(text, recipientUserId) {
    const addMessage = firebase.functions().httpsCallable('addMessage');
    return await addMessage({
        text,
        recipientUserId
    });
}

export default {
    registerUser, loginUser, subscribeToUsers, logout, addMessage, subscibeToDialogs
}