
app.get("/", function(req, res){
    //responseとして、fileをsend
    res.sendfile(__dirname + "/index.html");
});