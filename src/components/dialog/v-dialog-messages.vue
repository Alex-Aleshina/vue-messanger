<template>
    <div class="fieldMessages" v-chat-scroll="{smooth: true}">
        <div v-for="msg in dialogs[userid]" :key="msg.id" :class="[(msg.isIncoming) ? 'other-message' : 'own-message']" class="msg">
             <span class="message-text">{{msg.text}}</span>
             <br>
             <span class="time">{{ convertTime(msg.sentAt) }}</span>
             <br>
             <span class="time" v-if="msg.isIncoming">from {{userName}}</span>
             <span class="time" v-else>from me</span>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import {
    mapState
} from 'vuex';

export default {
    name: 'dialog-messages',
    props: {
        userid: String,
        userName: String
    },
    computed: {
        ...mapState(['dialogs'])
    },
    methods:{
        convertTime(timestamp) {
            return moment(timestamp).fromNow();
        }
    }
}
</script>
