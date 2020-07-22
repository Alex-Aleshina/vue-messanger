export default {
    async LOGIN_USER({ commit }, userId) {
        commit('SET_USER', { user: userId });
        console.log(this.user);
        return true;
    }
}