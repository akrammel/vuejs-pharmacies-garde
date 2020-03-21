var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));

app.get('/', function(req,res){
   res.sendFile('index.html', {root: __dirname})
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
