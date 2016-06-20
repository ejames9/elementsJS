
/*
shifter.js, Code for shifting between 404 and Testing functionality +++====>>>>
Author: Eric Foster
*/


function toggleClass(elems, name) {
  inspect(elems[0].el);
  for (var i = 0; i < elems.length;i++) {
    if (elems[i].el.className.indexOf(name) === -1) {
      elems[i]
            .class(name, '+');
    } else {
      elems[i]
            .class(name, '-');
    }
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function move(elem, cnt, ms, dir, cb) {
  cb = cb || null;

  var
  count = 0,
  right = 0,
  left  = 0;

  if (l !== 0 || r !== 0) {
    right = l; left = r;
  }

  function frame() {
    // update parameters
    if (dir === '>') {
      right += 4;
      count++;
      dom(elem)
            .left(right + 'px');
    } else if (dir === '<') {
      left -= 4;
      count++;
      dom(elem)
            .left(left + 'px');
    } else {
      err('Invalid Argument');
    }
    // check finish condition
    if (count === cnt) {
      if (r == 0) {
        r = right;
      }
      if (l == 0) {
        l = left;
      }
      clearInterval(id);
      if (cb) {
        cb();
      }
    }
  }
  // draw every 1ms
  var id = setInterval(function() {
    frame();
  }, ms);
}


function backTo_404_() {
  r = 0;
  l = 0;

  dom('#braxLeft, #braxRight')
                        .every(function(element) {
                          if (element.left() !== '') {
                            element
                                .left('');
                          }
                        });
  if (_$('#codeShader')) {
    setTimeout(function() {
      dom('#codeShader').ma().el.removeChild(el('#codeShader'));
    }, 500);
  }
  document.cookie = "TESTFLAG=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

  el('#_404_content').style.display = 'block';
  el('#mocha').style.visibility = 'hidden';
  console.log('cookie: ' + document.cookie);
}


function fireUpRejection() {
  dom('.unaryInput')
                  .every(function(element) {
                    element
                        .display('none').el
                        .value = '';
                  });
  move('#braxLeft', 75, 1, '>');
  move('#braxRight', 75, 1, '<');

  setTimeout(function() {
    make('#circle')
                .aft('#element')
                .position('absolute');
    make('#nope', 'h3')
                .aft('#circle')
                .html('Nope.')
                .position('absolute');
    dom('#codeShader')
                .opacity('.9');
    dom('.braxes')
                .every(function(element) {
                  element
                      .class('noShadow', '+');
                });
   //flashing animation....
  //  var array  = [],
  //      braxel = dom('#braxLeft'),
  //      braxer = dom('#braxRight'),
  //      circle = dom('#circle');
   //
  //      array.push(circle);
  //      array.push(braxel);
  //      array.push(braxer);

  //  var flash  = setInterval(toggleClass(array, 'shadowFlash'), 400),
  //      start  = new Date().getMilliseconds();
  //  while (true) {
  //    if (new Date().getMilliseconds - start > 3000) {
  //      clearInterval(flash);
  //      break;
  //    }
  //  }
    setTimeout(function() {
      dom('.unaryInput')
                      .every(function(element) {
                        element
                            .ma().el.removeChild(element.el);
                      });
      dom('.braxes')
                  .every(function(element) {
                    element
                        .class('noShadow', '-');
                  });
      dom('#circle').ma().el.removeChild(el('#circle'));
      dom('#nope').ma().el.removeChild(el('#nope'));
      //move brackets back into place.
      move('#braxLeft', 75, 1, '<');
      move('#braxRight', 75, 1, '>', backTo_404_);
    }, 3000);
  }, 2300);
}


function passCodeTerminal() {
  var
  codeKey = [],
  rawGit  = 'https://rawgit.com/ejames9/elementsJS/gh-pages/',
  hashKey = 'test/lib/js/md5.min.js';


  function validateKeyCode() {
    //Say what now?
    if (xhr(url(rawGit, hashKey)).slice(3, 36).slice(0, -1) === md5(String(codeKey))) {

      //Inner validation function closure.
      function fireUpTests() {
        var
        delCookie = document.getElementById('delCookie');
        dom('.unaryInput')
                        .every(function(element) {
                          element
                              .ma().el.removeChild(element.el);
                        });
        dom('#codeShader').ma().el.removeChild(el('#codeShader'));

        el('#_404_content').style.display = 'none';
        el('#mocha').style.visibility = 'visible';

        document.cookie = 'TESTFLAG=true';
        // mocha.run();
        delCookie.addEventListener('click', function() {
          backTo_404_();
        });
      }

      setTimeout(function() {
        fireUpTests();
      }, 1000);
    } else {
      setTimeout(function() {
        fireUpRejection();
      }, 1000);
    }
  }

  function starDigitFour() {
    el('#unary4').value = '*';
    el('#unary4').blur();

    // for (var i = 0; i < codeKey.length; i++) {
    //   info(String.fromCharCode(String(codeKey[i])));
    // }
    validateKeyCode();
  }

  function starDigitThree() {
    el('#unary3').value = '*';
    el('#unary4').focus();

    keyDown('#unary4', function(e) {
      e.preventDefault();
      codeKey.push(e.keyCode);
      starDigitFour();
    });
  }

  function starDigitTwo() {
    el('#unary2').value = '*';
    el('#unary3').focus();

    keyDown('#unary3', function(e) {
      e.preventDefault();
      codeKey.push(e.keyCode);
      starDigitThree();
    });
  }

  function starDigitOne() {
    el('#unary1').value = '*';
    el('#unary2').focus();

    keyDown('#unary2', function(e) {
      e.preventDefault();
      codeKey.push(e.keyCode);
      starDigitTwo();
    });
  }

  function displayCodeTerminal() {
    make('#codeShader')
                      .put('body');
    make('#codeTerminal')
                      .aft('#element');
    make('.unaryInput', 'input')
                      .id('unary1')
                      .put('#codeTerminal')
                      .core(function(el) {
                        el.focus();
                      })
                      .once('keydown', function(e) {
                        e.preventDefault();
                        codeKey.push(e.keyCode);
                        starDigitOne();
                      });
    make('.unaryInput', 'input')
                      .id('unary2')
                      .put('#codeTerminal');
    make('.unaryInput', 'input')
                      .id('unary3')
                      .put('#codeTerminal');
    make('.unaryInput', 'input')
                      .id('unary4')
                      .put('#codeTerminal');
    dom('.braxes')
                    .every(function(element) {
                      element
                          .position('relative')
                          .zIndex('99');
                    });
  }
displayCodeTerminal();
}



//Run Once DOM is loaded.
go
(function() {
  var
  moka  = el('#mocha'),
  logo  = el('#logo'),
  _404_ = el('#_404_content');

  window.r = 0;
  window.l = 0;

  logo.addEventListener('click', function() {
    passCodeTerminal();
  });

  if (getCookie('TESTFLAG')) {
    var
    delCookie = el('#delCookie');

    _404_.style.display = 'none';
    moka.style.visibility = 'visible';

    delCookie.addEventListener('click', function() {
      document.cookie = "TESTFLAG=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

      _404_.style.display = 'block';
      moka.style.visibility = 'hidden';
      console.log('cookie: ' + document.cookie);
    });
  }
});
