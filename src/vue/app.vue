<template lang="jade">
    .inputs-container
        prefix-input-field(
            class="location-input"
            prefix="I'm traveling to "
            focus=true
        )

</template>

<style lang="less">
    @import (reference) "../less/variables.less";
    @import (reference) "../less/mixins.less";

    body, html {
        .base-font();
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #eee;
        box-sizing: border-box;
    }

    .inputs-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        > div {
            width: @base-content-width;
        }
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
