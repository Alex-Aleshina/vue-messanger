<template>
<div class="displayContacts">
    <h2>All contacts</h2>
    <div v-if="users">
        <a href="#" v-for="user in usersWithoutCurrentUser" :key="user.id" @click="toContactDialog(user)">
            <vUserProfile v-bind:email="user.email" />
            <span>{{ user.userName }}</span>
            <span class="infoAboutTimeinContacts">{{ getOnlineIndication(user) }}</span>
        </a>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import moment from 'moment'
import vUserProfile from './v-user-profile-pict'

export default {
    components: {
        vUserProfile
    },
    computed: {
        ...mapState([
            'users',
            'user'
        ]),
        usersWithoutCurrentUser() {
            return this.users.filter(u => u.id !== this.user.id);
        }
    },
    methods: {
        toContactDialog(user) {
            this.$router.push({
                name: 'dialog',
                params: {
                    'userid': user.id
                }
            });
        },
        getOnlineIndication(user) {
            return user.isOnline ? 'online' : 'was online ' + moment(user.lastOnlineAt).fromNow();
        }
    }
}
</script>

<style>
</style>
