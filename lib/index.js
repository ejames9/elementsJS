/*
Elements.js

A JavaScript DOM manipulation/Alias function Library.
This is the index file for the library.

Author: Eric James Foster
EMail: maniphestival@gmail.com
License: MIT
Version: 1.0.0
URL: ""
*/



//TODO: Complete X-Browser 'style' functions, and implement X-Browser compatibility in EventListener functions.


var element = require('./Element'),
   requests = require('./httpRequests'),
     events = require('./events'),
     consol = require('./logger'),
       misc = require('./miscellaneous'),
        dom = require('./DOM'),
              require('babel-polyfill');




//This convenience function sets imported module function names as global variables, so that
//the module variable doesn't need to preface every function.
var functions = function(funcs, module) {                                      //TEST:40 Test this with other node_modules.
  return misc.functions(funcs, module);
};

//This function queries the dom, getting one element for each query (i.e. class/tags), creates
//an Element object with it and returns it, so that it may be easily styled.
var css = function(l) {
  return dom.css(l);
};


//Create element alias function.
var make = function(l, tag) {
  return dom.make(l, tag);
};


//DOM querying alias function. Will automatically narrow class or tag queries down to one result. It will not return an array.
var dom = function(l) {
  return dom.dom(l);
};


//DOM querying function, same as above, but it will return an array if a tag or class name are given as argument.
var query = function(l) {
  return dom.query(l);
};


//Function for appending elements to other elements.
var put = function(el, mom) {
  return dom.put(el, mom);
};


//Function for deleting elements from the DOM tree.
var kill = function(el) {
  return dom.kill(el);
};


//Function for setting event listeners.
var on = function(event, el, callback) {
  return events.on(event, el, callback);
};


//Function for removing event listeners.
var off = function(event, el, callback) {
  return events.off(event, el, callback);
};


var once = function(event, el, callback) {                                     //DONE:20 Finish once function.
  return events.once(event, el, callback);                                     //TEST:30 Test once function.
};


//console.log alias function.
var log = (text, style, tyme)=> {
  return consol.log(text, style, tyme);
};


//console.error alias function.
var err = (text, tyme)=> {
  return consol.err(text, tyme);
};


//console.info alias function.
var info = (text, tyme)=> {
  return consol.info(text, tyme);
};



//console.warn alias function.
var warn = (text, tyme)=> {
  return consol.warn(text, tyme);
};



//This practically useless function will lock up the browser for a preset amount of time.
var sleep = function(milliseconds) {
  return misc.sleep(milliseconds);
};



//This is a synchronous alias function for XMLHttpRequests.
var xhr = function(url, fd, method) {
  return requests.xhr(url, fd, method);
};



//This is an asynchronous alias function for XMLHttpRequests.
var ajax = function(url, fd, callback, method) {
  return requests.ajax(url, fd, callback, method);
};




module.exports = {
             make: make,
              dom: dom,
        functions: functions,
            query: query,
              put: put,
             kill: kill,
               on: on,
              off: off,
              css: css,
            style: style,
              log: log,
              xhr: xhr,
             ajax: ajax
                 };
//DONE:0 functions: err(), info(), warn().
//DONE:90 Complete all standalone style functions.
