/* Example code only! */
Parse.initialize("maestro");
Parse.serverURL = 'http://maestro.dev/parse';

var TestObject = Parse.Object.extend("TestObject");
var obj = new TestObject();

var app = new Vue({
    el: '#app',
    data: {
        message: 'Vue Works!'
    },
    mounted: function () {
        obj.save({
            name: 'It works!'
        },{
            success: (obj) => {
                console.log('save success');
            },
            error: (obj, err) => {
                console.error('save error:');
                console.error(err);
            }
        });
    }
})
