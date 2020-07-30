import firebase from "../firebase";


export default {
    async LOGIN_USER({ commit }, { email, password }) {

        function saveUsers(users) {
            commit('SET_USERS', users);
        }

        function saveDialogs(dialogs) {
            commit('SET_DIALOGS', dialogs);
        }

        const userInfo = await firebase.loginUser(email, password);
        if (userInfo) {
            commit('SET_USER', { email: email, id: userInfo.id });

            await firebase.updateIsOnlineIndication()
            firebase.subscribeToUsers(saveUsers);
            firebase.subscibeToDialogs(saveDialogs);
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
        commit('SET_DIALOGS', []);
        commit('SET_USERS', []);
        commit('SET_ERRORS', null);
    },

    async SEND_MESSAGE(_, { messageText, recipientUserId }) {
        await firebase.addMessage(messageText, recipientUserId);
    }
}
