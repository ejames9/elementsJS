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


var element = require('./Element.js'),
     colors = require('clivi'),
    consol = require('./logger'),
              require('babel-polyfill');



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



var css = function(l) {
  if (l[0] === '#') {
    l = l.slice(1);
    var elem = document.getElementById(l);
    return new element(elem);
  } else if (l[0] === '.') {
    l = l.slice(1);
    var ele = document.getElementsByClassName(l)[0];
    return new element(ele);
  } else {
    var e = document.getElementsByTagName(l)[0];
    return new element(e);
  }
};


//Create element alias function.
var make = function(l, tag) {
  this.log(arguments.callee);
  var t = tag || 'div',
     el = document.createElement(t);
  if (l[0] === '#') {
    l = l.slice(1);
    el.id = l;
    return new element(el);
  } else if (l[0] === '.') {
    l = l.slice(1);
    el.className = l;
    return new element(el);
  }
};


//DOM querying alias function. Will automatically narrow class or tag queries down to one result. It will not return an array.
var dom = function(l) {
  if (l[0] === '#') {
    l = l.slice(1);
    return document.getElementById(l);
  } else if (l[0] === '.') {
    l = l.slice(1);
    return document.getElementsByClassName(l)[0];
  } else {
    return document.getElementsByTagName(l)[0];
  }
};


//DOM querying function, same as above, but it will return an array if a tag or class name are given as argument.
var query = function(l) {
  if (l[0] === '#') {
    l = l.slice(1);
    return document.getElementById(l);
  } else if (l[0] === '.') {
    l = l.slice(1);
    return document.getElementsByClassName(l);
  } else {
    return document.getElementsByTagName(l);
  }
};


//Function for appending elements to other elements.
var put = function(el, mom) {                                                  //DONE:80 Make sure this works.
  if (typeof el === 'string') {                                                //IDEA:0 If el doesn't exist, create it and give it id/class.
    if (el[0] === '#') {
      el = el.slice(1);
      if (typeof mom === 'string') {
        if (mom[0] === '#') {                                                  //TEST:0 Test this function thoroughly.
          mom = mom.slice(1);
          return document.getElementById(mom).appendChild(document.getElementById(el));
        } else if (mom[0] === '.') {
          mom = mom.slice(1);
          return document.getElementsByClassName(mom)[0].appendChild(document.getElementById(el));
        } else {
          return document.getElementsByTagName(mom)[0].appendChild(document.getElementById(el));
        }
     } else {
      return mom.appendChild(document.getElementById(el));
     }
    } else if (el[0] === '.') {
      el = el.slice(1);
      if (typeof mom === 'string') {
        if (mom[0] === '#') {
          mom = mom.slice(1);
          return document.getElementById(mom).appendChild(document.getElementsByClassName(el)[0]);
        } else if (mom[0] === '.') {
          mom = mom.slice(1);
          return document.getElementsByClassName(mom)[0].appendChild(document.getElementsByClassName(el)[0]);
        } else {
          return document.getElementsByTagName(mom)[0].appendChild(document.getElementsByClassName(el)[0]);
        }
     } else {
      return mom.appendChild(document.getElementsByClassName(el)[0]);
     }
    } else {
      if (typeof mom === 'string') {
        if (mom[0] === '#') {
          mom = mom.slice(1);
          return document.getElementById(mom).appendChild(document.getElementsByTagName(el)[0]);
        } else if (mom[0] === '.') {
          mom = mom.slice(1);
          return document.getElementsByClassName(mom)[0].appendChild(document.getElementsByTagName(el)[0]);
        } else {
          return document.getElementsByTagName(mom)[0].appendChild(document.getElementsByTagName(el)[0]);
        }
     } else {
      return mom.appendChild(document.getElementsByTagName(el)[0]);
     }
    }
 } else {
   if (typeof mom === 'string') {
     if (mom[0] === '#') {
       mom = mom.slice(1);
       return document.getElementById(mom).appendChild(el);
     } else if (mom[0] === '.') {
       mom = mom.slice(1);
       return document.getElementsByClassName(mom)[0].appendChild(el);
     } else {
       return document.getElementsByTagName(mom)[0].appendChild(el);
     }
  } else {
   return mom.appendChild(el);
  }
 }
};


//Function for deleting elements from the DOM tree.
var kill = function(el) {
  if (typeof el === 'string') {
    if (el[0] === '#') {
      el = el.slice(1);
      return document.getElementById(el).parentNode.removeChild(document.getElementById(el));
    } else if (el[0] === '.') {
      el = el.slice(1);
      return document.getElementsByClassName(el)[0].parentNode.removeChild(document.getElementsByClassName(el)[0]);
    } else {
      return document.getElementsByTagName(el)[0].parentNode.removeChild(getElementsByTagName(el)[0]);
    }
 } else {
  return el.parentNode.removeChild(el);
 }
};


//Function for setting css style properties of elements.
// var style = function(el) {
//   if (el[0] === '#') {     //DONE:70 Give this chaining functionality.
//     el = el.slice(1);
//     return document.getElementById(el).style;
//   } else if (el[0] === '.') {
//     el = el.slice(1);
//     return document.getElementsByClassName(el)[0].style;
//   } else {
//     return document.getElementsByTagName(el)[0].style;
//   }
// };



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



var log = (text, style, tyme)=> {
  return consol.log(text, style, tyme);
};                                                                             //DONE:10 Either fix singular hours, or choose alternate.
                                                                               //DONE:50 Add second argument for log ID purposes, figure best way to approach this.
                                                                               //DONE:100 Make sure date is logging properly.
//Console.error alias function.
var err = (text, tyme)=> {
  return consol.err(text, tyme);
};


//Console.info alias function.
var info = (text, tyme)=> {
  return consol.info(text, tyme);
};



//Console.warn alias function.
var warn = (text, tyme)=> {
  return consol.warn(text, tyme);
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

//This is an alias function for XMLHttpRequests.
var xhr = function(url, fd, method) {                                          //DONE:40 Perfect this function.
    var formData;
                                                                               //DONE:60 Build FormData in function from object that user passes as an argument.
    if (fd) {                                                                  //DONE:30 Need async ajax function
      if (Object.getOwnPropertyNames(fd).length === 0) {
        formData = fd;                                   log(Object.getOwnPropertyNames(fd).length);
      } else {
        formData = new FormData();
        for (var key in fd) {                                                  //TEST:10 Test this function.
          formData.append(key, fd[key]);
        }
      }
    } else {
      formData = null;
    }
  log('fd'); log(formData);

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
        formData = fd;                                   log(Object.getOwnPropertyNames(fd).length);
      } else {
        formData = new FormData();
        for (var key in fd) {
          formData.append(key, fd[key]);
        }
      }
    } else {
      formData = null;
    }
  log('fd'); log(formData);

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
