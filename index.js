//jshint esversion:6


const express=require("express");
const bodyparser=require("body-parser");
const mongoose= require("mongoose");
const https = require('https');

const app = express();
const url="https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=HmsAJaV6sOrm3cGHy2KpNHu6WRASid6l";

app.get("/",function(req,res){

  https.get(url, function(response){
    console.log(response.statuscode);
  })
  res.send("server is up.")
})
app.listen(8000,function(){
  console.log("serverup")
})
