
/*
httpRequests.js

This file contains code for 2 HTTP request convenience functions, 1 synchronous,
and the other asynchronous.

Author: Eric James Foster
License: ISC
*/



var log = require('./logger').log,
          require('babel-polyfill');


//TODO: Complete X-Browser support for both functions.

//This is an alias function for XMLHttpRequests.
var xhr = function(url, fd, method) {                                          //DONE:40 Perfect this function.
    var formData;
                                                                               //DONE:60 Build FormData in function from object that user passes as an argument.
    if (fd) {                                                                  //DONE:30 Need async ajax function
      if (Object.getOwnPropertyNames(fd).length === 0) {
        formData = fd;                                                         //log(Object.getOwnPropertyNames(fd).length);
      } else {
        formData = new FormData();
        for (var key in fd) {                                                  //TEST:10 Test this function.
          formData.append(key, fd[key]);
        }
      }
    } else {
      formData = null;
    }
                                                                               //log('fd'); log(formData);
  var m = method || 'get';
  var data = fd || null;
  var val;

  var ajax = function() {
      var ajax = new XMLHttpRequest();

      ajax.onloadend = function() {
        if (ajax.status === 200) {
          val = this.response;
        }
      };
      ajax.open(m, url, false);
      ajax.send(formData);
  };
  ajax();
  val = JSON.parse(val);

  return val;
};


var ajax = function(url, fd, callback, method) {                               //TEST:20 Test this function.
  var formData;

    if (fd) {
      if (Object.getOwnPropertyNames(fd).length === 0) {
        formData = fd;                                                         //log(Object.getOwnPropertyNames(fd).length);
      } else {
        formData = new FormData();
        for (var key in fd) {
          formData.append(key, fd[key]);
        }
      }
    } else {
      formData = null;
    }
                                                                               //log('fd'); log(formData);
  var m = method || 'post';
  var data = fd;
  var val;
  var req = new XMLHttpRequest();

  req.onloadend = function() {
    if (req.status === 200) {
      var response = JSON.parse(this.response);
      callback(response);
    }
  };
  req.open(m, url);
  req.send(formData);
};



module.exports = {
                 ajax: ajax,
                  xhr: xhr
                           }
