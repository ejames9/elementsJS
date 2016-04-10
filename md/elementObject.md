# <a name='elem-obj'></a> The element Object 
--
The element (*notice the lower-case 'e'* ) object is to elementsJS, what the jQuery object is to jQuery. It is a thin wrapper around the DOM Element object that conveniently connects the Element to a load of useful methods, and also enables chaining of function/method calls. This object is returned when an element is created with the [**`make()`**] (#make-func) function, or selected from the DOM with the [**`dom()`**] (#dom-func) function. It is also returned when the [**elements syntax**] (#) is used. The most direct way, however, is to instantiate an element by calling the element constructor.

## <a name='element-const'></a> `element(elem)`
This is the element object constructor, it takes a DOM Element object as its' only argument and returns an elementsJS element object instance. This function is unlike the [**`dom()`**] (#dom-func) function, in that it won't query the DOM for an existing element. It needs a reference to a valid Element object.

#### Arguments

1. **`elem`** (variable) - A reference to a valid, existing DOM Element object.

**Returns**: elementsJS element object.

#### Usage


```javascript
//obtain reference to existing Element
const foo = el('#foo');
//instantiate element object
const myElement = new element(foo);
		// or
const myElement = element(foo);
//either way will work.
```

## <a name='dom2-func'></a> `dom(elem)`

## <a name='make2-func'></a> `make(elem, tag='div' )`

The two functions above have been covered already in the [DOM Manipulation Functions] (#DOM) section, and mentioned/referenced in this section, but I'm listing them here also, for the sake of clarity. These two functions are the most common functions you will use to get an element object. The first will query the DOM for an Element and create an elementsJS element from it, and the second will create a DOM Element and use it to *create* an elementsJS element. Both functions enable chaining of method calls afterward. Available methods will be detailed below.
#### Usage

```javascript
dom('#foo')
		.size('40em', '100em')
		.border('1px solid white')
		.borderRadius('5px')
		.html('Submit')
		.on('click', onClick);
		
make('.item', 'li')
		.backgroundColor('white')
		.font('400 12px bpmono,hack')
		.color('blue');
```

# <a name='elem-obj-methods'></a> element Object Methods
--
The list of element object methods is EXTREMELY long, so I will list some of the more interesting methods, and ones that aren't quite as self-explanatory, and explain them. Just about every one of the [**style object**] (http://www.w3schools.com/jsref/dom_obj_style.asp) methods are *getters* as well as *setters*, so depending on how you use the function, you may either return a reference to the element object [**(see ex. #1)**] (#exs), which enables method chaining, or a particular property or value [(**see ex. #2)**] (#exs), so that it may be stored in a variable. **All methods are written to be Cross-browser supportive.**



## <a name='element-font-ex'></a> `element.font(value)`
The font method sets or returns up to six separate font properties, in a shorthand form.

With this method, you can set/return the following (in this order):

1. font-style
2. font-variant
3. font-weight
4. font-size
5. line-height
6. font-family

The font-size and font-family are required. If one of the other values are missing, the default values will be inserted, if any. click [here] (http://www.w3schools.com/jsref/prop_style_font.asp) for more info on this function. The **`value`** argument is however, optional. If no argument is given, the function becomes a *getter* instead of a *setter*, returning the existing font information for the element. See examples 1 and 2 below.

#### Arguments

1. **`value`** (string) - Optional, a space separated list of the above properties/values. 

**Returns**: elementsJS element object, unless method is called with no argument, then it returns the elements' existing font values.

#### <a name='exs'></a> Usage

```javascript
//ex. #1
//Method as Setter
dom('#foo')
		 .font('300 24px osaka,monaco')
		 .color('blue');
		 
//ex. #2
//Method as Getter
let fontData = dom('#foo').font();
```
* Note - As stated above, pretty much all of the *style* methods work this way.

## <a name='style-methods'></a> *Style Methods*
Here is a list of all of the element object methods that I got from the HTML DOM Style object. I won't explain the functions, as the definitions/usage can be found [here] (http://www.w3schools.com/jsref/dom_obj_style.asp). A few of the methods have altered names for brevity's sake, which are noted below.


## `element.bg(val)`
* An alias for **.background()**

## `element.bgColor(*val*)`
* An alias for **.backgroundColor()**

## `element.bgImage(*val*)`
* An alias for **.backgroundImage()**

## `element.bgSize(*val*)`
* An alias for **.backgroundSize()**

## `element.bgPosition(*val*)`
* An alias for **.backgroundPosition()**

## `element.border(*val*)`

## `element.borderColor(*val*)`

## `element.borderRadius(*val*)`

## `element.borderWidth(*val*)`

## `element.borderTop(*val*)`

## `element.borderBottom(*val*)`

## `element.borderRight(*val*)`

## `element.borderLeft(*val*)`

## `element.boxShadow(*val*)`

## `element.boxSizing(*val*)`

## `element.clear(*val*)`

## `element.color(*val*)`

## `element.columns(*val*)`

## `element.content(*val*)`

## `element.cursor(*val*)`

## `element.direction(*val*)`

## `element.display(*val*)`

## `element.cssFloat(*val*)`

## `element.font(*val*)`

## `element.fontFamily(*val*)`

## `element.fontStyle(*val*)`

## `element.fontSize(*val*)`

## `element.fontWeight(*val*)`

## `element.height(*val*)`

## `element.lineHeight(*val*)`

## `element.icon(*val*)`

## `element.left(*val*)`

## `element.listStyle(*val*)`

## `element.margin(*val*)`

## `element.marginRight(*val*)`

## `element.marginLeft(*val*)`

## `element.marginTop(*val*)`

## `element.marginBottom(*val*)`

## `element.maxHeight(*val*)`

## `element.minHeight(*val*)`

## `element.maxWidth(*val*)`

## `element.minWidth(*val*)`

## `element.opacity(*val*)`

## `element.outline(*val*)`

## `element.overflow(*val*)`

## `element.overflowX(*val*)`

## `element.overflowY(*val*)`

## `element.padding(*val*)`

## `element.paddingRight(*val*)`

## `element.paddingLeft(*val*)`

## `element.paddingTop(*val*)`

## `element.paddingBottom(*val*)`

## `element.position(*val*)`

## `element.right(*val*)`

## `element.top(*val*)`

## `element.textAlign(*val*)`

## `element.textDecoration(*val*)`

## `element.textShadow(*val*)`

## `element.verticalAlign(*val*)`

## `element.visibility(*val*)`

## `element.whiteSpace(*val*)`

## `element.width(*val*)`

## `element.wordSpacing(*val*)`

## `element.zIndex(*val*)`

## `element.alignContent(*val*)`

## `element.transformOrigin(*val*)`

## `element.transition(*val*)`

## `element.transitionDuration(*val*)`

## `element.animation(*val*)`

## `element.filter(*val*)`

## `element.flex(*val*)`

## `element.perspective(*val*)`

## `element.perspectiveOrigin(*val*)`

## `element.transitionDelay(*val*)`

# <a name='core-func'></a> `element.core(func, obj='el')`
--
The **`.core()`** method is a custom method that provides direct access to the elements' Element object or Style object. This is useful incase there is a *style* method/property or *Element* method/property you'd like to use, that I have yet to add as an elementsJS **`element`** method. It takes an anonymous function as its' first argument, and this anon function will take **`el`** (or whatever you'd like to call it), as its' only argument, which is a reference to the elements' Element object, or Element.style object. The second argument is optional and determines which of the above you will have access to. It defaults to **`'el'`**, which will give access to the Element object. If **`'style'`** is given in its' place, you'll have access to the style object. See below for examples.

#### Arguments

1. **`func`** (function) - An anonymous function with argument (**`el`**).
2. **`obj='el'`** (string) - Optional argument. Defaults to **`'el'`**, but **`'style'`** may be used in its' place.

**Returns**: this.

#### Usage

```javascript
dom('#foo') //style is given as secong arg., so el = Element.style
		  .core((el, 'style')=> {
		  	 el.paddingRight = '15px';
		  	 el.paddingLeft  = '15px';
		  	 el.zIndex = '99';
		  })
		  .click(()=> {
		  	 onClick;
		  });
		  
dom('#foo') //no 2nd arg., so el defaults to DOM Element object
		  .core((el)=> {
		  	 el.nodeValue = 'Stuff.';
		  	 el.className = '.foobaz';
		  })
		  .click(()=> {
		  	 onClick;
		  });

```

## <a name='DOM-Elem-Methods'></a> *DOM Element Methods*


## `element.add(el)`
The **`.add()`** method is an alias for appendChild. It takes a CSS Selector string as its' only argument. 

**Returns**: `this`.

#### Usage

```javascript
dom('#foo')
		  .add('#bar');
```

## `element.put(mom)`
This method appends the element to the element given in the argument **(`mom`)**.

**Returns**: **`this`**.

#### Usage

```javascript
dom('#foo')
		  .put('#bar');
```

## `element.fore(elem)`
This method will insert the element just before the element given as the argument **(`elem`)**.

**Returns**: **`this`**.

## `element.aft(elem)`
This method will insert the element just after the element given as the argument **(`elem`)**.

**Returns**: **`this`**.



## `element.ma()`
This method returns the parentNode of element.

**Returns**: **`this.el.parentNode`**.



## `element.children(mod)`
The [**`.children`**] (http://www.w3schools.com/jsref/prop_element_children.asp) property becomes the [**`.childNodes`**] (http://www.w3schools.com/jsref/prop_node_childnodes.asp) property when the string **`'all'`** is given as the optional **(`mod`)** argument.

#### Arguments

1. **`mod`** (string) - Argument is optional. Pass in the string **`'all'`** to return the **`.childNodes`** property, instead of the **`.children`** property.

**Returns**: **`.children`** property value or **`.childNodes`** property value.

#### Usage

```javascript
//ex. #1
const elems = dom('#foo').children();

//ex. #2
//Pass 'all' in as mod arg. to retrieve ALL child nodes
const nodeList = dom('#foo').children('all');
```

## `element.first(mod)`
The **`.first()`** method returns the [**`.firstElementChild`**] (http://www.w3schools.com/jsref/prop_element_firstelementchild.asp) property when no argument is given, and returns the [**`.firstChild`**] (http://www.w3schools.com/jsref/prop_node_firstchild.asp) property when the string **`'all'`** is given as the optional **(`mod`)** argument.

#### Arguments

1. **`mod`** (string) - Argument is optional. Pass in the string **`'all'`** to return the **`.firstChild`** property, instead of the **`.firstElementChild`** property.

**Returns**: **`.firstChild`** property value or **`.firstElementChild`** property value.

#### Usage

```javascript
//ex. #1
const elem1 = dom('#foo').first();

//ex. #2
//Pass 'all' in as mod arg. to retrieve ALL child nodes
const node1 = dom('#foo').first('all');
```

## `element.sib(ord, mod)`
The **`.sib()`** method takes two arguments. The first, **(`ord`)** determines which sibling to return, the **`'next'`** sibling, or the **`'prev'`** (previous) one. The second argument **(`mod`)**, like the above 2 functions, is optional and determines whether or not to consider **`'all'`** nodes, or just Element nodes.
#### Arguments

1. **`ord`** (string) - Pass either **`'prev'`** or **`'next'`** to determine which sibling to return.
2. **`mod`** (string) - Argument is optional. Pass in the string **`'all'`** to return the first sibling **node**, or leave blank to return the first sibling **Element**.

**Returns**: A sibling node/Element

#### Usage

```javascript
//ex. #1
const nextElem = dom('#foo')
					 .sib('next');

//ex. #2
//Pass 'all' in as mod arg. to retrieve sibling nodes as well
const prevNode = dom('#foo')
					 .sib('prev', 'all');
```




## `element.id(*val*)`
Pass ID name in as argument **(`val`)** to set *`.id`* property, or leave it blank to return existing value.

**Returns**: **`.id`** property value or **`this`**

## `element.class(*val*)`
This is an alias for the **`.className`** property. Pass Class name in as argument **(`val`)** to set *`.className`* property, or leave it blank to return existing value.

**Returns**: **`.className`** DOM Element property value **or** **`this`**

## `element.xClass(cb=null)`
This method deletes the existing class name of the element. Takes an optional callback argument.

**Returns**: **this**

## `element.html(*val*)`
This method is an alias for the **`Element.innerHTML()`** method. Pass a valid HTML string in as argument **(`val`)** to set HTML content of the element, or leave it blank to return existing HTML.

**Returns**: HTML content **or** **`this`**

## `element.size(height, width)`
This method will set the **(`height`)** and **(`width`)** of the element.

**Returns**: **`this`**

## `element.offset(mod)`
If the argument **(`mod`)** is left blank, this method will return an object with 2 keys/values: 

```javascript
const offsets = dom('#foo').offset();

// offsets.top  = Element.offsetTop
// offsets.left = Element.offsetLeft
``` 
If the string **`'all'`** is passed in the **(`mod`)** argument, the object will contain 5 keys/values:

```javascript
const offsets = dom('#foo').offset('all');

// offsets.top    = Element.offsetTop
// offsets.left   = Element.offsetLeft
// offsets.height = Element.offsetHeight
// offsets.width  = Element.offsetWidth
// offsets.parent = Element.offsetParent
``` 
* Note- If anything other than the string **`'all'`** is given for the **(`mod`)** argument, an **`Invalid Argument`** error will occur.


**Returns**: **`this`**


## `element.show(disp='block')`
This method will set the element to display **`block`** if the **(`disp`)** argument is left blank. Any valid display option may be used in its' place. **ex.'s `flex`, `inline`, `inline-block` etc.**

**Returns**: **`this`**

## `element.hide()`
This method will set the element to display **`none`**.

**Returns**: **`this`**

## `element.viz(disp='block')`
This method will toggle between display **`none`**, and the display option set by the argument **(`disp`)**. It defaults to **`'block'`**. Any valid display option may be used in its' place. **ex.'s `flex`, `inline`, `inline-block` etc.**

**Returns**: **`this`**



## `element.text(*val*)`
This method is an alias for the **`Element.textContent()`** method. Pass a string in as argument **(`val`)** to set text content of the element, or leave it blank to return existing text.

**Returns**: text content **or** **`this`**

## `element.value(*val*)`
This method is an alias for the **`Element.nodeValue()`** method. Pass a value in as argument **(`val`)** to set node value of the node, or leave it blank to return existing value.

**Returns**: node value **or** **`this`**

## `element.lang(*val*)`
Setter and Getter for an elements' **`.lang`** (language) attribute.

**Returns**: elements' lang attribute **or** **`this`**

## `element.clone(deep)`
This method returns a clone of the element and its' attributes. The **(`deep`)** argument is an optional boolean and defaults to false. If set to true, The function will clone the element, its' attributes, *and* its' descendants.

**Returns**: clone of element.

## `element.normalize()`
This method removes empty Text nodes and joins adjacent Text nodes.

**Returns**: **`this`**.

## `element.toString()`
Converts an element to a string.

**Returns**: Element string.

## `element.tag()`
An alias for **`.tagName`**, this method returns the tag name of an Element.

**Returns**: `Element.tagName`.

## `element.title(*val*)`
Sets or returns the **`.title`** attribute of an Element.

**Returns**: title attribute **or** **`this`**.

## `element.attrib(attrib, val)`
This method has the ability to Set, Get or Remove attributes. The first argument **(`attrib`)**, determines the attribute. If the second argument **(`val`)** is left blank, the method returns the existing value of the attribute. If you'd like to set the attribute, include the value for it in this argument. If you'd like to remove the named attribute, pass the string **`'remove'`** in place of **(`val`)**.

#### Arguments

1. **``attrib``** (string) - The Element attribute to work with.
2. **`val`** (string) - Optional Argument. Either sets value of the attribute, or tells the function to **`'remove'`** the attribute.

**Returns**: Element attribute value **or** **`this`**.

## `element.on(event, callback)`
This method adds an event listener on the element, for the event given by the **(`event`)** argument. It takes a callback function as its' second argument.

#### Arguments

1. **`event`** (string) - The event listened for.
2. **`callback`** (function) - callback function of the event listener.

**Returns**: **`this`**.

## `element.off(event, callback)`
This method removes the event listener on the element matching the given arguments.
#### Arguments

1. **`event`** (string) - The event listened for.
2. **`callback`** (function) - callback function of the event listener.

**Returns**: **`this`**.

## `element.once(event, callback)`
This method adds an event listener on the element, for the event given by the **(`event`)** argument. It takes a callback function as its' second argument. The listener is removed once the callback function executes.

#### Arguments

1. **`event`** (string) - The event listened for.
2. **`callback`** (function) - callback function of the event listener.

**Returns**: **`this`**.

## <a name='event-methods'></a> *Event Methods*
The following event methods all work the same way, so I'll explain one of them, and then list the rest.

## `element.click(callback=null)`
This method will set an event listener for the **click** event (imagine that..) if, and only if, a callback function is given for the *optional* argument **(`callback`)**. If this argument is left blank, a click event will be triggered on the element instead.

#### Arguments

1. **`callback`** (function) - Optional. callback function of the event listener.

**Returns**: **`this`**.

```javascript
// ex. #1
// registers a listener
dom('#foo')
		.click(()=> {
			onClick():
		});
		
// ex. #2
// fires click event
dom('#foo')
		.click();
```
* Note- All methods below work the same as above, but for their respective events.


## `element.dblClick(callback=null)`

## `element.blur(callback=null)`

## `element.error(callback=null)`

## `element.focus(callback=null)`

## `element.focusIn(callback=null)`

## `element.focusOut(callback=null)`

## `element.keyUp(callback=null)`

## `element.keyDown(callback=null)`

## `element.load(callback=null)`

## `element.unLoad(callback=null)`

## `element.mouse(callback=null)`

## `element.resize(callback=null)`

## `element.scroll(callback=null)`

## `element.select(callback=null)`


## <a name='Util-Methods'></a> *Utility Methods*
This is where methods that don't seem to fit into any of the previous categories will go. There's not much here to share yet, but for now, I just have the below method I've been playing around with that makes iterating over lists a bit easier.

## `element.only(num, func, arr=null)`
elementsJS can iterate over a list of element objects in a chain-like manner, using JavaScript's built-in **`Array.prototype.forEach()`** function, and an elementsJS element method, **`.only()`**. See below. 

```javascript
//The dom() function returns an array of 3 element objects
//which are iterated over using .forEach()
dom('.items', 'li')
				.forEach((element, i, a)=> {
					element
						.bgColor('blue')
						.color('white')
						.font('22px bpmono')
						.left('40px')
						.html('ONE')
						.only(2, ()=> {
							element
								.left('100px')
								.html('TWO');
						}, a)
						.only(3, ()=> {
							element
								.left('160px')
								.html('THREE');
						})
				})
//The three list items will have the same bgColor, color and font 
//styles, but differ in positioning, and html content
```
In order to work properly, the function argument of the **`.forEach()`** method must be called with 3 arguments. A reference to the **(`element`)** being iterated over, the index **(`i`)** and the array **(`a`)**. The **`.only()`** method takes 3 arguments. The first is the list-item number (not index, therefore, the first item is #1, not 0). The second is an anonymous function that will apply any changes to the element. As you can see above, since you have access to the element object from the **`.forEach()`** method, you can still chain method calls in this function. The third argument is mandatory for the first **`.only()`** only. The method needs a reference to the array to operate correctly, but only in its' first occurence. **It should be left out of any/all subsequent calls.**

#### Arguments

1. **`num`** (integer) - The number of the list-item being singled out (not the index).
2. **`func`** (function) - An anonymous function housing the distinct changes of the specified element.
3. **`arr=null`** (array) - A reference to the element array from the **`.forEach()`** function. Should only be used in first occurence of **`.only()`** method. 

**Returns**: **`this`**.





