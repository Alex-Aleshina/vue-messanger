<template>
<div class="login-form">
    <h3 class="text-center">Chat Login</h3>
    <div>
        <form>
            <input type="text" v-model="userId" placeholder="Enter user name" autocomplete="off" required @keyup.enter="onSubmit">
        </form>
        <span v-if="isValid">{{error}}</span>
        <div>
            <button type="submit" class="btn" @click="onSubmit()" :disabled="isValid">
                Enter chat
            </button>
        </div>

    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapState,
    mapMutations
} from 'vuex'

export default {
    name: 'login-form',
    data() {
        return {
            userId: '',
        }
    },
    methods: {
        ...mapActions([
            'LOGIN_USER',
            'SET_ERRORS'
        ]),
        ...mapMutations([
            'POST_ERR'
        ]),
        onSubmit() {
            const result = this.LOGIN_USER(this.userId);
            if (result) {
                this.$router.push('chats');
            }
        }
    },

    computed: {
        ...mapState([
            'error'
        ]),

        isValid: function () {
            console.log(this.userId.length);
            const result = this.userId.length < 3;
            return result ? this.SET_ERRORS("Please enter a valid username") : false;
        }
    }
}
</script>
