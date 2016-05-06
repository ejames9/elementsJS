
/*
sideNavControl.js
This file Makes the side-nav menu on the elementsJS.io
project-site docs page work.
Author: Eric James Foster
License: MIT
*/



import { el, log, scroll, show, mouse } from 'elementsJS';


//global that documents what state the menu is currently in.
window.sideNavState = [];

//The control states for the sideNav Menu.
const sideNavStates = {
  stateOne: (elem)=> {
    dom('[class~=hot]')
            .class('hot', '-');

    dom('[name=hidden]')
            .every((element)=> {
                element
                    .class('hide');
            });
    dom(elem)
            .class('hot')
            .sib('next')
                    .class('hide', '-');
  },
  stateTwo: (elem)=> {
    dom('[class~=hot]')
            .class('hot', '-');

    dom('[name=hidden]')
            .every((element)=> {
                element
                    .class('hide');
            });
    dom(elem)
            .class('hot')
            .ma()
                .class('hide', '-');
  },
  stateThree: (elem)=> {
    dom('[class~=hot]')
            .class('hot', '-');
    dom('[name=hidden]')
            .every((element)=> {
                element
                    .class('hide');
            });
    dom(elem)
            .class('hot')
            .ma()
                .class('hide', '-');
  },
  stateFour: (elem)=> {
    dom('[class~=hot]')
            .class('hot', '-');
    dom('[name=hidden]')
            .every((element)=> {
                element
                    .class('hide');
            });
    dom(elem)
            .class('hot')
  },
  stateFive: (elem)=> {
    dom('[class~=hot]')
            .class('hot', '-');
    dom('[name=hidden]')
            .every((element)=> {
                element
                    .class('hide');
            });
    dom(elem)
            .class('hot')
            .sib('next')
                      .class('hide', '+');
  }
};

//Function for creating the offSets object, which contains the offsetTop property of all elements.
function getOffSets() {

  var offSets = {};
      offSets['installation']        = el('#installation').offsetTop;
      offSets['Usage']               = el('#Usage').offsetTop;
      offSets['interpreter-install'] = el('#interpreter-install').offsetTop;
      offSets['imports']             = el('#imports').offsetTop;
      offSets['DOM']                 = el('#DOM').offsetTop;
      offSets['el-func']             = el('#el-func').offsetTop;
      offSets['dom-func']            = el('#dom-func').offsetTop;
      offSets['__-func']             = el('#__-func').offsetTop;
      offSets['make-func']           = el('#make-func').offsetTop;
      offSets['put-func']            = el('#put-func').offsetTop;
      offSets['x-func']              = el('#x-func').offsetTop;
      offSets['fore-func']           = el('#fore-func').offsetTop;
      offSets['aft-func']            = el('#aft-func').offsetTop;
      offSets['show-func']           = el('#show-func').offsetTop;
      offSets['hide-func']           = el('#hide-func').offsetTop;
      offSets['size-func']           = el('#size-func').offsetTop;
      offSets['event-handle']        = el('#event-handle').offsetTop;
      offSets['go-func']             = el('#go-func').offsetTop;
      offSets['on-func']             = el('#on-func').offsetTop;
      offSets['off-func']            = el('#off-func').offsetTop;
      offSets['once-func']           = el('#once-func').offsetTop;
      offSets['spark-func']          = el('#spark-func').offsetTop;
      offSets['click-func']          = el('#click-func').offsetTop;
      offSets['dblClick-func']       = el('#dblClick-func').offsetTop;
      offSets['blur-func']           = el('#blur-func').offsetTop;
      offSets['error-func']          = el('#error-func').offsetTop;
      offSets['focus-func']          = el('#focus-func').offsetTop;
      offSets['focusIn-func']        = el('#focusIn-func').offsetTop;
      offSets['focusOut-func']       = el('#focusOut-func').offsetTop;
      offSets['keyUp-func']          = el('#keyUp-func').offsetTop;
      offSets['keyDown-func']        = el('#keyDown-func').offsetTop;
      offSets['load-func']           = el('#load-func').offsetTop;
      offSets['unLoad-func']         = el('#unLoad-func').offsetTop;
      offSets['mouse-func']          = el('#mouse-func').offsetTop;
      offSets['resize-func']         = el('#resize-func').offsetTop;
      offSets['scroll-func']         = el('#scroll-func').offsetTop;
      offSets['select-func']         = el('#select-func').offsetTop;
      offSets['http']                = el('#http').offsetTop;
      offSets['xhr-func']            = el('#xhr-func').offsetTop;
      offSets['ajax-func']           = el('#ajax-func').offsetTop;
      offSets['loggers']             = el('#loggers').offsetTop;
      offSets['log-func']            = el('#log-func').offsetTop;
      offSets['info-func']           = el('#info-func').offsetTop;
      offSets['warn-func']           = el('#warn-func').offsetTop;
      offSets['err-func']            = el('#err-func').offsetTop;
      offSets['utils']               = el('#utils').offsetTop;
      offSets['proto-func']          = el('#proto-func').offsetTop;
      offSets['shifter-func']        = el('#shifter-func').offsetTop;
      offSets['elem-obj']            = el('#elem-obj').offsetTop;
      offSets['element-const']       = el('#element-const').offsetTop;
      offSets['dom2-func']           = el('#dom2-func').offsetTop;
      offSets['make2-func']          = el('#make2-func').offsetTop;
      offSets['elem-obj-methods']    = el('#elem-obj-methods').offsetTop;
      offSets['element-font-ex']     = el('#element-font-ex').offsetTop;
      offSets['exs']                 = el('#exs').offsetTop;
      offSets['style-methods']       = el('#style-methods').offsetTop;
      offSets['core-func']           = el('#core-func').offsetTop;
      offSets['DOM-Elem-Methods']    = el('#DOM-Elem-Methods').offsetTop;
      offSets['event-methods']       = el('#event-methods').offsetTop;
      offSets['Util-Methods']        = el('#Util-Methods').offsetTop;
      offSets['elements-syntax']     = el('#elements-syntax').offsetTop;
      offSets['elemsyntax-func1']    = el('#elemsyntax-func1').offsetTop;
      offSets['elemsyntax-func2']    = el('#elemsyntax-func2').offsetTop;
      offSets['elemsyntax-func3']    = el('#elemsyntax-func3').offsetTop;
      offSets['elemsyntax-func4']    = el('#elemsyntax-func4').offsetTop;
      offSets['elemsyntax-func5']    = el('#elemsyntax-func5').offsetTop;
      offSets['elemsyntax-func6']    = el('#elemsyntax-func6').offsetTop;
      offSets['append-syntax']       = el('#append-syntax').offsetTop;
      offSets['elemsyntax-func7']    = el('#elemsyntax-func7').offsetTop;

    return offSets;
}


//Boolean function returns true if given function has given ancestor, and false otherwise. Checks 6 parents deep.
function hasAncestor(l, ance) {
  var tick, ancestor = el(ance),
           ancestors = [];

  ancestors.push(l.parentNode);
  ancestors.push(ancestors[0].parentNode);
  ancestors.push(ancestors[1].parentNode);
  ancestors.push(ancestors[2].parentNode);
  ancestors.push(ancestors[3].parentNode);
  // ancestors.push(ancestors[4].parentNode);

  // console.log(ancestors);
  tick = 0;

  for (var i = 0; i < ancestors.length; i++) {
    if (ancestors[i] === ancestor) tick++;
  }
  if (tick > 0) return true;

  else return false;
}


//Function for controlling when the #sideNav doc menu collapses.
function mouseOutController() {
  //Mouse out event delegation =======================>>
  const html = el('html');

  mouse('out', html, (e)=> {
    if (hasAncestor(e.target, '#sideNav')) {
      return;
    } else {
      switch(sideNavState[0]) {
        case (1):
            sideNavStates.stateOne(sideNavState[1]);
            break;
        case (2):
            sideNavStates.stateTwo(sideNavState[1]);
            break;
        case (3):
            sideNavStates.stateThree(sideNavState[1]);
            break;
        case (4):
            sideNavStates.stateFour(sideNavState[1]);
            break;
        case (5):
            sideNavStates.stateFive(sideNavState[1]);
            break;
        default:
            break;
      }
    }

  });
}


//Function for controlling the expanding (on hover) of #sideNav menu lists.
function mouseOverController() {
  //Mouse over event Delegation ======================>>
  const html = el('html');

  mouse('over', html, function(e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.relatedTarget);

    switch(9+9===18) {
      case (e.target === el('#gsList') || e.target.parentNode === el('#gsList')):
          dom('[name=hidden]')
                    .every((element)=> {
                        element
                          .class('hide', '+')
                   });
          <'#gsList'/>
                    .second()
                          .class('hide', '-');
          break;
      case (e.target === el('#domList') || e.target.parentNode === el('#domList')):
          dom('[name=hidden]')
                    .every((element)=> {
                       element
                          .class('hide', '+')
                    });
          <'#domList'/>
                    .second()
                          .class('hide', '-');
          break;
      case (e.target === el('#eventList') || e.target.parentNode === el('#eventList')):
          dom('[name=hidden]')
                    .every((element)=> {
                        element
                          .class('hide', '+')
                   });
          <'#eventList'/>
                    .second()
                          .class('hide', '-');
          break;
      case (e.target === el('#httpList') || e.target.parentNode === el('#httpList')):
          dom('[title~=shorts]')
               .every((element)=> {
                  element
                      .class('hide', '+')
               });
          <'#httpList'/>
                    .second()
                          .class('hide', '-');
          break;
      case (e.target === el('#loggList') || e.target.parentNode === el('#loggList')):
          dom('[title~=shorts]')
               .every((element)=> {
                  element
                      .class('hide', '+')
               });
          <'#loggList'/>
                    .second()
                          .class('hide', '-');
          break;
      case (e.target === el('#utilsList') || e.target.parentNode === el('#utilsList')):
          dom('[title~=shorts]')
                   .every((element)=> {
                      element
                          .class('hide', '+')
                   });
          <'#utilsList'/>
                   .second()
                          .class('hide', '-');
          break;
      case (e.target === el('#elemObjList') || e.target.parentNode === el('#elemObjList')):
          dom('[title~=shorts]')
                   .every((element)=> {
                      element
                          .class('hide', '+')
                   });
          <'#elemObjList'/>
                   .second()
                          .class('hide', '-');
          break;
      case (e.target === el('#eOMethodsList') || e.target.parentNode === el('#eOMethodsList')):
          dom('[title~=shorts]')
               .every((element)=> {
                  element
                      .class('hide', '+')
               });
          <'#eOMethodsList'/>
                   .second()
                          .class('hide', '-');
          break;
      case (e.target === el('#eStaxList') || e.target.parentNode === el('#eStaxList')):
          dom('[title~=shorts]')
               .every((element)=> {
                  element
                      .class('hide', '+')
               });
          <'#eStaxList'/>
                   .second()
                          .class('hide', '-');
          break;

    };
  });
}

function sideNavController() {
  // console.log(dom('[name=hidden]'));

  const offSets = getOffSets(),
           diff = 290;

  scroll(window, ()=>  {
      switch(true) {
        //0 - 13 Getting Started
        case (dom('html').scrolled() > 0 + diff && dom('html').scrolled() < offSets['installation'] + diff ||
              dom('body').scrolled() > 0 + diff && dom('body').scrolled() < offSets['installation'] + diff):
              //Find active list item, deactivate it.
              dom('[class~=hot]')
											.class('hot', '-');

              //Find all menu lists, hide them.
              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              //Activate Getting Started list item.
              <'#getStart'/>
                      .class('hot')
                      .sib('next')
                                .class('hide', '+');

              sideNavState = [5, '#getStart'];
              break;
        case (dom('html').scrolled() > offSets['installation'] + diff && dom('html').scrolled() < offSets['Usage'] + diff ||
              dom('body').scrolled() > offSets['installation'] + diff && dom('body').scrolled() < offSets['Usage'] + diff):
              // log('YES', ['red', 'blue'] + diff);
              //Find active list item, deactivate it.
              // dom('[class~=hot]')
							// 				.class('hot', '-');
              //Find all menu lists, hide them.
              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              //Activate Installation list item. Open parent list by removing .hide class.
              <'#instLink'/>
                      .class('hot2')
                      .ma()
											   .class('hide', '-');

              sideNavState = [2, '#instLink'];
              break;
        case (dom('html').scrolled() > offSets['Usage'] + diff && dom('html').scrolled() < offSets['interpreter-install'] + diff ||
              dom('body').scrolled() > offSets['Usage'] + diff && dom('body').scrolled() < offSets['interpreter-install'] + diff):
              // dom('[class~=hot]')
							// 				.class('hot', '-');
              dom('[class=hot2]')
											.class('hot2', '-');
              <'#useLink'/>
                      .class('hot2');

              sideNavState = [3, '#useLink'];
              break;
        case (dom('html').scrolled() > offSets['interpreter-install'] + diff && dom('html').scrolled() < offSets['imports'] + diff ||
              dom('body').scrolled() > offSets['interpreter-install'] + diff && dom('body').scrolled() < offSets['imports'] + diff):
              // dom('[class~=hot]')
							// 				.class('hot', '-');
              dom('[class=hot2]')
											.class('hot2', '-');
              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#interpInstallLink'/>
                      .class('hot2')
                      .ma()
													.class('hide', '-');

              sideNavState = [2, '#interpInstallLink'];
              break;
        case (dom('html').scrolled() > offSets['imports'] + diff && dom('html').scrolled() < offSets['DOM'] + diff ||
              dom('body').scrolled() > offSets['imports'] + diff && dom('body').scrolled() < offSets['DOM'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#imps'/>
                      .class('hot')

              sideNavState = [4, '#imps'];
              break;
        case (dom('html').scrolled() > offSets['DOM'] + diff && dom('html').scrolled() < offSets['el-func'] + diff ||
              dom('body').scrolled() > offSets['DOM'] + diff && dom('body').scrolled() < offSets['el-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#domManip'/>
                      .focus()
                      .class('hot')
                      .sib('next')
															.class('hide', '-');

              sideNavState = [1, '#domManip'];
              break;
        case (dom('html').scrolled() > offSets['el-func'] + diff && dom('html').scrolled() < offSets['dom-func'] + diff ||
              dom('body').scrolled() > offSets['el-func'] + diff && dom('body').scrolled() < offSets['dom-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#elLink'/>
                      .class('hot');

              sideNavState = [3, '#elLink'];
              break;
        case (dom('html').scrolled() > offSets['dom-func'] + diff && dom('html').scrolled() < offSets['__-func'] + diff ||
              dom('body').scrolled() > offSets['dom-func'] + diff && dom('body').scrolled() < offSets['__-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#domLink'/>
                      .class('hot');

              sideNavState = [3, '#domLink'];
              break;
        case (dom('html').scrolled() > offSets['__-func'] + diff && dom('html').scrolled() < offSets['make-func'] + diff ||
              dom('body').scrolled() > offSets['__-func'] + diff && dom('body').scrolled() < offSets['make-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#__Link'/>
                          .class('hot');

              sideNavState = [3, '#domLink'];
              break;
        case (dom('html').scrolled() > offSets['make-func'] + diff && dom('html').scrolled() < offSets['put-func'] + diff ||
              dom('body').scrolled() > offSets['make-func'] + diff && dom('body').scrolled() < offSets['put-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#makeLink'/>
                          .class('hot');

              sideNavState = [3, '#makeLink'];
              break;
        case (dom('html').scrolled() > offSets['put-func'] + diff && dom('html').scrolled() < offSets['x-func'] + diff ||
              dom('body').scrolled() > offSets['put-func'] + diff && dom('body').scrolled() < offSets['x-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#putLink'/>
                          .class('hot');

              sideNavState = [3, '#putLink'];
              break;
        case (dom('html').scrolled() > offSets['x-func'] + diff && dom('html').scrolled() < offSets['fore-func'] + diff ||
              dom('body').scrolled() > offSets['x-func'] + diff && dom('body').scrolled() < offSets['fore-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#xLink'/>
                          .class('hot');

              sideNavState = [3, '#xLink'];
              break;
        case (dom('html').scrolled() > offSets['fore-func'] + diff && dom('html').scrolled() < offSets['aft-func'] + diff ||
              dom('body').scrolled() > offSets['fore-func'] + diff && dom('body').scrolled() < offSets['aft-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#foreLink'/>
                          .class('hot');

              sideNavState = [3, '#foreLink'];
              break;
        case (dom('html').scrolled() > offSets['aft-func'] + diff && dom('html').scrolled() < offSets['show-func'] + diff ||
              dom('body').scrolled() > offSets['aft-func'] + diff && dom('body').scrolled() < offSets['show-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#aftLink'/>
                          .class('hot');

              sideNavState = [3, '#aftLink'];
              break;
        case (dom('html').scrolled() > offSets['show-func'] + diff && dom('html').scrolled() < offSets['hide-func'] + diff ||
              dom('body').scrolled() > offSets['show-func'] + diff && dom('body').scrolled() < offSets['hide-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#showLink'/>
                          .class('hot');

              sideNavState = [3, '#showLink'];
              break;
        case (dom('html').scrolled() > offSets['hide-func'] + diff && dom('html').scrolled() < offSets['size-func'] + diff ||
              dom('body').scrolled() > offSets['hide-func'] + diff && dom('body').scrolled() < offSets['size-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#hydeLink'/>
                          .class('hot');

              sideNavState = [3, '#hydeLink'];
              break;
        case (dom('html').scrolled() > offSets['size-func'] + diff && dom('html').scrolled() < offSets['event-handle'] + diff ||
              dom('body').scrolled() > offSets['size-func'] + diff && dom('body').scrolled() < offSets['event-handle'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#sizeLink'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');

              sideNavState = [2, '#sizeLink'];
              break;
        case (dom('html').scrolled() > offSets['event-handle'] + diff && dom('html').scrolled() < offSets['go-func'] + diff ||
              dom('body').scrolled() > offSets['event-handle'] + diff && dom('body').scrolled() < offSets['go-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#eventHand'/>
                      .class('hot')
                      .sib('next')
													    .class('hide', '-');

              sideNavState = [1, '#eventHand'];
              break;
        case (dom('html').scrolled() > offSets['go-func'] + diff && dom('html').scrolled() < offSets['on-func'] + diff ||
              dom('body').scrolled() > offSets['go-func'] + diff && dom('body').scrolled() < offSets['on-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#goLink'/>
                          .class('hot');

              sideNavState = [3, '#goLink'];
              break;
        case (dom('html').scrolled() > offSets['on-func'] + diff && dom('html').scrolled() < offSets['off-func'] + diff ||
              dom('body').scrolled() > offSets['on-func'] + diff && dom('body').scrolled() < offSets['off-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#onLink'/>
                          .class('hot');

              sideNavState = [3, '#onLink'];
              break;
        case (dom('html').scrolled() > offSets['off-func'] + diff && dom('html').scrolled() < offSets['once-func'] + diff ||
              dom('body').scrolled() > offSets['off-func'] + diff && dom('body').scrolled() < offSets['once-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#offLink'/>
                          .class('hot');

              sideNavState = [3, '#offLink'];
              break;
        case (dom('html').scrolled() > offSets['once-func'] + diff && dom('html').scrolled() < offSets['spark-func'] + diff ||
              dom('body').scrolled() > offSets['once-func'] + diff && dom('body').scrolled() < offSets['spark-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#onceLink'/>
                          .class('hot');

              sideNavState = [3, '#onceLink'];
              break;
        case (dom('html').scrolled() > offSets['spark-func'] + diff && dom('html').scrolled() < offSets['click-func'] + diff ||
              dom('body').scrolled() > offSets['spark-func'] + diff && dom('body').scrolled() < offSets['click-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#sparkLink'/>
                          .class('hot');

              sideNavState = [3, '#sparkLink'];
              break;
        case (dom('html').scrolled() > offSets['click-func'] + diff && dom('html').scrolled() < offSets['dblClick-func'] + diff ||
              dom('body').scrolled() > offSets['click-func'] + diff && dom('body').scrolled() < offSets['dblClick-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#clickLink'/>
                          .class('hot');

              sideNavState = [3, '#clickLink'];
              break;
        case (dom('html').scrolled() > offSets['dblClick-func'] + diff && dom('html').scrolled() < offSets['blur-func'] + diff ||
              dom('body').scrolled() > offSets['dblClick-func'] + diff && dom('body').scrolled() < offSets['blur-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#dblLink'/>
                          .class('hot');

              sideNavState = [3, '#dblLink'];
              break;
        case (dom('html').scrolled() > offSets['blur-func'] + diff && dom('html').scrolled() < offSets['error-func'] + diff ||
              dom('body').scrolled() > offSets['blur-func'] + diff && dom('body').scrolled() < offSets['error-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#blurLink'/>
                          .class('hot');

              sideNavState = [3, '#blurLink'];
              break;
        case (dom('html').scrolled() > offSets['error-func'] + diff && dom('html').scrolled() < offSets['focus-func'] + diff ||
              dom('body').scrolled() > offSets['error-func'] + diff && dom('body').scrolled() < offSets['focus-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#errorLink'/>
                          .class('hot');

              sideNavState = [3, '#errorLink'];
              break;
        case (dom('html').scrolled() > offSets['focus-func'] + diff && dom('html').scrolled() < offSets['focusIn-func'] + diff ||
              dom('body').scrolled() > offSets['focus-func'] + diff && dom('body').scrolled() < offSets['focusIn-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#focusLink'/>
                          .class('hot');

              sideNavState = [3, '#focusLink'];
              break;
        case (dom('html').scrolled() > offSets['focusIn-func'] + diff && dom('html').scrolled() < offSets['focusOut-func'] + diff ||
              dom('body').scrolled() > offSets['focusIn-func'] + diff && dom('body').scrolled() < offSets['focusOut-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#focusInLink'/>
                          .class('hot');

              sideNavState = [3, '#focusInLink'];
              break;
        case (dom('html').scrolled() > offSets['focusOut-func'] + diff && dom('html').scrolled() < offSets['keyUp-func'] + diff ||
              dom('body').scrolled() > offSets['focusOut-func'] + diff && dom('body').scrolled() < offSets['keyUp-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#focusOutLink'/>
                          .class('hot');

              sideNavState = [3, '#focusOutLink'];
              break;
        case (dom('html').scrolled() > offSets['keyUp-func'] + diff && dom('html').scrolled() < offSets['keyDown-func'] + diff ||
              dom('body').scrolled() > offSets['keyUp-func'] + diff && dom('body').scrolled() < offSets['keyDown-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#keyUpLink'/>
                          .class('hot');

              sideNavState = [3, '#keyUpLink'];
              break;
        case (dom('html').scrolled() > offSets['keyDown-func'] + diff && dom('html').scrolled() < offSets['load-func'] + diff ||
              dom('body').scrolled() > offSets['keyDown-func'] + diff && dom('body').scrolled() < offSets['load-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#keyDownLink'/>
                          .class('hot');

              sideNavState = [3, '#keyDownLink'];
              break;
        case (dom('html').scrolled() > offSets['load-func'] + diff && dom('html').scrolled() < offSets['unLoad-func'] + diff ||
              dom('body').scrolled() > offSets['load-func'] + diff && dom('body').scrolled() < offSets['unLoad-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#loadLink'/>
                          .class('hot');

              sideNavState = [3, '#loadLink'];
              break;
        case (dom('html').scrolled() > offSets['unLoad-func'] + diff && dom('html').scrolled() < offSets['mouse-func'] + diff ||
              dom('body').scrolled() > offSets['unLoad-func'] + diff && dom('body').scrolled() < offSets['mouse-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#unLoadLink'/>
                          .class('hot');

              sideNavState = [3, '#unLoadLink'];
              break;
        case (dom('html').scrolled() > offSets['mouse-func'] + diff && dom('html').scrolled() < offSets['resize-func'] + diff ||
              dom('body').scrolled() > offSets['mouse-func'] + diff && dom('body').scrolled() < offSets['resize-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#mouseLink'/>
                          .class('hot');

              sideNavState = [3, '#mouseLink'];
              break;
        case (dom('html').scrolled() > offSets['resize-func'] + diff && dom('html').scrolled() < offSets['scroll-func'] + diff ||
              dom('body').scrolled() > offSets['resize-func'] + diff && dom('body').scrolled() < offSets['scroll-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#resizeLink'/>
                          .class('hot');

              sideNavState = [3, '#resizeLink'];
              break;
        case (dom('html').scrolled() > offSets['scroll-func'] + diff && dom('html').scrolled() < offSets['select-func'] + diff ||
              dom('body').scrolled() > offSets['scroll-func'] + diff && dom('body').scrolled() < offSets['select-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#scrollLink'/>
                          .class('hot');

              sideNavState = [3, '#scrollLink'];
              break;
        case (dom('html').scrolled() > offSets['select-func'] + diff && dom('html').scrolled() < offSets['http'] + diff ||
              dom('body').scrolled() > offSets['select-func'] + diff && dom('body').scrolled() < offSets['http'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#selectLink'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');

              sideNavState = [2, '#selectLink'];
              break;
        case (dom('html').scrolled() > offSets['http'] + diff && dom('html').scrolled() < offSets['xhr-func'] + diff ||
              dom('body').scrolled() > offSets['http'] + diff && dom('body').scrolled() < offSets['xhr-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');

              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#httpReq'/>
                      .class('hot')
                      .sib('next')
															.class('hide', '-');

              sideNavState = [1, '#httpReq'];
              break;
        case (dom('html').scrolled() > offSets['xhr-func'] + diff && dom('html').scrolled() < offSets['ajax-func'] + diff ||
              dom('body').scrolled() > offSets['xhr-func'] + diff && dom('body').scrolled() < offSets['ajax-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#xhrLink'/>
                          .class('hot');

              sideNavState = [3, '#xhrLink'];
              break;
        case (dom('html').scrolled() > offSets['ajax-func'] + diff && dom('html').scrolled() < offSets['loggers'] + diff ||
              dom('body').scrolled() > offSets['ajax-func'] + diff && dom('body').scrolled() < offSets['loggers'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');

              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#ajaxLink'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');

              sideNavState = [2, '#ajaxLink'];
              break;
        case (dom('html').scrolled() > offSets['loggers'] + diff && dom('html').scrolled() < offSets['log-func'] + diff ||
              dom('body').scrolled() > offSets['loggers'] + diff && dom('body').scrolled() < offSets['log-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');

              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#logg'/>
                      .class('hot')
                      .sib('next')
															.class('hide', '-');

              sideNavState = [1, '#logg'];
              break;
        case (dom('html').scrolled() > offSets['log-func'] + diff && dom('html').scrolled() < offSets['info-func'] + diff ||
              dom('body').scrolled() > offSets['log-func'] + diff && dom('body').scrolled() < offSets['info-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#logLink'/>
                          .class('hot');

              sideNavState = [3, '#logLink'];
              break;
        case (dom('html').scrolled() > offSets['info-func'] + diff && dom('html').scrolled() < offSets['warn-func'] + diff ||
              dom('body').scrolled() > offSets['info-func'] + diff && dom('body').scrolled() < offSets['warn-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#infoLink'/>
                          .class('hot');

              sideNavState = [3, '#infoLink'];
              break;
        case (dom('html').scrolled() > offSets['warn-func'] + diff && dom('html').scrolled() < offSets['err-func'] + diff ||
              dom('body').scrolled() > offSets['warn-func'] + diff && dom('body').scrolled() < offSets['err-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#warnLink'/>
                          .class('hot');

              sideNavState = [3, '#warnLink'];
              break;
        case (dom('html').scrolled() > offSets['err-func'] + diff && dom('html').scrolled() < offSets['utils'] + diff ||
              dom('body').scrolled() > offSets['err-func'] + diff && dom('body').scrolled() < offSets['utils'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');

              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#errLink'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');

              sideNavState = [2, '#errLink'];
              break;
        case (dom('html').scrolled() > offSets['utils'] + diff && dom('html').scrolled() < offSets['proto-func'] + diff ||
              dom('body').scrolled() > offSets['utils'] + diff && dom('body').scrolled() < offSets['proto-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');

              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#utilFunc'/>
                      .class('hot')
                      .sib('next')
															.class('hide', '-');

              sideNavState = [1, '#utilFunc'];
              break;
        case (dom('html').scrolled() > offSets['proto-func'] + diff && dom('html').scrolled() < offSets['shifter-func'] + diff ||
              dom('body').scrolled() > offSets['proto-func'] + diff && dom('body').scrolled() < offSets['shifter-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#protoLink'/>
                          .class('hot');

              sideNavState = [3, '#protoLink'];
              break;
        case (dom('html').scrolled() > offSets['shifter-func'] + diff && dom('html').scrolled() < offSets['elem-obj'] + diff ||
              dom('body').scrolled() > offSets['shifter-func'] + diff && dom('body').scrolled() < offSets['elem-obj'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');

              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#shifterLink'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');

              sideNavState = [2, '#shifterLink'];
              break;
        case (dom('html').scrolled() > offSets['elem-obj'] + diff && dom('html').scrolled() < offSets['element-const'] + diff ||
              dom('body').scrolled() > offSets['elem-obj'] + diff && dom('body').scrolled() < offSets['element-const'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');

              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#elemObj'/>
                      .class('hot')
                      .sib('next')
															.class('hide', '-');

              sideNavState = [1, '#elemObj'];
              break;
        case (dom('html').scrolled() > offSets['element-const'] + diff && dom('html').scrolled() < offSets['dom2-func'] + diff ||
              dom('body').scrolled() > offSets['element-const'] + diff && dom('body').scrolled() < offSets['dom2-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#elemConstLink'/>
                          .class('hot');

              sideNavState = [3, '#elemConstLink'];
              break;
        case (dom('html').scrolled() > offSets['dom2-func'] + diff && dom('html').scrolled() < offSets['make2-func'] + diff ||
              dom('body').scrolled() > offSets['dom2-func'] + diff && dom('body').scrolled() < offSets['make2-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#dom2Link'/>
                          .class('hot');

              sideNavState = [3, '#dom2Link'];
              break;
        case (dom('html').scrolled() > offSets['make2-func'] + diff && dom('html').scrolled() < offSets['elem-obj-methods'] + diff ||
              dom('body').scrolled() > offSets['make2-func'] + diff && dom('body').scrolled() < offSets['elem-obj-methods'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');

              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#make2Link'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');

              sideNavState = [2, '#make2Link'];
              break;
        case (dom('html').scrolled() > offSets['elem-obj-methods'] + diff && dom('html').scrolled() < offSets['element-font-ex'] + diff ||
              dom('body').scrolled() > offSets['elem-obj-methods'] + diff && dom('body').scrolled() < offSets['element-font-ex'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');

              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#elemObjMethods'/>
                      .class('hot')
                      .sib('next')
															.class('hide', '-');

              sideNavState = [1, '#elemObjMethods'];
              break;
        case (dom('html').scrolled() > offSets['element-font-ex'] + diff && dom('html').scrolled() < offSets['style-methods'] + diff ||
              dom('body').scrolled() > offSets['element-font-ex'] + diff && dom('body').scrolled() < offSets['style-methods'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#fontExampLink'/>
                          .class('hot');

              sideNavState = [3, '#fontExampLink'];
              break;
        case (dom('html').scrolled() > offSets['style-methods'] + diff && dom('html').scrolled() < offSets['core-func'] + diff ||
              dom('body').scrolled() > offSets['style-methods'] + diff && dom('body').scrolled() < offSets['core-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#stylMethodsLink'/>
                          .class('hot');

              sideNavState = [3, '#stylMethodsLink'];
              break;
        case (dom('html').scrolled() > offSets['core-func'] + diff && dom('html').scrolled() < offSets['DOM-Elem-Methods'] + diff ||
              dom('body').scrolled() > offSets['core-func'] + diff && dom('body').scrolled() < offSets['DOM-Elem-Methods'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#coreLink'/>
                          .class('hot');

              sideNavState = [3, '#coreLink'];
              break;
        case (dom('html').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('html').scrolled() < offSets['event-methods'] + diff ||
              dom('body').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('body').scrolled() < offSets['event-methods'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#domMethodsLink'/>
                          .class('hot');

              sideNavState = [3, '#domMethodsLink'];
              break;
        case (dom('html').scrolled() > offSets['event-methods'] + diff && dom('html').scrolled() < offSets['Util-Methods'] + diff ||
              dom('body').scrolled() > offSets['event-methods'] + diff && dom('body').scrolled() < offSets['Util-Methods'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#eventMethodsLink'/>
                          .class('hot');

              sideNavState = [3, '#eventMethodsLink'];
              break;
        case (dom('html').scrolled() > offSets['Util-Methods'] + diff && dom('html').scrolled() < offSets['elements-syntax'] + diff ||
              dom('body').scrolled() > offSets['Util-Methods'] + diff && dom('body').scrolled() < offSets['elements-syntax'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');

              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#utilMethodsLink'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');

              sideNavState = [2, '#utilMethodsLink'];
              break;
        case (dom('html').scrolled() > offSets['elements-syntax'] + diff && dom('html').scrolled() < offSets['elemsyntax-func1'] + diff ||
              dom('body').scrolled() > offSets['elements-syntax'] + diff && dom('body').scrolled() < offSets['elemsyntax-func1'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');

              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#elemsSyntax'/>
                      .class('hot')
                      .sib('next')
															.class('hide', '-');

              sideNavState = [1, '#elemsSyntax'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func1'] + diff && dom('html').scrolled() < offSets['elemsyntax-func2'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func1'] + diff && dom('body').scrolled() < offSets['elemsyntax-func2'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func1Link'/>
                          .class('hot');

              sideNavState = [3, '#func1Link'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func2'] + diff && dom('html').scrolled() < offSets['elemsyntax-func3'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func2'] + diff && dom('body').scrolled() < offSets['elemsyntax-func3'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func2Link'/>
                          .class('hot');

              sideNavState = [3, '#func2Link'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func3'] + diff && dom('html').scrolled() < offSets['elemsyntax-func4'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func3'] + diff && dom('body').scrolled() < offSets['elemsyntax-func4'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func3Link'/>
                          .class('hot');

              sideNavState = [3, '#func3Link'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func4'] + diff && dom('html').scrolled() < offSets['elemsyntax-func5'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func4'] + diff && dom('body').scrolled() < offSets['elemsyntax-func5'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func4Link'/>
                          .class('hot');

              sideNavState = [3, '#func4Link'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func5'] + diff && dom('html').scrolled() < offSets['elemsyntax-func6'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func5'] + diff && dom('body').scrolled() < offSets['elemsyntax-func6'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func5Link'/>
                          .class('hot');

              sideNavState = [3, '#func5Link'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func6'] + diff && dom('html').scrolled() < offSets['append-syntax'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func6'] + diff && dom('body').scrolled() < offSets['append-syntax'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func6Link'/>
                      .class('hot');

              sideNavState = [3, '#func6Link'];
              break;
        case (dom('html').scrolled() > offSets['append-syntax'] + diff && dom('html').scrolled() < offSets['elemsyntax-func7'] + diff ||
              dom('body').scrolled() > offSets['append-syntax'] + diff && dom('body').scrolled() < offSets['elemsyntax-func7'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#appendStaxLink'/>
                      .class('hot');

              sideNavState = [3, '#appendStaxLink'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func7'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func7'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func7Link'/>
                      .class('hot');

              sideNavState = [3, '#func7Link'];
              break;

        default:
            break;
      }
    });
}



module.exports = {
                  getOffSets: getOffSets,
           sideNavController: sideNavController,
         mouseOverController: mouseOverController,
          mouseOutController: mouseOutController
}
