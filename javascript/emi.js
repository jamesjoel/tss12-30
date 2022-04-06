var salary = 16000;

var loan = 125000;
var year = 2;
var rate = 8;

var intrest = loan*year*rate/100;
var total = loan+intrest;

var months = year*12;

var emi = total/months;

console.log(emi);

var salary_40_percent = salary*40/100;

if(emi <= salary_40_percent)
{
    console.log("yes");
}
else{
    console.log("no");
}



