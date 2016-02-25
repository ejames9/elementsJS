
/*
DOM.js

This file contains the code for the elements.js librarys' DOM manipulation
convenience functions.

Author: Eric James Foster
License: ISC
*/


require('babel-polyfill');



//This function queries the dom, getting one element for each query (i.e. class/tags), creates
//an Element object with it and returns it, so that it may be easily styled.
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
//   if (el[0] === '#') {                                                      //DONE:70 Give this chaining functionality.
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
                  css: css,
                 make: make,
                  dom: dom,
                query: query,
                  put: put,
                 kill: kill
                           }
