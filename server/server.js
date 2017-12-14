const express = require('express');
const port = process.env.PORT || 8080;
const server = express();
const path = require('path');

server.use(express.static(__dirname + './../client/dist'));

server.get('*', (req, res)=>{

    res.sendFile(path.join(__dirname + './../client/dist/index.html'));
});

server.listen(port, ()=>{

    console.log('Magic happens at ' + port);
});