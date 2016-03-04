
/*
utilities.js

This file contains various functions for the library, either public or not,
that don't fit into any other module.

Author: Eric James Foster
License: ISC
*/



require('babel-polyfill');

//TODO: browser detection functionality, noop(), merge(), toggle().


/*This function copies the prototype object of a superConstructor to the prototype object
of a constructor. It functions just like nodes' util.inherits function, it copies methods only,
not internal properties.*/
var proto = (construct, superConstruct)=> {
    construct.prototype = Object.create(superConstruct.prototype);
    construct.prototype.constructor = construct;
    return construct;
};


/*This convenience function sets imported module function names as global variables, so that
the module variable doesn't need to preface every function.*/
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


//This function will alternate function calls depending on the value of a global flag.
var toggle = function(onFunc, offFunc) {
  window.toggleFlag = true;

  if (toggleFlag) {
    onFunc();
    toggleFlag = false;
  } else {
    offFunc();
    toggleFlag = true;
  }
};




module.exports = {
                  functions: functions,
                     toggle: toggle,
                      sleep: sleep,
                      proto: proto
                                 };
