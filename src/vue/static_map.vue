<template lang="jade">
    .static-map
        .internal-map(v-el:map, :style="mapBackground")
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
            mapBackground () {
                let baseMapParams = {
                    center: this.location ? this.location : DEFAULT_LOCATION,
                    zoom: 10,
                    size: `${MAX_SIZE}x${MAX_SIZE}`,
                    maptype: "roadmap"
                };
                let mapURL = this.mapsAPI.staticMap(baseMapParams);
                return `background-image: url('${mapURL}')`;
            }
        },

        created () {
          this.mapsAPI = new GoogleMapsAPI({key: require('keys.json').google});
        }
    }
</script>
