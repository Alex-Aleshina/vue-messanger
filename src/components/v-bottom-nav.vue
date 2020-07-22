<template>
<div>
    <div class='v-bottom-nav' v-if="user.user">
        <router-link :to="{name: 'contacts'}">
            <i class="material-icons">person_pin</i>
        </router-link>
        <router-link :to="{name: 'chats'}">
            <i class="material-icons">chat</i>
        </router-link>

        <i class="material-icons" @click="onLogout">exit_to_app</i>
    </div>
    <div>
    </div>
</div>
</template>

<script>
import {
    mapState,
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
            'LOGOUT_USER',
            'SET_RECCONECT'
        ]),

        onLogout() {
            this.$router.push({
                path: '/'
            });
            this.LOGOUT_USER();
        }
    },
    // ,
    // unload() {
    //     if( this.user) {
    //         this.SET_RECCONECT(true);
    //     }
    // }

    // mounted() {
    //     window.addEventListener('bound unload', this.unload);
    //         if (this.recconect) {
    //             alert('Are you sure you want to finish?')
    //         }

    // }
}
</script>

<style lang="scss">
</style>
