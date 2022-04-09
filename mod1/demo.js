var x = require("string-reverse");
var a = x("Rohit Sharma");
// console.log(a);

var rand = require("randomstring");
var b = rand.generate({
    length : 10,
    charset : 'numeric'
});
// console.log(b);

var fs = require("fs");

var name = "rohit";
var age = 25;
var city = "indore";


var str = "hello <br /> indore";


fs.writeFile("home.html", str, function(){
    console.log("WELCOME");
});