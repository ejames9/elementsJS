
/*
sideNavControl.js
This file Makes the side-nav menu on the elementsJS.io
project-site docs page work.
Author: Eric James Foster
License: MIT
*/



import { el, log, err, scroll, show, mouse, hasAncestor } from 'elementsJS';


var
browser = require('bowser');


//global that documents what state the menu is currently in.
window.sideNavState = [];

//The control states for the sideNav Menu.
const sideNavStates = {
  stateOne: (elem)=> {
    //Logic.
    if (String(dom('[class~=hot]')) === String(dom('#imps'))) {
      // Do Nothing at all.
    } else {
    //Make cold.
      dom('#imps code')
            .bgColor('#39175E')
            .color('#52218A');
    }
    dom('[class~=hot2]')
            .class('hot2', '-');
    dom('[title=hotCode]')
            .title('')
            .bgColor('#39175E')
            .color('#52218A');
    dom('[name=hotCode]')
            .title('hotCode')
            .class('hot2', '+');
    dom('[class~=hot]')
            .color('#52218A')
            .class('hot', '-');
    dom('[name=listHead]')
            .every((element)=> {
              element
                  .color('#52218A');
            });
    try {
      var tick = 0;
      dom('#gsList ul li a')
                .every((element)=> {
                  element
                      .func(()=> {
                        if (element.title() !== 'hotCode') {
                          element
                              .color('#52218A');
                        }
                      });
                });
    }
    catch(error) {
      err(error);
    }
    dom('[name=hidden]')
            .every((element)=> {
                element
                    .class('hide')
            });
    //Make hot.
    dom(elem)
            .class('hot')
            .color('#FF8A22')
            .fontWeight('500')
            .sib('next')
                    .class('hide', '-');
  },

  stateTwo: (elem)=> {
    //Logic.
    if (String(dom('[class~=hot]')) === String(dom('#imps'))) {
      // return;
    } else {
      dom('#imps code')
            .bgColor('#39175E')
            .color('#52218A');
    }
    //Make cold.
    dom('[title=hotCode]')
            .title('')
            .bgColor('#39175E')
            .color('#52218A');
    dom('[class~=hot]')
            .color('#52218A')
            .class('hot', '-');
    dom('[class~=hot2]')
            .class('hot2', '-');
    dom('[name=hidden]')
            .every((element)=> {
                element
                    .class('hide')
            });
    dom('[name=listHead]')
            .every((element)=> {
                element
                    .color('#52218A');
            });
    try {
      var tick = 0;
      dom('#gsList ul li a')
                .every((element)=> {
                  element
                      .func(()=> {
                        if (element.title() !== 'hotCode') {
                          element
                              .color('#52218A');
                        }
                      });
                });
    }
    catch(error) {
      err(error);
    }
    //Make hot.
    dom(elem)
            .class('hot2')
            .ma()
                .class('hide', '-')
                .sib('prev')
                        .color('#FF8A22')
                        .fontWeight('500')
                        .class('hot');
    dom(elem + ' a')
            .title('hotCode')
            .color('#FF8A22');
  },

  stateThree: (elem)=> {
    //Logic.
    if (String(dom('[class~=hot]')) === String(dom('#imps'))) {
      // return;
    } else {
      dom('#imps code')
            .bgColor('#39175E')
            .color('#52218A');
    }
    //Make cold.
    dom('[title=hotCode]')
            .title('')
            .bgColor('#39175E')
            .color('#52218A');
    dom('[class~=hot]')
            .color('#52218A')
            .class('hot', '-');
    dom('[class~=hot2]')
            .class('hot2', '-');
    dom('[name=hidden]')
            .every((element)=> {
                element
                    .class('hide')
            });
    dom('[name=listHead]')
            .every((element)=> {
                element
                    .color('#52218A');
            });
    try {
      var tick = 0;
      dom('#gsList ul li a')
                .every((element)=> {
                  element
                      .func(()=> {
                        if (element.title() !== 'hotCode') {
                          element
                              .color('#52218A');
                        }
                      });
                });
    }
    catch(error) {
      err(error);
    }
    //Make hot.
    dom(elem)
            .class('hot2')
            .ma()
                .class('hide', '-')
                .sib('prev')
                        .color('#FF8A22')
                        .fontWeight('500')
                        .class('hot');
    dom(elem + ' a code')
            .title('hotCode')
            .bgColor('#52218A')
            .color('#fff');
  },

  stateFour: (elem)=> {
    //Logic.
    if (String(dom('[class~=hot]')) === String(dom('#imps'))) {
      // return;
    } else {
      dom('#imps code')
            .bgColor('#39175E')
            .color('#52218A');
    }
    //Make cold.
    dom('[class~=hot2]')
            .class('hot2', '-');
    dom('[title=hotCode]')
            .title('')
            .bgColor('#39175E')
            .color('#52218A');
    dom('[name=hotCode]')
            // .title('hotCode')
            .class('hot2', '+');
    dom('[class~=hot]')
            .color('#52218A')
            .class('hot', '-');
    dom('[name=hidden]')
            .every((element)=> {
                element
                    .class('hide')
            });
    dom('[name=listHead]')
            .every((element)=> {
                element
                    .color('#52218A');
            });
    try {
      var tick = 0;
      dom('#gsList ul li a')
                .every((element, a)=> {
                  element
                      .func(()=> {
                        if (element.title() !== 'hotCode') {
                          element
                              .color('#52218A');
                        }
                      });
                });
    }
    catch(error) {
      err(error);
    }
    //Make hot.
    dom(elem)
            .class('hot')
            .color('#FF8A22')
            .first()
                   .title('hotCode')
                   .bgColor('#52218A')
                   .color('#fff');
  },

  stateFive: (elem)=> {
    //Logic.
    if (String(dom('[class~=hot]')) === String(dom('#imps'))) {
      // return;
    } else {
      dom('#imps code')
            .bgColor('#39175E')
            .color('#52218A');
    }
    //Make cold.
    dom('[class~=hot2]')
            .class('hot2', '-');
    dom('[title=hotCode]')
            .title('')
            .bgColor('#39175E')
            .color('#52218A');
    dom('[name=hotCode]')
            .title('hotCode')
            .class('hot2', '+');
    dom('[class~=hot]')
            .color('#52218A')
            .class('hot', '-');
    dom('[name=hidden]')
            .every((element)=> {
                element
                    .class('hide')
            });
    dom('[name=listHead]')
            .every((element)=> {
                element
                    .color('#52218A');
            });
    try {
      var tick = 0;
      dom('#gsList ul li a')
                .every((element, a)=> {
                  element
                      .func(()=> {
                        if (element.title() !== 'hotCode') {
                          element
                              .color('#52218A');
                        }
                      });
                });
    }
    catch(error) {
      err(error);
    }
    //Make hot.
    dom(elem)
            .class('hot')
            .color('#FF8A22')
            .fontWeight('500')
            .sib('next')
                      .class('hide', '+');
  },

  stateSix: (elem)=> {
    //Logic.
    if (String(dom('[class~=hot]')) === String(dom('#imps'))) {
      // return;
    } else {
      dom('#imps code')
            .bgColor('#39175E')
            .color('#52218A');
    }
    dom('[title=hotCode]')
            .title('')
            .bgColor('#39175E')
            .color('#52218A');
    dom('[class~=hot2]')
            .class('hot2', '-');
    dom('[name=hidden]')
            .every((element)=> {
                element
                    .class('hide')
            });
    dom('[name=listHead]')
            .every((element)=> {
                element
                    .color('#52218A');
            });
    try {
      var tick = 0;
      dom('#gsList ul li a')
                .every((element, a)=> {
                  element
                      .func(()=> {
                        if (element.title() !== 'hotCode') {
                          element
                              .color('#52218A');
                        }
                      });
                });
    }
    catch(error) {
      err(error);
    }
    //Make hot.
    dom('#instLink a')
            .title('hotCode')
            .color('#FF8A22');
    dom(elem)
            .class('hot2')
            .ma()
               .class('hide', '-')
               .sib('prev')
                        .color('#FF8A22');
  },

  stateSeven: (elem)=> {
    //Logic.
    if (String(dom('[class~=hot]')) === String(dom('#imps'))) {
      // return;
    } else {
      dom('#imps code')
            .bgColor('#39175E')
            .color('#52218A');
    }
    dom('[name=hidden]')
            .every((element)=> {
                  element
                    .class('hide', '+')
             });
    dom('[name=listHead]')
            .every((element)=> {
                  element
                    .color('#52218A');
              });
    dom('[class=hot]')
            .color('#FF8A22');
    dom(elem)
          .first()
                .fontWeight('500')
                .color('#FF8A22')
                .sib('next')
                        .class('hide', '-');
  },

  stateEight: (elem)=> {
    //Logic.
    if (String(dom('[class~=hot]')) === String(dom('#imps'))) {
      // return;
    } else {
      dom('#imps code')
            .bgColor('#39175E')
            .color('#52218A');
    }
    dom('[title~=shorts]')
              .every((element)=> {
                  element
                    .class('hide', '+')
             });
    dom('[name=listHead]')
              .every((element)=> {
                   element
                    .color('#52218A');
              });
    dom('[class=hot]')
              .color('#FF8A22');
    dom(elem)
          .first()
                .fontWeight('500')
                .color('#FF8A22')
                .sib('next')
                        .class('hide', '-');
  },

  stateNine: (elem)=> {
    //Logic.
    if (String(dom('[class~=hot]')) === String(dom('#imps'))) {
      // Do nothing;
    } else {
      dom('#imps code')
            .bgColor('#39175E')
            .color('#52218A');
    }
    //Make cold.
    dom('[name=listHead]')
              .every((element)=> {
                   element
                    .color('#52218A');
              });
    //Make hot.
    dom('[class=hot]')
              .color('#FF8A22');

    dom(elem)
            .color('#FF8A22')
            .first()
                  .bgColor('#52218A')
                  .color('#fff')
  },

  stateTen: (elem)=> {
    //Logic.
    if (String(dom('[class~=hot]')) === String(dom('#imps'))) {
      // Do nothing;
    } else {
      dom('#imps code')
            .bgColor('#39175E')
            .color('#52218A');
    }
    //Make cold.
    dom('[name=hidden]')
              .every((element)=> {
                  element
                    .class('hide', '+')
             });
    dom('[name=listHead]')
              .every((element)=> {
                  element
                    .color('#52218A');
              });
    dom('#gsList ul li a')
              .every((element)=> {
                element
                    .func(()=> {
                      if (element.title() !== 'hotCode') {
                        element
                            .color('#52218A');
                      }
                    });
              });
    //Make Hot.
    dom('[class=hot]')
              .color('#FF8A22');
    dom('#gsList')
          .first()
                .color('#FF8A22')
                .sib('next')
                        .class('hide', '-');
    try {
      dom(elem)
            .first()
                  .color('#FF8A22');
    }
    catch (error) {
      err(error);
    }
  },
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
// function hasAncestor(l, ance) {
//   var tick, ancestor = el(ance),
//            ancestors = [];
//
//   try {
//     ancestors.push(l.parentNode);
//     ancestors.push(ancestors[0].parentNode);
//     ancestors.push(ancestors[1].parentNode);
//     ancestors.push(ancestors[2].parentNode);
//     ancestors.push(ancestors[3].parentNode);
//     ancestors.push(ancestors[4].parentNode);
//   }
//   catch(error) {
//     err(error);
//   }
//
//   // console.log(ancestors);
//   tick = 0;
//
//   for (var i = 0; i < ancestors.length; i++) {
//     if (ancestors[i] === ancestor) tick++;
//   }
//   if (tick > 0) return true;
//
//   else return false;
// }


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
        case (6):
            sideNavStates.stateSix(sideNavState[1]);
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
      case (e.target === el('#gsList') || e.target.parentNode === el('#gsList') || e.target.parentNode.parentNode === el('#gsList')):
          console.log('#' + e.target.id);
          sideNavStates.stateTen('#' + e.target.id);

          break;
      case (e.target === el('#imps') || e.target.parentNode === el('#imps')):

          sideNavStates.stateNine('#imps');

          break;
      case (e.target === el('#domList') || e.target.parentNode === el('#domList')):

          sideNavStates.stateSeven('#domList');
          break;
      case (e.target === el('#eventList') || e.target.parentNode === el('#eventList')):

          sideNavStates.stateSeven('#eventList');

          break;
      case (e.target === el('#httpList') || e.target.parentNode === el('#httpList')):

          sideNavStates.stateEight('#httpList');

          break;
      case (e.target === el('#loggList') || e.target.parentNode === el('#loggList')):

          sideNavStates.stateEight('#loggList');

          break;
      case (e.target === el('#utilsList') || e.target.parentNode === el('#utilsList')):

          sideNavStates.stateEight('#utilsList');

          break;
      case (e.target === el('#elemObjList') || e.target.parentNode === el('#elemObjList')):

          sideNavStates.stateEight('#elemObjList');

          break;
      case (e.target === el('#eOMethodsList') || e.target.parentNode === el('#eOMethodsList')):

          sideNavStates.stateEight('#eOMethodsList');

          break;
      case (e.target === el('#eStaxList') || e.target.parentNode === el('#eStaxList')):

          sideNavStates.stateEight('#eStaxList');

          break;

    };
  });
}

function sideNavController() {
  // console.log(dom('[name=hidden]'));
  sideNavSticky();

  const offSets = getOffSets(),
           diff = 466;

  scroll(window, ()=>  {
      switch(true) {
        //0 - 13 Getting Started
        case (dom('html').scrolled() > 0 + diff && dom('html').scrolled() < offSets['installation'] + diff ||
              dom('body').scrolled() > 0 + diff && dom('body').scrolled() < offSets['installation'] + diff):
              //Find active list item, deactivate it.
              dom('[title=hotCode]')
                      .title('')
                      .bgColor('#39175E')
                      .color('#52218A');
              dom('[name=hotCode]')
                      .title('hotCode');
              dom('[class~=hot]')
                      .color('#52218A')
                      .fontWeight('300')
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
                      .color('#FF8A22')
                      .fontWeight('500')
                      .sib('next')
                                .class('hide', '+');

              sideNavState = [5, '#getStart'];
              break;
        case (dom('html').scrolled() > offSets['installation'] + diff && dom('html').scrolled() < offSets['Usage'] + diff ||
              dom('body').scrolled() > offSets['installation'] + diff && dom('body').scrolled() < offSets['Usage'] + diff):
              // log('YES', ['red', 'blue'] + diff);
              dom('[title=hotCode]')
                      .title('')
                      .bgColor('#39175E')
                      .color('#52218A');
              //Find active list item, deactivate it.
              dom('[class~=hot2]')
											.class('hot2', '-');
              //Find all menu lists, hide them.
              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              dom('#instLink a')
                      .title('hotCode')
                      .color('#FF8A22');
              //Activate Installation list item. Open parent list by removing .hide class.
              <'#instLink'/>
                      .class('hot2')
                      .ma()
											   .class('hide', '-')
                         .sib('prev')
                                    .fontWeight('500');

              sideNavState = [6, '#instLink'];
              break;
        case (dom('html').scrolled() > offSets['Usage'] + diff && dom('html').scrolled() < offSets['interpreter-install'] + diff ||
              dom('body').scrolled() > offSets['Usage'] + diff && dom('body').scrolled() < offSets['interpreter-install'] + diff):
              dom('[title=hotCode]')
                      .title('')
                      .bgColor('#39175E')
                      .color('#52218A');
              dom('[class~=hot2]')
											.class('hot2', '-');
              <'#useLink'/>
                      .class('hot2');
              dom('#useLink a')
                      .title('hotCode')
                      .color('#FF8A22');

              sideNavState = [2, '#useLink'];
              break;
        case (dom('html').scrolled() > offSets['interpreter-install'] + diff && dom('html').scrolled() < offSets['imports'] + diff ||
              dom('body').scrolled() > offSets['interpreter-install'] + diff && dom('body').scrolled() < offSets['imports'] + diff):
              dom('[title=hotCode]')
                      .title('')
                      .bgColor('#39175E')
                      .color('#52218A');
              dom('[class~=hot]')
                      .color('#52218A')
                      .fontWeight('300')
											.class('hot', '-');
              dom('[class~=hot2]')
											.class('hot2', '-');
              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#interpInstallLink'/>
                      .class('hot2')
                      .ma()
													.class('hide', '-')
                          .sib('prev')
                                  .color('#FF8A22')
                                  .fontWeight('500')
                                  .class('hot', '+');
              dom('#interpInstallLink a')
                          .title('hotCode')
                          .color('#FF8A22');

              sideNavState = [2, '#interpInstallLink'];
              break;
        case (dom('html').scrolled() > offSets['imports'] + diff && dom('html').scrolled() < offSets['DOM'] + diff ||
              dom('body').scrolled() > offSets['imports'] + diff && dom('body').scrolled() < offSets['DOM'] + diff):
              dom('[title=hotCode]')
                      .title('')
                      .bgColor('#39175E')
                      .color('#52218A');
              dom('[class~=hot]')
                      .color('#52218A')
                      .fontWeight('300')
											.class('hot', '-');

              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              dom('[name=listHead]')
                      .every((element)=> {
                          element
                              .color('#52218A');
                      });
              <'#imps'/>
                      .class('hot')
                      .color('#FF8A22')
                      .first()
                             .title('hotCode')
                             .bgColor('#52218A')
                             .color('#fff');

              sideNavState = [4, '#imps'];
              break;
        case (dom('html').scrolled() > offSets['DOM'] + diff && dom('html').scrolled() < offSets['el-func'] + diff ||
              dom('body').scrolled() > offSets['DOM'] + diff && dom('body').scrolled() < offSets['el-func'] + diff):
              dom('[title=hotCode]')
                      .title('')
                      .bgColor('#39175E')
                      .color('#52218A');
              dom('[name=hotCode]')
                      .title('hotCode');
              dom('[class~=hot]')
                      .color('#52218A')
                      .fontWeight('300')
											.class('hot', '-');
              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              dom('[name=listHead]')
                      .every((element)=> {
                          element
                              .color('#52218A');
                      });
              <'#domManip'/>
                      .class('hot')
                      .color('#FF8A22')
                      .fontWeight('500')
                      .sib('next')
															.class('hide', '-');

              sideNavState = [1, '#domManip'];
              break;
        case (dom('html').scrolled() > offSets['el-func'] + diff && dom('html').scrolled() < offSets['dom-func'] + diff ||
              dom('body').scrolled() > offSets['el-func'] + diff && dom('body').scrolled() < offSets['dom-func'] + diff):

              sideNavStates.stateThree('#elLink');

              sideNavState = [3, '#elLink'];
              break;
        case (dom('html').scrolled() > offSets['dom-func'] + diff && dom('html').scrolled() < offSets['__-func'] + diff ||
              dom('body').scrolled() > offSets['dom-func'] + diff && dom('body').scrolled() < offSets['__-func'] + diff):

              sideNavStates.stateThree('#domLink');

              sideNavState = [3, '#domLink'];
              break;
        case (dom('html').scrolled() > offSets['__-func'] + diff && dom('html').scrolled() < offSets['make-func'] + diff ||
              dom('body').scrolled() > offSets['__-func'] + diff && dom('body').scrolled() < offSets['make-func'] + diff):

              sideNavStates.stateThree('#__Link');

              sideNavState = [3, '#__Link'];
              break;
        case (dom('html').scrolled() > offSets['make-func'] + diff && dom('html').scrolled() < offSets['put-func'] + diff ||
              dom('body').scrolled() > offSets['make-func'] + diff && dom('body').scrolled() < offSets['put-func'] + diff):

              sideNavStates.stateThree('#makeLink');

              sideNavState = [3, '#makeLink'];
              break;
        case (dom('html').scrolled() > offSets['put-func'] + diff && dom('html').scrolled() < offSets['x-func'] + diff ||
              dom('body').scrolled() > offSets['put-func'] + diff && dom('body').scrolled() < offSets['x-func'] + diff):

              sideNavStates.stateThree('#putLink');

              sideNavState = [3, '#putLink'];
              break;
        case (dom('html').scrolled() > offSets['x-func'] + diff && dom('html').scrolled() < offSets['fore-func'] + diff ||
              dom('body').scrolled() > offSets['x-func'] + diff && dom('body').scrolled() < offSets['fore-func'] + diff):

              sideNavStates.stateThree('#xLink');

              sideNavState = [3, '#xLink'];
              break;
        case (dom('html').scrolled() > offSets['fore-func'] + diff && dom('html').scrolled() < offSets['aft-func'] + diff ||
              dom('body').scrolled() > offSets['fore-func'] + diff && dom('body').scrolled() < offSets['aft-func'] + diff):

              sideNavStates.stateThree('#foreLink');

              sideNavState = [3, '#foreLink'];
              break;
        case (dom('html').scrolled() > offSets['aft-func'] + diff && dom('html').scrolled() < offSets['show-func'] + diff ||
              dom('body').scrolled() > offSets['aft-func'] + diff && dom('body').scrolled() < offSets['show-func'] + diff):

              sideNavStates.stateThree('#aftLink');

              sideNavState = [3, '#aftLink'];
              break;
        case (dom('html').scrolled() > offSets['show-func'] + diff && dom('html').scrolled() < offSets['hide-func'] + diff ||
              dom('body').scrolled() > offSets['show-func'] + diff && dom('body').scrolled() < offSets['hide-func'] + diff):

              sideNavStates.stateThree('#showLink');

              sideNavState = [3, '#showLink'];
              break;
        case (dom('html').scrolled() > offSets['hide-func'] + diff && dom('html').scrolled() < offSets['size-func'] + diff ||
              dom('body').scrolled() > offSets['hide-func'] + diff && dom('body').scrolled() < offSets['size-func'] + diff):

              sideNavStates.stateThree('#hydeLink');

              sideNavState = [3, '#hydeLink'];
              break;
        case (dom('html').scrolled() > offSets['size-func'] + diff && dom('html').scrolled() < offSets['event-handle'] + diff ||
              dom('body').scrolled() > offSets['size-func'] + diff && dom('body').scrolled() < offSets['event-handle'] + diff):

              sideNavStates.stateThree('#sizeLink');

              sideNavState = [3, '#sizeLink'];
              break;
        case (dom('html').scrolled() > offSets['event-handle'] + diff && dom('html').scrolled() < offSets['go-func'] + diff ||
              dom('body').scrolled() > offSets['event-handle'] + diff && dom('body').scrolled() < offSets['go-func'] + diff):

              sideNavStates.stateOne('#eventHand');

              sideNavState = [1, '#eventHand'];
              break;
        case (dom('html').scrolled() > offSets['go-func'] + diff && dom('html').scrolled() < offSets['on-func'] + diff ||
              dom('body').scrolled() > offSets['go-func'] + diff && dom('body').scrolled() < offSets['on-func'] + diff):

              sideNavStates.stateThree('#goLink');

              sideNavState = [3, '#goLink'];
              break;
        case (dom('html').scrolled() > offSets['on-func'] + diff && dom('html').scrolled() < offSets['off-func'] + diff ||
              dom('body').scrolled() > offSets['on-func'] + diff && dom('body').scrolled() < offSets['off-func'] + diff):

              sideNavStates.stateThree('#onLink');

              sideNavState = [3, '#onLink'];
              break;
        case (dom('html').scrolled() > offSets['off-func'] + diff && dom('html').scrolled() < offSets['once-func'] + diff ||
              dom('body').scrolled() > offSets['off-func'] + diff && dom('body').scrolled() < offSets['once-func'] + diff):

              sideNavStates.stateThree('#offLink');

              sideNavState = [3, '#offLink'];
              break;
        case (dom('html').scrolled() > offSets['once-func'] + diff && dom('html').scrolled() < offSets['spark-func'] + diff ||
              dom('body').scrolled() > offSets['once-func'] + diff && dom('body').scrolled() < offSets['spark-func'] + diff):

              sideNavStates.stateThree('#onceLink');

              sideNavState = [3, '#onceLink'];
              break;
        case (dom('html').scrolled() > offSets['spark-func'] + diff && dom('html').scrolled() < offSets['click-func'] + diff ||
              dom('body').scrolled() > offSets['spark-func'] + diff && dom('body').scrolled() < offSets['click-func'] + diff):

              sideNavStates.stateThree('#sparkLink');

              sideNavState = [3, '#sparkLink'];
              break;
        case (dom('html').scrolled() > offSets['click-func'] + diff && dom('html').scrolled() < offSets['dblClick-func'] + diff ||
              dom('body').scrolled() > offSets['click-func'] + diff && dom('body').scrolled() < offSets['dblClick-func'] + diff):

              sideNavStates.stateThree('#clickLink');

              sideNavState = [3, '#clickLink'];
              break;
        case (dom('html').scrolled() > offSets['dblClick-func'] + diff && dom('html').scrolled() < offSets['blur-func'] + diff ||
              dom('body').scrolled() > offSets['dblClick-func'] + diff && dom('body').scrolled() < offSets['blur-func'] + diff):

              sideNavStates.stateThree('#dblLink');

              sideNavState = [3, '#dblLink'];
              break;
        case (dom('html').scrolled() > offSets['blur-func'] + diff && dom('html').scrolled() < offSets['error-func'] + diff ||
              dom('body').scrolled() > offSets['blur-func'] + diff && dom('body').scrolled() < offSets['error-func'] + diff):

              sideNavStates.stateThree('#blurLink');

              sideNavState = [3, '#blurLink'];
              break;
        case (dom('html').scrolled() > offSets['error-func'] + diff && dom('html').scrolled() < offSets['focus-func'] + diff ||
              dom('body').scrolled() > offSets['error-func'] + diff && dom('body').scrolled() < offSets['focus-func'] + diff):

              sideNavStates.stateThree('#errorLink');

              sideNavState = [3, '#errorLink'];
              break;
        case (dom('html').scrolled() > offSets['focus-func'] + diff && dom('html').scrolled() < offSets['focusIn-func'] + diff ||
              dom('body').scrolled() > offSets['focus-func'] + diff && dom('body').scrolled() < offSets['focusIn-func'] + diff):

              sideNavStates.stateThree('#focusLink');

              sideNavState = [3, '#focusLink'];
              break;
        case (dom('html').scrolled() > offSets['focusIn-func'] + diff && dom('html').scrolled() < offSets['focusOut-func'] + diff ||
              dom('body').scrolled() > offSets['focusIn-func'] + diff && dom('body').scrolled() < offSets['focusOut-func'] + diff):

              sideNavStates.stateThree('#focusInLink');

              sideNavState = [3, '#focusInLink'];
              break;
        case (dom('html').scrolled() > offSets['focusOut-func'] + diff && dom('html').scrolled() < offSets['keyUp-func'] + diff ||
              dom('body').scrolled() > offSets['focusOut-func'] + diff && dom('body').scrolled() < offSets['keyUp-func'] + diff):

              sideNavStates.stateThree('#focusOutLink');

              sideNavState = [3, '#focusOutLink'];
              break;
        case (dom('html').scrolled() > offSets['keyUp-func'] + diff && dom('html').scrolled() < offSets['keyDown-func'] + diff ||
              dom('body').scrolled() > offSets['keyUp-func'] + diff && dom('body').scrolled() < offSets['keyDown-func'] + diff):

              sideNavStates.stateThree('#keyUpLink');

              sideNavState = [3, '#keyUpLink'];
              break;
        case (dom('html').scrolled() > offSets['keyDown-func'] + diff && dom('html').scrolled() < offSets['load-func'] + diff ||
              dom('body').scrolled() > offSets['keyDown-func'] + diff && dom('body').scrolled() < offSets['load-func'] + diff):

              sideNavStates.stateThree('#keyDownLink');

              sideNavState = [3, '#keyDownLink'];
              break;
        case (dom('html').scrolled() > offSets['load-func'] + diff && dom('html').scrolled() < offSets['unLoad-func'] + diff ||
              dom('body').scrolled() > offSets['load-func'] + diff && dom('body').scrolled() < offSets['unLoad-func'] + diff):

              sideNavStates.stateThree('#loadLink');

              sideNavState = [3, '#loadLink'];
              break;
        case (dom('html').scrolled() > offSets['unLoad-func'] + diff && dom('html').scrolled() < offSets['mouse-func'] + diff ||
              dom('body').scrolled() > offSets['unLoad-func'] + diff && dom('body').scrolled() < offSets['mouse-func'] + diff):

              sideNavStates.stateThree('#unLoadLink');

              sideNavState = [3, '#unLoadLink'];
              break;
        case (dom('html').scrolled() > offSets['mouse-func'] + diff && dom('html').scrolled() < offSets['resize-func'] + diff ||
              dom('body').scrolled() > offSets['mouse-func'] + diff && dom('body').scrolled() < offSets['resize-func'] + diff):

              sideNavStates.stateThree('#mouseLink');

              sideNavState = [3, '#mouseLink'];
              break;
        case (dom('html').scrolled() > offSets['resize-func'] + diff && dom('html').scrolled() < offSets['scroll-func'] + diff ||
              dom('body').scrolled() > offSets['resize-func'] + diff && dom('body').scrolled() < offSets['scroll-func'] + diff):

              sideNavStates.stateThree('#resizeLink');

              sideNavState = [3, '#resizeLink'];
              break;
        case (dom('html').scrolled() > offSets['scroll-func'] + diff && dom('html').scrolled() < offSets['select-func'] + diff ||
              dom('body').scrolled() > offSets['scroll-func'] + diff && dom('body').scrolled() < offSets['select-func'] + diff):

              sideNavStates.stateThree('#scrollLink');

              sideNavState = [3, '#scrollLink'];
              break;
        case (dom('html').scrolled() > offSets['select-func'] + diff && dom('html').scrolled() < offSets['http'] + diff ||
              dom('body').scrolled() > offSets['select-func'] + diff && dom('body').scrolled() < offSets['http'] + diff):

              sideNavStates.stateThree('#selectLink');

              sideNavState = [3, '#selectLink'];
              break;
        case (dom('html').scrolled() > offSets['http'] + diff && dom('html').scrolled() < offSets['xhr-func'] + diff ||
              dom('body').scrolled() > offSets['http'] + diff && dom('body').scrolled() < offSets['xhr-func'] + diff):

              sideNavStates.stateOne('#httpReq');

              sideNavState = [1, '#httpReq'];
              break;
        case (dom('html').scrolled() > offSets['xhr-func'] + diff && dom('html').scrolled() < offSets['ajax-func'] + diff ||
              dom('body').scrolled() > offSets['xhr-func'] + diff && dom('body').scrolled() < offSets['ajax-func'] + diff):

              sideNavStates.stateThree('#xhrLink');

              sideNavState = [3, '#xhrLink'];
              break;
        case (dom('html').scrolled() > offSets['ajax-func'] + diff && dom('html').scrolled() < offSets['loggers'] + diff ||
              dom('body').scrolled() > offSets['ajax-func'] + diff && dom('body').scrolled() < offSets['loggers'] + diff):

              sideNavStates.stateThree('#ajaxLink');

              sideNavState = [3, '#ajaxLink'];
              break;
        case (dom('html').scrolled() > offSets['loggers'] + diff && dom('html').scrolled() < offSets['log-func'] + diff ||
              dom('body').scrolled() > offSets['loggers'] + diff && dom('body').scrolled() < offSets['log-func'] + diff):

              sideNavStates.stateOne('#logg');

              sideNavState = [1, '#logg'];
              break;
        case (dom('html').scrolled() > offSets['log-func'] + diff && dom('html').scrolled() < offSets['info-func'] + diff ||
              dom('body').scrolled() > offSets['log-func'] + diff && dom('body').scrolled() < offSets['info-func'] + diff):

              sideNavStates.stateThree('#logLink');

              sideNavState = [3, '#logLink'];
              break;
        case (dom('html').scrolled() > offSets['info-func'] + diff && dom('html').scrolled() < offSets['warn-func'] + diff ||
              dom('body').scrolled() > offSets['info-func'] + diff && dom('body').scrolled() < offSets['warn-func'] + diff):

              sideNavStates.stateThree('#infoLink');

              sideNavState = [3, '#infoLink'];
              break;
        case (dom('html').scrolled() > offSets['warn-func'] + diff && dom('html').scrolled() < offSets['err-func'] + diff ||
              dom('body').scrolled() > offSets['warn-func'] + diff && dom('body').scrolled() < offSets['err-func'] + diff):

              sideNavStates.stateThree('#warnLink');

              sideNavState = [3, '#warnLink'];
              break;
        case (dom('html').scrolled() > offSets['err-func'] + diff && dom('html').scrolled() < offSets['utils'] + diff ||
              dom('body').scrolled() > offSets['err-func'] + diff && dom('body').scrolled() < offSets['utils'] + diff):

              sideNavStates.stateThree('#errLink');

              sideNavState = [3, '#errLink'];
              break;
        case (dom('html').scrolled() > offSets['utils'] + diff && dom('html').scrolled() < offSets['proto-func'] + diff ||
              dom('body').scrolled() > offSets['utils'] + diff && dom('body').scrolled() < offSets['proto-func'] + diff):

              sideNavStates.stateOne('#utilFunc');

              sideNavState = [1, '#utilFunc'];
              break;
        case (dom('html').scrolled() > offSets['proto-func'] + diff && dom('html').scrolled() < offSets['shifter-func'] + diff ||
              dom('body').scrolled() > offSets['proto-func'] + diff && dom('body').scrolled() < offSets['shifter-func'] + diff):

              sideNavStates.stateThree('#protoLink');

              sideNavState = [3, '#protoLink'];
              break;
        case (dom('html').scrolled() > offSets['shifter-func'] + diff && dom('html').scrolled() < offSets['elem-obj'] + diff ||
              dom('body').scrolled() > offSets['shifter-func'] + diff && dom('body').scrolled() < offSets['elem-obj'] + diff):

              sideNavStates.stateThree('#shifterLink');

              sideNavState = [3, '#shifterLink'];
              break;
        case (dom('html').scrolled() > offSets['elem-obj'] + diff && dom('html').scrolled() < offSets['element-const'] + diff ||
              dom('body').scrolled() > offSets['elem-obj'] + diff && dom('body').scrolled() < offSets['element-const'] + diff):

              sideNavStates.stateOne('#elemObj');

              sideNavState = [1, '#elemObj'];
              break;
        case (dom('html').scrolled() > offSets['element-const'] + diff && dom('html').scrolled() < offSets['dom2-func'] + diff ||
              dom('body').scrolled() > offSets['element-const'] + diff && dom('body').scrolled() < offSets['dom2-func'] + diff):

              sideNavStates.stateThree('#elemConstLink');

              sideNavState = [3, '#elemConstLink'];
              break;
        case (dom('html').scrolled() > offSets['dom2-func'] + diff && dom('html').scrolled() < offSets['make2-func'] + diff ||
              dom('body').scrolled() > offSets['dom2-func'] + diff && dom('body').scrolled() < offSets['make2-func'] + diff):

              sideNavStates.stateThree('#dom2Link');

              sideNavState = [3, '#dom2Link'];
              break;
        case (dom('html').scrolled() > offSets['make2-func'] + diff && dom('html').scrolled() < offSets['elem-obj-methods'] + diff ||
              dom('body').scrolled() > offSets['make2-func'] + diff && dom('body').scrolled() < offSets['elem-obj-methods'] + diff):

              sideNavStates.stateThree('#make2Link');

              sideNavState = [3, '#make2Link'];
              break;
        case (dom('html').scrolled() > offSets['elem-obj-methods'] + diff && dom('html').scrolled() < offSets['element-font-ex'] + diff ||
              dom('body').scrolled() > offSets['elem-obj-methods'] + diff && dom('body').scrolled() < offSets['element-font-ex'] + diff):

              sideNavStates.stateOne('#elemObjMethods');

              sideNavState = [1, '#elemObjMethods'];
              break;
        case (dom('html').scrolled() > offSets['element-font-ex'] + diff && dom('html').scrolled() < offSets['style-methods'] + diff ||
              dom('body').scrolled() > offSets['element-font-ex'] + diff && dom('body').scrolled() < offSets['style-methods'] + diff):

              sideNavStates.stateThree('#fontExampLink');

              sideNavState = [3, '#fontExampLink'];
              break;
        case (dom('html').scrolled() > offSets['style-methods'] + diff && dom('html').scrolled() < offSets['core-func'] + diff ||
              dom('body').scrolled() > offSets['style-methods'] + diff && dom('body').scrolled() < offSets['core-func'] + diff):

              sideNavStates.stateTwo('#stylMethodsLink');

              sideNavState = [2, '#stylMethodsLink'];
              break;
        case (dom('html').scrolled() > offSets['core-func'] + diff && dom('html').scrolled() < offSets['DOM-Elem-Methods'] + diff ||
              dom('body').scrolled() > offSets['core-func'] + diff && dom('body').scrolled() < offSets['DOM-Elem-Methods'] + diff):

              sideNavStates.stateTwo('#coreLink');

              sideNavState = [2, '#coreLink'];
              break;
        case (dom('html').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('html').scrolled() < offSets['event-methods'] + diff ||
              dom('body').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('body').scrolled() < offSets['event-methods'] + diff):

              sideNavStates.stateTwo('#domMethodsLink');

              sideNavState = [2, '#domMethodsLink'];
              break;
        case (dom('html').scrolled() > offSets['event-methods'] + diff && dom('html').scrolled() < offSets['Util-Methods'] + diff ||
              dom('body').scrolled() > offSets['event-methods'] + diff && dom('body').scrolled() < offSets['Util-Methods'] + diff):

              sideNavStates.stateTwo('#eventMethodsLink');

              sideNavState = [2, '#eventMethodsLink'];
              break;
        case (dom('html').scrolled() > offSets['Util-Methods'] + diff && dom('html').scrolled() < offSets['elements-syntax'] + diff ||
              dom('body').scrolled() > offSets['Util-Methods'] + diff && dom('body').scrolled() < offSets['elements-syntax'] + diff):

              sideNavStates.stateTwo('#utilMethodsLink');

              sideNavState = [2, '#utilMethodsLink'];
              break;
        case (dom('html').scrolled() > offSets['elements-syntax'] + diff && dom('html').scrolled() < offSets['elemsyntax-func1'] + diff ||
              dom('body').scrolled() > offSets['elements-syntax'] + diff && dom('body').scrolled() < offSets['elemsyntax-func1'] + diff):

              sideNavStates.stateOne('#elemsSyntax');

              sideNavState = [1, '#elemsSyntax'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func1'] + diff && dom('html').scrolled() < offSets['elemsyntax-func2'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func1'] + diff && dom('body').scrolled() < offSets['elemsyntax-func2'] + diff):

              sideNavStates.stateThree('#func1Link');

              sideNavState = [3, '#func1Link'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func2'] + diff && dom('html').scrolled() < offSets['elemsyntax-func3'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func2'] + diff && dom('body').scrolled() < offSets['elemsyntax-func3'] + diff):

              sideNavStates.stateThree('#func2Link');

              sideNavState = [3, '#func2Link'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func3'] + diff && dom('html').scrolled() < offSets['elemsyntax-func4'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func3'] + diff && dom('body').scrolled() < offSets['elemsyntax-func4'] + diff):

              sideNavStates.stateThree('#func3Link');

              sideNavState = [3, '#func3Link'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func4'] + diff && dom('html').scrolled() < offSets['elemsyntax-func5'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func4'] + diff && dom('body').scrolled() < offSets['elemsyntax-func5'] + diff):

              sideNavStates.stateThree('#func4Link');

              sideNavState = [3, '#func4Link'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func5'] + diff && dom('html').scrolled() < offSets['elemsyntax-func6'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func5'] + diff && dom('body').scrolled() < offSets['elemsyntax-func6'] + diff):

              sideNavStates.stateThree('#func5Link');

              sideNavState = [3, '#func5Link'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func6'] + diff && dom('html').scrolled() < offSets['append-syntax'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func6'] + diff && dom('body').scrolled() < offSets['append-syntax'] + diff):

              sideNavStates.stateThree('#func6Link');

              sideNavState = [3, '#func6Link'];
              break;
        case (dom('html').scrolled() > offSets['append-syntax'] + diff && dom('html').scrolled() < offSets['elemsyntax-func7'] + diff ||
              dom('body').scrolled() > offSets['append-syntax'] + diff && dom('body').scrolled() < offSets['elemsyntax-func7'] + diff):

              sideNavStates.stateThree('#appendStaxLink');

              sideNavState = [3, '#appendStaxLink'];
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func7'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func7'] + diff):

              sideNavStates.stateThree('#func7Link');

              sideNavState = [3, '#func7Link'];
              break;

        default:
            break;
      }
    });
}

//Position sticky does not work in chrome, so this code will make the sideNav sticky under chromey conditions.
function sideNavSticky() {
  if (browser.chrome) {
    const
   _3Col    = <'#threeCol'/>,
   _sideNav = <'#sideNav'/>,
   _html    = <html/>,
   _body    = <body/>;

   //Scroll event function..
    scroll(window, function() {
      log(_body.scrolled());
      if (_html.scrolled() > _3Col.fromTop() || _body.scrolled() > _3Col.fromTop()) {
        _sideNav
              .position('fixed')
              .top('25px')
              .left('50px');
      }
      if (_html.scrolled() < _3Col.fromTop() && _html.scrolled() > _3Col.fromTop() - 550 ||
          _body.scrolled() < _3Col.fromTop() && _body.scrolled() > _3Col.fromTop() - 550)  {
            _sideNav
                  .position('')
                  .top('25px')
                  .left('50px');
      }
    });
  } else {
    log('Go CSS.', 'yellow');
  }
}



module.exports = {
                  getOffSets: getOffSets,
           sideNavController: sideNavController,
         mouseOverController: mouseOverController,
          mouseOutController: mouseOutController
}
