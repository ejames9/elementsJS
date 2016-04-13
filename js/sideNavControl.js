
import { el } from 'elementsJS';



function getOffSets() {
  var offSets = {};
      offSets['get-started']         = el('#get-started').offsetTop;
      offSets['installation']        = el('#installation').offsetTop;
      offSets['usage']               = el('#usage').offsetTop;
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
  const offSets = getOffSets();
  console.log(document.querySelector('[class="active"]'));

  <html/>
    .scroll(()=>  {
      switch(true) {
        case (dom('html').scrolled > 0 && dom('html').scrolled < offSets['get-started'] ||
              dom('body').scrolled > 0 && dom('body').scrolled < offSets['get-started']):
            dom('[class=active]')
                        .xClass();
            <'#getStart'/>
                        .class('active');
            break;
        case (dom('html').scrolled > offSets['get-started'] && dom('html').scrolled < offSets['installation'] ||
              dom('body').scrolled > offSets['get-started'] && dom('body').scrolled < offSets['installation']):
            dom('[class=active]')
                        .xClass();
            <'#inst'/>
                        .class('active');

            break;
        case (dom('html').scrolled > offSets['installation'] && dom('html').scrolled < offSets['usage'] ||
              dom('body').scrolled > offSets['installation'] && dom('body').scrolled < offSets['usage']):
            dom('[class=active]')
                        .xClass();
            <'#use'/>
                        .class('active');

            break;
        case (dom('html').scrolled > offSets['usage'] && dom('html').scrolled < offSets['interpreter-install'] ||
              dom('body').scrolled > offSets['usage'] && dom('body').scrolled < offSets['interpreter-install']):
            dom('[class=active]')
                        .xClass();
            <'#interpInstall'/>
                        .class('active');

            break;
        case (dom('html').scrolled > offSets['interpreter-install'] && dom('html').scrolled < offSets['imports'] ||
              dom('body').scrolled > offSets['interpreter-install'] && dom('body').scrolled < offSets['imports']):
            dom('[class=active]')
                        .xClass();
            <'#imps'/>
                        .class('active');

            break;
        case (dom('html').scrolled > offSets['imports'] && dom('html').scrolled < offSets['DOM'] ||
              dom('body').scrolled > offSets['imports'] && dom('body').scrolled < offSets['DOM']):
            dom('[class=active]')
                        .xClass();
            <'#domManip'/>
                        .class('active');

            break;
        case (dom('html').scrolled > offSets['DOM'] && dom('html').scrolled < offSets['el-func'] ||
              dom('body').scrolled > offSets['DOM'] && dom('body').scrolled < offSets['el-func']):
            dom('[class=active]')
                        .xClass();
            <'#el'/>
                        .class('active');

            break;
        case (dom('html').scrolled > offSets['el-func'] && dom('html').scrolled < offSets['dom-func'] ||
              dom('body').scrolled > offSets['el-func'] && dom('body').scrolled < offSets['dom-func']):
            dom('[class=active]')
                        .xClass();
            <'#dom'/>
                        .class('active');

            break;
        case (dom('html').scrolled > offSets['dom-func'] && dom('html').scrolled < offSets['__-func'] ||
              dom('body').scrolled > offSets['dom-func'] && dom('body').scrolled < offSets['__-func']):
            dom('[class=active]')
                        .xClass();
            <'#__'/>
                        .class('active');

            break;
        case (dom('html').scrolled > offSets['__-func'] && dom('html').scrolled < offSets['make-func'] ||
              dom('body').scrolled > offSets['__-func'] && dom('body').scrolled < offSets['make-func']):
            dom('[class=active]')
                        .xClass();
            <'#make'/>
                        .class('active');

            break;
        case (dom('html').scrolled > offSets['make-func'] && dom('html').scrolled < offSets['put-func'] ||
              dom('body').scrolled > offSets['make-func'] && dom('body').scrolled < offSets['put-func']):

            break;
        case (dom('html').scrolled > offSets['put-func'] && dom('html').scrolled < offSets['x-func'] ||
              dom('body').scrolled > offSets['put-func'] && dom('body').scrolled < offSets['x-func']):

            break;
        case (dom('html').scrolled > offSets['x-func'] && dom('html').scrolled < offSets['fore-func'] ||
              dom('body').scrolled > offSets['x-func'] && dom('body').scrolled < offSets['fore-func']):

            break;
        case (dom('html').scrolled > offSets['fore-func'] && dom('html').scrolled < offSets['aft-func'] ||
              dom('body').scrolled > offSets['fore-func'] && dom('body').scrolled < offSets['aft-func']):

            break;
        case (dom('html').scrolled > offSets['aft-func'] && dom('html').scrolled < offSets['show-func'] ||
              dom('body').scrolled > offSets['aft-func'] && dom('body').scrolled < offSets['show-func']):

            break;
        case (dom('html').scrolled > offSets['show-func'] && dom('html').scrolled < offSets['hide-func'] ||
              dom('body').scrolled > offSets['show-func'] && dom('body').scrolled < offSets['hide-func']):

            break;
        case (dom('html').scrolled > offSets['hide-func'] && dom('html').scrolled < offSets['size-func'] ||
              dom('body').scrolled > offSets['hide-func'] && dom('body').scrolled < offSets['size-func']):

            break;
        case (dom('html').scrolled > offSets['size-func'] && dom('html').scrolled < offSets['event-handle'] ||
              dom('body').scrolled > offSets['size-func'] && dom('body').scrolled < offSets['event-handle']):

            break;
        case (dom('html').scrolled > offSets['event-handle'] && dom('html').scrolled < offSets['go-func'] ||
              dom('body').scrolled > offSets['event-handle'] && dom('body').scrolled < offSets['go-func']):

            break;
        case (dom('html').scrolled > offSets['go-func'] && dom('html').scrolled < offSets['on-func'] ||
              dom('body').scrolled > offSets['go-func'] && dom('body').scrolled < offSets['on-func']):

            break;
        case (dom('html').scrolled > offSets['on-func'] && dom('html').scrolled < offSets['off-func'] ||
              dom('body').scrolled > offSets['on-func'] && dom('body').scrolled < offSets['off-func']):

            break;
        case (dom('html').scrolled > offSets['off-func'] && dom('html').scrolled < offSets['once-func'] ||
              dom('body').scrolled > offSets['off-func'] && dom('body').scrolled < offSets['once-func']):

            break;
        case (dom('html').scrolled > offSets['once-func'] && dom('html').scrolled < offSets['spark-func'] ||
              dom('body').scrolled > offSets['once-func'] && dom('body').scrolled < offSets['spark-func']):

            break;
        case (dom('html').scrolled > offSets['spark-func'] && dom('html').scrolled < offSets['click-func'] ||
              dom('body').scrolled > offSets['spark-func'] && dom('body').scrolled < offSets['click-func']):

            break;
        case (dom('html').scrolled > offSets['click-func'] && dom('html').scrolled < offSets['dblClick-func'] ||
              dom('body').scrolled > offSets['click-func'] && dom('body').scrolled < offSets['dblClick-func']):

            break;
        case (dom('html').scrolled > offSets['dblClick-func'] && dom('html').scrolled < offSets['blur-func'] ||
              dom('body').scrolled > offSets['dblClick-func'] && dom('body').scrolled < offSets['blur-func']):

            break;
        case (dom('html').scrolled > offSets['blur-func'] && dom('html').scrolled < offSets['error-func'] ||
              dom('body').scrolled > offSets['blur-func'] && dom('body').scrolled < offSets['error-func']):

            break;
        case (dom('html').scrolled > offSets['error-func'] && dom('html').scrolled < offSets['focus-func'] ||
              dom('body').scrolled > offSets['error-func'] && dom('body').scrolled < offSets['focus-func']):

            break;
        case (dom('html').scrolled > offSets['focus-func'] && dom('html').scrolled < offSets['focusIn-func'] ||
              dom('body').scrolled > offSets['focus-func'] && dom('body').scrolled < offSets['focusIn-func']):

            break;
        case (dom('html').scrolled > offSets['focusIn-func'] && dom('html').scrolled < offSets['focusOut-func'] ||
              dom('body').scrolled > offSets['focusIn-func'] && dom('body').scrolled < offSets['focusOut-func']):

            break;
        case (dom('html').scrolled > offSets['focusOut-func'] && dom('html').scrolled < offSets['keyUp-func'] ||
              dom('body').scrolled > offSets['focusOut-func'] && dom('body').scrolled < offSets['keyUp-func']):

            break;
        case (dom('html').scrolled > offSets['keyUp-func'] && dom('html').scrolled < offSets['keyDown-func'] ||
              dom('body').scrolled > offSets['keyUp-func'] && dom('body').scrolled < offSets['keyDown-func']):

            break;
        case (dom('html').scrolled > offSets['keyDown-func'] && dom('html').scrolled < offSets['load-func'] ||
              dom('body').scrolled > offSets['keyDown-func'] && dom('body').scrolled < offSets['load-func']):

            break;
        case (dom('html').scrolled > offSets['load-func'] && dom('html').scrolled < offSets['unLoad-func'] ||
              dom('body').scrolled > offSets['load-func'] && dom('body').scrolled < offSets['unLoad-func']):

            break;
        case (dom('html').scrolled > offSets['unLoad-func'] && dom('html').scrolled < offSets['mouse-func'] ||
              dom('body').scrolled > offSets['unLoad-func'] && dom('body').scrolled < offSets['mouse-func']):

            break;
        case (dom('html').scrolled > offSets['mouse-func'] && dom('html').scrolled < offSets['resize-func'] ||
              dom('body').scrolled > offSets['mouse-func'] && dom('body').scrolled < offSets['resize-func']):

            break;
        case (dom('html').scrolled > offSets['resize-func'] && dom('html').scrolled < offSets['scroll-func'] ||
              dom('body').scrolled > offSets['resize-func'] && dom('body').scrolled < offSets['scroll-func']):

            break;
        case (dom('html').scrolled > offSets['scroll-func'] && dom('html').scrolled < offSets['select-func'] ||
              dom('body').scrolled > offSets['scroll-func'] && dom('body').scrolled < offSets['select-func']):

            break;
        case (dom('html').scrolled > offSets['select-func'] && dom('html').scrolled < offSets['http'] ||
              dom('body').scrolled > offSets['select-func'] && dom('body').scrolled < offSets['http']):

            break;
        case (dom('html').scrolled > offSets['http'] && dom('html').scrolled < offSets['xhr-func'] ||
              dom('body').scrolled > offSets['http'] && dom('body').scrolled < offSets['xhr-func']):

            break;
        case (dom('html').scrolled > offSets['xhr-func'] && dom('html').scrolled < offSets['ajax-func'] ||
              dom('body').scrolled > offSets['xhr-func'] && dom('body').scrolled < offSets['ajax-func']):

            break;
        case (dom('html').scrolled > offSets['ajax-func'] && dom('html').scrolled < offSets['loggers'] ||
              dom('body').scrolled > offSets['ajax-func'] && dom('body').scrolled < offSets['loggers']):

            break;
        case (dom('html').scrolled > offSets['loggers'] && dom('html').scrolled < offSets['log-func'] ||
              dom('body').scrolled > offSets['loggers'] && dom('body').scrolled < offSets['log-func']):

            break;
        case (dom('html').scrolled > offSets['log-func'] && dom('html').scrolled < offSets['info-func'] ||
              dom('body').scrolled > offSets['log-func'] && dom('body').scrolled < offSets['info-func']):

            break;
        case (dom('html').scrolled > offSets['info-func'] && dom('html').scrolled < offSets['warn-func'] ||
              dom('body').scrolled > offSets['info-func'] && dom('body').scrolled < offSets['warn-func']):

            break;
        case (dom('html').scrolled > offSets['warn-func'] && dom('html').scrolled < offSets['err-func'] ||
              dom('body').scrolled > offSets['warn-func'] && dom('body').scrolled < offSets['err-func']):

            break;
        case (dom('html').scrolled > offSets['err-func'] && dom('html').scrolled < offSets['utils'] ||
              dom('body').scrolled > offSets['err-func'] && dom('body').scrolled < offSets['utils']):

            break;
        case (dom('html').scrolled > offSets['utils'] && dom('html').scrolled < offSets['proto-func'] ||
              dom('body').scrolled > offSets['utils'] && dom('body').scrolled < offSets['proto-func']):

            break;
        case (dom('html').scrolled > offSets['proto-func'] && dom('html').scrolled < offSets['shifter-func'] ||
              dom('body').scrolled > offSets['proto-func'] && dom('body').scrolled < offSets['shifter-func']):

            break;
        case (dom('html').scrolled > offSets['shifter-func'] && dom('html').scrolled < offSets['elem-obj'] ||
              dom('body').scrolled > offSets['shifter-func'] && dom('body').scrolled < offSets['elem-obj']):

            break;
        case (dom('html').scrolled > offSets['elem-obj'] && dom('html').scrolled < offSets['element-const'] ||
              dom('body').scrolled > offSets['elem-obj'] && dom('body').scrolled < offSets['element-const']):

            break;
        case (dom('html').scrolled > offSets['element-const'] && dom('html').scrolled < offSets['dom2-func'] ||
              dom('body').scrolled > offSets['element-const'] && dom('body').scrolled < offSets['dom2-func']):

            break;
        case (dom('html').scrolled > offSets['dom2-func'] && dom('html').scrolled < offSets['make2-func'] ||
              dom('body').scrolled > offSets['dom2-func'] && dom('body').scrolled < offSets['make2-func']):

            break;
        case (dom('html').scrolled > offSets['make2-func'] && dom('html').scrolled < offSets['elem-obj-methods'] ||
              dom('body').scrolled > offSets['make2-func'] && dom('body').scrolled < offSets['elem-obj-methods']):

            break;
        case (dom('html').scrolled > offSets['elem-obj-methods'] && dom('html').scrolled < offSets['element-font-ex'] ||
              dom('body').scrolled > offSets['elem-obj-methods'] && dom('body').scrolled < offSets['element-font-ex']):

            break;
        case (dom('html').scrolled > offSets['element-font-ex'] && dom('html').scrolled < offSets['exs'] ||
              dom('body').scrolled > offSets['element-font-ex'] && dom('body').scrolled < offSets['exs']):

            break;
        case (dom('html').scrolled > offSets['exs'] && dom('html').scrolled < offSets['style-methods'] ||
              dom('body').scrolled > offSets['exs'] && dom('body').scrolled < offSets['style-methods']):

            break;
        case (dom('html').scrolled > offSets['style-methods'] && dom('html').scrolled < offSets['core-func'] ||
              dom('body').scrolled > offSets['style-methods'] && dom('body').scrolled < offSets['core-func']):

            break;
        case (dom('html').scrolled > offSets['core-func'] && dom('html').scrolled < offSets['DOM-Elem-Methods'] ||
              dom('body').scrolled > offSets['core-func'] && dom('body').scrolled < offSets['DOM-Elem-Methods']):

            break;
        case (dom('html').scrolled > offSets['DOM-Elem-Methods'] && dom('html').scrolled < offSets['event-methods'] ||
              dom('body').scrolled > offSets['DOM-Elem-Methods'] && dom('body').scrolled < offSets['event-methods']):

            break;
        case (dom('html').scrolled > offSets['event-methods'] && dom('html').scrolled < offSets['Util-methods'] ||
              dom('body').scrolled > offSets['event-methods'] && dom('body').scrolled < offSets['Util-methods']):

            break;
        case (dom('html').scrolled > offSets['Util-methods'] && dom('html').scrolled < offSets['elements-syntax'] ||
              dom('body').scrolled > offSets['Util-methods'] && dom('body').scrolled < offSets['elements-syntax']):

            break;
        case (dom('html').scrolled > offSets['elements-syntax'] && dom('html').scrolled < offSets['elemsyntax-func1'] ||
              dom('body').scrolled > offSets['elements-syntax'] && dom('body').scrolled < offSets['elemsyntax-func1']):

            break;
        case (dom('html').scrolled > offSets['elemsyntax-func1'] && dom('html').scrolled < offSets['elemsyntax-func2'] ||
              dom('body').scrolled > offSets['elemsyntax-func1'] && dom('body').scrolled < offSets['elemsyntax-func2']):

            break;
        case (dom('html').scrolled > offSets['elemsyntax-func2'] && dom('html').scrolled < offSets['elemsyntax-func3'] ||
              dom('body').scrolled > offSets['elemsyntax-func2'] && dom('body').scrolled < offSets['elemsyntax-func3']):

            break;
        case (dom('html').scrolled > offSets['elemsyntax-func3'] && dom('html').scrolled < offSets['elemsyntax-func4'] ||
              dom('body').scrolled > offSets['elemsyntax-func3'] && dom('body').scrolled < offSets['elemsyntax-func4']):

            break;
        case (dom('html').scrolled > offSets['elemsyntax-func4'] && dom('html').scrolled < offSets['elemsyntax-func5'] ||
              dom('body').scrolled > offSets['elemsyntax-func4'] && dom('body').scrolled < offSets['elemsyntax-func5']):

            break;
        case (dom('html').scrolled > offSets['elemsyntax-func5'] && dom('html').scrolled < offSets['elemsyntax-func6'] ||
              dom('body').scrolled > offSets['elemsyntax-func5'] && dom('body').scrolled < offSets['elemsyntax-func6']):

            break;
        case (dom('html').scrolled > offSets['elemsyntax-func6'] && dom('html').scrolled < offSets['append-syntax'] ||
              dom('body').scrolled > offSets['elemsyntax-func6'] && dom('body').scrolled < offSets['append-syntax']):

            break;
        case (dom('html').scrolled > offSets['append-syntax'] && dom('html').scrolled < offSets['elemsyntax-func7'] ||
              dom('body').scrolled > offSets['append-syntax'] && dom('body').scrolled < offSets['elemsyntax-func7']):

            break;
        case (dom('html').scrolled > offSets['elemsyntax-func7'] ||
              dom('body').scrolled > offSets['elemsyntax-func7']):

            break;

        default:
            log(dom('body').scrolled, 'red');
      }
    });
}


module.exports = {
                  getOffSets: getOffSets,
           sideNavController: sideNavController
                                         }
