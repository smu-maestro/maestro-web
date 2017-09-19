import App from './App.vue';
import router from './router/index.js';

//const Parse = require('parse')
Parse.initialize('maestro', "orange");
Parse.serverURL = 'http://maestro.gdn/parse';

var app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
});
