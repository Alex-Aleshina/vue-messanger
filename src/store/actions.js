import firebase from "../firebase";


export default {
    async LOGIN_USER({ commit }, { email, password }) {

        function saveUsers(users) {
            commit('SET_USERS', users);
        }

        const userInfo = await firebase.loginUser(email, password);
        if (userInfo) {
            commit('SET_USER', { user: email });

            firebase.subscribeToUsers(saveUsers);
            return true;
        }
        else {
            return false;
        }
    },



    async SIGN_UP(_, { email, password, userName }) {
        await firebase.registerUser(email, password, userName)
        return true;
    },

    async LOGOUT_USER({ commit }) {
        await firebase.logout();
        commit('SET_USER', null);
    }
}
