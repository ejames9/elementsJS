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
        //Call callback functions.
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

//A collection of callback functions to be called once documentation is inserted into its' place.
function iDCallback() {
    forkMeBaby();
    highLightCode();
    addChainLinkIcons();
    mouseOutController();
    mouseOverController();
    SNC.sideNavController();

    dom('#sideNav li a').every(function (element) {
        element.class('sNavLink', '+');
    });
}

//Boolean function returns true if given function has given ancestor, and false otherwise. Checks 6 parents deep.
function hasAncestor(l, ance) {
    var tick,
        ancestor = el(ance),
        ancestors = [];

    ancestors.push(l.parentNode);
    ancestors.push(ancestors[0].parentNode);
    ancestors.push(ancestors[1].parentNode);
    ancestors.push(ancestors[2].parentNode);
    ancestors.push(ancestors[3].parentNode);
    // ancestors.push(ancestors[4].parentNode);

    // console.log(ancestors);
    tick = 0;

    for (var i = 0; i < ancestors.length; i++) {
        if (ancestors[i] === ancestor) tick++;
    }
    if (tick > 0) return true;else return false;
}

//Function for controlling when the #sideNav doc menu collapses.
function mouseOutController() {
    //Mouse out event delegation =======================>>
    var html = el('html');

    var stateOne = function stateOne(elem) {
        dom('[class~=hot]').class('hot', '-');

        dom('[name=hidden]').every(function (element) {
            element.class('hide');
        });
        dom(elem).class('hot').sib('next').class('hide', '-');
    };

    var stateTwo = function stateTwo(elem) {
        dom('[class~=hot]').class('hot', '-');

        dom('[name=hidden]').every(function (element) {
            element.class('hide');
        });
        dom(elem).class('hot').ma().class('hide', '-');
    };

    var stateThree = function stateThree(elem) {
        dom('[class~=hot]').class('hot', '-');
        dom('[name=hidden]').every(function (element) {
            element.class('hide');
        });
        dom(elem).class('hot').ma().class('hide', '-');
    };

    var stateFour = function stateFour(elem) {
        dom('[class~=hot]').class('hot', '-');
        dom('[name=hidden]').every(function (element) {
            element.class('hide');
        });
        dom(elem).class('hot');
    };

    var stateFive = function stateFive(elem) {
        dom('[class~=hot]').class('hot', '-');
        dom('[name=hidden]').every(function (element) {
            element.class('hide');
        });
        dom(elem).class('hot').sib('next').class('hide', '+');
    };

    mouse('out', html, function (e) {
        if (hasAncestor(e.target, '#sideNav')) {
            return;
        } else {
            switch (sideNavState[0]) {
                case 1:
                    stateOne(sideNavState[1]);
                    break;
                case 2:
                    stateTwo(sideNavState[1]);
                    break;
                case 3:
                    stateThree(sideNavState[1]);
                    break;
                case 4:
                    stateFour(sideNavState[1]);
                    break;
                case 5:
                    stateFive(sideNavState[1]);
                    break;
                default:
                    break;
            }
        }
    });
}

//Function for controlling the expanding (on hover) of #sideNav menu lists.
function mouseOverController() {
    //Mouse over event Delegation ======================>>
    var html = el('html');

    mouse('over', html, function (e) {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.relatedTarget);

        switch (9 + 9 === 18) {
            case e.target === el('#gsList') || e.target.parentNode === el('#gsList'):
                dom('[name=hidden]').every(function (element) {
                    element.class('hide', '+');
                });
                var elem4 = _$('#gsList') ? dom('#gsList') : make('#gsList').put("body");
                elem4.second().class('hide', '-');
                break;
            case e.target === el('#domList') || e.target.parentNode === el('#domList'):
                dom('[name=hidden]').every(function (element) {
                    element.class('hide', '+');
                });
                var elem5 = _$('#domList') ? dom('#domList') : make('#domList').put("body");
                elem5.second().class('hide', '-');
                break;
            case e.target === el('#eventList') || e.target.parentNode === el('#eventList'):
                dom('[name=hidden]').every(function (element) {
                    element.class('hide', '+');
                });
                var elem6 = _$('#eventList') ? dom('#eventList') : make('#eventList').put("body");
                elem6.second().class('hide', '-');
                break;
            case e.target === el('#httpList') || e.target.parentNode === el('#httpList'):
                dom('[class~=shorts]').every(function (element) {
                    element.class('hide', '+');
                });
                var elem7 = _$('#httpList') ? dom('#httpList') : make('#httpList').put("body");
                elem7.second().class('hide', '-');
                break;
            case e.target === el('#loggList') || e.target.parentNode === el('#loggList'):
                dom('[class~=shorts]').every(function (element) {
                    element.class('hide', '+');
                });
                var elem8 = _$('#loggList') ? dom('#loggList') : make('#loggList').put("body");
                elem8.second().class('hide', '-');
                break;
            case e.target === el('#utilsList') || e.target.parentNode === el('#utilsList'):
                dom('[name=hidden]').every(function (element) {
                    element.class('hide', '+');
                });
                var elem9 = _$('#utilsList') ? dom('#utilsList') : make('#utilsList').put("body");
                elem9.second().class('hide', '-');
                break;
            case e.target === el('#elemObjList') || e.target.parentNode === el('#elemObjList'):
                dom('[class~=shorts]').every(function (element) {
                    element.class('hide', '+');
                });
                var elem10 = _$('#elemObjList') ? dom('#elemObjList') : make('#elemObjList').put("body");
                elem10.second().class('hide', '-');
                break;
            case e.target === el('#eOMethodsList') || e.target.parentNode === el('#eOMethodsList'):
                dom('[class~=shorts]').every(function (element) {
                    element.class('hide', '+');
                });
                var elem11 = _$('#eOMethodsList') ? dom('#eOMethodsList') : make('#eOMethodsList').put("body");
                elem11.second().class('hide', '-');
                break;
            case e.target === el('#eStaxList') || e.target.parentNode === el('#eStaxList'):
                dom('[class~=shorts]').every(function (element) {
                    element.class('hide', '+');
                });
                var elem12 = _$('#eStaxList') ? dom('#eStaxList') : make('#eStaxList').put("body");
                elem12.second().class('hide', '-');
                break;

        };
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