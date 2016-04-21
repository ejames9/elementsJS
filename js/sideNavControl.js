
/*
sideNavControl.js
This file Makes the side-nav menu on the elementsJS.io
project-site docs page work.
Author: Eric James Foster
License: MIT
*/



import { el, log, scroll, show } from 'elementsJS';


function getOffSets() {

  var offSets = {};
      offSets['installation']        = el('#installation').offsetTop;
      offSets['usage']               = el('#Usage').offsetTop;
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

function sideNavController() {
  // console.log(dom('[name=hidden]'));

  const offSets = getOffSets(),
           diff = 290;

  scroll(window, ()=>  {
      switch(true) {
        //0 - 13 Getting Started
        case (dom('html').scrolled() > 0 + diff && dom('html').scrolled() < offSets['get-started'] + diff + 50 ||
              dom('body').scrolled() > 0 + diff && dom('body').scrolled() < offSets['get-started'] + diff + 50):
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
                      .class('hot');
              break;
        case (dom('html').scrolled() > offSets['installation'] + diff + 50 && dom('html').scrolled() < offSets['usage'] + diff ||
              dom('body').scrolled() > offSets['installation'] + diff + 50 && dom('body').scrolled() < offSets['usage'] + diff):
              // log('YES', ['red', 'blue'] + diff);
              //Find active list item, deactivate it.
              dom('[class~=hot]')
											.class('hot', '-');
              //Find all menu lists, hide them.
              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              //Activate Installation list item. Open parent list by removing .hide class.
              <'#inst'/>
                      .class('hot')
                      .ma()
											   .class('hide', '-');
              break;
        case (dom('html').scrolled() > offSets['usage'] + diff && dom('html').scrolled() < offSets['interpreter-install'] + diff ||
              dom('body').scrolled() > offSets['usage'] + diff && dom('body').scrolled() < offSets['interpreter-install'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#use'/>
                      .class('hot');
              break;
        case (dom('html').scrolled() > offSets['interpreter-install'] + diff && dom('html').scrolled() < offSets['imports'] + diff ||
              dom('body').scrolled() > offSets['interpreter-install'] + diff && dom('body').scrolled() < offSets['imports'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              dom('[name=hidden]')
                      .every((element)=> {
                          element
                              .class('hide');
                      });
              <'#interpInstall'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');
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
                      .class('hot')
                      .sib('next')
															.class('hide', '-');
              break;
        case (dom('html').scrolled() > offSets['el-func'] + diff && dom('html').scrolled() < offSets['dom-func'] + diff ||
              dom('body').scrolled() > offSets['el-func'] + diff && dom('body').scrolled() < offSets['dom-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#el'/>
                      .class('hot');
              break;
        case (dom('html').scrolled() > offSets['dom-func'] + diff && dom('html').scrolled() < offSets['__-func'] + diff ||
              dom('body').scrolled() > offSets['dom-func'] + diff && dom('body').scrolled() < offSets['__-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#dom'/>
                      .class('hot');
              break;
        case (dom('html').scrolled() > offSets['__-func'] + diff && dom('html').scrolled() < offSets['make-func'] + diff ||
              dom('body').scrolled() > offSets['__-func'] + diff && dom('body').scrolled() < offSets['make-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#__'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['make-func'] + diff && dom('html').scrolled() < offSets['put-func'] + diff ||
              dom('body').scrolled() > offSets['make-func'] + diff && dom('body').scrolled() < offSets['put-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#make'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['put-func'] + diff && dom('html').scrolled() < offSets['x-func'] + diff ||
              dom('body').scrolled() > offSets['put-func'] + diff && dom('body').scrolled() < offSets['x-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#put'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['x-func'] + diff && dom('html').scrolled() < offSets['fore-func'] + diff ||
              dom('body').scrolled() > offSets['x-func'] + diff && dom('body').scrolled() < offSets['fore-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#x'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['fore-func'] + diff && dom('html').scrolled() < offSets['aft-func'] + diff ||
              dom('body').scrolled() > offSets['fore-func'] + diff && dom('body').scrolled() < offSets['aft-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#fore'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['aft-func'] + diff && dom('html').scrolled() < offSets['show-func'] + diff ||
              dom('body').scrolled() > offSets['aft-func'] + diff && dom('body').scrolled() < offSets['show-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#aft'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['show-func'] + diff && dom('html').scrolled() < offSets['hide-func'] + diff ||
              dom('body').scrolled() > offSets['show-func'] + diff && dom('body').scrolled() < offSets['hide-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#show'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['hide-func'] + diff && dom('html').scrolled() < offSets['size-func'] + diff ||
              dom('body').scrolled() > offSets['hide-func'] + diff && dom('body').scrolled() < offSets['size-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#hyde'/>
                          .class('hot');
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
              <'#size'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');
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
              break;
        case (dom('html').scrolled() > offSets['go-func'] + diff && dom('html').scrolled() < offSets['on-func'] + diff ||
              dom('body').scrolled() > offSets['go-func'] + diff && dom('body').scrolled() < offSets['on-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#go'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['on-func'] + diff && dom('html').scrolled() < offSets['off-func'] + diff ||
              dom('body').scrolled() > offSets['on-func'] + diff && dom('body').scrolled() < offSets['off-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#on'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['off-func'] + diff && dom('html').scrolled() < offSets['once-func'] + diff ||
              dom('body').scrolled() > offSets['off-func'] + diff && dom('body').scrolled() < offSets['once-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#off'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['once-func'] + diff && dom('html').scrolled() < offSets['spark-func'] + diff ||
              dom('body').scrolled() > offSets['once-func'] + diff && dom('body').scrolled() < offSets['spark-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#once'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['spark-func'] + diff && dom('html').scrolled() < offSets['click-func'] + diff ||
              dom('body').scrolled() > offSets['spark-func'] + diff && dom('body').scrolled() < offSets['click-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#spark'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['click-func'] + diff && dom('html').scrolled() < offSets['dblClick-func'] + diff ||
              dom('body').scrolled() > offSets['click-func'] + diff && dom('body').scrolled() < offSets['dblClick-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#click'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['dblClick-func'] + diff && dom('html').scrolled() < offSets['blur-func'] + diff ||
              dom('body').scrolled() > offSets['dblClick-func'] + diff && dom('body').scrolled() < offSets['blur-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#dbl'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['blur-func'] + diff && dom('html').scrolled() < offSets['error-func'] + diff ||
              dom('body').scrolled() > offSets['blur-func'] + diff && dom('body').scrolled() < offSets['error-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#blur'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['error-func'] + diff && dom('html').scrolled() < offSets['focus-func'] + diff ||
              dom('body').scrolled() > offSets['error-func'] + diff && dom('body').scrolled() < offSets['focus-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#error'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['focus-func'] + diff && dom('html').scrolled() < offSets['focusIn-func'] + diff ||
              dom('body').scrolled() > offSets['focus-func'] + diff && dom('body').scrolled() < offSets['focusIn-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#focus'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['focusIn-func'] + diff && dom('html').scrolled() < offSets['focusOut-func'] + diff ||
              dom('body').scrolled() > offSets['focusIn-func'] + diff && dom('body').scrolled() < offSets['focusOut-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#focusIn'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['focusOut-func'] + diff && dom('html').scrolled() < offSets['keyUp-func'] + diff ||
              dom('body').scrolled() > offSets['focusOut-func'] + diff && dom('body').scrolled() < offSets['keyUp-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#focusOut'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['keyUp-func'] + diff && dom('html').scrolled() < offSets['keyDown-func'] + diff ||
              dom('body').scrolled() > offSets['keyUp-func'] + diff && dom('body').scrolled() < offSets['keyDown-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#keyUp'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['keyDown-func'] + diff && dom('html').scrolled() < offSets['load-func'] + diff ||
              dom('body').scrolled() > offSets['keyDown-func'] + diff && dom('body').scrolled() < offSets['load-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#keyDown'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['load-func'] + diff && dom('html').scrolled() < offSets['unLoad-func'] + diff ||
              dom('body').scrolled() > offSets['load-func'] + diff && dom('body').scrolled() < offSets['unLoad-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#load'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['unLoad-func'] + diff && dom('html').scrolled() < offSets['mouse-func'] + diff ||
              dom('body').scrolled() > offSets['unLoad-func'] + diff && dom('body').scrolled() < offSets['mouse-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#unLoad'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['mouse-func'] + diff && dom('html').scrolled() < offSets['resize-func'] + diff ||
              dom('body').scrolled() > offSets['mouse-func'] + diff && dom('body').scrolled() < offSets['resize-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#mouse'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['resize-func'] + diff && dom('html').scrolled() < offSets['scroll-func'] + diff ||
              dom('body').scrolled() > offSets['resize-func'] + diff && dom('body').scrolled() < offSets['scroll-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#resize'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['scroll-func'] + diff && dom('html').scrolled() < offSets['select-func'] + diff ||
              dom('body').scrolled() > offSets['scroll-func'] + diff && dom('body').scrolled() < offSets['select-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#scroll'/>
                          .class('hot');
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
              <'#select'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');
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
              break;
        case (dom('html').scrolled() > offSets['xhr-func'] + diff && dom('html').scrolled() < offSets['ajax-func'] + diff ||
              dom('body').scrolled() > offSets['xhr-func'] + diff && dom('body').scrolled() < offSets['ajax-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#xhr'/>
                          .class('hot');
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
              <'#ajax'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');
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
              break;
        case (dom('html').scrolled() > offSets['log-func'] + diff && dom('html').scrolled() < offSets['info-func'] + diff ||
              dom('body').scrolled() > offSets['log-func'] + diff && dom('body').scrolled() < offSets['info-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#log'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['info-func'] + diff && dom('html').scrolled() < offSets['warn-func'] + diff ||
              dom('body').scrolled() > offSets['info-func'] + diff && dom('body').scrolled() < offSets['warn-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#info'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['warn-func'] + diff && dom('html').scrolled() < offSets['err-func'] + diff ||
              dom('body').scrolled() > offSets['warn-func'] + diff && dom('body').scrolled() < offSets['err-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#warn'/>
                          .class('hot');
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
              <'#err'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');
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
              break;
        case (dom('html').scrolled() > offSets['proto-func'] + diff && dom('html').scrolled() < offSets['shifter-func'] + diff ||
              dom('body').scrolled() > offSets['proto-func'] + diff && dom('body').scrolled() < offSets['shifter-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#proto'/>
                          .class('hot');
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
              <'#shifter'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');
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
              break;
        case (dom('html').scrolled() > offSets['element-const'] + diff && dom('html').scrolled() < offSets['dom2-func'] + diff ||
              dom('body').scrolled() > offSets['element-const'] + diff && dom('body').scrolled() < offSets['dom2-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#elemConst'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['dom2-func'] + diff && dom('html').scrolled() < offSets['make2-func'] + diff ||
              dom('body').scrolled() > offSets['dom2-func'] + diff && dom('body').scrolled() < offSets['make2-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#dom2'/>
                          .class('hot');
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
              <'#make2'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');
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
              break;
        case (dom('html').scrolled() > offSets['element-font-ex'] + diff && dom('html').scrolled() < offSets['style-methods'] + diff ||
              dom('body').scrolled() > offSets['element-font-ex'] + diff && dom('body').scrolled() < offSets['style-methods'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#fontExamp'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['style-methods'] + diff && dom('html').scrolled() < offSets['core-func'] + diff ||
              dom('body').scrolled() > offSets['style-methods'] + diff && dom('body').scrolled() < offSets['core-func'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#stylMethods'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['core-func'] + diff && dom('html').scrolled() < offSets['DOM-Elem-Methods'] + diff ||
              dom('body').scrolled() > offSets['core-func'] + diff && dom('body').scrolled() < offSets['DOM-Elem-Methods'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#core'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('html').scrolled() < offSets['event-methods'] + diff ||
              dom('body').scrolled() > offSets['DOM-Elem-Methods'] + diff && dom('body').scrolled() < offSets['event-methods'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#domMethods'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['event-methods'] + diff && dom('html').scrolled() < offSets['Util-Methods'] + diff ||
              dom('body').scrolled() > offSets['event-methods'] + diff && dom('body').scrolled() < offSets['Util-Methods'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#eventMethods'/>
                          .class('hot');
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
              <'#utilMethods'/>
                      .class('hot')
                      .ma()
													.class('hide', '-');
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
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func1'] + diff && dom('html').scrolled() < offSets['elemsyntax-func2'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func1'] + diff && dom('body').scrolled() < offSets['elemsyntax-func2'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func1'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func2'] + diff && dom('html').scrolled() < offSets['elemsyntax-func3'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func2'] + diff && dom('body').scrolled() < offSets['elemsyntax-func3'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func2'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func3'] + diff && dom('html').scrolled() < offSets['elemsyntax-func4'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func3'] + diff && dom('body').scrolled() < offSets['elemsyntax-func4'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func3'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func4'] + diff && dom('html').scrolled() < offSets['elemsyntax-func5'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func4'] + diff && dom('body').scrolled() < offSets['elemsyntax-func5'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func4'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func5'] + diff && dom('html').scrolled() < offSets['elemsyntax-func6'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func5'] + diff && dom('body').scrolled() < offSets['elemsyntax-func6'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func5'/>
                          .class('hot');
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func6'] + diff && dom('html').scrolled() < offSets['append-syntax'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func6'] + diff && dom('body').scrolled() < offSets['append-syntax'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func6'/>
                      .class('hot');
              break;
        case (dom('html').scrolled() > offSets['append-syntax'] + diff && dom('html').scrolled() < offSets['elemsyntax-func7'] + diff ||
              dom('body').scrolled() > offSets['append-syntax'] + diff && dom('body').scrolled() < offSets['elemsyntax-func7'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#appendStax'/>
                      .class('hot');
              break;
        case (dom('html').scrolled() > offSets['elemsyntax-func7'] + diff ||
              dom('body').scrolled() > offSets['elemsyntax-func7'] + diff):
              dom('[class~=hot]')
											.class('hot', '-');
              <'#func7'/>
                      .class('hot');
              break;

        default:
            break;
      }
    });
}



module.exports = {
                  getOffSets: getOffSets,
           sideNavController: sideNavController
}
