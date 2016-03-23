
/*
DOM.js

This file contains the code for the elements.js librarys' DOM manipulation
convenience functions.

Author: Eric James Foster
License: ISC
*/

import Element from './Element';
import { log } from './logger';
import * as utils from './utilities';


// require('babel-polyfill');

//TODO:0 Check out querySelector() method, see if it helps out.
//DOING:0 go() DOMREady function, Class toggling method, aft(), fore(), size(), show(), hide().



//This function queries the dom, getting one element for each query (i.e. class/tags), creates
//an Element object with it and returns it, so that it may be easily styled.
var dom = function(el) {
  el = utils.queryDOM(el);

  return new Element(el);
};


/*function for insterting template literals into the DOM.

bones(`

<html>
  <head></head>
  <body></body>
</html>

`);

*/
var bones = function(tempLit, elem='body') {
  log('hello', 'yellow');
  elem = el(elem);
  elem.innerHTML += tempLit;

  return elem;
};



//Create element alias function.
var make = function(l, tag) {
  var t = tag || 'div',
     el = document.createElement(t);

  if (l[0] === '#') {
    l = l.slice(1);
    el.id = l;
    return new Element(el);
  } else if (l[0] === '.') {
    l = l.slice(1);
    el.className = l;
    return new Element(el);
  }
};


//DOM querying alias function. Will automatically narrow class or tag queries down to one result. It will not return an array.
var el = function(el) {
  return utils.queryDOM(el);
};

//DOM querying function, same as above, but it will return an array if a tag or class name are given as argument.
var all = function(l) {
  return utils.queryDOM(el, 'all');
};

//Function for appending elements to other elements.
var put = function(el, mom) {                                                  //DONE:120 Make sure this works.
  if (typeof el === 'string') {                                                //IDEA:0 If el doesn't exist, create it and give it id/class.
    if (el[0] === '#') {
      el = el.slice(1);
      if (typeof mom === 'string') {
        if (mom[0] === '#') {                                                  //TEST:40 Test this function thoroughly.
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

//DOM function for inserting an element before a specified node.

var fore = function(ref, el) {
  return ref.parentNode.insertBefore(el, ref);
};

//DOM function for inserting an element after a specified node.
var aft = function(ref, el) {
  ref = ref.nextElementSibling;

  return ref.parentNode.insertBefore(el, ref);
};

//DOM function for showing an element, or a list of elements.
var show = function(el) {
  if (Array.isArray(el)) {
    el.forEach((elem)=> {
      elem.style.display = 'block';
    });
  } else {
    el.style.display = 'block';
  }
};

//DOM function for hiding an element, or a list of elements.
var hide = function(el) {
  var elem;
  if (Array.isArray(el)) {
    el.forEach((elem)=> {
      elem.style.display = 'none';
    });
  } else {
    el.style.display = 'none';
  }
};

//DOM function for setting height and width of an element. 's' is an object, with height and width as keys.
var size = function(el, s) {
  el.style.height = s.height;
  el.style.width  = s.width;
  return el;
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
                   el: el,
                 make: make,
                  dom: dom,
                bones: bones,
                  all: all,
                  put: put,
                 kill: kill,
                 fore: fore,
                  aft: aft,
                 show: show,
                 hide: hide,
                 size: size
                            };
