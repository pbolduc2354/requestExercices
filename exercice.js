var request = require('request');
var fs = require('fs');


console.log("downloading...")

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
        throw err;
       })

       .on('response', function (response) {
        console.log('Response status code: ', response.statusCode , ' Response message: ', response.statusMessage , ' Response content type: ', response.headers['content-type']);
       })

       .on('end', function(){
        console.log("download complete!");

       })

       .pipe(fs.createWriteStream('./future.jpg'));

