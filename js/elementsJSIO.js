




function toggleNPMBar() {
  var npmBar = document.getElementById('npm-bar');

      if (npmBar.style.display === 'none') {
        npmBar.style.display = 'block';
      } else {
        npmBar.style.display = 'none';
      }
};


function init() {
  var npmBar = document.getElementById('npm-bar');
      npmBar.style.display = 'none';

  var html = document.getElementsByTagName('html')[0];
      html.addEventListener('click', function(e) {

        if (e.target === document.getElementById('install-info')) {
          console.log("we're in");
          toggleNPMBar();
        } else if (npmBar.style.display !== 'none') {
          npmBar.style.display = 'none';
        }
      });
};



document.addEventListener('DOMContentLoaded', init());
