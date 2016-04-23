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
                        var elem0 = _$('#getStart') ? dom('#getStart') : make('#getStart').put("body");
                        elem0.class('hot').sib('next').class('hide', '+');
                        break;
                  case dom('html').scrolled() > offSets['installation'] + diff && dom('html').scrolled() < offSets['Usage'] + diff || dom('body').scrolled() > offSets['installation'] + diff && dom('body').scrolled() < offSets['Usage'] + diff:
                        // log('YES', ['red', 'blue'] + diff);
                        //Find active list item, deactivate it.
                        dom('[class~=hot]').class('hot', '-');
                        //Find all menu lists, hide them.
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        //Activate Installation list item. Open parent list by removing .hide class.
                        var elem1 = _$('#instLink') ? dom('#instLink') : make('#instLink').put("body");
                        elem1.class('hot').ma().class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['Usage'] + diff && dom('html').scrolled() < offSets['interpreter-install'] + diff || dom('body').scrolled() > offSets['Usage'] + diff && dom('body').scrolled() < offSets['interpreter-install'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem2 = _$('#useLink') ? dom('#useLink') : make('#useLink').put("body");
                        elem2.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['interpreter-install'] + diff && dom('html').scrolled() < offSets['imports'] + diff || dom('body').scrolled() > offSets['interpreter-install'] + diff && dom('body').scrolled() < offSets['imports'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem3 = _$('#interpInstallLink') ? dom('#interpInstallLink') : make('#interpInstallLink').put("body");
                        elem3.class('hot').ma().class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['imports'] + diff && dom('html').scrolled() < offSets['DOM'] + diff || dom('body').scrolled() > offSets['imports'] + diff && dom('body').scrolled() < offSets['DOM'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem4 = _$('#imps') ? dom('#imps') : make('#imps').put("body");
                        elem4.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['DOM'] + diff && dom('html').scrolled() < offSets['el-func'] + diff || dom('body').scrolled() > offSets['DOM'] + diff && dom('body').scrolled() < offSets['el-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem5 = _$('#domManip') ? dom('#domManip') : make('#domManip').put("body");
                        elem5.class('hot').sib('next').class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['el-func'] + diff && dom('html').scrolled() < offSets['dom-func'] + diff || dom('body').scrolled() > offSets['el-func'] + diff && dom('body').scrolled() < offSets['dom-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem6 = _$('#elLink') ? dom('#elLink') : make('#elLink').put("body");
                        elem6.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['dom-func'] + diff && dom('html').scrolled() < offSets['__-func'] + diff || dom('body').scrolled() > offSets['dom-func'] + diff && dom('body').scrolled() < offSets['__-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem7 = _$('#domLink') ? dom('#domLink') : make('#domLink').put("body");
                        elem7.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['__-func'] + diff && dom('html').scrolled() < offSets['make-func'] + diff || dom('body').scrolled() > offSets['__-func'] + diff && dom('body').scrolled() < offSets['make-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem8 = _$('#__Link') ? dom('#__Link') : make('#__Link').put("body");
                        elem8.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['make-func'] + diff && dom('html').scrolled() < offSets['put-func'] + diff || dom('body').scrolled() > offSets['make-func'] + diff && dom('body').scrolled() < offSets['put-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem9 = _$('#makeLink') ? dom('#makeLink') : make('#makeLink').put("body");
                        elem9.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['put-func'] + diff && dom('html').scrolled() < offSets['x-func'] + diff || dom('body').scrolled() > offSets['put-func'] + diff && dom('body').scrolled() < offSets['x-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem10 = _$('#putLink') ? dom('#putLink') : make('#putLink').put("body");
                        elem10.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['x-func'] + diff && dom('html').scrolled() < offSets['fore-func'] + diff || dom('body').scrolled() > offSets['x-func'] + diff && dom('body').scrolled() < offSets['fore-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem11 = _$('#xLink') ? dom('#xLink') : make('#xLink').put("body");
                        elem11.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['fore-func'] + diff && dom('html').scrolled() < offSets['aft-func'] + diff || dom('body').scrolled() > offSets['fore-func'] + diff && dom('body').scrolled() < offSets['aft-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem12 = _$('#foreLink') ? dom('#foreLink') : make('#foreLink').put("body");
                        elem12.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['aft-func'] + diff && dom('html').scrolled() < offSets['show-func'] + diff || dom('body').scrolled() > offSets['aft-func'] + diff && dom('body').scrolled() < offSets['show-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem13 = _$('#aftLink') ? dom('#aftLink') : make('#aftLink').put("body");
                        elem13.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['show-func'] + diff && dom('html').scrolled() < offSets['hide-func'] + diff || dom('body').scrolled() > offSets['show-func'] + diff && dom('body').scrolled() < offSets['hide-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem14 = _$('#showLink') ? dom('#showLink') : make('#showLink').put("body");
                        elem14.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['hide-func'] + diff && dom('html').scrolled() < offSets['size-func'] + diff || dom('body').scrolled() > offSets['hide-func'] + diff && dom('body').scrolled() < offSets['size-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem15 = _$('#hydeLink') ? dom('#hydeLink') : make('#hydeLink').put("body");
                        elem15.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['size-func'] + diff && dom('html').scrolled() < offSets['event-handle'] + diff || dom('body').scrolled() > offSets['size-func'] + diff && dom('body').scrolled() < offSets['event-handle'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem16 = _$('#sizeLink') ? dom('#sizeLink') : make('#sizeLink').put("body");
                        elem16.class('hot').ma().class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['event-handle'] + diff && dom('html').scrolled() < offSets['go-func'] + diff || dom('body').scrolled() > offSets['event-handle'] + diff && dom('body').scrolled() < offSets['go-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem17 = _$('#eventHand') ? dom('#eventHand') : make('#eventHand').put("body");
                        elem17.class('hot').sib('next').class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['go-func'] + diff && dom('html').scrolled() < offSets['on-func'] + diff || dom('body').scrolled() > offSets['go-func'] + diff && dom('body').scrolled() < offSets['on-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem18 = _$('#goLink') ? dom('#goLink') : make('#goLink').put("body");
                        elem18.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['on-func'] + diff && dom('html').scrolled() < offSets['off-func'] + diff || dom('body').scrolled() > offSets['on-func'] + diff && dom('body').scrolled() < offSets['off-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem19 = _$('#onLink') ? dom('#onLink') : make('#onLink').put("body");
                        elem19.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['off-func'] + diff && dom('html').scrolled() < offSets['once-func'] + diff || dom('body').scrolled() > offSets['off-func'] + diff && dom('body').scrolled() < offSets['once-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem20 = _$('#offLink') ? dom('#offLink') : make('#offLink').put("body");
                        elem20.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['once-func'] + diff && dom('html').scrolled() < offSets['spark-func'] + diff || dom('body').scrolled() > offSets['once-func'] + diff && dom('body').scrolled() < offSets['spark-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem21 = _$('#onceLink') ? dom('#onceLink') : make('#onceLink').put("body");
                        elem21.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['spark-func'] + diff && dom('html').scrolled() < offSets['click-func'] + diff || dom('body').scrolled() > offSets['spark-func'] + diff && dom('body').scrolled() < offSets['click-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem22 = _$('#sparkLink') ? dom('#sparkLink') : make('#sparkLink').put("body");
                        elem22.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['click-func'] + diff && dom('html').scrolled() < offSets['dblClick-func'] + diff || dom('body').scrolled() > offSets['click-func'] + diff && dom('body').scrolled() < offSets['dblClick-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem23 = _$('#clickLink') ? dom('#clickLink') : make('#clickLink').put("body");
                        elem23.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['dblClick-func'] + diff && dom('html').scrolled() < offSets['blur-func'] + diff || dom('body').scrolled() > offSets['dblClick-func'] + diff && dom('body').scrolled() < offSets['blur-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem24 = _$('#dblLink') ? dom('#dblLink') : make('#dblLink').put("body");
                        elem24.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['blur-func'] + diff && dom('html').scrolled() < offSets['error-func'] + diff || dom('body').scrolled() > offSets['blur-func'] + diff && dom('body').scrolled() < offSets['error-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem25 = _$('#blurLink') ? dom('#blurLink') : make('#blurLink').put("body");
                        elem25.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['error-func'] + diff && dom('html').scrolled() < offSets['focus-func'] + diff || dom('body').scrolled() > offSets['error-func'] + diff && dom('body').scrolled() < offSets['focus-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem26 = _$('#errorLink') ? dom('#errorLink') : make('#errorLink').put("body");
                        elem26.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['focus-func'] + diff && dom('html').scrolled() < offSets['focusIn-func'] + diff || dom('body').scrolled() > offSets['focus-func'] + diff && dom('body').scrolled() < offSets['focusIn-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem27 = _$('#focusLink') ? dom('#focusLink') : make('#focusLink').put("body");
                        elem27.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['focusIn-func'] + diff && dom('html').scrolled() < offSets['focusOut-func'] + diff || dom('body').scrolled() > offSets['focusIn-func'] + diff && dom('body').scrolled() < offSets['focusOut-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem28 = _$('#focusInLink') ? dom('#focusInLink') : make('#focusInLink').put("body");
                        elem28.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['focusOut-func'] + diff && dom('html').scrolled() < offSets['keyUp-func'] + diff || dom('body').scrolled() > offSets['focusOut-func'] + diff && dom('body').scrolled() < offSets['keyUp-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem29 = _$('#focusOutLink') ? dom('#focusOutLink') : make('#focusOutLink').put("body");
                        elem29.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['keyUp-func'] + diff && dom('html').scrolled() < offSets['keyDown-func'] + diff || dom('body').scrolled() > offSets['keyUp-func'] + diff && dom('body').scrolled() < offSets['keyDown-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem30 = _$('#keyUpLink') ? dom('#keyUpLink') : make('#keyUpLink').put("body");
                        elem30.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['keyDown-func'] + diff && dom('html').scrolled() < offSets['load-func'] + diff || dom('body').scrolled() > offSets['keyDown-func'] + diff && dom('body').scrolled() < offSets['load-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem31 = _$('#keyDownLink') ? dom('#keyDownLink') : make('#keyDownLink').put("body");
                        elem31.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['load-func'] + diff && dom('html').scrolled() < offSets['unLoad-func'] + diff || dom('body').scrolled() > offSets['load-func'] + diff && dom('body').scrolled() < offSets['unLoad-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem32 = _$('#loadLink') ? dom('#loadLink') : make('#loadLink').put("body");
                        elem32.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['unLoad-func'] + diff && dom('html').scrolled() < offSets['mouse-func'] + diff || dom('body').scrolled() > offSets['unLoad-func'] + diff && dom('body').scrolled() < offSets['mouse-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem33 = _$('#unLoadLink') ? dom('#unLoadLink') : make('#unLoadLink').put("body");
                        elem33.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['mouse-func'] + diff && dom('html').scrolled() < offSets['resize-func'] + diff || dom('body').scrolled() > offSets['mouse-func'] + diff && dom('body').scrolled() < offSets['resize-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem34 = _$('#mouseLink') ? dom('#mouseLink') : make('#mouseLink').put("body");
                        elem34.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['resize-func'] + diff && dom('html').scrolled() < offSets['scroll-func'] + diff || dom('body').scrolled() > offSets['resize-func'] + diff && dom('body').scrolled() < offSets['scroll-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem35 = _$('#resizeLink') ? dom('#resizeLink') : make('#resizeLink').put("body");
                        elem35.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['scroll-func'] + diff && dom('html').scrolled() < offSets['select-func'] + diff || dom('body').scrolled() > offSets['scroll-func'] + diff && dom('body').scrolled() < offSets['select-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem36 = _$('#scrollLink') ? dom('#scrollLink') : make('#scrollLink').put("body");
                        elem36.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['select-func'] + diff && dom('html').scrolled() < offSets['http'] + diff || dom('body').scrolled() > offSets['select-func'] + diff && dom('body').scrolled() < offSets['http'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem37 = _$('#selectLink') ? dom('#selectLink') : make('#selectLink').put("body");
                        elem37.class('hot').ma().class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['http'] + diff && dom('html').scrolled() < offSets['xhr-func'] + diff || dom('body').scrolled() > offSets['http'] + diff && dom('body').scrolled() < offSets['xhr-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem38 = _$('#httpReq') ? dom('#httpReq') : make('#httpReq').put("body");
                        elem38.class('hot').sib('next').class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['xhr-func'] + diff && dom('html').scrolled() < offSets['ajax-func'] + diff || dom('body').scrolled() > offSets['xhr-func'] + diff && dom('body').scrolled() < offSets['ajax-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem39 = _$('#xhrLink') ? dom('#xhrLink') : make('#xhrLink').put("body");
                        elem39.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['ajax-func'] + diff && dom('html').scrolled() < offSets['loggers'] + diff || dom('body').scrolled() > offSets['ajax-func'] + diff && dom('body').scrolled() < offSets['loggers'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem40 = _$('#ajaxLink') ? dom('#ajaxLink') : make('#ajaxLink').put("body");
                        elem40.class('hot').ma().class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['loggers'] + diff && dom('html').scrolled() < offSets['log-func'] + diff || dom('body').scrolled() > offSets['loggers'] + diff && dom('body').scrolled() < offSets['log-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem41 = _$('#logg') ? dom('#logg') : make('#logg').put("body");
                        elem41.class('hot').sib('next').class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['log-func'] + diff && dom('html').scrolled() < offSets['info-func'] + diff || dom('body').scrolled() > offSets['log-func'] + diff && dom('body').scrolled() < offSets['info-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem42 = _$('#logLink') ? dom('#logLink') : make('#logLink').put("body");
                        elem42.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['info-func'] + diff && dom('html').scrolled() < offSets['warn-func'] + diff || dom('body').scrolled() > offSets['info-func'] + diff && dom('body').scrolled() < offSets['warn-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem43 = _$('#infoLink') ? dom('#infoLink') : make('#infoLink').put("body");
                        elem43.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['warn-func'] + diff && dom('html').scrolled() < offSets['err-func'] + diff || dom('body').scrolled() > offSets['warn-func'] + diff && dom('body').scrolled() < offSets['err-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem44 = _$('#warnLink') ? dom('#warnLink') : make('#warnLink').put("body");
                        elem44.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['err-func'] + diff && dom('html').scrolled() < offSets['utils'] + diff || dom('body').scrolled() > offSets['err-func'] + diff && dom('body').scrolled() < offSets['utils'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem45 = _$('#errLink') ? dom('#errLink') : make('#errLink').put("body");
                        elem45.class('hot').ma().class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['utils'] + diff && dom('html').scrolled() < offSets['proto-func'] + diff || dom('body').scrolled() > offSets['utils'] + diff && dom('body').scrolled() < offSets['proto-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem46 = _$('#utilFunc') ? dom('#utilFunc') : make('#utilFunc').put("body");
                        elem46.class('hot').sib('next').class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['proto-func'] + diff && dom('html').scrolled() < offSets['shifter-func'] + diff || dom('body').scrolled() > offSets['proto-func'] + diff && dom('body').scrolled() < offSets['shifter-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem47 = _$('#protoLink') ? dom('#protoLink') : make('#protoLink').put("body");
                        elem47.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['shifter-func'] + diff && dom('html').scrolled() < offSets['elem-obj'] + diff || dom('body').scrolled() > offSets['shifter-func'] + diff && dom('body').scrolled() < offSets['elem-obj'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem48 = _$('#shifterLink') ? dom('#shifterLink') : make('#shifterLink').put("body");
                        elem48.class('hot').ma().class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['elem-obj'] + diff && dom('html').scrolled() < offSets['element-const'] + diff || dom('body').scrolled() > offSets['elem-obj'] + diff && dom('body').scrolled() < offSets['element-const'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem49 = _$('#elemObj') ? dom('#elemObj') : make('#elemObj').put("body");
                        elem49.class('hot').sib('next').class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['element-const'] + diff && dom('html').scrolled() < offSets['dom2-func'] + diff || dom('body').scrolled() > offSets['element-const'] + diff && dom('body').scrolled() < offSets['dom2-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem50 = _$('#elemConstLink') ? dom('#elemConstLink') : make('#elemConstLink').put("body");
                        elem50.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['dom2-func'] + diff && dom('html').scrolled() < offSets['make2-func'] + diff || dom('body').scrolled() > offSets['dom2-func'] + diff && dom('body').scrolled() < offSets['make2-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem51 = _$('#dom2Link') ? dom('#dom2Link') : make('#dom2Link').put("body");
                        elem51.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['make2-func'] + diff && dom('html').scrolled() < offSets['elem-obj-methods'] + diff || dom('body').scrolled() > offSets['make2-func'] + diff && dom('body').scrolled() < offSets['elem-obj-methods'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem52 = _$('#make2Link') ? dom('#make2Link') : make('#make2Link').put("body");
                        elem52.class('hot').ma().class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['elem-obj-methods'] + diff && dom('html').scrolled() < offSets['element-font-ex'] + diff || dom('body').scrolled() > offSets['elem-obj-methods'] + diff && dom('body').scrolled() < offSets['element-font-ex'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem53 = _$('#elemObjMethods') ? dom('#elemObjMethods') : make('#elemObjMethods').put("body");
                        elem53.class('hot').sib('next').class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['element-font-ex'] + diff && dom('html').scrolled() < offSets['style-methods'] + diff || dom('body').scrolled() > offSets['element-font-ex'] + diff && dom('body').scrolled() < offSets['style-methods'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem54 = _$('#fontExampLink') ? dom('#fontExampLink') : make('#fontExampLink').put("body");
                        elem54.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['style-methods'] + diff && dom('html').scrolled() < offSets['core-func'] + diff || dom('body').scrolled() > offSets['style-methods'] + diff && dom('body').scrolled() < offSets['core-func'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem55 = _$('#stylMethodsLink') ? dom('#stylMethodsLink') : make('#stylMethodsLink').put("body");
                        elem55.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['core-func'] + diff && dom('html').scrolled() < offSets['DOM-Elem-Methods'] + diff || dom('body').scrolled() > offSets['core-func'] + diff && dom('body').scrolled() < offSets['DOM-Elem-Methods'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem56 = _$('#coreLink') ? dom('#coreLink') : make('#coreLink').put("body");
                        elem56.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('html').scrolled() < offSets['event-methods'] + diff || dom('body').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('body').scrolled() < offSets['event-methods'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem57 = _$('#domMethodsLink') ? dom('#domMethodsLink') : make('#domMethodsLink').put("body");
                        elem57.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['event-methods'] + diff && dom('html').scrolled() < offSets['Util-Methods'] + diff || dom('body').scrolled() > offSets['event-methods'] + diff && dom('body').scrolled() < offSets['Util-Methods'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem58 = _$('#eventMethodsLink') ? dom('#eventMethodsLink') : make('#eventMethodsLink').put("body");
                        elem58.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['Util-Methods'] + diff && dom('html').scrolled() < offSets['elements-syntax'] + diff || dom('body').scrolled() > offSets['Util-Methods'] + diff && dom('body').scrolled() < offSets['elements-syntax'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem59 = _$('#utilMethodsLink') ? dom('#utilMethodsLink') : make('#utilMethodsLink').put("body");
                        elem59.class('hot').ma().class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['elements-syntax'] + diff && dom('html').scrolled() < offSets['elemsyntax-func1'] + diff || dom('body').scrolled() > offSets['elements-syntax'] + diff && dom('body').scrolled() < offSets['elemsyntax-func1'] + diff:
                        dom('[class~=hot]').class('hot', '-');

                        dom('[name=hidden]').every(function (element) {
                              element.class('hide');
                        });
                        var elem60 = _$('#elemsSyntax') ? dom('#elemsSyntax') : make('#elemsSyntax').put("body");
                        elem60.class('hot').sib('next').class('hide', '-');
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func1'] + diff && dom('html').scrolled() < offSets['elemsyntax-func2'] + diff || dom('body').scrolled() > offSets['elemsyntax-func1'] + diff && dom('body').scrolled() < offSets['elemsyntax-func2'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem61 = _$('#func1Link') ? dom('#func1Link') : make('#func1Link').put("body");
                        elem61.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func2'] + diff && dom('html').scrolled() < offSets['elemsyntax-func3'] + diff || dom('body').scrolled() > offSets['elemsyntax-func2'] + diff && dom('body').scrolled() < offSets['elemsyntax-func3'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem62 = _$('#func2Link') ? dom('#func2Link') : make('#func2Link').put("body");
                        elem62.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func3'] + diff && dom('html').scrolled() < offSets['elemsyntax-func4'] + diff || dom('body').scrolled() > offSets['elemsyntax-func3'] + diff && dom('body').scrolled() < offSets['elemsyntax-func4'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem63 = _$('#func3Link') ? dom('#func3Link') : make('#func3Link').put("body");
                        elem63.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func4'] + diff && dom('html').scrolled() < offSets['elemsyntax-func5'] + diff || dom('body').scrolled() > offSets['elemsyntax-func4'] + diff && dom('body').scrolled() < offSets['elemsyntax-func5'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem64 = _$('#func4Link') ? dom('#func4Link') : make('#func4Link').put("body");
                        elem64.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func5'] + diff && dom('html').scrolled() < offSets['elemsyntax-func6'] + diff || dom('body').scrolled() > offSets['elemsyntax-func5'] + diff && dom('body').scrolled() < offSets['elemsyntax-func6'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem65 = _$('#func5Link') ? dom('#func5Link') : make('#func5Link').put("body");
                        elem65.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func6'] + diff && dom('html').scrolled() < offSets['append-syntax'] + diff || dom('body').scrolled() > offSets['elemsyntax-func6'] + diff && dom('body').scrolled() < offSets['append-syntax'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem66 = _$('#func6Link') ? dom('#func6Link') : make('#func6Link').put("body");
                        elem66.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['append-syntax'] + diff && dom('html').scrolled() < offSets['elemsyntax-func7'] + diff || dom('body').scrolled() > offSets['append-syntax'] + diff && dom('body').scrolled() < offSets['elemsyntax-func7'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem67 = _$('#appendStaxLink') ? dom('#appendStaxLink') : make('#appendStaxLink').put("body");
                        elem67.class('hot');
                        break;
                  case dom('html').scrolled() > offSets['elemsyntax-func7'] + diff || dom('body').scrolled() > offSets['elemsyntax-func7'] + diff:
                        dom('[class~=hot]').class('hot', '-');
                        var elem68 = _$('#func7Link') ? dom('#func7Link') : make('#func7Link').put("body");
                        elem68.class('hot');
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