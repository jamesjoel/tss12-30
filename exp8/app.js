const express = require("express");
const app = express();
const routes = require("./config/Routes");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded());

app.use(routes);


app.listen(3000, ()=>{
    console.log("Server running");
})