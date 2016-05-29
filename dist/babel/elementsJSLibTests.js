"use strict";

///-------elementsJS requires---------///
var _$ = require("elementsJS")._$;
var dom = require("elementsJS").dom;
var make = require("elementsJS").make;
var element = require("elementsJS").element;
///|------------------------------------|//

/*
elementsJSLibTests.js

This is the elementsJS library test file.

Author: Eric James Foster
License: MIT
*/

// var Element    = require('../../dist/lib/element'),
//     eJS        = require('../../dist/index'),
//     events     = require('../../dist/lib/events'),
//     consōl     = require('../../dist/lib/logger'),
//     DOM        = require('../../dist/lib/DOM'),
//     utils      = require('../../dist/lib/utilities'),
//     requests   = require('../../dist/lib/httpRequests'),
//     expect     = require('chai').expect,
//     page       = require('webpage');
//<<============elementsJS Library=====================>>//

describe('this', function () {
  it('should', function (fin) {
    expect(false).to.not.be.true;
    expect(true).to.be.true;
    fin();
  });
});
describe('elementsJS Library', function () {

  //
  describe('isElement() Function', function () {
    it("should return true if given an elementsJS element, and false otherwise.", function () {
      var bools = {
        true: isElement(element(el('#element'))),
        false: isElement(element('#element'))
      };
      expect(bools.true).to.be.true;
      expect(bools.true).to.not.be.false;
      expect(bools.false).to.be.false;
      expect(bools.false).to.not.be.true;
    });
  });
});