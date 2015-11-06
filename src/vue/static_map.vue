<template lang="jade">
    .static-map
        .internal-map(v-el:map-day)
        .internal-map(v-el:map-night)
</template>

<style lang="less">
    .internal-map {
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        filter: blur(4px);
    }
</style>

<script>
    import GoogleMapsAPI from "googlemaps";

    const DEFAULT_LOCATION = "Barcelona"
    const MAX_SIZE = 640;

    export default {
        props: ["location"],

        created () {
          this.mapsAPI = new GoogleMapsAPI({key: require('keys.json').google});
        },

        ready () {
            let baseMapParams = {
                center: DEFAULT_LOCATION,
                zoom: 15,
                size: `${MAX_SIZE}x${MAX_SIZE}`,
                maptype: 'roadmap',
                style: []
            };
            let dayURL = this.mapsAPI.staticMap(baseMapParams);
            let nightURL = this.mapsAPI.staticMap(baseMapParams);

            this.$els.mapDay.style['background-image'] = `url(${dayURL})`;
            this.$els.mapNight  .style['background-image'] = `url(${nightURL})`;
        }
    }
</script>
