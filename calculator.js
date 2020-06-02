const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//body-parserの使用
app.use(bodyParser.urlencoded({extended: true}));

//index.htmlでrespondする
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

//index.htmlのフォームでpostされた部分
app.post("/", function(req,res){

    //bodyの中のnum1,nim2を取得する
    //Number()で値を数値に
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
    console.log("true");
});

app.listen(3000);