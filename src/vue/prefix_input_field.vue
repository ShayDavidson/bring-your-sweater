<template lang="jade">
    .prefix-input-field-wrapper
        .prefix-input-field-prefix {{prefix}}
        span.prefix-input-field-span
            input.prefix-input-field(
                v-el:input
                type="text"
                placeholder="..."
            )
</template>

<style lang="less">
    @import (reference) "../less/variables.less";
    @import (reference) "../less/mixins.less";

    .prefix-input-field-wrapper {
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
            
            .prefix-input-field {
                .base-font();
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
      props: ["prefix", "focus"],

      ready() {
          this.$els.input.focus()
      }
    }
</script>
