
/*
Element.js

This is a helper file for the elements.js index, which houses
the code for the Element Class.

Author: Eric James Foster
License: ISC
*/


var Element = function(el) {

  if (!(this instanceof Element)) {
    return new Element();
  }

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
  // this.oooooo = function(val) {
  //   if (val !== undefined) {
  //     el.style.oooooo = val;
  //     return this;
  //   } else {
  //     val = el.style.oooooo;
  //     return val;
  //   }
  // };
  // this.oooooo = function(val) {
  //   if (val !== undefined) {
  //     el.style.oooooo = val;
  //     return this;
  //   } else {
  //     val = el.style.oooooo;
  //     return val;
  //   }
  // };
  // this.oooooo = function(val) {
  //   if (val !== undefined) {
  //     el.style.oooooo = val;
  //     return this;
  //   } else {
  //     val = el.style.oooooo;
  //     return val;
  //   }
  // };
  // this.oooooo = function(val) {
  //   if (val !== undefined) {
  //     el.style.oooooo = val;
  //     return this;
  //   } else {
  //     val = el.style.oooooo;
  //     return val;
  //   }
  // };
};
