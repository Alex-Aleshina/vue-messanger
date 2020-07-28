<template>
<div>
    <div class='v-bottom-nav' v-if="user">
        <router-link :to="{name: 'contacts'}">
            <i class="material-icons">person_pin</i>
        </router-link>
        <router-link :to="{name: 'dialog'}">
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
            'LOGOUT_USER'
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
