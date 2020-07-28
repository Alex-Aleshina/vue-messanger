<template>
<div class="v-user-chat">
    <input type="text" class="v-user-chat__textfield" v-model="messageText">
    <i class="material-icons">
        send
    </i>
</div>
</template>

<script>
export default {
    name: 'dialog-form',
    data() {
        return {
            messageText: ''
        }
    }
}
</script>
