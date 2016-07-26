'use strict';

var _element = require('./element');

var _element2 = _interopRequireDefault(_element);

var _logger = require('./logger');

var _utilities = require('./utilities');

var utils = _interopRequireWildcard(_utilities);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//TODO:0 Check out querySelector() method, see if it helps out.
//DOING:0 go() DOMREady function, Class toggling method, aft(), fore(), size(), show(), hide().

// ------------------- This function is now run straight from index.js---------------------------//
//This function queries the dom, getting one element for each query (i.e. class/tags), creates
//an Element object with it and returns it, so that it may be easily styled.
// var dom = function(el) {
//   el = utils.queryDOM(el);
//
//   return new Element(el);
// };

/*function for insterting template literals into the DOM.

bones(`

<html>
  <head></head>
  <body></body>
</html>

`);

*/
var bones = function bones(tempLit) {
  var elem = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];

  elem = utils.queryDOM(elem);
  elem.innerHTML += tempLit;

  return elem;
};

//Create element alias function.

/*
DOM.js

This file contains the code for the elements.js librarys' DOM manipulation
convenience functions.

Author: Eric James Foster
License: ISC
*/

var make = function make(l, tag) {
  var t = tag || 'div',
      el = document.createElement(t);

  if (l[0] === '#') {
    l = l.slice(1);
    el.id = l;
    return new _element2.default(el);
  } else if (l[0] === '.') {
    l = l.slice(1);
    el.className = l;
    return new _element2.default(el);
  }
};

/*DOM querying alias function. Will return an array if there is more than one result. If there is
 only 1 it will NOT, even if the CSS Selector is a className or tagName.*/
//NOTE: Now referencing queryDOM() function from index.js.
var el = function el(_el) {
  return utils.queryDOM(_el);
};

//------------------------------This function is not being used in the current build ---------------------------//
//DOM querying function, same as above, but it will return an array if a tag or class name are given as argument.
// var all = function(l) {
//   return utils.queryDOM(el, 'all');
// };

//Function for appending elements to other elements.
var put = function put(el, mom) {
  //DONE:120 Make sure this works.
  if (typeof el === 'string') {
    //IDEA:0 If el doesn't exist, create it and give it id/class.
    if (el[0] === '#') {
      el = el.slice(1);
      if (typeof mom === 'string') {
        if (mom[0] === '#') {
          //TEST:40 Test this function thoroughly.
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
var kill = function kill(el) {
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

//DOM function for inserting an element before a specified node.

var fore = function fore(ref, elem) {
  return utils.queryDOM(ref).parentNode.insertBefore(utils.queryDOM(elem), utils.queryDOM(ref));
};

//DOM function for inserting an element after a specified node.
var aft = function aft(ref, elem) {
  ref = utils.queryDOM(ref);
  ref = ref.nextElementSibling;

  return ref.parentNode.insertBefore(utils.queryDOM(elem), ref);
};

//DOM function for showing an element, or a list of elements.
var show = function show(elem) {
  var disp = arguments.length <= 1 || arguments[1] === undefined ? 'block' : arguments[1];

  elem = utils.queryDOM(elem);
  if (Array.isArray(elem)) {
    elem.forEach(function (l) {
      l.style.display = disp;
    });
  } else {
    elem.style.display = disp;
  }
};

//DOM function for hiding an element, or a list of elements.
var hide = function hide(elem) {
  elem = utils.queryDOM(elem);

  if (Array.isArray(elem)) {
    elem.forEach(function (l) {
      l.style.display = 'none';
    });
  } else {
    elem.style.display = 'none';
  }
};

//DOM function for setting height and width of an element. 's' is an object, with height and width as keys.
var size = function size(elem, h, w) {
  elem = utils.queryDOM(elem);

  elem.style.height = h;
  elem.style.width = w;
  return elem;
};

//function clones given node.ddeep is a boolean, if true, clone will include all descendants as well as node and its' attributes.
var clone = function clone(elem, deep) {
  var node = elem.cloneNode(deep);
  return node;
};

//Function for setting css style properties of elements.
// var style = function(el) {
//   if (el[0] === '#') {                                                      //DONE:110 Give this chaining functionality.
//     el = el.slice(1);
//     return document.getElementById(el).style;
//   } else if (el[0] === '.') {
//     el = el.slice(1);
//     return document.getElementsByClassName(el)[0].style;
//   } else {
//     return document.getElementsByTagName(el)[0].style;
//   }
// };

module.exports = {
  make: make,
  bones: bones,
  clone: clone,
  // all: all,
  put: put,
  kill: kill,
  fore: fore,
  aft: aft,
  show: show,
  hide: hide,
  size: size
};