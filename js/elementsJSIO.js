
/*
elementsJSIO.js
JavaScript file for the elementsJS project site.

https://rawgit.com/ejames9/elementsJS/gh-pages/html/docsMenu.html
https://cdn.rawgit.com/ejames9/elementsJS/5f9f194/html/docsMenu.html
*/



import { imports, go, log, xhr, ajax, on, click, scroll } from 'elementsJS';

imports({
      'marked': 'marked'
});


var commit = '5f9f194';
var rawGit = 'https://rawgit.com/ejames9/elementsJS/gh-pages/';
var rawGitCDN = 'https://cdn.rawgit.com/ejames9/elementsJS/' + commit +'/';

var docsMenu = 'html/docsMenu.html';
var markDownUrl = 'md/elementsJSIODocs.md';
var markDown;






function _(bit1, bit2) {
  return bit1 + bit2;
}



function insertDocs() {
  // var content = document.getElementById('content'),
  //     columns = document.getElementById('mainPageColumns');
  //
  // var url = _(rawGit, docsMenu);
  // var xhr = new XMLHttpRequest();
  //     xhr.onloadend = function() {
  //       if (xhr.status === 200) {
  //         var r = this.responseText;
  //
  //         content.removeChild(columns);
  //         content.innerHTML = r;
  //
  //         var docsMain = document.getElementById('docsMain');
  //             docsMain.innerHTML = marked(markDown);

  ajax(_(rawGit, docsMenu), null, (r)=>{
    log(window, 'blue');

    <'#content'/>
              .x('#mainPageColumns')
              .html(r);

    <'#docsMain'/>
              .html(marked(markDown));
  });

          // var sideNav = document.getElementById('sideNav');
          // console.log(sideNav.offsetTop);
          // console.log(document.body.scrollTop);
          //
          // window.onscroll = function(e) {
          //     if ( sideNav.offsetTop < document.documentElement.scrollTop + 70 || sideNav.offsetTop < document.body.scrollTop + 70) {
          //         sideNav.setAttribute("class","sticky");
          //         console.log(e);
          //     }
          //     else {
          //         sideNav.setAttribute("class","");
          //         console.log('not sticky');
          //     }
  //         // }
  //       }
  //     }
  // xhr.open('GET', url);
  // xhr.send();
}

<body/>
    .color('red');

function getMarkDown() {
  var url = _(rawGit, markDownUrl);
  var xhr = new XMLHttpRequest();
      xhr.onloadend = function() {
        if (xhr.status === 200) {
          var r = this.responseText;
          console.log(r);
          markDown = r;
        }
      }
  xhr.open('GET', url);
  xhr.send();
}


function toggleNPMBar() {
  var npmBar = document.getElementById('npm-bar');

      if (npmBar.style.display === 'none') {
        npmBar.style.display = 'block';
      } else {
        npmBar.style.display = 'none';
      }
}


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
              console.log(e);
        }
      });

  getMarkDown();
}


document.addEventListener('DOMContentLoaded', init());

// getMarkDown();
