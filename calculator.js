const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//The below code is for normal calculator
app.get('/', function (req, res){
    res.sendFile(__dirname + "/index.html");
  });
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("The result is : "+result);
})

//The below code is for BMI calculator
app.get("/bmiCalculator",function(req,res)
{
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator",function(req,res)
{
    var weight=parseFloat(req.body.Weight);
    var height=parseFloat(req.body.Height);
    var bmi=weight/(height*height);
    res.send("Your BMI is : "+bmi);
})

app.listen(3000, function()
{
    console.log("Server has started");
});