var express = require("express");
var app = express();

app.use(express.static(__dirname+"/assets"));

app.get("/",  (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.get("/about",  (req, res)=>{
    res.sendFile(__dirname+"/about.html");
});

app.listen(3000, ()=>{
    console.log("server running");
    
})