/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _elementsJS = __webpack_require__(1);

	///-------Begin Module requires---------///
	var _$ = __webpack_require__(1)._$;
	/*
	elementsJSIO.js
	JavaScript file for the elementsJS project site.

	https://rawgit.com/ejames9/elementsJS/gh-pages/html/docsMenu.html
	https://cdn.rawgit.com/ejames9/elementsJS/5f9f194/html/docsMenu.html
	*/

	var dom = __webpack_require__(1).dom;
	var make = __webpack_require__(1).make;
	///|------------------------------------|//

	var marked = __webpack_require__(9);

	///End Module requires///

	var commit = '5f9f194';
	var rawGit = 'https://rawgit.com/ejames9/elementsJS/gh-pages/';
	var rawGitCDN = 'https://cdn.rawgit.com/ejames9/elementsJS/' + commit + '/';

	var docsMenu = 'html/docsMenu.html';
	var markDownUrl = 'md/elementsJSIODocs.md';
	var markDown;

	function _(bit1, bit2) {
	  return bit1 + bit2;
	}

	function insertDocs() {
	  // var content = document.getElementById('content'),
	  //     columns = document.getElementById('mainPageColumns');
	  //
	  // var url = _(rawGit, docsMenu);
	  // var xhr = new XMLHttpRequest();
	  //     xhr.onloadend = function() {
	  //       if (xhr.status === 200) {
	  //         var r = this.responseText;
	  //
	  //         content.removeChild(columns);
	  //         content.innerHTML = r;
	  //
	  //         var docsMain = document.getElementById('docsMain');
	  //             docsMain.innerHTML = marked(markDown);

	  (0, _elementsJS.ajax)(_(rawGit, docsMenu), null, function (r) {
	    (0, _elementsJS.log)(window, 'blue');

	    var elem0 = _$('#content') ? dom('#content') : make('#content').put("body");
	    elem0.x('#mainPageColumns').html(r);

	    var elem1 = _$('#docsMain') ? dom('#docsMain') : make('#docsMain').put("body");
	    elem1.html(marked(markDown));
	  });

	  // var sideNav = document.getElementById('sideNav');
	  // console.log(sideNav.offsetTop);
	  // console.log(document.body.scrollTop);
	  //
	  // window.onscroll = function(e) {
	  //     if ( sideNav.offsetTop < document.documentElement.scrollTop + 70 || sideNav.offsetTop < document.body.scrollTop + 70) {
	  //         sideNav.setAttribute("class","sticky");
	  //         console.log(e);
	  //     }
	  //     else {
	  //         sideNav.setAttribute("class","");
	  //         console.log('not sticky');
	  //     }
	  //         // }
	  //       }
	  //     }
	  // xhr.open('GET', url);
	  // xhr.send();
	}

	var elem2 = _$("body") ? dom("body") : make(".body1", "body").put("body");
	elem2.color('red');

	function getMarkDown() {
	  var url = _(rawGit, markDownUrl);
	  var xhr = new XMLHttpRequest();
	  xhr.onloadend = function () {
	    if (xhr.status === 200) {
	      var r = this.responseText;
	      console.log(r);
	      markDown = r;
	    }
	  };
	  xhr.open('GET', url);
	  xhr.send();
	}

	function toggleNPMBar() {
	  var npmBar = document.getElementById('npm-bar');

	  if (npmBar.style.display === 'none') {
	    npmBar.style.display = 'block';
	  } else {
	    npmBar.style.display = 'none';
	  }
	}

	function init() {
	  //initialize ace code editor
	  var editor1 = ace.edit("editor1");
	  editor1.setTheme("ace/theme/elementsJSIO");
	  editor1.renderer.setShowGutter(false);
	  editor1.getSession().setMode("ace/mode/javascript");

	  var npmBar = document.getElementById('npm-bar');
	  npmBar.style.display = 'none';

	  var html = document.getElementsByTagName('html')[0];
	  html.addEventListener('click', function (e) {
	    switch (e.target) {
	      case document.getElementById('install-info'):
	        toggleNPMBar();
	        break;
	      case document.getElementById('api-butn'):
	        console.log("I'm in.");
	        insertDocs();
	        break;
	      default:
	        if (npmBar.style.display !== 'none') {
	          npmBar.style.display = 'none';
	        }
	        console.log(e);
	    }
	  });

	  getMarkDown();
	}

	document.addEventListener('DOMContentLoaded', init());

	// getMarkDown();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _Element=__webpack_require__(2),_Element2=_interopRequireDefault(_Element),_httpRequests=__webpack_require__(8),requests=_interopRequireWildcard(_httpRequests),_events=__webpack_require__(5),events=_interopRequireWildcard(_events),_logger=__webpack_require__(3),consol=_interopRequireWildcard(_logger),_utilities=__webpack_require__(6),utils=_interopRequireWildcard(_utilities),_DOM=__webpack_require__(7),DOM=_interopRequireWildcard(_DOM),element=function(e){return new _Element2["default"]},proto=function(e,n){return utils.proto(e,n)},functions=function(e,n){var t=n||this;Array.isArray(e)?(log(n,"red"),e.forEach(function(e){var n=new Function("window."+e+" = this."+e+";");n.call(t)},t)):function(){var n=new Function("window."+e+" = this."+e+";");n.call(t)}.apply(t)},$=function(e){var n=null!==utils.queryDOM(e);return n},dom=function(e){return e=utils.queryDOM(e),new _Element2["default"](e)},make=function(e,n){return DOM.make(e,n)},el=function(e){return DOM.el(e)},all=function(e){return DOM.all(e)},put=function(e,n){return DOM.put(e,n)},x=function(e){return DOM.kill(e)},log=function(e,n,t){return consol.log(e,n,t)},err=function(e,n){return consol.err(e,n)},info=function(e,n){return consol.info(e,n)},warn=function(e,n){return consol.warn(e,n)},shifter=function(e,n){return utils.shifter(e,n)},sleep=function(e){return utils.sleep(e)},xhr=function(e,n,t){return requests.xhr(e,n,t)},ajax=function(e,n,t,r){return requests.ajax(e,n,t,r)},go=function(e){return document.addEventListener?events.go(e):events.goIE(e)},on=function(e,n,t){return document.addEventListener?events.on(e,n,t):events.onIE(e,n,t)},off=function(e,n,t){return document.addEventListener?events.off(e,n,t):events.offIE(e,n,t)},once=function(e,n,t){return document.addEventListener?events.once(e,n,t):events.onceIE(e,n,t)},spark=function(e,n){return n=utils.queryDOM(n),document.addEventListener?events.spark(e,n):events.sparkIE(e,n)},blur=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.blur(e,n):events.blurIE(e,n)},click=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.click(e,n):events.clickIE(e,n)},dblClick=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.dblClick(e,n):events.dblClickIE(e,n)},error=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.error(e,n):events.errorIE(e,n)},focus=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.focus(e,n):events.focusIE(e,n)},focusIn=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.focusIn(e,n):events.focusInIE(e,n)},focusOut=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.focusOut(e,n):events.focusOut(e,n)},keyUp=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.keyUp(e,n):events.keyUpIE(e,n)},keyDown=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.keyDown(e,n):events.keyDownIE(e,n)},load=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.load(e,n):events.loadIE(e,n)},unLoad=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.unLoad(e,n):events.unLoadIE(e,n)},mouse=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.mouse(e,n):events.mouseIE(e,n)},resize=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.resize(e,n):events.resizeIE(e,n)},scroll=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.scroll(e,n):events.scrollIE(e,n)},select=function(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return e=utils.queryDOM(e),document.addEventListener?events.select(e,n):events.selectIE(e,n)};module.exports={$:$,x:x,go:go,shifter:shifter,make:make,dom:dom,proto:proto,functions:functions,all:all,put:put,on:on,off:off,once:once,el:el,log:log,xhr:xhr,err:err,info:info,warn:warn,ajax:ajax,spark:spark,blur:blur,click:click,dblClick:dblClick,error:error,focus:focus,focusIn:focusIn,focusOut:focusOut,keyUp:keyUp,keyDown:keyDown,load:load,unLoad:unLoad,mouse:mouse,resize:resize,scroll:scroll,select:select};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(t){if(t&&t.__esModule)return t;var i={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(i[e]=t[e]);return i["default"]=t,i}function Element(t){return this.el=t,this instanceof Element?(this.backgroundColor=function(i){return void 0!==i?(t.style.backgroundColor=i,this):i=t.style.backgroundColor},this.border=function(i){return void 0!==i?(t.style.border=i,this):i=t.style.border},this.background=function(i){return void 0!==i?(t.style.background=i,this):i=t.style.background},this.backgroundColor=function(i){return void 0!==i?(t.style.backgroundColor=i,this):i=t.style.backgroundColor},this.backgroundImage=function(i){return void 0!==i?(t.style.backgroundImage=i,this):i=t.style.backgroundImage},this.backgroundSize=function(i){return void 0!==i?(t.style.backgroundSize=i,this):i=t.style.backgroundSize},this.backgroundPosition=function(i){return void 0!==i?(t.style.backgroundPosition=i,this):i=t.style.backgroundPosition},this.borderColor=function(i){return void 0!==i?(t.style.borderColor=i,this):i=t.style.borderColor},this.borderRadius=function(i){return void 0!==i?(t.style.borderRadius=i,this):i=t.style.borderRadius},this.borderWidth=function(i){return void 0!==i?(t.style.borderWidth=i,this):i=t.style.borderWidth},this.borderTop=function(i){return void 0!==i?(t.style.borderTop=i,this):i=t.style.borderTop},this.borderBottom=function(i){return void 0!==i?(t.style.borderBottom=i,this):i=t.style.borderBottom},this.borderRight=function(i){return void 0!==i?(t.style.borderRight=i,this):i=t.style.borderRight},this.borderLeft=function(i){return void 0!==i?(t.style.borderLeft=i,this):i=t.style.borderLeft},this.bottom=function(i){return void 0!==i?(t.style.bottom=i,this):i=t.style.bottom},this.boxShadow=function(i){return void 0!==i?(t.style.boxShadow=i,this):i=t.style.boxShadow},this.boxSizing=function(i){return void 0!==i?(t.style.boxSizing=i,this):i=t.style.boxSizing},this.clear=function(i){return void 0!==i?(t.style.clear=i,this):i=t.style.clear},this.color=function(i){return void 0!==i?(t.style.color=i,this):i=t.style.color},this.columns=function(i){return void 0!==i?(t.style.columns=i,this):i=t.style.columns},this.content=function(i){return void 0!==i?(t.style.content=i,this):i=t.style.content},this.cursor=function(i){return void 0!==i?(t.style.cursor=i,this):i=t.style.cursor},this.direction=function(i){return void 0!==i?(t.style.direction=i,this):i=t.style.direction},this.display=function(i){return void 0!==i?(t.style.display=i,this):i=t.style.display},this.cssFloat=function(i){return void 0!==i?(t.style.cssFloat=i,this):i=t.style.cssFloat},this.font=function(i){return void 0!==i?(t.style.font=i,this):i=t.style.font},this.fontFamily=function(i){return void 0!==i?(t.style.fontFamily=i,this):i=t.style.fontFamily},this.fontStyle=function(i){return void 0!==i?(t.style.fontStyle=i,this):i=t.style.fontStyle},this.fontSize=function(i){return void 0!==i?(t.style.fontSize=i,this):i=t.style.fontSize},this.fontWeight=function(i){return void 0!==i?(t.style.fontWeight=i,this):i=t.style.fontWeight},this.height=function(i){return void 0!==i?(t.style.height=i,this):i=t.style.height},this.lineHeight=function(i){return void 0!==i?(t.style.lineHeight=i,this):i=t.style.lineHeight},this.icon=function(i){return void 0!==i?(t.style.icon=i,this):i=t.style.icon},this.left=function(i){return void 0!==i?(t.style.left=i,this):i=t.style.left},this.listStyle=function(i){return void 0!==i?(t.style.listStyle=i,this):i=t.style.listStyle},this.margin=function(i){return void 0!==i?(t.style.margin=i,this):i=t.style.margin},this.marginRight=function(i){return void 0!==i?(t.style.marginRight=i,this):i=t.style.marginRight},this.marginLeft=function(i){return void 0!==i?(t.style.marginLeft=i,this):i=t.style.marginLeft},this.marginTop=function(i){return void 0!==i?(t.style.marginTop=i,this):i=t.style.marginTop},this.marginBottom=function(i){return void 0!==i?(t.style.marginBottom=i,this):i=t.style.marginBottom},this.maxHeight=function(i){return void 0!==i?(t.style.maxHeight=i,this):i=t.style.maxHeight},this.maxWidth=function(i){return void 0!==i?(t.style.maxWidth=i,this):i=t.style.maxWidth},this.minWidth=function(i){return void 0!==i?(t.style.minWidth=i,this):i=t.style.minWidth},this.minHeight=function(i){return void 0!==i?(t.style.minHeight=i,this):i=t.style.minHeight},this.opacity=function(i){return void 0!==i?(t.style.opacity=i,this):i=t.style.opacity},this.outline=function(i){return void 0!==i?(t.style.outline=i,this):i=t.style.outline},this.overflow=function(i){return void 0!==i?(t.style.overflow=i,this):i=t.style.overflow},this.overflowX=function(i){return void 0!==i?(t.style.overflowX=i,this):i=t.style.overflowX},this.overflowY=function(i){return void 0!==i?(t.style.overflowY=i,this):i=t.style.overflowY},this.padding=function(i){return void 0!==i?(t.style.padding=i,this):i=t.style.padding},this.paddingRight=function(i){return void 0!==i?(t.style.paddingRight=i,this):i=t.style.paddingRight},this.paddingLeft=function(i){return void 0!==i?(t.style.paddingLeft=i,this):i=t.style.paddingLeft},this.paddingTop=function(i){return void 0!==i?(t.style.paddingTop=i,this):i=t.style.paddingTop},this.paddingBottom=function(i){return void 0!==i?(t.style.paddingBottom=i,this):i=t.style.paddingBottom},this.position=function(i){return void 0!==i?(t.style.position=i,this):i=t.style.position},this.right=function(i){return void 0!==i?(t.style.right=i,this):i=t.style.right},this.top=function(i){return void 0!==i?(t.style.top=i,this):i=t.style.top},this.textAlign=function(i){return void 0!==i?(t.style.textAlign=i,this):i=t.style.textAlign},this.textDecoration=function(i){return void 0!==i?(t.style.textDecoration=i,this):i=t.style.textDecoration},this.textShadow=function(i){return void 0!==i?(t.style.textShadow=i,this):i=t.style.textShadow},this.verticalAlign=function(i){return void 0!==i?(t.style.verticalAlign=i,this):i=t.style.verticalAlign},this.visibility=function(i){return void 0!==i?(t.style.visibility=i,this):i=t.style.visibility},this.whiteSpace=function(i){return void 0!==i?(t.style.whiteSpace=i,this):i=t.style.whiteSpace},this.width=function(i){return void 0!==i?(t.style.width=i,this):i=t.style.width},this.wordSpacing=function(i){return void 0!==i?(t.style.wordSpacing=i,this):i=t.style.wordSpacing},this.zIndex=function(i){return void 0!==i?(t.style.zIndex=i,this):i=t.style.zIndex},this.alignContent=function(i){return browser.safari&&browser.version>=7?void 0!==i?(t.style.WebkitAlignContent=i,this):i=t.style.WebkitAlignContent:void 0!==i?(t.style.alignContent=i,this):i=t.style.alignContent},this.transformOrigin=function(i){return browser.webkit?void 0!==i?(t.style.WebkitTransformOrigin=i,this):i=t.style.WebkitTransformOrigin:void 0!==i?(t.style.transformOrigin=i,this):i=t.style.transformOrigin},this.transition=function(i){return browser.safari?void 0!==i?(t.style.WebkitTransition=i,this):i=t.style.WebkitTransition:void 0!==i?(t.style.transition=i,this):i=t.style.transition},this.transitionDuration=function(i){return browser.safari?void 0!==i?(t.style.WebkitTransitionDuration=i,this):i=t.style.WebkitTransitionDuration:void 0!==i?(t.style.transitionDuration=i,this):i=t.style.transitionDuration},this.animation=function(i){return browser.webkit?void 0!==i?(t.style.WebkitAnimation=i,this):i=t.style.WebkitAnimation:void 0!==i?(t.style.animation=i,this):i=t.style.animation},this.filter=function(i){return browser.webkit?void 0!==i?(t.style.WebkitFilter=i,this):i=t.style.WebkitFilter:void 0!==i?(t.style.filter=i,this):i=t.style.filter},this.flex=function(i){return browser.safari?void 0!==i?(t.style.WebkitFlex=i,this):i=t.style.WebkitFlex:void 0!==i?(t.style.flex=i,this):i=t.style.flex},this.perspective=function(i){return browser.webkit?void 0!==i?(t.style.WebkitPerspective=i,this):i=t.style.WebkitPerspective:void 0!==i?(t.style.perspective=i,this):i=t.style.perspective},this.perspectiveOrigin=function(i){return browser.webkit?void 0!==i?(t.style.WebkitPerspectiveOrigin=i,this):i=t.style.WebkitPerspectiveOrigin:void 0!==i?(t.style.perspectiveOrigin=i,this):i=t.style.perspectiveOrigin},this.transitionDelay=function(i){return browser.safari?void 0!==i?(t.style.WebkitTransitionDelay=i,this):i=t.style.WebkitTransitionDelay:void 0!==i?(t.style.transitionDelay=i,this):i=t.style.transitionDelay},this.core=function(t){return t(this.el.style),this},this.add=function(t){return this.el.appendChild(t),this},this.children=function(t){if("all"===t){this.el.childNodes}else{this.el.children}return count},this.first=function(t){var i="all"===t?this.el.firstChild:this.el.firstElementChild;return i},this.id=function(t){return void 0!==t?(this.el.id=t,this):t=this.el.id},this["class"]=function(t){return void 0!==t?(this.el.className=t,this):t=this.el.className},this.xClass=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return null!==t&&t(),this.el.className="",this},this.html=function(t){return void 0!==t?(this.el.innerHTML=t,this):t=this.el.innerHTML},this.text=function(t){return void 0!==t?(this.el.textContent=t,this):t=this.el.textContent},this.lang=function(t){return void 0!==t?(this.el.lang=t,this):t=this.el.lang},this.clone=function(){var t=this.el.cloneNode();return t},this.sib=function(t,i){var e=void 0;return"next"===t?void 0===i?e=this.el.nextElementSibling:"all"===i?e=this.el.nextSibling:(0,_logger.err)("Invalid argument."):"prev"===t?void 0===i?e=this.el.previousElementSibling:"all"===i?e=this.el.previousSibling:(0,_logger.err)("Invalid argument."):(0,_logger.err)("Invalid argument."),e},this.value=function(t){return void 0!==t?(this.el.nodeValue=t,this):t=this.el.nodeValue},this.normalize=function(){return this.el.normalize(),this},this.toString=function(){var t=this.el.toString();return t},this.tag=function(){var t=this.el.tagName();return t},this.offset=function(t){var i={};return t?"all"===t?(i.top=this.el.offsetTop,i.left=this.el.offsetLeft,i.height=this.el.offsetHeight,i.width=this.el.offsetWidth,i.parent=this.el.offsetParent):(0,_logger.err)("Invalid argument."):(i.top=this.el.offsetTop,i.left=this.el.offsetLeft),i},this.title=function(t){return void 0!==t?(this.el.title=t,this):t=this.el.title},this.attrib=function(t,i){var e=void 0!==i&&"remove"!==i?void this.el.setAttribute(t,i):void 0!==t&&"remove"!==i?this.el.getAttribute(t):void this.el.removeAttribute(t);return void 0!==e?e:this},this.put=function(t){return DOM.put(this.el,t),this},this.ma=function(){return this.el.parentNode},this.fore=function(t){var i=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return null===i?t.parentNode.insertBefore(this.el,t):this.el.parentNode.insertBefore(t,this.el),this},this.aft=function(t){var i=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return null===i?t.parentNode.insertBefore(this.el,t.nextElementSibling):this.el.parentNode.insertBefore(t,this.el.nextElementSibling),this},this.on=function(t,i){return document.addEventListener?events.on(t,this.el,i):events.onIE(t,this.el,i),this},this.off=function(t,i){return document.addEventListener?events.off(t,this.el,i):events.offIE(t,this.el,i),this},this.once=function(t,i){return document.addEventListener?events.once(t,this.el,i):events.onceIE(t,this.el,i),this},this.toggle=function(t,i){return window.toggleFlag=!0,toggleFlag?(t(),toggleFlag=!1):(i(),toggleFlag=!0),this},this.size=function(t,i){return this.el.style.height=t,this.el.style.width=i,this},this.show=function(){var t=arguments.length<=0||void 0===arguments[0]?"block":arguments[0];return this.el.style.display=t,this},this.hide=function(){return this.el.style.display="none",this},this.blur=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.blur(this.el,t):events.blurIE(this.el,t),this},this.click=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.click(this.el,t):events.clickIE(this.el,t),this},this.dblClick=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.dblClick(this.el,t):events.dblClickIE(this.el,t),this},this.error=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.error(this.el,t):events.errorIE(this.el,t),this},this.focus=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.focus(this.el,t):events.focusIE(this.el,t),this},this.focusIn=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.focusIn(this.el,t):events.focusInIE(this.el,t),this},this.focusOut=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.focusOut(this.el,t):events.focusOut(this.el,t),this},this.keyUp=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.keyUp(this.el,t):events.keyUpIE(this.el,t),this},this.keyDown=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.keyDown(this.el,t):events.keyDownIE(this.el,t),this},this.load=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.load(this.el,t):events.loadIE(this.el,t),this},this.unLoad=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.unLoad(this.el,t):events.unLoadIE(this.el,t),this},this.mouse=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.mouse(this.el,t):events.mouseIE(this.el,t),this},this.resize=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.resize(this.el,t):events.resizeIE(this.el,t),this},this.scroll=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.scroll(this.el,t):events.scrollIE(this.el,t),this},this.select=function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];return this.el.addEventListener?events.select(this.el,t):events.selectIE(this.el,t),this},void(this.only=function(t,i,e){return"undefined"==typeof eachCount?window.eachCount=1:eachCount++,t===eachCount?(i(),(0,_logger.log)(eachCount,["red","bold"])):(0,_logger.log)(eachCount,["blue","bold"]),eachCount===e.length&&(eachCount=""),this})):new Element}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=Element;var _logger=__webpack_require__(3),_index=__webpack_require__(1),elements=_interopRequireWildcard(_index),_events=__webpack_require__(5),events=_interopRequireWildcard(_events),_DOM=__webpack_require__(7),DOM=_interopRequireWildcard(_DOM);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var colors=__webpack_require__(4),log=function(e,r,o){var n=Array.isArray(r)?r[0]:r,t=Array.isArray(r)?r[1]:null,a=o||!1,l=new Date,g=l.getHours(),c=l.getMinutes(),s=l.getSeconds();9>=s&&(s="0"+String(s)),9>=c&&(c="0"+String(c));var u=g>=12?"pm":"am",i=g>=13?g-12:g;g=0===i?i+12:i,l=g+":"+c+":"+s+u;var d=a?l:"";if("undefined"==typeof document)return console.log(colors(e,{fg:n,style:t})+"   ".repeat(10)+d);var f=n,v=t,p="background: "+v+"; color: "+f;return console.log("%c"+e+"%s",p,"   ".repeat(10)+d)},err=function(e,r){var o="red",n="bold",t=r||!1,a=new Date,l=a.getHours(),g=a.getMinutes(),c=a.getSeconds();9>=c&&(c="0"+String(c)),9>=g&&(g="0"+String(g));var s=l>=12?"pm":"am",u=l>=13?l-12:l;l=0===u?u+12:u,a=l+":"+g+":"+c+s;var i=t?a:"";if("undefined"==typeof document)return console.log(colors(e,{fg:o,style:n})+"   ".repeat(10)+i);var d=o,f="",v="background: "+f+"; color: "+d;return console.log("%c"+e+"%s",v,"   ".repeat(10)+i)},info=function(e,r){var o="#008cff",n="bold",t=r||!1,a=new Date,l=a.getHours(),g=a.getMinutes(),c=a.getSeconds();9>=c&&(c="0"+String(c)),9>=g&&(g="0"+String(g));var s=l>=12?"pm":"am",u=l>=13?l-12:l;l=0===u?u+12:u,a=l+":"+g+":"+c+s;var i=t?a:"";if("undefined"==typeof document)return o="blueBright",console.log(colors(e,{fg:o,style:n})+"   ".repeat(10)+i);var d=o,f="",v="background: "+f+"; color: "+d;return console.log("%c"+e+"%s",v,"   ".repeat(10)+i)},warn=function(e,r){var o="orange",n="bold",t=r||!1,a=new Date,l=a.getHours(),g=a.getMinutes(),c=a.getSeconds();9>=c&&(c="0"+String(c)),9>=g&&(g="0"+String(g));var s=l>=12?"pm":"am",u=l>=13?l-12:l;l=0===u?u+12:u,a=l+":"+g+":"+c+s;var i=t?a:"";if("undefined"==typeof document)return o="yellow",o="blueBright",console.log(colors(e,{fg:o,style:n})+"   ".repeat(10)+i);var d=o,f="",v="background: "+f+"; color: "+d;return console.log("%c"+e+"%s",v,"   ".repeat(10)+i)};module.exports={log:log,err:err,info:info,warn:warn};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var names = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
	var namesBright = names.map(function(name) { return name + 'Bright'; });
	var namesStyle = ['bold', 'dim', 'underline', 'blink', null, 'invert', 'hidden'];

	var RESET = '\x1b[0m';

	var Colors = {
		fg: {},
		bg: {},
		style: {},
	};

	// generate foreground normal colors
	for (var i in names) {
		Colors.fg[names[i]] = +i + 30;
	}
	// generate foreground bright colors
	for (var i in namesBright) {
		Colors.fg[namesBright[i]] = +i + 90;
	}

	// generate background normal colors
	for (var i in names) {
		Colors.bg[names[i]] = +i + 40;
	}
	// generate background bright colors
	for (var i in namesBright) {
		Colors.bg[namesBright[i]] = +i + 100;
	}

	// generate style attributes
	for (var i in namesStyle) {
		if (!namesStyle[i])
			continue;
		Colors.style[namesStyle[i]] = +i + 1;
	}

	function formatColor(color) {
		color = color || {};
		var fg = Colors.fg[color.fg] || 39;
		var bg = Colors.bg[color.bg] || 49;
		var style = Colors.style[color.style] || 0;

	//	var code = '\x1b';

		return '\x1b[' + style + ';' + fg + ';' + bg + 'm';
	}

	function colorize(str, colors) {
		if (!str || typeof colors !== 'object')
			return str;

		return formatColor(colors) + str + RESET;
	}
	module.exports = colorize;
	module.exports.colors = Colors;
	module.exports.names = names.concat(namesBright);
	module.exports.styles = namesStyle.filter(function (name) { return !!name; });


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n["default"]=e,n}function spark(e,n){var t=new MouseEvent(e,{bubbles:!0,cancelable:!0,view:window});n.dispatchEvent(t)}function sparkIE(e,n){var t=document.createEventObject();l=document.querySelector(n),e.eventType="on"+e,n.fireEvent("on"+e,t)}function blur(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("blur",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("blur",n)}function blurIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onblur",e.fireEvent("onblur",t)}else e.attachEvent("onblur",n)}function click(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("click",n)}function clickIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onclick",e.fireEvent("onclick",t)}else e.attachEvent("onclick",n)}function dblClick(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("dblclick",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("dblclick",n)}function dblClickIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="ondblclick",e.fireEvent("ondblclick",t)}else e.attachEvent("ondblclick",n)}function error(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("error",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("error",n)}function errorIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onerror",e.fireEvent("onerror",t)}else e.attachEvent("onerror",n)}function focus(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("focus",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("focus",n)}function focusIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onfocus",e.fireEvent("onfocus",t)}else e.attachEvent("onfocus",n)}function focusIn(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("focusin",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("focusin",n)}function focusInIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onfocusin",e.fireEvent("onfocusin",t)}else e.attachEvent("onfocusin",n)}function focusOut(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("focusout",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("focusout",n)}function focusOutIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onfocusout",e.fireEvent("onfocusout",t)}else e.attachEvent("onfocusout",n)}function keyUp(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("keyup",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("keyup",n)}function keyUpIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onkeyup",e.fireEvent("onkeyup",t)}else e.attachEvent("onkeyup",n)}function keyDown(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("keydown",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("keydown",n)}function keyDownIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onkeydown",e.fireEvent("onkeydown",t)}else e.attachEvent("onkeydown",n)}function load(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("load",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("load",n)}function loadIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onload",e.fireEvent("onload",t)}else e.attachEvent("onload",n)}function unLoad(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("unload",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("unload",n)}function unLoadIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onunload",e.fireEvent("onunload",t)}else e.attachEvent("onunload",n)}function mouse(e,n){var t=arguments.length<=2||void 0===arguments[2]?null:arguments[2];if(null===t){var l=new MouseEvent("mouse"+e,{bubbles:!0,cancelable:!0,view:window});n.dispatchEvent(l)}else n.addEventListener("mouse"+e,t)}function mouseIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onmouse"+sufx,e.fireEvent("onmouse"+sufx,t)}else e.attachEvent("onmouse"+sufx,n)}function reSize(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("resize",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("resize",n)}function reSizeIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onresize",e.fireEvent("onresize",t)}else e.attachEvent("onresize",n)}function scroll(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("scroll",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("scroll",n)}function scrollIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onscroll",e.fireEvent("onscroll",t)}else e.attachEvent("onscroll",n)}function select(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=new MouseEvent("select",{bubbles:!0,cancelable:!0,view:window});e.dispatchEvent(t)}else e.addEventListener("select",n)}function selectIE(e){var n=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if(null===n){var t=document.createEventObject();t.eventType="onselect",e.fireEvent("onselect",t)}else e.attachEvent("onselect",n)}var _logger=__webpack_require__(3),_utilities=__webpack_require__(6),utils=_interopRequireWildcard(_utilities),go=function(e){return document.addEventListener("DOMContentLoaded",e())},goIE=function(e){return document.attachEvent("onDOMContentLoaded",e())},on=function(e,n,t){return"string"==typeof n?"#"===n[0]?(n=n.slice(1),document.getElementById(n).addEventListener(e,t)):"."===n[0]?(n=n.slice(1),document.getElementsByClassName(n)[0].addEventListener(e,t)):document.getElementsByTagName(n).addEventListener(e,t):n.addEventListener(e,t)},onIE=function(e,n,t){return"string"==typeof n?"#"===n[0]?(n=n.slice(1),document.getElementById(n).attachEvent("on"+e,t)):"."===n[0]?(n=n.slice(1),document.getElementsByClassName(n)[0].attachEvent("on"+e,t)):document.getElementsByTagName(n).attachEvent("on"+e,t):n.attachEvent("on"+e,t)},off=function(e,n,t){return"string"==typeof n?"#"===n[0]?(n=n.slice(1),document.getElementById(n).removeEventListener(e,t)):"."===n[0]?(n=n.slice(1),document.getElementsByClassName(n)[0].removeEventListener(e,t)):document.getElementsByTagName(n).removeEventListener(e,t):void n.removeEventListener(e,t)},offIE=function(e,n,t){return"string"==typeof n?"#"===n[0]?(n=n.slice(1),document.getElementById(n).detachEvent("on"+e,t)):"."===n[0]?(n=n.slice(1),document.getElementsByClassName(n)[0].detachEvent("on"+e,t)):document.getElementsByTagName(n).detachEvent("on"+e,t):void n.detachEvent("on"+e,t)},once=function(e,n,t){var l=function o(){t(),n.removeEventListener(e,o)};return n=utils.queryDOM(n),(0,_logger.log)(n,"red"),n.addEventListener(e,l)},onceIE=function(e,n,t){var l=function o(){t(),n.detachEvent("on"+e,o)};return n=utils.queryDOM(n),n.attachEvent("on"+e,l)};module.exports={blur:blur,blurIE:blurIE,click:click,clickIE:clickIE,dblClick:dblClick,dblClickIE:dblClickIE,error:error,errorIE:errorIE,focus:focus,focusIE:focusIE,focusIn:focusIn,focusInIE:focusInIE,focusOut:focusOut,focusOutIE:focusOutIE,keyUp:keyUp,keyUpIE:keyUpIE,keyDown:keyDown,keyDownIE:keyDownIE,load:load,loadIE:loadIE,unLoad:unLoad,unLoadIE:unLoadIE,mouse:mouse,mouseIE:mouseIE,reSize:reSize,reSizeIE:reSizeIE,scroll:scroll,scrollIE:scrollIE,select:select,selectIE:selectIE,spark:spark,sparkIE:sparkIE,go:go,goIE:goIE,on:on,onIE:onIE,off:off,offIE:offIE,once:once,onceIE:onceIE};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function shifter(e,t){return window.toggleFlag=!0,function(){toggleFlag?(e(),toggleFlag=!1):(t(),toggleFlag=!0)}}var _logger=__webpack_require__(3),queryDOM=function(e){var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1];return(0,_logger.log)(e,"orange"),"string"==typeof e?null===t?e=document.querySelector(e):"all"===t?e=document.querySelectorAll(e):err("Invalid Argument."):e=e,e},proto=function(e,t){return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e},functions=function(e,t){var r=t||this;Array.isArray(e)?e.forEach(function(e){var t=new Function("window."+e+" = this."+e+";");t.call(r)},r):function(){var t=new Function("window."+e+" = this."+e+";");t.call(r)}.apply(r)},sleep=function(e){for(var t=(new Date).getTime();;)if((new Date).getTime()-t>e)break};module.exports={queryDOM:queryDOM,functions:functions,shifter:shifter,sleep:sleep,proto:proto};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _Element=__webpack_require__(2),_Element2=_interopRequireDefault(_Element),_logger=__webpack_require__(3),_utilities=__webpack_require__(6),utils=_interopRequireWildcard(_utilities),dom=function(e){return e=utils.queryDOM(e),new _Element2["default"](e)},make=function(e,t){var n=t||"div",l=document.createElement(n);return"#"===e[0]?(e=e.slice(1),l.id=e,new _Element2["default"](l)):"."===e[0]?(e=e.slice(1),l.className=e,new _Element2["default"](l)):void 0},el=function(e){return utils.queryDOM(e)},all=function(e){return utils.queryDOM(el,"all")},put=function(e,t){return"string"==typeof e?"#"===e[0]?(e=e.slice(1),"string"==typeof t?"#"===t[0]?(t=t.slice(1),document.getElementById(t).appendChild(document.getElementById(e))):"."===t[0]?(t=t.slice(1),document.getElementsByClassName(t)[0].appendChild(document.getElementById(e))):document.getElementsByTagName(t)[0].appendChild(document.getElementById(e)):t.appendChild(document.getElementById(e))):"."===e[0]?(e=e.slice(1),"string"==typeof t?"#"===t[0]?(t=t.slice(1),document.getElementById(t).appendChild(document.getElementsByClassName(e)[0])):"."===t[0]?(t=t.slice(1),document.getElementsByClassName(t)[0].appendChild(document.getElementsByClassName(e)[0])):document.getElementsByTagName(t)[0].appendChild(document.getElementsByClassName(e)[0]):t.appendChild(document.getElementsByClassName(e)[0])):"string"==typeof t?"#"===t[0]?(t=t.slice(1),document.getElementById(t).appendChild(document.getElementsByTagName(e)[0])):"."===t[0]?(t=t.slice(1),document.getElementsByClassName(t)[0].appendChild(document.getElementsByTagName(e)[0])):document.getElementsByTagName(t)[0].appendChild(document.getElementsByTagName(e)[0]):t.appendChild(document.getElementsByTagName(e)[0]):"string"==typeof t?"#"===t[0]?(t=t.slice(1),document.getElementById(t).appendChild(e)):"."===t[0]?(t=t.slice(1),document.getElementsByClassName(t)[0].appendChild(e)):document.getElementsByTagName(t)[0].appendChild(e):t.appendChild(e)},kill=function(e){return"string"==typeof e?"#"===e[0]?(e=e.slice(1),document.getElementById(e).parentNode.removeChild(document.getElementById(e))):"."===e[0]?(e=e.slice(1),document.getElementsByClassName(e)[0].parentNode.removeChild(document.getElementsByClassName(e)[0])):document.getElementsByTagName(e)[0].parentNode.removeChild(getElementsByTagName(e)[0]):e.parentNode.removeChild(e)},fore=function(e,t){return e.parentNode.insertBefore(t,e)},aft=function(e,t){return e=e.nextElementSibling,e.parentNode.insertBefore(t,e)},show=function(e){Array.isArray(e)?e.forEach(function(e){e.style.display="block"}):e.style.display="block"},hide=function(e){Array.isArray(e)?e.forEach(function(e){e.style.display="none"}):e.style.display="none"},size=function(e,t){return e.style.height=t.height,e.style.width=t.width,e};module.exports={el:el,make:make,dom:dom,all:all,put:put,kill:kill,fore:fore,aft:aft,show:show,hide:hide,size:size};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var _logger=__webpack_require__(3),xhr=function(e,n,t){var r;if(n)if(0===Object.getOwnPropertyNames(n).length)r=n;else{r=new FormData;for(var a in n)r.append(a,n[a])}else r=null;var s,o=t||"get",i=function p(){var p=new XMLHttpRequest;p.onloadend=function(){200===p.status&&(s=this.response)},p.open(o,e,!1),p.send(r)};return i(),s=JSON.parse(s)},ajax=function(e,n,t,r){var a;if(n)if(0===Object.getOwnPropertyNames(n).length)a=n;else{a=new FormData;for(var s in n)a.append(s,n[s])}else a=null;var o=r||"post",i=new XMLHttpRequest;i.onloadend=function(){if(200===i.status){var e=JSON.parse(this.response);t(e)}},i.open(o,e),i.send(a)};module.exports={ajax:ajax,xhr:xhr};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */

	;(function() {

	/**
	 * Block-Level Grammar
	 */

	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};

	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();

	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();

	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();

	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();

	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();

	/**
	 * Normal Block Grammar
	 */

	block.normal = merge({}, block);

	/**
	 * GFM Block Grammar
	 */

	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});

	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();

	/**
	 * GFM + Tables Block Grammar
	 */

	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});

	/**
	 * Block Lexer
	 */

	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;

	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}

	/**
	 * Expose Block Rules
	 */

	Lexer.rules = block;

	/**
	 * Static Lex Method
	 */

	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};

	/**
	 * Preprocessing
	 */

	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');

	  return this.token(src, true);
	};

	/**
	 * Lexing
	 */

	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;

	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }

	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }

	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }

	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }

	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }

	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);

	      this.tokens.push({
	        type: 'blockquote_start'
	      });

	      cap = cap[0].replace(/^ *> ?/gm, '');

	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);

	      this.tokens.push({
	        type: 'blockquote_end'
	      });

	      continue;
	    }

	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];

	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });

	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);

	      next = false;
	      l = cap.length;
	      i = 0;

	      for (; i < l; i++) {
	        item = cap[i];

	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }

	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }

	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }

	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });

	        // Recurse.
	        this.token(item, false, bq);

	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }

	      this.tokens.push({
	        type: 'list_end'
	      });

	      continue;
	    }

	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }

	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }

	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return this.tokens;
	};

	/**
	 * Inline-Level Grammar
	 */

	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};

	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();

	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();

	/**
	 * Normal Inline Grammar
	 */

	inline.normal = merge({}, inline);

	/**
	 * Pedantic Inline Grammar
	 */

	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});

	/**
	 * GFM Inline Grammar
	 */

	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});

	/**
	 * GFM + Line Breaks Inline Grammar
	 */

	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});

	/**
	 * Inline Lexer & Compiler
	 */

	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;

	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }

	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}

	/**
	 * Expose Inline Rules
	 */

	InlineLexer.rules = inline;

	/**
	 * Static Lexing/Compiling Method
	 */

	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};

	/**
	 * Lexing/Compiling
	 */

	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;

	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }

	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }

	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }

	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }

	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }

	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }

	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return out;
	};

	/**
	 * Compile Link
	 */

	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;

	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};

	/**
	 * Smartypants Transformations
	 */

	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};

	/**
	 * Mangle Links
	 */

	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;

	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }

	  return out;
	};

	/**
	 * Renderer
	 */

	function Renderer(options) {
	  this.options = options || {};
	}

	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }

	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }

	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};

	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};

	Renderer.prototype.html = function(html) {
	  return html;
	};

	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};

	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};

	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};

	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};

	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};

	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};

	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};

	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};

	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};

	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};

	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};

	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};

	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};

	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};

	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};

	Renderer.prototype.text = function(text) {
	  return text;
	};

	/**
	 * Parsing & Compiling
	 */

	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}

	/**
	 * Static Parse Method
	 */

	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};

	/**
	 * Parse Loop
	 */

	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();

	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }

	  return out;
	};

	/**
	 * Next Token
	 */

	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};

	/**
	 * Preview Next Token
	 */

	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};

	/**
	 * Parse Text Tokens
	 */

	Parser.prototype.parseText = function() {
	  var body = this.token.text;

	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }

	  return this.inline.output(body);
	};

	/**
	 * Parse Current Token
	 */

	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;

	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);

	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];

	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }

	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';

	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }

	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;

	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }

	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};

	/**
	 * Helpers
	 */

	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}

	function unescape(html) {
	  return html.replace(/&([#\w]+);/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}

	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}

	function noop() {}
	noop.exec = noop;

	function merge(obj) {
	  var i = 1
	    , target
	    , key;

	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }

	  return obj;
	}


	/**
	 * Marked
	 */

	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }

	    opt = merge({}, marked.defaults, opt || {});

	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;

	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }

	    pending = tokens.length;

	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }

	      var out;

	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }

	      opt.highlight = highlight;

	      return err
	        ? callback(err)
	        : callback(null, out);
	    };

	    if (!highlight || highlight.length < 3) {
	      return done();
	    }

	    delete opt.highlight;

	    if (!pending) return done();

	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }

	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}

	/**
	 * Options
	 */

	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};

	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};

	/**
	 * Expose
	 */

	marked.Parser = Parser;
	marked.parser = Parser.parse;

	marked.Renderer = Renderer;

	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;

	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;

	marked.parse = marked;

	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}

	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);