<template>
    <div class='v-header-nav' v-if="user">
        <div v-if="user!=null">
            Hello {{ userName }}
        </div>
    </div>
</template>

<script>
import {
    mapState
} from 'vuex'

export default {
    name: "v-header-nav",
    computed: {
        ...mapState([
            'users',
            'user'
        ]),
        userName() {
            const currentUser = this.users.find(u => u.id === this.user.id);
            return currentUser ? currentUser.userName : '';
        }
    },
    data() {
        return {}
    },
    methods: {
        onLogout() {
            this.$router.push({
                path: '/'
            });
            this.LOGOUT_USER();
        }
    }
}
</script>

<style lang="scss">
</style>
