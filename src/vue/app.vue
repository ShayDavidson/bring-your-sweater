<template lang="jade">
    .inputs-container
        prefix-input-field(
            :val.sync="location"
            prefix="I'm traveling to "
            focus=true
        )

</template>

<style lang="less">
    @import "~reset.less";
    @import (reference) "~variables.less";
    @import (reference) "~mixins.less";

    body, input {
        .base-font();
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
    import PrefixInputField from "prefix_input_field.vue"

    export default {
        data () {
            return {
                location: ''
            }
        },
        components: {
            PrefixInputField
        }
    }
</script>
