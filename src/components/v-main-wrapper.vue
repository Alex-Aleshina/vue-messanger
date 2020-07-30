<template>
<div class='main-wrapper'>
    <vHeader />
    <router-view />
    <v-bottom-nav />
</div>
</template>

<script>
import vHeader from '../components/v-header-nav'
import vBottomNav from '../components/v-bottom-nav'

export default {
    name: "v-main-wrapper",
    components: {
        vHeader,
        vBottomNav
    }
}
</script>
