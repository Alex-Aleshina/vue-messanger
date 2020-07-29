<template>
<div>
    <div class="fieldMessages" v-chat-scroll="{smooth: true}">
        <div v-for="msg in dialogs[userid]" :key="msg.id" :class="[(msg.isIncoming) ? 'other-message' : 'own-message']" class="msg">
             {{msg.text}} 
             <br>
             <span class="time" :time="msg.sentAt">at {{msg.sentAt}}</span>
             <br>
             <span class="time" v-if="msg.isIncoming">from {{userName}}</span>
             <span class="time" v-else>from me</span>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';

export default {
    //{{msg.isIncoming ? '&gt;&gt;' : '&lt;&lt;'}}
    name: 'dialog-messages',
    props: {
        userid: String,
        userName: String
    },
    computed: {
        ...mapState(['dialogs'])
    }
}
</script>
