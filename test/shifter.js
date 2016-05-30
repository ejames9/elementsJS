
document.addEventListener('DOMContentLoaded', function() {
  var
  moka = document.getElementById('mocha'),
  logo  = document.getElementById('logo'),
  _404_ = document.getElementById('_404_content');

  logo.addEventListener('click', function() {
    _404_.style.display = 'none';
    moka.style.visibility = 'visible';

    // mocha.run();
  });

  if (TEST_FLAG) {
    moka.style.visibility = 'visible';
  }
});
