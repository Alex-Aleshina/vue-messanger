<template>
<div>
    <div>
        <h3>Messages</h3>
        <dialogMes />
        <dialogForm />
    </div>
    {{userid}}
</div>
</template>

<script>
import dialogMes from './v-dialog-messages'
import dialogForm from './v-dialog-form'

export default {
    name: "v-dialog",
    props: {
        userid: String
    },
    components: {
        dialogMes,
        dialogForm
    }
}
</script>

<style lang="scss">
</style>
