const express = require("express");
const app = express();
const Routes = require("./config/Router");


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded());

app.use(Routes);


app.listen(3000, ()=>{
    console.log("server running");
})