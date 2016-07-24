/**
 * Created by asankab on 7/10/16.
 */
 exports.sanitize = function(word){
     return word.toLowerCase();
 }

exports.info = function (callback) {
    var https = require('https');

    var options = {
        host: "api.github.com",
        path: "/repos/sayanee/build-podcast",
        method: "GET",
        headers: {
            'User-Agent': 'sayanee'
        }
    };

    var str = "";

    https.request(options, function (response) {
        response.on('data', function(data){
            str += data;
        })

        response.on('end', function(){
            console.log(str);
            callback(JSON.parse(str));
        })

        response.on('error', function(){
            console.log("error");
            callback("error");
        })
    })
        .end();
}