<template>
<div>
    <div class="displayContacts">
        <h2>Dialogs</h2>
        <a href="#" v-for="dialog in dialogsList" :key="dialog.userId" @click="toContactDialog(dialog.userId)">
            <span class="textDialog">{{dialog.text}}</span>
            <div class="infoDialog">
                <span class="infoInDialogList">from {{dialog.userName }}</span>
                <span class="infoInDialogList">last message</span>
                <span class="infoInDialogList">{{dialog.sentAtFormatted}}</span>
            </div>
        </a>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
import moment from 'moment'

export default {
    name: 'dialog-list',
    computed: {
        ...mapState([
            'dialogs',
            'users',
            'user'
        ]),
        dialogsList() {
            return Object.keys(this.dialogs)
                .filter(otherUserId => otherUserId !== this.user.id)
                .map(otherUserId => {
                    const messages = this.dialogs[otherUserId];
                    const lastMsg = messages[messages.length - 1];
                    const user = this.users.find(u => u.id === otherUserId);
                    return {
                        ...lastMsg,
                        userName: user?.userName,
                        sentAtFormatted: moment(lastMsg.sentAt).fromNow(),
                        userId: user?.id
                    }
                })
                .sort((a, b) => b.sentAt - a.sentAt);
        }
    },
    methods: {
        toContactDialog(userId) {
            this.$router.push({
                name: 'dialog',
                params: {
                    'userid': userId
                }
            });
        }
    }
}
</script>
