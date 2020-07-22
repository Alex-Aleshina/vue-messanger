export default {
    SET_USER(state, user) {
        state.user = user;
    },
    LOGOUT_USER(state) {
        state.user = [];
    }
}