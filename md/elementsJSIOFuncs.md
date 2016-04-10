# <a name='imports'></a> The imports() function
--
The **`imports()`** function is a convenience function that allows the quick importing of many modules and/or module functions all at once. It is not necessary to use this function in order to use the library, it just makes it quicker/easier to import all of its' functions separately.

- Note- Use of this function requires compilation by the [elementsJS-interpreter] (#).

In order to use the imports function, it must first be imported from the module as such:

```javascript
var imports = require('elementsJS').imports;
```
or,

```javascript
import { imports } from 'elementsJS';
```
## `imports( {module: funcs/moduleAlias} )`

#### Arguments

1. **`{module: funcs or moduleAlias}`** (object) - An object, the key of which is the name of a module (string) **ex. 'lodash'**, and the value is either a list of functions (array) **ex. `['make', 'go']`**, or the variable name given to the module being imported (string) **ex.** `'_'`, for **lodash**.

**Returns**: nuffin.

#### Usage

The imports function can be used to conveniently import individual functions from modules, or entire modules. If functions will be imported from the module individually, usage is as below:

```javascript
imports({
	'elementsJS': ['make', 'go', 'dom', 'on'],
   '../js/utils': ['buildMenu'], // << see Note below *
	    'lodash': '_'
});
//functions are used like so:

make('#foo', 'button');

buildMenu();
```

- Note that if only 1 function is being imported, an array still needs to be used, otherwise, the entire module will be imported. See below.


Entire modules can be imported like so:

```javascript
imports({
	'elementsJS': 'elemsJS',
   '../js/utils': 'utils',
	    'lodash': '_',
});
//functions are used like so:

elemsJS.make('#foo', 'button');

utils.buildMenu();
```

# <a name='DOM'></a> DOM Manipulation functions
--

## <a name='el-func'></a> `el(elem)`

This function will query the DOM, using a CSS Selector. If the query returns only 1 result, A built-in DOM Element object is returned (**even if the CSS Selector used is a className or tagName, it will reduce the list to 1 item**). If more than 1 are returned, an array of JS Element objects are returned. It's kind of a mix between **`document.querySelector()`** and **`document.querySelectorAll()`**. This is the DOM querying function you want to use if you don't want an **elementsJS element object(s)** returned.

#### Arguments

1. **`elem`** (string) -  [CSS Selector] (http://www.w3schools.com/cssref/css_selectors.asp). 

**Returns**: DOM Element Object.

#### Usage

```javascript
el('#foo').addEventListener('click', onClick);
```

## <a name='dom-func'></a> `dom(elem)`

This function is exactly like *el()* above, except that it returns an elementsJS element object instead of a built-in JavaScript one. This allows access to the [elementsJS object methods] (#).

#### Arguments

1. **elem** (string) -  [CSS Selector] (http://www.w3schools.com/cssref/css_selectors.asp). 

**Returns**: elementsJS element Object.

#### Usage

```javascript
dom('#foo')
		.on('click', onClick);
```

## <a name='__-func'></a> `__(tempLit, elem='body')`

The above function is spelled with 2 underscores, so as to avoid conflict with underscore.js or lodash.js. It takes a template literal as it's first argument, and an optional element as its' second. If the second argument is omitted, the template is appended directly to the body as a default. The appending element is returned. 

- Note- The first argument (**`tempLit`**) is meant to be a [backtick string] (http://exploringjs.com/es6/ch_first-steps.html#_multi-line-strings), but will also take a normal string, the syntax just becomes a lot more difficult/complex.

#### Arguments

1. **`tempLit`** (string) - An [es6 template literal] (http://exploringjs.com/es6/ch_first-steps.html#_multi-line-strings), see below.
2. **`elem='body'`** (string) - CSS Selector. Optional, defaults to 'body'.

**Returns**: DOM Element Object.

#### Usage

```html
__(`

<main>
	<div id='header'></div>
		<ul id='list'>
			<li class='item'></li>
			<li class='item'></li>
			<li class='item'></li>
		</ul>
	<div id='footer'></div>
</main>

`);

<!--result: 

<html>
	<head></head>
	<body>
		<main>
			<div id='header'></div>
				<ul id='list'>
					<li class='item'></li>
					<li class='item'></li>
					<li class='item'></li>
				</ul>
			<div id='footer'></div>
		</main>
	</body>
</html>

-->


```
- Pretty cool huh? Thanks EcmaScript 2015! The **`<main>`** element, along with all of its' children, will be appended to the **`<body>`** of the document.

## <a name='make-func'></a> `make(elem, tag='div')`

This function takes an id/class CSS Selector as its' first argument, and a tag name as its' optional second. It will make a div and give it the class or id given in the first argument. If a tag is specified in the 2nd argument, it will be made instead of a div. The function returns an elementsJS element object, giving access to its' [methods] (#).

#### Arguments

1. **`elem`** (string) -  A string id or class name. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex. `'#foo'` or `'.bar'`**.
2. **`tag='div'`** (string) - DOM tag, defaults to `'div'`.

**Returns**: elementsJS element Object.

#### Usage

```javascript
make('#header');  // << makes a div

make('#foo', 'button')
				.size('40px', '100px')
				.border('1px solid white')
				.color('white')
		        .on('click', onClick);
```

## <a name='put-func'></a> `put(child, mom)`

This function takes an id or class CSS Selector or a variable representing a DOM Element as its' first and second arguments. The first will be appended to the second.

#### Arguments

1. **`child`** (string/variable) -  A DOM element variable, or a string id or class css selector. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex. `'#foo'` or `'.bar'`**.
2. **`mom`** (string/variable) -  A DOM element variable, or a string id or class css selector. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex. `'#foo'` or `'.bar'`**.


**Returns**: nada.

#### Usage

```javascript
make('#foo', 'input');  

put('#foo', '#bar');
```

## <a name='x-func'></a> `x(elem)`

This function takes an id/class CSS Selector or a variable representing a DOM Element as its' first and only argument. This element will be deleted from the DOM.

#### Arguments

1. **`elem`** (string/variable) -  A DOM element variable, or a string id or class css selector. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex. `'#foo'` or `'.bar'`**.

**Returns**: no things.

#### Usage

```javascript  
if (bool) 
	x('#foo');
else 
	x('#bar');

```

## <a name='fore-func'></a> `fore(ref, elem)`

This function takes an id/class CSS Selector or a variable representing a DOM Element as its' first and second arguments. The second argument (`elem`) will be inserted in the DOM immediately preceding the element represented the first argument (`ref`).

#### Arguments

1. **`ref`** (string/variable) -  A DOM element variable, or a string id or class css selector. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex. `'#foo'` or `'.bar'`**.
2. **`elem`** (string/variable) -  A DOM element variable, or a string id or class css selector. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex. `'#foo'` or `'.bar'`**.

**Returns**: zilch.

#### Usage

```javascript  
fore('#bar', '#foo');

/*result:

<body>
	<div id='foo'></div>
	<div id='bar'></div>
</body>

*/
```

## <a name='aft-func'></a> `aft(ref, elem)`

This function takes an id/class CSS Selector or a variable representing a DOM Element as its' first and second arguments. The second argument (`elem`) will be inserted in the DOM immediately after the element represented by the first argument (`ref`).

#### Arguments

1. **`ref`** (string/variable) -  A DOM element variable, or a string id or class css selector. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex. `'#foo'` or `'.bar'`**.
2. **`elem`** (string/variable) -  A DOM element variable, or a string id or class name. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex. `'#foo'` or `'.bar'`**.

**Returns**: zero.

#### Usage

```javascript  
aft('#foo', '#bar');

/*result:

<body>
	<div id='foo'></div>
	<div id='bar'></div>
</body>

*/
```

## <a name='show-func'></a> `show(elem, disp='block')`

This function takes an id/class CSS Selector, a variable representing a DOM Element, or an array of either as its' first argument and a CSS display option as its' optional 2nd. The second argument defaults to 'block'. The function will set the element represented by the first argument (elem) to the display option represented by the second argument, 'block' if none exists. If elem is an array, the operation will be performed on all elements.

#### Arguments

1. **`elem`** (string/array/variable) -  A DOM element variable, an id or class css selector, or array of the above. Hash **`'#'`** or period **`'.'`** must be present as first character in strings. **ex. `'#foo'` or `'.bar'`**.
2. **`disp='block'`** (string) - [CSS display option] (http://www.w3schools.com/cssref/pr_class_display.asp). **ex.'s `'inline'`, `'flex'` etc.** Optional, defaults to **`'block'`**.

**Returns**: uh uh.

#### Usage

```javascript  
show('.foobar', 'inline-flex');
```

## <a name='hide-func'></a> `hide(elem)`

This function takes an id/class CSS Selector, a variable representing a DOM Element, or an array of either as its' only argument. The function will set the element represented by the argument (`elem`) to display `'none'`. If elem is an array, the operation will be performed on all elements.

#### Arguments

1. **`elem`** (string/array/variable) -  A DOM element variable, an id or class css selector, or an array of any of them. Hash **`'#'`** or period **`'.'`** must be present as first character in strings. **ex. `'#foo'` or `'.bar'`**.

**Returns**: nuh uh.

#### Usage

```javascript  
hide('.foobar');
```

## <a name='size-func'></a> `size(elem, h, w)`

This function takes an id/class CSS Selector or a variable representing a DOM Element as its' first argument, and height and width in px, pt, or em's as its' second and third. The function will set the element represented by the argument (`elem`) to dimensions represented by the second (`h`) and third (`w`) arguments.

#### Arguments

1. **`elem`** (string/array/variable) -  A DOM element variable, an id or class css selector, or array of them. Hash **`'#'`** or period **`'.'`** must be present as first character in strings. **ex. `'#foo'` or `'.bar`'**.
2. **`h`** (string) - Height of element, in px, pt, em or %. **ex. `'20em'`**.
3. **`w`** (string) - Width of element, in px, pt, em or %. **ex. `'20px'`**.

**Returns**: not.

#### Usage

```javascript  
size('#foobar', '40px', '200px');
```

# <a name='event-handle'></a> Event Handling Functions

These are a collection of convenience functions that deal mainly with the firing of, or reacting to, DOM events. **All event handling functions have built-in Cross Browser support**.

## <a name='go-func'></a> `go(callback)`

This function takes a function as its' only argument, which will be executed once the 'DOMContentLoaded' event has fired upon page load.
#### Arguments

1. **`callback`** (function) - Code to be executed upon page load.

**Returns**: nothing.

#### Usage

```javascript  
go(init);
```

## <a name='on-func'></a> `on(event, el, callback)`

This function is an alias for `document.addEventListener(event, cb)`. 

#### Arguments

1. **`event`** (string) - Event to be listened for.
2. **`el`** (string/variable) - An id/class CSS selector, or DOM element variable, representing element on which event is listened for.
3. **`callback`** (function) - Code to be executed once event fires.

**Returns**: nothing.

#### Usage

```javascript  
on('click', '#foo', onClick);
```

## <a name='off-func'></a> `off(event, el, callback)`

An alias for `document.removeEventListener(event, cb)`. Will remove an event listener set by the previous function. Must have exactly the same arguments.


#### Arguments

1. **`event`** (string) - Event to be listened for.
2. **`el`** (string/variable) - An id/class CSS selector, or DOM element variable, representing element on which event is listened for.
3. **`callback`** (function) - Code to be executed once event fires.

**Returns**: nothing.

#### Usage

```javascript  
off('click', '#foo', onClick);
```
## <a name='once-func'></a> `once(event, el, callback)`

This function is the same as **`on(event, el, callback)`**, except that it removes itself after the callback is executed once.

#### Arguments

1. **`event`** (string) - Event to be listened for.
2. **`el`** (string/variable) - An id/class CSS selector, or DOM element variable, representing element on which event is listened for.
3. **`callback`** (function) - Code to be executed once event fires.

**Returns**: nothing.

#### Usage

```javascript  
once('click', '#foo', onClick);
```


## <a name='spark-func'></a> `spark(event, elem)`

This function takes an event as its' first argument, and an id/class CSS selector as its' second. It fires the given event on the element returned by the selector.

#### Arguments

1. **`event`** (string) - Event to be fired.
2. **`el`** (string/variable) - An id/class CSS selector, or DOM element variable, representing element on which event will be fired.


**Returns**: zip.

#### Usage

```javascript  
go(spark('focus', '#foo'));
```
## <a name='click-func'></a> `click(elem, cb=null)`

This function takes an id/class CSS Selector or a variable representing a DOM Element as its' first argument, and a callback function as its' optional second. If the second argument is omitted, the callback is nulled and the function fires a **`'click'`** event on the element represented by the first argument (`elem`). If a callback function is provided, the function becomes an event listener, listening for the **`'click'`** event on the element represented by the first argument, and executing the callback (`cb`) once it is detected.

#### Arguments

1. **`elem`** (string/variable) - An id/class CSS selector, or DOM element variable, representing the element on which the event is fired/listened for.
2. **`cb=null`** (function) - Code to be executed once event fires. Argument is optional and defaults to null.

**Returns**: unscathed.

#### Usage

```javascript  
//fire click event on element '#foo'
click('#foo');

//Listen for click event of element '#foo'
click('#foo', onClick);
```
### The Following Functions work just as `click()`, above, but for different Mouse Events.

## <a name='dblClick-func'></a> `dblClick(elem, cb=null)`

For example, This function will either fire a **`'dblClick'`** event on the given element, or register an event listener for the **`'dblClick'`** on the given element, if a callback is present.

## <a name='blur-func'></a> `blur(elem, cb=null)`

This function will either fire a **`'blur'`** event on the given element, or register an event listener for the **`'blur'`** on the given element, if a callback is present.

## <a name='error-func'></a> `error(elem, cb=null)`

This function will either fire an **`'error'`** event on the given element, or register an event listener for the **`'error'`** on the given element, if a callback is present.

## <a name='focus-func'></a> `focus(elem, cb=null)`

This function will either fire a **`'focus'`** event on the given element, or register an event listener for the **`'focus'`** on the given element, if a callback is present.

## <a name='focusIn-func'></a> `focusIn(elem, cb=null)`

This function will either fire a **`'focusIn'`** event on the given element, or register an event listener for the **`'focusIn'`** on the given element, if a callback is present.

## <a name='focusOut-func'></a> `focusOut(elem, cb=null)`

This function will either fire a **`'focusOut'`** event on the given element, or register an event listener for the **`'focusOut'`** on the given element, if a callback is present.

## <a name='keyUp-func'></a> `keyUp(elem, cb=null)`

Same as above, but for the **`'keyup'`** event.


## <a name='keyDown-func'></a> `keyDown(elem, cb=null)`

Same as above, but for the **`'keydown'`** event.

## <a name='load-func'></a> `load(elem, cb=null)`

Same as above, but for the **`'load'`** event.

## <a name='unLoad-func'></a> `unLoad(elem, cb=null)`

Same as above, but for the **`'unload'`** event.

## <a name='mouse-func'></a> `mouse(elem, cb=null)`

Same as above, but for the **`'mouse'`** event.

## <a name='resize-func'></a> `reSize(elem, cb=null)`

Samesies, but for the **`'resize'`** event.

## <a name='scroll-func'></a> `scroll(elem, cb=null)`

Samesies, but for the **`'scroll'`** event.

## <a name='select-func'></a> `select(elem, cb=null)`

Samesies, but for the **`'select'`** event.

# HTTP Requests
--
This library includes two convenience functions for HTTP requests. One synchronous, and the other asynchronous. A third will be added in the near future with a more robust feature set, but for now, this is what I got.

## <a name='xhr-func'></a> `xhr(url, fd, method='GET')`
This is the synchronous version. The first argument of the function is the url of the request. The second can either be an ordinary object or a FormData object. This argument is optional, and is used for sending data. The third argument is the method of the request. It is also optional, and defaults to 'GET'. There are a few different ways to use this function, depending on what arguments are given. Firstly, if only the **(`url`)** argument is given, and the **(`fd`)** and **(`method`)** are omitted, It becomes a simple '`GET'` request. The function will return the response text **(see ex. #1 below)**. Secondly, you can pass a simple key/value pair object in for the optional **(`fd`)** argument and it will be converted to FormData and sent along with the request **(see ex. #2)**. This argument will also take a formData object if you'd like to create it yourself. Finally, the third **(`method`)** argument is optional and defaults to `'GET'`, but you may use it to specify the request method. **ex.'s `'PUT'`, `'POST'`, `'DELETE'`, etc. (See ex. #3)**.

#### Arguments

1. **`url`** (string) - The HTTP request url.
2. **`fd`** (object/FormData) - Send Data in key/value pairs. Argument is optional.
3. **`method='GET'`** (string) - HTTP request method. **ex's `'POST'`, `'PUT'`, etc**. Argument is optional and defaults to `'GET'`.

**Returns**: JSON object (parsed responseText).

#### Usage

```javascript  
//ex. #1
//var r contains the parsed response
var r = xhr('http://some-url.net');

//ex. #2
var url = 'http://another-url.io';
/*The object in the second argument will be converted to a formData object and sent. The parsed response is contained in var r.*/
var r = xhr(url, {'id': 21, 'id': 22} );

//ex. #3
//FormData object is created, and will be passed in as 2nd argument
var fd = new FormData();

	fd.append('id', 9);
	fd.append('id', 10);
//Request method is specified in 3rd argument as 'POST'
var r = xhr(url, fd, 'POST');


```

## <a name='ajax-func'></a> `ajax(url, fd, callback(r), method='GET')`
This is the asynchronous version. The first argument of the function is the url of the request. The second can either be an ordinary object or a FormData object. This argument is used for sending data if there is data to send. If there is none, however, **`null`** must be passed in so that the callback will be in the correct argument. **(see ex. #1)**. The third argument is the callback function that will be called once the request responds. This callback takes the parsed response as its' argument **(see ex. #1)**.The fourth argument is the method of the request. It is optional, and defaults to `'GET'` unless data is being sent in the request **(`fd` is not *`null`*)**, in which case, it defaults to `'POST'`.  At its' most minimal, the function needs at least the first **(`url`)**, second **(`fd`)** and third **(`callback(r)`)** arguments. If **(`fd`)** is **`nulled`**, the function becomes a simple asynchronuous `'GET'` request. Once the response is recieved, the function will execute the callback with the parsed response as its' only argument. **(see ex. #1 below)**. Also, you can pass a simple key/value pair object in for the **(`fd`)** argument and it will be converted to FormData and sent along with the request **(see ex. #2)**. This argument will also take a FormData object if you'd like to create it yourself. As stated previously, the fourth argument **(`method`)** is optional and defaults to `'GET'` or `'POST'`, but you may use it to specify the request method. **ex.'s `'PUT'`, `'POST'`, '`DELETE'`, etc. (See ex. #3)**.

#### Arguments

1. **`url`** (string) - The HTTP request url.
2. **`callback(r)`** (function) - The callback function. It takes the parsed response **(`r`)** as its' only argument.
3. **`fd`** (object/FormData) - Send Data in key/value pairs. Argument is optional.
4. **`method='GET'`** (string) - HTTP request method. **ex's `'POST'`, `'PUT'`, etc**. Argument is optional and defaults to `'GET'`.

**Returns**: potatoes.

#### Usage

```javascript  
//ex. #1
//'r' argument contains the parsed response
ajax('http://some-url.net', null, (r)=> {
	log(r);
});

//ex. #2
var url = 'http://another-url.io';
/*The object in the second argument will be converted to a FormData object and sent. Since this argument is not null, it now defaults to a 'POST' request. If a 'GET' is desired in this case, it would need to be specified in the fourth argument, as below. The parsed response is contained the 'r' argument 
of the callback*/
ajax(url, {'id': 9, 'id': 10}, (r)=> {
	log(r);				
});

//ex. #3
//FormData object is created, and will be passed in as 2nd argument
var fd = new FormData();

	fd.append('id', 9);
	fd.append('id', 10);
//Request method is specified in 4th argument as 'POST'
ajax(url, fd, (r)=>{log(r)},'PUT');

```

# <a name='loggers'></a> Logging functions
--

The elementsJS library includes some convenience logging functions, that I think, make debugging easier, an maybe even more fun! They certainly liven up the console window!

## <a name='log-func'></a> `log(text, style, time)`
The log function takes the text it will be logging to the console as its' first argument. Its' second can either be a string or an array, depending on how you want to style your text. If you just want to color the text, include the color name, rgb code or hex code as a string for this argument **(see ex. #1)**. If you'd also like to color the background of the text, this argument must be an array, with the text color as the first item, and the background color as its' second **(see ex. #2)**. The style argument is optional, but I recommend using it! It's quite addicting! The third argument is a boolean. If true, the function will log the time along with the text. If you don't wish to style your text but you do want the time, you need to pass **`null`** to the **(`style`)** argument **(see ex. #3)**. I'll fix this when I can.

#### Arguments

1. **`text`** (string) - The text you want logged to the console window.
2. **`style`** (string/array) - Either text color as color name, rgb or hex codes, or an array with text *color* at index 0, and *background color* at index 1.
3. **`time`** (boolean) - If true, function will log the time along with given text.

**Returns**: Batman.

#### Usage

```javascript
//ex. #1
//styles text green
log('Hello Y\'all!', '#090');

//ex. #2
//styles text red with light green background, includes the time
log('Hello Again!', ['#900', '#030'], true);

//ex. #3
//no styling on text, includes time.
log('Still here?', null, true);
```

## <a name='info-func'></a> `info(text, time)`
The info function is a succinct alias for the console.info function that also styles the text a nice light-blue color. It takes the text it will be logging to the console as its' first argument. The second argument is a boolean. If true, the function will log the time along with the text. 

#### Arguments

1. **text** (string) - The text you want logged to the console window.
2. **time** (boolean) - If true, function will log the time along with given text.

**Returns**: No.

#### Usage

```javascript
//This function will log the text and time to the console.
info('This is some info.', true);
```

## <a name='warn-func'></a> `warn(text, time)`
The warn function is a succinct alias for the console.warn function that also styles the text a stern orange color. It takes the text it will be logging to the console as its' first argument. The second argument is a boolean. If true, the function will log the time along with the text. 

#### Arguments

1. **`text`** (string) - The text you want logged to the console window.
2. **`time`** (boolean) - If true, function will log the time along with given text.

**Returns**: `236`.

#### Usage

```javascript
//This function will log the text and time to the console.
warn('This is a stern warning!', true);
```

## <a name='err-func'></a> `err(text, time)`
The err function is a succinct alias for the console.error function that also styles the text a terrible red color. It takes the text it will be logging to the console as its' first argument. The second argument is a boolean. If true, the function will log the time along with the text. 

#### Arguments

1. **`text`** (string) - The text you want logged to the console window.
2. **`time`** (boolean) - If true, function will log the time along with given text.

**Returns**: Never again.

#### Usage

```javascript
//This function will log the text and time to the console.
err('This is an error!', true);
```

# Utility Functions
--

This is where I put functions that don't fit into any of the above categories, but are still very cool and/or useful. So far, I only have 2 public Utility functions, but there are more on the way.

## <a name='proto-func'></a> `proto(constructer, superConstructer)`
If you are familar with Node's utils.inherits() function, you'll be right at home with this function. It operates essentially exactly the same. The function creates a new object from the prototype of the **`superConstructer`** and copies it to prototype object of the **`constructer`**. constructer's prototype.constructor is then set to **`constructer`**.
#### Arguments

1. **`constructer`** (object) - The object whose prototype object will be copied to.
2. **`superConstructer`** (object) - The object whose prototype object will be copied.

**Returns**: **`constructer`**.

#### Usage

```javascript
//Object1 will inherit the prototype object of Object2
proto(Object1, Object2);
```

## <a name='shifter-func'></a> `shifter(onFunc, offFunc)`
I call this function the 'flip-shifter'. It's essentially a toggling function. It takes an 'on' function for its' first argument, and an 'off' function for its' second. When the function is executed, it returns a function, that when called, toggles the shifter **(see ex. below)**. I call the returned function **`flip()`**. You can call it whatever you like. 

#### Arguments

1. **`onFunc`** (function) - 'On' function.
2. **`offFunc`** (function) - 'Off' function.

**Returns**: `flip()` function.

#### Usage

```javascript
var flip;
//Define flip function
flip = shifter(()=> {
	log('ON!');
}, ()=> {
	log('OFF!');
});

flip(); // logs ON!
flip(): // logs OFF!
flip(); // logs ON! .... and so on.
```































