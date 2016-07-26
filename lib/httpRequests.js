
/*
httpRequests.js

This file contains code for 2 HTTP request convenience functions, 1 synchronous,
and the other asynchronous.

Author: Eric James Foster
License: ISC
*/


//TODO:30 reWrite 'await' version of xhr().

import { log } from './logger';





//DONE:20 Complete X-Browser support for both functions.

//This is an alias function for XMLHttpRequests.
var xhr = function(url, fd, method) {                                          //DONE:80 Perfect this function.
    var formData;
                                                                               //DONE:100 Build FormData in function from object that user passes as an argument.
    if (fd) {                                                                  //DONE:70 Need async ajax function
      if (Object.getOwnPropertyNames(fd).length === 0) {
        formData = fd;                                                         //log(Object.getOwnPropertyNames(fd).length);
      } else {
        formData = new FormData();
        for (var key in fd) {                                                  //TEST:50 Test this function.
          formData.append(key, fd[key]);
        }
      }
    } else {
      formData = null;
    }
                                                                               //log('fd'); log(formData);
  var m = method || 'get';
  // var data = fd || null;
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

  return val;
};


var ajax = function(url, fd, callback, method) {                               //TEST:60 Test this function.
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
  var m = method || 'get';
  if (formData !== null) {
    m = 'post';
  }
  // var data = fd;
  var val;
  var req = new XMLHttpRequest();

  req.onloadend = function() {
    if (req.status === 200) {
      var response = this.response;
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
