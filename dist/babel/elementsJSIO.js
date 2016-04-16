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

//es6 import

var dom = require("elementsJS").dom;
var make = require("elementsJS").make;
///|------------------------------------|//

var elementsJS = require("elementsJS");
var imports = elementsJS.imports;
var go = elementsJS.go;
var el = elementsJS.el;
var log = elementsJS.log;
var url = elementsJS.url;
var ajax = elementsJS.ajax;
var on = elementsJS.on;
var click = elementsJS.click;
var scroll = elementsJS.scroll;
var __ = elementsJS.__;

var marked = require("marked");

var hljs = require("highlight.js");

///End Module requires///

//globals
var commit = '5f9f194';
var rawGit = 'https://rawgit.com/ejames9/elementsJS/gh-pages/';
var rawGitCDN = 'https://cdn.rawgit.com/ejames9/elementsJS/' + commit + '/';

var docsMenu = 'html/docsMenu.html';
var mdUrl = 'md/elementsJSIODocs.md';
var markDown;

function forkMeBaby() {
  console.log(dom('.jumbotron'));

  __("\n    <a><forkMe id='forkMe'>\n      <p>Fork Me Baby!</p>\n    </forkMe></a>\n\n  ", '.jumbotron');

  var elem0 = _$('#forkMe') ? dom('#forkMe') : make('#forkMe').put("body");
  elem0.fore('#logo');
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
    var elem1 = _$('#content') ? dom('#content') : make('#content').put("body");
    elem1.html(r);
    var elem2 = _$('#docsMain') ? dom('#docsMain') : make('#docsMain').put("body");
    elem2.html(marked(markDown));

    var offSets = SNC.getOffSets();

    // for (var el in offSets) {
    //   log('id: ' + el, 'red');
    //   log('offSet: ' + offSets[el], ['red', 'blue'])
    // }
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

  //Click Event Delegation ============================>>
  var html = document.getElementsByTagName('html')[0];
  html.addEventListener('click', function (e) {
    switch (e.target) {
      case document.getElementById('install-info'):
        toggleNPMBar();
        break;
      case document.getElementById('api-butn'):
        insertDocs(function () {
          SNC.sideNavController();
          highLightCode();
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

  forkMeBaby();
});