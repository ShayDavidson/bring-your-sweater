<template lang="jade">
    .instafeed
        div.polaroid(v-for="item in items", class="polaroid-number-{{$index}}")
            img(:src="item.imgURL")
</template>

<style lang="less">
    @import (reference) "~variables.less";
    @import (reference) "~mixins.less";

    @polaroid-size: 4em;
    @polaroid-padding: 0.25em;
    @polaroid-ellipse-width: 41vw;
    @polaroid-ellipse-height: 26vh;
    @polaroid-hover-scale: 1.75;
    @polaroid-z-index: 100;
    
    @number-of-polaroids: 16;

    .instafeed {
        width: 100%;
        height: 100%;

        .polaroid {
            width: @polaroid-size;
            height: @polaroid-size;
            position: absolute;
            box-sizing: border-box;
            margin-top: ~"calc((100vh - @{polaroid-size}) / 2)";
            margin-left: ~"calc((100vw - @{polaroid-size}) / 2)";
            padding: @polaroid-padding;
            background-color: @color-white;
            z-index: @polaroid-z-index;
            cursor: pointer;
            transition: transform 0.1s ease-out;
            .base-shadow();

            img {
                width: @polaroid-size - (@polaroid-padding * 2);
                height: @polaroid-size - (@polaroid-padding * 2);
            }

            .polaroids(@number-of-polaroids);

            .polaroids(@n, @i: 0) when (@i < @n) {
                &.polaroid-number-@{i} {
                    @angle: @i * (2 * pi() / @n);
                    top: @polaroid-ellipse-height * sin(@angle);
                    left: @polaroid-ellipse-width * cos(@angle);
                    transform: rotate(((mod(@i, 2) * 4) - 2) * (mod(@i, 8) - 4deg));
                }
                .polaroids(@n, (@i + 1));
            }

            &:hover {
                transform: scale(@polaroid-hover-scale);
                z-index: @polaroid-z-index + 1;
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

    const NUMBER_OF_POLAROIDS = 16;
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
                        this.items = _.first(items, NUMBER_OF_POLAROIDS);
                    });
                });
            }
        },

        created () {
            this.geocoder = Geocoder({key: require("keys.json").google});
        }
    }
</script>
