const http = require('http');
const express = require('express');
const mongodb = require('mongodb');

http.createServer(function(req,res){
    res.writeHead(200,"Content-Type:text/HTML");
    res.end("hello world ! the server is active!!");
}).listen('8080');