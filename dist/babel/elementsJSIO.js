"use strict";

var _sideNavControl = require("./sideNavControl.js");

var SNC = _interopRequireWildcard(_sideNavControl);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//elementsJS imports

///-------Begin Module requires---------///
var _$ = require("elementsJS")._$;
/*
elementsJSIO.js
JavaScript file for the elementsJS project site.

Author: Eric James Foster
License: MIT
https://rawgit.com/ejames9/elementsJS/gh-pages/html/docsMenu.html
https://cdn.rawgit.com/ejames9/elementsJS/5f9f194/html/docsMenu.html
*/

//<<=================Imports======================>>
//es6 import

var dom = require("elementsJS").dom;
var make = require("elementsJS").make;
///|------------------------------------|//

var elementsJS = require("elementsJS");
var imports = elementsJS.imports;
var element = elementsJS.element;
var hasAncestor = elementsJS.hasAncestor;
var go = elementsJS.go;
var el = elementsJS.el;
var log = elementsJS.log;
var err = elementsJS.err;
var info = elementsJS.info;
var url = elementsJS.url;
var ajax = elementsJS.ajax;
var on = elementsJS.on;
var click = elementsJS.click;
var mouse = elementsJS.mouse;
var show = elementsJS.show;
var hide = elementsJS.hide;
var scroll = elementsJS.scroll;
var __ = elementsJS.__;

var marked = require("marked");

var hljs = require("highlight.js");

var browser = require("bowser");

///End Module requires///

//<<===============================>>

//globals
var commit = '5f9f194';
var rawGit = 'https://rawgit.com/ejames9/elementsJS/gh-pages/';
var rawGitCDN = 'https://cdn.rawgit.com/ejames9/elementsJS/' + commit + '/';

var docsMenu = 'html/docsMenu.html';
var mdUrl = 'md/elementsJSIODocs.md';

var markDown, offSets;

//main page click flags.
var col1ClickFlag = true;
var col2ClickFlag = true;
var col3ClickFlag = true;
var highLitElements = [];

//Necessary code to add deep links to documentation.
function addChainLinkIcons() {
  console.log(dom('#docsMain h1, #docsMain h2'));
  //Add link icons to all page links in documentation.
  dom('h1 a, h2 a').every(function (element) {
    element.html('<i id="faLink" class="fa fa-link"></i>', '+').href('#' + element.id()).mouse('over', function () {
      element.last().viz('visible');
    }).mouse('out', function () {
      element.last().viz('hidden');
    });
  });
  //Make adustments to fa-link icons.
  var elem0 = _$('.fa-link') ? dom('.fa-link') : make('.fa-link').put("body");
  elem0.every(function (element) {
    element.viz('hidden').color('#52218A').turn(90);
  });
  return;
}

//Custom fork me ribbon.
function forkMeBaby() {
  //Add forkme ribbon html.
  __("\n    <a id='fmLink'>\n      <div id='forkMe'>\n        <p>Fork Me on GitHub!</p>\n      </div>\n    </a>\n\n  ", '.jumbotron');
  //Make adjustments to #fmLink.
  var elem1 = _$('#fmLink') ? dom('#fmLink') : make('#fmLink').put("body");
  elem1.fore('#logo').href('https://github.com/ejames9/elementsJS');
  return;
}

//This function highlights all of the blocks in the docs, after the insertDocs function is completed.
function highLightCode() {
  console.log(dom('pre code'));
  //Get access to all blocks......
  dom('pre code').every(function (element) {
    //highlight blocks.
    hljs.highlightBlock(element.el);
  });
  return;
}

//Documentation page change function
function initDocsPage() {
  var elem = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

  var hash, hashSS;
  //Grab side-bar/documentation template  html from github with rawgit cdn, insert side-bar/template, and docs into their containers.
  ajax(url(rawGit, docsMenu), null, function (r) {
    var elem2 = _$('#content') ? dom('#content') : make('#content').put("body");
    elem2.html(r);
    var elem3 = _$('#docsMain') ? dom('#docsMain') : make('#docsMain').put("body");
    elem3.html(marked(markDown));
    //Call callback functions.
    forkMeBaby();
    highLightCode();
    addChainLinkIcons();

    SNC.mouseOutController();
    SNC.mouseOverController();
    SNC.sideNavController();

    dom('#sideNav li a').every(function (element) {
      element.class('sNavLink', '+');
    });
    if (null !== elem) {

      offSets = SNC.getOffSets();
      hash = String(element(elem).hash());
      hashSS = hash.substring(1, hash.length);

      if (browser.gecko) {

        var elem4 = _$("html") ? dom("html") : make(".html1", "html").put("body");
        elem4.scrolled(offSets[hashSS] + 470);
      } else if (browser.webkit) {

        var elem5 = _$("body") ? dom("body") : make(".body1", "body").put("body");
        elem5.scrolled(offSets[hashSS] + 470);
      }
    } else {

      if (browser.gecko) {

        var elem6 = _$("html") ? dom("html") : make(".html1", "html").put("body");
        elem6.scrolled(0);
      } else if (browser.webkit) {

        var elem7 = _$("body") ? dom("body") : make(".body1", "body").put("body");
        elem7.scrolled(0);
      }
    }
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

function clickController() {
  //Click Event Delegation ============================>>
  var _re = /sNavLink/,
      html = el('html'),
      hash,
      hashSS;

  click(html, function (e) {
    console.log(e.target.className);
    switch (3 + 6 === 9) {
      case e.target === el('#install-info'):
        toggleNPMBar();
        break;
      case e.target === el('#api-butn'):
        initDocsPage();
        break;
      case e.target.className === 'dropDown' || e.target.className === 'navMenu':
        e.preventDefault();

        initDocsPage(e.target);

        dom('[class~=active]').class('active', '-');

        element(e.target).ma().class('active', '+');
        break;
      case e.target.tagName === 'I':
        e.preventDefault();

        offSets = SNC.getOffSets(), hash = String(dom('#' + e.target.parentNode.id).hash());
        hashSS = hash.substring(1, hash.length);

        if (browser.gecko) {
          log('gecko', 'red');

          var elem8 = _$("html") ? dom("html") : make(".html1", "html").put("body");
          elem8.scrolled(offSets[hashSS] + 470);
        } else if (browser.webkit) {
          log('webkit', 'blue');

          var elem9 = _$("body") ? dom("body") : make(".body1", "body").put("body");
          elem9.scrolled(offSets[hashSS] + 470);
        }
        break;
      case e.target.tagName === 'CODE':
        e.preventDefault();

        offSets = SNC.getOffSets(), hash = String(dom('#' + e.target.parentNode.id).hash());
        hashSS = hash.substring(1, hash.length);

        if (browser.gecko) {
          log('gecko', 'red');

          var elem10 = _$("html") ? dom("html") : make(".html1", "html").put("body");
          elem10.scrolled(offSets[hashSS] + 470);
        } else if (browser.webkit) {
          log('webkit', 'blue');

          var elem11 = _$("body") ? dom("body") : make(".body1", "body").put("body");
          elem11.scrolled(offSets[hashSS] + 470);
        }
        break;
      case e.target.tagName === 'A':
        log(e.target.tagName, 'red');
        e.preventDefault();

        offSets = SNC.getOffSets();
        hash = String(element(e.target).hash());
        hashSS = hash.substring(1, hash.length);

        info(hashSS);
        info(offSets[hashSS]);

        if (browser.gecko) {
          log('gecko', 'red');

          var elem12 = _$("html") ? dom("html") : make(".html1", "html").put("body");
          elem12.scrolled(offSets[hashSS] + 470);
        } else if (browser.webkit) {
          log('webkit', 'blue');

          var elem13 = _$("body") ? dom("body") : make(".body1", "body").put("body");
          elem13.scrolled(offSets[hashSS] + 470);
        }
        break;
      case e.target.id === 'col1' || hasAncestor(e.target, '#col1'):
        if (col1ClickFlag) {
          dom('#col1 h2, #col1 h4, #col1 p, #col1 ul li').every(function (child) {
            child.color('rgb(255, 138, 34)');
          });
          col1ClickFlag = false;
        } else {
          dom('#col1 h2, #col1 h4, #col1 p, #col1 ul li').every(function (child) {
            child.color('');
          });
          col1ClickFlag = true;
        }
        break;
      case e.target.id === 'col2' || hasAncestor(e.target, '#col2'):
        if (col2ClickFlag) {
          dom('#col2 h2, #col2 h4, #col2 p, #col2 ul li').every(function (child) {
            child.color('rgb(255, 138, 34)');
          });
          col2ClickFlag = false;
        } else {
          dom('#col2 h2, #col2 h4, #col2 p, #col2 ul li').every(function (child) {
            child.color('');
          });
          col2ClickFlag = true;
        }
        break;
      case e.target.id === 'col3' || hasAncestor(e.target, '#col3'):
        if (col3ClickFlag) {
          dom('#col3 h2, #col3 h4, #col3 p, #col3 ul li').every(function (child) {
            child.color('rgb(255, 138, 34)');
          });
          col3ClickFlag = false;
        } else {
          dom('#col3 h2, #col3 h4, #col3 p, #col3 ul li').every(function (child) {
            child.color('');
          });
          col3ClickFlag = true;
        }
        break;
      case e.target.tagName === 'P' || e.target.tagName === 'LI':
        if (highLitElements.indexOf(e.target) === -1) {
          highLitElements.push(e.target);
        } else {
          var index = highLitElements.indexOf(e.target);
          highLitElements.splice(index, 1);

          element(e.target).color('');
        }
        element(highLitElements).every(function (element) {
          element.color('rgb(255, 138, 34)');
        });
        break;
      case e.target.tagName === 'H1' || e.target.tagName === 'H2' || e.target.tagName === 'H3' || e.target.tagName === 'H4':
        if (highLitElements.indexOf(e.target) === -1) {
          highLitElements.push(e.target);
        } else {
          var _index = highLitElements.indexOf(e.target);
          highLitElements.splice(_index, 1);

          element(e.target).color('');
        }
        element(highLitElements).every(function (element) {
          element.color('rgb(255, 138, 34)');
        });
        break;
      default:
        var npmBar = el('#npm-bar');
        if (npmBar !== null) {
          if (npmBar.style.display !== 'none') {
            npmBar.style.display = 'none';
          }
        }
    }
  });
}

//Initialization code to be run after DOM content is loaded.
go(function () {
  //initialize ace code editor
  var editor1 = ace.edit("editor1");
  editor1.setTheme("ace/theme/elementsJSIO");
  editor1.renderer.setShowGutter(false);
  editor1.getSession().setMode("ace/mode/javascript");

  //Set default display setting for the bower/npm installation bar.
  var elem14 = _$('#npm-bar') ? dom('#npm-bar') : make('#npm-bar').put("body");
  elem14.display('none');
  //Initialize the click controller.
  clickController();
  //Download the documentation markdown.
  getMarkDown();
  //Create/install custom fork me ribbon.
  forkMeBaby();
});