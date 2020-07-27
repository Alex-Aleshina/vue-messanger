<template>
<div class="login-form">
    <h3 class="text-center">Chat Login</h3>
    <div>
        <form>
            <input type="email" v-model="email" placeholder="Enter your email" autocomplete="off" required @keyup.enter="onSubmit">
            <input type="password" v-model="password" placeholder="Enter your password" autocomplete="off" required @keyup.enter="onSubmit">
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
    name: 'auth-form',
    data() {
        return {
            email: '',
            password: '',
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
            const result = this.LOGIN_USER({
                email: this.email, 
                password: this.password
            });
            
            if (result) {
                this.$router.push('contacts');
            }
        }
    },

    computed: {
        ...mapState([
            'error'
        ]),

        isValid: function () {
            const result = this.email.length < 3;
            return result ? this.SET_ERRORS("Please enter a valid username") : false;
        }
    }
}
</script>
