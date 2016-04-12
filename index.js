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


import Element from './lib/element';
import * as requests from './lib/httpRequests';
import * as events from './lib/events';
import * as consol from './lib/logger';
import * as utils from './lib/utilities';
import * as DOM from './lib/DOM';


// require('babel-polyfill');




var element = function(el) {
  return new Element();
};

/*This function copies the prototype object of a superConstructor to the prototype object
of a constructor. It functions just like nodes' util.inherits function, it copies methods only,
not internal properties.*/
var proto = function(construct, superConstruct) {
  return utils.proto(construct, superConstruct);
};


/*This convenience function sets imported module function names as global variables, so that
the module variable doesn't need to preface every function.*/
var functions = function(funcs, mod) {                                      //TEST:110 Test this with other node_modules.
  var context = mod || this;

  if (Array.isArray(funcs)) {
    log(mod, 'red');

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


var _$ = function(el) {
  var l = (null !== utils.queryDOM(el));
  return l;
};

//This function queries the dom, getting one element for each query (i.e. class/tags), creates
//an Element object with it and returns it, so that it may be easily styled.
var dom = function(el) {
  log('dom: ' + el, 'blue');
  let rv;

  el = utils.queryDOM(el);

  if (Array.isArray(el)) {
    rv = [];
    for (var l of el) {
      rv.push(new Element(l))
    }
  } else {
    rv = new Element(el);
  }
  return rv;
};


/*function for insterting template literals into the DOM.

bones(`

<html>
  <head></head>
  <body></body>
</html>

`);

*/
var __ = function(tempLit, el='body') {
  return DOM.bones(tempLit, el);
};



//Create element alias function.
var make = function(el, tag) {
  return DOM.make(el, tag);
};


//DOM querying alias function. Will automatically narrow class or tag queries down to one result. It will not return an array.
var el = function(l) {
  return DOM.el(l);
};



//Function for appending elements to other elements.
var put = function(el, mom) {
  return DOM.put(el, mom);
};


//Function for deleting elements from the DOM tree.
var x = function(el) {
  return DOM.kill(el);
};


var fore = function(ref, elem) {
  return DOM.fore(ref, elem);
};


var aft = function(ref, elem) {
  return DOM.aft(ref, elem);
};


var show = function(elem, disp) {
  return DOM.show(elem);
};


var hide = function(elem) {
  return DOM.hide(elem);
};


var size = function(elem, h, w) {
  return DOM.size(elem, h, w);
};

var clone = function(elem, deep) {
  return DOM.clone(elem, deep);
};


//console.log alias function.
var log = function(text, style, tyme) {
  return consol.log(text, style, tyme);
};


//console.error alias function.
var err = function(text, tyme) {
  return consol.err(text, tyme);
};


//console.info alias function.
var info = function(text, tyme) {
  return consol.info(text, tyme);
};



//console.warn alias function.
var warn = function(text, tyme) {
  return consol.warn(text, tyme);
};


var shifter = function(onFunc, offFunc) {
  return utils.shifter(onFunc, offFunc);
};



//This practically useless function will lock up the browser for a preset amount of time.
var sleep = function(milliseconds) {
  return utils.sleep(milliseconds);
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


var go = function(cb) {
  if (document.addEventListener) {
    return events.go(cb);
  } else {
    return events.goIE(cb);
  }
};


//Function for setting event listeners.
var on = function(event, el, callback) {
  if (document.addEventListener) {
    return events.on(event, el, callback);
  } else {
    return events.onIE(event, el, callback);
  }
};


//Function for removing event listeners.
var off = function(event, el, callback) {
  if (document.addEventListener) {
    return events.off(event, el, callback);
  } else {
    return events.offIE(event, el, callback);
  }
};


var once = function(event, el, callback) {                                     //DONE:50 Finish once function.
  if (document.addEventListener) {
    return events.once(event, el, callback);
  } else {
    return events.onceIE(event, el, callback);
  }                                                                            //TEST:70 Test once function.
};


var spark = function(evt, el) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.spark(evt, el);
  } else {
    return events.sparkIE(evt, el);
  }
};


var blur = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.blur(el, cb);
  } else {
    return events.blurIE(el, cb);
  }
};


var click = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.click(el, cb);
  } else {
    return events.clickIE(el, cb);
  }
};


var dblClick = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.dblClick(el, cb);
  } else {
    return events.dblClickIE(el, cb);
  }
};


var error = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.error(el, cb);
  } else {
    return events.errorIE(el, cb);
  }
};


var focus = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.focus(el, cb);
  } else {
    return events.focusIE(el, cb);
  }
};


var focusIn = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.focusIn(el, cb);
  } else {
    return events.focusInIE(el, cb);
  }
};


var focusOut = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.focusOut(el, cb);
  } else {
    return events.focusOut(el, cb);
  }
};


var keyUp = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.keyUp(el, cb);
  } else {
    return events.keyUpIE(el, cb);
  }
};


var keyDown = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.keyDown(el, cb);
  } else {
    return events.keyDownIE(el, cb);
  }
};


var load = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.load(el, cb);
  } else {
    return events.loadIE(el, cb);
  }
};


var unLoad = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.unLoad(el, cb);
  } else {
    return events.unLoadIE(el, cb);
  }
};


var mouse = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.mouse(el, cb);
  } else {
    return events.mouseIE(el, cb);
  }
};


var resize = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.resize(el, cb);
  } else {
    return events.resizeIE(el, cb);
  }
};


var scroll = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.scroll(el, cb);
  } else {
    return events.scrollIE(el, cb);
  }
};


var select = function(el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.select(el, cb);
  } else {
    return events.selectIE(el, cb);
  }
};





module.exports = {
               _$: _$,
                x: x,
               go: go,
          shifter: shifter,
             make: make,
               __: __,
              dom: dom,
            proto: proto,
            clone: clone,
        functions: functions,
              put: put,
               on: on,
              off: off,
             once: once,
               el: el,
              log: log,
              xhr: xhr,
              err: err,
             info: info,
             warn: warn,
             ajax: ajax,
            spark: spark,
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
