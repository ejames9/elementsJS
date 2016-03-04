/*
Elements.js

A JavaScript DOM manipulation/Alias function Library.
This is the index file for the library. It contains alias functions for
all of the librarys' public functions. This makes it easy to import the
functions without a module prefix es6 style.

Author: Eric James Foster
EMail: maniphestival@gmail.com
License: MIT
Version: 1.0.0
URL: ""
*/



//DONE:0 Complete X-Browser 'style' functions, and implement X-Browser compatibility in EventListener functions.


var element = require('./lib/Element'),
   requests = require('./lib/httpRequests'),
     events = require('./lib/events'),
     consol = require('./lib/logger'),
      utils = require('./lib/utilities'),
        dom = require('./lib/DOM'),
              require('babel-polyfill');




/*This function copies the prototype object of a superConstructor to the prototype object
of a constructor. It functions just like nodes' util.inherits function, it copies methods only,
not internal properties.*/
var proto = (construct, superConstruct)=> {
  return utils.proto(construct, superConstruct);
};


/*This convenience function sets imported module function names as global variables, so that
the module variable doesn't need to preface every function.*/
var functions = function(funcs, module) {                                      //TEST:40 Test this with other node_modules.
  return misc.functions(funcs, module);
};


/*This function queries the dom, getting one element for each query (i.e. class/tags), creates
an Element object with it and returns it, so that it may be easily styled.*/
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



/*---------Event Functions-----------*/


//Function for setting event listeners.
var on = function(event, el, callback) {
  if (el.addEventListener) {
    return events.on(event, el, callback);
  } else {
    return events.onIE(event, el, callback);
  }
};


//Function for removing event listeners.
var off = function(event, el, callback) {
  if (el.addEventListener) {
    return events.off(event, el, callback);
  } else {
    return events.offIE(event, el, callback);
  }
};


var once = function(event, el, callback) {                                     //DONE:50 Finish once function.
  if (el.addEventListener) {
    return events.once(event, el, callback);
  } else {
    return events.onceIE(event, el, callback);
  }                                                                            //TEST:30 Test once function.
};


var blur = function(el, cb=null) {
  if (el.addEventListener) {
    return events.blur(el, cb);
  } else {
    return events.blurIE(el, cb);
  }
};


var click = function(el, cb=null) {
  if (el.addEventListener) {
    return events.click(el, cb);
  } else {
    return events.clickIE(el, cb);
  }
};


var dblClick = function(el, cb=null) {
  if (el.addEventListener) {
    return events.dblClick(el, cb);
  } else {
    return events.dblClickIE(el, cb);
  }
};


var error = function(el, cb=null) {
  if (el.addEventListener) {
    return events.error(el, cb);
  } else {
    return events.errorIE(el, cb);
  }
};


var focus = function(el, cb=null) {
  if (el.addEventListener) {
    return events.focus(el, cb);
  } else {
    return events.focusIE(el, cb);
  }
};


var focusIn = function(el, cb=null) {
  if (el.addEventListener) {
    return events.focusIn(el, cb);
  } else {
    return events.focusInIE(el, cb);
  }
};


var focusOut = function(el, cb=null) {
  if (el.addEventListener) {
    return events.focusOut(el, cb);
  } else {
    return events.focusOut(el, cb);
  }
};


var keyUp = function(el, cb=null) {
  if (el.addEventListener) {
    return events.keyUp(el, cb);
  } else {
    return events.keyUpIE(el, cb);
  }
};


var keyDown = function(el, cb=null) {
  if (el.addEventListener) {
    return events.keyDown(el, cb);
  } else {
    return events.keyDownIE(el, cb);
  }
};


var load = function(el, cb=null) {
  if (el.addEventListener) {
    return events.load(el, cb);
  } else {
    return events.loadIE(el, cb);
  }
};


var unLoad = function(el, cb=null) {
  if (el.addEventListener) {
    return events.unLoad(el, cb);
  } else {
    return events.unLoadIE(el, cb);
  }
};


var mouse = function(el, cb=null) {
  if (el.addEventListener) {
    return events.mouse(el, cb);
  } else {
    return events.mouseIE(el, cb);
  }
};


var resize = function(el, cb=null) {
  if (el.addEventListener) {
    return events.resize(el, cb);
  } else {
    return events.resizeIE(el, cb);
  }
};


var scroll = function(el, cb=null) {
  if (el.addEventListener) {
    return events.scroll(el, cb);
  } else {
    return events.scrollIE(el, cb);
  }
};


var select = function(el, cb=null) {
  if (el.addEventListener) {
    return events.select(el, cb);
  } else {
    return events.selectIE(el, cb);
  }
};










module.exports = {
             make: make,
              dom: dom,
            proto: proto,
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
             ajax: ajax,
             blur: blur,
            click: click,
         dblClick: dblClick,
            error: error,
            focus: focus,
          focusIn: focusIn,
         focusOut: focusOut,
            keyUp: keyUp,
          keyDown: keyDown,
             load: load,
           unLoad: unLoad,
            mouse: mouse,
           resize: resize,
           scroll: scroll,
           select: select,
                };
//DONE:30 functions: err(), info(), warn().
//DONE:130 Complete all standalone style functions.
