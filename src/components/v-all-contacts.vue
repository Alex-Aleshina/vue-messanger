<template>
<div class='v-contact-user'>

    <div class="user__name">
        <h2>All contacts</h2>
        <div class="displayContacts" v-if="users">
            <a href="#" v-for="user in users" :key="user.id" @click="toContactDialog(user)">
                {{ user.userName }}
            </a>
        </div>

    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'

export default {
    computed: {
        ...mapState([
            'users',
            'user'
        ])
    },
    methods: {
        toContactDialog(user) {
            this.$router.push({
                name: 'dialog',
                params: {
                    'userid': user.id,
                    'userName': user.userName
                }
            });
        }
    }
}
</script>

<style>
</style>
