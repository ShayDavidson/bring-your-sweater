<template lang="jade">
    .prefix-input-field-wrapper
        .prefix-input-field-prefix {{prefix}}
        input(
            v-el:input
            type="text"
            class="prefix-input-field"
            placeholder="..."
        )
</template>

<style lang="less">
    @import (reference) "../less/variables.less";
    @import (reference) "../less/mixins.less";

    .prefix-input-field-wrapper {
        background-color: gray;
        border-radius: @base-border-radius;
        padding: @base-inner-padding;
        box-sizing: border-box;

        .prefix-input-field-prefix {
            display: inline-block;

            &:after {
                display: inline-block;
                content: " ";
            }
        }

        .prefix-input-field {
            .base-font();
            background-color: transparent;
            border: none;
            outline: none;
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
