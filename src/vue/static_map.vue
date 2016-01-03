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
        pointer-events: none;
        user-select: none;
        filter: blur(5px) brightness(85%);
    }
</style>

<script>
    import _ from "underscore";
    import GoogleMapsURL from "google-maps-image-api-url";

    const DEFAULT_LOCATION = _.sample(require("default_locations.json"));
    const MAX_SIZE = 640;
    const ZOOM = 10;
    const ROAD_COLOR = "0xFFAEAE";

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
                style: [
                    `feature:road.highway|color:${ROAD_COLOR}`,
                     "feature:road|element:labels|visibility:off",
                     "feature:all|element:labels|visibility:off"
                 ],
                size: `${MAX_SIZE}x${MAX_SIZE}`,
                maptype: "roadmap"
            }
        }
    }
</script>
