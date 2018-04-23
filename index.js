/*
Akses expressJS di-assign ke variable express
Membuat instant aplikasi berbasis express bernama app
*/
var express = require("express");
var app = express();

/*
Routing untuk root. Jika request url hanya '/' alias root, response untuk browser adalah sebuah string 'working!'.
*/
app.get('/', function(req,res) {
    res.send('working!');
});

/*
Aplikasi app berjalan dengan port 3000 dan setelah port diinisiasi, ke system console dikirim sebuah string, "REST Server running on port 3000"
*/
app.listen(3000, function() {
    console.log('REST Server running on port 3000');
});