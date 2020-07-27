<template>
<div class='v-contact-user'>

    <div class="user__name">
        <span>Hello contacts</span>
        <ul v-if="users">
            <li v-for="user in users" :key="user.id">
                {{ user.userName }}
            </li>
        </ul>

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
            'users'
        ])
    }
}
</script>

<style>
</style>
