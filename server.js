const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
const mongodb = require('mongodb');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const app = express();

dotenv.config({path:'config.env'});

const PORT = process.env.PORT || 8080;

//log requests 
app.use(morgan('tiny'));

//parse requests to body parser
app.use(bodyparser.urlencoded({extended: true}));

//set view engine 
app.set("view engine","ejs"); 
// app.set("views",path.resolve(__dirname,"views/ejs"));

//load assets //attaching or linking css files //attaching js files
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));


app.get('/',(req,res)=>{
    //res.send("user management system");
    res.render('index');  
});

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)});


/*
http.createServer(function(req,res){
    res.writeHead(200,"Content-Type:text/HTML");
    res.end("hello world ! the server is active!!");
}).listen('8080');
*/