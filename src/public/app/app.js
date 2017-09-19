import App from './App.vue';
import router from './router/index.js';

/* Example code only! */
Parse.initialize("maestro", "orange");
Parse.serverURL = 'http://maestro.dev:3308/parse';

// var TestObject = Parse.Object.extend("TestObject");
// var obj = new TestObject();

var app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    mounted: function () {
        // obj.save({
        //     name: 'It works!'
        // },{
        //     success: (obj) => {
        //         console.log('save success');
        //     },
        //     error: (obj, err) => {
        //         console.error('save error:');
        //         console.error(err);
        //     }
        // });
    }
});
