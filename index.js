const express = require('express');
const app = express();
 const port = 8000;
 const passport = require('passport');
const passportJWT = require('./config/passportJWT');
const db = require("./config/mongoose");


// middleware for parsing
 app.use(express.urlencoded());

 

 app.use('/',require('./routes/index'))

// server running on port 8000S
 app.listen(8000,function(err,con){
    if(err){
        console.log('error in connecting', err);
    }
    else{
        console.log('Connected Succesfuliy');
    }
 })