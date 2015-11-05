<template lang="jade">
    .input-container
        prefix-input-field(
            class="location-input"
            prefix="I'm traveling to "
            focus=true
        )

</template>

<style lang="less">
    @import (reference) "../less/mixins.less";

    body, html {
        .base-font();
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: #eee;
        box-sizing: border-box;
    }
</style>

<script>
    import PrefixInputField from "./prefix_input_field.vue"

    export default {
      components: {
        PrefixInputField
      }
    }
</script>
