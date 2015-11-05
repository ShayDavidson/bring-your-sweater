<template lang="jade">
    input(
        type="text"
        class="prefic-input-field"
        value="{{prefix}}"
    )
</template>

<style lang="less">
    .prefix-input-field {

    }
</style>

<script>
    export default {
      props: ['prefix']
    }
</script>
