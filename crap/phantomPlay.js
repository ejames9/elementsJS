



var page = require('webpage').create();

page.open('http://ejames9.github.io/elementsJS/', function(status) {
  if (status !== 'success') {
    console.log('Unable to access network');
  } else {

    page.injectJs('../lib/js/elements.js')

    var obj = page.evaluate(function() {
      return {
        title: document.title,
        // element: element(document.getElementById('npm-bar')),
        bool: isDOMElement(document.getElementById('npm-bar')),
        el: document.getElementById('npm-bar')
      }
    });

    console.log(JSON.stringify(obj));

  }


  phantom.exit();
});
// describe('this', ()=> {
//   it('should', (fin)=> {
//     expect(false).to.not.be.true;
//     expect(true).to.be.true;
//     fin();
//   });
// });
