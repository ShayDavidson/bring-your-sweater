<template lang="jade">
    .input-container
        prefix-input-field(
            class="location-input"
            prefix="I'm traveling to "
        )

</template>

<style lang="less">
    @import "../less/variables.less";

    body, html {
        font-size: @base-font-size;
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
