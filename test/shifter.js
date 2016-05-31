
/*
shifter.js, Code for shifting between 404 and Testing functionality +++====>>>>
Author: Eric Foster
*/


//Run Once DOM is loaded.
document.addEventListener('DOMContentLoaded', function() {
  var
  moka = document.getElementById('mocha'),
  logo  = document.getElementById('logo'),
  _404_ = document.getElementById('_404_content');

  logo.addEventListener('click', function() {
    passCodeTerminal();
  });

  if (getCookie('TESTFLAG')) {
    var
    delCookie = document.getElementById('delCookie');

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


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}


function fireUpRejection() {
  dom('.unaryInput')
                  .every(function(element) {
                    element
                        .display('none').el
                        .value = '';
                  });

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
          document.cookie = "TESTFLAG=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

          el('#_404_content').style.display = 'block';
          el('#mocha').style.visibility = 'hidden';
          console.log('cookie: ' + document.cookie);
        });
      }

      setTimeout(function() {
        fireUpTests();
      }, 1000);
    } else {
      fireUpRejection();
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
  }

displayCodeTerminal();
}
