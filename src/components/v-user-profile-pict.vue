<template>
<div>
    <img :src="urlGravatar" alt="profile img" class="profileImg">
</div>
</template>

<script>
import gravatar from 'gravatar'

export default {
    props: {
        email: String
    },
    computed: {
        urlGravatar() {
            var url = gravatar.url(this.email, {
                s: '50',
                d: 'robohash'
            });
            return url
        }
    }
}
</script>
