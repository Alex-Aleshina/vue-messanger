<template>
<div class="login-form">
    <h2 class="text-center">Registration form</h2>
    <div>
        <form>
            <input type="email" v-model="email" placeholder="Enter your email" autocomplete="off" required @keyup.enter="signUp">
            <input type="password" v-model="password" placeholder="Enter your password" autocomplete="off" required @keyup.enter="signUp">
            <input type="text" v-model="userName" placeholder="Enter your user name" autocomplete="off" required @keyup.enter="signUp">
        </form>

        <div>
            <button type="submit" class="btn" @click="signUp()">
                Sign Up
            </button>
        </div>
    </div>
    <h3>Or login</h3>
    <router-link :to="{name: 'login'}">
        <h3>Login now</h3>
    </router-link>
</div>
</template>

<script>
import {
    mapActions,
    mapState,
    mapMutations
} from 'vuex'

export default {
    name: 'signup-form',
    data() {
        return {
            email: '',
            password: '',
            userName: ''
        }
    },
    methods: {
        ...mapActions([
            'SET_ERRORS',
            'SIGN_UP'
        ]),
        ...mapMutations([
            'POST_ERR'
        ]),
        signUp() {
            this.SIGN_UP({
                email: this.email,
                userName: this.userName,
                password: this.password
            });
            this.$router.push('/');
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
