"use strict";

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

///-------Begin Module requires---------///
var _$ = require("elementsJS")._$;
var dom = require("elementsJS").dom;
var make = require("elementsJS").make;
///|------------------------------------|//

var elementsJS = require("elementsJS");
var imports = elementsJS.imports;
var go = elementsJS.go;
var log = elementsJS.log;
var url = elementsJS.url;
var ajax = elementsJS.ajax;
var on = elementsJS.on;
var click = elementsJS.click;
var scroll = elementsJS.scroll;

var marked = require("marked");

///End Module requires///

var commit = '5f9f194';
var rawGit = 'https://rawgit.com/ejames9/elementsJS/gh-pages/';
var rawGitCDN = 'https://cdn.rawgit.com/ejames9/elementsJS/' + commit + '/';

var docsMenu = 'html/docsMenu.html';
var mdUrl = 'md/elementsJSIODocs.md';
var markDown;

//Documentation page change function
function insertDocs() {
  //Grab side-bar/documentation template  html from github with rawgit cdn, insert side-bar/template, and docs into their containers.
  ajax(url(rawGit, docsMenu), null, function (r) {
    var elem0 = _$('#content') ? dom('#content') : make('#content').put("body");
    elem0.html(r);
    var elem1 = _$('#docsMain') ? dom('#docsMain') : make('#docsMain').put("body");
    elem1.html(marked(markDown));
  });
}

//After page loads, load elementsJSIODocs.md into a variable.
function getMarkDown() {
  var addy = url(rawGit, mdUrl);
  var xhr = new XMLHttpRequest();
  xhr.onloadend = function () {
    if (xhr.status === 200) {
      var r = this.responseText;
      console.log(r);
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
        console.log("I'm in.");
        insertDocs();
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