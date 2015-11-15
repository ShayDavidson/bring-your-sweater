<template lang="jade">
    .instafeed
        div.polaroid(v-for="item in items", class="polaroid-number-{{$index}}")
            img(:src="item.imgURL")
</template>

<style lang="less">
    @import (reference) "~variables.less";
    @import (reference) "~mixins.less";

    @polaroid-size: 4em;

    .instafeed {
        position: relative;
        width: 100%;
        height: 100%;

        .polaroid {
            width: @polaroid-size;
            height: @polaroid-size;
            position: absolute;
            top: 0;
            left: 0;
            padding: 0.25em;
            border-radius: 0.1em;
            background-color: @color-white;
            .base-shadow();

            img {
                width: @polaroid-size;
                height: @polaroid-size;
            }
        }
    }
</style>

<script>
    import _ from "underscore";
    import Promise from "bluebird";
    import Geocoder from "google-geocoder";
    import URI from "urijs";
    import jsonp from "jsonp";

    // workaround for the JSONP lib so it can promisified.
    let JSONP = {request: jsonp};
    Promise.promisifyAll(JSONP);
    Promise.promisifyAll(Geocoder);

    const INSTAGRAM_BASE_URI = "https://api.instagram.com/v1/media/search";

    export default {
        props: ["location"],

        data () {
            return {
                items: [] // items are objects with these properties: `imgURL`.
            }
        },

        watch: {
            location (location) {
                if (_.isEmpty(location)) return;

                return this.geocoder.findAsync(location).then((data) => {
                    if (data.length == 0) return;

                    let geo = data[0].location;
                    let url = URI(INSTAGRAM_BASE_URI).query({
                        client_id: require("keys.json").instagram,
                        lat: geo.lat,
                        lng: geo.lng
                    });
                    return JSONP.requestAsync(url.toString()).then((results) => {
                        let items = _.map(results.data, (result) => {
                            return {
                                imgURL: result.images.standard_resolution.url
                            }
                        });
                        this.items = _.first(items, 8);
                    });
                });
            }
        },

        created () {
            this.geocoder = Geocoder({key: require("keys.json").google});
        }
    }
</script>
