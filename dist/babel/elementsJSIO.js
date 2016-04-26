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
var mouse = elementsJS.mouse;
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
    element.html('<i id="faLink" class="fa fa-link"></i>', '+').href('#' + element.id()).mouse('over', function () {
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

//This function highlights all of the  blocks in the docs, after the insertDocs function is completed.
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
  mouseEventController();
  SNC.sideNavController();

  dom('#sideNav li a').every(function (element) {
    element.class('sNavLink', '+');
  });
  // for (var el in offSets) {
  //   log('id: ' + el, 'red');
  //   log('offSet: ' + offSets[el], ['red', 'blue'])
  // }
}

function mouseEventController() {
  //Mouse hover event Delegation ======================>>
  var html = el('html');

  mouse('over', html, function (e) {
    console.log(e.target);

    switch (e.target) {
      case el('#getStart'):
        dom('[name=hidden]').every(function (element) {
          element.class('hide', '+');
        });
        var elem4 = _$('#getStart') ? dom('#getStart') : make('#getStart').put("body");
        elem4.once('mouseout', function (e, element) {
          element.sib('next').class('hide', '+');
        }).sib('next').class('hide', '-');
        break;
      case el('#domManip'):
        dom('[name=hidden]').every(function (element) {
          element.class('hide', '+');
        });
        var elem5 = _$('#domManip') ? dom('#domManip') : make('#domManip').put("body");
        elem5.sib('next').class('hide', '-');
        break;
      case el('#eventHand'):
        dom('[name=hidden]').every(function (element) {
          element.class('hide', '+');
        });
        var elem6 = _$('#eventHand') ? dom('#eventHand') : make('#eventHand').put("body");
        elem6.sib('next').class('hide', '-');
        break;
      case el('#httpReq'):
        dom('[name=hidden]').every(function (element) {
          element.class('hide', '+');
        });
        var elem7 = _$('#httpReq') ? dom('#httpReq') : make('#httpReq').put("body");
        elem7.sib('next').class('hide', '-');
        break;
      case el('#logg'):
        dom('[name=hidden]').every(function (element) {
          element.class('hide', '+');
        });
        var elem8 = _$('#logg') ? dom('#logg') : make('#logg').put("body");
        elem8.sib('next').class('hide', '-');
        break;
      case el('#utilFunc'):
        dom('[name=hidden]').every(function (element) {
          element.class('hide', '+');
        });
        var elem9 = _$('#utilFunc') ? dom('#utilFunc') : make('#utilFunc').put("body");
        elem9.sib('next').class('hide', '-');
        break;
      case el('#elemObj'):
        dom('[name=hidden]').every(function (element) {
          element.class('hide', '+');
        });
        var elem10 = _$('#elemObj') ? dom('#elemObj') : make('#elemObj').put("body");
        elem10.sib('next').class('hide', '-');
        break;
      case el('#elemObjMethods'):
        dom('[name=hidden]').every(function (element) {
          element.class('hide', '+');
        });
        var elem11 = _$('#elemObjMethods') ? dom('#elemObjMethods') : make('#elemObjMethods').put("body");
        elem11.sib('next').class('hide', '-');
        break;
      case el('#elemsSyntax'):
        dom('[name=hidden]').every(function (element) {
          element.class('hide', '+');
        });
        var elem12 = _$('#elemsSyntax') ? dom('#elemsSyntax') : make('#elemsSyntax').put("body");
        elem12.sib('next').class('hide', '-');
        break;
    }
  });
}

function clickController() {
  //Click Event Delegation ============================>>
  var _re = /sNavLink/,
      html = el('html'),
      hash,
      hashSS;

  click(html, function (e) {
    switch (3 + 6 === 9) {
      case e.target === el('#install-info'):
        toggleNPMBar();
        break;
      case e.target === el('#api-butn'):
        insertDocs(iDCallback);
        break;
      case e.target.tagName === 'I':
        e.preventDefault();

        offSets = SNC.getOffSets(), hash = String(dom('#' + e.target.parentNode.id).hash());
        hashSS = hash.substring(1, hash.length);

        var elem13 = _$("html") ? dom("html") : make(".html1", "html").put("body");
        elem13.scrolled(offSets[hashSS] + 291);
        break;
      case e.target.tagName === 'CODE':
        e.preventDefault();

        offSets = SNC.getOffSets(), hash = String(dom('#' + e.target.parentNode.id).hash());
        hashSS = hash.substring(1, hash.length);

        var elem14 = _$("html") ? dom("html") : make(".html1", "html").put("body");
        elem14.scrolled(offSets[hashSS] + 291);
        break;
      case e.target.tagName === 'A':
        log(e.target.tagName, 'red');
        e.preventDefault();

        offSets = SNC.getOffSets();
        hash = String(dom('#' + e.target.id).hash());
        hashSS = hash.substring(1, hash.length);

        warn(hashSS);
        warn(offSets[hashSS]);

        var elem15 = _$("html") ? dom("html") : make(".html1", "html").put("body");
        elem15.scrolled(offSets[hashSS] + 291);
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
  var elem16 = _$('#npm-bar') ? dom('#npm-bar') : make('#npm-bar').put("body");
  elem16.display('none');
  //Initialize the click controller.
  clickController();
  //Download the documentation markdown.
  getMarkDown();
  //Create/install custom fork me ribbon.
  forkMeBaby();
});