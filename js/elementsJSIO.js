
/*
elementsJSIO.js
JavaScript file for the elementsJS project site.

Author: Eric James Foster
License: MIT
https://rawgit.com/ejames9/elementsJS/gh-pages/html/docsMenu.html
https://cdn.rawgit.com/ejames9/elementsJS/5f9f194/html/docsMenu.html
*/



//<<=================Imports======================>>
//es6 import
import * as SNC from './sideNavControl.js';


//elementsJS imports
imports({
    'elementsJS': ['imports', 'go', 'el', 'log', 'warn', 'url', 'ajax', 'on', 'click', 'mouse', 'show', 'hide', 'scroll', '__'],
        'marked': 'marked',
  'highlight.js': 'hljs',
        'bowser': 'browser'
});
//<<===============================>>


//globals
var commit = '5f9f194';
var rawGit = 'https://rawgit.com/ejames9/elementsJS/gh-pages/';
var rawGitCDN = 'https://cdn.rawgit.com/ejames9/elementsJS/' + commit +'/';

var docsMenu = 'html/docsMenu.html';
var mdUrl = 'md/elementsJSIODocs.md';

var markDown,
    offSets;





//Necessary code to add deep links to documentation.
function addChainLinkIcons() {
  console.log(dom('#docsMain h1, #docsMain h2'));
  //Add link icons to all page links in documentation.
  dom('h1 a, h2 a')
            .every((element)=> {
               element
                  .html('<i id="faLink" class="fa fa-link"></i>', '+')
                  .href('#' + element.id())
                  .mouse('over', ()=> {
                     element
                        .last()
                              .viz('visible')
                  })
                  .mouse('out', ()=> {
                     element
                        .last()
                              .viz('hidden')
                  });
            });
  //Make adustments to fa-link icons.
  <'.fa-link'/>
            .every((element)=> {
               element
                  .viz('hidden')
                  .color('#52218A')
                  .turn(90);
            });
  return;
}


//Custom fork me ribbon.
function forkMeBaby() {
  //Add forkme ribbon html.
  __(`
    <a id='fmLink'>
      <div id='forkMe'>
        <p>Fork Me on GitHub!</p>
      </div>
    </a>

  `, '.jumbotron');
  //Make adjustments to #fmLink.
  <'#fmLink'/>
           .fore('#logo')
           .href('https://github.com/ejames9/elementsJS');
  return;
}


//This function highlights all of the  blocks in the docs, after the insertDocs function is completed.
function highLightCode() {
  console.log(dom('pre code'));
  //Get access to all blocks......
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
    //Call callback functions.
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


//A collection of callback functions to be called once documentation is inserted into its' place.
function iDCallback() {
  forkMeBaby();
  highLightCode();
  addChainLinkIcons();
  SNC.mouseOutController();
  SNC.mouseOverController();
  SNC.sideNavController();

  dom('#sideNav li a')
            .every((element)=> {
               element
                   .class('sNavLink', '+');
            });
}





function clickController() {
  //Click Event Delegation ============================>>
  var _re = /sNavLink/,
     html = el('html'),
     hash,
     hashSS;

  click(html, (e)=> {
    switch(3+6===9) {
      case (e.target === el('#install-info')):
          toggleNPMBar();
          break;
      case (e.target === el('#api-butn')):
          insertDocs(iDCallback);
          break;
      case (e.target.tagName === 'I'):
          e.preventDefault();

          offSets = SNC.getOffSets(),
             hash = String(dom('#' + e.target.parentNode.id).hash());
           hashSS = hash.substring(1, hash.length);

           if (browser.gecko) {
             log('gecko', 'red');

             <html/>
                 .scrolled(offSets[hashSS] + 470);
           } else if (browser.safari) {
             log('safari', 'blue');

             <body/>
                 .scrolled(offSets[hashSS] + 470);
           }
          break;
      case (e.target.tagName === 'CODE'):
          e.preventDefault();

          offSets = SNC.getOffSets(),
             hash = String(dom('#' + e.target.parentNode.id).hash());
           hashSS = hash.substring(1, hash.length);

           if (browser.gecko) {
             log('gecko', 'red');

             <html/>
                 .scrolled(offSets[hashSS] + 470);
           } else if (browser.safari) {
             log('safari', 'blue');

             <body/>
                 .scrolled(offSets[hashSS] + 470);
           }
          break;
      case (e.target.tagName === 'A'):
          log(e.target.tagName, 'red');
          e.preventDefault();

          offSets = SNC.getOffSets();
             hash = String(dom('#' + e.target.id).hash());
           hashSS = hash.substring(1, hash.length);

          warn(hashSS);
          warn(offSets[hashSS]);

          if (browser.gecko) {
            log('gecko', 'red');

            <html/>
                .scrolled(offSets[hashSS] + 470);
          } else if (browser.safari) {
            log('safari', 'blue');

            <body/>
                .scrolled(offSets[hashSS] + 470);
          }
          break;
      default:
          var npmBar = el('#npm-bar');
          if (npmBar !== null) {
            if (npmBar.style.display !== 'none') {
              npmBar.style.display = 'none';
            }
          }
    }
  });
}


//Initialization code to be run after DOM content is loaded.
go(()=> {
  //initialize ace code editor
  var editor1 = ace.edit("editor1");
      editor1.setTheme("ace/theme/elementsJSIO");
      editor1.renderer.setShowGutter(false);
      editor1.getSession()
             .setMode("ace/mode/javascript");

  //Set default display setting for the bower/npm installation bar.
  <'#npm-bar'/>.display('none');
  //Initialize the click controller.
  clickController();
  //Download the documentation markdown.
  getMarkDown();
  //Create/install custom fork me ribbon.
  forkMeBaby();
});
