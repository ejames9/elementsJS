/*
Simple Node.js Developement Server.
Author: Eric Foster
*/


const
    connect = require('connect'),
    server  = require('serve-static');
    
//Create/Connect to Server, Listen on port 8096
connect().
       use(server('./', {'index': '404.html'})).
       listen(8096);

//Log Success to the console.
console.log(
  'Server Running at 127.0.0.1:8096 MuthaFucka!'
);
