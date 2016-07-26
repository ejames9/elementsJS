'use strict';

var _logger = require('./logger');

//TODO:20 browser detection functionality, noop(), merge(), toggle().

var isArray = function isArray(arr) {
  return Array.isArray(arr);
};
/*
utilities.js

This file contains various functions for the library, either public or not,
that don't fit into any other module.

Author: Eric James Foster
License: ISC
*/

var isElement = function isElement(el) {
  if (el.element) {
    return true;
  } else {
    return false;
  }
};

var isDOMElement = function isDOMElement(el) {
  return el.tagName ? true : false;
};

/*This function combines querySelector and querySelectorAll, and becomes a noop if 'el' is a variable. There is an optional 2nd argument 'mod', that
accepts the string 'all' to modify behaviour of the function. By default, 'mod' is null. If the string 'all' is passed as the 2nd argument, the function
will use querySelectorAll() instead of querySelector(), meaning an array will be returned if possible. */
var queryDOM = function queryDOM(el) {

  var lm = void 0,
      lms = [];

  if (typeof el === 'string') {
    if (el.charAt(0) === '.') {
      el = el.substring(1, el.length);

      lm = document.getElementsByClassName(el);

      if (lm.length !== 0) {
        if (lm.length === 1) {
          lms = lm[0];
        } else {
          for (var i = 0; i < lm.length; i++) {
            lms.push(lm[i]);
          }
        }
      } else {
        return null;
      }
    } else if (el.charAt(0) !== '#' && el.indexOf('[') === -1 && el.indexOf(':') === -1 && el.indexOf(' ') === -1) {
      lm = document.getElementsByTagName(el);

      if (lm.length !== 0) {
        if (lm.length === 1) {
          lms = lm[0];
        } else {
          for (var j = 0; j < lm.length; j++) {
            lms.push(lm.item(j));
          }
        }
      } else {
        return null;
      }
    } else {
      lm = document.querySelectorAll(el);
      if (lm.length <= 1) {
        lm = undefined;
        lm = document.querySelector(el);
        return lm;
      } else {
        return lm;
      }
    }
    return lms;
  } else {
    return el;
  }
};

/*This function copies the prototype object of a superConstructor to the prototype object
of a constructor. It functions just like nodes' util.inherits function, it copies methods only,
not internal properties.*/
var proto = function proto(constructer, superConstructer) {
  construct.prototype = Object.create(superConstructer.prototype);
  constructer.prototype.constructor = constructer;
  return constructer;
};

/*This convenience function sets imported module function names as global variables, so that
the module variable doesn't need to preface every function.*/
var functions = function functions(funcs, module) {
  //TEST:110 Test this with other node_modules.
  var context = module || this;

  if (Array.isArray(funcs)) {
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

//This practically useless function will lock up the browser for a preset amount of time.
var sleep = function sleep(milliseconds) {
  var start = new Date().getTime();
  while (true) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
};

//This function will alternate function calls depending on the value of a global flag.
function shifter(onFunc, offFunc) {
  window.toggleFlag = true;

  return function () {
    if (toggleFlag) {
      onFunc();
      toggleFlag = false;
    } else {
      offFunc();
      toggleFlag = true;
    }
  };
};

//Boolean function returns true if given function has given ancestor, and false otherwise. Checks 6 parents deep.
function hasAncestor(l, ance) {
  var tick,
      ancestor,
      ancestors = [1, 2, 3, 4, 5];

  if (typeof ance === 'string') {
    ancestor = queryDOM(ance);
  } else {
    ancestor = ance;
  }

  ancestors[0] = l.parentNode;
  ancestors[1] = ancestors[0].parentNode;

  if (!!ancestors[1].parentNode) {
    ancestors[2] = ancestors[1].parentNode;
  }
  if (!!ancestors[2].parentNode) {
    ancestors[3] = ancestors[2].parentNode;
  }
  if (!!ancestors[3].parentNode) {
    ancestors[4] = ancestors[3].parentNode;
  }
  //For inspection....
  // var dir           = {};
  //     dir.ance      = ance;
  //     dir.l         = l;
  //     dir.ancestor  = ancestor;
  //     dir.ancestors = ancestors;
  //
  // console.log(dir);

  tick = 0;

  for (var i = 0; i < ancestors.length; i++) {
    if (ancestors[i] === ancestor) tick++;
  }
  if (tick > 0) return true;else return false;
};

function lookBehind(leftContextRE, matchRE, subject) {
  var returnMatch, match, leftContext;

  match = matchRE.exec(subject)[0];
  leftContext = subject.substring(0, subject.indexOf(match));

  if (leftContextRE.test(leftContext)) {
    returnMatch = match;
  } else {
    returnMatch = false;
  }

  return returnMatch;
};

function isMobile() {
  this.android = function () {
    return navigator.userAgent.match(/Android/i);
  };
  this.blackBerry = function () {
    return navigator.userAgent.match(/BlackBerry/i);
  }, this.iOS = function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  }, this.operaMini = function () {
    return navigator.userAgent.match(/Opera Mini/i);
  }, this.windowsMobile = function () {
    return navigator.userAgent.match(/IEMobile/i);
  }, this.any = function () {
    return this.android() || this.blackBerry() || this.iOS() || this.operaMini() || this.windowsMobile();
  };
  return this.any();
}

module.exports = {
  queryDOM: queryDOM,
  functions: functions,
  isArray: isArray,
  isElement: isElement,
  isDOMElement: isDOMElement,
  shifter: shifter,
  sleep: sleep,
  proto: proto,
  hasAncestor: hasAncestor,
  lookBehind: lookBehind,
  isMobile: isMobile
};