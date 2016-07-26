
/*
elementsJSIO.js
JavaScript file for the elementsJS project site.

Author: Eric James Foster
License: MIT
https://rawgit.com/ejames9/elementsJS/gh-pages/html/docsMenu.html
https://cdn.rawgit.com/ejames9/elementsJS/5f9f194/html/docsMenu.html
*/


//<<=================Imports======================>>
use 'marked' as marked
use 'highlight.js' as hljs
use 'bowser' as browser

use './sideNavControl' as SNC
use 'elementsJS' element, hasAncestor, isDOMElement, isMobile, go, el, inspect, log, err, info, url, ajax, on, click, mouse, show, hide, scroll, __
//<<===============================>>


//globals
var commit = '5f9f194';
var rawGit = 'https://rawgit.com/ejames9/elementsJS/gh-pages/';
var rawGitCDN = 'https://cdn.rawgit.com/ejames9/elementsJS/' + commit +'/';

var docsMenu = 'html/docsMenu.html';
var mdUrl = 'md/elementsJSIODocs.md';

var markDown,
    offSets;

//main page click flags.
var col1ClickFlag = true;
var col2ClickFlag = true;
var col3ClickFlag = true;
var highLitElements = [];




//Necessary code to add deep links to documentation.
function addChainLinkIcons() {
  console.log(<'#docsMain h1, #docsMain h2'/>);
  //Add link icons to all page links in documentation.
  <'h1 a, h2 a'/>
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
  <div class='jumbotron'>
    <a id='fmLink'>
      <div id='forkMe'>
        <p>Fork Me on GitHub!</p>
      </div>
    </a>
  </div>

  //Make adjustments to #fmLink.
  <'#fmLink'/>
           .fore('#logo')
           .href('https://github.com/ejames9/elementsJS');
  return;
}


//This function highlights all of the blocks in the docs, after the insertDocs function is completed.
function highLightCode() {
  console.log(<'pre code'/>);
  //Get access to all blocks......
  <'pre code'/>
          .every((element)=> {
             //highlight blocks.
             hljs.highlightBlock(element.el);
          });
  return;
}


//Documentation page change function
function initDocsPage(elem=null) {
  var hash,
      hashSS;
  //Grab side-bar/documentation template  html from github with rawgit cdn, insert side-bar/template, and docs into their containers.
  ajax(url(rawGit, docsMenu), null, (r)=> {
    <'#content'/>
              .html(r);
    <'#docsMain'/>
              .html(marked(markDown));
    //Call callback functions.
    forkMeBaby();
    highLightCode();
    addChainLinkIcons();

    SNC.mouseOutController();
    SNC.mouseOverController();
    SNC.sideNavController();

    <'#sideNav li a'/>
              .every((element)=> {
                 element
                     .class('sNavLink', '+');
              });

    if (null !== elem) {

      offSets = SNC.getOffSets();
         hash = String(<elem/>.hash());
       hashSS = hash.substring(1, hash.length);

      if (browser.gecko) {

        <html/>
            .scrolled(offSets[hashSS] + 470);
      } else if (browser.webkit) {

        <body/>
            .scrolled(offSets[hashSS] + 470);
      }
    } else {

      if (browser.gecko) {

        <html/>
            .scrolled(0);
      } else if (browser.webkit) {

        <body/>
            .scrolled(0);
      }
    }
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


function clickController() {
  //Click Event Delegation ============================>>
  var _re = /sNavLink/,
     html = <'html'>,
     hash,
     hashSS;

  click(<'html'>, (e)=> {
    switch(3+6===9) {
      case (e.target === <'#install-info'>):
          toggleNPMBar();
          break;
      case (e.target === <'#api-butn'>):
          inspect(<e.target/>);
          initDocsPage();
          break;
      case (e.target.id === 'homeNavMenu' || hasAncestor(e.target, '#navBarLogo')):
          e.preventDefault();

          window.location.reload();
          break;
      case (e.target.id === 'whatsThis'):
          e.preventDefault();

          initDocsPage('#elements-syntax');
          break;
      case (e.target.className === 'dropDown' || e.target.className === 'navMenu'):
          e.preventDefault();

          initDocsPage(e.target);

          <'[class~=active]'/>
                        .class('active', '-');

          <e.target/>
                    .ma()
                        .class('active', '+');
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
           } else if (browser.webkit) {
             log('webkit', 'blue');

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
           } else if (browser.webkit) {
             log('webkit', 'blue');

             <body/>
                 .scrolled(offSets[hashSS] + 470);
           }
          break;
      case (e.target.tagName === 'A'):
          log(e.target.tagName, 'red');
          if (/gthbBtn/.test(e.target.classList)) break;

          e.preventDefault();

          offSets = SNC.getOffSets();
             hash = String(<e.target/>.hash());
           hashSS = hash.substring(1, hash.length);

          info(hashSS);
          info(offSets[hashSS]);

          if (browser.gecko) {
            log('gecko', 'red');

            <html/>
                .scrolled(offSets[hashSS] + 470);
          } else if (browser.webkit) {
            log('webkit', 'blue');

            <body/>
                .scrolled(offSets[hashSS] + 470);
          }
          break;
      case (e.target.id === 'col1' || hasAncestor(e.target, '#col1')):
            if (col1ClickFlag) {
              <'#col1 h2, #col1 h4, #col1 p, #col1 ul li'/>
                              .every((child)=> {
                                 child
                                    .color('rgb(255, 138, 34)');
                              });
              col1ClickFlag = false
            } else {
              <'#col1 h2, #col1 h4, #col1 p, #col1 ul li'/>
                              .every((child)=> {
                                 child
                                    .color('');
                              });
              col1ClickFlag = true;
            }
          break;
      case (e.target.id === 'col2' || hasAncestor(e.target, '#col2')):
            if (col2ClickFlag) {
              <'#col2 h2, #col2 h4, #col2 p, #col2 ul li'/>
                              .every((child)=> {
                                 child
                                    .color('rgb(255, 138, 34)');
                              });
              col2ClickFlag = false
            } else {
              <'#col2 h2, #col2 h4, #col2 p, #col2 ul li'/>
                              .every((child)=> {
                                 child
                                    .color('');
                              });
              col2ClickFlag = true;
            }
          break;
      case (e.target.id === 'col3' || hasAncestor(e.target, '#col3')):
            if (col3ClickFlag) {
              <'#col3 h2, #col3 h4, #col3 p, #col3 ul li'/>
                              .every((child)=> {
                                 child
                                    .color('rgb(255, 138, 34)');
                              });
              col3ClickFlag = false
            } else {
              <'#col3 h2, #col3 h4, #col3 p, #col3 ul li'/>
                              .every((child)=> {
                                 child
                                    .color('');
                              });
              col3ClickFlag = true;
            }
          break;
      case (e.target.tagName === 'P' || e.target.tagName === 'LI'):
            if (highLitElements.indexOf(e.target) === -1) {
              highLitElements.push(e.target);
            } else {
              let index = highLitElements.indexOf(e.target);
                          highLitElements.splice(index, 1);

              <e.target/>.color('');
            }
            <highLitElements/>
                          .every((element)=> {
                             element
                                  .color('rgb(255, 138, 34)');
                          });
          break;
      case (e.target.tagName === 'H1' || e.target.tagName === 'H2' || e.target.tagName === 'H3' || e.target.tagName === 'H4'):
            if (highLitElements.indexOf(e.target) === -1) {
              highLitElements.push(e.target);
            } else {
              let index = highLitElements.indexOf(e.target);
                    highLitElements.splice(index, 1);

              <e.target/>.color('');
            }
            <highLitElements/>
                    .every((element)=> {
                       element
                            .color('rgb(255, 138, 34)');
                    });
          break;
      default:
          var npmBar = <'#npm-bar'>;
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
  //Set default display setting for the bower/npm installation bar.
  <'#npm-bar'/>.display('none');
  //Initialize the click controller.
  clickController();
  //Download the documentation markdown.
  getMarkDown();
  //Create/install custom fork me ribbon.
  forkMeBaby();

  if(isMobile()) {
    log('helloskis', 'blue');
  }

  //Reset scrollTop on load.
  on('load', window, ()=> {
    //Allow specific hashes to be loaded from the address bar.
    if (window.location.hash.length > 1) {
      initDocsPage(window.location.hash);
    } else {
      //Make sure page loads at proper scrollTop.
      if (browser.gecko) {
        <html/>
            .scrolled(0);
      } else if (browser.webkit) {
        setTimeout(()=> {
          <body/>
              .scrolled(0);
        }, 50);
      }
    }
  });


});
