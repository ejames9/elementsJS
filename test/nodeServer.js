var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic('./')).listen(8096);

console.log('Server Running at 127.0.0.1:8096 MuthaFucka!');
console.log(__dirname);
