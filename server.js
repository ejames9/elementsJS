var connect = require('connect');
var serveStatic = require('serve-static');

connect()
      .use(serveStatic('./'))
      .listen(8099);

console.log('Server Running at 127.0.0.1:8099 MuthaFucka!');
