<template lang="jade">
    .prefix-input-field
        .prefix-input-field-prefix {{prefix}}
        span.prefix-input-field-span
            input(
                v-model="val"
                v-el:input
                debounce="500"
                type="text"
                placeholder="..."
            )
</template>

<style lang="less">
    @import (reference) "~variables.less";
    @import (reference) "~mixins.less";

    .prefix-input-field {
        background-color: @color-white;
        border-radius: @base-border-radius;
        padding: @base-inner-padding;
        border: 0.125em solid @color-pink;
        box-sizing: border-box;
        white-space: nowrap;
        display: inline-flex;
        width: 100%;

        .prefix-input-field-prefix {
            display: inline-block;

            &:after {
                display: inline-block;
                content: " ";
            }
        }

        .prefix-input-field-span {
            flex-grow: 100;

            input {
                background-color: transparent;
                border: none;
                outline: none;
                width: 100%;
            }
        }
    }
</style>

<script>
    export default {
        props: ["prefix", "focus", "val"],

        ready() {
            if (this.focus) this.$els.input.focus()
        }
    }
</script>
