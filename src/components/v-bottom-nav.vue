<template>
<div>
    <div class='v-bottom-nav' v-if="user">
        <router-link :to="{name: 'contacts'}">
            <i class="material-icons">person_pin</i>
        </router-link>
        <router-link :to="{name: 'dialogs'}">
            <i class="material-icons">chat</i>
        </router-link>
        <i class="material-icons" @click="onLogout">exit_to_app</i>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapActions,
    mapMutations
} from 'vuex'

export default {
    name: "v-bottom-nav",
    computed: {
        ...mapState([
            'users',
            'user',
            'recconect'
        ]),
        userName(){
            const currentUser = this.users.find(u => u.id === this.user.id);
            return currentUser? currentUser.userName : '';
        }
    },
    data() {
        return {}
    },
    methods: {
        ...mapMutations([
            'SET_RECCONECT'
        ]),

        ...mapActions([
            'LOGOUT_USER',
            'LOGIN_USER'
        ]),

        onLogout() {
            this.$router.push({
                path: '/'
            });
            this.LOGOUT_USER();
        },
        unload() {
            if (this.user) { // User hasn't logged out
                this.SET_RECCONECT(true);
            }
        }
    }

    // mounted() {
    //     window.addEventListener('beforeunload', this.unload);
    //         if (this.recconect) {
    //             this.LOGIN_USER(this.user.user, this.password)
    //         }

    // }
}
</script>

<style lang="scss">
</style>
