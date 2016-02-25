
/*
events.js

This file contains code for the librarys' convenience EventListener
alias functions.

Author: Eric James Foster
License: ISC
*/



var log = require('./logger').log,
          require('babel-polyfill');



//Function for setting event listeners.
var on = function(event, el, callback) {
  if (typeof el === 'string') {
    if (el[0] === '#') {
      el = el.slice(1);
      return document.getElementById(el).addEventListener(event, callback);
    } else if (el[0] === '.') {
      el = el.slice(1);
      return document.getElementsByClassName(el)[0].addEventListener(event, callback);
    } else {
      return document.getElementsByTagName(el).addEventListener(event, callback);
    }
  } else {
    return el.addEventListener(event, callback);
  }
};

//Function for removing event listeners.
var off = function(event, el, callback) {
  if (typeof el === 'string') {
    if (el[0] === '#') {
      el = el.slice(1);
      return document.getElementById(el).removeEventListener(event, callback);
    } else if (el[0] === '.') {
      el = el.slice(1);
      return document.getElementsByClassName(el)[0].removeEventListener(event, callback);
    } else {
      return document.getElementsByTagName(el).removeEventListener(event, callback);
    }
  } else {
    el.removeEventListener(event, callback);
  }
};


var once = function(event, el, callback) {                                     //DONE:20 Finish once function.
                                                                               //TEST:30 Test once function.
  var callBack = function() {
    callback();
    document.getElementById(el).removeEventListener(event, callBack);
  };

  if (typeof el === 'string') {
    if (el[0] === '#') {
      el = el.slice(1);
      return (function() {
        document.getElementById(el).addEventListener(event, callBack);
      }) ();
    } else if (el[0] === '.') {
      el = el.slice(1);
      return (function() {
        document.getElementsByClassName(el)[0].addEventListener(event, callBack);
      }) ();
    } else {
      return (function() {
        document.getElementsByTagName(el).addEventListener(event, callBack);
      }) ();
    }
  } else {
    return (function() {
      el.addEventListener(event, callBack);
    }) ();
   }
};



module.exports = {
            on: on,
           off: off,
          once: once,
          }
