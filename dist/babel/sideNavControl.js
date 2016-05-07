"use strict";

var _elementsJS = require("elementsJS");

///-------elementsJS requires---------///
var _$ = require("elementsJS")._$;
var dom = require("elementsJS").dom;
var make = require("elementsJS").make;
///|------------------------------------|//

/*
sideNavControl.js
This file Makes the side-nav menu on the elementsJS.io
project-site docs page work.
Author: Eric James Foster
License: MIT
*/

//global that documents what state the menu is currently in.
window.sideNavState = [];

//The control states for the sideNav Menu.
var sideNavStates = {
      stateOne: function stateOne(elem) {
            dom('[class~=hot]').class('hot', '-');

            dom('[name=hidden]').every(function (element) {
                  element.class('hide');
            });
            dom(elem).class('hot').sib('next').class('hide', '-');
      },
      stateTwo: function stateTwo(elem) {
            dom('[class~=hot]').class('hot', '-');

            dom('[name=hidden]').every(function (element) {
                  element.class('hide');
            });
            dom(elem).class('hot').ma().class('hide', '-');
      },
      stateThree: function stateThree(elem) {
            dom('[class~=hot]').class('hot', '-');
            dom('[name=hidden]').every(function (element) {
                  element.class('hide');
            });
            dom(elem).class('hot').ma().class('hide', '-');
      },
      stateFour: function stateFour(elem) {
            dom('[class~=hot]').class('hot', '-');
            dom('[name=hidden]').every(function (element) {
                  element.class('hide');
            });
            dom(elem).class('hot');
      },
      stateFive: function stateFive(elem) {
            dom('[class~=hot]').class('hot', '-');
            dom('[name=hidden]').every(function (element) {
                  element.class('hide');
            });
            dom(elem).class('hot').sib('next').class('hide', '+');
      }
};

//Function for creating the offSets object, which contains the offsetTop property of all elements.
function getOffSets() {

      var offSets = {};
      offSets['installation'] = (0, _elementsJS.el)('#installation').offsetTop;
      offSets['Usage'] = (0, _elementsJS.el)('#Usage').offsetTop;
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

//Boolean function returns true if given function has given ancestor, and false otherwise. Checks 6 parents deep.
function hasAncestor(l, ance) {
      var tick,
          ancestor = (0, _elementsJS.el)(ance),
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
      var html = (0, _elementsJS.el)('html');

      (0, _elementsJS.mouse)('out', html, function (e) {
            if (hasAncestor(e.target, '#sideNav')) {
                  return;
            } else {
                  switch (sideNavState[0]) {
                        // case (1):
                        //     sideNavStates.stateOne(sideNavState[1]);
                        //     break;
                        // case (2):
                        //     sideNavStates.stateTwo(sideNavState[1]);
                        //     break;
                        // case (3):
                        //     sideNavStates.stateThree(sideNavState[1]);
                        //     break;
                        // case (4):
                        //     sideNavStates.stateFour(sideNavState[1]);
                        //     break;
                        // case (5):
                        //     sideNavStates.stateFive(sideNavState[1]);
                        //     break;
                        default:
                              break;
                  }
            }
      });
}

//Function for controlling the expanding (on hover) of #sideNav menu lists.
function mouseOverController() {
      //Mouse over event Delegation ======================>>
      var html = (0, _elementsJS.el)('html');

      (0, _elementsJS.mouse)('over', html, function (e) {
            // console.log(e);
            // console.log(e.target);
            // console.log(e.relatedTarget);

            switch (9 + 9 === 18) {
                  case e.target === (0, _elementsJS.el)('#gsList') || e.target.parentNode === (0, _elementsJS.el)('#gsList'):
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide', '+');
                        });
                        var elem0 = _$('#gsList') ? dom('#gsList') : make('#gsList').put("body");
                        elem0.second().class('hide', '-');
                        break;
                  case e.target === (0, _elementsJS.el)('#domList') || e.target.parentNode === (0, _elementsJS.el)('#domList'):
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide', '+');
                        });
                        var elem1 = _$('#domList') ? dom('#domList') : make('#domList').put("body");
                        elem1.second().class('hide', '-');
                        break;
                  case e.target === (0, _elementsJS.el)('#eventList') || e.target.parentNode === (0, _elementsJS.el)('#eventList'):
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide', '+');
                        });
                        var elem2 = _$('#eventList') ? dom('#eventList') : make('#eventList').put("body");
                        elem2.second().class('hide', '-');
                        break;
                  case e.target === (0, _elementsJS.el)('#httpList') || e.target.parentNode === (0, _elementsJS.el)('#httpList'):
                        dom('[title~=shorts]').every(function (element) {
                              element.class('hide', '+');
                        });
                        var elem3 = _$('#httpList') ? dom('#httpList') : make('#httpList').put("body");
                        elem3.second().class('hide', '-');
                        break;
                  case e.target === (0, _elementsJS.el)('#loggList') || e.target.parentNode === (0, _elementsJS.el)('#loggList'):
                        dom('[title~=shorts]').every(function (element) {
                              element.class('hide', '+');
                        });
                        var elem4 = _$('#loggList') ? dom('#loggList') : make('#loggList').put("body");
                        elem4.second().class('hide', '-');
                        break;
                  case e.target === (0, _elementsJS.el)('#utilsList') || e.target.parentNode === (0, _elementsJS.el)('#utilsList'):
                        dom('[title~=shorts]').every(function (element) {
                              element.class('hide', '+');
                        });
                        var elem5 = _$('#utilsList') ? dom('#utilsList') : make('#utilsList').put("body");
                        elem5.second().class('hide', '-');
                        break;
                  case e.target === (0, _elementsJS.el)('#elemObjList') || e.target.parentNode === (0, _elementsJS.el)('#elemObjList'):
                        dom('[title~=shorts]').every(function (element) {
                              element.class('hide', '+');
                        });
                        var elem6 = _$('#elemObjList') ? dom('#elemObjList') : make('#elemObjList').put("body");
                        elem6.second().class('hide', '-');
                        break;
                  case e.target === (0, _elementsJS.el)('#eOMethodsList') || e.target.parentNode === (0, _elementsJS.el)('#eOMethodsList'):
                        dom('[title~=shorts]').every(function (element) {
                              element.class('hide', '+');
                        });
                        var elem7 = _$('#eOMethodsList') ? dom('#eOMethodsList') : make('#eOMethodsList').put("body");
                        elem7.second().class('hide', '-');
                        break;
                  case e.target === (0, _elementsJS.el)('#eStaxList') || e.target.parentNode === (0, _elementsJS.el)('#eStaxList'):
                        dom('[title~=shorts]').every(function (element) {
                              element.class('hide', '+');
                        });
                        var elem8 = _$('#eStaxList') ? dom('#eStaxList') : make('#eStaxList').put("body");
                        elem8.second().class('hide', '-');
                        break;

            };
      });
}

function sideNavController() {
      // console.log(dom('[name=hidden]'));

      var offSets = getOffSets(),
          diff = 290;

      (0, _elementsJS.scroll)(window, function () {
            switch (true) {
                  //0 - 13 Getting Started
                  case dom('html').scrolled() > 0 + diff && dom('html').scrolled() < offSets['installation'] + diff || dom('body').scrolled() > 0 + diff && dom('body').scrolled() < offSets['installation'] + diff:
                        //Find active list item, deactivate it.
                        dom('[class~=hot]').class('hot', '-');

                        //Find all menu lists, hide them.
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        //Activate Getting Started list item.
                        var elem9 = _$('#getStart') ? dom('#getStart') : make('#getStart').put("body");
                        elem9.class('hot').focus().sib('next').class('hide', '+');

                        sideNavState = [5, '#getStart'];
                        break;
                  case dom('html').scrolled() > offSets['installation'] + diff && dom('html').scrolled() < offSets['Usage'] + diff || dom('body').scrolled() > offSets['installation'] + diff && dom('body').scrolled() < offSets['Usage'] + diff:
                        // log('YES', ['red', 'blue'] + diff);
                        //Find active list item, deactivate it.
                        dom('[class~=hot2]').class('hot2', '-');
                        //Find all menu lists, hide them.
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        //Activate Installation list item. Open parent list by removing .hide class.
                        var elem10 = _$('#instLink') ? dom('#instLink') : make('#instLink').put("body");
                        elem10.class('hot2').ma().class('hide', '-');

                        sideNavState = [2, '#instLink'];
                        break;
                  case dom('html').scrolled() > offSets['Usage'] + diff && dom('html').scrolled() < offSets['interpreter-install'] + diff || dom('body').scrolled() > offSets['Usage'] + diff && dom('body').scrolled() < offSets['interpreter-install'] + diff:
                        dom('[class~=hot2]').class('hot2', '-');
                        var elem11 = _$('#useLink') ? dom('#useLink') : make('#useLink').put("body");
                        elem11.class('hot2');

                        sideNavState = [3, '#useLink'];
                        break;
                  case dom('html').scrolled() > offSets['interpreter-install'] + diff && dom('html').scrolled() < offSets['imports'] + diff || dom('body').scrolled() > offSets['interpreter-install'] + diff && dom('body').scrolled() < offSets['imports'] + diff:
                        // dom('[class~=hot]')
                        // 				.class('hot', '-');
                        dom('[class~=hot2]').class('hot2', '-');
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem12 = _$('#interpInstallLink') ? dom('#interpInstallLink') : make('#interpInstallLink').put("body");
                        elem12.class('hot2').ma().class('hide', '-');
                        // .class('hot', '+');

                        sideNavState = [2, '#interpInstallLink'];
                        break;
                  case dom('html').scrolled() > offSets['imports'] + diff && dom('html').scrolled() < offSets['DOM'] + diff || dom('body').scrolled() > offSets['imports'] + diff && dom('body').scrolled() < offSets['DOM'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        dom('[class~=hot2]').class('hot2', '-');
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem13 = _$('#imps') ? dom('#imps') : make('#imps').put("body");
                        elem13.class('hot');

                        sideNavState = [4, '#imps'];
                        break;
                  case dom('html').scrolled() > offSets['DOM'] + diff && dom('html').scrolled() < offSets['el-func'] + diff || dom('body').scrolled() > offSets['DOM'] + diff && dom('body').scrolled() < offSets['el-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem14 = _$('#domManip') ? dom('#domManip') : make('#domManip').put("body");
                        elem14.focus().class('hot').sib('next').class('hide', '-');

                        sideNavState = [1, '#domManip'];
                        break;
                  case dom('html').scrolled() > offSets['el-func'] + diff && dom('html').scrolled() < offSets['dom-func'] + diff || dom('body').scrolled() > offSets['el-func'] + diff && dom('body').scrolled() < offSets['dom-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem15 = _$('#elLink') ? dom('#elLink') : make('#elLink').put("body");
                        elem15.class('hot');

                        sideNavState = [3, '#elLink'];
                        break;
                  case dom('html').scrolled() > offSets['dom-func'] + diff && dom('html').scrolled() < offSets['__-func'] + diff || dom('body').scrolled() > offSets['dom-func'] + diff && dom('body').scrolled() < offSets['__-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem16 = _$('#domLink') ? dom('#domLink') : make('#domLink').put("body");
                        elem16.class('hot');

                        sideNavState = [3, '#domLink'];
                        break;
                  case dom('html').scrolled() > offSets['__-func'] + diff && dom('html').scrolled() < offSets['make-func'] + diff || dom('body').scrolled() > offSets['__-func'] + diff && dom('body').scrolled() < offSets['make-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem17 = _$('#__Link') ? dom('#__Link') : make('#__Link').put("body");
                        elem17.class('hot');

                        sideNavState = [3, '#domLink'];
                        break;
                  case dom('html').scrolled() > offSets['make-func'] + diff && dom('html').scrolled() < offSets['put-func'] + diff || dom('body').scrolled() > offSets['make-func'] + diff && dom('body').scrolled() < offSets['put-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem18 = _$('#makeLink') ? dom('#makeLink') : make('#makeLink').put("body");
                        elem18.class('hot');

                        sideNavState = [3, '#makeLink'];
                        break;
                  case dom('html').scrolled() > offSets['put-func'] + diff && dom('html').scrolled() < offSets['x-func'] + diff || dom('body').scrolled() > offSets['put-func'] + diff && dom('body').scrolled() < offSets['x-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem19 = _$('#putLink') ? dom('#putLink') : make('#putLink').put("body");
                        elem19.class('hot');

                        sideNavState = [3, '#putLink'];
                        break;
                  case dom('html').scrolled() > offSets['x-func'] + diff && dom('html').scrolled() < offSets['fore-func'] + diff || dom('body').scrolled() > offSets['x-func'] + diff && dom('body').scrolled() < offSets['fore-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem20 = _$('#xLink') ? dom('#xLink') : make('#xLink').put("body");
                        elem20.class('hot');

                        sideNavState = [3, '#xLink'];
                        break;
                  case dom('html').scrolled() > offSets['fore-func'] + diff && dom('html').scrolled() < offSets['aft-func'] + diff || dom('body').scrolled() > offSets['fore-func'] + diff && dom('body').scrolled() < offSets['aft-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem21 = _$('#foreLink') ? dom('#foreLink') : make('#foreLink').put("body");
                        elem21.class('hot');

                        sideNavState = [3, '#foreLink'];
                        break;
                  case dom('html').scrolled() > offSets['aft-func'] + diff && dom('html').scrolled() < offSets['show-func'] + diff || dom('body').scrolled() > offSets['aft-func'] + diff && dom('body').scrolled() < offSets['show-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem22 = _$('#aftLink') ? dom('#aftLink') : make('#aftLink').put("body");
                        elem22.class('hot');

                        sideNavState = [3, '#aftLink'];
                        break;
                  case dom('html').scrolled() > offSets['show-func'] + diff && dom('html').scrolled() < offSets['hide-func'] + diff || dom('body').scrolled() > offSets['show-func'] + diff && dom('body').scrolled() < offSets['hide-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem23 = _$('#showLink') ? dom('#showLink') : make('#showLink').put("body");
                        elem23.class('hot');

                        sideNavState = [3, '#showLink'];
                        break;
                  case dom('html').scrolled() > offSets['hide-func'] + diff && dom('html').scrolled() < offSets['size-func'] + diff || dom('body').scrolled() > offSets['hide-func'] + diff && dom('body').scrolled() < offSets['size-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem24 = _$('#hydeLink') ? dom('#hydeLink') : make('#hydeLink').put("body");
                        elem24.class('hot');

                        sideNavState = [3, '#hydeLink'];
                        break;
                  case dom('html').scrolled() > offSets['size-func'] + diff && dom('html').scrolled() < offSets['event-handle'] + diff || dom('body').scrolled() > offSets['size-func'] + diff && dom('body').scrolled() < offSets['event-handle'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem25 = _$('#sizeLink') ? dom('#sizeLink') : make('#sizeLink').put("body");
                        elem25.class('hot').ma().class('hide', '-');

                        sideNavState = [2, '#sizeLink'];
                        break;
                  case dom('html').scrolled() > offSets['event-handle'] + diff && dom('html').scrolled() < offSets['go-func'] + diff || dom('body').scrolled() > offSets['event-handle'] + diff && dom('body').scrolled() < offSets['go-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem26 = _$('#eventHand') ? dom('#eventHand') : make('#eventHand').put("body");
                        elem26.class('hot').sib('next').class('hide', '-');

                        sideNavState = [1, '#eventHand'];
                        break;
                  case dom('html').scrolled() > offSets['go-func'] + diff && dom('html').scrolled() < offSets['on-func'] + diff || dom('body').scrolled() > offSets['go-func'] + diff && dom('body').scrolled() < offSets['on-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem27 = _$('#goLink') ? dom('#goLink') : make('#goLink').put("body");
                        elem27.class('hot');

                        sideNavState = [3, '#goLink'];
                        break;
                  case dom('html').scrolled() > offSets['on-func'] + diff && dom('html').scrolled() < offSets['off-func'] + diff || dom('body').scrolled() > offSets['on-func'] + diff && dom('body').scrolled() < offSets['off-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem28 = _$('#onLink') ? dom('#onLink') : make('#onLink').put("body");
                        elem28.class('hot');

                        sideNavState = [3, '#onLink'];
                        break;
                  case dom('html').scrolled() > offSets['off-func'] + diff && dom('html').scrolled() < offSets['once-func'] + diff || dom('body').scrolled() > offSets['off-func'] + diff && dom('body').scrolled() < offSets['once-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem29 = _$('#offLink') ? dom('#offLink') : make('#offLink').put("body");
                        elem29.class('hot');

                        sideNavState = [3, '#offLink'];
                        break;
                  case dom('html').scrolled() > offSets['once-func'] + diff && dom('html').scrolled() < offSets['spark-func'] + diff || dom('body').scrolled() > offSets['once-func'] + diff && dom('body').scrolled() < offSets['spark-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem30 = _$('#onceLink') ? dom('#onceLink') : make('#onceLink').put("body");
                        elem30.class('hot');

                        sideNavState = [3, '#onceLink'];
                        break;
                  case dom('html').scrolled() > offSets['spark-func'] + diff && dom('html').scrolled() < offSets['click-func'] + diff || dom('body').scrolled() > offSets['spark-func'] + diff && dom('body').scrolled() < offSets['click-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem31 = _$('#sparkLink') ? dom('#sparkLink') : make('#sparkLink').put("body");
                        elem31.class('hot');

                        sideNavState = [3, '#sparkLink'];
                        break;
                  case dom('html').scrolled() > offSets['click-func'] + diff && dom('html').scrolled() < offSets['dblClick-func'] + diff || dom('body').scrolled() > offSets['click-func'] + diff && dom('body').scrolled() < offSets['dblClick-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem32 = _$('#clickLink') ? dom('#clickLink') : make('#clickLink').put("body");
                        elem32.class('hot');

                        sideNavState = [3, '#clickLink'];
                        break;
                  case dom('html').scrolled() > offSets['dblClick-func'] + diff && dom('html').scrolled() < offSets['blur-func'] + diff || dom('body').scrolled() > offSets['dblClick-func'] + diff && dom('body').scrolled() < offSets['blur-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem33 = _$('#dblLink') ? dom('#dblLink') : make('#dblLink').put("body");
                        elem33.class('hot');

                        sideNavState = [3, '#dblLink'];
                        break;
                  case dom('html').scrolled() > offSets['blur-func'] + diff && dom('html').scrolled() < offSets['error-func'] + diff || dom('body').scrolled() > offSets['blur-func'] + diff && dom('body').scrolled() < offSets['error-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem34 = _$('#blurLink') ? dom('#blurLink') : make('#blurLink').put("body");
                        elem34.class('hot');

                        sideNavState = [3, '#blurLink'];
                        break;
                  case dom('html').scrolled() > offSets['error-func'] + diff && dom('html').scrolled() < offSets['focus-func'] + diff || dom('body').scrolled() > offSets['error-func'] + diff && dom('body').scrolled() < offSets['focus-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem35 = _$('#errorLink') ? dom('#errorLink') : make('#errorLink').put("body");
                        elem35.class('hot');

                        sideNavState = [3, '#errorLink'];
                        break;
                  case dom('html').scrolled() > offSets['focus-func'] + diff && dom('html').scrolled() < offSets['focusIn-func'] + diff || dom('body').scrolled() > offSets['focus-func'] + diff && dom('body').scrolled() < offSets['focusIn-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem36 = _$('#focusLink') ? dom('#focusLink') : make('#focusLink').put("body");
                        elem36.class('hot');

                        sideNavState = [3, '#focusLink'];
                        break;
                  case dom('html').scrolled() > offSets['focusIn-func'] + diff && dom('html').scrolled() < offSets['focusOut-func'] + diff || dom('body').scrolled() > offSets['focusIn-func'] + diff && dom('body').scrolled() < offSets['focusOut-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem37 = _$('#focusInLink') ? dom('#focusInLink') : make('#focusInLink').put("body");
                        elem37.class('hot');

                        sideNavState = [3, '#focusInLink'];
                        break;
                  case dom('html').scrolled() > offSets['focusOut-func'] + diff && dom('html').scrolled() < offSets['keyUp-func'] + diff || dom('body').scrolled() > offSets['focusOut-func'] + diff && dom('body').scrolled() < offSets['keyUp-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem38 = _$('#focusOutLink') ? dom('#focusOutLink') : make('#focusOutLink').put("body");
                        elem38.class('hot');

                        sideNavState = [3, '#focusOutLink'];
                        break;
                  case dom('html').scrolled() > offSets['keyUp-func'] + diff && dom('html').scrolled() < offSets['keyDown-func'] + diff || dom('body').scrolled() > offSets['keyUp-func'] + diff && dom('body').scrolled() < offSets['keyDown-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem39 = _$('#keyUpLink') ? dom('#keyUpLink') : make('#keyUpLink').put("body");
                        elem39.class('hot');

                        sideNavState = [3, '#keyUpLink'];
                        break;
                  case dom('html').scrolled() > offSets['keyDown-func'] + diff && dom('html').scrolled() < offSets['load-func'] + diff || dom('body').scrolled() > offSets['keyDown-func'] + diff && dom('body').scrolled() < offSets['load-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem40 = _$('#keyDownLink') ? dom('#keyDownLink') : make('#keyDownLink').put("body");
                        elem40.class('hot');

                        sideNavState = [3, '#keyDownLink'];
                        break;
                  case dom('html').scrolled() > offSets['load-func'] + diff && dom('html').scrolled() < offSets['unLoad-func'] + diff || dom('body').scrolled() > offSets['load-func'] + diff && dom('body').scrolled() < offSets['unLoad-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem41 = _$('#loadLink') ? dom('#loadLink') : make('#loadLink').put("body");
                        elem41.class('hot');

                        sideNavState = [3, '#loadLink'];
                        break;
                  case dom('html').scrolled() > offSets['unLoad-func'] + diff && dom('html').scrolled() < offSets['mouse-func'] + diff || dom('body').scrolled() > offSets['unLoad-func'] + diff && dom('body').scrolled() < offSets['mouse-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem42 = _$('#unLoadLink') ? dom('#unLoadLink') : make('#unLoadLink').put("body");
                        elem42.class('hot');

                        sideNavState = [3, '#unLoadLink'];
                        break;
                  case dom('html').scrolled() > offSets['mouse-func'] + diff && dom('html').scrolled() < offSets['resize-func'] + diff || dom('body').scrolled() > offSets['mouse-func'] + diff && dom('body').scrolled() < offSets['resize-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem43 = _$('#mouseLink') ? dom('#mouseLink') : make('#mouseLink').put("body");
                        elem43.class('hot');

                        sideNavState = [3, '#mouseLink'];
                        break;
                  case dom('html').scrolled() > offSets['resize-func'] + diff && dom('html').scrolled() < offSets['scroll-func'] + diff || dom('body').scrolled() > offSets['resize-func'] + diff && dom('body').scrolled() < offSets['scroll-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem44 = _$('#resizeLink') ? dom('#resizeLink') : make('#resizeLink').put("body");
                        elem44.class('hot');

                        sideNavState = [3, '#resizeLink'];
                        break;
                  case dom('html').scrolled() > offSets['scroll-func'] + diff && dom('html').scrolled() < offSets['select-func'] + diff || dom('body').scrolled() > offSets['scroll-func'] + diff && dom('body').scrolled() < offSets['select-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem45 = _$('#scrollLink') ? dom('#scrollLink') : make('#scrollLink').put("body");
                        elem45.class('hot');

                        sideNavState = [3, '#scrollLink'];
                        break;
                  case dom('html').scrolled() > offSets['select-func'] + diff && dom('html').scrolled() < offSets['http'] + diff || dom('body').scrolled() > offSets['select-func'] + diff && dom('body').scrolled() < offSets['http'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem46 = _$('#selectLink') ? dom('#selectLink') : make('#selectLink').put("body");
                        elem46.class('hot').ma().class('hide', '-');

                        sideNavState = [2, '#selectLink'];
                        break;
                  case dom('html').scrolled() > offSets['http'] + diff && dom('html').scrolled() < offSets['xhr-func'] + diff || dom('body').scrolled() > offSets['http'] + diff && dom('body').scrolled() < offSets['xhr-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem47 = _$('#httpReq') ? dom('#httpReq') : make('#httpReq').put("body");
                        elem47.class('hot').sib('next').class('hide', '-');

                        sideNavState = [1, '#httpReq'];
                        break;
                  case dom('html').scrolled() > offSets['xhr-func'] + diff && dom('html').scrolled() < offSets['ajax-func'] + diff || dom('body').scrolled() > offSets['xhr-func'] + diff && dom('body').scrolled() < offSets['ajax-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem48 = _$('#xhrLink') ? dom('#xhrLink') : make('#xhrLink').put("body");
                        elem48.class('hot');

                        sideNavState = [3, '#xhrLink'];
                        break;
                  case dom('html').scrolled() > offSets['ajax-func'] + diff && dom('html').scrolled() < offSets['loggers'] + diff || dom('body').scrolled() > offSets['ajax-func'] + diff && dom('body').scrolled() < offSets['loggers'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem49 = _$('#ajaxLink') ? dom('#ajaxLink') : make('#ajaxLink').put("body");
                        elem49.class('hot').ma().class('hide', '-');

                        sideNavState = [2, '#ajaxLink'];
                        break;
                  case dom('html').scrolled() > offSets['loggers'] + diff && dom('html').scrolled() < offSets['log-func'] + diff || dom('body').scrolled() > offSets['loggers'] + diff && dom('body').scrolled() < offSets['log-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem50 = _$('#logg') ? dom('#logg') : make('#logg').put("body");
                        elem50.class('hot').sib('next').class('hide', '-');

                        sideNavState = [1, '#logg'];
                        break;
                  case dom('html').scrolled() > offSets['log-func'] + diff && dom('html').scrolled() < offSets['info-func'] + diff || dom('body').scrolled() > offSets['log-func'] + diff && dom('body').scrolled() < offSets['info-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem51 = _$('#logLink') ? dom('#logLink') : make('#logLink').put("body");
                        elem51.class('hot');

                        sideNavState = [3, '#logLink'];
                        break;
                  case dom('html').scrolled() > offSets['info-func'] + diff && dom('html').scrolled() < offSets['warn-func'] + diff || dom('body').scrolled() > offSets['info-func'] + diff && dom('body').scrolled() < offSets['warn-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem52 = _$('#infoLink') ? dom('#infoLink') : make('#infoLink').put("body");
                        elem52.class('hot');

                        sideNavState = [3, '#infoLink'];
                        break;
                  case dom('html').scrolled() > offSets['warn-func'] + diff && dom('html').scrolled() < offSets['err-func'] + diff || dom('body').scrolled() > offSets['warn-func'] + diff && dom('body').scrolled() < offSets['err-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem53 = _$('#warnLink') ? dom('#warnLink') : make('#warnLink').put("body");
                        elem53.class('hot');

                        sideNavState = [3, '#warnLink'];
                        break;
                  case dom('html').scrolled() > offSets['err-func'] + diff && dom('html').scrolled() < offSets['utils'] + diff || dom('body').scrolled() > offSets['err-func'] + diff && dom('body').scrolled() < offSets['utils'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem54 = _$('#errLink') ? dom('#errLink') : make('#errLink').put("body");
                        elem54.class('hot').ma().class('hide', '-');

                        sideNavState = [2, '#errLink'];
                        break;
                  case dom('html').scrolled() > offSets['utils'] + diff && dom('html').scrolled() < offSets['proto-func'] + diff || dom('body').scrolled() > offSets['utils'] + diff && dom('body').scrolled() < offSets['proto-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem55 = _$('#utilFunc') ? dom('#utilFunc') : make('#utilFunc').put("body");
                        elem55.class('hot').sib('next').class('hide', '-');

                        sideNavState = [1, '#utilFunc'];
                        break;
                  case dom('html').scrolled() > offSets['proto-func'] + diff && dom('html').scrolled() < offSets['shifter-func'] + diff || dom('body').scrolled() > offSets['proto-func'] + diff && dom('body').scrolled() < offSets['shifter-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem56 = _$('#protoLink') ? dom('#protoLink') : make('#protoLink').put("body");
                        elem56.class('hot');

                        sideNavState = [3, '#protoLink'];
                        break;
                  case dom('html').scrolled() > offSets['shifter-func'] + diff && dom('html').scrolled() < offSets['elem-obj'] + diff || dom('body').scrolled() > offSets['shifter-func'] + diff && dom('body').scrolled() < offSets['elem-obj'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem57 = _$('#shifterLink') ? dom('#shifterLink') : make('#shifterLink').put("body");
                        elem57.class('hot').ma().class('hide', '-');

                        sideNavState = [2, '#shifterLink'];
                        break;
                  case dom('html').scrolled() > offSets['elem-obj'] + diff && dom('html').scrolled() < offSets['element-const'] + diff || dom('body').scrolled() > offSets['elem-obj'] + diff && dom('body').scrolled() < offSets['element-const'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem58 = _$('#elemObj') ? dom('#elemObj') : make('#elemObj').put("body");
                        elem58.class('hot').sib('next').class('hide', '-');

                        sideNavState = [1, '#elemObj'];
                        break;
                  case dom('html').scrolled() > offSets['element-const'] + diff && dom('html').scrolled() < offSets['dom2-func'] + diff || dom('body').scrolled() > offSets['element-const'] + diff && dom('body').scrolled() < offSets['dom2-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem59 = _$('#elemConstLink') ? dom('#elemConstLink') : make('#elemConstLink').put("body");
                        elem59.class('hot');

                        sideNavState = [3, '#elemConstLink'];
                        break;
                  case dom('html').scrolled() > offSets['dom2-func'] + diff && dom('html').scrolled() < offSets['make2-func'] + diff || dom('body').scrolled() > offSets['dom2-func'] + diff && dom('body').scrolled() < offSets['make2-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem60 = _$('#dom2Link') ? dom('#dom2Link') : make('#dom2Link').put("body");
                        elem60.class('hot');

                        sideNavState = [3, '#dom2Link'];
                        break;
                  case dom('html').scrolled() > offSets['make2-func'] + diff && dom('html').scrolled() < offSets['elem-obj-methods'] + diff || dom('body').scrolled() > offSets['make2-func'] + diff && dom('body').scrolled() < offSets['elem-obj-methods'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem61 = _$('#make2Link') ? dom('#make2Link') : make('#make2Link').put("body");
                        elem61.class('hot').ma().class('hide', '-');

                        sideNavState = [2, '#make2Link'];
                        break;
                  case dom('html').scrolled() > offSets['elem-obj-methods'] + diff && dom('html').scrolled() < offSets['element-font-ex'] + diff || dom('body').scrolled() > offSets['elem-obj-methods'] + diff && dom('body').scrolled() < offSets['element-font-ex'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem62 = _$('#elemObjMethods') ? dom('#elemObjMethods') : make('#elemObjMethods').put("body");
                        elem62.class('hot').sib('next').class('hide', '-');

                        sideNavState = [1, '#elemObjMethods'];
                        break;
                  case dom('html').scrolled() > offSets['element-font-ex'] + diff && dom('html').scrolled() < offSets['style-methods'] + diff || dom('body').scrolled() > offSets['element-font-ex'] + diff && dom('body').scrolled() < offSets['style-methods'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem63 = _$('#fontExampLink') ? dom('#fontExampLink') : make('#fontExampLink').put("body");
                        elem63.class('hot');

                        sideNavState = [3, '#fontExampLink'];
                        break;
                  case dom('html').scrolled() > offSets['style-methods'] + diff && dom('html').scrolled() < offSets['core-func'] + diff || dom('body').scrolled() > offSets['style-methods'] + diff && dom('body').scrolled() < offSets['core-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem64 = _$('#stylMethodsLink') ? dom('#stylMethodsLink') : make('#stylMethodsLink').put("body");
                        elem64.class('hot');

                        sideNavState = [3, '#stylMethodsLink'];
                        break;
                  case dom('html').scrolled() > offSets['core-func'] + diff && dom('html').scrolled() < offSets['DOM-Elem-Methods'] + diff || dom('body').scrolled() > offSets['core-func'] + diff && dom('body').scrolled() < offSets['DOM-Elem-Methods'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem65 = _$('#coreLink') ? dom('#coreLink') : make('#coreLink').put("body");
                        elem65.class('hot');

                        sideNavState = [3, '#coreLink'];
                        break;
                  case dom('html').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('html').scrolled() < offSets['event-methods'] + diff || dom('body').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('body').scrolled() < offSets['event-methods'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem66 = _$('#domMethodsLink') ? dom('#domMethodsLink') : make('#domMethodsLink').put("body");
                        elem66.class('hot');

                        sideNavState = [3, '#domMethodsLink'];
                        break;
                  case dom('html').scrolled() > offSets['event-methods'] + diff && dom('html').scrolled() < offSets['Util-Methods'] + diff || dom('body').scrolled() > offSets['event-methods'] + diff && dom('body').scrolled() < offSets['Util-Methods'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem67 = _$('#eventMethodsLink') ? dom('#eventMethodsLink') : make('#eventMethodsLink').put("body");
                        elem67.class('hot');

                        sideNavState = [3, '#eventMethodsLink'];
                        break;
                  case dom('html').scrolled() > offSets['Util-Methods'] + diff && dom('html').scrolled() < offSets['elements-syntax'] + diff || dom('body').scrolled() > offSets['Util-Methods'] + diff && dom('body').scrolled() < offSets['elements-syntax'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem68 = _$('#utilMethodsLink') ? dom('#utilMethodsLink') : make('#utilMethodsLink').put("body");
                        elem68.class('hot').ma().class('hide', '-');

                        sideNavState = [2, '#utilMethodsLink'];
                        break;
                  case dom('html').scrolled() > offSets['elements-syntax'] + diff && dom('html').scrolled() < offSets['elemsyntax-func1'] + diff || dom('body').scrolled() > offSets['elements-syntax'] + diff && dom('body').scrolled() < offSets['elemsyntax-func1'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem69 = _$('#elemsSyntax') ? dom('#elemsSyntax') : make('#elemsSyntax').put("body");
                        elem69.class('hot').sib('next').class('hide', '-');

                        sideNavState = [1, '#elemsSyntax'];
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func1'] + diff && dom('html').scrolled() < offSets['elemsyntax-func2'] + diff || dom('body').scrolled() > offSets['elemsyntax-func1'] + diff && dom('body').scrolled() < offSets['elemsyntax-func2'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem70 = _$('#func1Link') ? dom('#func1Link') : make('#func1Link').put("body");
                        elem70.class('hot');

                        sideNavState = [3, '#func1Link'];
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func2'] + diff && dom('html').scrolled() < offSets['elemsyntax-func3'] + diff || dom('body').scrolled() > offSets['elemsyntax-func2'] + diff && dom('body').scrolled() < offSets['elemsyntax-func3'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem71 = _$('#func2Link') ? dom('#func2Link') : make('#func2Link').put("body");
                        elem71.class('hot');

                        sideNavState = [3, '#func2Link'];
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func3'] + diff && dom('html').scrolled() < offSets['elemsyntax-func4'] + diff || dom('body').scrolled() > offSets['elemsyntax-func3'] + diff && dom('body').scrolled() < offSets['elemsyntax-func4'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem72 = _$('#func3Link') ? dom('#func3Link') : make('#func3Link').put("body");
                        elem72.class('hot');

                        sideNavState = [3, '#func3Link'];
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func4'] + diff && dom('html').scrolled() < offSets['elemsyntax-func5'] + diff || dom('body').scrolled() > offSets['elemsyntax-func4'] + diff && dom('body').scrolled() < offSets['elemsyntax-func5'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem73 = _$('#func4Link') ? dom('#func4Link') : make('#func4Link').put("body");
                        elem73.class('hot');

                        sideNavState = [3, '#func4Link'];
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func5'] + diff && dom('html').scrolled() < offSets['elemsyntax-func6'] + diff || dom('body').scrolled() > offSets['elemsyntax-func5'] + diff && dom('body').scrolled() < offSets['elemsyntax-func6'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem74 = _$('#func5Link') ? dom('#func5Link') : make('#func5Link').put("body");
                        elem74.class('hot');

                        sideNavState = [3, '#func5Link'];
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func6'] + diff && dom('html').scrolled() < offSets['append-syntax'] + diff || dom('body').scrolled() > offSets['elemsyntax-func6'] + diff && dom('body').scrolled() < offSets['append-syntax'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem75 = _$('#func6Link') ? dom('#func6Link') : make('#func6Link').put("body");
                        elem75.class('hot');

                        sideNavState = [3, '#func6Link'];
                        break;
                  case dom('html').scrolled() > offSets['append-syntax'] + diff && dom('html').scrolled() < offSets['elemsyntax-func7'] + diff || dom('body').scrolled() > offSets['append-syntax'] + diff && dom('body').scrolled() < offSets['elemsyntax-func7'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem76 = _$('#appendStaxLink') ? dom('#appendStaxLink') : make('#appendStaxLink').put("body");
                        elem76.class('hot');

                        sideNavState = [3, '#appendStaxLink'];
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func7'] + diff || dom('body').scrolled() > offSets['elemsyntax-func7'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem77 = _$('#func7Link') ? dom('#func7Link') : make('#func7Link').put("body");
                        elem77.class('hot');

                        sideNavState = [3, '#func7Link'];
                        break;

                  default:
                        break;
            }
      });
}

module.exports = {
      getOffSets: getOffSets,
      sideNavController: sideNavController,
      mouseOverController: mouseOverController,
      mouseOutController: mouseOutController
};