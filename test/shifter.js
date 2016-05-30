
document.addEventListener('DOMContentLoaded', function() {
  var
  moka = document.getElementById('mocha'),
  logo  = document.getElementById('logo'),
  _404_ = document.getElementById('_404_content');

  logo.addEventListener('click', function() {
    _404_.style.display = 'none';
    moka.style.visibility = 'visible';

     document.cookie = 'TESTFLAG=true';

    // mocha.run();
  });
  var
  cookie = document.cookie;
  console.log(cookie);
  console.log(getCookie(
    'TESTFLAG'
  ));

  if (getCookie('TESTFLAG')) {
    moka.style.visibility = 'visible';
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
