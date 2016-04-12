
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
      offSets['off-func']             = el('#off-func').offsetTop;
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
      offSets['err-func']          = el('#err-func').offsetTop;
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

  <html/>
    .scroll(()=>  {
      switch(true) {
        case (<html/>.scrolled > 0 && <html/>.scrolled < offSets['get-started'] ||
              <body/>.scrolled > 0 && <body/>.scrolled < offSets['get-started']):

            break;
        case (<html/>.scrolled > offSets['get-started'] && <html/>.scrolled < offSets['installation'] ||
              <body/>.scrolled > offSets['get-started'] && <body/>.scrolled < offSets['installation']):

            break;
        case (<html/>.scrolled > offSets['installation'] && <html/>.scrolled < offSets['usage'] ||
              <body/>.scrolled > offSets['installation'] && <body/>.scrolled < offSets['usage']):

            break;
        case (<html/>.scrolled > offSets['usage'] && <html/>.scrolled < offSets['interpreter-install'] ||
              <body/>.scrolled > offSets['usage'] && <body/>.scrolled < offSets['interpreter-install']):

            break;
        case (<html/>.scrolled > offSets['interpreter-install'] && <html/>.scrolled < offSets['imports'] ||
              <body/>.scrolled > offSets['interpreter-install'] && <body/>.scrolled < offSets['imports']):

            break;
        case (<html/>.scrolled > offSets['imports'] && <html/>.scrolled < offSets['DOM'] ||
              <body/>.scrolled > offSets['imports'] && <body/>.scrolled < offSets['DOM']):

            break;
        case (<html/>.scrolled > offSets['DOM'] && <html/>.scrolled < offSets['el-func'] ||
              <body/>.scrolled > offSets['DOM'] && <body/>.scrolled < offSets['el-func']):

            break;
        case (<html/>.scrolled > offSets['el-func'] && <html/>.scrolled < offSets['dom-func'] ||
              <body/>.scrolled > offSets['el-func'] && <body/>.scrolled < offSets['dom-func']):

            break;
        case (<html/>.scrolled > offSets['dom-func'] && <html/>.scrolled < offSets['__-func'] ||
              <body/>.scrolled > offSets['dom-func'] && <body/>.scrolled < offSets['__-func']):

            break;
        case (<html/>.scrolled > offSets['__-func'] && <html/>.scrolled < offSets['make-func'] ||
              <body/>.scrolled > offSets['__-func'] && <body/>.scrolled < offSets['make-func']):

            break;
        case (<html/>.scrolled > offSets['make-func'] && <html/>.scrolled < offSets['put-func'] ||
              <body/>.scrolled > offSets['make-func'] && <body/>.scrolled < offSets['put-func']):

            break;
        case (<html/>.scrolled > offSets['put-func'] && <html/>.scrolled < offSets['x-func'] ||
              <body/>.scrolled > offSets['put-func'] && <body/>.scrolled < offSets['x-func']):

            break;
        case (<html/>.scrolled > offSets['x-func'] && <html/>.scrolled < offSets['fore-func'] ||
              <body/>.scrolled > offSets['x-func'] && <body/>.scrolled < offSets['fore-func']):

            break;
        case (<html/>.scrolled > offSets['fore-func'] && <html/>.scrolled < offSets['aft-func'] ||
              <body/>.scrolled > offSets['fore-func'] && <body/>.scrolled < offSets['aft-func']):

            break;
        case (<html/>.scrolled > offSets['aft-func'] && <html/>.scrolled < offSets['show-func'] ||
              <body/>.scrolled > offSets['aft-func'] && <body/>.scrolled < offSets['show-func']):

            break;
        case (<html/>.scrolled > offSets['show-func'] && <html/>.scrolled < offSets['hide-func'] ||
              <body/>.scrolled > offSets['show-func'] && <body/>.scrolled < offSets['hide-func']):

            break;
        case (<html/>.scrolled > offSets['hide-func'] && <html/>.scrolled < offSets['size-func'] ||
              <body/>.scrolled > offSets['hide-func'] && <body/>.scrolled < offSets['size-func']):

            break;
        case (<html/>.scrolled > offSets['size-func'] && <html/>.scrolled < offSets['event-handle'] ||
              <body/>.scrolled > offSets['size-func'] && <body/>.scrolled < offSets['event-handle']):

            break;
        case (<html/>.scrolled > offSets['event-handle'] && <html/>.scrolled < offSets['go-func'] ||
              <body/>.scrolled > offSets['event-handle'] && <body/>.scrolled < offSets['go-func']):

            break;
        case (<html/>.scrolled > offSets['go-func'] && <html/>.scrolled < offSets['on-func'] ||
              <body/>.scrolled > offSets['go-func'] && <body/>.scrolled < offSets['on-func']):

            break;
        case (<html/>.scrolled > offSets['on-func'] && <html/>.scrolled < offSets['off-func'] ||
              <body/>.scrolled > offSets['on-func'] && <body/>.scrolled < offSets['off-func']):

            break;
        case (<html/>.scrolled > offSets['off-func'] && <html/>.scrolled < offSets['once-func'] ||
              <body/>.scrolled > offSets['off-func'] && <body/>.scrolled < offSets['once-func']):

            break;
        case (<html/>.scrolled > offSets['once-func'] && <html/>.scrolled < offSets['spark-func'] ||
              <body/>.scrolled > offSets['once-func'] && <body/>.scrolled < offSets['spark-func']):

            break;
        case (<html/>.scrolled > offSets['spark-func'] && <html/>.scrolled < offSets['click-func'] ||
              <body/>.scrolled > offSets['spark-func'] && <body/>.scrolled < offSets['click-func']):

            break;
        case (<html/>.scrolled > offSets['click-func'] && <html/>.scrolled < offSets['dblClick-func'] ||
              <body/>.scrolled > offSets['click-func'] && <body/>.scrolled < offSets['dblClick-func']):

            break;
        case (<html/>.scrolled > offSets['dblClick-func'] && <html/>.scrolled < offSets['blur-func'] ||
              <body/>.scrolled > offSets['dblClick-func'] && <body/>.scrolled < offSets['blur-func']):

            break;
        case (<html/>.scrolled > offSets['blur-func'] && <html/>.scrolled < offSets['error-func'] ||
              <body/>.scrolled > offSets['blur-func'] && <body/>.scrolled < offSets['error-func']):

            break;
        case (<html/>.scrolled > offSets['error-func'] && <html/>.scrolled < offSets['focus-func'] ||
              <body/>.scrolled > offSets['error-func'] && <body/>.scrolled < offSets['focus-func']):

            break;
        case (<html/>.scrolled > offSets['focus-func'] && <html/>.scrolled < offSets['focusIn-func'] ||
              <body/>.scrolled > offSets['focus-func'] && <body/>.scrolled < offSets['focusIn-func']):

            break;
        case (<html/>.scrolled > offSets['focusIn-func'] && <html/>.scrolled < offSets['focusOut-func'] ||
              <body/>.scrolled > offSets['focusIn-func'] && <body/>.scrolled < offSets['focusOut-func']):

            break;
        case (<html/>.scrolled > offSets['focusOut-func'] && <html/>.scrolled < offSets['keyUp-func'] ||
              <body/>.scrolled > offSets['focusOut-func'] && <body/>.scrolled < offSets['keyUp-func']):

            break;
        case (<html/>.scrolled > offSets['keyUp-func'] && <html/>.scrolled < offSets['keyDown-func'] ||
              <body/>.scrolled > offSets['keyUp-func'] && <body/>.scrolled < offSets['keyDown-func']):

            break;
        case (<html/>.scrolled > offSets['keyDown-func'] && <html/>.scrolled < offSets['load-func'] ||
              <body/>.scrolled > offSets['keyDown-func'] && <body/>.scrolled < offSets['load-func']):

            break;
        case (<html/>.scrolled > offSets['load-func'] && <html/>.scrolled < offSets['unLoad-func'] ||
              <body/>.scrolled > offSets['load-func'] && <body/>.scrolled < offSets['unLoad-func']):

            break;
        case (<html/>.scrolled > offSets['unLoad-func'] && <html/>.scrolled < offSets['mouse-func'] ||
              <body/>.scrolled > offSets['unLoad-func'] && <body/>.scrolled < offSets['mouse-func']):

            break;
        case (<html/>.scrolled > offSets['mouse-func'] && <html/>.scrolled < offSets['resize-func'] ||
              <body/>.scrolled > offSets['mouse-func'] && <body/>.scrolled < offSets['resize-func']):

            break;
        case (<html/>.scrolled > offSets['resize-func'] && <html/>.scrolled < offSets['scroll-func'] ||
              <body/>.scrolled > offSets['resize-func'] && <body/>.scrolled < offSets['scroll-func']):

            break;
        case (<html/>.scrolled > offSets['scroll-func'] && <html/>.scrolled < offSets['select-func'] ||
              <body/>.scrolled > offSets['scroll-func'] && <body/>.scrolled < offSets['select-func']):

            break;
        case (<html/>.scrolled > offSets['select-func'] && <html/>.scrolled < offSets['http'] ||
              <body/>.scrolled > offSets['select-func'] && <body/>.scrolled < offSets['http']):

            break;
        case (<html/>.scrolled > offSets['http'] && <html/>.scrolled < offSets['xhr-func'] ||
              <body/>.scrolled > offSets['http'] && <body/>.scrolled < offSets['xhr-func']):

            break;
        case (<html/>.scrolled > offSets['xhr-func'] && <html/>.scrolled < offSets['ajax-func'] ||
              <body/>.scrolled > offSets['xhr-func'] && <body/>.scrolled < offSets['ajax-func']):

            break;
        case (<html/>.scrolled > offSets['ajax-func'] && <html/>.scrolled < offSets['loggers'] ||
              <body/>.scrolled > offSets['ajax-func'] && <body/>.scrolled < offSets['loggers']):

            break;
        case (<html/>.scrolled > offSets['loggers'] && <html/>.scrolled < offSets['log-func'] ||
              <body/>.scrolled > offSets['loggers'] && <body/>.scrolled < offSets['log-func']):

            break;
        case (<html/>.scrolled > offSets['log-func'] && <html/>.scrolled < offSets['info-func'] ||
              <body/>.scrolled > offSets['log-func'] && <body/>.scrolled < offSets['info-func']):

            break;
        case (<html/>.scrolled > offSets['info-func'] && <html/>.scrolled < offSets['warn-func'] ||
              <body/>.scrolled > offSets['info-func'] && <body/>.scrolled < offSets['warn-func']):

            break;
        case (<html/>.scrolled > offSets['warn-func'] && <html/>.scrolled < offSets['err-func'] ||
              <body/>.scrolled > offSets['warn-func'] && <body/>.scrolled < offSets['err-func']):

            break;
        case (<html/>.scrolled > offSets['err-func'] && <html/>.scrolled < offSets['utils'] ||
              <body/>.scrolled > offSets['err-func'] && <body/>.scrolled < offSets[]):

            break;
        case (<html/>.scrolled > offSets['utils'] && <html/>.scrolled < offSets['proto-func'] ||
              <body/>.scrolled > offSets['utils'] && <body/>.scrolled < offSets['proto-func']):

            break;
        case (<html/>.scrolled > offSets['proto-func'] && <html/>.scrolled < offSets['shifter-func'] ||
              <body/>.scrolled > offSets['proto-func'] && <body/>.scrolled < offSets['shifter-func']):

            break;
        case (<html/>.scrolled > offSets['shifter-func'] && <html/>.scrolled < offSets['elem-obj'] ||
              <body/>.scrolled > offSets['shifter-func'] && <body/>.scrolled < offSets['elem-obj']):

            break;
        case (<html/>.scrolled > offSets['elem-obj'] && <html/>.scrolled < offSets['element-const'] ||
              <body/>.scrolled > offSets['elem-obj'] && <body/>.scrolled < offSets['element-const']):

            break;
        case (<html/>.scrolled > offSets['element-const'] && <html/>.scrolled < offSets['dom2-func'] ||
              <body/>.scrolled > offSets['element-const'] && <body/>.scrolled < offSets['dom2-func']):

            break;
        case (<html/>.scrolled > offSets['dom2-func'] && <html/>.scrolled < offSets['make2-func'] ||
              <body/>.scrolled > offSets['dom2-func'] && <body/>.scrolled < offSets['make2-func']):

            break;
        case (<html/>.scrolled > offSets['make2-func'] && <html/>.scrolled < offSets['elem-obj-methods'] ||
              <body/>.scrolled > offSets['make2-func'] && <body/>.scrolled < offSets['elem-obj-methods']):

            break;
        case (<html/>.scrolled > offSets['elem-obj-methods'] && <html/>.scrolled < offSets['element-font-ex'] ||
              <body/>.scrolled > offSets['elem-obj-methods'] && <body/>.scrolled < offSets['element-font-ex']):

            break;
        case (<html/>.scrolled > offSets['element-font-ex'] && <html/>.scrolled < offSets['exs'] ||
              <body/>.scrolled > offSets['element-font-ex'] && <body/>.scrolled < offSets['exs']):

            break;
        case (<html/>.scrolled > offSets['exs'] && <html/>.scrolled < offSets['style-methods'] ||
              <body/>.scrolled > offSets['exs'] && <body/>.scrolled < offSets['style-methods']):

            break;
        case (<html/>.scrolled > offSets['style-methods'] && <html/>.scrolled < offSets['core-func'] ||
              <body/>.scrolled > offSets['style-methods'] && <body/>.scrolled < offSets['core-func']):

            break;
        case (<html/>.scrolled > offSets['core-func'] && <html/>.scrolled < offSets['DOM-Elem-Methods'] ||
              <body/>.scrolled > offSets['core-func'] && <body/>.scrolled < offSets['DOM-Elem-Methods']):

            break;
        case (<html/>.scrolled > offSets['DOM-Elem-Methods'] && <html/>.scrolled < offSets['event-methods'] ||
              <body/>.scrolled > offSets['DOM-Elem-Methods'] && <body/>.scrolled < offSets['event-methods']):

            break;
        case (<html/>.scrolled > offSets['event-methods'] && <html/>.scrolled < offSets['Util-methods'] ||
              <body/>.scrolled > offSets['event-methods'] && <body/>.scrolled < offSets['Util-methods']):

            break;
        case (<html/>.scrolled > offSets['Util-methods'] && <html/>.scrolled < offSets['elements-syntax'] ||
              <body/>.scrolled > offSets['Util-methods'] && <body/>.scrolled < offSets['elements-syntax']):

            break;
        case (<html/>.scrolled > offSets['elements-syntax'] && <html/>.scrolled < offSets['elemsyntax-func1'] ||
              <body/>.scrolled > offSets['elements-syntax'] && <body/>.scrolled < offSets['elemsyntax-func1']):

            break;
        case (<html/>.scrolled > offSets['elemsyntax-func1'] && <html/>.scrolled < offSets['elemsyntax-func2'] ||
              <body/>.scrolled > offSets['elemsyntax-func1'] && <body/>.scrolled < offSets['elemsyntax-func2']):

            break;
        case (<html/>.scrolled > offSets['elemsyntax-func2'] && <html/>.scrolled < offSets['elemsyntax-func3'] ||
              <body/>.scrolled > offSets['elemsyntax-func2'] && <body/>.scrolled < offSets['elemsyntax-func3']):

            break;
        case (<html/>.scrolled > offSets['elemsyntax-func3'] && <html/>.scrolled < offSets['elemsyntax-func4'] ||
              <body/>.scrolled > offSets['elemsyntax-func3'] && <body/>.scrolled < offSets['elemsyntax-func4']):

            break;
        case (<html/>.scrolled > offSets['elemsyntax-func4'] && <html/>.scrolled < offSets['elemsyntax-func5'] ||
              <body/>.scrolled > offSets['elemsyntax-func4'] && <body/>.scrolled < offSets['elemsyntax-func5']):

            break;
        case (<html/>.scrolled > offSets['elemsyntax-func5'] && <html/>.scrolled < offSets['elemsyntax-func6'] ||
              <body/>.scrolled > offSets['elemsyntax-func5'] && <body/>.scrolled < offSets['elemsyntax-func6']):

            break;
        case (<html/>.scrolled > offSets['elemsyntax-func6'] && <html/>.scrolled < offSets['append-syntax'] ||
              <body/>.scrolled > offSets['elemsyntax-func6'] && <body/>.scrolled < offSets['append-syntax']):

            break;
        case (<html/>.scrolled > offSets['append-syntax'] && <html/>.scrolled < offSets['elemsyntax-func7'] ||
              <body/>.scrolled > offSets['append-syntax'] && <body/>.scrolled < offSets['elemsyntax-func7']):

            break;
        case (<html/>.scrolled > offSets['elemsyntax-func7'] ||
              <body/>.scrolled > offSets['elemsyntax-func7']):

            break;

        default:
            log(<body/>.scrolled, 'red');
      }
    });
}


module.exports = {
                  getOffSets: getOffSets,
           sideNavController: sideNavController
                                         }
