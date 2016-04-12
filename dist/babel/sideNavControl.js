"use strict";

var _elementsJS = require("elementsJS");

///-------elementsJS requires---------///
var _$ = require("elementsJS")._$;
var dom = require("elementsJS").dom;
var make = require("elementsJS").make;
///|------------------------------------|//

function getOffSets() {
    var offSets = {};
    offSets['get-started'] = (0, _elementsJS.el)('#get-started').offsetTop;
    offSets['installation'] = (0, _elementsJS.el)('#installation').offsetTop;
    offSets['usage'] = (0, _elementsJS.el)('#usage').offsetTop;
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
    offSets['on-func'] = (0, _elementsJS.el)('#off-func').offsetTop;
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
    offSets['error-func'] = (0, _elementsJS.el)('#error-func').offsetTop;
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

    document.addEventListener('scroll', function () {
        switch (true) {
            case (0, _elementsJS.el)('html').scrollTop > 13 && (0, _elementsJS.el)('html').scrollTop < 94:
                log('hello 13', 'red');
                var elem0 = _$('#getStart') ? dom('#getStart') : make('#getStart').put("body");
                elem0.bgColor('blue').color('red');
                break;
            case (0, _elementsJS.el)('html').scrollTop > 94 && (0, _elementsJS.el)('html').scrollTop < 180:
                log('hello 94', 'red');
                var elem1 = _$('#install') ? dom('#install') : make('#install').put("body");
                elem1.bgColor('blue').color('red');
                break;
            default:
                log((0, _elementsJS.el)('html').scrollTop);
        }
    });
}

module.exports = {
    getOffSets: getOffSets,
    sideNavController: sideNavController
};