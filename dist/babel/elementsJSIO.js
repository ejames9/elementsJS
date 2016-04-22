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
var go = elementsJS.go;
var el = elementsJS.el;
var log = elementsJS.log;
var warn = elementsJS.warn;
var url = elementsJS.url;
var ajax = elementsJS.ajax;
var on = elementsJS.on;
var click = elementsJS.click;
var show = elementsJS.show;
var hide = elementsJS.hide;
var scroll = elementsJS.scroll;
var __ = elementsJS.__;

var marked = require("marked");

var hljs = require("highlight.js");

///End Module requires///

//<<===============================>>

//globals
var commit = '5f9f194';
var rawGit = 'https://rawgit.com/ejames9/elementsJS/gh-pages/';
var rawGitCDN = 'https://cdn.rawgit.com/ejames9/elementsJS/' + commit + '/';

var docsMenu = 'html/docsMenu.html';
var mdUrl = 'md/elementsJSIODocs.md';

var markDown, offSets;

//Necessary code to add deep links to documentation.
function addChainLinkIcons() {
  console.log(dom('#docsMain h1, #docsMain h2'));
  //Add link icons to all page links in documentation.
  dom('h1 a, h2 a').every(function (element) {
    element.html('<i class="fa fa-link"></i>', '+').href('#' + element.id()).mouse('over', function () {
      element.last().viz('visible');
    }).mouse('out', function () {
      element.last().viz('hidden');
    });
  });

  var elem0 = _$('.fa-link') ? dom('.fa-link') : make('.fa-link').put("body");
  elem0.every(function (element) {
    element.viz('hidden').color('#52218A').turn(90);
  });
  return;
};

//Custom fork me ribbon.
function forkMeBaby() {

  __("\n    <a id='fmLink'>\n      <div id='forkMe'>\n        <p>Fork Me on GitHub!</p>\n      </div>\n    </a>\n\n  ", '.jumbotron');

  var elem1 = _$('#fmLink') ? dom('#fmLink') : make('#fmLink').put("body");
  elem1.fore('#logo').href('https://github.com/ejames9/elementsJS');

  return;
}

//This function highlights all of the <code> blocks in the docs, after the insertDocs function is completed.
function highLightCode() {
  console.log(dom('pre code'));
  //Get access to all <pre><code> blocks......
  dom('pre code').every(function (element) {
    //highlight blocks.
    hljs.highlightBlock(element.el);
  });
  return;
}

//Documentation page change function
function insertDocs(cb) {
  //Grab side-bar/documentation template  html from github with rawgit cdn, insert side-bar/template, and docs into their containers.
  ajax(url(rawGit, docsMenu), null, function (r) {
    var elem2 = _$('#content') ? dom('#content') : make('#content').put("body");
    elem2.html(r);
    var elem3 = _$('#docsMain') ? dom('#docsMain') : make('#docsMain').put("body");
    elem3.html(marked(markDown));

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

function iDCallback() {
  forkMeBaby();
  highLightCode();
  addChainLinkIcons();
  SNC.sideNavController();

  dom('#sideNav li a').every(function (element) {
    element.class('sNavLink', '+');
  });
  offSets = SNC.getOffSets();

  for (var el in offSets) {
    log('id: ' + el, 'red');
    log('offSet: ' + offSets[el], ['red', 'blue']);
  }
}

function clickController() {
  //Click Event Delegation ============================>>
  var _re = /sNavLink/,
      html = el('html');

  click(html, function (e) {
    log(e.target.tagName === 'CODE' || e.target.tagName === 'A', ['red', 'blue']);
    console.log(e.target.parentNode);
    // console.log(dom('#' + e.target.parentNode.id).class(), ['red', 'blue']);
    log('#' + e.target.parentNode.id, ['red', 'yellow']);

    switch (true) {
      case e.target === document.getElementById('install-info'):
        toggleNPMBar();
        break;
      case e.target === document.getElementById('api-butn'):
        insertDocs(iDCallback);
        break;
      case e.target.tagName === 'CODE':
        var hash = String(dom('#' + e.target.parentNode.id).hash());
        warn(hash);
        e.preventDefault();

        var hashSS = hash.substring(1, hash.length);
        warn(hashSS);
        warn(offSets[hashSS]);

        var elem4 = _$("html") ? dom("html") : make(".html1", "html").put("body");
        elem4.scrolled(offSets[hashSS] + 290);
        break;
      case e.target.tagName === 'A':
        var hash = String(dom('#' + e.target.id).hash());
        warn(hash);
        e.preventDefault();

        var hashSS = hash.substring(1, hash.length);
        warn(hashSS);
        warn(offSets[hashSS]);

        var elem5 = _$("html") ? dom("html") : make(".html1", "html").put("body");
        elem5.scrolled(offSets[hashSS] + 290);
        break;
      default:
        var npmBar = el('#npm-bar');
        console.log(npmBar);
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
  var elem6 = _$('#npm-bar') ? dom('#npm-bar') : make('#npm-bar').put("body");
  elem6.display('none');
  //Initialize the click controller.
  clickController();
  //Download the documentation markdown.
  getMarkDown();
  //Create/install custom fork me ribbon.
  forkMeBaby();
});