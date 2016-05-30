
/*
elementsJSLibTests.js

This is the elementsJS library test file.

Author: Eric James Foster
License: MIT
*/



//<<============elementsJS Library=====================>>//

describe('elementsJS Library', function() {
  //Function tests.
  describe('isElement() Function', function() {
    it("should return true if given an elementsJS element, and false otherwise.", function(fin) {
      var bools =  {
           true: isElement(element(el('#element'))),
          false: isDOMElement(90)
        };

      expect(bools.true).to.be.true;
      expect(bools.true).to.not.be.false;
      expect(bools.false).to.be.false;
      expect(bools.false).to.not.be.true;
      fin();
    });
  });
});
