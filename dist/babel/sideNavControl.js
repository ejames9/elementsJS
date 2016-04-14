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