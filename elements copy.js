/*
Elements.js

A JavaScript DOM manipulation/Alias function Library.
This is the index file for the library. It contains alias functions for
all of the librarys' public functions. This makes it easy to import the
functions without a module prefix es6 style.

This is a cdn servable version of the library..
-----------------------------------------------
Author: Eric James Foster
EMail: maniphestival@gmail.com
License: MIT
Version: 1.0.0
URL: ""
*/



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


//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================

/*
Element.js

This is a helper file for the elements.js index, which houses
the code for the Element Class.

Author: Eric James Foster
License: ISC
*/

//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================


// The element class......
function Element(el) {
  if (isArray(el)) {
    this.els = el;
  } else {
    this.el = el;
    this.element = true;
  }

  var self = this;

  if (!(this instanceof Element)) {
    return new Element();
  }


  // Style methods //

  this.border = function(val) {
    if (val !== undefined) {
      el.style.border = val;
      return this;
    } else {
      val = el.style.border;
      return val;
    }
  };
  this.bg = function(val) {
    if (val !== undefined) {
      el.style.background = val;
      return this;
    } else {
      val = el.style.background;
      return val;
    }
  };
  this.bgColor = function(val) {
    if (val !== undefined) {
      el.style.backgroundColor = val;
      return this;
    } else {
      val = el.style.backgroundColor;
      return val;
    }
  };
  this.bgImage = function(val) {
    if (val !== undefined) {
      el.style.backgroundImage = val;
      return this;
    } else {
      val = el.style.backgroundImage;
      return val;
    }
  };
  this.bgSize = function(val) {
    if (val !== undefined) {
      el.style.backgroundSize = val;
      return this;
    } else {
      val = el.style.backgroundSize;
      return val;
    }
  };
  this.bgPosition = function(val) {
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

  this.transform = function(val) {
    this.el.style.transform = val;

    return this;
  };

  //<<========= Transform Methods ======================>>

    this.turn = function(val) {
      this.el.style.transform = 'rotate(' + String(val) + 'deg)';

      return this;
    };

    this.turnX = function(val) {
      this.el.style.transform = 'rotateX(' + String(val) + 'deg)';

      return this;
    };

    this.turnY = function(val) {
      this.el.style.transform = 'rotateY(' + String(val) + 'deg)';

      return this;
    };

    this.turnZ = function(val) {
      this.el.style.transform = 'rotateZ(' + String(val) + 'deg)';

      return this;
    };

    this.moveX = function(val) {
      this.el.style.transform = 'translateX(' + String(val) + 'px)';

      return this;
    };

    this.moveY = function(val) {
      this.el.style.transform = 'translateY(' + String(val) + 'px)';

      return this;
    };

    this.toRight = function(val) {
      this.el.style.transform = 'translateX(' + String(val) + 'px)';

      return this;
    };

    this.toLeft = function(val) {
      this.el.style.transform = 'translateX(' + String(-val) + 'px)';

      return this;
    };

    this.up = function(val) {
      this.el.style.transform = 'translateY(' + String(-val) + 'px)';

      return this;
    };

    this.down = function(val) {
      this.el.style.transform = 'translateY(' + String(val) + 'px)';

      return this;
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
  this.core = function(func, obj='el') {
    if (obj === 'style')
      func(this.el.style);
    else if (obj === 'el')
      func(this.el);
    else
      err('Invalid Argument.');

    return this;
  };

  this.add = function(child) {
    child = DOM.el(child);
    this.el.appendChild(child);
    return this;
  };

  this.children = function(s) {
    let count, arr = [];
    if (s === 'all') {
      count = this.el.childNodes;
    } else {
      count = this.el.children;
    }
    for (let i = 0; i < count.length; i++) {
      arr.push(new Element(count[i]));
    }
    return new Element(arr);
  };

  this.child = function() {
    let count;
    if (isArray(this.el.children)) {
      let count = this.el.children;
          count = count[0];
    } else {
      let count = this.el.children;
    }
    return new Element(count);
  };

  this.first = function(s) {                                                   //TEST:30 Make sure this works.
    let sib = (s === 'node') ?
      this.el.firstChild
      :
      this.el.firstElementChild;
    return new Element(sib);
  };

  this.second = function(s) {                                                 //TEST:30 Make sure this works.
    let sib = (s === 'node') ?
      this.el.firstChild.nextSibling
      :
      this.el.firstElementChild.nextElementSibling;
    return new Element(sib);
  };

  this.third = function(s) {
    let varb = el.firstElementChild.nextElementSibling,
       varb2 = el.firstChild.nextSibling,                                           //TEST:30 Make sure this works.
    sib = (s === 'node') ?
      varb2.nextSibling
      :
      varb.nextElementSibling;
    return new Element(sib);
  };

  this.last = function(s) {                                                   //TEST:30 Make sure this works.
    let sib = (s === 'node') ?
      this.el.lastChild
      :
      this.el.lastElementChild;
    return new Element(sib);
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


  this.class = function(val, mod=null) {
    if (val !== undefined) {
      if (null !== mod) {
        if (mod === '+') {
          this.el.classList.add(val);
          return this;
        } else if (mod == '-') {
          this.el.classList.remove(val);
          return this;
        } else {
          err('Invalid Argument');
        }
      } else {
        this.el.className = val;
        return this;
      }
    } else {
      val = this.el.className;
      return val;
    }
  };


  this.x = function(elem) {
    const child = DOM.el(elem);
    this.el.removeChild(child);
    return this;
  };


  this.xClass = function(cb=null) {
    if (cb !== null) {
      cb();
    }
    this.el.className = '';
    return this;
  };


  this.html = function(val, mod=null) {
    if (val !== undefined) {
      if (null !== mod) {
        if (mod === '+') {
          this.el.innerHTML += val;
          return this;
        } else {
          err('Invalid Argument');
        }
      } else {
        this.el.innerHTML = val;
        return this;
      }
    } else {
      val = this.el.innerHTML;
      return val;
    }
  };


    this.text = function(val, mod=null) {
      if (val !== undefined) {
        if (null !== mod) {
          if (mod === '+') {
            this.el.textContent += val;
            return this;
          } else {
            err('Invalid Argument');
          }
        } else {
          this.el.textContent = val;
          return this;
        }
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

  this.clone = function(deep) {
    let node = this.el.cloneNode(deep);
    return node;
  };

  this.sib = function(ord) {
    let r;

    if (ord === 'next') {
      r = this.el.nextElementSibling;
    } else if (ord === 'prev') {
      r = this.el.previousElementSibling;
    } else {
      err('Invalid argument.');
    }
    return new Element(r);
  };

  this.node = function(ord) {
    let r;

    if (ord === 'next') {
      r = this.el.nextSibling;
    } else if (ord === 'prev') {
      r = this.el.previousSibling;
    } else {
      err('Invalid argument.');
    }
    return new Element(r);
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
    let r = this.el.tagName;
    return r;
  };

  this.fromTop = function() {                                                  //TODO
    let r = this.el.offsetTop;

    return r;
  };

  this.fromLeft = function() {
    let r = this.el.offsetLeft;

    return r;
  };


  this.offset = function() {
    let off = {};

    off.top    = this.el.offsetTop;
    off.left   = this.el.offsetLeft;
    off.height = this.el.offsetHeight;
    off.width  = this.el.offsetWidth;
    off.parent = this.el.offsetParent;

    return off;
  };

  this.scrolled = function(val) {
    if (val !== undefined) {
      el.scrollTop = val;
      return this;
    } else if (val === 0) {
      el.scrollTop = 0;
      return this;
    } else {
      val = el.scrollTop;
      return val;
    }
  };

  this.scrollLeft = function(val) {
    if (val !== undefined) {
      el.scrollLeft = val;
      return this;
    } else {
      val = el.scrollLeft;
      return val;
    }
  };

  this.scrollHeight = function(val) {
    if (val !== undefined) {
      el.scrollHeight = val;
      return this;
    } else {
      val = el.scrollHeight;
      return val;
    }
  };

  this.scrollWidth = function(val) {
    if (val !== undefined) {
      el.scrollWidth = val;
      return this;
    } else {
      val = el.scrollWidth;
      return val;
    }
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


  this.put = function(mom) {
    DOM.put(this.el, mom);
    return this;
  };

  this.ma = function() {
    return new Element(this.el.parentNode);
  };

  this.fore = function(elem, ref=null) {
    elem = queryDOM(elem);                                               //TEST:20 Make sure this works.
    (ref === null) ?
      elem.parentNode.insertBefore(this.el, elem)
      :
      this.el.parentNode.insertBefore(elem, this.el);

    return this;
  };

  this.aft = function(elem, ref=null) {
    elem = queryDOM(elem);                                               //TEST:10 Make sure this works.
    (ref === null) ?
      elem.parentNode.insertBefore(this.el, elem.nextElementSibling)
      :
      this.el.parentNode.insertBefore(elem, this.el.nextElementSibling);

    return this;
  };

  this.on = function(ev, callback) {
    if (document.addEventListener) {
      events.on(ev, this.el, function(e) {
        return callback(e, new Element(el));
      });
    } else {
      events.on(ev, this.el, function(e) {
        return callback(e, new Element(el));
      });
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
      events.once(ev, this.el, function(e) {
        return callback(e, new Element(el));
      });
    } else {
      events.onceIE(ev, this.el, function(e) {
        return callback(e, new Element(el));
      });
    }
    return this;
  };

  // this.toggle = function(onFunc, offFunc) {                                 //NOTE: May be unnecessary.
  //   window.toggleFlag = true;
  //
  //   if (toggleFlag) {
  //     onFunc();
  //     toggleFlag = false;
  //   } else {
  //     offFunc();
  //     toggleFlag = true;
  //   }
  //   return this;
  // };

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

  this.viz = function(val) {
    this.el.style.visibility = val;

    return this;
  };



//---------Event Methods-----------------//

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


  this.mouse = function(sfx, cb=null) {
    if (this.el.addEventListener) {
      events.mouse(sfx, this.el, cb);
    } else {
      events.mouseIE(sfx, this.el, cb);
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


  this.every = function(eachFunc) {
    this.els.forEach((elem, i, a)=> {
      eachFunc(elem, a, i);
    });
    return this;
  };


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

  this.func = function(func, mod=null) {
    if (null === mod) {
      func(this.el);
    } else if (mod === 'style') {
      func(this.el.style);
    }
    return this;
  }


  //<<================Attribute Methods==================>>//

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

  this.src = function(val) {
    if (val !== undefined) {
      this.el.src = val;
      return this;
    } else {
      val = this.el.src;
      return val;
    }
  };

  this.alt = function(val) {
    if (val !== undefined) {
      this.el.alt = val;
      return this;
    } else {
      val = this.el.alt;
      return val;
    }
  };

  this.href = function(val) {
    if (val !== undefined) {
      this.el.href = val;
      return this;
    } else {
      val = this.el.href;
      return val;
    }
  };

  this.hash = function() {
    const _re = /\#.*/;
    let hash = _re.exec(el.href);

    return hash;
  };

  this.type = function(val) {
    if (val !== undefined) {
      this.el.type = val;
      return this;
    } else {
      val = this.el.type;
      return val;
    }
  };

};

//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================

/*
DOM.js

This file contains the code for the elements.js librarys' DOM manipulation
convenience functions.

Author: Eric James Foster
License: ISC
*/

//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================



/*function for insterting template literals into the DOM.

bones(`

<html>
  <head></head>
  <body></body>
</html>

`);

*/
var bones = function(tempLit, elem='body') {
  elem = utils.queryDOM(elem);
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
    return new element(el);
  } else if (l[0] === '.') {
    l = l.slice(1);
    el.className = l;
    return new element(el);
  }
};


/*DOM querying alias function. Will return an array if there is more than one result. If there is
 only 1 it will NOT, even if the CSS Selector is a className or tagName.*/
 //NOTE: Now referencing queryDOM() function from index.js.
var el = function(el) {
  return utils.queryDOM(el);
};



//------------------------------This function is not being used in the current build ---------------------------//
//DOM querying function, same as above, but it will return an array if a tag or class name are given as argument.
// var all = function(l) {
//   return utils.queryDOM(el, 'all');
// };



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

var fore = function(ref, elem) {
  return utils.queryDOM(ref).parentNode.insertBefore(utils.queryDOM(elem), utils.queryDOM(ref));
};

//DOM function for inserting an element after a specified node.
var aft = function(ref, elem) {
  ref = utils.queryDOM(ref);
  ref = ref.nextElementSibling;

  return ref.parentNode.insertBefore(utils.queryDOM(elem), ref);
};

//DOM function for showing an element, or a list of elements.
var show = function(elem, disp='block') {
  elem = utils.queryDOM(elem);
  if (Array.isArray(elem)) {
    elem.forEach((l)=> {
      l.style.display = disp;
    });
  } else {
    elem.style.display = disp;
  }
};

//DOM function for hiding an element, or a list of elements.
var hide = function(elem) {
  elem = utils.queryDOM(elem);

  if (Array.isArray(elem)) {
    elem.forEach((l)=> {
      l.style.display = 'none';
    });
  } else {
    elem.style.display = 'none';
  }
};

//DOM function for setting height and width of an element. 's' is an object, with height and width as keys.
var size = function(elem, h, w) {
  elem = utils.queryDOM(elem);

  elem.style.height = h;
  elem.style.width  = w;
  return elem;
};

//function clones given node.ddeep is a boolean, if true, clone will include all descendants as well as node and its' attributes.
var clone = function(elem, deep) {
  let node = elem.cloneNode(deep);
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

//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================

/*
events.js

This file contains code for the librarys' convenience EventListener
alias functions.

Author: Eric James Foster
License: ISC
*/

//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================



var go = function(cb) {
  return document.addEventListener('DOMContentLoaded', cb());
};


var goIE = function(cb) {
  return document.attachEvent('onDOMContentLoaded', cb());
};

//Function for setting event listeners.
var on = function(event, el, callback) {                                       //TODO: allow arg 'el' to be an array.
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


var onIE = function(event, el, callback) {
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
var off = function(event, el, callback) {
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
var offIE = function(event, el, callback) {
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


var once = function(event, el, callback) {                                     //DONE:60 Finish once function.
  var cb = callback;
                                                                        //DONE:80 Test once function.
  var callBack = function(e) {
    cb(e);
    el.removeEventListener(event, callBack);
  };

  el = utils.queryDOM(el);

  return el.addEventListener(event, callBack);
};


var onceIE = function(event, el, callback) {
  var cb = callback;
                                                                             //DONE:90 Test onceIE function.
  var callBack = function(e) {
    cb(e);
    el.detachEvent('on' + event, callBack);
  };

  el = utils.queryDOM(el);

  return el.attachEvent('on' + event, callBack);
};


function spark(evt, el) {

  const ev = new MouseEvent(evt, {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  el.dispatchEvent(ev);
}
function sparkIE(evt, el) {
  const ev = document.createEventObject();
         l = document.querySelector(el);

  evt.eventType = 'on' + evt;
  el.fireEvent('on' + evt, ev);
}


function blur(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('blur', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('blur', cb);
  }
}
function blurIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'onblur';
    el.fireEvent('on' + 'blur', evt);
  } else {
    el.attachEvent('on' + 'blur', cb);
  }
}

function click(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('click', cb);
  }
}

function clickIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'on' + 'click';
    el.fireEvent('on' + 'click', evt);
  } else {
    el.attachEvent('on' + 'click', cb);
  }
}

function dblClick(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('dblclick', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('dblclick', cb);
  }
}
function dblClickIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'ondblclick';
    el.fireEvent('on' + 'dblclick', evt);
  } else {
    el.attachEvent('on' + 'dblclick', cb);
  }
}

function error(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('error', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('error', cb);
  }
}
function errorIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'onerror';
    el.fireEvent('on' + 'error', evt);
  } else {
    el.attachEvent('on' + 'error', cb);
  }
}

function focus(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('focus', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('focus', cb);
  }
}
function focusIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'onfocus';
    el.fireEvent('on' + 'focus', evt);
  } else {
    el.attachEvent('on' + 'focus', cb);
  }
}

function focusIn(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('focusin', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('focusin', cb);
  }
}
function focusInIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'onfocusin';
    el.fireEvent('on' + 'focusin', evt);
  } else {
    el.attachEvent('on' + 'focusin', cb);
  }
}

function focusOut(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('focusout', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('focusout', cb);
  }
}
function focusOutIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'onfocusout';
    el.fireEvent('on' + 'focusout', evt);
  } else {
    el.attachEvent('on' + 'focusout', cb);
  }
}

function keyUp(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('keyup', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('keyup', cb);
  }
}
function keyUpIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'onkeyup';
    el.fireEvent('on' + 'keyup', evt);
  } else {
    el.attachEvent('on' + 'keyup', cb);
  }
}

function keyDown(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('keydown', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('keydown', cb);
  }
}
function keyDownIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'onkeydown';
    el.fireEvent('on' + 'keydown', evt);
  } else {
    el.attachEvent('on' + 'keydown', cb);
  }
}

function load(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('load', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('load', cb);
  }
}
function loadIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'onload';
    el.fireEvent('on' + 'load', evt);
  } else {
    el.attachEvent('on' + 'load', cb);
  }
}

function unLoad(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('unload', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('unload', cb);
  }
}
function unLoadIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'onunload';
    el.fireEvent('on' + 'unload', evt);
  } else {
    el.attachEvent('on' + 'unload', cb);
  }
}

function mouse(sufx, el, cb=null) { //sufx is string, options are 'up', 'down', 'enter', 'leave', 'over', 'out' and 'move'.

  if (cb === null) {
    const evt = new MouseEvent('mouse' + sufx, {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('mouse' + sufx, cb);
  }
}
function mouseIE(sufx, el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'onmouse' + sufx;
    el.fireEvent('on' + 'mouse' + sufx, evt);
  } else {
    el.attachEvent('on' + 'mouse' + sufx, cb);
  }
}

function reSize(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('resize', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('resize', cb);
  }
}
function reSizeIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'onresize';
    el.fireEvent('on' + 'resize', evt);
  } else {
    el.attachEvent('on' + 'resize', cb);
  }
}

function scroll(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('scroll', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('scroll', cb);
  }
}
function scrollIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'onscroll';
    el.fireEvent('on' + 'scroll', evt);
  } else {
    el.attachEvent('on' + 'scroll', cb);
  }
}

function select(el, cb=null) {

  if (cb === null) {
    const evt = new MouseEvent('select', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    el.dispatchEvent(evt);
  } else {
    el.addEventListener('select', cb);
  }
}
function selectIE(el, cb=null) {

  if (cb === null) {
    const evt = document.createEventObject();

    evt.eventType = 'onselect';
    el.fireEvent('on' + 'select', evt);
  } else {
    el.attachEvent('on' + 'select', cb);
  }
}


//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================

/*
httpRequests.js

This file contains code for 2 HTTP request convenience functions, 1 synchronous,
and the other asynchronous.

Author: Eric James Foster
License: ISC
*/

//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================



//This is an alias function for XMLHttpRequests.
var xhr = function(url, fd, method) {                                          //DONE:80 Perfect this function.
    var formData;
                                                                               //DONE:100 Build FormData in function from object that user passes as an argument.
    if (fd) {                                                                  //DONE:70 Need async ajax function
      if (Object.getOwnPropertyNames(fd).length === 0) {
        formData = fd;                                                         //log(Object.getOwnPropertyNames(fd).length);
      } else {
        formData = new FormData();
        for (var key in fd) {                                                  //TEST:50 Test this function.
          formData.append(key, fd[key]);
        }
      }
    } else {
      formData = null;
    }
                                                                               //log('fd'); log(formData);
  var m = method || 'get';
  // var data = fd || null;
  var val;

  var ajax = function() {
      var ajax = new XMLHttpRequest();

      ajax.onloadend = function() {
        if (ajax.status === 200) {
          val = this.response;
        }
      };
      ajax.open(m, url, false);
      ajax.send(formData);
  };
  ajax();

  return val;
};


var ajax = function(url, fd, callback, method) {                               //TEST:60 Test this function.
  var formData;

    if (fd) {
      if (Object.getOwnPropertyNames(fd).length === 0) {
        formData = fd;                                                         //log(Object.getOwnPropertyNames(fd).length);
      } else {
        formData = new FormData();
        for (var key in fd) {
          formData.append(key, fd[key]);
        }
      }
    } else {
      formData = null;
    }
                                                                               //log('fd'); log(formData);
  var m = method || 'get';
  if (formData !== null) {
    m = 'post';
  }
  // var data = fd;
  var val;
  var req = new XMLHttpRequest();

  req.onloadend = function() {
    if (req.status === 200) {
      var response = this.response;
      callback(response);
    }
  };
  req.open(m, url);
  req.send(formData);
};

//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================

/*
logger.js

This file contains the code for the various logging functions
of the library.

Author: Eric James Foster
License: ISC
*/

//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================

//Console.log alias function.
var log = (text, style, tyme)=> {
  var colr = Array.isArray(style) ? style[0] : style,
      styl = Array.isArray(style) ? style[1] : null,
       tym = tyme || false;

  var time = new Date(),
     hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();
      if (secs <= 9) {
        secs = '0' + String(secs);
      }
      if (mins <= 9) {
        mins = '0' + String(mins);
      }
  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;                                 //DONE:40 Either fix singular hours, or choose alternate.
      if (stan === 0) {
        hours = stan + 12;
      } else {
        hours = stan;
      }
      time = hours + ':' + mins + ':' + secs + abbr;

      var t = tym ? time : '';

  if (typeof document === 'undefined') {
    return console.log(colors(text, {fg: colr, style: styl}) + '   '.repeat(10) + t);
  } else {
    var color = colr,
      bgColor = styl,
          css = 'background: ' + bgColor + '; color: ' + color;

    return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};


//Console.error alias function.
var err = (text, tyme)=> {
  var colr = 'red',
      styl = 'bold',
       tym = tyme || false;

  var time = new Date(),
     hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();
      if (secs <= 9) {
        secs = '0' + String(secs);
      }
      if (mins <= 9) {
        mins = '0' + String(mins);
      }
  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;
      if (stan === 0) {
        hours = stan + 12;
      } else {
        hours = stan;
      }
      time = hours + ':' + mins + ':' + secs + abbr;

      var t = tym ? time : '';

  if (typeof document === 'undefined') {
    return console.log(colors(text, {fg: colr, style: styl}) + '   '.repeat(10) + t);
  } else {
    var color = colr,
      bgColor = '',
          css = 'background: ' + bgColor + '; color: ' + color;

    return console.error('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};


//Console.error alias function.
var error = (text)=> {
  return console.error(text);
};



//Console.info alias function.
var info = (text, tyme)=> {
  var colr = '#008cff',
      styl = 'bold',
       tym = tyme || false;

  var time = new Date(),
     hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();
      if (secs <= 9) {
        secs = '0' + String(secs);
      }
      if (mins <= 9) {
        mins = '0' + String(mins);
      }
  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;
      if (stan === 0) {
        hours = stan + 12;
      } else {
        hours = stan;
      }
      time = hours + ':' + mins + ':' + secs + abbr;

      var t = tym ? time : '';

  if (typeof document === 'undefined') {
    colr = 'blueBright';
    return console.log(colors(text, {fg: colr, style: styl}) + '   '.repeat(10) + t);
  } else {
    var color = colr,
      bgColor = '',
          css = 'background: ' + bgColor + '; color: ' + color;

    return console.info('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};



//Console.warn alias function.
var warn = (text, tyme)=> {
  var colr = 'orange',
      styl = 'bold',
       tym = tyme || false;

  var time = new Date(),
     hours = time.getHours(),
      mins = time.getMinutes(),
      secs = time.getSeconds();
      if (secs <= 9) {
        secs = '0' + String(secs);
      }
      if (mins <= 9) {
        mins = '0' + String(mins);
      }
  var abbr = hours >= 12 ? 'pm' : 'am';
  var stan = hours >= 13 ? hours - 12 : hours;
      if (stan === 0) {
        hours = stan + 12;
      } else {
        hours = stan;
      }
      time = hours + ':' + mins + ':' + secs + abbr;

      var t = tym ? time : '';

  if (typeof document === 'undefined') {
    colr = 'yellow';
    colr = 'blueBright';
    return console.log(colors(text, {fg: colr, style: styl}) + '   '.repeat(10) + t);
  } else {
    var color = colr,
      bgColor = '',
          css = 'background: ' + bgColor + '; color: ' + color;

    return console.warn('%c' + text + '%s', css, '   '.repeat(10) + t);
  }
};


var inspect = function(obj) {
  return console.log(obj);
};


//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================

/*
utilities.js

This file contains various functions for the library, either public or not,
that don't fit into any other module.

Author: Eric James Foster
License: ISC
*/

//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================



var isArray = function(arr) {
  return Array.isArray(arr);
};


var isElement = function(el) {
  if (el.element) {
    return true;
  } else {
    return false;
  }
};

var isDOMElement = function(el) {
  return el.tagName ? true : false;
};


/*This function combines querySelector and querySelectorAll, and becomes a noop if 'el' is a variable. There is an optional 2nd argument 'mod', that
accepts the string 'all' to modify behaviour of the function. By default, 'mod' is null. If the string 'all' is passed as the 2nd argument, the function
will use querySelectorAll() instead of querySelector(), meaning an array will be returned if possible. */
var queryDOM = function(el) {

    let lm, lms = [];

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
var proto = function(constructer, superConstructer) {
    construct.prototype = Object.create(superConstructer.prototype);
    constructer.prototype.constructor = constructer;
    return constructer;
};


/*This convenience function sets imported module function names as global variables, so that
the module variable doesn't need to preface every function.*/
var functions = function(funcs, module) {                                      //TEST:110 Test this with other node_modules.
  var context = module || this;

  if (Array.isArray(funcs)) {
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


//This practically useless function will lock up the browser for a preset amount of time.
var sleep = function(milliseconds) {
  var start = new Date().getTime();
  while (true) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};


//This function will alternate function calls depending on the value of a global flag.
function shifter(onFunc, offFunc) {
  window.toggleFlag = true;

  return (()=> {
    if (toggleFlag) {
      onFunc();
      toggleFlag = false;
    } else {
      offFunc();
      toggleFlag = true;
    }
  });
};


//Boolean function returns true if given function has given ancestor, and false otherwise. Checks 6 parents deep.
function hasAncestor(l, ance) {
  var tick, ancestor, ancestors = [1, 2, 3, 4, 5];

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
  if (tick > 0) return true;

  else return false;
};


function lookBehind(leftContextRE, matchRE, subject) {
  var returnMatch, match, leftContext;

        match = matchRE.exec(subject)[0];
  leftContext = subject.substring(0, subject.indexOf(match))

  if (leftContextRE.test(leftContext)) {
    returnMatch =  match;
  } else {
    returnMatch = false;
  }

  return returnMatch;
};


function isMobile() {
  this.android = function() {
      return navigator.userAgent.match(/Android/i);
  };
  this.blackBerry = function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  this.iOS = function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  this.operaMini = function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  this.windowsMobile = function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  this.any = function() {
      return (this.android() || this.blackBerry() || this.iOS() || this.operaMini() || this.windowsMobile());
  }
  return this.any();
}



//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
//==============================================================================
