# <a name='elements-syntax'></a> The elementsJS elements Syntax

The elements Syntax is a convenient way to reference existing DOM elements, or to create them. The syntax will perform the operations of many elementsJS functions all at once, with very little code to write. In many cases, you are able to eliminate the variable creation step when working with DOM elements as well, because of the brevity of the syntax. The syntax is already familiar, as it resembles HTML, but it's not HTML, so it's X-Site Attack safe. 

## <a name='elemsyntax-func1'></a> <elem, tag




See below for a simple example.

```javascript
on('click', <'#foo'>, ()=> {
	onClick();
});
```
In the above example, a reference to the element with an **id** of **'foo'** is achieved without the need for a variable. Simply place a CSS Selector query string between an opening bracket and a closing bracket (with no **'/ '** ), and if a matching element exists in the DOM, your good. If the element doesn't exist in the DOM, it will  This syntax essentially takes the place of the [**el()**] (#el-func) elementsJS function. It will return a DOM Element, not an elementsJS element. If you'd like to use an elementsJS element in place of a DOM Element variable, you must use this function/syntax. If you'd like to 