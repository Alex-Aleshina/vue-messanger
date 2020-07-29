<template>
<div>
    <div>
        <h3>Messages</h3>
        <span>Dialog with {{userName}}</span>
        <dialogMes v-bind:userid="userid" v-bind:userName="userName" />
        <dialogForm v-bind:userid="userid" v-bind:userName="userName" />
    </div>

</div>
</template>

<script>
import dialogMes from './v-dialog-messages'
import dialogForm from './v-dialog-form'

import {
    mapState
} from 'vuex'

export default {
    name: "v-dialog",
    props: {
        userid: String,
        userName: String
    },
    // data() {
    //     nameUser: ''
    // },
    components: {
        dialogMes,
        dialogForm
    },
    methods: {
        ...mapState([
            'users'
        ]),

        takeUserName: function () {
            let result = this.users;
            return console.log(result.filter(this.userid, result));
            
        }
    }

}
</script>

<style lang="scss">
</style>
