/**
 * Created by Vincent on 15/05/2014.
 */

var express = require("express");
var cmdConf = require("cmd-conf");
var fs      = require("fs");

var config = cmdConf.getParameters();
var imagePath = __dirname+"/../public/img/ksp.jpg";

app = express();

app.set("views", __dirname+"/views/");
app.use(express.static(__dirname+"/../public"));

app.get("/direct",function(req, res){
    fs.readFile(imagePath, function(err, data){
        var image = "data:image/jpg;base64,"+data.toString("base64");
        res.render("index.ejs", {image: image});
    });
});

app.listen(config.port);