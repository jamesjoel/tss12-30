var express = require("express"); // require or call express module
var app = express(); // call the express function
var request = require("request");
  
app.set("view engine", "ejs"); // setting to view engine for our app
app.use(express.static(__dirname+"/assets")); // set complete path for static files like images, css, jquery etc.

// ceate our routes

app.get("/", (req, res)=>{

    request("https://fakestoreapi.com/products", { json : true }, (err, info, data)=>{
        var obj = { product : data };
        res.render("home", obj);
    })





    
});
app.get("/about", (req, res)=>{
    res.render("about");
});
app.get("/contact", (req, res)=>{
    res.render("contact");
});
app.get("/help", (req, res)=>{
    res.render("help");
});
app.get("/teachers", (req, res)=>{

    var data = [
            { 
                name : "Rohit", 
                salary : 5000, 
                age : 22, 
                gender : "male", 
                subject : "Math" 
            },
            { 
                name : "Amar", 
                salary : 5500, 
                age : 24, 
                gender : "male", 
                subject : "Science" 
            },
            { 
                name : "Nidhi", 
                salary : 7000, 
                age : 24, 
                gender : "female", 
                subject : "Hindi" 
            }
    ];

    var obj = { info : data };

    res.render("teachers", obj);
});





app.listen(3000, ()=>{
    console.log("server running");
})