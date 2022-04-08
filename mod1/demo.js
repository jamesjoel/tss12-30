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

var name = "Mohit Patel";
var str = "Invoice Number : "+b+" \nCustomer Name : "+name;


fs.writeFile("hello.txt", str, function(){
    console.log("WELCOME");
});