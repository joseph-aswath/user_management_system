const express = require('express');
const route = express.Router()
//const services = require('../services/render'); 


app.get('/index',(req,res)=>{
    res.render('index');
});

app.get('/add-user',(req,res)=>{
    res.render('add_user');  
});

app.get('/update-user',(req,res)=>{
    res.render('update_user');  
});

module.exports = route;