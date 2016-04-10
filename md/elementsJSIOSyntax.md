# <a name='elements-syntax'></a> The elementsJS <span>elements</span> Syntax

The elements Syntax is a convenient way to reference existing DOM elements, or to create them. The syntax will perform the operations of many elementsJS functions all at once, with very little code to write. In many cases, you are able to eliminate the variable creation step when working with DOM elements as well, because of the brevity of the syntax. The syntax is already familiar, as it resembles HTML, but it's not HTML, so it's X-Site Attack safe. 

If you find that you would like to try this syntax out for yourself, you will need to learn how to install/ compile it. Learn about the **elementsJS interpreter** [**here**] (#interpreter-install).

* Note- This syntax is not intended to be used for adding large amounts of HTML to the DOM. That is what the [**```__()```**](#__-func) function is for.

## <a name='elemsyntax-func1'></a> `<elem>`, `<tag=elem>`
The easiest way to think of this particular syntax, is to think of it as an alias for the elementsJS function [**`el()`**] (#el-func). It will query the DOM for the given CSS Selector, the (`elem`) argument, and return a DOM Element object if any matches exist. If there is no match, and the (`tag`) argument is blank, the function will **create** a `<div>` with the `id` or `class` given in the first argument, and append it to the `<body>` of the document. If you are using the function to create an element, you may use the optional second argument (`tag=null`) to assign a tag. If there are multiple matches, an array of DOM Element objects will be returned. **If there is only 1 match an array will not be returned, regardless of the CSS Selector used.**

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
In the above example, a reference to the element with an **`id`** of **`'foo'`** is achieved without the need for a variable. Simply place a CSS Selector query string between an opening bracket and a closing bracket (with no **`'/ '`** ), and if a matching element exists in the DOM, your good. If the element doesn't exist in the DOM, it will create one. **It will return a DOM Element, not an elementsJS element.** If you'd like to use an elementsJS element in place of a DOM Element variable, you must use this function/syntax. If you'd like to use the method chaining functionality of elementsJS, you must use the below syntax.

## The next few functions/examples are all different usages of the same syntax, and not necessarily separate functions.

## <a name='elemsyntax-func2'></a> `<elem/>`
Just as the above function is an alias for the **`el()`** function, this syntax a kind of alias for the [**`dom()`**] (#dom-func) **and** [**`make()`**] (#make-func) functions. Notice that a **`/`** is added to this syntax. This slash is necessary to distinguish it from the previous function. This is the simplest way to use the syntax, with simply (**`elem`**) as its' only argument. Just like above, this argument takes a CSS Selector string. Used this way, the function will search the DOM for a match to the given CSS Selector. If a match is found, it will use it to create an [**elementsJS element object**] (#elem-obj). If multiple matches are found, It will use them to create/return an array of elementsJS element objects. If no matches are found, the function will create a `<div>` element, give it the `id` or `class` given in the (**`elem`**) argument and append it to the `<body>` of the document. You will learn how to use the syntax to assign tag names and choose where to append an element below.
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
* Note- The second example shows how easy it is to deal with an array of elements.

## <a name='elemsyntax-func3'></a> `<elem=num/>`
As you can see above, arguments in this syntax are separated by **`=`**'s and not **comma's**. The first argument (**`elem`**), is the same as used above. The (**`num`**) argument is only ever used to determine how many elements to create, and, since we have yet to specify a **tag name**, The above function would create a # of `<div>`'s (defaults to `<div`'s) specified by the (**`num`**) argument,
and give them the `class` name specified by the (**`elem`**) argument and append them to the `<body>`, since no other destination has been specified. 

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

## <a name='elemsyntax-func4'></a> `<tag=elem/>`
This example introduces the (**`tag`**) argument. It goes in front of the (**`elem`**) argument, which still takes an `id` or `class` CSS Selector. Being that there is no need to specify the **tag name** when querying the DOM, the intent with this syntax is to create an element (only 1 since the argument (**`num`**) is not present) of the tag specified by the argument (**`tag`**) and give it the `id` or `class` specifed by **elem**. See below.

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

## <a name='elemsyntax-func5'></a> `<tag=elem=num/>`
This example is the exact same as above, except that, since the (**`num`**) argument is now present, we obviously intend to create more than one element. **`num`** represents how many.

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

## <a name='elemsyntax-func6'></a> `<tag/>`, `<tag=num/>`
Typically, the only reason to use the (**`tag`**) argument alone is to query the DOM for existing elements. However, if this syntax is used this way and the given **tag name** doesn't exist in the DOM, the function will create it, give id of **('tag-name' + 0)** and append it to the body. The second example above would create **num** # of elements, of tag name: **tag**, with `id`'s of **('tag-name' + 0)**, incrementing upward and append them to the body. These two examples are not common, but are possible uses.

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
## <a name='append-syntax'></a> What If I Want to Append to an Element other than the `<body>`?

I'm glad you asked! Using elementsJS elements Syntax, you can query the DOM and append an element at the same time. All you have to do is nest the element tags. See below.

## <a name='elemsyntax-func7'></a> `<'#footer'<ol='#list'<li='.item'=3/>/>/>`
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

##### It's best not to get too complex with this syntax, as 1. That is not its' intended use, and 2. [There are much easier ways to add a large amount of HTML to a document] (#tempLit-func).

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
<!--<a href='#elements-syntax'>hello</a>-->
<style>

p {

}



h1 {
	color: white;
	background-color: purple;
	padding: 10px 0px 10px 20px;
	margin-left: 0px;
}

h1 {
 padding-top: 60px;
 padding-bottom: 40px;
}


span {
	color: yellow;
}

code {
 color: purple;
 
}

</style> 