# <a class='titleLinks' id='installation'>Installation</a> 
There are a couple different ways to use elementsJS. The first is by simply using the function library. The second, is to make use of the new convenient elements syntax. If you would like to use the elements syntax, a simple compilation step is necessary. If you'd like to learn more, [click here](#).

The first step, however, is to simply install the library. elementsJS can be installed using either bower or npm package managers and *required* [CommonJS](http://www.commonjs.org/) style, or *import*-ed [es6](http://exploringjs.com/es6/ch_modules.html#_importing-and-exporting-in-detail) style. You may also include the cdn link in your html.

### elementsJS CDN:

```html
<script type='text/javascript' src='https://github.com/ejames9/elementsJS/e531c38/index.js'></script>

```

### Bower:
```
$ bower install elementsJS
```
### npm:
```
$ npm install elementsJS
```

## <a class='titleLinks' id='Usage'>Usage</a> <a id='huh'></a>
If you used either npm or Bower, you can use the library as below:

```js
//import the library CommonJS style
var elemsJS = require('elementsJS');
//use the elementsJS log() function
var foo = (bar, baz)=> {
	elemsJS.log(String(bar + baz < 100), 'blue', true);
};

foo(9, 99);

```

The above is a perfectly fine way to use elementsJS, however, the library was written in the spirit of making code more legible and perhaps, more aesthetically pleasing. That said, I reccomend using either [EcmaScript 2015(es6)'s ***import***](http://exploringjs.com/es6/ch_modules.html#_importing-and-exporting-in-detail) functionality or a custom elementsJS [**`imports()`**](#) function to import the individual functions, so that the elements object doesn't need referencing every time a library function is used. See below:

### ES2015:

```javascript
//import the library's functions separately
import { log, err, el, dom, make, kill } from 'elementsJS';
/*use the elementsJS log() function, without referencing the
elements object*/
var foo = (bar, baz)=> {
    log(String(bar + baz < 100), 'blue', true);
    return (bar + baz < 100);
};
//use the dom() and log() functions
 if (foo(9, 99)) {
 	dom('#foobar')
 			 .html('Hello!')
 			 .color('blue')
 			 .font('hack');

 	log('Confirmation.', '#090', true);
 }

```

### elementsJS:

```javascript
//import the imports() function from elementsJS
var imports = require('elementsJS').imports;
/*use the imports() function to import JS modules and their individual functions*/
imports({
     'lodash': ['omit', 'deburr', 'each', 'map'],
 'elementsJS': ['go', 'on', 'off', 'put', 'log', 'make'],
     'jQuery': '$'
});
//use any of the above functions without referencing the associated module object
var onGo =()=> {
	make('#comment', 'input')
						.size('20px', '100px')
						.borderRadius('5px)
						.put('#footer);
}
go(onGo);

```

Both of these options, though require an additional compilation step. To use *es6* functionality, code must be compiled with [babel](https://babeljs.io/), and the elementsJS *imports()* function needs to be compiled using the [elementsJS-interpreter](#interpreter-install). If you are using a build system such as [gulp](http://gulpjs.com/) or [grunt](http://gruntjs.com/)(coming soon), however, this step is a breeze ([Click here](#) to learn about using a build system in your development).

If you do decide to use the elementsJS *imports()* function, you can also try out the elements syntax, as the elementsJS-interpreter will parse your code for this syntax as well as the *imports()* function.

## <a class='titleLinks' id='interpreter-install'>Installing the elementsJS Interpreter</a>   
### Using gulp.js  [<img src='http://media-cache-ak0.pinimg.com/736x/a7/7e/81/a77e816ed0b0c1ed28d60b6b9d4860b1.jpg' height='60px'/>](http://gulpjs.com/)
If you don't know how to use gulp, you can find a nice tutorial [here](http://www.sitepoint.com/introduction-gulp-js/). First, you will need to install the gulp-elementsJS-interpreter package (Along with gulp and any other plug-ins you'll be using). It is available on npm's registry:

```
$ npm install gulp-elementsJS-interpreter --save-dev
```

In case you are new to npm, the *--save-dev* simply lists the package as one of your **devDependencies** in your application's *package.json* file. To use the interpreter, see below:

```javascript
//import the necessary modules
var elemsJS = require('gulp-elementsJS-interpreter'),
     uglify = require('gulp-uglify'),
      babel = require('gulp-babel'),
       gulp = require('gulp');

//define task, source file and destination
 gulp.task('default', ()=> {
   var srcJS = './index.js',
       dest  = './dist/';
//stream file through elemsJS-interpreter, babel and uglify
   return gulp.src(srcJS)
  	  .pipe(elemsJS()) //<<-ALWAYS PUT AT BEGINNING OF STREAM.
      .pipe(babel())
      .pipe(uglify())
      .pipe(gulp.dest(dest));
   });             
```
* Note - Always put the elementsJS-interpreter first in your stream, otherwise you will run into many errors.






# <a class='titleLinks' id='imports'>The imports() function</a>
--
The **`imports()`** function is a convenience function that allows the quick importing of many modules and/or module functions all at once. It is not necessary to use this function in order to use the library, it just makes it quicker/easier to import all of its' functions separately.

- Note- Use of this function requires compilation by the [elementsJS-interpreter](#).

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

# <a class='titleLinks' id='DOM'>DOM Manipulation Functions</a>
--

## <a class='titleLinks' id='el-func'>`el(elem)`</a>

This function will query the DOM, using a CSS Selector. If the query returns only 1 result, A built-in DOM Element object is returned (**even if the CSS Selector used is a className or tagName, it will reduce the list to 1 item**). If more than 1 are returned, an array of JS Element objects are returned. It's kind of a mix between **`document.querySelector()`** and **`document.querySelectorAll()`**. This is the DOM querying function you want to use if you don't want an **elementsJS element object(s)** returned.

#### Arguments

1. **`elem`** (string) -  [CSS Selector](http://www.w3schools.com/cssref/css_selectors.asp).

**Returns**: DOM Element Object.

#### Usage

```javascript
el('#foo').addEventListener('click', onClick);
```

## <a class='titleLinks' id='dom-func'>`dom(elem)`</a>

This function is exactly like *el()* above, except that it returns an elementsJS element object instead of a built-in JavaScript one. This allows access to the [elementsJS object methods](#).

#### Arguments

1. **`elem`** (string) -  [CSS Selector](http://www.w3schools.com/cssref/css_selectors.asp).

**Returns**: elementsJS element Object.

#### Usage

```javascript
dom('#foo')
		.on('click', onClick);
```

## <a class='titleLinks' id='__-func'>`__(tempLit, elem='body')`</a>

The above function is spelled with 2 underscores, so as to avoid conflict with underscore.js or lodash.js. It takes a template literal as it's first argument, and an optional element as its' second. If the second argument is omitted, the template is appended directly to the body as a default. The appending element is returned.

- Note- The first argument (`tempLit``) is meant to be a [backtick string](http://exploringjs.com/es6/ch_first-steps.html#_multi-line-strings), but will also take a normal string, the syntax just becomes a lot more difficult/complex.

#### Arguments

1. **`tempLit`** (string) - An [es6 template literal](http://exploringjs.com/es6/ch_first-steps.html#_multi-line-strings), see below.
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
- Pretty cool huh? Thanks EcmaScript 2015! The `<main>` element, along with all of its' children, will be appended to the `<body>` of the document.

## <a class='titleLinks' id='make-func'>`make(elem, tag='div')`</a>

This function takes an id/class CSS Selector as its' first argument, and a tag name as its' optional second. It will make a div and give it the class or id given in the first argument. If a tag is specified in the 2nd argument, it will be made instead of a div. The function returns an elementsJS element object, giving access to its' [methods](#).

#### Arguments

1. **`elem`** (string) -  A string id or class name. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex.** `'#foo'` or `'.bar'`.
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

## <a class='titleLinks' id='put-func'>`put(child, mom)`</a>

This function takes an id or class CSS Selector or a variable representing a DOM Element as its' first and second arguments. The first will be appended to the second.

#### Arguments

1. **`child`** (string/variable) -  A DOM element variable, or a string id or class css selector. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex.** `'#foo'` or `'.bar'`.
2. **`mom`** (string/variable) -  A DOM element variable, or a string id or class css selector. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex.** `'#foo'` or `'.bar'`.


**Returns**: nada.

#### Usage

```javascript
make('#foo', 'input');  

put('#foo', '#bar');
```

## <a class='titleLinks' id='x-func'>`x(elem)`</a>

This function takes an id/class CSS Selector or a variable representing a DOM Element as its' first and only argument. This element will be deleted from the DOM.

#### Arguments

1. **`elem`** (string/variable) -  A DOM element variable, or a string id or class css selector. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex.** `'#foo'` or `'.bar'`.

**Returns**: no things.

#### Usage

```javascript  
if (bool)
	x('#foo');
else
	x('#bar');

```

## <a class='titleLinks' id='fore-func'>`fore(ref, elem)`</a>

This function takes an id/class CSS Selector or a variable representing a DOM Element as its' first and second arguments. The second argument (`elem`) will be inserted in the DOM immediately preceding the element represented the first argument (`ref`).

#### Arguments

1. **`ref`** (string/variable) -  A DOM element variable, or a string id or class css selector. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex.** `'#foo'` or `'.bar'`.
2. **`elem`** (string/variable) -  A DOM element variable, or a string id or class css selector. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex.** `'#foo'` or `'.bar'`.

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

## <a class='titleLinks' id='aft-func'>`aft(ref, elem)`</a>

This function takes an id/class CSS Selector or a variable representing a DOM Element as its' first and second arguments. The second argument (`elem`) will be inserted in the DOM immediately after the element represented by the first argument (`ref`).

#### Arguments

1. **`ref`** (string/variable) -  A DOM element variable, or a string id or class css selector. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex.** `'#foo'` or `'.bar'`.
2. **`elem`** (string/variable) -  A DOM element variable, or a string id or class name. Hash **`'#'`** or period **`'.'`** must be present as first character in string. **ex.** `'#foo'` or `'.bar'`.

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

## <a class='titleLinks' id='show-func'>`show(elem, disp='block')`</a>

This function takes an id/class CSS Selector, a variable representing a DOM Element, or an array of either as its' first argument and a CSS display option as its' optional 2nd. The second argument defaults to 'block'. The function will set the element represented by the first argument (elem) to the display option represented by the second argument, 'block' if none exists. If elem is an array, the operation will be performed on all elements.

#### Arguments

1. **`elem`** (string/array/variable) -  A DOM element variable, an id or class css selector, or array of the above. Hash **`'#'`** or period **`'.'`** must be present as first character in strings. **ex.** `'#foo'` or `'.bar'`.
2. **`disp='block'`** (string) - [CSS display option](http://www.w3schools.com/cssref/pr_class_display.asp). **ex.'s** `'inline'`, `'flex'` etc.** Optional, defaults to `'block'`.

**Returns**: uh uh.

#### Usage

```javascript  
show('.foobar', 'inline-flex');
```

## <a class='titleLinks' id='hide-func'>`hide(elem)`</a>

This function takes an id/class CSS Selector, a variable representing a DOM Element, or an array of either as its' only argument. The function will set the element represented by the argument (`elem`) to display `'none'`. If elem is an array, the operation will be performed on all elements.

#### Arguments

1. **`elem`** (string/array/variable) -  A DOM element variable, an id or class css selector, or an array of any of them. Hash **`'#'`** or period **`'.'`** must be present as first character in strings. **ex.** `'#foo'` or `'.bar'`.

**Returns**: nuh uh.

#### Usage

```javascript  
hide('.foobar');
```

## <a class='titleLinks' id='size-func'>`size(elem, h, w)`</a>

This function takes an id/class CSS Selector or a variable representing a DOM Element as its' first argument, and height and width in px, pt, or em's as its' second and third. The function will set the element represented by the argument (`elem`) to dimensions represented by the second (`h`) and third (`w`) arguments.

#### Arguments

1. **`elem`** (string/array/variable) -  A DOM element variable, an id or class css selector, or array of them. Hash **`'#'`** or period **`'.'`** must be present as first character in strings. **ex.** `'#foo'` or `'.bar`'.
2. **`h`** (string) - Height of element, in px, pt, em or %. **ex.** `'20em'`.
3. **`w`** (string) - Width of element, in px, pt, em or %. **ex.** `'20px'`.

**Returns**: not.

#### Usage

```javascript  
size('#foobar', '40px', '200px');
```

# <a class='titleLinks' id='event-handle'>Event Handling Functions</a>

These are a collection of convenience functions that deal mainly with the firing of, or reacting to, DOM events. **All event handling functions have built-in Cross Browser support**.

## <a class='titleLinks' id='go-func'>`go(callback)`</a>

This function takes a function as its' only argument, which will be executed once the 'DOMContentLoaded' event has fired upon page load.
#### Arguments

1. **`callback`** (function) - Code to be executed upon page load.

**Returns**: nothing.

#### Usage

```javascript  
go(init);
```

## <a class='titleLinks' id='on-func'>`on(event, el, callback)`</a>

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

## <a class='titleLinks' id='off-func'>`off(event, el, callback)`</a>

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
## <a class='titleLinks' id='once-func'>`once(event, el, callback)`</a>

This function is the same as `on(event, el, callback)`, except that it removes itself after the callback is executed once.

#### Arguments

1. **`event`** (string) - Event to be listened for.
2. **`el`** (string/variable) - An id/class CSS selector, or DOM element variable, representing element on which event is listened for.
3. **`callback`** (function) - Code to be executed once event fires.

**Returns**: nothing.

#### Usage

```javascript  
once('click', '#foo', onClick);
```


## <a class='titleLinks' id='spark-func'>`spark(event, elem)`</a>

This function takes an event as its' first argument, and an id/class CSS selector as its' second. It fires the given event on the element returned by the selector.

#### Arguments

1. **`event`** (string) - Event to be fired.
2. **`el`** (string/variable) - An id/class CSS selector, or DOM element variable, representing element on which event will be fired.


**Returns**: zip.

#### Usage

```javascript  
go(spark('focus', '#foo'));
```
## <a class='titleLinks' id='click-func'>`click(elem, cb=null)`</a>

This function takes an id/class CSS Selector or a variable representing a DOM Element as its' first argument, and a callback function as its' optional second. If the second argument is omitted, the callback is nulled and the function fires a `'click'` event on the element represented by the first argument (`elem`). If a callback function is provided, the function becomes an event listener, listening for the `'click'` event on the element represented by the first argument, and executing the callback (`cb`) once it is detected.

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

## <a class='titleLinks' id='dblClick-func'>`dblClick(elem, cb=null)`</a>

For example, This function will either fire a `'dblClick'` event on the given element, or register an event listener for the `'dblClick'` on the given element, if a callback is present.

## <a class='titleLinks' id='blur-func'>`blur(elem, cb=null)`</a>

This function will either fire a `'blur'` event on the given element, or register an event listener for the `'blur'` on the given element, if a callback is present.

## <a class='titleLinks' id='error-func'>`error(elem, cb=null)`</a>

This function will either fire an `'error'` event on the given element, or register an event listener for the `'error'` on the given element, if a callback is present.

## <a class='titleLinks' id='focus-func'>`focus(elem, cb=null)`</a>

This function will either fire a `'focus'` event on the given element, or register an event listener for the `'focus'` on the given element, if a callback is present.

## <a class='titleLinks' id='focusIn-func'>`focusIn(elem, cb=null)`</a>

This function will either fire a `'focusIn'` event on the given element, or register an event listener for the `'focusIn'` on the given element, if a callback is present.

## <a class='titleLinks' id='focusOut-func'>`focusOut(elem, cb=null)`</a>

This function will either fire a `'focusOut'` event on the given element, or register an event listener for the `'focusOut'` on the given element, if a callback is present.

## <a class='titleLinks' id='keyUp-func'>`keyUp(elem, cb=null)`</a>

Same as above, but for the `'keyup'` event.


## <a class='titleLinks' id='keyDown-func'>`keyDown(elem, cb=null)`</a>

Same as above, but for the `'keydown'` event.

## <a class='titleLinks' id='load-func'>`load(elem, cb=null)`</a>

Same as above, but for the `'load'` event.

## <a class='titleLinks' id='unLoad-func'>`unLoad(elem, cb=null)`</a>

Same as above, but for the `'unload'` event.

## <a class='titleLinks' id='mouse-func'>`mouse(elem, cb=null)`</a>

Same as above, but for the `'mouse'` event.

## <a class='titleLinks' id='resize-func'>`reSize(elem, cb=null)`</a>

Samesies, but for the `'resize'` event.

## <a class='titleLinks' id='scroll-func'>`scroll(elem, cb=null)`</a>

Samesies, but for the `'scroll'` event.

## <a class='titleLinks' id='select-func'>`select(elem, cb=null)`</a>

Samesies, but for the `'select'` event.

# <a class='titleLinks' id='http'>HTTP Requests</a>
--
This library includes two convenience functions for HTTP requests. One synchronous, and the other asynchronous. A third will be added in the near future with a more robust feature set, but for now, this is what I got.

## <a class='titleLinks' id='xhr-func'>`xhr(url, fd, method='GET')`</a>
This is the synchronous version. The first argument of the function is the url of the request. The second can either be an ordinary object or a FormData object. This argument is optional, and is used for sending data. The third argument is the method of the request. It is also optional, and defaults to 'GET'. There are a few different ways to use this function, depending on what arguments are given. Firstly, if only the (`url`) argument is given, and the (`fd`) and (`method`) are omitted, It becomes a simple '`GET'` request. The function will return the response text **(see ex. #1 below)**. Secondly, you can pass a simple key/value pair object in for the optional (`fd`) argument and it will be converted to FormData and sent along with the request **(see ex. #2)**. This argument will also take a formData object if you'd like to create it yourself. Finally, the third ( (`method`) ) argument is optional and defaults to `'GET'`, but you may use it to specify the request method. **ex.'s `'PUT'`, `'POST'`, `'DELETE'`, etc. (See ex. #3)**.

#### Arguments

1. **`url`** (string) - The HTTP request url.
2. **`fd`** (object/FormData) - Send Data in key/value pairs. Argument is optional.
3. **`method='GET'`** (string) - HTTP request method. **ex's `'POST'`, `'PUT'`, etc**. Argument is optional and defaults to `'GET'`.

**Returns**: `this.responseText`

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

## <a class='titleLinks' id='ajax-func'>`ajax(url, fd, callback(r), method='GET')`</a>
This is the asynchronous version. The first argument of the function is the url of the request. The second can either be an ordinary object or a FormData object. This argument is used for sending data if there is data to send. If there is none, however, `null` must be passed in so that the callback will be in the correct argument. **(see ex. #1)**. The third argument is the callback function that will be called once the request responds. This callback takes the parsed response as its' argument **(see ex. #1)**.The fourth argument is the method of the request. It is optional, and defaults to `'GET'` unless data is being sent in the request (`fd` is not *`null`*), in which case, it defaults to `'POST'`.  At its' most minimal, the function needs at least the first (`url`), second (`fd`) and third (`callback(r)`) arguments. If (`fd`) is `nulled`, the function becomes a simple asynchronuous `'GET'` request. Once the response is recieved, the function will execute the callback with the parsed response as its' only argument. **(see ex. #1 below)**. Also, you can pass a simple key/value pair object in for the (`fd`) argument and it will be converted to FormData and sent along with the request **(see ex. #2)**. This argument will also take a FormData object if you'd like to create it yourself. As stated previously, the fourth argument (`method`) is optional and defaults to `'GET'` or `'POST'`, but you may use it to specify the request method. **ex.'s `'PUT'`, `'POST'`, '`DELETE'`, etc. (See ex. #3)**.

#### Arguments

1. **`url`** (string) - The HTTP request url.
2. **`callback(r)`** (function) - The callback function. It takes the parsed response (`r`) as its' only argument.
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

# <a class='titleLinks' id='loggers'>Logging Functions</a>
--

The elementsJS library includes some convenience logging functions, that I think, make debugging easier, an maybe even more fun! They certainly liven up the console window!

## <a class='titleLinks' id='log-func'>`log(text, style, time)`</a>
The log function takes the text it will be logging to the console as its' first argument. Its' second can either be a string or an array, depending on how you want to style your text. If you just want to color the text, include the color name, rgb code or hex code as a string for this argument **(see ex. #1)**. If you'd also like to color the background of the text, this argument must be an array, with the text color as the first item, and the background color as its' second **(see ex. #2)**. The style argument is optional, but I recommend using it! It's quite addicting! The third argument is a boolean. If true, the function will log the time along with the text. If you don't wish to style your text but you do want the time, you need to pass `null` to the (`style`) argument **(see ex. #3)**. I'll fix this when I can.

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

## <a class='titleLinks' id='info-func'>`info(text, time)`</a>
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

## <a class='titleLinks' id='warn-func'>`warn(text, time)`</a>
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

## <a class='titleLinks' id='err-func'>`err(text, time)`</a>
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

# <a class='titleLinks' id='utils'>Utility Functions</a>


This is where I put functions that don't fit into any of the above categories, but are still very cool and/or useful. So far, I only have 2 public Utility functions, but there are more on the way.

## <a class='titleLinks' id='proto-func'>`proto(constructer, superConstructer)`</a>
If you are familar with Node's utils.inherits() function, you'll be right at home with this function. It operates essentially exactly the same. The function creates a new object from the prototype of the `superConstructer` and copies it to prototype object of the `constructer`. constructer's prototype.constructor is then set to `constructer`.
#### Arguments

1. **`constructer`** (object) - The object whose prototype object will be copied to.
2. **`superConstructer`** (object) - The object whose prototype object will be copied.

**Returns**: **`constructer`**.

#### Usage

```javascript
//Object1 will inherit the prototype object of Object2
proto(Object1, Object2);
```

## <a class='titleLinks' id='shifter-func'>`shifter(onFunc, offFunc)`</a>
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





# <a class='titleLinks' id='elem-obj'>The element Object</a>

The element (*notice the lower-case 'e'* ) object is to elementsJS, what the jQuery object is to jQuery. It is a thin wrapper around the DOM Element object that conveniently connects the Element to a load of useful methods, and also enables chaining of function/method calls. This object is returned when an element is created with the [`make()`](#make-func) function, or selected from the DOM with the [`dom()`](#dom-func) function. It is also returned when the [elements syntax](#) is used. The most direct way, however, is to instantiate an element by calling the element constructor.

## <a class='titleLinks' id='element-const'>`element(elem)`</a>
This is the element object constructor, it takes a DOM Element object as its' only argument and returns an elementsJS element object instance. This function is unlike the [`dom()`](#dom-func) function, in that it won't query the DOM for an existing element. It needs a reference to a valid Element object.

#### Arguments

1. `elem` (variable) - A reference to a valid, existing DOM Element object.

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

## <a class='titleLinks' id='dom2-func'> `dom(elem)` </a>

## <a class='titleLinks' id='make2-func'>`make(elem, tag='div' )`</a>

The two functions above have been covered already in the [DOM Manipulation Functions](#DOM) section, and mentioned/referenced in this section, but I'm listing them here also, for the sake of clarity. These two functions are the most common functions you will use to get an element object. The first will query the DOM for an Element and create an elementsJS element from it, and the second will create a DOM Element and use it to *create* an elementsJS element. Both functions enable chaining of method calls afterward. Available methods will be detailed below.
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

# <a class='titleLinks' id='elem-obj-methods'>element Object Methods</a>
--
The list of element object methods is EXTREMELY long, so I will list some of the more interesting methods, and ones that aren't quite as self-explanatory, and explain them. Just about every one of the [**style object**](http://www.w3schools.com/jsref/dom_obj_style.asp) methods are *getters* as well as *setters*, so depending on how you use the function, you may either return a reference to the element object [**(see ex. #1)**](#exs), which enables method chaining, or a particular property or value [(**see ex. #2)**](#exs), so that it may be stored in a variable. **All methods are written to be Cross-browser supportive.**



## <a class='titleLinks' id='element-font-ex'>`element.font(value)`</a>
The font method sets or returns up to six separate font properties, in a shorthand form.

With this method, you can set/return the following (in this order):

1. font-style
2. font-variant
3. font-weight
4. font-size
5. line-height
6. font-family

The font-size and font-family are required. If one of the other values are missing, the default values will be inserted, if any. click [here](http://www.w3schools.com/jsref/prop_style_font.asp) for more info on this function. The `value` argument is however, optional. If no argument is given, the function becomes a *getter* instead of a *setter*, returning the existing font information for the element. See examples 1 and 2 below.

#### Arguments

1. **`value`** (string) - Optional, a space separated list of the above properties/values.

**Returns**: elementsJS element object, unless method is called with no argument, then it returns the elements' existing font values.

#### <a class='titleLinks' id='exs'></a> Usage

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
* Note - As stated above, pretty much all of the ***style*** methods work this way.

## <a class='titleLinks' id='style-methods'>Style Methods</a>
Here is a list of all of the element object methods that I got from the HTML DOM Style object. I won't explain the functions, as the definitions/usage can be found [here](http://www.w3schools.com/jsref/dom_obj_style.asp). A few of the methods have altered names for brevity's sake, which are noted below.


## `element.bg(val)`
* An alias for **.background()**

## `element.bgColor(val)`
* An alias for **.backgroundColor()**

## `element.bgImage(val)`
* An alias for **.backgroundImage()**

## `element.bgSize(val)`
* An alias for **.backgroundSize()**

## `element.bgPosition(val)`
* An alias for **.backgroundPosition()**

## `element.border(val)`

## `element.borderColor(val)`

## `element.borderRadius(val)`

## `element.borderWidth(val)`

## `element.borderTop(val)`

## `element.borderBottom(val)`

## `element.borderRight(val)`

## `element.borderLeft(val)`

## `element.boxShadow(val)`

## `element.boxSizing(val)`

## `element.clear(val)`

## `element.color(val)`

## `element.columns(val)`

## `element.content(val)`

## `element.cursor(val)`

## `element.direction(val)`

## `element.display(val)`

## `element.cssFloat(val)`

## `element.font(val)`

## `element.fontFamily(val)`

## `element.fontStyle(val)`

## `element.fontSize(val)`

## `element.fontWeight(val)`

## `element.height(val)`

## `element.lineHeight(val)`

## `element.icon(val)`

## `element.left(val)`

## `element.listStyle(val)`

## `element.margin(val)`

## `element.marginRight(val)`

## `element.marginLeft(val)`

## `element.marginTop(val)`

## `element.marginBottom(val)`

## `element.maxHeight(val)`

## `element.minHeight(val)`

## `element.maxWidth(val)`

## `element.minWidth(val)`

## `element.opacity(val)`

## `element.outline(val)`

## `element.overflow(val)`

## `element.overflowX(val)`

## `element.overflowY(val)`

## `element.padding(val)`

## `element.paddingRight(val)`

## `element.paddingLeft(val)`

## `element.paddingTop(val)`

## `element.paddingBottom(val)`

## `element.position(val)`

## `element.right(val)`

## `element.top(val)`

## `element.textAlign(val)`

## `element.textDecoration(val)`

## `element.textShadow(val)`

## `element.verticalAlign(val)`

## `element.visibility(val)`

## `element.whiteSpace(val)`

## `element.width(val)`

## `element.wordSpacing(val)`

## `element.zIndex(val)`

## `element.alignContent(val)`

## `element.transformOrigin(val)`

## `element.transition(val)`

## `element.transitionDuration(val)`

## `element.animation(val)`

## `element.filter(val)`

## `element.flex(val)`

## `element.perspective(val)`

## `element.perspectiveOrigin(val)`

## `element.transitionDelay(val)`

# <a class='titleLinks' id='core-func'>`element.core(func, obj='el')`</a>
--
The `.core()` method is a custom method that provides direct access to the elements' Element object or Style object. This is useful incase there is a *style* method/property or *Element* method/property you'd like to use, that I have yet to add as an elementsJS `element` method. It takes an anonymous function as its' first argument, and this anon function will take (`el`) (or whatever you'd like to call it), as its' only argument, which is a reference to the elements' Element object, or Element.style object. The second argument is optional and determines which of the above you will have access to. It defaults to `'el'`, which will give access to the Element object. If `'style'` is given in its' place, you'll have access to the style object. See below for examples.

#### Arguments

1. **`func`** (function) - An anonymous function with argument (**`el`**).
2. **`obj='el'`** (string) - Optional argument. Defaults to `'el'`, but `'style'` may be used in its' place.

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

## <a class='titleLinks' id='DOM-Elem-Methods'>DOM Element Methods</a>

These element object methods are those that are most closely associated with the DOM Element object.


## `element.add(el)`
The `.add()` method is an alias for appendChild. It takes a CSS Selector string as its' only argument.

**Returns**: **`this`**.

#### Usage

```javascript
dom('#foo')
		  .add('#bar');
```

## `element.put(mom)`
This method appends the element to the element given in the argument (`mom`).

**Returns**: **`this`**.

#### Usage

```javascript
dom('#foo')
		  .put('#bar');
```

## `element.fore(elem)`
This method will insert the element just before the element given as the argument (`elem`).

**Returns**: **`this`**.

## `element.aft(elem)`
This method will insert the element just after the element given as the argument (`elem`).

**Returns**: **`this`**.



## `element.ma()`
This method returns the parentNode of element.

**Returns**: **`this.el.parentNode`**.



## `element.children(mod)`
The [`.children`](http://www.w3schools.com/jsref/prop_element_children.asp) property becomes the [`.childNodes`](http://www.w3schools.com/jsref/prop_node_childnodes.asp) property when the string `'all'` is given as the optional (`mod`) argument.

#### Arguments

1. **`mod`** (string) - Argument is optional. Pass in the string `'all'` to return the `.childNodes` property, instead of the `.children` property.

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
The `.first()` method returns the [`.firstElementChild`](http://www.w3schools.com/jsref/prop_element_firstelementchild.asp) property when no argument is given, and returns the [`.firstChild`](http://www.w3schools.com/jsref/prop_node_firstchild.asp) property when the string `'all'` is given as the optional (`mod`) argument.

#### Arguments

1. **`mod`** (string) - Argument is optional. Pass in the string `'all'` to return the `.firstChild` property, instead of the `.firstElementChild` property.

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
The `.sib()` method takes two arguments. The first, (`ord`) determines which sibling to return, the `'next'` sibling, or the `'prev'` (previous) one. The second argument (`mod`), like the above 2 functions, is optional and determines whether or not to consider ***`'all'`*** nodes, or just Element nodes.
#### Arguments

1. **`ord`** (string) - Pass either `'prev'` or `'next'` to determine which sibling to return.
2. **`mod`** (string) - Argument is optional. Pass in the string `'all'` to return the first sibling node, or leave blank to return the first sibling Element.

**Returns**: A sibling node/Element **elementsJS element**

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




## `element.id(val)`
Pass ID name in as argument (`val`) to set *`.id`* property, or leave it blank to return existing value.

**Returns**: **`.id`** property value or **`this`**

## `element.class(val)`
This is an alias for the `.className` property. Pass Class name in as argument (`val`) to set *`.className`* property, or leave it blank to return existing value.

**Returns**: **`.className`** DOM Element property value **or** **`this`**

## `element.x(elem)`
This is an alias for the `.removeChild()` method. Pass a CSS Selector or a reference to a DOM Element in as argument (`elem`) to remove it from the DOM.

**Returns**: **`this`**


## `element.xClass(cb=null)`
This method deletes the existing class name of the element. Takes an optional callback argument.

**Returns**: **`this`**

## `element.html(val)`
This method is an alias for the `Element.innerHTML()`method. Pass a valid HTML string in as argument (`val`) to set HTML content of the element, or leave it blank to return existing HTML.

**Returns**: HTML content **or** **`this`**

## `element.size(height, width)`
This method will set the (`height`) and (`width`) of the element.

**Returns**: **`this`**

## `element.offset(mod)`
If the argument (`mod`) is left blank, this method will return an object with 2 keys/values:

```javascript
const offsets = dom('#foo').offset();

// offsets.top  = Element.offsetTop
// offsets.left = Element.offsetLeft
```
If the string `'all'` is passed in the (`mod`) argument, the object will contain 5 keys/values:

```javascript
const offsets = dom('#foo').offset('all');

// offsets.top    = Element.offsetTop
// offsets.left   = Element.offsetLeft
// offsets.height = Element.offsetHeight
// offsets.width  = Element.offsetWidth
// offsets.parent = Element.offsetParent
```
* Note- If anything other than the string `'all'` is given for the (`mod`) argument, an **`Invalid Argument`** error will occur.


**Returns**: **`this`**


## `element.show(disp='block')`
This method will set the element to display `block` if the (`disp`) argument is left blank. Any valid display option may be used in its' place. **ex.'s `flex`, `inline`, `inline-block` etc.**

**Returns**: **`this`**

## `element.hide()`
This method will set the element to display: `'none'`.

**Returns**: **`this`**

## `element.viz(disp='block')`
This method will toggle between display `none`, and the display option set by the argument (`disp`). It defaults to `'block'`. Any valid display option may be used in its' place. **ex.'s `flex`, `inline`, `inline-block` etc.**

**Returns**: **`this`**



## `element.text(val)`
This method is an alias for the `Element.textContent()` method. Pass a string in as argument (`val`) to set text content of the element, or leave it blank to return existing text.

**Returns**: text content **or** **`this`**

## `element.value(val)`
This method is an alias for the `Element.nodeValue()` method. Pass a value in as argument (`val`) to set node value of the node, or leave it blank to return existing value.

**Returns**: node value **or** **`this`**

## `element.lang(val)`
Setter and Getter for an elements' `.lang` (language) attribute.

**Returns**: elements' lang attribute **or** **`this`**

## `element.clone(deep)`
This method returns a clone of the element and its' attributes. The (`deep`) argument is an optional boolean and defaults to false. If set to true, The function will clone the element, its' attributes, *and* its' descendants.

**Returns**: clone of element.

## `element.normalize()`
This method removes empty Text nodes and joins adjacent Text nodes.

**Returns**: **`this`**.

## `element.toString()`
Converts an element to a string.

**Returns**: Element string.

## `element.tag()`
An alias for `.tagName`, this method returns the tag name of an Element.

**Returns**: `Element.tagName`.

## `element.title(val)`
Sets or returns the `.title` attribute of an Element.

**Returns**: title attribute **or** **`this`**.

## `element.attrib(attrib, val)`
This method has the ability to Set, Get or Remove attributes. The first argument (`attrib`), determines the attribute. If the second argument (`val`) is left blank, the method returns the existing value of the attribute. If you'd like to set the attribute, include the value for it in this argument. If you'd like to remove the named attribute, pass the string `'remove'` in place of (`val`).

#### Arguments

1. **``attrib``** (string) - The Element attribute to work with.
2. **`val`** (string) - Optional Argument. Either sets value of the attribute, or tells the function to `'remove'` the attribute.

**Returns**: Element attribute value **or** **`this`**.

## `element.on(event, callback)`
This method adds an event listener on the element, for the event given by the (`event`) argument. It takes a callback function as its' second argument.

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

## <a class='titleLinks' id='event-methods'>Event Methods</a>
The following event methods all work the same way, so I'll explain one of them, and then list the rest.

## `element.click(callback=null)`
This method will set an event listener for the click event (imagine that..) if, and only if, a callback function is given for the *optional* argument (`callback`). If this argument is left blank, a click event will be triggered on the element instead.

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
Note- All methods below work the same as above, but for their respective events.


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


## <a class='titleLinks' id='Util-Methods' class='titleLinks'>Utility Methods</a>
This is where methods that don't seem to fit into any of the previous categories will go. There's not much here to share yet, but for now, I just have the below method I've been playing around with that makes iterating over lists a bit easier.

## `element.only(num, func, arr=null)`
elementsJS can iterate over a list of element objects in a chain-like manner, using JavaScript's built-in `Array.prototype.forEach()` function, and an elementsJS element method, `.only()`. See below.

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
In order to work properly, the function argument of the `.forEach()` method must be called with 3 arguments. A reference to the (`element`) being iterated over, the index **(`i`)** and the array **(`a`)**. The `.only()` method takes 3 arguments. The first is the list-item number (not index, therefore, the first item is #1, not 0). The second is an anonymous function that will apply any changes to the element. As you can see above, since you have access to the element object from the `.forEach()` method, you can still chain method calls in this function. The third argument is mandatory for the first `.only()` only. The method needs a reference to the array to operate correctly, but only in its' first occurence. **It should be left out of any/all subsequent calls.**

#### Arguments

1. **`num`** (integer) - The number of the list-item being singled out (not the index).
2. **`func`** (function) - An anonymous function housing the distinct changes of the specified element.
3. **`arr=null`** (array) - A reference to the element array from the `.forEach()` function. Should only be used in first occurence of `.only()` method.

**Returns**: **`this`**.





# <a class='titleLinks' id='elements-syntax'>The elementsJS <span id='elSynSpan'>elements</span> Syntax</a>

The elements Syntax is a convenient way to reference existing DOM elements, or to create them. The syntax will perform the operations of many elementsJS functions all at once, with very little code to write. In many cases, you are able to eliminate the variable creation step when working with DOM elements as well, because of the brevity of the syntax. The syntax is already familiar, as it resembles HTML, but it's not HTML, so it's X-Site Attack safe.

If you find that you would like to try this syntax out for yourself, you will need to learn how to install/ compile it. Learn about the **elementsJS interpreter** [**here**](#interpreter-install).

* Note- This syntax is not intended to be used for adding large amounts of HTML to the DOM. That is what the [**```__()```**](#__-func) (double-underscore) function is for.

## <a class='titleLinks' id='elemsyntax-func1'>`<elem>`, `<tag=elem>`</a>
The easiest way to think of this particular syntax, is to think of it as an alias for the elementsJS function [`el()`](#el-func). It will query the DOM for the given CSS Selector, the (`elem`) argument, and return a DOM Element object if any matches exist. If there is no match, and the (`tag`) argument is blank, the function will **create** a `<div>` with the `id` or `class` given in the first argument, and append it to the `<body>` of the document. If you are using the function to create an element, you may use the optional second argument (`tag=null`) to assign a tag. If there are multiple matches, an array of DOM Element objects will be returned. **If there is only 1 match an array will not be returned, regardless of the CSS Selector used.**

#### Arguments

1. **`elem`** (string) - CSS Selector.
2. **`tag`** (string) - Optional. Valid HTML tag name.

**Returns**: A DOM Element object **or** an array of DOM Element objects.

* Note- If a variable containing a DOM Element is passed to the argument (`elem`), the function becomes a **noop**.




See below for a simple example.

```javascript
on('click', <'#foo'>, ()=> {
	onClick();
});
```
In the above example, a reference to the element with an `id` of `'foo'` is achieved without the need for a variable. Simply place a CSS Selector query string between an opening bracket and a closing bracket (with no **`'/ '`** ), and if a matching element exists in the DOM, your good. If the element doesn't exist in the DOM, it will create one. **It will return a DOM Element, not an elementsJS element.** If you'd like to use an elementsJS element in place of a DOM Element variable, you must use this function/syntax. If you'd like to use the method chaining functionality of elementsJS, you must use the below syntax.

## The next few functions/examples are all different usages of the same syntax, and not necessarily separate functions.

## <a class='titleLinks' id='elemsyntax-func2'></a> `<elem/>`
Just as the above function is an alias for the `el()` function, this syntax a kind of alias for the [**`dom()`**](#dom-func) **and** [**`make()`**](#make-func) functions. Notice that a **`/`** is added to this syntax. This slash is necessary to distinguish it from the previous function. This is the simplest way to use the syntax, with simply (`elem`) as its' only argument. Just like above, this argument takes a CSS Selector string. Used this way, the function will search the DOM for a match to the given CSS Selector. If a match is found, it will use it to create an [**elementsJS element object**](#elem-obj). If multiple matches are found, It will use them to create/return an array of elementsJS element objects. If no matches are found, the function will create a `<div>` element, give it the `id` or `class` given in the (`elem`) argument and append it to the `<body>` of the document. You will learn how to use the syntax to assign tag names and choose where to append an element below.
#### Examples

```javascript
// '#foo' Selector returns 1 element
<'#foo'/>
	  .bgColor('red')
	  .color('white')
	  .click(()=> {
	  	 onClick();
	  });

// '.items' Selector returns 3 elements
<'.items'/>
	  .forEach((element, i, a)=> {
	  	  element
	  	  	  .color('red')
	  	  	  .left('100px')
	          .html('Item ONE')
	          .only(2, ()=> {
	      	      element
	      	      	  .left('140px')
	      	      	  .html('Item TWO');

	          }, a)
	          .only(3, ()=> {
	             element
	             	 .left('180px')
	             	 .html('Item THREE');
	          });
	  });
```
**Note-** The second example shows how easy it is to deal with an array of elements.

## <a class='titleLinks' id='elemsyntax-func3'>`<elem=num/>`</a>
As you can see above, arguments in this syntax are separated by **`=`**'s and not **comma's**. The first argument (`elem`), is the same as used above. The (`num`) argument is only ever used to determine how many elements to create, and, since we have yet to specify a **tag name**, The above function would create a # of `<div>`'s (defaults to `<div`'s) specified by the (`num`) argument,
and give them the `class` name specified by the (`elem`) argument and append them to the `<body>`, since no other destination has been specified.

#### Example

```javascript
//5 <div>'s are created, converted to elementsJS elements, pushed to an
//array, and returned.
<'.tasks'=5/>
			.forEach((element)=> {
				element
					 .bgColor('white')
					 .color('blue');
			});
```

## <a class='titleLinks' id='elemsyntax-func4'>`<tag=elem/>`</a>
This example introduces the (`tag`) argument. It goes in front of the (`elem`) argument, which still takes an `id` or `class` CSS Selector. Being that there is no need to specify the **tag name** when querying the DOM, the intent with this syntax is to create an element (only 1 since the argument (`num`) is not present) of the tag specified by the argument (`tag`) and give it the `id` or `class` specifed by **elem**. See below.

#### Example

```javascript
//A button with id of 'fooButton' is created, converted to an
//elementsJS element and returned.

<button='#fooButton'/>
				.html('Click Me')
				.padding('10px 30px 10px 30px')
				.font('400 22px bpmono, hack')
				.click(()=> {
					onClick();
				});
```

## <a class='titleLinks' id='elemsyntax-func5'>`<tag=elem=num/>`</a>
This example is the exact same as above, except that, since the (`num`) argument is now present, we obviously intend to create more than one element. **`num`** represents how many.

#### Example

```javascript
//5 <div>'s are created, converted to elementsJS elements, pushed to an
//array, and returned.
<button='.fooButton'=2/>
					.forEach((element, i, a)=> {
						element
							.html('Click Me')
							.padding('10px 30px 10px 30px')
							.font('400 22px bpmono, hack')
							.top('100px')
							.left('110px')
							.click(()=> {
								onClick1();
							})
							.only(2, ()=> {
								element
									.left('200px')
									.click(()=> {
										onClick2();
									});
							}, a);

					});
```

## <a class='titleLinks' id='elemsyntax-func6'>`<tag/>`, `<tag=num/>`</a>
Typically, the only reason to use the (`tag`) argument alone is to query the DOM for existing elements. However, if this syntax is used this way and the given *tag name* doesn't exist in the DOM, the function will create it, give id of **('tag-name' + 0)** and append it to the body. The second example above would create **num** # of elements, of tag name: **tag**, with `id`'s of **('tag-name' + 0)**, incrementing upward and append them to the body. These two examples are not common, but are possible uses.

#### Examples

```javascript
//A button with id of 'button0' is created, converted to an
//elementsJS element and returned.

<button/>
		.html('Click Me')
		.padding('10px 30px 10px 30px')
		.font('400 22px bpmono, hack')
		.click(()=> {
			onClick();
		});
```
## <a class='titleLinks' id='append-syntax'>What If I Want to Append to an Element other than the `<body>`?</a>

I'm glad you asked! Using elementsJS elements Syntax, you can query the DOM and append an element at the same time. All you have to do is nest the element tags. See below.

## <a class='titleLinks' id='elemsyntax-func7'>`<'#footer'<ol='#list'<li='.item'=3/>/>/>`</a>
Hopefully by now you've gotten the hang of what the above line would do. Either way, I'll go over it now. **First**, the DOM will be queried for `'#footer'`. If a match is found, it will be used to append the next nested element. If not, a `<div>` would be created with the `id` of `'footer'`, appended to the `<body>` of the document, and ***then*** used for its' nested children to be appended. **Next**, although it would be silly for the next element to already exist in the DOM, elementsJS will check anyway. Most likely though, the intent here is to create an ordered-list `<ol>` with an `id` of `list`, and append it to **`<'#footer'>`**. **Lastly**, 3 Elements of the tag `<li>` will be  created, given a class name of `'item'` and appended to **`<ol='#list'>`**. These three elements will be returned in an array of elementsJS elements, so they may be iterated over as below:

#### Example

```javascript
//The 3 <li>'s will be converted to elementsJS elements and returned in an array
<'#footer'<ol='#list'<li='.item'=3/>/>/>
								.forEach((element, i, a)=> {
									element
										 .html('ONE')
										 .only(2, ()=> {
										 	.html('TWO');
										 }, a)
										 .only(3, ()=> {
										 	.html('THREE');
										 });
								});
```

##### Note---- It's best not to get too complex with this syntax, as 1. That is not its' intended use, and 2. [There are much easier ways to add a large amount of HTML to a document](#tempLit-func).

#### Further Examples

##### Ways of appending elementsJS elements:

```javascript
//If this element is being created, it will be appended to the <body>, by default
<'#foo'/>
//Explicitly appending '#foo' to the <main> Element
<main<'#foo'/>/>
//Using a method to append '#foo' to the <main> Element
<'#foo'/>
		.put('main');

```

<a style='display: none;'>
## Changes

1. <elem> syntax
2. .sib(), .node()
3. .ma()
4. .scrolled(),
5. .offsets()
6. .x() method
7. .fromTop() .fromLeft() methods
8. .src(), .href(), .type(), .alt().
9. mouse() .mouse()
10. .children() .child() .first() diffs.
11. new .last() method
12. each() to every().
13. changes to .html() .text().
14. changes to .class()
15. isArray() func.
16. err() to error()
17. this.func() method.
18. hasAncestor()
19. inspect()
20. url()
21. lookBehind()
22. isElement()
23. use and use as..... import syntax.
24. isDOMElement()
25. installs npm packages automagically!
25. isMobile()
26. plugins, scroll-snapper
27. 

</a>
