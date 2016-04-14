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

	var _sideNavControl = __webpack_require__(1);

	var SNC = _interopRequireWildcard(_sideNavControl);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	///-------Begin Module requires---------///
	var _$ = __webpack_require__(2)._$;
	/*
	elementsJSIO.js
	JavaScript file for the elementsJS project site.

	https://rawgit.com/ejames9/elementsJS/gh-pages/html/docsMenu.html
	https://cdn.rawgit.com/ejames9/elementsJS/5f9f194/html/docsMenu.html

	if ( sideNav.offsetTop < document.documentElement.scrollTop + 70 || sideNav.offsetTop < document.body.scrollTop + 70) {
	//         sideNav.setAttribute("class","sticky");
	//         console.log(e);
	//     }
	*/

	var dom = __webpack_require__(2).dom;
	var make = __webpack_require__(2).make;
	///|------------------------------------|//

	var elementsJS = __webpack_require__(2);
	var imports = elementsJS.imports;
	var go = elementsJS.go;
	var el = elementsJS.el;
	var log = elementsJS.log;
	var url = elementsJS.url;
	var ajax = elementsJS.ajax;
	var on = elementsJS.on;
	var click = elementsJS.click;
	var scroll = elementsJS.scroll;

	var marked = __webpack_require__(10);

	///End Module requires///

	var commit = '5f9f194';
	var rawGit = 'https://rawgit.com/ejames9/elementsJS/gh-pages/';
	var rawGitCDN = 'https://cdn.rawgit.com/ejames9/elementsJS/' + commit + '/';

	var docsMenu = 'html/docsMenu.html';
	var mdUrl = 'md/elementsJSIODocs.md';
	var markDown;

	//Documentation page change function
	function insertDocs(cb) {
	  //Grab side-bar/documentation template  html from github with rawgit cdn, insert side-bar/template, and docs into their containers.
	  ajax(url(rawGit, docsMenu), null, function (r) {
	    var elem0 = _$('#content') ? dom('#content') : make('#content').put("body");
	    elem0.html(r);
	    var elem1 = _$('#docsMain') ? dom('#docsMain') : make('#docsMain').put("body");
	    elem1.html(marked(markDown));

	    var offSets = SNC.getOffSets();

	    for (var el in offSets) {
	      log('id: ' + el, 'red');
	      log('offSet: ' + offSets[el], ['red', 'blue']);
	    }
	    cb();
	  });
	}

	//After page loads, load elementsJSIODocs.md into a variable.
	function getMarkDown() {
	  var addy = url(rawGit, mdUrl);
	  var xhr = new XMLHttpRequest();
	  xhr.onloadend = function () {
	    if (xhr.status === 200) {
	      var r = this.responseText;

	      markDown = r;
	    }
	  };
	  xhr.open('GET', addy);
	  xhr.send();
	}

	//Function for toggling npm/bower install info panel.
	function toggleNPMBar() {
	  var npmBar = document.getElementById('npm-bar');

	  if (npmBar.style.display === 'none') {
	    npmBar.style.display = 'block';
	  } else {
	    npmBar.style.display = 'none';
	  }
	}

	//Initialization code to be run after DOM content is loaded.
	go(function () {
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
	        insertDocs(function () {
	          SNC.sideNavController();
	        });
	        break;
	      default:
	        if (npmBar.style.display !== 'none') {
	          npmBar.style.display = 'none';
	        }
	        log(e);
	    }
	  });
	  getMarkDown();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _elementsJS = __webpack_require__(2);

	///-------elementsJS requires---------///
	var _$ = __webpack_require__(2)._$;
	var dom = __webpack_require__(2).dom;
	var make = __webpack_require__(2).make;
	///|------------------------------------|//

	/*
	sideNavControl.js
	This file Makes the side-nav menu on the elementsJS.io
	project-site docs page work.

	Author: Eric James Foster
	License: MIT
	*/

	function getOffSets() {

	            var offSets = {};
	            offSets['get-started'] = dom('#get-started').fromTop();
	            offSets['installation'] = (0, _elementsJS.el)('#installation').offsetTop;
	            offSets['usage'] = (0, _elementsJS.el)('#Usage').offsetTop;
	            offSets['interpreter-install'] = (0, _elementsJS.el)('#interpreter-install').offsetTop;
	            offSets['imports'] = (0, _elementsJS.el)('#imports').offsetTop;
	            offSets['DOM'] = (0, _elementsJS.el)('#DOM').offsetTop;
	            offSets['el-func'] = (0, _elementsJS.el)('#el-func').offsetTop;
	            offSets['dom-func'] = (0, _elementsJS.el)('#dom-func').offsetTop;
	            offSets['__-func'] = (0, _elementsJS.el)('#__-func').offsetTop;
	            offSets['make-func'] = (0, _elementsJS.el)('#make-func').offsetTop;
	            offSets['put-func'] = (0, _elementsJS.el)('#put-func').offsetTop;
	            offSets['x-func'] = (0, _elementsJS.el)('#x-func').offsetTop;
	            offSets['fore-func'] = (0, _elementsJS.el)('#fore-func').offsetTop;
	            offSets['aft-func'] = (0, _elementsJS.el)('#aft-func').offsetTop;
	            offSets['show-func'] = (0, _elementsJS.el)('#show-func').offsetTop;
	            offSets['hide-func'] = (0, _elementsJS.el)('#hide-func').offsetTop;
	            offSets['size-func'] = (0, _elementsJS.el)('#size-func').offsetTop;
	            offSets['event-handle'] = (0, _elementsJS.el)('#event-handle').offsetTop;
	            offSets['go-func'] = (0, _elementsJS.el)('#go-func').offsetTop;
	            offSets['on-func'] = (0, _elementsJS.el)('#on-func').offsetTop;
	            offSets['off-func'] = (0, _elementsJS.el)('#off-func').offsetTop;
	            offSets['once-func'] = (0, _elementsJS.el)('#once-func').offsetTop;
	            offSets['spark-func'] = (0, _elementsJS.el)('#spark-func').offsetTop;
	            offSets['click-func'] = (0, _elementsJS.el)('#click-func').offsetTop;
	            offSets['dblClick-func'] = (0, _elementsJS.el)('#dblClick-func').offsetTop;
	            offSets['blur-func'] = (0, _elementsJS.el)('#blur-func').offsetTop;
	            offSets['error-func'] = (0, _elementsJS.el)('#error-func').offsetTop;
	            offSets['focus-func'] = (0, _elementsJS.el)('#focus-func').offsetTop;
	            offSets['focusIn-func'] = (0, _elementsJS.el)('#focusIn-func').offsetTop;
	            offSets['focusOut-func'] = (0, _elementsJS.el)('#focusOut-func').offsetTop;
	            offSets['keyUp-func'] = (0, _elementsJS.el)('#keyUp-func').offsetTop;
	            offSets['keyDown-func'] = (0, _elementsJS.el)('#keyDown-func').offsetTop;
	            offSets['load-func'] = (0, _elementsJS.el)('#load-func').offsetTop;
	            offSets['unLoad-func'] = (0, _elementsJS.el)('#unLoad-func').offsetTop;
	            offSets['mouse-func'] = (0, _elementsJS.el)('#mouse-func').offsetTop;
	            offSets['resize-func'] = (0, _elementsJS.el)('#resize-func').offsetTop;
	            offSets['scroll-func'] = (0, _elementsJS.el)('#scroll-func').offsetTop;
	            offSets['select-func'] = (0, _elementsJS.el)('#select-func').offsetTop;
	            offSets['http'] = (0, _elementsJS.el)('#http').offsetTop;
	            offSets['xhr-func'] = (0, _elementsJS.el)('#xhr-func').offsetTop;
	            offSets['ajax-func'] = (0, _elementsJS.el)('#ajax-func').offsetTop;
	            offSets['loggers'] = (0, _elementsJS.el)('#loggers').offsetTop;
	            offSets['log-func'] = (0, _elementsJS.el)('#log-func').offsetTop;
	            offSets['info-func'] = (0, _elementsJS.el)('#info-func').offsetTop;
	            offSets['warn-func'] = (0, _elementsJS.el)('#warn-func').offsetTop;
	            offSets['err-func'] = (0, _elementsJS.el)('#err-func').offsetTop;
	            offSets['utils'] = (0, _elementsJS.el)('#utils').offsetTop;
	            offSets['proto-func'] = (0, _elementsJS.el)('#proto-func').offsetTop;
	            offSets['shifter-func'] = (0, _elementsJS.el)('#shifter-func').offsetTop;
	            offSets['elem-obj'] = (0, _elementsJS.el)('#elem-obj').offsetTop;
	            offSets['element-const'] = (0, _elementsJS.el)('#element-const').offsetTop;
	            offSets['dom2-func'] = (0, _elementsJS.el)('#dom2-func').offsetTop;
	            offSets['make2-func'] = (0, _elementsJS.el)('#make2-func').offsetTop;
	            offSets['elem-obj-methods'] = (0, _elementsJS.el)('#elem-obj-methods').offsetTop;
	            offSets['element-font-ex'] = (0, _elementsJS.el)('#element-font-ex').offsetTop;
	            offSets['exs'] = (0, _elementsJS.el)('#exs').offsetTop;
	            offSets['style-methods'] = (0, _elementsJS.el)('#style-methods').offsetTop;
	            offSets['core-func'] = (0, _elementsJS.el)('#core-func').offsetTop;
	            offSets['DOM-Elem-Methods'] = (0, _elementsJS.el)('#DOM-Elem-Methods').offsetTop;
	            offSets['event-methods'] = (0, _elementsJS.el)('#event-methods').offsetTop;
	            offSets['Util-Methods'] = (0, _elementsJS.el)('#Util-Methods').offsetTop;
	            offSets['elements-syntax'] = (0, _elementsJS.el)('#elements-syntax').offsetTop;
	            offSets['elemsyntax-func1'] = (0, _elementsJS.el)('#elemsyntax-func1').offsetTop;
	            offSets['elemsyntax-func2'] = (0, _elementsJS.el)('#elemsyntax-func2').offsetTop;
	            offSets['elemsyntax-func3'] = (0, _elementsJS.el)('#elemsyntax-func3').offsetTop;
	            offSets['elemsyntax-func4'] = (0, _elementsJS.el)('#elemsyntax-func4').offsetTop;
	            offSets['elemsyntax-func5'] = (0, _elementsJS.el)('#elemsyntax-func5').offsetTop;
	            offSets['elemsyntax-func6'] = (0, _elementsJS.el)('#elemsyntax-func6').offsetTop;
	            offSets['append-syntax'] = (0, _elementsJS.el)('#append-syntax').offsetTop;
	            offSets['elemsyntax-func7'] = (0, _elementsJS.el)('#elemsyntax-func7').offsetTop;

	            return offSets;
	}

	function sideNavController() {
	            // console.log(dom('[name=hidden]'));

	            var offSets = getOffSets(),
	                diff = 0;

	            (0, _elementsJS.scroll)(window, function () {
	                        switch (true) {
	                                    //0 - 13 Getting Started
	                                    case dom('html').scrolled() > 0 + diff && dom('html').scrolled() < offSets['get-started'] + diff || dom('body').scrolled() > 0 + diff && dom('body').scrolled() < offSets['get-started']:
	                                                dom('[class=hot]').xClass();
	                                                var elem0 = _$('#getStart') ? dom('#getStart') : make('#getStart').put("body");
	                                                elem0.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['get-started'] + diff && dom('html').scrolled() < offSets['installation'] + diff || dom('body').scrolled() > offSets['get-started'] + diff && dom('body').scrolled() < offSets['installation']:
	                                                // log('YES', ['red', 'blue']);
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem1 = _$('#getStart') ? dom('#getStart') : make('#getStart').put("body");
	                                                elem1.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['installation'] + diff && dom('html').scrolled() < offSets['usage'] + diff || dom('body').scrolled() > offSets['installation'] + diff && dom('body').scrolled() < offSets['usage']:
	                                                dom('[class=hot]').xClass();
	                                                var elem2 = _$('#inst') ? dom('#inst') : make('#inst').put("body");
	                                                elem2.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['usage'] + diff && dom('html').scrolled() < offSets['interpreter-install'] + diff || dom('body').scrolled() > offSets['usage'] + diff && dom('body').scrolled() < offSets['interpreter-install']:
	                                                dom('[class=hot]').xClass();
	                                                var elem3 = _$('#use') ? dom('#use') : make('#use').put("body");
	                                                elem3.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['interpreter-install'] + diff && dom('html').scrolled() < offSets['imports'] + diff || dom('body').scrolled() > offSets['interpreter-install'] + diff && dom('body').scrolled() < offSets['imports']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem4 = _$('#interpInstall') ? dom('#interpInstall') : make('#interpInstall').put("body");
	                                                elem4.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['imports'] + diff && dom('html').scrolled() < offSets['DOM'] + diff || dom('body').scrolled() > offSets['imports'] + diff && dom('body').scrolled() < offSets['DOM']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem5 = _$('#imps') ? dom('#imps') : make('#imps').put("body");
	                                                elem5.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['DOM'] + diff && dom('html').scrolled() < offSets['el-func'] + diff || dom('body').scrolled() > offSets['DOM'] + diff && dom('body').scrolled() < offSets['el-func']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem6 = _$('#domManip') ? dom('#domManip') : make('#domManip').put("body");
	                                                elem6.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['el-func'] + diff && dom('html').scrolled() < offSets['dom-func'] + diff || dom('body').scrolled() > offSets['el-func'] + diff && dom('body').scrolled() < offSets['dom-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem7 = _$('#el') ? dom('#el') : make('#el').put("body");
	                                                elem7.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['dom-func'] + diff && dom('html').scrolled() < offSets['__-func'] + diff || dom('body').scrolled() > offSets['dom-func'] + diff && dom('body').scrolled() < offSets['__-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem8 = _$('#dom') ? dom('#dom') : make('#dom').put("body");
	                                                elem8.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['__-func'] + diff && dom('html').scrolled() < offSets['make-func'] + diff || dom('body').scrolled() > offSets['__-func'] + diff && dom('body').scrolled() < offSets['make-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem9 = _$('#__') ? dom('#__') : make('#__').put("body");
	                                                elem9.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['make-func'] + diff && dom('html').scrolled() < offSets['put-func'] + diff || dom('body').scrolled() > offSets['make-func'] + diff && dom('body').scrolled() < offSets['put-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem10 = _$('#make') ? dom('#make') : make('#make').put("body");
	                                                elem10.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['put-func'] + diff && dom('html').scrolled() < offSets['x-func'] + diff || dom('body').scrolled() > offSets['put-func'] + diff && dom('body').scrolled() < offSets['x-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem11 = _$('#put') ? dom('#put') : make('#put').put("body");
	                                                elem11.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['x-func'] + diff && dom('html').scrolled() < offSets['fore-func'] + diff || dom('body').scrolled() > offSets['x-func'] + diff && dom('body').scrolled() < offSets['fore-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem12 = _$('#x') ? dom('#x') : make('#x').put("body");
	                                                elem12.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['fore-func'] + diff && dom('html').scrolled() < offSets['aft-func'] + diff || dom('body').scrolled() > offSets['fore-func'] + diff && dom('body').scrolled() < offSets['aft-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem13 = _$('#fore') ? dom('#fore') : make('#fore').put("body");
	                                                elem13.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['aft-func'] + diff && dom('html').scrolled() < offSets['show-func'] + diff || dom('body').scrolled() > offSets['aft-func'] + diff && dom('body').scrolled() < offSets['show-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem14 = _$('#aft') ? dom('#aft') : make('#aft').put("body");
	                                                elem14.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['show-func'] + diff && dom('html').scrolled() < offSets['hide-func'] + diff || dom('body').scrolled() > offSets['show-func'] + diff && dom('body').scrolled() < offSets['hide-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem15 = _$('#show') ? dom('#show') : make('#show').put("body");
	                                                elem15.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['hide-func'] + diff && dom('html').scrolled() < offSets['size-func'] + diff || dom('body').scrolled() > offSets['hide-func'] + diff && dom('body').scrolled() < offSets['size-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem16 = _$('#hyde') ? dom('#hyde') : make('#hyde').put("body");
	                                                elem16.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['size-func'] + diff && dom('html').scrolled() < offSets['event-handle'] + diff || dom('body').scrolled() > offSets['size-func'] + diff && dom('body').scrolled() < offSets['event-handle']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem17 = _$('#size') ? dom('#size') : make('#size').put("body");
	                                                elem17.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['event-handle'] + diff && dom('html').scrolled() < offSets['go-func'] + diff || dom('body').scrolled() > offSets['event-handle'] + diff && dom('body').scrolled() < offSets['go-func']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem18 = _$('#eventHand') ? dom('#eventHand') : make('#eventHand').put("body");
	                                                elem18.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['go-func'] + diff && dom('html').scrolled() < offSets['on-func'] + diff || dom('body').scrolled() > offSets['go-func'] + diff && dom('body').scrolled() < offSets['on-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem19 = _$('#go') ? dom('#go') : make('#go').put("body");
	                                                elem19.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['on-func'] + diff && dom('html').scrolled() < offSets['off-func'] + diff || dom('body').scrolled() > offSets['on-func'] + diff && dom('body').scrolled() < offSets['off-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem20 = _$('#on') ? dom('#on') : make('#on').put("body");
	                                                elem20.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['off-func'] + diff && dom('html').scrolled() < offSets['once-func'] + diff || dom('body').scrolled() > offSets['off-func'] + diff && dom('body').scrolled() < offSets['once-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem21 = _$('#off') ? dom('#off') : make('#off').put("body");
	                                                elem21.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['once-func'] + diff && dom('html').scrolled() < offSets['spark-func'] + diff || dom('body').scrolled() > offSets['once-func'] + diff && dom('body').scrolled() < offSets['spark-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem22 = _$('#once') ? dom('#once') : make('#once').put("body");
	                                                elem22.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['spark-func'] + diff && dom('html').scrolled() < offSets['click-func'] + diff || dom('body').scrolled() > offSets['spark-func'] + diff && dom('body').scrolled() < offSets['click-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem23 = _$('#spark') ? dom('#spark') : make('#spark').put("body");
	                                                elem23.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['click-func'] + diff && dom('html').scrolled() < offSets['dblClick-func'] + diff || dom('body').scrolled() > offSets['click-func'] + diff && dom('body').scrolled() < offSets['dblClick-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem24 = _$('#click') ? dom('#click') : make('#click').put("body");
	                                                elem24.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['dblClick-func'] + diff && dom('html').scrolled() < offSets['blur-func'] + diff || dom('body').scrolled() > offSets['dblClick-func'] + diff && dom('body').scrolled() < offSets['blur-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem25 = _$('#dbl') ? dom('#dbl') : make('#dbl').put("body");
	                                                elem25.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['blur-func'] + diff && dom('html').scrolled() < offSets['error-func'] + diff || dom('body').scrolled() > offSets['blur-func'] + diff && dom('body').scrolled() < offSets['error-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem26 = _$('#blur') ? dom('#blur') : make('#blur').put("body");
	                                                elem26.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['error-func'] + diff && dom('html').scrolled() < offSets['focus-func'] + diff || dom('body').scrolled() > offSets['error-func'] + diff && dom('body').scrolled() < offSets['focus-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem27 = _$('#error') ? dom('#error') : make('#error').put("body");
	                                                elem27.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['focus-func'] + diff && dom('html').scrolled() < offSets['focusIn-func'] + diff || dom('body').scrolled() > offSets['focus-func'] + diff && dom('body').scrolled() < offSets['focusIn-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem28 = _$('#focus') ? dom('#focus') : make('#focus').put("body");
	                                                elem28.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['focusIn-func'] + diff && dom('html').scrolled() < offSets['focusOut-func'] + diff || dom('body').scrolled() > offSets['focusIn-func'] + diff && dom('body').scrolled() < offSets['focusOut-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem29 = _$('#focusIn') ? dom('#focusIn') : make('#focusIn').put("body");
	                                                elem29.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['focusOut-func'] + diff && dom('html').scrolled() < offSets['keyUp-func'] + diff || dom('body').scrolled() > offSets['focusOut-func'] + diff && dom('body').scrolled() < offSets['keyUp-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem30 = _$('#focusOut') ? dom('#focusOut') : make('#focusOut').put("body");
	                                                elem30.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['keyUp-func'] + diff && dom('html').scrolled() < offSets['keyDown-func'] + diff || dom('body').scrolled() > offSets['keyUp-func'] + diff && dom('body').scrolled() < offSets['keyDown-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem31 = _$('#keyUp') ? dom('#keyUp') : make('#keyUp').put("body");
	                                                elem31.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['keyDown-func'] + diff && dom('html').scrolled() < offSets['load-func'] + diff || dom('body').scrolled() > offSets['keyDown-func'] + diff && dom('body').scrolled() < offSets['load-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem32 = _$('#keyDown') ? dom('#keyDown') : make('#keyDown').put("body");
	                                                elem32.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['load-func'] + diff && dom('html').scrolled() < offSets['unLoad-func'] + diff || dom('body').scrolled() > offSets['load-func'] + diff && dom('body').scrolled() < offSets['unLoad-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem33 = _$('#load') ? dom('#load') : make('#load').put("body");
	                                                elem33.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['unLoad-func'] + diff && dom('html').scrolled() < offSets['mouse-func'] + diff || dom('body').scrolled() > offSets['unLoad-func'] + diff && dom('body').scrolled() < offSets['mouse-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem34 = _$('#unLoad') ? dom('#unLoad') : make('#unLoad').put("body");
	                                                elem34.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['mouse-func'] + diff && dom('html').scrolled() < offSets['resize-func'] + diff || dom('body').scrolled() > offSets['mouse-func'] + diff && dom('body').scrolled() < offSets['resize-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem35 = _$('#mouse') ? dom('#mouse') : make('#mouse').put("body");
	                                                elem35.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['resize-func'] + diff && dom('html').scrolled() < offSets['scroll-func'] + diff || dom('body').scrolled() > offSets['resize-func'] + diff && dom('body').scrolled() < offSets['scroll-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem36 = _$('#resize') ? dom('#resize') : make('#resize').put("body");
	                                                elem36.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['scroll-func'] + diff && dom('html').scrolled() < offSets['select-func'] + diff || dom('body').scrolled() > offSets['scroll-func'] + diff && dom('body').scrolled() < offSets['select-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem37 = _$('#scroll') ? dom('#scroll') : make('#scroll').put("body");
	                                                elem37.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['select-func'] + diff && dom('html').scrolled() < offSets['http'] + diff || dom('body').scrolled() > offSets['select-func'] + diff && dom('body').scrolled() < offSets['http']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem38 = _$('#select') ? dom('#select') : make('#select').put("body");
	                                                elem38.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['http'] + diff && dom('html').scrolled() < offSets['xhr-func'] + diff || dom('body').scrolled() > offSets['http'] + diff && dom('body').scrolled() < offSets['xhr-func']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem39 = _$('#httpReq') ? dom('#httpReq') : make('#httpReq').put("body");
	                                                elem39.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['xhr-func'] + diff && dom('html').scrolled() < offSets['ajax-func'] + diff || dom('body').scrolled() > offSets['xhr-func'] + diff && dom('body').scrolled() < offSets['ajax-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem40 = _$('#xhr') ? dom('#xhr') : make('#xhr').put("body");
	                                                elem40.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['ajax-func'] + diff && dom('html').scrolled() < offSets['loggers'] + diff || dom('body').scrolled() > offSets['ajax-func'] + diff && dom('body').scrolled() < offSets['loggers']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem41 = _$('#ajax') ? dom('#ajax') : make('#ajax').put("body");
	                                                elem41.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['loggers'] + diff && dom('html').scrolled() < offSets['log-func'] + diff || dom('body').scrolled() > offSets['loggers'] + diff && dom('body').scrolled() < offSets['log-func']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem42 = _$('#logg') ? dom('#logg') : make('#logg').put("body");
	                                                elem42.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['log-func'] + diff && dom('html').scrolled() < offSets['info-func'] + diff || dom('body').scrolled() > offSets['log-func'] + diff && dom('body').scrolled() < offSets['info-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem43 = _$('#log') ? dom('#log') : make('#log').put("body");
	                                                elem43.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['info-func'] + diff && dom('html').scrolled() < offSets['warn-func'] + diff || dom('body').scrolled() > offSets['info-func'] + diff && dom('body').scrolled() < offSets['warn-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem44 = _$('#info') ? dom('#info') : make('#info').put("body");
	                                                elem44.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['warn-func'] + diff && dom('html').scrolled() < offSets['err-func'] + diff || dom('body').scrolled() > offSets['warn-func'] + diff && dom('body').scrolled() < offSets['err-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem45 = _$('#warn') ? dom('#warn') : make('#warn').put("body");
	                                                elem45.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['err-func'] + diff && dom('html').scrolled() < offSets['utils'] + diff || dom('body').scrolled() > offSets['err-func'] + diff && dom('body').scrolled() < offSets['utils']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem46 = _$('#err') ? dom('#err') : make('#err').put("body");
	                                                elem46.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['utils'] + diff && dom('html').scrolled() < offSets['proto-func'] + diff || dom('body').scrolled() > offSets['utils'] + diff && dom('body').scrolled() < offSets['proto-func']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem47 = _$('#utilFunc') ? dom('#utilFunc') : make('#utilFunc').put("body");
	                                                elem47.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['proto-func'] + diff && dom('html').scrolled() < offSets['shifter-func'] + diff || dom('body').scrolled() > offSets['proto-func'] + diff && dom('body').scrolled() < offSets['shifter-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem48 = _$('#proto') ? dom('#proto') : make('#proto').put("body");
	                                                elem48.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['shifter-func'] + diff && dom('html').scrolled() < offSets['elem-obj'] + diff || dom('body').scrolled() > offSets['shifter-func'] + diff && dom('body').scrolled() < offSets['elem-obj']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem49 = _$('#shifter') ? dom('#shifter') : make('#shifter').put("body");
	                                                elem49.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['elem-obj'] + diff && dom('html').scrolled() < offSets['element-const'] + diff || dom('body').scrolled() > offSets['elem-obj'] + diff && dom('body').scrolled() < offSets['element-const']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem50 = _$('#elemObj') ? dom('#elemObj') : make('#elemObj').put("body");
	                                                elem50.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['element-const'] + diff && dom('html').scrolled() < offSets['dom2-func'] + diff || dom('body').scrolled() > offSets['element-const'] + diff && dom('body').scrolled() < offSets['dom2-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem51 = _$('#elemConst') ? dom('#elemConst') : make('#elemConst').put("body");
	                                                elem51.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['dom2-func'] + diff && dom('html').scrolled() < offSets['make2-func'] + diff || dom('body').scrolled() > offSets['dom2-func'] + diff && dom('body').scrolled() < offSets['make2-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem52 = _$('#dom2') ? dom('#dom2') : make('#dom2').put("body");
	                                                elem52.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['make2-func'] + diff && dom('html').scrolled() < offSets['elem-obj-methods'] + diff || dom('body').scrolled() > offSets['make2-func'] + diff && dom('body').scrolled() < offSets['elem-obj-methods']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem53 = _$('#make2') ? dom('#make2') : make('#make2').put("body");
	                                                elem53.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['elem-obj-methods'] + diff && dom('html').scrolled() < offSets['element-font-ex'] + diff || dom('body').scrolled() > offSets['elem-obj-methods'] + diff && dom('body').scrolled() < offSets['element-font-ex']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem54 = _$('#elemObjMethods') ? dom('#elemObjMethods') : make('#elemObjMethods').put("body");
	                                                elem54.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['element-font-ex'] + diff && dom('html').scrolled() < offSets['style-methods'] + diff || dom('body').scrolled() > offSets['element-font-ex'] + diff && dom('body').scrolled() < offSets['style-methods']:
	                                                dom('[class=hot]').xClass();
	                                                var elem55 = _$('#fontExamp') ? dom('#fontExamp') : make('#fontExamp').put("body");
	                                                elem55.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['style-methods'] + diff && dom('html').scrolled() < offSets['core-func'] + diff || dom('body').scrolled() > offSets['style-methods'] + diff && dom('body').scrolled() < offSets['core-func']:
	                                                dom('[class=hot]').xClass();
	                                                var elem56 = _$('#stylMethods') ? dom('#stylMethods') : make('#stylMethods').put("body");
	                                                elem56.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['core-func'] + diff && dom('html').scrolled() < offSets['DOM-Elem-Methods'] + diff || dom('body').scrolled() > offSets['core-func'] + diff && dom('body').scrolled() < offSets['DOM-Elem-Methods']:
	                                                dom('[class=hot]').xClass();
	                                                var elem57 = _$('#core') ? dom('#core') : make('#core').put("body");
	                                                elem57.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('html').scrolled() < offSets['event-methods'] + diff || dom('body').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('body').scrolled() < offSets['event-methods']:
	                                                dom('[class=hot]').xClass();
	                                                var elem58 = _$('#domMethods') ? dom('#domMethods') : make('#domMethods').put("body");
	                                                elem58.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['event-methods'] + diff && dom('html').scrolled() < offSets['Util-Methods'] + diff || dom('body').scrolled() > offSets['event-methods'] + diff && dom('body').scrolled() < offSets['Util-Methods']:
	                                                dom('[class=hot]').xClass();
	                                                var elem59 = _$('#eventMethods') ? dom('#eventMethods') : make('#eventMethods').put("body");
	                                                elem59.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['Util-Methods'] + diff && dom('html').scrolled() < offSets['elements-syntax'] + diff || dom('body').scrolled() > offSets['Util-Methods'] + diff && dom('body').scrolled() < offSets['elements-syntax']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem60 = _$('#utilMethods') ? dom('#utilMethods') : make('#utilMethods').put("body");
	                                                elem60.class('hot').ma().xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['elements-syntax'] + diff && dom('html').scrolled() < offSets['elemsyntax-func1'] + diff || dom('body').scrolled() > offSets['elements-syntax'] + diff && dom('body').scrolled() < offSets['elemsyntax-func1']:
	                                                dom('[class=hot]').xClass();

	                                                dom('[name=hidden]').forEach(function (element) {
	                                                            element.class('hide');
	                                                });
	                                                var elem61 = _$('#elemsSyntax') ? dom('#elemsSyntax') : make('#elemsSyntax').put("body");
	                                                elem61.class('hot').sib('next').xClass();
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func1'] + diff && dom('html').scrolled() < offSets['elemsyntax-func2'] + diff || dom('body').scrolled() > offSets['elemsyntax-func1'] + diff && dom('body').scrolled() < offSets['elemsyntax-func2']:
	                                                dom('[class=hot]').xClass();
	                                                var elem62 = _$('#func1') ? dom('#func1') : make('#func1').put("body");
	                                                elem62.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func2'] + diff && dom('html').scrolled() < offSets['elemsyntax-func3'] + diff || dom('body').scrolled() > offSets['elemsyntax-func2'] + diff && dom('body').scrolled() < offSets['elemsyntax-func3']:
	                                                dom('[class=hot]').xClass();
	                                                var elem63 = _$('#func2') ? dom('#func2') : make('#func2').put("body");
	                                                elem63.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func3'] + diff && dom('html').scrolled() < offSets['elemsyntax-func4'] + diff || dom('body').scrolled() > offSets['elemsyntax-func3'] + diff && dom('body').scrolled() < offSets['elemsyntax-func4']:
	                                                dom('[class=hot]').xClass();
	                                                var elem64 = _$('#func3') ? dom('#func3') : make('#func3').put("body");
	                                                elem64.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func4'] + diff && dom('html').scrolled() < offSets['elemsyntax-func5'] + diff || dom('body').scrolled() > offSets['elemsyntax-func4'] + diff && dom('body').scrolled() < offSets['elemsyntax-func5']:
	                                                dom('[class=hot]').xClass();
	                                                var elem65 = _$('#func4') ? dom('#func4') : make('#func4').put("body");
	                                                elem65.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func5'] + diff && dom('html').scrolled() < offSets['elemsyntax-func6'] + diff || dom('body').scrolled() > offSets['elemsyntax-func5'] + diff && dom('body').scrolled() < offSets['elemsyntax-func6']:
	                                                dom('[class=hot]').xClass();
	                                                var elem66 = _$('#func5') ? dom('#func5') : make('#func5').put("body");
	                                                elem66.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func6'] + diff && dom('html').scrolled() < offSets['append-syntax'] + diff || dom('body').scrolled() > offSets['elemsyntax-func6'] + diff && dom('body').scrolled() < offSets['append-syntax']:
	                                                dom('[class=hot]').xClass();
	                                                var elem67 = _$('#func6') ? dom('#func6') : make('#func6').put("body");
	                                                elem67.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['append-syntax'] + diff && dom('html').scrolled() < offSets['elemsyntax-func7'] + diff || dom('body').scrolled() > offSets['append-syntax'] + diff && dom('body').scrolled() < offSets['elemsyntax-func7']:
	                                                dom('[class=hot]').xClass();
	                                                var elem68 = _$('#appendStax') ? dom('#appendStax') : make('#appendStax').put("body");
	                                                elem68.class('hot');
	                                                break;
	                                    case dom('html').scrolled() > offSets['elemsyntax-func7'] + diff || dom('body').scrolled() > offSets['elemsyntax-func7']:
	                                                dom('[class=hot]').xClass();
	                                                var elem69 = _$('#func7') ? dom('#func7') : make('#func7').put("body");
	                                                elem69.class('hot');
	                                                break;

	                                    default:
	                                                break;
	                        }
	            });
	}

	module.exports = {
	            getOffSets: getOffSets,
	            sideNavController: sideNavController
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _element = __webpack_require__(3);

	var _element2 = _interopRequireDefault(_element);

	var _httpRequests = __webpack_require__(9);

	var requests = _interopRequireWildcard(_httpRequests);

	var _events = __webpack_require__(6);

	var events = _interopRequireWildcard(_events);

	var _logger = __webpack_require__(4);

	var consol = _interopRequireWildcard(_logger);

	var _utilities = __webpack_require__(7);

	var utils = _interopRequireWildcard(_utilities);

	var _DOM = __webpack_require__(8);

	var DOM = _interopRequireWildcard(_DOM);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require('babel-polyfill');

	/*
	Elements.js

	A JavaScript DOM manipulation/Alias function Library.
	This is the index file for the library. It contains alias functions for
	all of the librarys' public functions. This makes it easy to import the
	functions without a module prefix es6 style.

	Author: Eric James Foster
	EMail: maniphestival@gmail.com
	License: MIT
	Version: 1.0.0
	URL: ""
	*/

	//FIXME: elements syntax not working in case condition of switch statement.
	//FIXME: reg exp did not find element with CSS Selector, <'[class=active]'/>.

	//DONE:0 Complete X-Browser 'style' functions, and implement X-Browser compatibility in EventListener functions.

	var element = function element(el) {
	  return new _element2.default();
	};

	/*This function copies the prototype object of a superConstructor to the prototype object
	of a constructor. It functions just like nodes' util.inherits function, it copies methods only,
	not internal properties.*/
	var proto = function proto(construct, superConstruct) {
	  return utils.proto(construct, superConstruct);
	};

	/*This convenience function sets imported module function names as global variables, so that
	the module variable doesn't need to preface every function.*/
	var functions = function functions(funcs, mod) {
	  //TEST:110 Test this with other node_modules.
	  var context = mod || this;

	  if (Array.isArray(funcs)) {
	    log(mod, 'red');

	    funcs.forEach(function (func) {
	      var evil = new Function('window.' + func + ' = ' + 'this.' + func + ';');
	      evil.call(context);
	    }, context);
	  } else {
	    (function () {
	      var evil = new Function('window.' + funcs + ' = ' + 'this.' + funcs + ';');
	      evil.call(context);
	    }).apply(context);
	  }
	};

	var _$ = function _$(el) {
	  var l = null !== utils.queryDOM(el);
	  return l;
	};

	//This function queries the dom, getting one element for each query (i.e. class/tags), creates
	//an Element object with it and returns it, so that it may be easily styled.
	var dom = function dom(el) {
	  // log('dom: ' + el, 'blue');
	  var rv = void 0;

	  el = utils.queryDOM(el);


	  if (el.length !== undefined) {
	    rv = [];

	    for (var i = 0; i < el.length; i++) {
	      rv.push(new _element2.default(el[i]));
	    }
	  } else {
	    rv = new _element2.default(el);
	  }
	  return rv;
	};

	/*function for insterting template literals into the DOM.

	bones(`

	<html>
	  <head></head>
	  <body></body>
	</html>

	`);

	*/
	var __ = function __(tempLit) {
	  var el = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];

	  return DOM.bones(tempLit, el);
	};

	//Create element alias function.
	var make = function make(el, tag) {
	  return DOM.make(el, tag);
	};

	//DOM querying alias function. Will automatically narrow class or tag queries down to one result. It will not return an array.
	var el = function el(l) {
	  return utils.queryDOM(l);
	};

	//Function for appending elements to other elements.
	var put = function put(el, mom) {
	  return DOM.put(el, mom);
	};

	//Function for deleting elements from the DOM tree.
	var x = function x(el) {
	  return DOM.kill(el);
	};

	var fore = function fore(ref, elem) {
	  return DOM.fore(ref, elem);
	};

	var aft = function aft(ref, elem) {
	  return DOM.aft(ref, elem);
	};

	var show = function show(elem, disp) {
	  return DOM.show(elem);
	};

	var hide = function hide(elem) {
	  return DOM.hide(elem);
	};

	var size = function size(elem, h, w) {
	  return DOM.size(elem, h, w);
	};

	var clone = function clone(elem, deep) {
	  return DOM.clone(elem, deep);
	};

	//console.log alias function.
	var log = function log(text, style, tyme) {
	  return consol.log(text, style, tyme);
	};

	//console.error alias function.
	var err = function err(text, tyme) {
	  return consol.err(text, tyme);
	};

	//console.info alias function.
	var info = function info(text, tyme) {
	  return consol.info(text, tyme);
	};

	//console.warn alias function.
	var warn = function warn(text, tyme) {
	  return consol.warn(text, tyme);
	};

	var shifter = function shifter(onFunc, offFunc) {
	  return utils.shifter(onFunc, offFunc);
	};

	//This practically useless function will lock up the browser for a preset amount of time.
	var sleep = function sleep(milliseconds) {
	  return utils.sleep(milliseconds);
	};

	//A function for combining strings for urls
	var url = function url(bit1, bit2) {
	  var bit3 = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
	  var bit4 = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

	  return bit1 + bit2 + bit3 + bit4;
	};

	//This is a synchronous alias function for XMLHttpRequests.
	var xhr = function xhr(url, fd, method) {
	  return requests.xhr(url, fd, method);
	};

	//This is an asynchronous alias function for XMLHttpRequests.
	var ajax = function ajax(url, fd, callback, method) {
	  return requests.ajax(url, fd, callback, method);
	};

	/*---------Event Functions-----------*/

	var go = function go(cb) {
	  if (document.addEventListener) {
	    return events.go(cb);
	  } else {
	    return events.goIE(cb);
	  }
	};

	//Function for setting event listeners.
	var on = function on(event, el, callback) {
	  if (document.addEventListener) {
	    return events.on(event, el, callback);
	  } else {
	    return events.onIE(event, el, callback);
	  }
	};

	//Function for removing event listeners.
	var off = function off(event, el, callback) {
	  if (document.addEventListener) {
	    return events.off(event, el, callback);
	  } else {
	    return events.offIE(event, el, callback);
	  }
	};

	var once = function once(event, el, callback) {
	  //DONE:50 Finish once function.
	  if (document.addEventListener) {
	    return events.once(event, el, callback);
	  } else {
	    return events.onceIE(event, el, callback);
	  } //TEST:70 Test once function.
	};

	var spark = function spark(evt, el) {
	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.spark(evt, el);
	  } else {
	    return events.sparkIE(evt, el);
	  }
	};

	var blur = function blur(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.blur(el, cb);
	  } else {
	    return events.blurIE(el, cb);
	  }
	};

	var click = function click(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.click(el, cb);
	  } else {
	    return events.clickIE(el, cb);
	  }
	};

	var dblClick = function dblClick(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.dblClick(el, cb);
	  } else {
	    return events.dblClickIE(el, cb);
	  }
	};

	var error = function error(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.error(el, cb);
	  } else {
	    return events.errorIE(el, cb);
	  }
	};

	var focus = function focus(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.focus(el, cb);
	  } else {
	    return events.focusIE(el, cb);
	  }
	};

	var focusIn = function focusIn(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.focusIn(el, cb);
	  } else {
	    return events.focusInIE(el, cb);
	  }
	};

	var focusOut = function focusOut(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.focusOut(el, cb);
	  } else {
	    return events.focusOut(el, cb);
	  }
	};

	var keyUp = function keyUp(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.keyUp(el, cb);
	  } else {
	    return events.keyUpIE(el, cb);
	  }
	};

	var keyDown = function keyDown(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.keyDown(el, cb);
	  } else {
	    return events.keyDownIE(el, cb);
	  }
	};

	var load = function load(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.load(el, cb);
	  } else {
	    return events.loadIE(el, cb);
	  }
	};

	var unLoad = function unLoad(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.unLoad(el, cb);
	  } else {
	    return events.unLoadIE(el, cb);
	  }
	};

	var mouse = function mouse(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.mouse(el, cb);
	  } else {
	    return events.mouseIE(el, cb);
	  }
	};

	var resize = function resize(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.resize(el, cb);
	  } else {
	    return events.resizeIE(el, cb);
	  }
	};

	var scroll = function scroll(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.scroll(el, cb);
	  } else {
	    return events.scrollIE(el, cb);
	  }
	};

	var select = function select(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	  el = utils.queryDOM(el);

	  if (document.addEventListener) {
	    return events.select(el, cb);
	  } else {
	    return events.selectIE(el, cb);
	  }
	};

	module.exports = {
	  _$: _$,
	  x: x,
	  go: go,
	  shifter: shifter,
	  make: make,
	  __: __,
	  dom: dom,
	  proto: proto,
	  clone: clone,
	  functions: functions,
	  put: put,
	  on: on,
	  off: off,
	  once: once,
	  el: el,
	  log: log,
	  url: url,
	  xhr: xhr,
	  err: err,
	  info: info,
	  warn: warn,
	  ajax: ajax,
	  fore: fore,
	   aft: aft,
	  show: show,
	  hide: hide,
	 clone: clone,
	  spark: spark,
	  blur: blur,
	  click: click,
	  dblClick: dblClick,
	  error: error,
	  focus: focus,
	  focusIn: focusIn,
	  focusOut: focusOut,
	  keyUp: keyUp,
	  keyDown: keyDown,
	  load: load,
	  unLoad: unLoad,
	  mouse: mouse,
	  resize: resize,
	  scroll: scroll,
	  select: select
	};

	//DONE:30 functions: err(), info(), warn().
	//DONE:130 Complete all standalone style functions.


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	/*
	Element.js

	This is a helper file for the elements.js index, which houses
	the code for the Element Class.

	Author: Eric James Foster
	License: ISC
	*/

	exports.default = Element;

	var _logger = __webpack_require__(4);

	var _index = __webpack_require__(2);

	var elements = _interopRequireWildcard(_index);

	var _events = __webpack_require__(6);

	var events = _interopRequireWildcard(_events);

	var _DOM = __webpack_require__(8);

	var DOM = _interopRequireWildcard(_DOM);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// require('babel-polyfill');

	//DOING:10 List all functions that need to be added (.textContent, innerHTML etc.)
	//DOING:20 Complete all functions for this object.
	//IDEA: A method that incorporates jquery methods into El object (animation?).

	function Element(el) {
	  this.el = el;

	  if (!(this instanceof Element)) {
	    return new Element();
	  }

	  // Style methods //

	  this.border = function (val) {
	    if (val !== undefined) {
	      el.style.border = val;
	      return this;
	    } else {
	      val = el.style.border;
	      return val;
	    }
	  };
	  this.bg = function (val) {
	    if (val !== undefined) {
	      el.style.background = val;
	      return this;
	    } else {
	      val = el.style.background;
	      return val;
	    }
	  };
	  this.bgColor = function (val) {
	    if (val !== undefined) {
	      el.style.backgroundColor = val;
	      return this;
	    } else {
	      val = el.style.backgroundColor;
	      return val;
	    }
	  };
	  this.bgImage = function (val) {
	    if (val !== undefined) {
	      el.style.backgroundImage = val;
	      return this;
	    } else {
	      val = el.style.backgroundImage;
	      return val;
	    }
	  };
	  this.bgSize = function (val) {
	    if (val !== undefined) {
	      el.style.backgroundSize = val;
	      return this;
	    } else {
	      val = el.style.backgroundSize;
	      return val;
	    }
	  };
	  this.bgPosition = function (val) {
	    if (val !== undefined) {
	      el.style.backgroundPosition = val;
	      return this;
	    } else {
	      val = el.style.backgroundPosition;
	      return val;
	    }
	  };
	  this.borderColor = function (val) {
	    if (val !== undefined) {
	      el.style.borderColor = val;
	      return this;
	    } else {
	      val = el.style.borderColor;
	      return val;
	    }
	  };
	  this.borderRadius = function (val) {
	    if (val !== undefined) {
	      el.style.borderRadius = val;
	      return this;
	    } else {
	      val = el.style.borderRadius;
	      return val;
	    }
	  };
	  this.borderWidth = function (val) {
	    if (val !== undefined) {
	      el.style.borderWidth = val;
	      return this;
	    } else {
	      val = el.style.borderWidth;
	      return val;
	    }
	  };
	  this.borderTop = function (val) {
	    if (val !== undefined) {
	      el.style.borderTop = val;
	      return this;
	    } else {
	      val = el.style.borderTop;
	      return val;
	    }
	  };
	  this.borderBottom = function (val) {
	    if (val !== undefined) {
	      el.style.borderBottom = val;
	      return this;
	    } else {
	      val = el.style.borderBottom;
	      return val;
	    }
	  };
	  this.borderRight = function (val) {
	    if (val !== undefined) {
	      el.style.borderRight = val;
	      return this;
	    } else {
	      val = el.style.borderRight;
	      return val;
	    }
	  };
	  this.borderLeft = function (val) {
	    if (val !== undefined) {
	      el.style.borderLeft = val;
	      return this;
	    } else {
	      val = el.style.borderLeft;
	      return val;
	    }
	  };
	  this.bottom = function (val) {
	    if (val !== undefined) {
	      el.style.bottom = val;
	      return this;
	    } else {
	      val = el.style.bottom;
	      return val;
	    }
	  };
	  this.boxShadow = function (val) {
	    if (val !== undefined) {
	      el.style.boxShadow = val;
	      return this;
	    } else {
	      val = el.style.boxShadow;
	      return val;
	    }
	  };
	  this.boxSizing = function (val) {
	    if (val !== undefined) {
	      el.style.boxSizing = val;
	      return this;
	    } else {
	      val = el.style.boxSizing;
	      return val;
	    }
	  };
	  this.clear = function (val) {
	    if (val !== undefined) {
	      el.style.clear = val;
	      return this;
	    } else {
	      val = el.style.clear;
	      return val;
	    }
	  };
	  this.color = function (val) {
	    if (val !== undefined) {
	      el.style.color = val;
	      return this;
	    } else {
	      val = el.style.color;
	      return val;
	    }
	  };
	  this.columns = function (val) {
	    if (val !== undefined) {
	      el.style.columns = val;
	      return this;
	    } else {
	      val = el.style.columns;
	      return val;
	    }
	  };
	  this.content = function (val) {
	    if (val !== undefined) {
	      el.style.content = val;
	      return this;
	    } else {
	      val = el.style.content;
	      return val;
	    }
	  };
	  this.cursor = function (val) {
	    if (val !== undefined) {
	      el.style.cursor = val;
	      return this;
	    } else {
	      val = el.style.cursor;
	      return val;
	    }
	  };
	  this.direction = function (val) {
	    if (val !== undefined) {
	      el.style.direction = val;
	      return this;
	    } else {
	      val = el.style.direction;
	      return val;
	    }
	  };
	  this.display = function (val) {
	    if (val !== undefined) {
	      el.style.display = val;
	      return this;
	    } else {
	      val = el.style.display;
	      return val;
	    }
	  };
	  this.cssFloat = function (val) {
	    if (val !== undefined) {
	      el.style.cssFloat = val;
	      return this;
	    } else {
	      val = el.style.cssFloat;
	      return val;
	    }
	  };
	  this.font = function (val) {
	    if (val !== undefined) {
	      el.style.font = val;
	      return this;
	    } else {
	      val = el.style.font;
	      return val;
	    }
	  };
	  this.fontFamily = function (val) {
	    if (val !== undefined) {
	      el.style.fontFamily = val;
	      return this;
	    } else {
	      val = el.style.fontFamily;
	      return val;
	    }
	  };
	  this.fontStyle = function (val) {
	    if (val !== undefined) {
	      el.style.fontStyle = val;
	      return this;
	    } else {
	      val = el.style.fontStyle;
	      return val;
	    }
	  };
	  this.fontSize = function (val) {
	    if (val !== undefined) {
	      el.style.fontSize = val;
	      return this;
	    } else {
	      val = el.style.fontSize;
	      return val;
	    }
	  };
	  this.fontWeight = function (val) {
	    if (val !== undefined) {
	      el.style.fontWeight = val;
	      return this;
	    } else {
	      val = el.style.fontWeight;
	      return val;
	    }
	  };
	  this.height = function (val) {
	    if (val !== undefined) {
	      el.style.height = val;
	      return this;
	    } else {
	      val = el.style.height;
	      return val;
	    }
	  };
	  this.lineHeight = function (val) {
	    if (val !== undefined) {
	      el.style.lineHeight = val;
	      return this;
	    } else {
	      val = el.style.lineHeight;
	      return val;
	    }
	  };
	  this.icon = function (val) {
	    if (val !== undefined) {
	      el.style.icon = val;
	      return this;
	    } else {
	      val = el.style.icon;
	      return val;
	    }
	  };
	  this.left = function (val) {
	    if (val !== undefined) {
	      el.style.left = val;
	      return this;
	    } else {
	      val = el.style.left;
	      return val;
	    }
	  };
	  this.listStyle = function (val) {
	    if (val !== undefined) {
	      el.style.listStyle = val;
	      return this;
	    } else {
	      val = el.style.listStyle;
	      return val;
	    }
	  };
	  this.margin = function (val) {
	    if (val !== undefined) {
	      el.style.margin = val;
	      return this;
	    } else {
	      val = el.style.margin;
	      return val;
	    }
	  };
	  this.marginRight = function (val) {
	    if (val !== undefined) {
	      el.style.marginRight = val;
	      return this;
	    } else {
	      val = el.style.marginRight;
	      return val;
	    }
	  };
	  this.marginLeft = function (val) {
	    if (val !== undefined) {
	      el.style.marginLeft = val;
	      return this;
	    } else {
	      val = el.style.marginLeft;
	      return val;
	    }
	  };
	  this.marginTop = function (val) {
	    if (val !== undefined) {
	      el.style.marginTop = val;
	      return this;
	    } else {
	      val = el.style.marginTop;
	      return val;
	    }
	  };
	  this.marginBottom = function (val) {
	    if (val !== undefined) {
	      el.style.marginBottom = val;
	      return this;
	    } else {
	      val = el.style.marginBottom;
	      return val;
	    }
	  };
	  this.maxHeight = function (val) {
	    if (val !== undefined) {
	      el.style.maxHeight = val;
	      return this;
	    } else {
	      val = el.style.maxHeight;
	      return val;
	    }
	  };
	  this.maxWidth = function (val) {
	    if (val !== undefined) {
	      el.style.maxWidth = val;
	      return this;
	    } else {
	      val = el.style.maxWidth;
	      return val;
	    }
	  };
	  this.minWidth = function (val) {
	    if (val !== undefined) {
	      el.style.minWidth = val;
	      return this;
	    } else {
	      val = el.style.minWidth;
	      return val;
	    }
	  };
	  this.minHeight = function (val) {
	    if (val !== undefined) {
	      el.style.minHeight = val;
	      return this;
	    } else {
	      val = el.style.minHeight;
	      return val;
	    }
	  };
	  this.opacity = function (val) {
	    if (val !== undefined) {
	      el.style.opacity = val;
	      return this;
	    } else {
	      val = el.style.opacity;
	      return val;
	    }
	  };
	  this.outline = function (val) {
	    if (val !== undefined) {
	      el.style.outline = val;
	      return this;
	    } else {
	      val = el.style.outline;
	      return val;
	    }
	  };
	  this.overflow = function (val) {
	    if (val !== undefined) {
	      el.style.overflow = val;
	      return this;
	    } else {
	      val = el.style.overflow;
	      return val;
	    }
	  };
	  this.overflowX = function (val) {
	    if (val !== undefined) {
	      el.style.overflowX = val;
	      return this;
	    } else {
	      val = el.style.overflowX;
	      return val;
	    }
	  };
	  this.overflowY = function (val) {
	    if (val !== undefined) {
	      el.style.overflowY = val;
	      return this;
	    } else {
	      val = el.style.overflowY;
	      return val;
	    }
	  };
	  this.padding = function (val) {
	    if (val !== undefined) {
	      el.style.padding = val;
	      return this;
	    } else {
	      val = el.style.padding;
	      return val;
	    }
	  };
	  this.paddingRight = function (val) {
	    if (val !== undefined) {
	      el.style.paddingRight = val;
	      return this;
	    } else {
	      val = el.style.paddingRight;
	      return val;
	    }
	  };
	  this.paddingLeft = function (val) {
	    if (val !== undefined) {
	      el.style.paddingLeft = val;
	      return this;
	    } else {
	      val = el.style.paddingLeft;
	      return val;
	    }
	  };
	  this.paddingTop = function (val) {
	    if (val !== undefined) {
	      el.style.paddingTop = val;
	      return this;
	    } else {
	      val = el.style.paddingTop;
	      return val;
	    }
	  };
	  this.paddingBottom = function (val) {
	    if (val !== undefined) {
	      el.style.paddingBottom = val;
	      return this;
	    } else {
	      val = el.style.paddingBottom;
	      return val;
	    }
	  };
	  this.position = function (val) {
	    if (val !== undefined) {
	      el.style.position = val;
	      return this;
	    } else {
	      val = el.style.position;
	      return val;
	    }
	  };
	  this.right = function (val) {
	    if (val !== undefined) {
	      el.style.right = val;
	      return this;
	    } else {
	      val = el.style.right;
	      return val;
	    }
	  };
	  this.top = function (val) {
	    if (val !== undefined) {
	      el.style.top = val;
	      return this;
	    } else {
	      val = el.style.top;
	      return val;
	    }
	  };
	  this.textAlign = function (val) {
	    if (val !== undefined) {
	      el.style.textAlign = val;
	      return this;
	    } else {
	      val = el.style.textAlign;
	      return val;
	    }
	  };
	  this.textDecoration = function (val) {
	    if (val !== undefined) {
	      el.style.textDecoration = val;
	      return this;
	    } else {
	      val = el.style.textDecoration;
	      return val;
	    }
	  };
	  this.textShadow = function (val) {
	    if (val !== undefined) {
	      el.style.textShadow = val;
	      return this;
	    } else {
	      val = el.style.textShadow;
	      return val;
	    }
	  };
	  this.verticalAlign = function (val) {
	    if (val !== undefined) {
	      el.style.verticalAlign = val;
	      return this;
	    } else {
	      val = el.style.verticalAlign;
	      return val;
	    }
	  };
	  this.visibility = function (val) {
	    if (val !== undefined) {
	      el.style.visibility = val;
	      return this;
	    } else {
	      val = el.style.visibility;
	      return val;
	    }
	  };
	  this.whiteSpace = function (val) {
	    if (val !== undefined) {
	      el.style.whiteSpace = val;
	      return this;
	    } else {
	      val = el.style.whiteSpace;
	      return val;
	    }
	  };
	  this.width = function (val) {
	    if (val !== undefined) {
	      el.style.width = val;
	      return this;
	    } else {
	      val = el.style.width;
	      return val;
	    }
	  };
	  this.wordSpacing = function (val) {
	    if (val !== undefined) {
	      el.style.wordSpacing = val;
	      return this;
	    } else {
	      val = el.style.wordSpacing;
	      return val;
	    }
	  };
	  this.zIndex = function (val) {
	    if (val !== undefined) {
	      el.style.zIndex = val;
	      return this;
	    } else {
	      val = el.style.zIndex;
	      return val;
	    }
	  };
	  this.alignContent = function (val) {
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
	  this.transformOrigin = function (val) {
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
	  this.transition = function (val) {
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
	  this.transitionDuration = function (val) {
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
	  this.animation = function (val) {
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
	  this.filter = function (val) {
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
	  this.flex = function (val) {
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
	  this.perspective = function (val) {
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
	  this.perspectiveOrigin = function (val) {
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
	  this.transitionDelay = function (val) {
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
	  this.core = function (func) {
	    var obj = arguments.length <= 1 || arguments[1] === undefined ? 'el' : arguments[1];

	    if (obj === 'style') func(this.el.style);else if (obj === 'el') func(this.el);else (0, _logger.err)('Invalid Argument.');

	    return this;
	  };

	  this.add = function (child) {
	    child = DOM.el(child);
	    this.el.appendChild(child);
	    return this;
	  };

	  this.children = function (s) {
	    if (s === 'all') {
	      var _count = this.el.childNodes;
	    } else {
	      var _count2 = this.el.children;
	    }
	    return count;
	  };

	  this.first = function (s) {
	    //TEST:30 Make sure this works.
	    var count = s === 'all' ? this.el.firstChild : this.el.firstElementChild;
	    return count;
	  };

	  this.id = function (val) {
	    if (val !== undefined) {
	      this.el.id = val;
	      return this;
	    } else {
	      val = this.el.id;
	      return val;
	    }
	  };

	  this.class = function (val) {
	    if (val !== undefined) {
	      this.el.className = val;
	      return this;
	    } else {
	      val = this.el.className;
	      return val;
	    }
	  };

	  this.x = function (elem) {
	    var child = DOM.el(elem);
	    this.el.removeChild(child);
	    return this;
	  };

	  this.xClass = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (cb !== null) {
	      cb();
	    }
	    this.el.className = '';
	    return this;
	  };

	  this.html = function (val) {
	    if (val !== undefined) {
	      this.el.innerHTML = val;
	      return this;
	    } else {
	      val = this.el.innerHTML;
	      return val;
	    }
	  };

	  this.text = function (val) {
	    if (val !== undefined) {
	      this.el.textContent = val;
	      return this;
	    } else {
	      val = this.el.textContent;
	      return val;
	    }
	  };

	  this.lang = function (val) {
	    if (val !== undefined) {
	      this.el.lang = val;
	      return this;
	    } else {
	      val = this.el.lang;
	      return val;
	    }
	  };

	  this.clone = function (deep) {
	    var node = this.el.cloneNode(deep);
	    return node;
	  };

	  this.sib = function(ord) {
	    var r;

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
	    var r;

	    if (ord === 'next') {
	      r = this.el.nextSibling;
	    } else if (ord === 'prev') {
	      r = this.el.previousSibling;
	    } else {
	      err('Invalid argument.');
	    }
	    return new Element(r);
	  };


	  this.value = function (val) {
	    if (val !== undefined) {
	      this.el.nodeValue = val;
	      return this;
	    } else {
	      val = this.el.nodeValue;
	      return val;
	    }
	  };

	  this.normalize = function () {
	    this.el.normalize();
	    return this;
	  };

	  this.toString = function () {
	    var r = this.el.toString();
	    return r;
	  };

	  this.tag = function () {
	    var r = this.el.tagName;
	    return r;
	  };

	  this.fromTop = function () {
	    //TODO
	    var r = this.el.offsetTop;

	    return r;
	  };

	  this.fromLeft = function () {
	    //TODO
	    var r = this.el.offsetLeft;

	    return r;
	  };

	  this.offset = function () {
	    //TODO
	    var off = {};

	    off.top = this.el.offsetTop;
	    off.left = this.el.offsetLeft;
	    off.height = this.el.offsetHeight;
	    off.width = this.el.offsetWidth;
	    off.parent = this.el.offsetParent;

	    return off;
	  };

	  this.scrolled = function () {
	    //TODO
	    var r = this.el.scrollTop;

	    return r;
	  };

	  this.scrollLeft = function () {
	    //TODO
	    var r = this.el.scrollLeft;

	    return r;
	  };

	  this.scrollHeight = function () {
	    //TODO
	    var r = this.el.scrollLeft;

	    return r;
	  };

	  this.scrollWidth = function () {
	    //TODO
	    var r = this.el.scrollWidth;

	    return r;
	  };

	  this.title = function (val) {
	    if (val !== undefined) {
	      this.el.title = val;
	      return this;
	    } else {
	      val = this.el.title;
	      return val;
	    }
	  };

	  this.attrib = function (attrib, val) {
	    //TEST:0 Make sure this works
	    var r = val !== undefined && val !== 'remove' ? (this.el.setAttribute(attrib, val), undefined) : attrib !== undefined && val !== 'remove' ? this.el.getAttribute(attrib) : (this.el.removeAttribute(attrib), undefined);
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

	  this.put = function (mom) {
	    DOM.put(this.el, mom);
	    return this;
	  };

	  this.ma = function () {
	    return new Element(this.el.parentNode);
	  };

	  this.fore = function (el) {
	    var ref = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    //TEST:20 Make sure this works.
	    ref === null ? el.parentNode.insertBefore(this.el, el) : this.el.parentNode.insertBefore(el, this.el);

	    return this;
	  };

	  this.aft = function (el) {
	    var ref = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    //TEST:10 Make sure this works.
	    ref === null ? el.parentNode.insertBefore(this.el, el.nextElementSibling) : this.el.parentNode.insertBefore(el, this.el.nextElementSibling);

	    return this;
	  };

	  this.on = function (ev, callback) {
	    if (document.addEventListener) {
	      events.on(ev, this.el, callback);
	    } else {
	      events.onIE(ev, this.el, callback);
	    }
	    return this;
	  };

	  this.off = function (ev, callback) {
	    if (document.addEventListener) {
	      events.off(ev, this.el, callback);
	    } else {
	      events.offIE(ev, this.el, callback);
	    }
	    return this;
	  };

	  this.once = function (ev, callback) {
	    if (document.addEventListener) {
	      events.once(ev, this.el, callback);
	    } else {
	      events.onceIE(ev, this.el, callback);
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

	  this.size = function (height, width) {
	    this.el.style.height = height;
	    this.el.style.width = width;

	    return this;
	  };

	  this.show = function () {
	    var disp = arguments.length <= 0 || arguments[0] === undefined ? 'block' : arguments[0];

	    this.el.style.display = disp;

	    return this;
	  };

	  this.hide = function () {
	    this.el.style.display = 'none';

	    return this;
	  };

	  this.viz = function () {
	    var disp = arguments.length <= 0 || arguments[0] === undefined ? 'block' : arguments[0];

	    if (this.el.style.display === 'none') {
	      this.el.style.display = disp;
	    } else {
	      this.el.style.display = 'none';
	    }
	  };

	  //---------Event Methods-----------------//

	  this.blur = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.blur(this.el, cb);
	    } else {
	      events.blurIE(this.el, cb);
	    }
	    return this;
	  };

	  this.click = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.click(this.el, cb);
	    } else {
	      events.clickIE(this.el, cb);
	    }
	    return this;
	  };

	  this.dblClick = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.dblClick(this.el, cb);
	    } else {
	      events.dblClickIE(this.el, cb);
	    }
	    return this;
	  };

	  this.error = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.error(this.el, cb);
	    } else {
	      events.errorIE(this.el, cb);
	    }
	    return this;
	  };

	  this.focus = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.focus(this.el, cb);
	    } else {
	      events.focusIE(this.el, cb);
	    }
	    return this;
	  };

	  this.focusIn = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.focusIn(this.el, cb);
	    } else {
	      events.focusInIE(this.el, cb);
	    }
	    return this;
	  };

	  this.focusOut = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.focusOut(this.el, cb);
	    } else {
	      events.focusOut(this.el, cb);
	    }
	    return this;
	  };

	  this.keyUp = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.keyUp(this.el, cb);
	    } else {
	      events.keyUpIE(this.el, cb);
	    }
	    return this;
	  };

	  this.keyDown = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.keyDown(this.el, cb);
	    } else {
	      events.keyDownIE(this.el, cb);
	    }
	    return this;
	  };

	  this.load = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.load(this.el, cb);
	    } else {
	      events.loadIE(this.el, cb);
	    }
	    return this;
	  };

	  this.unLoad = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.unLoad(this.el, cb);
	    } else {
	      events.unLoadIE(this.el, cb);
	    }
	    return this;
	  };

	  this.mouse = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.mouse(this.el, cb);
	    } else {
	      events.mouseIE(this.el, cb);
	    }
	    return this;
	  };

	  this.resize = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.resize(this.el, cb);
	    } else {
	      events.resizeIE(this.el, cb);
	    }
	    return this;
	  };

	  this.scroll = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.scroll(this.el, cb);
	    } else {
	      events.scrollIE(this.el, cb);
	    }
	    return this;
	  };

	  this.select = function () {
	    var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    if (this.el.addEventListener) {
	      events.select(this.el, cb);
	    } else {
	      events.selectIE(this.el, cb);
	    }
	    return this;
	  };

	  /////// Experimental Methods ////////

	  this.only = function (num, func) {
	    var arr = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    (0, _logger.log)(typeof onlyArr === 'undefined' ? 'undefined' : _typeof(onlyArr), 'yellow');

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
	      (0, _logger.log)(eachCount, ['red', 'bold']);
	    } else {
	      (0, _logger.log)(eachCount, ['blue', 'bold']);
	    }

	    // if (eachCount === onlyArr.length) {
	    //   eachCount = '';
	    // }
	    (0, _logger.log)(eachCount, 'white');
	    return this;
	  };
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	logger.js

	This file contains the code for the various logging functions
	of the library.

	Author: Eric James Foster
	License: ISC
	*/

	var colors = __webpack_require__(5);
	//  require('babel-polyfill');

	//DONE:90 Add second argument for log ID purposes, figure best way to approach this.
	//Console.log alias function.                                                  //DONE:140 Make sure date is logging properly.
	var log = function log(text, style, tyme) {
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
	  var stan = hours >= 13 ? hours - 12 : hours; //DONE:40 Either fix singular hours, or choose alternate.
	  if (stan === 0) {
	    hours = stan + 12;
	  } else {
	    hours = stan;
	  }
	  time = hours + ':' + mins + ':' + secs + abbr;

	  var t = tym ? time : '';

	  if (typeof document === 'undefined') {
	    return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
	  } else {
	    var color = colr,
	        bgColor = styl,
	        css = 'background: ' + bgColor + '; color: ' + color;

	    return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
	  }
	};

	//Console.error alias function.
	var err = function err(text, tyme) {
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
	    return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
	  } else {
	    var color = colr,
	        bgColor = '',
	        css = 'background: ' + bgColor + '; color: ' + color;

	    return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
	  }
	};

	//Console.info alias function.
	var info = function info(text, tyme) {
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
	    return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
	  } else {
	    var color = colr,
	        bgColor = '',
	        css = 'background: ' + bgColor + '; color: ' + color;

	    return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
	  }
	};

	//Console.warn alias function.
	var warn = function warn(text, tyme) {
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
	    return console.log(colors(text, { fg: colr, style: styl }) + '   '.repeat(10) + t);
	  } else {
	    var color = colr,
	        bgColor = '',
	        css = 'background: ' + bgColor + '; color: ' + color;

	    return console.log('%c' + text + '%s', css, '   '.repeat(10) + t);
	  }
	};

	module.exports = {
	  log: log,
	  err: err,
	  info: info,
	  warn: warn
	};

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _logger = __webpack_require__(4);

	var _utilities = __webpack_require__(7);

	var utils = _interopRequireWildcard(_utilities);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// require('babel-polyfill');

	//DONE:10 Complete X-Browser support for these 3 functions.

	/*
	events.js

	This file contains code for the librarys' convenience EventListener
	alias functions.

	Author: Eric James Foster
	License: ISC
	*/

	var go = function go(cb) {
	  return document.addEventListener('DOMContentLoaded', cb());
	};

	var goIE = function goIE(cb) {
	  return document.attachEvent('onDOMContentLoaded', cb());
	};

	//Function for setting event listeners.
	var on = function on(event, el, callback) {
	  //TODO: allow arg 'el' to be an array.
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

	var onIE = function onIE(event, el, callback) {
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
	var off = function off(event, el, callback) {
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
	var offIE = function offIE(event, el, callback) {
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

	var once = function once(event, el, callback) {
	  //DONE:60 Finish once function.
	  //DONE:80 Test once function.
	  var callBack = function callBack() {
	    callback();
	    el.removeEventListener(event, callBack);
	  };

	  el = utils.queryDOM(el);
	  (0, _logger.log)(el, 'red');
	  return el.addEventListener(event, callBack);
	};

	var onceIE = function onceIE(event, el, callback) {
	  //DONE:90 Test onceIE function.
	  var callBack = function callBack() {
	    callback();
	    el.detachEvent('on' + event, callBack);
	  };

	  el = utils.queryDOM(el);

	  return el.attachEvent('on' + event, callBack);
	};

	function spark(evt, el) {

	  var ev = new MouseEvent(evt, {
	    bubbles: true,
	    cancelable: true,
	    view: window
	  });
	  el.dispatchEvent(ev);
	}
	function sparkIE(evt, el) {
	  var ev = document.createEventObject();
	  l = document.querySelector(el);

	  evt.eventType = 'on' + evt;
	  el.fireEvent('on' + evt, ev);
	}

	function blur(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('blur', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('blur', cb);
	  }
	}
	function blurIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onblur';
	    el.fireEvent('on' + 'blur', evt);
	  } else {
	    el.attachEvent('on' + 'blur', cb);
	  }
	}

	function click(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('click', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('click', cb);
	  }
	}

	function clickIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'on' + 'click';
	    el.fireEvent('on' + 'click', evt);
	  } else {
	    el.attachEvent('on' + 'click', cb);
	  }
	}

	function dblClick(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('dblclick', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('dblclick', cb);
	  }
	}
	function dblClickIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'ondblclick';
	    el.fireEvent('on' + 'dblclick', evt);
	  } else {
	    el.attachEvent('on' + 'dblclick', cb);
	  }
	}

	function error(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('error', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('error', cb);
	  }
	}
	function errorIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onerror';
	    el.fireEvent('on' + 'error', evt);
	  } else {
	    el.attachEvent('on' + 'error', cb);
	  }
	}

	function focus(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('focus', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('focus', cb);
	  }
	}
	function focusIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onfocus';
	    el.fireEvent('on' + 'focus', evt);
	  } else {
	    el.attachEvent('on' + 'focus', cb);
	  }
	}

	function focusIn(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('focusin', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('focusin', cb);
	  }
	}
	function focusInIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onfocusin';
	    el.fireEvent('on' + 'focusin', evt);
	  } else {
	    el.attachEvent('on' + 'focusin', cb);
	  }
	}

	function focusOut(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('focusout', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('focusout', cb);
	  }
	}
	function focusOutIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onfocusout';
	    el.fireEvent('on' + 'focusout', evt);
	  } else {
	    el.attachEvent('on' + 'focusout', cb);
	  }
	}

	function keyUp(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('keyup', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('keyup', cb);
	  }
	}
	function keyUpIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onkeyup';
	    el.fireEvent('on' + 'keyup', evt);
	  } else {
	    el.attachEvent('on' + 'keyup', cb);
	  }
	}

	function keyDown(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('keydown', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('keydown', cb);
	  }
	}
	function keyDownIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onkeydown';
	    el.fireEvent('on' + 'keydown', evt);
	  } else {
	    el.attachEvent('on' + 'keydown', cb);
	  }
	}

	function load(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('load', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('load', cb);
	  }
	}
	function loadIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onload';
	    el.fireEvent('on' + 'load', evt);
	  } else {
	    el.attachEvent('on' + 'load', cb);
	  }
	}

	function unLoad(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('unload', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('unload', cb);
	  }
	}
	function unLoadIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onunload';
	    el.fireEvent('on' + 'unload', evt);
	  } else {
	    el.attachEvent('on' + 'unload', cb);
	  }
	}

	function mouse(sufx, el) {
	  var cb = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	  //sufx is string, options are 'up', 'down', 'enter', 'leave', 'over', 'out' and 'move'.

	  if (cb === null) {
	    var evt = new MouseEvent('mouse' + sufx, {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('mouse' + sufx, cb);
	  }
	}
	function mouseIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onmouse' + sufx;
	    el.fireEvent('on' + 'mouse' + sufx, evt);
	  } else {
	    el.attachEvent('on' + 'mouse' + sufx, cb);
	  }
	}

	function reSize(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('resize', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('resize', cb);
	  }
	}
	function reSizeIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onresize';
	    el.fireEvent('on' + 'resize', evt);
	  } else {
	    el.attachEvent('on' + 'resize', cb);
	  }
	}

	function scroll(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('scroll', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('scroll', cb);
	  }
	}
	function scrollIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onscroll';
	    el.fireEvent('on' + 'scroll', evt);
	  } else {
	    el.attachEvent('on' + 'scroll', cb);
	  }
	}

	function select(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = new MouseEvent('select', {
	      bubbles: true,
	      cancelable: true,
	      view: window
	    });
	    el.dispatchEvent(evt);
	  } else {
	    el.addEventListener('select', cb);
	  }
	}
	function selectIE(el) {
	  var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


	  if (cb === null) {
	    var evt = document.createEventObject();

	    evt.eventType = 'onselect';
	    el.fireEvent('on' + 'select', evt);
	  } else {
	    el.attachEvent('on' + 'select', cb);
	  }
	}

	module.exports = {
	  blur: blur,
	  blurIE: blurIE,
	  click: click,
	  clickIE: clickIE,
	  dblClick: dblClick,
	  dblClickIE: dblClickIE,
	  error: error,
	  errorIE: errorIE,
	  focus: focus,
	  focusIE: focusIE,
	  focusIn: focusIn,
	  focusInIE: focusInIE,
	  focusOut: focusOut,
	  focusOutIE: focusOutIE,
	  keyUp: keyUp,
	  keyUpIE: keyUpIE,
	  keyDown: keyDown,
	  keyDownIE: keyDownIE,
	  load: load,
	  loadIE: loadIE,
	  unLoad: unLoad,
	  unLoadIE: unLoadIE,
	  mouse: mouse,
	  mouseIE: mouseIE,
	  reSize: reSize,
	  reSizeIE: reSizeIE,
	  scroll: scroll,
	  scrollIE: scrollIE,
	  select: select,
	  selectIE: selectIE,
	  spark: spark,
	  sparkIE: sparkIE,
	  go: go,
	  goIE: goIE,
	  on: on,
	  onIE: onIE,
	  off: off,
	  offIE: offIE,
	  once: once,
	  onceIE: onceIE
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _logger = __webpack_require__(4);

	// require('babel-polyfill');

	//TODO:20 browser detection functionality, noop(), merge(), toggle().

	/*This function combines querySelector and querySelectorAll, and becomes a noop if 'el' is a variable. There is an optional 2nd argument 'mod', that
	accepts the string 'all' to modify behaviour of the function. By default, 'mod' is null. If the string 'all' is passed as the 2nd argument, the function
	will use querySelectorAll() instead of querySelector(), meaning an array will be returned if possible. */
	var queryDOM = function queryDOM(el) {


	  var lm = void 0,
	      lms = [];

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
	      // console.log(lm, 'yellow');
	      if (lm.length <= 1) {
	        lm = undefined;
	        lm = document.querySelector(el);
	        // console.log(lm, 'red');
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

	/*
	utilities.js

	This file contains various functions for the library, either public or not,
	that don't fit into any other module.

	Author: Eric James Foster
	License: ISC
	*/

	var proto = function proto(constructer, superConstructer) {
	  construct.prototype = Object.create(superConstructer.prototype);
	  constructer.prototype.constructor = constructer;
	  return constructer;
	};

	/*This convenience function sets imported module function names as global variables, so that
	the module variable doesn't need to preface every function.*/
	var functions = function functions(funcs, module) {
	  //TEST:110 Test this with other node_modules.
	  var context = module || this;

	  if (Array.isArray(funcs)) {
	    funcs.forEach(function (func) {
	      var evil = new Function('window.' + func + ' = ' + 'this.' + func + ';');
	      evil.call(context);
	    }, context);
	  } else {
	    (function () {
	      var evil = new Function('window.' + funcs + ' = ' + 'this.' + funcs + ';');
	      evil.call(context);
	    }).apply(context);
	  }
	};

	//This practically useless function will lock up the browser for a preset amount of time.
	var sleep = function sleep(milliseconds) {
	  var start = new Date().getTime();
	  while (true) {
	    if (new Date().getTime() - start > milliseconds) {
	      break;
	    }
	  }
	};

	//This function will alternate function calls depending on the value of a global flag.
	function shifter(onFunc, offFunc) {
	  window.toggleFlag = true;

	  return function () {
	    if (toggleFlag) {
	      onFunc();
	      toggleFlag = false;
	    } else {
	      offFunc();
	      toggleFlag = true;
	    }
	  };
	};

	module.exports = {
	  queryDOM: queryDOM,
	  functions: functions,
	  shifter: shifter,
	  sleep: sleep,
	  proto: proto
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _element = __webpack_require__(3);

	var _element2 = _interopRequireDefault(_element);

	var _logger = __webpack_require__(4);

	var _utilities = __webpack_require__(7);

	var utils = _interopRequireWildcard(_utilities);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require('babel-polyfill');

	//TODO:0 Check out querySelector() method, see if it helps out.
	//DOING:0 go() DOMREady function, Class toggling method, aft(), fore(), size(), show(), hide().

	// ------------------- This function is now run straight from index.js---------------------------//
	//This function queries the dom, getting one element for each query (i.e. class/tags), creates
	//an Element object with it and returns it, so that it may be easily styled.
	// var dom = function(el) {
	//   el = utils.queryDOM(el);
	//
	//   return new Element(el);
	// };

	/*function for insterting template literals into the DOM.

	bones(`

	<html>
	  <head></head>
	  <body></body>
	</html>

	`);

	*/
	var bones = function bones(tempLit) {
	  var elem = arguments.length <= 1 || arguments[1] === undefined ? 'body' : arguments[1];

	  (0, _logger.log)('hello', 'yellow');
	  elem = el(elem);
	  elem.innerHTML += tempLit;

	  return elem;
	};

	//Create element alias function.

	/*
	DOM.js

	This file contains the code for the elements.js librarys' DOM manipulation
	convenience functions.

	Author: Eric James Foster
	License: ISC
	*/

	var make = function make(l, tag) {
	  var t = tag || 'div',
	      el = document.createElement(t);

	  if (l[0] === '#') {
	    l = l.slice(1);
	    el.id = l;
	    return new _element2.default(el);
	  } else if (l[0] === '.') {
	    l = l.slice(1);
	    el.className = l;
	    return new _element2.default(el);
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
	var put = function put(el, mom) {
	  //DONE:120 Make sure this works.
	  if (typeof el === 'string') {
	    //IDEA:0 If el doesn't exist, create it and give it id/class.
	    if (el[0] === '#') {
	      el = el.slice(1);
	      if (typeof mom === 'string') {
	        if (mom[0] === '#') {
	          //TEST:40 Test this function thoroughly.
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
	var kill = function kill(el) {
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

	var fore = function fore(ref, elem) {
	  return el(ref).parentNode.insertBefore(el(elem), el(ref));
	};

	//DOM function for inserting an element after a specified node.
	var aft = function aft(ref, elem) {
	  ref = el(ref);
	  ref = ref.nextElementSibling;

	  return ref.parentNode.insertBefore(el(elem), ref);
	};

	//DOM function for showing an element, or a list of elements.
	var show = function show(elem) {
	  var disp = arguments.length <= 1 || arguments[1] === undefined ? 'block' : arguments[1];

	  elem = el(elem);
	  if (Array.isArray(elem)) {
	    elem.forEach(function (l) {
	      l.style.display = disp;
	    });
	  } else {
	    elem.style.display = disp;
	  }
	};

	//DOM function for hiding an element, or a list of elements.
	var hide = function hide(elem) {
	  elem = el(elem);

	  if (Array.isArray(elem)) {
	    elem.forEach(function (l) {
	      l.style.display = 'none';
	    });
	  } else {
	    elem.style.display = 'none';
	  }
	};

	//DOM function for setting height and width of an element. 's' is an object, with height and width as keys.
	var size = function size(elem, h, w) {
	  elem = el(elem);

	  elem.style.height = h;
	  elem.style.width = w;
	  return elem;
	};

	//function clones given node.ddeep is a boolean, if true, clone will include all descendants as well as node and its' attributes.
	var clone = function clone(elem, deep) {
	  var node = elem.cloneNode(deep);
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

	module.exports = {
	  make: make,
	  bones: bones,
	  clone: clone,
	  // all: all,
	  put: put,
	  kill: kill,
	  fore: fore,
	  aft: aft,
	  show: show,
	  hide: hide,
	  size: size
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _logger = __webpack_require__(4);

	// require('babel-polyfill');

	//DONE:20 Complete X-Browser support for both functions.

	//This is an alias function for XMLHttpRequests.
	var xhr = function xhr(url, fd, method) {
	  //DONE:80 Perfect this function.
	  var formData;
	  //DONE:100 Build FormData in function from object that user passes as an argument.
	  if (fd) {
	    //DONE:70 Need async ajax function
	    if (Object.getOwnPropertyNames(fd).length === 0) {
	      formData = fd; //log(Object.getOwnPropertyNames(fd).length);
	    } else {
	        formData = new FormData();
	        for (var key in fd) {
	          //TEST:50 Test this function.
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

	  var ajax = function ajax() {
	    var ajax = new XMLHttpRequest();

	    ajax.onloadend = function () {
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
	/*
	httpRequests.js

	This file contains code for 2 HTTP request convenience functions, 1 synchronous,
	and the other asynchronous.

	Author: Eric James Foster
	License: ISC
	*/

	//TODO:30 reWrite 'await' version of xhr().

	var ajax = function ajax(url, fd, callback, method) {
	  //TEST:60 Test this function.
	  var formData;

	  if (fd) {
	    if (Object.getOwnPropertyNames(fd).length === 0) {
	      formData = fd; //log(Object.getOwnPropertyNames(fd).length);
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

	  req.onloadend = function () {
	    if (req.status === 200) {
	      var response = this.response;
	      callback(response);
	    }
	  };
	  req.open(m, url);
	  req.send(formData);
	};

	module.exports = {
	  ajax: ajax,
	  xhr: xhr
	};

/***/ },
/* 10 */
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