
/*
Element.js

This is a helper file for the elements.js index, which houses
the code for the Element Class.

Author: Eric James Foster
License: ISC
*/


import { err, log } from './logger';
import * as elements from '../index';
import * as events from './events';
import * as DOM from './DOM';


// require('babel-polyfill');


//DOING:10 List all functions that need to be added (.textContent, innerHTML etc.)
//DOING:20 Complete all functions for this object.
//IDEA: A method that incorporates jquery methods into El object (animation?).



export default function Element(el) {
  this.el = el;


  if (!(this instanceof Element)) {
    return new Element();
  }

  // Style methods //
  this.backgroundColor = function(val) {
    if (val !== undefined) {
      el.style.backgroundColor = val;
      return this;
    } else {
      val = el.style.backgroundColor;
      return val;
    }
  };
  this.border = function(val) {
    if (val !== undefined) {
      el.style.border = val;
      return this;
    } else {
      val = el.style.border;
      return val;
    }
  };
  this.background = function(val) {
    if (val !== undefined) {
      el.style.background = val;
      return this;
    } else {
      val = el.style.background;
      return val;
    }
  };
  this.backgroundColor = function(val) {
    if (val !== undefined) {
      el.style.backgroundColor = val;
      return this;
    } else {
      val = el.style.backgroundColor;
      return val;
    }
  };
  this.backgroundImage = function(val) {
    if (val !== undefined) {
      el.style.backgroundImage = val;
      return this;
    } else {
      val = el.style.backgroundImage;
      return val;
    }
  };
  this.backgroundSize = function(val) {
    if (val !== undefined) {
      el.style.backgroundSize = val;
      return this;
    } else {
      val = el.style.backgroundSize;
      return val;
    }
  };
  this.backgroundPosition = function(val) {
    if (val !== undefined) {
      el.style.backgroundPosition = val;
      return this;
    } else {
      val = el.style.backgroundPosition;
      return val;
    }
  };
  this.borderColor = function(val) {
    if (val !== undefined) {
      el.style.borderColor = val;
      return this;
    } else {
      val = el.style.borderColor;
      return val;
    }
  };
  this.borderRadius = function(val) {
    if (val !== undefined) {
      el.style.borderRadius = val;
      return this;
    } else {
      val = el.style.borderRadius;
      return val;
    }
  };
  this.borderWidth = function(val) {
    if (val !== undefined) {
      el.style.borderWidth = val;
      return this;
    } else {
      val = el.style.borderWidth;
      return val;
    }
  };
  this.borderTop = function(val) {
    if (val !== undefined) {
      el.style.borderTop = val;
      return this;
    } else {
      val = el.style.borderTop;
      return val;
    }
  };
  this.borderBottom = function(val) {
    if (val !== undefined) {
      el.style.borderBottom = val;
      return this;
    } else {
      val = el.style.borderBottom;
      return val;
    }
  };
  this.borderRight = function(val) {
    if (val !== undefined) {
      el.style.borderRight = val;
      return this;
    } else {
      val = el.style.borderRight;
      return val;
    }
  };
  this.borderLeft = function(val) {
    if (val !== undefined) {
      el.style.borderLeft = val;
      return this;
    } else {
      val = el.style.borderLeft;
      return val;
    }
  };
  this.bottom = function(val) {
    if (val !== undefined) {
      el.style.bottom = val;
      return this;
    } else {
      val = el.style.bottom;
      return val;
    }
  };
  this.boxShadow = function(val) {
    if (val !== undefined) {
      el.style.boxShadow = val;
      return this;
    } else {
      val = el.style.boxShadow;
      return val;
    }
  };
  this.boxSizing = function(val) {
    if (val !== undefined) {
      el.style.boxSizing = val;
      return this;
    } else {
      val = el.style.boxSizing;
      return val;
    }
  };
  this.clear = function(val) {
    if (val !== undefined) {
      el.style.clear = val;
      return this;
    } else {
      val = el.style.clear;
      return val;
    }
  };
  this.color = function(val) {
    if (val !== undefined) {
      el.style.color = val;
      return this;
    } else {
      val = el.style.color;
      return val;
    }
  };
  this.columns = function(val) {
    if (val !== undefined) {
      el.style.columns = val;
      return this;
    } else {
      val = el.style.columns;
      return val;
    }
  };
  this.content = function(val) {
    if (val !== undefined) {
      el.style.content = val;
      return this;
    } else {
      val = el.style.content;
      return val;
    }
  };
  this.cursor = function(val) {
    if (val !== undefined) {
      el.style.cursor = val;
      return this;
    } else {
      val = el.style.cursor;
      return val;
    }
  };
  this.direction = function(val) {
    if (val !== undefined) {
      el.style.direction = val;
      return this;
    } else {
      val = el.style.direction;
      return val;
    }
  };
  this.display = function(val) {
    if (val !== undefined) {
      el.style.display = val;
      return this;
    } else {
      val = el.style.display;
      return val;
    }
  };
  this.cssFloat = function(val) {
    if (val !== undefined) {
      el.style.cssFloat = val;
      return this;
    } else {
      val = el.style.cssFloat;
      return val;
    }
  };
  this.font = function(val) {
    if (val !== undefined) {
      el.style.font = val;
      return this;
    } else {
      val = el.style.font;
      return val;
    }
  };
  this.fontFamily = function(val) {
    if (val !== undefined) {
      el.style.fontFamily = val;
      return this;
    } else {
      val = el.style.fontFamily;
      return val;
    }
  };
  this.fontStyle = function(val) {
    if (val !== undefined) {
      el.style.fontStyle = val;
      return this;
    } else {
      val = el.style.fontStyle;
      return val;
    }
  };
  this.fontSize = function(val) {
    if (val !== undefined) {
      el.style.fontSize = val;
      return this;
    } else {
      val = el.style.fontSize;
      return val;
    }
  };
  this.fontWeight = function(val) {
    if (val !== undefined) {
      el.style.fontWeight = val;
      return this;
    } else {
      val = el.style.fontWeight;
      return val;
    }
  };
  this.height = function(val) {
    if (val !== undefined) {
      el.style.height = val;
      return this;
    } else {
      val = el.style.height;
      return val;
    }
  };
  this.lineHeight = function(val) {
    if (val !== undefined) {
      el.style.lineHeight = val;
      return this;
    } else {
      val = el.style.lineHeight;
      return val;
    }
  };
  this.icon = function(val) {
    if (val !== undefined) {
      el.style.icon = val;
      return this;
    } else {
      val = el.style.icon;
      return val;
    }
  };
  this.left = function(val) {
    if (val !== undefined) {
      el.style.left = val;
      return this;
    } else {
      val = el.style.left;
      return val;
    }
  };
  this.listStyle = function(val) {
    if (val !== undefined) {
      el.style.listStyle = val;
      return this;
    } else {
      val = el.style.listStyle;
      return val;
    }
  };
  this.margin = function(val) {
    if (val !== undefined) {
      el.style.margin = val;
      return this;
    } else {
      val = el.style.margin;
      return val;
    }
  };
  this.marginRight = function(val) {
    if (val !== undefined) {
      el.style.marginRight = val;
      return this;
    } else {
      val = el.style.marginRight;
      return val;
    }
  };
  this.marginLeft = function(val) {
    if (val !== undefined) {
      el.style.marginLeft = val;
      return this;
    } else {
      val = el.style.marginLeft;
      return val;
    }
  };
  this.marginTop = function(val) {
    if (val !== undefined) {
      el.style.marginTop = val;
      return this;
    } else {
      val = el.style.marginTop;
      return val;
    }
  };
  this.marginBottom = function(val) {
    if (val !== undefined) {
      el.style.marginBottom = val;
      return this;
    } else {
      val = el.style.marginBottom;
      return val;
    }
  };
  this.maxHeight = function(val) {
    if (val !== undefined) {
      el.style.maxHeight = val;
      return this;
    } else {
      val = el.style.maxHeight;
      return val;
    }
  };
  this.maxWidth = function(val) {
    if (val !== undefined) {
      el.style.maxWidth = val;
      return this;
    } else {
      val = el.style.maxWidth;
      return val;
    }
  };
  this.minWidth = function(val) {
    if (val !== undefined) {
      el.style.minWidth = val;
      return this;
    } else {
      val = el.style.minWidth;
      return val;
    }
  };
  this.minHeight = function(val) {
    if (val !== undefined) {
      el.style.minHeight = val;
      return this;
    } else {
      val = el.style.minHeight;
      return val;
    }
  };
  this.opacity = function(val) {
    if (val !== undefined) {
      el.style.opacity = val;
      return this;
    } else {
      val = el.style.opacity;
      return val;
    }
  };
  this.outline = function(val) {
    if (val !== undefined) {
      el.style.outline = val;
      return this;
    } else {
      val = el.style.outline;
      return val;
    }
  };
  this.overflow = function(val) {
    if (val !== undefined) {
      el.style.overflow = val;
      return this;
    } else {
      val = el.style.overflow;
      return val;
    }
  };
  this.overflowX = function(val) {
    if (val !== undefined) {
      el.style.overflowX = val;
      return this;
    } else {
      val = el.style.overflowX;
      return val;
    }
  };
  this.overflowY = function(val) {
    if (val !== undefined) {
      el.style.overflowY = val;
      return this;
    } else {
      val = el.style.overflowY;
      return val;
    }
  };
  this.padding = function(val) {
    if (val !== undefined) {
      el.style.padding = val;
      return this;
    } else {
      val = el.style.padding;
      return val;
    }
  };
  this.paddingRight = function(val) {
    if (val !== undefined) {
      el.style.paddingRight = val;
      return this;
    } else {
      val = el.style.paddingRight;
      return val;
    }
  };
  this.paddingLeft = function(val) {
    if (val !== undefined) {
      el.style.paddingLeft = val;
      return this;
    } else {
      val = el.style.paddingLeft;
      return val;
    }
  };
  this.paddingTop = function(val) {
    if (val !== undefined) {
      el.style.paddingTop = val;
      return this;
    } else {
      val = el.style.paddingTop;
      return val;
    }
  };
  this.paddingBottom = function(val) {
    if (val !== undefined) {
      el.style.paddingBottom = val;
      return this;
    } else {
      val = el.style.paddingBottom;
      return val;
    }
  };
  this.position = function(val) {
    if (val !== undefined) {
      el.style.position = val;
      return this;
    } else {
      val = el.style.position;
      return val;
    }
  };
  this.right = function(val) {
    if (val !== undefined) {
      el.style.right = val;
      return this;
    } else {
      val = el.style.right;
      return val;
    }
  };
  this.top = function(val) {
    if (val !== undefined) {
      el.style.top = val;
      return this;
    } else {
      val = el.style.top;
      return val;
    }
  };
  this.textAlign = function(val) {
    if (val !== undefined) {
      el.style.textAlign = val;
      return this;
    } else {
      val = el.style.textAlign;
      return val;
    }
  };
  this.textDecoration = function(val) {
    if (val !== undefined) {
      el.style.textDecoration = val;
      return this;
    } else {
      val = el.style.textDecoration;
      return val;
    }
  };
  this.textShadow = function(val) {
    if (val !== undefined) {
      el.style.textShadow = val;
      return this;
    } else {
      val = el.style.textShadow;
      return val;
    }
  };
  this.verticalAlign = function(val) {
    if (val !== undefined) {
      el.style.verticalAlign = val;
      return this;
    } else {
      val = el.style.verticalAlign;
      return val;
    }
  };
  this.visibility = function(val) {
    if (val !== undefined) {
      el.style.visibility = val;
      return this;
    } else {
      val = el.style.visibility;
      return val;
    }
  };
  this.whiteSpace = function(val) {
    if (val !== undefined) {
      el.style.whiteSpace = val;
      return this;
    } else {
      val = el.style.whiteSpace;
      return val;
    }
  };
  this.width = function(val) {
    if (val !== undefined) {
      el.style.width = val;
      return this;
    } else {
      val = el.style.width;
      return val;
    }
  };
  this.wordSpacing = function(val) {
    if (val !== undefined) {
      el.style.wordSpacing = val;
      return this;
    } else {
      val = el.style.wordSpacing;
      return val;
    }
  };
  this.zIndex = function(val) {
    if (val !== undefined) {
      el.style.zIndex = val;
      return this;
    } else {
      val = el.style.zIndex;
      return val;
    }
  };
  this.alignContent = function(val) {
    if (browser.safari && browser.version >= 7) {
      if (val !== undefined) {
        el.style.WebkitAlignContent = val;
        return this;
      } else {
        val = el.style.WebkitAlignContent;
        return val;
      }
    } else {
      if (val !== undefined) {
        el.style.alignContent = val;
        return this;
      } else {
        val = el.style.alignContent;
        return val;
      }
    }
  };
  this.transformOrigin = function(val) {
    if (browser.webkit) {
      if (val !== undefined) {
        el.style.WebkitTransformOrigin = val;
        return this;
      } else {
        val = el.style.WebkitTransformOrigin;
        return val;
      }
    } else {
      if (val !== undefined) {
        el.style.transformOrigin = val;
        return this;
      } else {
        val = el.style.transformOrigin;
        return val;
      }
    }
  };
  this.transition = function(val) {
    if (browser.safari) {
      if (val !== undefined) {
        el.style.WebkitTransition = val;
        return this;
      } else {
        val = el.style.WebkitTransition;
        return val;
      }
    } else {
      if (val !== undefined) {
        el.style.transition = val;
        return this;
      } else {
        val = el.style.transition;
        return val;
      }
    }
  };
  this.transitionDuration = function(val) {
    if (browser.safari) {
      if (val !== undefined) {
        el.style.WebkitTransitionDuration = val;
        return this;
      } else {
        val = el.style.WebkitTransitionDuration;
        return val;
      }
    } else {
      if (val !== undefined) {
        el.style.transitionDuration = val;
        return this;
      } else {
        val = el.style.transitionDuration;
        return val;
      }
    }
  };
  this.animation = function(val) {
    if (browser.webkit) {
      if (val !== undefined) {
        el.style.WebkitAnimation = val;
        return this;
      } else {
        val = el.style.WebkitAnimation;
        return val;
      }
    } else {
      if (val !== undefined) {
        el.style.animation = val;
        return this;
      } else {
        val = el.style.animation;
        return val;
      }
    }
  };
  this.filter = function(val) {
    if (browser.webkit) {
      if (val !== undefined) {
        el.style.WebkitFilter = val;
        return this;
      } else {
        val = el.style.WebkitFilter;
        return val;
      }
    } else {
      if (val !== undefined) {
        el.style.filter = val;
        return this;
      } else {
        val = el.style.filter;
        return val;
      }
    }
  };
  this.flex = function(val) {
    if (browser.safari) {
      if (val !== undefined) {
        el.style.WebkitFlex = val;
        return this;
      } else {
        val = el.style.WebkitFlex;
        return val;
      }
    } else {
      if (val !== undefined) {
        el.style.flex = val;
        return this;
      } else {
        val = el.style.flex;
        return val;
      }
    }
  };
  this.perspective = function(val) {
    if (browser.webkit) {
      if (val !== undefined) {
        el.style.WebkitPerspective = val;
        return this;
      } else {
        val = el.style.WebkitPerspective;
        return val;
      }
    } else {
      if (val !== undefined) {
        el.style.perspective = val;
        return this;
      } else {
        val = el.style.perspective;
        return val;
      }
    }
  };
  this.perspectiveOrigin = function(val) {
    if (browser.webkit) {
      if (val !== undefined) {
        el.style.WebkitPerspectiveOrigin = val;
        return this;
      } else {
        val = el.style.WebkitPerspectiveOrigin;
        return val;
      }
    } else {
      if (val !== undefined) {
        el.style.perspectiveOrigin = val;
        return this;
      } else {
        val = el.style.perspectiveOrigin;
        return val;
      }
    }
  };
  this.transitionDelay = function(val) {
    if (browser.safari) {
      if (val !== undefined) {
        el.style.WebkitTransitionDelay = val;
        return this;
      } else {
        val = el.style.WebkitTransitionDelay;
        return val;
      }
    } else {
      if (val !== undefined) {
        el.style.transitionDelay = val;
        return this;
      } else {
        val = el.style.transitionDelay;
        return val;
      }
    }
  };

  // Element object methods //

  /*This function is a wrapper that allows the developer to create an anonymous function that has
  access to the core element object and its' methods... Meaning, that methods not incuded in this library
  can still be used in a chain-like fashion.  # example:

<'#header'/>
        .height('200px')
        .width('800px')
        .backgroundColor('red')
        .text('elements.js')
        .core(el=>
         {    el.lang = 'spanish';
              el.jackAss();
              el.nodeValue = this;
              el.normalize();   }
             )
        .put('body')

*/
  this.core = function(func) {
    func(this.el.style);
    return this;
  };

  this.add = function(child) {
    this.el.appendChild(child);
    return this;
  };

  this.children = function(s) {
    if (s === 'all') {
      let count = this.el.childNodes;
    } else {
      let count = this.el.children;
    }
    return count;
  };

  this.first = function(s) {                                                   //TEST:30 Make sure this works.
    let count = (s === 'all') ?
      this.el.firstChild
      :
      this.el.firstElementChild;
    return count;
  };

  this.id = function(val) {
    if (val !== undefined) {
      this.el.id = val;
      return this;
    } else {
      val = this.el.id;
      return val;
    }
  };

  this.class = function(val) {
    if (val !== undefined) {
      this.el.className = val;
      return this;
    } else {
      val = this.el.className;
      return val;
    }
  };

  this.xClass = function(cb=null) {
    if (cb !== null) {
      cb();
    }
    this.el.className = '';
    return this;
  };

  this.html = function(val) {
    if (val !== undefined) {
      this.el.innerHTML = val;
      return this;
    } else {
      val = this.el.innerHTML;
      return val;
    }
  };

  this.text = function(val) {
    if (val !== undefined) {
      this.el.textContent = val;
      return this;
    } else {
      val = this.el.textContent;
      return val;
    }
  };

  this.lang = function(val) {
    if (val !== undefined) {
      this.el.lang = val;
      return this;
    } else {
      val = this.el.lang;
      return val;
    }
  };

  this.clone = function() {
    let node = this.el.cloneNode();
    return node;
  };

  this.sib = function(ord, s) {
    let r;

    if (ord === 'next') {
      if (s === undefined) {
        r = this.el.nextElementSibling;
      } else if (s === 'all'){
        r = this.el.nextSibling;
      } else {
        err('Invalid argument.');
      }
    } else if (ord === 'prev') {
      if (s === undefined) {
        r = this.el.previousElementSibling;
      } else if (s === 'all'){
        r = this.el.previousSibling;
      } else {
        err('Invalid argument.');
      }
    } else {
      err('Invalid argument.');
    }
    return r;
  };

  this.value = function(val) {
    if (val !== undefined) {
      this.el.nodeValue = val;
      return this;
    } else {
      val = this.el.nodeValue;
      return val;
    }
  };

  this.normalize = function() {
    this.el.normalize();
    return this;
  };

  this.toString = function() {
    let r = this.el.toString();
    return r;
  };

  this.tag = function() {
    let r = this.el.tagName();
    return r;
  };

  this.offset = function(s) {
    let off = {};

    if (s) {
      if (s === 'all') {
        off.top    = this.el.offsetTop;
        off.left   = this.el.offsetLeft;
        off.height = this.el.offsetHeight;
        off.width  = this.el.offsetWidth;
        off.parent = this.el.offsetParent;
      } else {
        err('Invalid argument.');
      }
    } else {
      off.top  = this.el.offsetTop;
      off.left = this.el.offsetLeft;
    }
    return off;
  };

  this.title = function(val) {
    if (val !== undefined) {
      this.el.title = val;
      return this;
    } else {
      val = this.el.title;
      return val;
    }
  };

  this.attrib = function(attrib, val) {                                        //TEST:0 Make sure this works
    let r = (val !== undefined && val !== 'remove') ? (
      this.el.setAttribute(attrib, val),
      undefined
    ) : (attrib !== undefined && val !== 'remove') ?
      this.el.getAttribute(attrib)
    : (
      this.el.removeAttribute(attrib),
      undefined
    );
    // (r !== undefined) ?                                                     //TODO:10 See if you can make this work.
    //   return r
    // :
    //   return this;
    if (r !== undefined) {
      return r;
    } else {
      return this;
    }
  };

  this.put = function(mom) {
    DOM.put(this.el, mom);
    return this;
  };

  this.ma = function() {
    return this.el.parentNode;
  };

  this.fore = function(el, ref=null) {                                    //TEST:20 Make sure this works.
    (ref === null) ?
      el.parentNode.insertBefore(this.el, el)
      :
      this.el.parentNode.insertBefore(el, this.el);

    return this;
  };

  this.aft = function(el, ref=null) {                                    //TEST:10 Make sure this works.
    (ref === null) ?
      el.parentNode.insertBefore(this.el, el.nextElementSibling)
      :
      this.el.parentNode.insertBefore(el, this.el.nextElementSibling);

    return this;
  };

  this.on = function(ev, callback) {
    if (document.addEventListener) {
      events.on(ev, this.el, callback);
    } else {
      events.onIE(ev, this.el, callback);
    }
    return this;
  };

  this.off = function(ev, callback) {
    if (document.addEventListener) {
      events.off(ev, this.el, callback);
    } else {
      events.offIE(ev, this.el, callback);
    }
    return this;
  };

  this.once = function(ev, callback) {
    if (document.addEventListener) {
      events.once(ev, this.el, callback);
    } else {
      events.onceIE(ev, this.el, callback);
    }
    return this;
  };

  this.toggle = function(onFunc, offFunc) {
    window.toggleFlag = true;

    if (toggleFlag) {
      onFunc();
      toggleFlag = false;
    } else {
      offFunc();
      toggleFlag = true;
    }
    return this;
  };

  this.size = function(height, width) {
    this.el.style.height = height;
    this.el.style.width  = width;

    return this;
  };


  this.show = function(disp='block') {
    this.el.style.display = disp;

    return this;
  };

  this.hide = function() {
    this.el.style.display = 'none';

    return this;
  };

  this.blur = function(cb=null) {
    if (this.el.addEventListener) {
      events.blur(this.el, cb);
    } else {
      events.blurIE(this.el, cb);
    }
    return this;
  };


  this.click = function(cb=null) {
    if (this.el.addEventListener) {
      events.click(this.el, cb);
    } else {
      events.clickIE(this.el, cb);
    }
    return this;
  };


  this.dblClick = function(cb=null) {
    if (this.el.addEventListener) {
      events.dblClick(this.el, cb);
    } else {
      events.dblClickIE(this.el, cb);
    }
    return this;
  };


  this.error = function(cb=null) {
    if (this.el.addEventListener) {
      events.error(this.el, cb);
    } else {
      events.errorIE(this.el, cb);
    }
    return this;
  };


  this.focus = function(cb=null) {
    if (this.el.addEventListener) {
      events.focus(this.el, cb);
    } else {
      events.focusIE(this.el, cb);
    }
    return this;
  };


  this.focusIn = function(cb=null) {
    if (this.el.addEventListener) {
      events.focusIn(this.el, cb);
    } else {
      events.focusInIE(this.el, cb);
    }
    return this;
  };


  this.focusOut = function(cb=null) {
    if (this.el.addEventListener) {
      events.focusOut(this.el, cb);
    } else {
      events.focusOut(this.el, cb);
    }
    return this;
  };


  this.keyUp = function(cb=null) {
    if (this.el.addEventListener) {
      events.keyUp(this.el, cb);
    } else {
      events.keyUpIE(this.el, cb);
    }
    return this;
  };


  this.keyDown = function(cb=null) {
    if (this.el.addEventListener) {
      events.keyDown(this.el, cb);
    } else {
      events.keyDownIE(this.el, cb);
    }
    return this;
  };


  this.load = function(cb=null) {
    if (this.el.addEventListener) {
      events.load(this.el, cb);
    } else {
      events.loadIE(this.el, cb);
    }
    return this;
  };


  this.unLoad = function(cb=null) {
    if (this.el.addEventListener) {
      events.unLoad(this.el, cb);
    } else {
      events.unLoadIE(this.el, cb);
    }
    return this;
  };


  this.mouse = function(cb=null) {
    if (this.el.addEventListener) {
      events.mouse(this.el, cb);
    } else {
      events.mouseIE(this.el, cb);
    }
    return this;
  };


  this.resize = function(cb=null) {
    if (this.el.addEventListener) {
      events.resize(this.el, cb);
    } else {
      events.resizeIE(this.el, cb);
    }
    return this;
  };


  this.scroll = function(cb=null) {
    if (this.el.addEventListener) {
      events.scroll(this.el, cb);
    } else {
      events.scrollIE(this.el, cb);
    }
    return this;
  };


  this.select = function(cb=null) {
    if (this.el.addEventListener) {
      events.select(this.el, cb);
    } else {
      events.selectIE(this.el, cb);
    }
    return this;
  };



  /////// Experimental Methods ////////

  this.only = function(num, func, arr=null) {
    log(typeof onlyArr, 'yellow');

    if (null !== arr) {
      if (typeof onlyArr === 'undefined') {
        window.onlyArr = arr;
        window.eachCount = 1;
      } else {
        if (onlyArr !== arr) {
          window.eachCount = 1;
          window.onlyArr = arr;
        } else {
          eachCount++;
        }
      }
    }
    if (num === eachCount) {
      func();
      log(eachCount, ['red', 'bold']);
    } else {
      log(eachCount, ['blue', 'bold']);
    }

    // if (eachCount === onlyArr.length) {
    //   eachCount = '';
    // }
    log(eachCount, 'white');
    return this;
  };

};
