<template>
<div class="login">
    <h2>Vue-Messager</h2>
    <p>Created by Vue</p>
    <LoginForm />

    <h2>If you didn't register</h2>
    <router-link :to="{name: 'signup'}">
        <h3>Sign Up now</h3>
    </router-link>
</div>
</template>

<script>
import LoginForm from '@/components/auth/login-form.vue'

export default {
    name: 'login',
    components: {
        LoginForm
    }
}
</script>

<style>

</style>
