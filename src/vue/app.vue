<template lang="jade">
    body
        static-map(:location.sync="location")
        .center-container
            instafeed(:location.sync="location")
        .center-container
            prefix-input-field(:val.sync="location", prefix="I'm traveling to ", focus=true)
</template>

<style lang="less">
    @import "~reset.less";
    @import (reference) "~variables.less";
    @import (reference) "~mixins.less";

    body, input {
        .base-font();
        background-color: @color-gray;
    }

    .center-container {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        > div {
            display: inline-flex;
        }

        .prefix-input-field {
            width: @base-content-width;
        }
    }

    .map {
        width: 100%;
        height: 100%;
    }
</style>

<script>
    import StaticMap from "static_map.vue";
    import PrefixInputField from "prefix_input_field.vue";
    import Instafeed from "instafeed.vue";

    export default {
        data () {
            return {
                location: null
            };
        },

        components: {
            PrefixInputField,
            StaticMap,
            Instafeed
        }
    }
</script>
