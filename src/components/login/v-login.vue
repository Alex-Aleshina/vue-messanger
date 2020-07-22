<template>
<div class="login">
    <h2>Vue-Messager</h2>
    <p>Created by Vue</p>
    <LoginForm/>
</div>
</template>

<script>
import LoginForm from '@/components/login/v-login-form.vue'

export default {
    name: 'login',
    components: {
        LoginForm
    }
}
</script>

<style>
    .login{
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
