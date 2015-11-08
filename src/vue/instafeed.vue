<template lang="jade">
    .instafeed
</template>

<style lang="less">
    .instafeed {
    }
</style>

<script>
    import _ from "underscore";
    import Instagram from "instagram-node-lib";

    export default {
        props: ["location"],

        watch: {
            location (location) {
                console.log(location)
            }
        },
        // computed: {
        //     feed: () {
        //         Instagram.media.search({ lat: 48.858844300000001, lng: 2.2943506 });
        //     }
        // },

        created () {
            Instagram.set('client_id', 'YOUR-CLIENT-ID');
        }
    }
</script>
