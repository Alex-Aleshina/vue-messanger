export default {
    SET_USER(state, user) {
        state.user = user;
    },
    SET_USERS(state, users) {
        state.users = users
    },
    SET_DIALOGS(state, dialogs) {
        state.dialogs = dialogs;
    },
    SET_ERRORS(state, errors) {
        state.errors = errors
    }
}