/*
elementsJSIO.js
JavaScript file for the elementsJS project site.
*/



function getMarkDown() {
  console.log('here.');
  var url = 'http://cdn.rawgit.com/ejames9/elementsJS/gh-pages/js/markdown.js';
  var xhr = new XMLHttpRequest();
      xhr.onloadend = function() {
        if (xhr.status === 200) {
          console.log('200');
          console.log(this.responseText);
        }
      }

  xhr.open('GET', url);
  xhr.send(null);
};


function toggleNPMBar() {
  var npmBar = document.getElementById('npm-bar');

      if (npmBar.style.display === 'none') {
        npmBar.style.display = 'block';
      } else {
        npmBar.style.display = 'none';
      }
};


function init() {
  //initialize ace code editor
  var editor1 = ace.edit("editor1");
      editor1.setTheme("ace/theme/elementsJSIO");
      editor1.renderer.setShowGutter(false);
      editor1.getSession()
             .setMode("ace/mode/javascript");

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

getMarkDown();
