
/*
elementsJSIO.js
JavaScript file for the elementsJS project site.

Author: Eric James Foster
License: MIT
https://rawgit.com/ejames9/elementsJS/gh-pages/html/docsMenu.html
https://cdn.rawgit.com/ejames9/elementsJS/5f9f194/html/docsMenu.html
*/


//es6 import
import * as SNC from './sideNavControl.js';


//elementsJS imports
imports({
    'elementsJS': ['imports', 'go', 'el', 'log', 'url', 'ajax', 'on', 'click', 'scroll', '__'],
        'marked': 'marked',
  'highlight.js': 'hljs'
});

//globals
var commit = '5f9f194';
var rawGit = 'https://rawgit.com/ejames9/elementsJS/gh-pages/';
var rawGitCDN = 'https://cdn.rawgit.com/ejames9/elementsJS/' + commit +'/';

var docsMenu = 'html/docsMenu.html';
var mdUrl = 'md/elementsJSIODocs.md';
var markDown;




function forkMeBaby() {
  console.log(dom('.jumbotron'));
  
  __(`
    <a><forkMe id='forkMe'>
      <p>Fork Me Baby!</p>
    </forkMe></a>

  `, '.jumbotron')
}


//This function highlights all of the <code> blocks in the docs, after the insertDocs function is completed.
function highLightCode() {
  console.log(dom('pre code'));
  //Get access to all <pre><code> blocks......
  dom('pre code')
          .every((element)=> {
             //highlight blocks.
             hljs.highlightBlock(element.el);
          });
  return;
}


//Documentation page change function
function insertDocs(cb) {
  //Grab side-bar/documentation template  html from github with rawgit cdn, insert side-bar/template, and docs into their containers.
  ajax(url(rawGit, docsMenu), null, (r)=> {
    <'#content'/>
              .html(r);
    <'#docsMain'/>
              .html(marked(markDown));

    const offSets = SNC.getOffSets();

    // for (var el in offSets) {
    //   log('id: ' + el, 'red');
    //   log('offSet: ' + offSets[el], ['red', 'blue'])
    // }
    cb();
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

  //Click Event Delegation ============================>>
  var html = document.getElementsByTagName('html')[0];
      html.addEventListener('click', function(e) {
        switch(e.target) {
          case (document.getElementById('install-info')):
              toggleNPMBar();
              break;
          case (document.getElementById('api-butn')):
              insertDocs(()=> {
                SNC.sideNavController();
                        highLightCode();
              });
              break;
          default:
              if (npmBar.style.display !== 'none') {
                npmBar.style.display = 'none';
              }
              log(e);
        }
      });

  getMarkDown();

  forkMeBaby();
});
