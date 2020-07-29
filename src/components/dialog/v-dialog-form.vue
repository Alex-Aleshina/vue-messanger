<template>
<div class="v-user-chat">
    <div :show="hasError">{{ errors }}</div>

    <input type="text" class="v-user-chat__textfield" placeholder="Enter Message" autocomplete="off" v-model="messageText" @keydown.enter.shift.exact="sendMessage" required>
    <i class="material-icons sentIcon" @click="sendMessage">
        send
    </i>

</div>
</template>

<script>
import {
    mapActions,
    mapMutations,
    mapState

} from 'vuex'

export default {
    name: 'dialog-form',
    data() {
        return {
            messageText: ''
        }
    },
    props: {
        userid: String
    },
    methods: {
        ...mapActions([
            'SEND_MESSAGE'
        ]),
        ...mapMutations([
            'SET_ERRORS'
        ]),
        sendMessage() {
            if (this.messageText.length >= 1) {
                this.SEND_MESSAGE({
                        messageText: this.messageText,
                        recipientUserId: this.userid
                    })
                    .then(() => {
                        this.messageText = ''
                    })
            } else {
                alert('Min 1 symbols')
            }
        }
    },
    computed: {
        ...mapState([
            'errors'
        ])
    }
}
</script>
