'use strict';

var _logger = require('./logger');

var _utilities = require('./utilities');

var utils = _interopRequireWildcard(_utilities);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//DONE:10 Complete X-Browser support for these 3 functions.

/*
events.js

This file contains code for the librarys' convenience EventListener
alias functions.

Author: Eric James Foster
License: ISC
*/

var go = function go(cb) {
  return document.addEventListener('DOMContentLoaded', cb());
};

var goIE = function goIE(cb) {
  return document.attachEvent('onDOMContentLoaded', cb());
};

//Function for setting event listeners.
var on = function on(event, el, callback) {
  //TODO: allow arg 'el' to be an array.
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

var onIE = function onIE(event, el, callback) {
  if (typeof el === 'string') {
    if (el[0] === '#') {
      el = el.slice(1);
      return document.getElementById(el).attachEvent('on' + event, callback);
    } else if (el[0] === '.') {
      el = el.slice(1);
      return document.getElementsByClassName(el)[0].attachEvent('on' + event, callback);
    } else {
      return document.getElementsByTagName(el).attachEvent('on' + event, callback);
    }
  } else {
    return el.attachEvent('on' + event, callback);
  }
};

//Function for removing event listeners.
var off = function off(event, el, callback) {
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

//Function for removing event listeners.
var offIE = function offIE(event, el, callback) {
  if (typeof el === 'string') {
    if (el[0] === '#') {
      el = el.slice(1);
      return document.getElementById(el).detachEvent('on' + event, callback);
    } else if (el[0] === '.') {
      el = el.slice(1);
      return document.getElementsByClassName(el)[0].detachEvent('on' + event, callback);
    } else {
      return document.getElementsByTagName(el).detachEvent('on' + event, callback);
    }
  } else {
    el.detachEvent('on' + event, callback);
  }
};

var once = function once(event, el, callback) {
  //DONE:60 Finish once function.
  var cb = callback;
  //DONE:80 Test once function.
  var callBack = function callBack(e) {
    cb(e);
    el.removeEventListener(event, callBack);
  };

  el = utils.queryDOM(el);

  return el.addEventListener(event, callBack);
};

var onceIE = function onceIE(event, el, callback) {
  var cb = callback;
  //DONE:90 Test onceIE function.
  var callBack = function callBack(e) {
    cb(e);
    el.detachEvent('on' + event, callBack);
  };

  el = utils.queryDOM(el);

  return el.attachEvent('on' + event, callBack);
};

function spark(evt, el) {

  var ev = new MouseEvent(evt, {
    bubbles: true,
    cancelable: true,
    view: window
  });
  el.dispatchEvent(ev);
}
function sparkIE(evt, el) {
  var ev = document.createEventObject();
  l = document.querySelector(el);

  evt.eventType = 'on' + evt;
  el.fireEvent('on' + evt, ev);
}

function blur(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('blur', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('blur', cb);
  }
}
function blurIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'onblur';
    el.fireEvent('on' + 'blur', evt);
  } else {
    el.attachEvent('on' + 'blur', cb);
  }
}

function click(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('click', cb);
  }
}

function clickIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'on' + 'click';
    el.fireEvent('on' + 'click', evt);
  } else {
    el.attachEvent('on' + 'click', cb);
  }
}

function dblClick(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('dblclick', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('dblclick', cb);
  }
}
function dblClickIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'ondblclick';
    el.fireEvent('on' + 'dblclick', evt);
  } else {
    el.attachEvent('on' + 'dblclick', cb);
  }
}

function error(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('error', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('error', cb);
  }
}
function errorIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'onerror';
    el.fireEvent('on' + 'error', evt);
  } else {
    el.attachEvent('on' + 'error', cb);
  }
}

function focus(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('focus', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('focus', cb);
  }
}
function focusIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'onfocus';
    el.fireEvent('on' + 'focus', evt);
  } else {
    el.attachEvent('on' + 'focus', cb);
  }
}

function focusIn(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('focusin', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('focusin', cb);
  }
}
function focusInIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'onfocusin';
    el.fireEvent('on' + 'focusin', evt);
  } else {
    el.attachEvent('on' + 'focusin', cb);
  }
}

function focusOut(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('focusout', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('focusout', cb);
  }
}
function focusOutIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'onfocusout';
    el.fireEvent('on' + 'focusout', evt);
  } else {
    el.attachEvent('on' + 'focusout', cb);
  }
}

function keyUp(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('keyup', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('keyup', cb);
  }
}
function keyUpIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'onkeyup';
    el.fireEvent('on' + 'keyup', evt);
  } else {
    el.attachEvent('on' + 'keyup', cb);
  }
}

function keyDown(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('keydown', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('keydown', cb);
  }
}
function keyDownIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'onkeydown';
    el.fireEvent('on' + 'keydown', evt);
  } else {
    el.attachEvent('on' + 'keydown', cb);
  }
}

function load(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('load', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('load', cb);
  }
}
function loadIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'onload';
    el.fireEvent('on' + 'load', evt);
  } else {
    el.attachEvent('on' + 'load', cb);
  }
}

function unLoad(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('unload', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('unload', cb);
  }
}
function unLoadIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'onunload';
    el.fireEvent('on' + 'unload', evt);
  } else {
    el.attachEvent('on' + 'unload', cb);
  }
}

function mouse(sufx, el) {
  var cb = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
  //sufx is string, options are 'up', 'down', 'enter', 'leave', 'over', 'out' and 'move'.

  if (cb === null) {
    var evt = new MouseEvent('mouse' + sufx, {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('mouse' + sufx, cb);
  }
}
function mouseIE(sufx, el) {
  var cb = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'onmouse' + sufx;
    el.fireEvent('on' + 'mouse' + sufx, evt);
  } else {
    el.attachEvent('on' + 'mouse' + sufx, cb);
  }
}

function reSize(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('resize', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('resize', cb);
  }
}
function reSizeIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'onresize';
    el.fireEvent('on' + 'resize', evt);
  } else {
    el.attachEvent('on' + 'resize', cb);
  }
}

function scroll(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('scroll', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('scroll', cb);
  }
}
function scrollIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'onscroll';
    el.fireEvent('on' + 'scroll', evt);
  } else {
    el.attachEvent('on' + 'scroll', cb);
  }
}

function select(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = new MouseEvent('select', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('select', cb);
  }
}
function selectIE(el) {
  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


  if (cb === null) {
    var evt = document.createEventObject();

    evt.eventType = 'onselect';
    el.fireEvent('on' + 'select', evt);
  } else {
    el.attachEvent('on' + 'select', cb);
  }
}

module.exports = {
  blur: blur,
  blurIE: blurIE,
  click: click,
  clickIE: clickIE,
  dblClick: dblClick,
  dblClickIE: dblClickIE,
  error: error,
  errorIE: errorIE,
  focus: focus,
  focusIE: focusIE,
  focusIn: focusIn,
  focusInIE: focusInIE,
  focusOut: focusOut,
  focusOutIE: focusOutIE,
  keyUp: keyUp,
  keyUpIE: keyUpIE,
  keyDown: keyDown,
  keyDownIE: keyDownIE,
  load: load,
  loadIE: loadIE,
  unLoad: unLoad,
  unLoadIE: unLoadIE,
  mouse: mouse,
  mouseIE: mouseIE,
  reSize: reSize,
  reSizeIE: reSizeIE,
  scroll: scroll,
  scrollIE: scrollIE,
  select: select,
  selectIE: selectIE,
  spark: spark,
  sparkIE: sparkIE,
  go: go,
  goIE: goIE,
  on: on,
  onIE: onIE,
  off: off,
  offIE: offIE,
  once: once,
  onceIE: onceIE
};