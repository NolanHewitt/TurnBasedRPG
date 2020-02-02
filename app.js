var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/gameIntro",function(req,res){
  res.sendFile(path + "gameIntro.html");
});

router.get("/game",function(req,res){
  res.sendFile(path + "game.html");
});

router.get("/battle",function(req,res){
  res.sendFile(path + "battle.html");
});

router.get("/lose",function(req,res){
  res.sendFile(path + "lose.html");
});

router.get("*",function(req,res){
  res.sendFile(path + "index.html");
});

app.use(express.static(__dirname + '/public'));
app.use("/",router);

app.listen(process.env.PORT || 3000,function(){
  console.log("Live at Port 3000");
});
