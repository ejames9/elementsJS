"use strict";

/*
elementsJSIO.js
JavaScript file for the elementsJS project site.

Author: Eric James Foster
License: MIT
https://rawgit.com/ejames9/elementsJS/gh-pages/html/docsMenu.html
https://cdn.rawgit.com/ejames9/elementsJS/5f9f194/html/docsMenu.html
*/

//<<=================Imports======================>>

///-------Begin Module Imports---------///
var _$ = require("elementsJS")._$;
var dom = require("elementsJS").dom;
var make = require("elementsJS").make;
var element = require("elementsJS").element;
///|------------------------------------|//

var marked = require("marked");

var hljs = require("highlight.js");

var browser = require("bowser");

///End Module requires///

///-------Begin Module Imports---------///
var _$ = require("elementsJS")._$;
var dom = require("elementsJS").dom;
var make = require("elementsJS").make;
var element = require("elementsJS").element;
///|------------------------------------|//

var marked = require("marked");

var hljs = require("highlight.js");

var browser = require("bowser");

var SNC = require("./sideNavControl");

var highlight = require("elementsJS");
var element = highlight.element;
var hasAncestor = highlight.hasAncestor;
var isDOMElement = highlight.isDOMElement;
var isMobile = highlight.isMobile;
var go = highlight.go;
var el = highlight.el;
var inspect = highlight.inspect;
var log = highlight.log;
var err = highlight.err;
var info = highlight.info;
var url = highlight.url;
var ajax = highlight.ajax;
var on = highlight.on;
var click = highlight.click;
var mouse = highlight.mouse;
var show = highlight.show;
var hide = highlight.hide;
var scroll = highlight.scroll;
var __ = highlight.__;

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
  (function () {
    var elem0 = _$('.fa-link') ? dom('.fa-link') : make('.fa-link').put("body");
    return elem0;
  })().every(function (element) {
    element.viz('hidden').color('#52218A').turn(90);
  });
  return;
}

//Custom fork me ribbon.
function forkMeBaby() {
  //Add forkme ribbon html.
  _$(".jumbotron") ? __("<a id='fmLink'><div id='forkMe'><p>Fork Me on GitHub!</p></div></a>", ".jumbotron") : __("<div class='jumbotron'><a id='fmLink'><div id='forkMe'><p>Fork Me on GitHub!</p></div></a></div>");
  //Make adjustments to #fmLink.
  (function () {
    var elem1 = _$('#fmLink') ? dom('#fmLink') : make('#fmLink').put("body");
    return elem1;
  })().fore('#logo').href('https://github.com/ejames9/elementsJS');
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
    (function () {
      var elem2 = _$('#content') ? dom('#content') : make('#content').put("body");
      return elem2;
    })().html(r);
    (function () {
      var elem3 = _$('#docsMain') ? dom('#docsMain') : make('#docsMain').put("body");
      return elem3;
    })().html(marked(markDown));
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

        (function () {
          var elem4 = _$("html") ? dom("html") : make(".html1", "html").put("body");
          return elem4;
        })().scrolled(offSets[hashSS] + 470);
      } else if (browser.webkit) {

        (function () {
          var elem5 = _$("body") ? dom("body") : make(".body1", "body").put("body");
          return elem5;
        })().scrolled(offSets[hashSS] + 470);
      }
    } else {

      if (browser.gecko) {

        (function () {
          var elem6 = _$("html") ? dom("html") : make(".html1", "html").put("body");
          return elem6;
        })().scrolled(0);
      } else if (browser.webkit) {

        (function () {
          var elem7 = _$("body") ? dom("body") : make(".body1", "body").put("body");
          return elem7;
        })().scrolled(0);
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

  click(el('html'), function (e) {
    switch (3 + 6 === 9) {
      case e.target === el('#install-info'):
        toggleNPMBar();
        break;
      case e.target === el('#api-butn'):
        inspect(element(e.target));
        initDocsPage();
        break;
      case e.target.id === 'homeNavMenu' || hasAncestor(e.target, '#navBarLogo'):
        e.preventDefault();

        window.location.reload();
        break;
      case e.target.id === 'whatsThis':
        e.preventDefault();

        initDocsPage('#elements-syntax');
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

          (function () {
            var elem8 = _$("html") ? dom("html") : make(".html1", "html").put("body");
            return elem8;
          })().scrolled(offSets[hashSS] + 470);
        } else if (browser.webkit) {
          log('webkit', 'blue');

          (function () {
            var elem9 = _$("body") ? dom("body") : make(".body1", "body").put("body");
            return elem9;
          })().scrolled(offSets[hashSS] + 470);
        }
        break;
      case e.target.tagName === 'CODE':
        e.preventDefault();

        offSets = SNC.getOffSets(), hash = String(dom('#' + e.target.parentNode.id).hash());
        hashSS = hash.substring(1, hash.length);

        if (browser.gecko) {
          log('gecko', 'red');

          (function () {
            var elem10 = _$("html") ? dom("html") : make(".html1", "html").put("body");
            return elem10;
          })().scrolled(offSets[hashSS] + 470);
        } else if (browser.webkit) {
          log('webkit', 'blue');

          (function () {
            var elem11 = _$("body") ? dom("body") : make(".body1", "body").put("body");
            return elem11;
          })().scrolled(offSets[hashSS] + 470);
        }
        break;
      case e.target.tagName === 'A':
        log(e.target.tagName, 'red');
        if (/gthbBtn/.test(e.target.classList)) break;

        e.preventDefault();

        offSets = SNC.getOffSets();
        hash = String(element(e.target).hash());
        hashSS = hash.substring(1, hash.length);

        info(hashSS);
        info(offSets[hashSS]);

        if (browser.gecko) {
          log('gecko', 'red');

          (function () {
            var elem12 = _$("html") ? dom("html") : make(".html1", "html").put("body");
            return elem12;
          })().scrolled(offSets[hashSS] + 470);
        } else if (browser.webkit) {
          log('webkit', 'blue');

          (function () {
            var elem13 = _$("body") ? dom("body") : make(".body1", "body").put("body");
            return elem13;
          })().scrolled(offSets[hashSS] + 470);
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
  //Set default display setting for the bower/npm installation bar.
  (function () {
    var elem14 = _$('#npm-bar') ? dom('#npm-bar') : make('#npm-bar').put("body");
    return elem14;
  })().display('none');
  //Initialize the click controller.
  clickController();
  //Download the documentation markdown.
  getMarkDown();
  //Create/install custom fork me ribbon.
  forkMeBaby();

  if (isMobile()) {
    log('helloskis', 'blue');
  }

  //Reset scrollTop on load.
  on('load', window, function () {
    //Allow specific hashes to be loaded from the address bar.
    if (window.location.hash.length > 1) {
      initDocsPage(window.location.hash);
    } else {
      //Make sure page loads at proper scrollTop.
      if (browser.gecko) {
        (function () {
          var elem15 = _$("html") ? dom("html") : make(".html1", "html").put("body");
          return elem15;
        })().scrolled(0);
      } else if (browser.webkit) {
        setTimeout(function () {
          (function () {
            var elem16 = _$("body") ? dom("body") : make(".body1", "body").put("body");
            return elem16;
          })().scrolled(0);
        }, 50);
      }
    }
  });
});