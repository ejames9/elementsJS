
/*
miscellaneous.js

This file contains various functions for the library, either public or not,
that don't fit into any other module.

Author: Eric James Foster
License: ISC
*/



require('babel-polyfill');



//This convenience function sets imported module function names as global variables, so that
//the module variable doesn't need to preface every function.
var functions = function(funcs, module) {                                      //TEST:40 Test this with other node_modules.
  var context = module || this;

  if (Array.isArray(funcs)) {
    funcs.forEach(function(func) {
      var evil = new Function('window.' + func + ' = ' + 'this.' + func + ';');
          evil.call(context);
    }, context);
  } else {
    (function() {
      var evil = new Function('window.' + funcs + ' = ' + 'this.' + funcs + ';');
          evil.call(context);
    }).apply(context);
  }
};

//This practically useless function will lock up the browser for a preset amount of time.
var sleep = function(milliseconds) {
  var start = new Date().getTime();
  while (true) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};



module.exports = {
                  functions: functions,
                      sleep: sleep
                                  }
