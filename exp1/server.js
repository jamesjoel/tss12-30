var express = require("express");
var app = express();
var config = require("./config");


// var port = config.port;

app.listen(config.port, function(){
    console.log("server running");
}); // creating a virtual server with port : 3000