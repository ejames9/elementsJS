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

//DONE: elements syntax not working in parenthesis.
//FIXME: reg exp did not find element with CSS Selector, <'[class=active]'/>.
//FIXME: eJS Interpreter hangs when eJS element is within brackets, and directly adjacent to one of them.
//FIXME: cannot create element from variable representing a string.
//FIXME: Find out why module imports are printing twice..
//FIXME: Figure out why elements in square brackets slow things up...



//DONE: Can't put elements in comments.
//DONE: HTML interfering with regExp's.
//DONE: can't use file blobs with import() func.

//DONE: Should be able to use variables inside of elementJS elements.
//TODO: make some functions complete operations for arrays automagically, instead of needing .every().
//TODO: Make all event functions like once(), .once().
//TODO: Complete <elem> syntax docs.
//TODO: change apropo methods to properties.
//DONE: .sib() does not return element.......
//DONE: addClass() method.
//DONE: new log.dir() function.
//DONE: .src, .href() etc.
//DONE: add a class method, remove a class method.
//TODO: more .transform() methods.
//DONE: += html method.
//DONE: transform methods. i.e. this.turnX(), this.turnY.
//TODO: .do(), do() animation functionality. (with tween.js?)
//DONE: be able to create element object from e.target.....
//TODO: getCookie, setCookie, checkCookie functions....
//TODO: move functions........
//TODO: Needed polyfills.
//TODO: element.classList()....
//TODO: hover(mouseOverFunc, mouseOutFunc) func.....
//TODO: element.name() function.....
//TODO: add functionality to make() function to allow creating nameless, id less divs.
//TODO: write scroll-snapper plugin,
//TODO: list of plug-ins
//TODO: touch('start', ()=> {});  touch event function, method..







//DONE:0 Complete X-Browser 'style' functions, and implement X-Browser compatibility in EventListener functions.


import Element from './lib/element';
import * as requests from './lib/httpRequests';
import * as events from './lib/events';
import * as consol from './lib/logger';
import * as utils from './lib/utilities';
import * as DOM from './lib/DOM';


//Index of polyfill for IE...........
if (!Array.prototype.indexOf) {
   Array.prototype.indexOf = function(item) {
      var i = this.length;
      while (i--) {
         if (this[i] === item) return i;
      }
      return -1;
   };
}


var element = function(el) {
  if (isDOMElement(el)) {
    return new Element(el);
  } else if (utils.isArray(el)) {
    if (isElement(el[0])) {
      return new Element(el);
    } else if (isDOMElement(el[0])){
      let arr = [];
      for (var i = 0; i < el.length; i++) {
        arr.push(new Element(el[i]));
      }
      return new Element(arr);
    } else {
      throw new Error('Invalid Array.');
    }
  } else {
    throw new Error('Invalid Argument.');
  }
};

var isElement = function(el) {
  return utils.isElement(el);
};

var isDOMElement = function(el) {
  return utils.isDOMElement(el);
};

/*This function copies the prototype object of a superConstructor to the prototype object
of a constructor. It functions just like nodes' util.inherits function, it copies methods only,
not internal properties.*/
var proto = function(construct, superConstruct) {
  return utils.proto(construct, superConstruct);
};




//This function will simply return true if the given element exists in the DOM, and false otherwise. not a public function.
var _$ = function(el) {
  return null !== utils.queryDOM(el);
};


var isArray = function(arr) {
  return utils.isArray(arr);
};


//This function queries the dom, getting one element for each query (i.e. class/tags), creates
//an Element object with it and returns it, so that it may be easily styled.
var dom = function(el) {
  let rv;

  el = utils.queryDOM(el);

  if (el.length !== undefined) {
    rv = [];
    for (var i = 0; i < el.length; i++) {
      rv.push(new Element(el[i]));
    }
    rv = new Element(rv);
  } else {
    rv = new Element(el);
  }
  return rv;
};


/*function for inserting template literals into the DOM.

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
  return utils.queryDOM(l);
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

var inspect = function(obj) {
  return consol.inspect(obj);
};



var shifter = function(onFunc, offFunc) {
  return utils.shifter(onFunc, offFunc);
};

var hasAncestor = function(l, ance) {
  return utils.hasAncestor(l, ance);
};

var lookBehind = function(leftContextRE, matchRE, subject) {
  return utils.lookBehind(leftContextRE, matchRE, subject);
};

var isMobile = function() {
  return utils.isMobile();
};

//This practically useless function will lock up the browser for a preset amount of time.
var sleep = function(milliseconds) {
  return utils.sleep(milliseconds);
};

//A function for combining strings for urls
var url = function(bit1, bit2, bit3='', bit4='') {
  return bit1 + bit2 + bit3 + bit4;
}


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


var mouse = function(sfx, el, cb=null) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.mouse(sfx, el, cb);
  } else {
    return events.mouseIE(sfx, el, cb);
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



//<<=================May have found a better solution.======================================>>//
/*This convenience function sets imported module function names as global variables, so that
the module variable doesn't need to preface every function.*/
// var functions = function(funcs, mod) {
//   var context = mod || this;
//
//   if (Array.isArray(funcs)) {
//     log(mod, 'red');
//
//     funcs.forEach(function(func) {
//       var evil = new Function('window.' + func + ' = ' + 'this.' + func + ';');
//           evil.call(context);
//     }, context);
//   } else {
//     (function() {
//       var evil = new Function('window.' + funcs + ' = ' + 'this.' + funcs + ';');
//           evil.call(context);
//     }).apply(context);
//   }
// };




module.exports = {
          element: element,
               _$: _$,
                x: x,
               go: go,
          shifter: shifter,
             make: make,
               __: __,
              dom: dom,
            proto: proto,
            clone: clone,
          isArray: isArray,
        isElement: isElement,
     isDOMElement: isDOMElement,
        // functions: functions,
      hasAncestor: hasAncestor,
       lookBehind: lookBehind,
         isMobile: isMobile,
              put: put,
               on: on,
              off: off,
             once: once,
               el: el,
              log: log,
              url: url,
              xhr: xhr,
              err: err,
             info: info,
             warn: warn,
          inspect: inspect,
             ajax: ajax,
             fore: fore,
              aft: aft,
             show: show,
             hide: hide,
             size: size,
            clone: clone,
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
