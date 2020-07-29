<template>
<div>
    <div>
        <div v-for="msg in dialogs" :key="msg.id">{{msg.text}}
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
    name: 'dialog-list',
    computed: {
        ...mapState(['dialogs'])
    }
}
</script>
