/**
 *  Core of Security library
 */
(function(window, undefined) {
  let document = window.document,
    emptyFn = function() {},
    debug = emptyFn,
    debugError = debug,
    args = {};

  // Set debug function
  /* jshint ignore:start */
  if (args.debug === 1) {
    debug = function() {
      console.log.apply(console, arguments);
    };

    debugError = function() {
      console.log.apply(console, arguments);
    };
  }
  /* jshint ignore:end */

  /**
   * Global PX object
   * @type {Object}
   */
  window.PX = {
    modules: {},
    define: defineModule,
    module: initModule,
    processWidgets: processWidgets,
    debug: debug,
    debugError: debugError,
    m: m,
    w: w,
    global: {},
    events: $({}),
    settings: {},
    addGlobal: function(key, value) {
      this.global[key] = value;
    }
  };

  /**
   * Defines module and gets params to local module storage
   * @param id
   * @param callback
   */
  function defineModule(id, callback) {
    if (PX.modules[id] === undefined) {
      let module = {
        inited: false,
        requires: []
      };
      module = $.extend(module, callback(window, PX, $, undefined));
      PX.modules[id] = module;
      //debug('module ' + id + ' is loaded');
    }
  }

  /**
   * Gets all .widget elements and init widgets
   * @param el
   */
  function processWidgets(el) {
    let $el = $(el);
    let $widgets = $el.find('.widget-px');
    if ($el.hasClass('widget-px')) {
      $widgets = $widgets.add($el);
    }

    $widgets.each(function() {
      let widgetId = this.getAttribute('data-widget');
      let params, paramsRaw;

      if (widgetId) {
        paramsRaw = this.getAttribute('data-params');
        params = (paramsRaw) ? parseQueryString(paramsRaw) : {} ;
        PX.module(widgetId, params, this, false);
      } else if (this.onclick) {
        params = this.onclick();
        params.data = (params.data === undefined) ? {} : params.data;
        this.onclick = null;
        if (params.id) {
          PX.module(params.id, params.data, this, false);
        }
      }
    });
  }

  /**
   * Initialize module
   *
   * @param id
   * @param data
   * @param self
   * @param cache
   * @return {*}
   */
  function initModule(id, data, self, cache) {
    cache = (cache === undefined) ? true : cache;
    let module = PX.modules[id];
    if (module !== undefined) {
      if (!module.inited || !cache) {
        if (module.requires !== undefined && $.isArray(module.requires) && module.requires.length) {
          debug('module ' + id + ' requires ' + module.requires.join(', '));
          for (let i in module.requires) {
            initModule(module.requires[i]);
          }
        }

        // exec init if there is data, self and init method
        if (data !== undefined && self !== undefined && module.init !== undefined && $.isFunction(module.init)) {
          module.init(data, $(self));
          //debug('module ' + id + ' is inited');
        }

        module.inited = true;
        PX.modules[id] = module;
      }

      if (cache) {
        PX.modules[id] = module;
        return PX.modules[id];
      } else {
        return module;
      }

    } else {
      let msg = 'module ' + id + ' is not defined';
      debugError(msg);
      throw msg;
    }
  }

  /**
   * Shortcut for widgets.*
   *
   * @param id
   * @return {*}
   */
  function w(id) {
    return initModule('widgets.' + id);
  }

  /**
   * Shortcut for modules.*
   *
   * @param id
   * @return {*}
   */
  function m(id) {
    return initModule('modules.' + id);
  }

  /**
   * Parses query string
   * @param qs
   * @return {Object}
   */
  function parseQueryString(qs) {
    'use strict';
    let vars = qs.split('&'),
      c = vars.length,
      res = {},
      i;

    for (i = 0; i < c; i++) {
      let pair = vars[i].split('=');
      res[pair[0]] = pair[1];
    }
    return res;
  }

  $(function() {
    processWidgets(document);
  });

  window.onerror = function myErrorHandler(errorMsg, errorUrl, errorLine, errorChar, errorType) {

    if ((errorUrl !== undefined) && (errorUrl !== '')) {
      debugError(errorMsg, [errorUrl, errorLine, errorChar, errorType]);

      $.ajax({
        type: 'POST',
        url: '/api/error_log/',
        data: {
          'msg': 'msg: ' + errorMsg + ', script: ' + errorUrl + ', url: ' + window.location.href + ', line: ' + errorLine,
          'category': 'js'
        },
        cache: false,
        success: function() {
          debug('error sent');
        },
        error: function(result, httpCode, jqXHR) {
          debug('error', result, httpCode, jqXHR);
        }
      });
    }

    return false;
  };
})(window);
