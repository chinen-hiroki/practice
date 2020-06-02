//jshint esversion:6

//expressをロード
const express = require("express");

const app = express();

//localhost:3000にアクセスされたときのRespond
app.get("/", function(request, respond){
    respond.send("hello world");
});

//localhost:3000/profileにアクセスされたときのRespond
app.get("/profile", function(request, respond){
    respond.send("My name is Chinen Hiroki.");
});

//listenで待ち受け状態
app.listen(3000, function(){
    console.log("Server started on port 3000");
});
