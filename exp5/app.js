var  express = require("express");
var app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{

    var obj = { title : "I-Phone", price  :  25000.00, image : "2.jpg", logo : "Flipkart.com" };

    res.render("home", obj);
})



app.get("/about", (req, res)=>{

    var a = "Indore";
    var obj = { city : a, name : "rohit" };
    
    res.render("about", obj);
})



app.listen(3000, ()=>{
    console.log("server running");
})