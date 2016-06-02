## [Click Here for the Full API Documentation.](http://elementsjs.io) 

# <a class='titleLinks' id='installation'>Installation</a> 
There are a couple different ways to use elementsJS. The first is by simply using the function library. The second, is to make use of the new convenient elements syntax. If you would like to use the elements syntax, a simple compilation step is necessary. If you'd like to learn more, [click here](https://www.npmjs.com/package/gulp-elementsjs-interpreter).

The first step, however, is to simply install the library. elementsJS can be installed using either bower or npm package managers and *required* [CommonJS](http://www.commonjs.org/) style, or *import*-ed [es6](http://exploringjs.com/es6/ch_modules.html#_importing-and-exporting-in-detail) style. You may also include the cdn link in your html.

### elementsJS CDN:

```html
<script type='text/javascript' src='https://github.com/ejames9/elementsJS/e531c38/index.js'></script>

```

### npm:
```
$ npm i elementsJS
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

The above is a perfectly fine way to use elementsJS, however, the library was written in the spirit of making code more legible and perhaps, more aesthetically pleasing. That said, I reccomend using either [EcmaScript 2015(es6)'s ***import***](http://exploringjs.com/es6/ch_modules.html#_importing-and-exporting-in-detail) functionality or a custom elementsJS [**`imports()`**](https://www.npmjs.com/package/gulp-elementsjs-interpreter) function to import the individual functions, so that the elements object doesn't need referencing every time a library function is used. See below:

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
var onGo = function() {
	make('#comment', 'input')
			.size('20px', '100px')
			.borderRadius('5px)
			.put('#footer');
}
go(onGo);

```

Both of these options, though require an additional compilation step. To use *es6* functionality, code must be compiled with [babel](https://babeljs.io/), and the elementsJS *imports()* function needs to be compiled using the [elementsJS-interpreter](https://www.npmjs.com/package/gulp-elementsjs-interpreter). If you are using a build system such as [gulp](http://gulpjs.com/) or [grunt](http://gruntjs.com/)(coming soon), however, this step is a breeze ([Click here](#) to learn about using a build system in your development).

If you do decide to use the elementsJS *imports()* function, you can also try out the elements syntax, as the elementsJS-interpreter will parse your code for this syntax as well as the *imports()* function.

# [Click Here for the full API Documentation.](http://elementsjs.io) 