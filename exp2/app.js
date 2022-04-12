var express = require("express");
var app = express();

var config = require("./config");

app.get("/contact", function(req, res){
    res.sendFile(__dirname+"/contact.html");
})

app.get("/login", function(req, res){
    res.sendFile(__dirname+"/login.html");
})

app.get("/", function(req, res){
    res.sendFile(__dirname+"/home.html");
})

app.get("/about", function(req, res){
    // console.log(__dirname);
    res.sendFile(__dirname+"/about.html");
});


app.get("/help", function(req, res){
    res.sendFile(__dirname+"/help.html");
})






// localhost:3000
app.listen(config.port, function(){
    console.log("server running");
});

