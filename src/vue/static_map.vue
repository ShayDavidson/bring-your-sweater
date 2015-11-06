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
    import GoogleMapsAPI from "googlemaps";

    const DEFAULT_LOCATION = "Barcelona";
    const MAX_SIZE = 640;

    export default {
        props: ["location"],

        computed: {
            mapURL () {
                let baseMapParams = {
                    center: this.location ? this.location : DEFAULT_LOCATION,
                    zoom: 10,
                    size: `${MAX_SIZE}x${MAX_SIZE}`,
                    maptype: "roadmap"
                };
                return this.mapsAPI.staticMap(baseMapParams);
            }
        },

        created () {
          this.mapsAPI = new GoogleMapsAPI({key: require('keys.json').google});
        }
    }
</script>
