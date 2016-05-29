
const execFile  = require('child_process').fork;
const spawn     = require('child_process').spawnSync;
const path      = require('path');
const phantomjs = require('phantomjs-prebuilt');
var phantomJS   = phantomjs.path;

const wd = '~/Documents/JavaScript/elementsJS/';

const arg = [
  path.join(__dirname, 'elementsJSLibTests.js')
];
console.log(__dirname);
console.log('what the fuck');
// execFile(binPath, [], function(err, stdout, stderr) {
//   if (err) {
//     throw err;
//   } else {
//     console.log(stdout);
//   }
// });

//
// var phantomJS = execFile(__dirname + '/p/phantomPlay.js', {execPath: phantomJS, execArgv: [__dirname + '/p/phantomPlay.js']});
var phantomJS = spawn(phantomJS, [__dirname + '/p/phantomPlay.js']);

// console.log('-------------------' + phantomJS.output[1] + '--------------------------');
console.log(typeof phantomJS.output[1]);
var str = String(phantomJS.stdout);
console.log(typeof str);



var    _re = /\{[\w\s ! '" # S % & ' ( ) * + , - . / : ; < = > ? @ \[ / \] ^ _ { | } ~]*\}/im;
    obj = _re.exec(str);



    obj = JSON.parse(obj[0]);

    // console.log(obj.bool);
    // console.log(obj.title);
    // console.log(obj.el);



// var phantomData = JSON.parse(phantomJS.stdout);
    // for (key in phantomData) {
    //   console.log(key + ': ' + phantomData[key]);
    // }
    // console.log(phantomData.bool);
// var phantomJS = spawn(phantomJS, ['phantomPlay.js']);
//     phantomJS.stdout.pipe(process.stdout);
//     // phantomJS.stdout.on('data', (data)=> {
//     //   console.log(data);
//     // });




    // console.log(phantomJS.toString('utf8')[0]);
    // phantomJS.stdout.pipe(process.stdout);
    // phantomJS.stdout.pipe(process.stderr);
// console.dir(process.stdout);
// console.log(phantomJS.stdout);
    // phantomJS.stdout.on('data', function(data) {
    //   console.log(data)
    // });

// phantomJS.on('close', function(code) {
//   console.log('child process exited with code ${code}');
// });
// phantomJS.on('exit', function(code) {
//   console.log('child process exited with code ${code}');
// });

console.log('shit');
// console.dir(phantomJS);
