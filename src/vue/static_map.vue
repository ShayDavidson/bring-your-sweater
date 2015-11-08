<template lang="jade">
    .static-map
        .internal-map(v-el:map, :style="{ backgroundImage: 'url(' + mapURL + ')' }")
</template>

<style lang="less">
    .internal-map {
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        filter: blur(6px);
    }
</style>

<script>
    import GoogleMapsURL from "google-maps-image-api-url";
    import _ from "underscore"

    const DEFAULT_LOCATION = _.sample(require("default_locations.json"));
    const MAX_SIZE = 640;
    const ZOOM = 10;

    export default {
        props: ["location"],

        computed: {
            mapURL () {
                let params = {
                    center: this.location ? this.location : DEFAULT_LOCATION
                };
                return GoogleMapsURL(Object.assign(params, this.baseMapParams));
            }
        },

        created () {
            this.baseMapParams = {
                key: require("keys.json").google,
                zoom: ZOOM,
                size: `${MAX_SIZE}x${MAX_SIZE}`,
                maptype: "roadmap"
            }
        }
    }
</script>
