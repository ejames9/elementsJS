
/*
elementsJSIO.js
JavaScript file for the elementsJS project site.

https://rawgit.com/ejames9/elementsJS/gh-pages/html/docsMenu.html
https://cdn.rawgit.com/ejames9/elementsJS/5f9f194/html/docsMenu.html

if ( sideNav.offsetTop < document.documentElement.scrollTop + 70 || sideNav.offsetTop < document.body.scrollTop + 70) {
//         sideNav.setAttribute("class","sticky");
//         console.log(e);
//     }
*/


imports({
    'elementsJS': ['imports', 'go', 'el', 'log', 'url', 'ajax', 'on', 'click', 'scroll'],
        'marked': 'marked'
});


var commit = '5f9f194';
var rawGit = 'https://rawgit.com/ejames9/elementsJS/gh-pages/';
var rawGitCDN = 'https://cdn.rawgit.com/ejames9/elementsJS/' + commit +'/';

var docsMenu = 'html/docsMenu.html';
var mdUrl = 'md/elementsJSIODocs.md';
var markDown;




//Documentation page change function
function insertDocs() {
  //Grab side-bar/documentation template  html from github with rawgit cdn, insert side-bar/template, and docs into their containers.
  ajax(url(rawGit, docsMenu), null, (r)=> {
    <'#content'/>
              .html(r);
    <'#docsMain'/>
              .html(marked(markDown));

    var b = true;
    log(el('#dom-func').offsetTop);

    scroll(window, (e)=> {
      log(document.documentElement.scrollTop + '     ' + el('#DOM').offsetTop);

      if (el('#DOM').offsetTop < document.body.scrollTop || el('#DOM').offsetTop < document.documentElement.scrollTop) {
        if (b) {
          log('blue', 'blue');
          log(e);
          b = false;
        }
      }

    })
  });
}


//After page loads, load elementsJSIODocs.md into a variable.
function getMarkDown() {
  var addy = url(rawGit, mdUrl);
  var xhr = new XMLHttpRequest();
      xhr.onloadend = function() {
        if (xhr.status === 200) {
          var r = this.responseText;

          markDown = r;
        }
      }
  xhr.open('GET', addy);
  xhr.send();
}


//Function for toggling npm/bower install info panel.
function toggleNPMBar() {
  var npmBar = document.getElementById('npm-bar');

      if (npmBar.style.display === 'none') {
        npmBar.style.display = 'block';
      } else {
        npmBar.style.display = 'none';
      }
}


//Initialization code to be run after DOM content is loaded.
go(()=> {
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
        switch(e.target) {
          case (document.getElementById('install-info')):
              toggleNPMBar();
              break;
          case (document.getElementById('api-butn')):
              console.log("I'm in.");
              insertDocs();
              break;
          default:
              if (npmBar.style.display !== 'none') {
                npmBar.style.display = 'none';
              }
              log(e);
        }
      });
  getMarkDown();
});
