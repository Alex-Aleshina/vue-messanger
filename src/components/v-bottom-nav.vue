<template>
<div>
    <div class='v-bottom-nav' v-if="user">
        <router-link :to="{name: 'contacts'}">
            <i class="material-icons">person_pin</i>
        </router-link>
        <router-link :to="{name: 'dialogs'}">
            <i class="material-icons">chat</i>
        </router-link>
        <div v-if="user!=null">Hello {{ user.user }}
        </div>

        <i class="material-icons" @click="onLogout">exit_to_app</i>
    </div>
    <div>
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
            'user',
            'recconect'
        ])
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
    },

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
