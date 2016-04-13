'use strict';

var _module$exports;

var _element = require('./lib/element');

var _element2 = _interopRequireDefault(_element);

var _httpRequests = require('./lib/httpRequests');

var requests = _interopRequireWildcard(_httpRequests);

var _events = require('./lib/events');

var events = _interopRequireWildcard(_events);

var _logger = require('./lib/logger');

var consol = _interopRequireWildcard(_logger);

var _utilities = require('./lib/utilities');

var utils = _interopRequireWildcard(_utilities);

var _DOM = require('./lib/DOM');

var DOM = _interopRequireWildcard(_DOM);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /*
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

//FIXME: elements syntax not working in case condition of switch statement.
//FIXME: reg exp did not find element with CSS Selector, <'[class=active]'/>.

//DONE:0 Complete X-Browser 'style' functions, and implement X-Browser compatibility in EventListener functions.

// require('babel-polyfill');

var element = function element(el) {
  return new _element2.default();
};

/*This function copies the prototype object of a superConstructor to the prototype object
of a constructor. It functions just like nodes' util.inherits function, it copies methods only,
not internal properties.*/
var proto = function proto(construct, superConstruct) {
  return utils.proto(construct, superConstruct);
};

/*This convenience function sets imported module function names as global variables, so that
the module variable doesn't need to preface every function.*/
var functions = function functions(funcs, mod) {
  //TEST:110 Test this with other node_modules.
  var context = mod || this;

  if (Array.isArray(funcs)) {
    log(mod, 'red');

    funcs.forEach(function (func) {
      var evil = new Function('window.' + func + ' = ' + 'this.' + func + ';');
      evil.call(context);
    }, context);
  } else {
    (function () {
      var evil = new Function('window.' + funcs + ' = ' + 'this.' + funcs + ';');
      evil.call(context);
    }).apply(context);
  }
};

var _$ = function _$(el) {
  var l = null !== utils.queryDOM(el);
  return l;
};

//This function queries the dom, getting one element for each query (i.e. class/tags), creates
//an Element object with it and returns it, so that it may be easily styled.
var dom = function dom(el) {
  log('dom: ' + el, 'blue');
  var rv = void 0;

  el = utils.queryDOM(el);

  if (Array.isArray(el)) {
    rv = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = el[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var l = _step.value;

        rv.push(new _element2.default(l));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else {
    rv = new _element2.default(el);
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
var __ = function __(tempLit) {
  var el = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];

  return DOM.bones(tempLit, el);
};

//Create element alias function.
var make = function make(el, tag) {
  return DOM.make(el, tag);
};

//DOM querying alias function. Will automatically narrow class or tag queries down to one result. It will not return an array.
var el = function el(l) {
  return utils.queryDOM(l);
};

//Function for appending elements to other elements.
var put = function put(el, mom) {
  return DOM.put(el, mom);
};

//Function for deleting elements from the DOM tree.
var x = function x(el) {
  return DOM.kill(el);
};

var fore = function fore(ref, elem) {
  return DOM.fore(ref, elem);
};

var aft = function aft(ref, elem) {
  return DOM.aft(ref, elem);
};

var show = function show(elem, disp) {
  return DOM.show(elem);
};

var hide = function hide(elem) {
  return DOM.hide(elem);
};

var size = function size(elem, h, w) {
  return DOM.size(elem, h, w);
};

var clone = function clone(elem, deep) {
  return DOM.clone(elem, deep);
};

//console.log alias function.
var log = function log(text, style, tyme) {
  return consol.log(text, style, tyme);
};

//console.error alias function.
var err = function err(text, tyme) {
  return consol.err(text, tyme);
};

//console.info alias function.
var info = function info(text, tyme) {
  return consol.info(text, tyme);
};

//console.warn alias function.
var warn = function warn(text, tyme) {
  return consol.warn(text, tyme);
};

var shifter = function shifter(onFunc, offFunc) {
  return utils.shifter(onFunc, offFunc);
};

//This practically useless function will lock up the browser for a preset amount of time.
var sleep = function sleep(milliseconds) {
  return utils.sleep(milliseconds);
};

//A function for combining strings for urls
var url = function url(bit1, bit2) {
  var bit3 = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
  var bit4 = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

  return bit1 + bit2 + bit3 + bit4;
};

//This is a synchronous alias function for XMLHttpRequests.
var xhr = function xhr(url, fd, method) {
  return requests.xhr(url, fd, method);
};

//This is an asynchronous alias function for XMLHttpRequests.
var ajax = function ajax(url, fd, callback, method) {
  return requests.ajax(url, fd, callback, method);
};

/*---------Event Functions-----------*/

var go = function go(cb) {
  if (document.addEventListener) {
    return events.go(cb);
  } else {
    return events.goIE(cb);
  }
};

//Function for setting event listeners.
var on = function on(event, el, callback) {
  if (document.addEventListener) {
    return events.on(event, el, callback);
  } else {
    return events.onIE(event, el, callback);
  }
};

//Function for removing event listeners.
var off = function off(event, el, callback) {
  if (document.addEventListener) {
    return events.off(event, el, callback);
  } else {
    return events.offIE(event, el, callback);
  }
};

var once = function once(event, el, callback) {
  //DONE:50 Finish once function.
  if (document.addEventListener) {
    return events.once(event, el, callback);
  } else {
    return events.onceIE(event, el, callback);
  } //TEST:70 Test once function.
};

var spark = function spark(evt, el) {
  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.spark(evt, el);
  } else {
    return events.sparkIE(evt, el);
  }
};

var blur = function blur(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.blur(el, cb);
  } else {
    return events.blurIE(el, cb);
  }
};

var click = function click(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.click(el, cb);
  } else {
    return events.clickIE(el, cb);
  }
};

var dblClick = function dblClick(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.dblClick(el, cb);
  } else {
    return events.dblClickIE(el, cb);
  }
};

var error = function error(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.error(el, cb);
  } else {
    return events.errorIE(el, cb);
  }
};

var focus = function focus(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.focus(el, cb);
  } else {
    return events.focusIE(el, cb);
  }
};

var focusIn = function focusIn(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.focusIn(el, cb);
  } else {
    return events.focusInIE(el, cb);
  }
};

var focusOut = function focusOut(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.focusOut(el, cb);
  } else {
    return events.focusOut(el, cb);
  }
};

var keyUp = function keyUp(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.keyUp(el, cb);
  } else {
    return events.keyUpIE(el, cb);
  }
};

var keyDown = function keyDown(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.keyDown(el, cb);
  } else {
    return events.keyDownIE(el, cb);
  }
};

var load = function load(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.load(el, cb);
  } else {
    return events.loadIE(el, cb);
  }
};

var unLoad = function unLoad(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.unLoad(el, cb);
  } else {
    return events.unLoadIE(el, cb);
  }
};

var mouse = function mouse(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.mouse(el, cb);
  } else {
    return events.mouseIE(el, cb);
  }
};

var resize = function resize(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.resize(el, cb);
  } else {
    return events.resizeIE(el, cb);
  }
};

var scroll = function scroll(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.scroll(el, cb);
  } else {
    return events.scrollIE(el, cb);
  }
};

var select = function select(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  el = utils.queryDOM(el);

  if (document.addEventListener) {
    return events.select(el, cb);
  } else {
    return events.selectIE(el, cb);
  }
};

module.exports = (_module$exports = {
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
  url: url,
  xhr: xhr,
  err: err,
  info: info,
  warn: warn,
  ajax: ajax,
  fore: fore,
  aft: aft,
  show: show,
  hide: hide
}, _defineProperty(_module$exports, 'clone', clone), _defineProperty(_module$exports, 'spark', spark), _defineProperty(_module$exports, 'blur', blur), _defineProperty(_module$exports, 'click', click), _defineProperty(_module$exports, 'dblClick', dblClick), _defineProperty(_module$exports, 'error', error), _defineProperty(_module$exports, 'focus', focus), _defineProperty(_module$exports, 'focusIn', focusIn), _defineProperty(_module$exports, 'focusOut', focusOut), _defineProperty(_module$exports, 'keyUp', keyUp), _defineProperty(_module$exports, 'keyDown', keyDown), _defineProperty(_module$exports, 'load', load), _defineProperty(_module$exports, 'unLoad', unLoad), _defineProperty(_module$exports, 'mouse', mouse), _defineProperty(_module$exports, 'resize', resize), _defineProperty(_module$exports, 'scroll', scroll), _defineProperty(_module$exports, 'select', select), _module$exports);

//DONE:30 functions: err(), info(), warn().
//DONE:130 Complete all standalone style functions.