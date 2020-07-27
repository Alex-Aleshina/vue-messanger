<template>
<div class='main-wrapper'>
    
    <router-view />
    <v-bottom-nav />
</div>
</template>

<script>
// import vHeader from './layouts/v-header'
import vBottomNav from '../components/v-bottom-nav'

export default {
    name: "v-main-wrapper",
    components: {
        // vHeader,
        vBottomNav
    },
    props: {},
    data() {
        return {}
    },
    computed: {}
}
</script>