<template>
<div class="auth-form">
    <h3>Chat Login</h3>
    <div>
        <form>
            <input type="email" v-model="email" placeholder="Enter your email" autocomplete="off" required @keyup.enter="onSubmit">
            <input type="password" v-model="password" placeholder="Enter your password" autocomplete="off" required @keyup.enter="onSubmit">
        </form>
        <span>{{error}}</span>
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
            'LOGIN_USER'
        ]),
        ...mapMutations([
            'SET_ERRORS'
        ]),
        onSubmit() {
            if (this.email.length > 4 && this.password.length > 5) {
                this.LOGIN_USER({
                    email: this.email,
                    password: this.password
                });
                this.$router.push('contacts');
            } else {
                this.SET_ERRORS('Please input correct value')
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
