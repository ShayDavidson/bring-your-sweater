require('../scss/index.scss')

let Vue = require('vue')
let App = require('app.vue')

new Vue({
  el: 'body',
  components: {
    app: App
  }
});
