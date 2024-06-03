/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
!function(){"use strict";function t(t,i){i?(d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}function i(i,r,s){var e,n=typeof i;if("string"===n){var o,a=[],u=i.length,c=0;for(e=0;e<u;++e)(o=i.charCodeAt(e))<128?a[c++]=o:o<2048?(a[c++]=192|o>>6,a[c++]=128|63&o):o<55296||o>=57344?(a[c++]=224|o>>12,a[c++]=128|o>>6&63,a[c++]=128|63&o):(o=65536+((1023&o)<<10|1023&i.charCodeAt(++e)),a[c++]=240|o>>18,a[c++]=128|o>>12&63,a[c++]=128|o>>6&63,a[c++]=128|63&o);i=a}else{if("object"!==n)throw new Error(h);if(null===i)throw new Error(h);if(f&&i.constructor===ArrayBuffer)i=new Uint8Array(i);else if(!(Array.isArray(i)||f&&ArrayBuffer.isView(i)))throw new Error(h)}i.length>64&&(i=new t(r,!0).update(i).array());var y=[],p=[];for(e=0;e<64;++e){var l=i[e]||0;y[e]=92^l,p[e]=54^l}t.call(this,r,s),this.update(p),this.oKeyPad=y,this.inner=!0,this.sharedMemory=s}var h="input is invalid type",r="object"==typeof window,s=r?window:{};s.JS_SHA256_NO_WINDOW&&(r=!1);var e=!r&&"object"==typeof self,n=!s.JS_SHA256_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;n?s=global:e&&(s=self);var o=!s.JS_SHA256_NO_COMMON_JS&&"object"==typeof module&&module.exports,a="function"==typeof define&&define.amd,f=!s.JS_SHA256_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,u="0123456789abcdef".split(""),c=[-2147483648,8388608,32768,128],y=[24,16,8,0],p=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],l=["hex","array","digest","arrayBuffer"],d=[];!s.JS_SHA256_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!f||!s.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var A=function(i,h){return function(r){return new t(h,!0).update(r)[i]()}},w=function(i){var h=A("hex",i);n&&(h=b(h,i)),h.create=function(){return new t(i)},h.update=function(t){return h.create().update(t)};for(var r=0;r<l.length;++r){var s=l[r];h[s]=A(s,i)}return h},b=function(t,i){var r=eval("require('crypto')"),s=eval("require('buffer').Buffer"),e=i?"sha224":"sha256",n=function(i){if("string"==typeof i)return r.createHash(e).update(i,"utf8").digest("hex");if(null===i||void 0===i)throw new Error(h);return i.constructor===ArrayBuffer&&(i=new Uint8Array(i)),Array.isArray(i)||ArrayBuffer.isView(i)||i.constructor===s?r.createHash(e).update(new s(i)).digest("hex"):t(i)};return n},v=function(t,h){return function(r,s){return new i(r,h,!0).update(s)[t]()}},_=function(t){var h=v("hex",t);h.create=function(h){return new i(h,t)},h.update=function(t,i){return h.create(t).update(i)};for(var r=0;r<l.length;++r){var s=l[r];h[s]=v(s,t)}return h};t.prototype.update=function(t){if(!this.finalized){var i,r=typeof t;if("string"!==r){if("object"!==r)throw new Error(h);if(null===t)throw new Error(h);if(f&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||f&&ArrayBuffer.isView(t)))throw new Error(h);i=!0}for(var s,e,n=0,o=t.length,a=this.blocks;n<o;){if(this.hashed&&(this.hashed=!1,a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),i)for(e=this.start;n<o&&e<64;++n)a[e>>2]|=t[n]<<y[3&e++];else for(e=this.start;n<o&&e<64;++n)(s=t.charCodeAt(n))<128?a[e>>2]|=s<<y[3&e++]:s<2048?(a[e>>2]|=(192|s>>6)<<y[3&e++],a[e>>2]|=(128|63&s)<<y[3&e++]):s<55296||s>=57344?(a[e>>2]|=(224|s>>12)<<y[3&e++],a[e>>2]|=(128|s>>6&63)<<y[3&e++],a[e>>2]|=(128|63&s)<<y[3&e++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++n)),a[e>>2]|=(240|s>>18)<<y[3&e++],a[e>>2]|=(128|s>>12&63)<<y[3&e++],a[e>>2]|=(128|s>>6&63)<<y[3&e++],a[e>>2]|=(128|63&s)<<y[3&e++]);this.lastByteIndex=e,this.bytes+=e-this.start,e>=64?(this.block=a[16],this.start=e-64,this.hash(),this.hashed=!0):this.start=e}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,i=this.lastByteIndex;t[16]=this.block,t[i>>2]|=c[3&i],this.block=t[16],i>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},t.prototype.hash=function(){var t,i,h,r,s,e,n,o,a,f=this.h0,u=this.h1,c=this.h2,y=this.h3,l=this.h4,d=this.h5,A=this.h6,w=this.h7,b=this.blocks;for(t=16;t<64;++t)i=((s=b[t-15])>>>7|s<<25)^(s>>>18|s<<14)^s>>>3,h=((s=b[t-2])>>>17|s<<15)^(s>>>19|s<<13)^s>>>10,b[t]=b[t-16]+i+b[t-7]+h<<0;for(a=u&c,t=0;t<64;t+=4)this.first?(this.is224?(e=300032,w=(s=b[0]-1413257819)-150054599<<0,y=s+24177077<<0):(e=704751109,w=(s=b[0]-210244248)-1521486534<<0,y=s+143694565<<0),this.first=!1):(i=(f>>>2|f<<30)^(f>>>13|f<<19)^(f>>>22|f<<10),r=(e=f&u)^f&c^a,w=y+(s=w+(h=(l>>>6|l<<26)^(l>>>11|l<<21)^(l>>>25|l<<7))+(l&d^~l&A)+p[t]+b[t])<<0,y=s+(i+r)<<0),i=(y>>>2|y<<30)^(y>>>13|y<<19)^(y>>>22|y<<10),r=(n=y&f)^y&u^e,A=c+(s=A+(h=(w>>>6|w<<26)^(w>>>11|w<<21)^(w>>>25|w<<7))+(w&l^~w&d)+p[t+1]+b[t+1])<<0,i=((c=s+(i+r)<<0)>>>2|c<<30)^(c>>>13|c<<19)^(c>>>22|c<<10),r=(o=c&y)^c&f^n,d=u+(s=d+(h=(A>>>6|A<<26)^(A>>>11|A<<21)^(A>>>25|A<<7))+(A&w^~A&l)+p[t+2]+b[t+2])<<0,i=((u=s+(i+r)<<0)>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),r=(a=u&c)^u&y^o,l=f+(s=l+(h=(d>>>6|d<<26)^(d>>>11|d<<21)^(d>>>25|d<<7))+(d&A^~d&w)+p[t+3]+b[t+3])<<0,f=s+(i+r)<<0;this.h0=this.h0+f<<0,this.h1=this.h1+u<<0,this.h2=this.h2+c<<0,this.h3=this.h3+y<<0,this.h4=this.h4+l<<0,this.h5=this.h5+d<<0,this.h6=this.h6+A<<0,this.h7=this.h7+w<<0},t.prototype.hex=function(){this.finalize();var t=this.h0,i=this.h1,h=this.h2,r=this.h3,s=this.h4,e=this.h5,n=this.h6,o=this.h7,a=u[t>>28&15]+u[t>>24&15]+u[t>>20&15]+u[t>>16&15]+u[t>>12&15]+u[t>>8&15]+u[t>>4&15]+u[15&t]+u[i>>28&15]+u[i>>24&15]+u[i>>20&15]+u[i>>16&15]+u[i>>12&15]+u[i>>8&15]+u[i>>4&15]+u[15&i]+u[h>>28&15]+u[h>>24&15]+u[h>>20&15]+u[h>>16&15]+u[h>>12&15]+u[h>>8&15]+u[h>>4&15]+u[15&h]+u[r>>28&15]+u[r>>24&15]+u[r>>20&15]+u[r>>16&15]+u[r>>12&15]+u[r>>8&15]+u[r>>4&15]+u[15&r]+u[s>>28&15]+u[s>>24&15]+u[s>>20&15]+u[s>>16&15]+u[s>>12&15]+u[s>>8&15]+u[s>>4&15]+u[15&s]+u[e>>28&15]+u[e>>24&15]+u[e>>20&15]+u[e>>16&15]+u[e>>12&15]+u[e>>8&15]+u[e>>4&15]+u[15&e]+u[n>>28&15]+u[n>>24&15]+u[n>>20&15]+u[n>>16&15]+u[n>>12&15]+u[n>>8&15]+u[n>>4&15]+u[15&n];return this.is224||(a+=u[o>>28&15]+u[o>>24&15]+u[o>>20&15]+u[o>>16&15]+u[o>>12&15]+u[o>>8&15]+u[o>>4&15]+u[15&o]),a},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,i=this.h1,h=this.h2,r=this.h3,s=this.h4,e=this.h5,n=this.h6,o=this.h7,a=[t>>24&255,t>>16&255,t>>8&255,255&t,i>>24&255,i>>16&255,i>>8&255,255&i,h>>24&255,h>>16&255,h>>8&255,255&h,r>>24&255,r>>16&255,r>>8&255,255&r,s>>24&255,s>>16&255,s>>8&255,255&s,e>>24&255,e>>16&255,e>>8&255,255&e,n>>24&255,n>>16&255,n>>8&255,255&n];return this.is224||a.push(o>>24&255,o>>16&255,o>>8&255,255&o),a},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),i=new DataView(t);return i.setUint32(0,this.h0),i.setUint32(4,this.h1),i.setUint32(8,this.h2),i.setUint32(12,this.h3),i.setUint32(16,this.h4),i.setUint32(20,this.h5),i.setUint32(24,this.h6),this.is224||i.setUint32(28,this.h7),t},i.prototype=new t,i.prototype.finalize=function(){if(t.prototype.finalize.call(this),this.inner){this.inner=!1;var i=this.array();t.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(i),t.prototype.finalize.call(this)}};var B=w();B.sha256=B,B.sha224=w(!0),B.sha256.hmac=_(),B.sha224.hmac=_(!0),o?module.exports=B:(s.sha256=B.sha256,s.sha224=B.sha224,a&&define(function(){return B}))}();
!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.swal = e() : t.swal = e()
}(this, function () {
  return function (t) {
    function e(o) {
      if (n[o]) return n[o].exports;
      var r = n[o] = {i: o, l: !1, exports: {}};
      return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.d = function (t, n, o) {
      e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: o})
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 8)
  }([function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = "swal-button";
    e.CLASS_NAMES = {
      MODAL: "swal-modal",
      OVERLAY: "swal-overlay",
      SHOW_MODAL: "swal-overlay--show-modal",
      MODAL_TITLE: "swal-title",
      MODAL_TEXT: "swal-text",
      ICON: "swal-icon",
      ICON_CUSTOM: "swal-icon--custom",
      CONTENT: "swal-content",
      FOOTER: "swal-footer",
      BUTTON_CONTAINER: "swal-button-container",
      BUTTON: o,
      CONFIRM_BUTTON: o + "--confirm",
      CANCEL_BUTTON: o + "--cancel",
      DANGER_BUTTON: o + "--danger",
      BUTTON_LOADING: o + "--loading",
      BUTTON_LOADER: o + "__loader"
    }, e.default = e.CLASS_NAMES
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.getNode = function (t) {
      var e = "." + t;
      return document.querySelector(e)
    }, e.stringToNode = function (t) {
      var e = document.createElement("div");
      return e.innerHTML = t.trim(), e.firstChild
    }, e.insertAfter = function (t, e) {
      var n = e.nextSibling;
      e.parentNode.insertBefore(t, n)
    }, e.removeNode = function (t) {
      t.parentElement.removeChild(t)
    }, e.throwErr = function (t) {
      throw t = t.replace(/ +(?= )/g, ""), "SweetAlert: " + (t = t.trim())
    }, e.isPlainObject = function (t) {
      if ("[object Object]" !== Object.prototype.toString.call(t)) return !1;
      var e = Object.getPrototypeOf(t);
      return null === e || e === Object.prototype
    }, e.ordinalSuffixOf = function (t) {
      var e = t % 10, n = t % 100;
      return 1 === e && 11 !== n ? t + "st" : 2 === e && 12 !== n ? t + "nd" : 3 === e && 13 !== n ? t + "rd" : t + "th"
    }
  }, function (t, e, n) {
    "use strict";

    function o(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n])
    }

    Object.defineProperty(e, "__esModule", {value: !0}), o(n(25));
    var r = n(26);
    e.overlayMarkup = r.default, o(n(27)), o(n(28)), o(n(29));
    var i = n(0), a = i.default.MODAL_TITLE, s = i.default.MODAL_TEXT, c = i.default.ICON, l = i.default.FOOTER;
    e.iconMarkup = '\n  <div class="' + c + '"></div>', e.titleMarkup = '\n  <div class="' + a + '"></div>\n', e.textMarkup = '\n  <div class="' + s + '"></div>', e.footerMarkup = '\n  <div class="' + l + '"></div>\n'
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(1);
    e.CONFIRM_KEY = "confirm", e.CANCEL_KEY = "cancel";
    var r = {visible: !0, text: null, value: null, className: "", closeModal: !0},
      i = Object.assign({}, r, {visible: !1, text: "Cancel", value: null}),
      a = Object.assign({}, r, {text: "OK", value: !0});
    e.defaultButtonList = {cancel: i, confirm: a};
    var s = function (t) {
      switch (t) {
        case e.CONFIRM_KEY:
          return a;
        case e.CANCEL_KEY:
          return i;
        default:
          var n = t.charAt(0).toUpperCase() + t.slice(1);
          return Object.assign({}, r, {text: n, value: t})
      }
    }, c = function (t, e) {
      var n = s(t);
      return !0 === e ? Object.assign({}, n, {visible: !0}) : "string" == typeof e ? Object.assign({}, n, {
        visible: !0,
        text: e
      }) : o.isPlainObject(e) ? Object.assign({visible: !0}, n, e) : Object.assign({}, n, {visible: !1})
    }, l = function (t) {
      for (var e = {}, n = 0, o = Object.keys(t); n < o.length; n++) {
        var r = o[n], a = t[r], s = c(r, a);
        e[r] = s
      }
      return e.cancel || (e.cancel = i), e
    }, u = function (t) {
      var n = {};
      switch (t.length) {
        case 1:
          n[e.CANCEL_KEY] = Object.assign({}, i, {visible: !1});
          break;
        case 2:
          n[e.CANCEL_KEY] = c(e.CANCEL_KEY, t[0]), n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t[1]);
          break;
        default:
          o.throwErr("Invalid number of 'buttons' in array (" + t.length + ").\n      If you want more than 2 buttons, you need to use an object!")
      }
      return n
    };
    e.getButtonListOpts = function (t) {
      var n = e.defaultButtonList;
      return "string" == typeof t ? n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t) : Array.isArray(t) ? n = u(t) : o.isPlainObject(t) ? n = l(t) : !0 === t ? n = u([!0, !0]) : !1 === t ? n = u([!1, !1]) : void 0 === t && (n = e.defaultButtonList), n
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(1), r = n(2), i = n(0), a = i.default.MODAL, s = i.default.OVERLAY, c = n(30), l = n(31), u = n(32),
      f = n(33);
    e.injectElIntoModal = function (t) {
      var e = o.getNode(a), n = o.stringToNode(t);
      return e.appendChild(n), n
    };
    var d = function (t) {
      t.className = a, t.textContent = ""
    }, p = function (t, e) {
      d(t);
      var n = e.className;
      n && t.classList.add(n)
    };
    e.initModalContent = function (t) {
      var e = o.getNode(a);
      p(e, t), c.default(t.icon), l.initTitle(t.title), l.initText(t.text), f.default(t.content), u.default(t.buttons, t.dangerMode)
    };
    var m = function () {
      var t = o.getNode(s), e = o.stringToNode(r.modalMarkup);
      t.appendChild(e)
    };
    e.default = m
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(3), r = {isOpen: !1, promise: null, actions: {}, timer: null}, i = Object.assign({}, r);
    e.resetState = function () {
      i = Object.assign({}, r)
    }, e.setActionValue = function (t) {
      if ("string" == typeof t) return a(o.CONFIRM_KEY, t);
      for (var e in t) a(e, t[e])
    };
    var a = function (t, e) {
      i.actions[t] || (i.actions[t] = {}), Object.assign(i.actions[t], {value: e})
    };
    e.setActionOptionsFor = function (t, e) {
      var n = (void 0 === e ? {} : e).closeModal, o = void 0 === n || n;
      Object.assign(i.actions[t], {closeModal: o})
    }, e.default = i
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(1), r = n(3), i = n(0), a = i.default.OVERLAY, s = i.default.SHOW_MODAL, c = i.default.BUTTON,
      l = i.default.BUTTON_LOADING, u = n(5);
    e.openModal = function () {
      o.getNode(a).classList.add(s), u.default.isOpen = !0
    };
    var f = function () {
      o.getNode(a).classList.remove(s), u.default.isOpen = !1
    };
    e.onAction = function (t) {
      void 0 === t && (t = r.CANCEL_KEY);
      var e = u.default.actions[t], n = e.value;
      if (!1 === e.closeModal) {
        var i = c + "--" + t;
        o.getNode(i).classList.add(l)
      } else f();
      u.default.promise.resolve(n)
    }, e.getState = function () {
      var t = Object.assign({}, u.default);
      return delete t.promise, delete t.timer, t
    }, e.stopLoading = function () {
      for (var t = document.querySelectorAll("." + c), e = 0; e < t.length; e++) {
        t[e].classList.remove(l)
      }
    }
  }, function (t, e) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
      "object" == typeof window && (n = window)
    }
    t.exports = n
  }, function (t, e, n) {
    (function (e) {
      t.exports = e.sweetAlert = n(9)
    }).call(e, n(7))
  }, function (t, e, n) {
    (function (e) {
      t.exports = e.swal = n(10)
    }).call(e, n(7))
  }, function (t, e, n) {
    "undefined" != typeof window && n(11), n(16);
    var o = n(23).default;
    t.exports = o
  }, function (t, e, n) {
    var o = n(12);
    "string" == typeof o && (o = [[t.i, o, ""]]);
    var r = {insertAt: "top"};
    r.transform = void 0;
    n(14)(o, r);
    o.locals && (t.exports = o.locals)
  }, function (t, e, n) {
    e = t.exports = n(13)(void 0), e.push([t.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:center;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:center;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""])
  }, function (t, e) {
    function n(t, e) {
      var n = t[1] || "", r = t[3];
      if (!r) return n;
      if (e && "function" == typeof btoa) {
        var i = o(r);
        return [n].concat(r.sources.map(function (t) {
          return "/*# sourceURL=" + r.sourceRoot + t + " */"
        })).concat([i]).join("\n")
      }
      return [n].join("\n")
    }

    function o(t) {
      return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
    }

    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var o = n(e, t);
          return e[2] ? "@media " + e[2] + "{" + o + "}" : o
        }).join("")
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);
        for (var o = {}, r = 0; r < this.length; r++) {
          var i = this[r][0];
          "number" == typeof i && (o[i] = !0)
        }
        for (r = 0; r < t.length; r++) {
          var a = t[r];
          "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
        }
      }, e
    }
  }, function (t, e, n) {
    function o(t, e) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n], r = m[o.id];
        if (r) {
          r.refs++;
          for (var i = 0; i < r.parts.length; i++) r.parts[i](o.parts[i]);
          for (; i < o.parts.length; i++) r.parts.push(u(o.parts[i], e))
        } else {
          for (var a = [], i = 0; i < o.parts.length; i++) a.push(u(o.parts[i], e));
          m[o.id] = {id: o.id, refs: 1, parts: a}
        }
      }
    }

    function r(t, e) {
      for (var n = [], o = {}, r = 0; r < t.length; r++) {
        var i = t[r], a = e.base ? i[0] + e.base : i[0], s = i[1], c = i[2], l = i[3],
          u = {css: s, media: c, sourceMap: l};
        o[a] ? o[a].parts.push(u) : n.push(o[a] = {id: a, parts: [u]})
      }
      return n
    }

    function i(t, e) {
      var n = v(t.insertInto);
      if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      var o = w[w.length - 1];
      if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), w.push(e); else {
        if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        n.appendChild(e)
      }
    }

    function a(t) {
      if (null === t.parentNode) return !1;
      t.parentNode.removeChild(t);
      var e = w.indexOf(t);
      e >= 0 && w.splice(e, 1)
    }

    function s(t) {
      var e = document.createElement("style");
      return t.attrs.type = "text/css", l(e, t.attrs), i(t, e), e
    }

    function c(t) {
      var e = document.createElement("link");
      return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", l(e, t.attrs), i(t, e), e
    }

    function l(t, e) {
      Object.keys(e).forEach(function (n) {
        t.setAttribute(n, e[n])
      })
    }

    function u(t, e) {
      var n, o, r, i;
      if (e.transform && t.css) {
        if (!(i = e.transform(t.css))) return function () {
        };
        t.css = i
      }
      if (e.singleton) {
        var l = h++;
        n = g || (g = s(e)), o = f.bind(null, n, l, !1), r = f.bind(null, n, l, !0)
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), o = p.bind(null, n, e), r = function () {
        a(n), n.href && URL.revokeObjectURL(n.href)
      }) : (n = s(e), o = d.bind(null, n), r = function () {
        a(n)
      });
      return o(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
          o(t = e)
        } else r()
      }
    }

    function f(t, e, n, o) {
      var r = n ? "" : o.css;
      if (t.styleSheet) t.styleSheet.cssText = x(e, r); else {
        var i = document.createTextNode(r), a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
      }
    }

    function d(t, e) {
      var n = e.css, o = e.media;
      if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n; else {
        for (; t.firstChild;) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(n))
      }
    }

    function p(t, e, n) {
      var o = n.css, r = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && r;
      (e.convertToAbsoluteUrls || i) && (o = y(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
      var a = new Blob([o], {type: "text/css"}), s = t.href;
      t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
    }

    var m = {}, b = function (t) {
      var e;
      return function () {
        return void 0 === e && (e = t.apply(this, arguments)), e
      }
    }(function () {
      return window && document && document.all && !window.atob
    }), v = function (t) {
      var e = {};
      return function (n) {
        return void 0 === e[n] && (e[n] = t.call(this, n)), e[n]
      }
    }(function (t) {
      return document.querySelector(t)
    }), g = null, h = 0, w = [], y = n(15);
    t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
      e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = b()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
      var n = r(t, e);
      return o(n, e), function (t) {
        for (var i = [], a = 0; a < n.length; a++) {
          var s = n[a], c = m[s.id];
          c.refs--, i.push(c)
        }
        if (t) {
          o(r(t, e), e)
        }
        for (var a = 0; a < i.length; a++) {
          var c = i[a];
          if (0 === c.refs) {
            for (var l = 0; l < c.parts.length; l++) c.parts[l]();
            delete m[c.id]
          }
        }
      }
    };
    var x = function () {
      var t = [];
      return function (e, n) {
        return t[e] = n, t.filter(Boolean).join("\n")
      }
    }()
  }, function (t, e) {
    t.exports = function (t) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!t || "string" != typeof t) return t;
      var n = e.protocol + "//" + e.host, o = n + e.pathname.replace(/\/[^\/]*$/, "/");
      return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
        var r = e.trim().replace(/^"(.*)"$/, function (t, e) {
          return e
        }).replace(/^'(.*)'$/, function (t, e) {
          return e
        });
        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t;
        var i;
        return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")"
      })
    }
  }, function (t, e, n) {
    var o = n(17);
    "undefined" == typeof window || window.Promise || (window.Promise = o), n(21), String.prototype.includes || (String.prototype.includes = function (t, e) {
      "use strict";
      return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
      value: function (t, e) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var n = Object(this), o = n.length >>> 0;
        if (0 === o) return !1;
        for (var r = 0 | e, i = Math.max(r >= 0 ? r : o - Math.abs(r), 0); i < o;) {
          if (function (t, e) {
            return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
          }(n[i], t)) return !0;
          i++
        }
        return !1
      }
    }), "undefined" != typeof window && function (t) {
      t.forEach(function (t) {
        t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function () {
            this.parentNode.removeChild(this)
          }
        })
      })
    }([Element.prototype, CharacterData.prototype, DocumentType.prototype])
  }, function (t, e, n) {
    (function (e) {
      !function (n) {
        function o() {
        }

        function r(t, e) {
          return function () {
            t.apply(e, arguments)
          }
        }

        function i(t) {
          if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof t) throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this)
        }

        function a(t, e) {
          for (; 3 === t._state;) t = t._value;
          if (0 === t._state) return void t._deferreds.push(e);
          t._handled = !0, i._immediateFn(function () {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null === n) return void (1 === t._state ? s : c)(e.promise, t._value);
            var o;
            try {
              o = n(t._value)
            } catch (t) {
              return void c(e.promise, t)
            }
            s(e.promise, o)
          })
        }

        function s(t, e) {
          try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
              var n = e.then;
              if (e instanceof i) return t._state = 3, t._value = e, void l(t);
              if ("function" == typeof n) return void f(r(n, e), t)
            }
            t._state = 1, t._value = e, l(t)
          } catch (e) {
            c(t, e)
          }
        }

        function c(t, e) {
          t._state = 2, t._value = e, l(t)
        }

        function l(t) {
          2 === t._state && 0 === t._deferreds.length && i._immediateFn(function () {
            t._handled || i._unhandledRejectionFn(t._value)
          });
          for (var e = 0, n = t._deferreds.length; e < n; e++) a(t, t._deferreds[e]);
          t._deferreds = null
        }

        function u(t, e, n) {
          this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
        }

        function f(t, e) {
          var n = !1;
          try {
            t(function (t) {
              n || (n = !0, s(e, t))
            }, function (t) {
              n || (n = !0, c(e, t))
            })
          } catch (t) {
            if (n) return;
            n = !0, c(e, t)
          }
        }

        var d = setTimeout;
        i.prototype.catch = function (t) {
          return this.then(null, t)
        }, i.prototype.then = function (t, e) {
          var n = new this.constructor(o);
          return a(this, new u(t, e, n)), n
        }, i.all = function (t) {
          var e = Array.prototype.slice.call(t);
          return new i(function (t, n) {
            function o(i, a) {
              try {
                if (a && ("object" == typeof a || "function" == typeof a)) {
                  var s = a.then;
                  if ("function" == typeof s) return void s.call(a, function (t) {
                    o(i, t)
                  }, n)
                }
                e[i] = a, 0 == --r && t(e)
              } catch (t) {
                n(t)
              }
            }

            if (0 === e.length) return t([]);
            for (var r = e.length, i = 0; i < e.length; i++) o(i, e[i])
          })
        }, i.resolve = function (t) {
          return t && "object" == typeof t && t.constructor === i ? t : new i(function (e) {
            e(t)
          })
        }, i.reject = function (t) {
          return new i(function (e, n) {
            n(t)
          })
        }, i.race = function (t) {
          return new i(function (e, n) {
            for (var o = 0, r = t.length; o < r; o++) t[o].then(e, n)
          })
        }, i._immediateFn = "function" == typeof e && function (t) {
          e(t)
        } || function (t) {
          d(t, 0)
        }, i._unhandledRejectionFn = function (t) {
          "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
        }, i._setImmediateFn = function (t) {
          i._immediateFn = t
        }, i._setUnhandledRejectionFn = function (t) {
          i._unhandledRejectionFn = t
        }, void 0 !== t && t.exports ? t.exports = i : n.Promise || (n.Promise = i)
      }(this)
    }).call(e, n(18).setImmediate)
  }, function (t, e, n) {
    function o(t, e) {
      this._id = t, this._clearFn = e
    }

    var r = Function.prototype.apply;
    e.setTimeout = function () {
      return new o(r.call(setTimeout, window, arguments), clearTimeout)
    }, e.setInterval = function () {
      return new o(r.call(setInterval, window, arguments), clearInterval)
    }, e.clearTimeout = e.clearInterval = function (t) {
      t && t.close()
    }, o.prototype.unref = o.prototype.ref = function () {
    }, o.prototype.close = function () {
      this._clearFn.call(window, this._id)
    }, e.enroll = function (t, e) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = e
    }, e.unenroll = function (t) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
    }, e._unrefActive = e.active = function (t) {
      clearTimeout(t._idleTimeoutId);
      var e = t._idleTimeout;
      e >= 0 && (t._idleTimeoutId = setTimeout(function () {
        t._onTimeout && t._onTimeout()
      }, e))
    }, n(19), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
  }, function (t, e, n) {
    (function (t, e) {
      !function (t, n) {
        "use strict";

        function o(t) {
          "function" != typeof t && (t = new Function("" + t));
          for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
          var o = {callback: t, args: e};
          return l[c] = o, s(c), c++
        }

        function r(t) {
          delete l[t]
        }

        function i(t) {
          var e = t.callback, o = t.args;
          switch (o.length) {
            case 0:
              e();
              break;
            case 1:
              e(o[0]);
              break;
            case 2:
              e(o[0], o[1]);
              break;
            case 3:
              e(o[0], o[1], o[2]);
              break;
            default:
              e.apply(n, o)
          }
        }

        function a(t) {
          if (u) setTimeout(a, 0, t); else {
            var e = l[t];
            if (e) {
              u = !0;
              try {
                i(e)
              } finally {
                r(t), u = !1
              }
            }
          }
        }

        if (!t.setImmediate) {
          var s, c = 1, l = {}, u = !1, f = t.document, d = Object.getPrototypeOf && Object.getPrototypeOf(t);
          d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? function () {
            s = function (t) {
              e.nextTick(function () {
                a(t)
              })
            }
          }() : function () {
            if (t.postMessage && !t.importScripts) {
              var e = !0, n = t.onmessage;
              return t.onmessage = function () {
                e = !1
              }, t.postMessage("", "*"), t.onmessage = n, e
            }
          }() ? function () {
            var e = "setImmediate$" + Math.random() + "$", n = function (n) {
              n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && a(+n.data.slice(e.length))
            };
            t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), s = function (n) {
              t.postMessage(e + n, "*")
            }
          }() : t.MessageChannel ? function () {
            var t = new MessageChannel;
            t.port1.onmessage = function (t) {
              a(t.data)
            }, s = function (e) {
              t.port2.postMessage(e)
            }
          }() : f && "onreadystatechange" in f.createElement("script") ? function () {
            var t = f.documentElement;
            s = function (e) {
              var n = f.createElement("script");
              n.onreadystatechange = function () {
                a(e), n.onreadystatechange = null, t.removeChild(n), n = null
              }, t.appendChild(n)
            }
          }() : function () {
            s = function (t) {
              setTimeout(a, 0, t)
            }
          }(), d.setImmediate = o, d.clearImmediate = r
        }
      }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(e, n(7), n(20))
  }, function (t, e) {
    function n() {
      throw new Error("setTimeout has not been defined")
    }

    function o() {
      throw new Error("clearTimeout has not been defined")
    }

    function r(t) {
      if (u === setTimeout) return setTimeout(t, 0);
      if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
      try {
        return u(t, 0)
      } catch (e) {
        try {
          return u.call(null, t, 0)
        } catch (e) {
          return u.call(this, t, 0)
        }
      }
    }

    function i(t) {
      if (f === clearTimeout) return clearTimeout(t);
      if ((f === o || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t);
      try {
        return f(t)
      } catch (e) {
        try {
          return f.call(null, t)
        } catch (e) {
          return f.call(this, t)
        }
      }
    }

    function a() {
      b && p && (b = !1, p.length ? m = p.concat(m) : v = -1, m.length && s())
    }

    function s() {
      if (!b) {
        var t = r(a);
        b = !0;
        for (var e = m.length; e;) {
          for (p = m, m = []; ++v < e;) p && p[v].run();
          v = -1, e = m.length
        }
        p = null, b = !1, i(t)
      }
    }

    function c(t, e) {
      this.fun = t, this.array = e
    }

    function l() {
    }

    var u, f, d = t.exports = {};
    !function () {
      try {
        u = "function" == typeof setTimeout ? setTimeout : n
      } catch (t) {
        u = n
      }
      try {
        f = "function" == typeof clearTimeout ? clearTimeout : o
      } catch (t) {
        f = o
      }
    }();
    var p, m = [], b = !1, v = -1;
    d.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      m.push(new c(t, e)), 1 !== m.length || b || r(s)
    }, c.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function (t) {
      return []
    }, d.binding = function (t) {
      throw new Error("process.binding is not supported")
    }, d.cwd = function () {
      return "/"
    }, d.chdir = function (t) {
      throw new Error("process.chdir is not supported")
    }, d.umask = function () {
      return 0
    }
  }, function (t, e, n) {
    "use strict";
    n(22).polyfill()
  }, function (t, e, n) {
    "use strict";

    function o(t, e) {
      if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object");
      for (var n = Object(t), o = 1; o < arguments.length; o++) {
        var r = arguments[o];
        if (void 0 !== r && null !== r) for (var i = Object.keys(Object(r)), a = 0, s = i.length; a < s; a++) {
          var c = i[a], l = Object.getOwnPropertyDescriptor(r, c);
          void 0 !== l && l.enumerable && (n[c] = r[c])
        }
      }
      return n
    }

    function r() {
      Object.assign || Object.defineProperty(Object, "assign", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: o
      })
    }

    t.exports = {assign: o, polyfill: r}
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(24), r = n(6), i = n(5), a = n(36), s = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      if ("undefined" != typeof window) {
        var n = a.getOpts.apply(void 0, t);
        return new Promise(function (t, e) {
          i.default.promise = {resolve: t, reject: e}, o.default(n), setTimeout(function () {
            r.openModal()
          })
        })
      }
    };
    s.close = r.onAction, s.getState = r.getState, s.setActionValue = i.setActionValue, s.stopLoading = r.stopLoading, s.setDefaults = a.setDefaults, e.default = s
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(1), r = n(0), i = r.default.MODAL, a = n(4), s = n(34), c = n(35), l = n(1);
    e.init = function (t) {
      o.getNode(i) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), s.default(), a.default()), a.initModalContent(t), c.default(t)
    }, e.default = e.init
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(0), r = o.default.MODAL;
    e.modalMarkup = '\n  <div class="' + r + '" role="dialog" aria-modal="true"></div>', e.default = e.modalMarkup
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(0), r = o.default.OVERLAY, i = '<div \n    class="' + r + '"\n    tabIndex="-1">\n  </div>';
    e.default = i
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(0), r = o.default.ICON;
    e.errorIconMarkup = function () {
      var t = r + "--error", e = t + "__line";
      return '\n    <div class="' + t + '__x-mark">\n      <span class="' + e + " " + e + '--left"></span>\n      <span class="' + e + " " + e + '--right"></span>\n    </div>\n  '
    }, e.warningIconMarkup = function () {
      var t = r + "--warning";
      return '\n    <span class="' + t + '__body">\n      <span class="' + t + '__dot"></span>\n    </span>\n  '
    }, e.successIconMarkup = function () {
      var t = r + "--success";
      return '\n    <span class="' + t + "__line " + t + '__line--long"></span>\n    <span class="' + t + "__line " + t + '__line--tip"></span>\n\n    <div class="' + t + '__ring"></div>\n    <div class="' + t + '__hide-corners"></div>\n  '
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(0), r = o.default.CONTENT;
    e.contentMarkup = '\n  <div class="' + r + '">\n\n  </div>\n'
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(0), r = o.default.BUTTON_CONTAINER, i = o.default.BUTTON, a = o.default.BUTTON_LOADER;
    e.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + i + '"\n    ></button>\n\n    <div class="' + a + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(4), r = n(2), i = n(0), a = i.default.ICON, s = i.default.ICON_CUSTOM,
      c = ["error", "warning", "success", "info"],
      l = {error: r.errorIconMarkup(), warning: r.warningIconMarkup(), success: r.successIconMarkup()},
      u = function (t, e) {
        var n = a + "--" + t;
        e.classList.add(n);
        var o = l[t];
        o && (e.innerHTML = o)
      }, f = function (t, e) {
        e.classList.add(s);
        var n = document.createElement("img");
        n.src = t, e.appendChild(n)
      }, d = function (t) {
        if (t) {
          var e = o.injectElIntoModal(r.iconMarkup);
          c.includes(t) ? u(t, e) : f(t, e)
        }
      };
    e.default = d
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(2), r = n(4), i = function (t) {
      navigator.userAgent.includes("AppleWebKit") && (t.style.display = "none", t.offsetHeight, t.style.display = "")
    };
    e.initTitle = function (t) {
      if (t) {
        var e = r.injectElIntoModal(o.titleMarkup);
        e.textContent = t, i(e)
      }
    }, e.initText = function (t) {
      if (t) {
        var e = document.createDocumentFragment();
        t.split("\n").forEach(function (t, n, o) {
          e.appendChild(document.createTextNode(t)), n < o.length - 1 && e.appendChild(document.createElement("br"))
        });
        var n = r.injectElIntoModal(o.textMarkup);
        n.appendChild(e), i(n)
      }
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(1), r = n(4), i = n(0), a = i.default.BUTTON, s = i.default.DANGER_BUTTON, c = n(3), l = n(2), u = n(6),
      f = n(5), d = function (t, e, n) {
        var r = e.text, i = e.value, d = e.className, p = e.closeModal, m = o.stringToNode(l.buttonMarkup),
          b = m.querySelector("." + a), v = a + "--" + t;
        if (b.classList.add(v), d) {
          (Array.isArray(d) ? d : d.split(" ")).filter(function (t) {
            return t.length > 0
          }).forEach(function (t) {
            b.classList.add(t)
          })
        }
        n && t === c.CONFIRM_KEY && b.classList.add(s), b.textContent = r;
        var g = {};
        return g[t] = i, f.setActionValue(g), f.setActionOptionsFor(t, {closeModal: p}), b.addEventListener("click", function () {
          return u.onAction(t)
        }), m
      }, p = function (t, e) {
        var n = r.injectElIntoModal(l.footerMarkup);
        for (var o in t) {
          var i = t[o], a = d(o, i, e);
          i.visible && n.appendChild(a)
        }
        0 === n.children.length && n.remove()
      };
    e.default = p
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(3), r = n(4), i = n(2), a = n(5), s = n(6), c = n(0), l = c.default.CONTENT, u = function (t) {
      t.addEventListener("input", function (t) {
        var e = t.target, n = e.value;
        a.setActionValue(n)
      }), t.addEventListener("keyup", function (t) {
        if ("Enter" === t.key) return s.onAction(o.CONFIRM_KEY)
      }), setTimeout(function () {
        t.focus(), a.setActionValue("")
      }, 0)
    }, f = function (t, e, n) {
      var o = document.createElement(e), r = l + "__" + e;
      o.classList.add(r);
      for (var i in n) {
        var a = n[i];
        o[i] = a
      }
      "input" === e && u(o), t.appendChild(o)
    }, d = function (t) {
      if (t) {
        var e = r.injectElIntoModal(i.contentMarkup), n = t.element, o = t.attributes;
        "string" == typeof n ? f(e, n, o) : e.appendChild(n)
      }
    };
    e.default = d
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(1), r = n(2), i = function () {
      var t = o.stringToNode(r.overlayMarkup);
      document.body.appendChild(t)
    };
    e.default = i
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(5), r = n(6), i = n(1), a = n(3), s = n(0), c = s.default.MODAL, l = s.default.BUTTON,
      u = s.default.OVERLAY, f = function (t) {
        t.preventDefault(), v()
      }, d = function (t) {
        t.preventDefault(), g()
      }, p = function (t) {
        if (o.default.isOpen) switch (t.key) {
          case"Escape":
            return r.onAction(a.CANCEL_KEY)
        }
      }, m = function (t) {
        if (o.default.isOpen) switch (t.key) {
          case"Tab":
            return f(t)
        }
      }, b = function (t) {
        if (o.default.isOpen) return "Tab" === t.key && t.shiftKey ? d(t) : void 0
      }, v = function () {
        var t = i.getNode(l);
        t && (t.tabIndex = 0, t.focus())
      }, g = function () {
        var t = i.getNode(c), e = t.querySelectorAll("." + l), n = e.length - 1, o = e[n];
        o && o.focus()
      }, h = function (t) {
        t[t.length - 1].addEventListener("keydown", m)
      }, w = function (t) {
        t[0].addEventListener("keydown", b)
      }, y = function () {
        var t = i.getNode(c), e = t.querySelectorAll("." + l);
        e.length && (h(e), w(e))
      }, x = function (t) {
        if (i.getNode(u) === t.target) return r.onAction(a.CANCEL_KEY)
      }, _ = function (t) {
        var e = i.getNode(u);
        e.removeEventListener("click", x), t && e.addEventListener("click", x)
      }, k = function (t) {
        o.default.timer && clearTimeout(o.default.timer), t && (o.default.timer = window.setTimeout(function () {
          return r.onAction(a.CANCEL_KEY)
        }, t))
      }, O = function (t) {
        t.closeOnEsc ? document.addEventListener("keyup", p) : document.removeEventListener("keyup", p), t.dangerMode ? v() : g(), y(), _(t.closeOnClickOutside), k(t.timer)
      };
    e.default = O
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(1), r = n(3), i = n(37), a = n(38), s = {
      title: null,
      text: null,
      icon: null,
      buttons: r.defaultButtonList,
      content: null,
      className: null,
      closeOnClickOutside: !0,
      closeOnEsc: !0,
      dangerMode: !1,
      timer: null
    }, c = Object.assign({}, s);
    e.setDefaults = function (t) {
      c = Object.assign({}, s, t)
    };
    var l = function (t) {
      var e = t && t.button, n = t && t.buttons;
      return void 0 !== e && void 0 !== n && o.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== e ? {confirm: e} : n
    }, u = function (t) {
      return o.ordinalSuffixOf(t + 1)
    }, f = function (t, e) {
      o.throwErr(u(e) + " argument ('" + t + "') is invalid")
    }, d = function (t, e) {
      var n = t + 1, r = e[n];
      o.isPlainObject(r) || void 0 === r || o.throwErr("Expected " + u(n) + " argument ('" + r + "') to be a plain object")
    }, p = function (t, e) {
      var n = t + 1, r = e[n];
      void 0 !== r && o.throwErr("Unexpected " + u(n) + " argument (" + r + ")")
    }, m = function (t, e, n, r) {
      var i = typeof e, a = "string" === i, s = e instanceof Element;
      if (a) {
        if (0 === n) return {text: e};
        if (1 === n) return {text: e, title: r[0]};
        if (2 === n) return d(n, r), {icon: e};
        f(e, n)
      } else {
        if (s && 0 === n) return d(n, r), {content: e};
        if (o.isPlainObject(e)) return p(n, r), e;
        f(e, n)
      }
    };
    e.getOpts = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      var n = {};
      t.forEach(function (e, o) {
        var r = m(0, e, o, t);
        Object.assign(n, r)
      });
      var o = l(n);
      n.buttons = r.getButtonListOpts(o), delete n.button, n.content = i.getContentOpts(n.content);
      var u = Object.assign({}, s, c, n);
      return Object.keys(u).forEach(function (t) {
        a.DEPRECATED_OPTS[t] && a.logDeprecation(t)
      }), u
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var o = n(1), r = {element: "input", attributes: {placeholder: ""}};
    e.getContentOpts = function (t) {
      var e = {};
      return o.isPlainObject(t) ? Object.assign(e, t) : t instanceof Element ? {element: t} : "input" === t ? r : null
    }
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.logDeprecation = function (t) {
      var n = e.DEPRECATED_OPTS[t], o = n.onlyRename, r = n.replacement, i = n.subOption, a = n.link,
        s = o ? "renamed" : "deprecated", c = 'SweetAlert warning: "' + t + '" option has been ' + s + ".";
      if (r) {
        c += " Please use" + (i ? ' "' + i + '" in ' : " ") + '"' + r + '" instead.'
      }
      var l = "https://sweetalert.js.org";
      c += a ? " More details: " + l + a : " More details: " + l + "/guides/#upgrading-from-1x", console.warn(c)
    }, e.DEPRECATED_OPTS = {
      type: {replacement: "icon", link: "/docs/#icon"},
      imageUrl: {replacement: "icon", link: "/docs/#icon"},
      customClass: {replacement: "className", onlyRename: !0, link: "/docs/#classname"},
      imageSize: {},
      showCancelButton: {replacement: "buttons", link: "/docs/#buttons"},
      showConfirmButton: {replacement: "button", link: "/docs/#button"},
      confirmButtonText: {replacement: "button", link: "/docs/#button"},
      confirmButtonColor: {},
      cancelButtonText: {replacement: "buttons", link: "/docs/#buttons"},
      closeOnConfirm: {replacement: "button", subOption: "closeModal", link: "/docs/#button"},
      closeOnCancel: {replacement: "buttons", subOption: "closeModal", link: "/docs/#buttons"},
      showLoaderOnConfirm: {replacement: "buttons"},
      animation: {},
      inputType: {replacement: "content", link: "/docs/#content"},
      inputValue: {replacement: "content", link: "/docs/#content"},
      inputPlaceholder: {replacement: "content", link: "/docs/#content"},
      html: {replacement: "content", link: "/docs/#content"},
      allowEscapeKey: {replacement: "closeOnEsc", onlyRename: !0, link: "/docs/#closeonesc"},
      allowClickOutside: {replacement: "closeOnClickOutside", onlyRename: !0, link: "/docs/#closeonclickoutside"}
    }
  }])
});

/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

// Fingerprintjs2 - Copyright (c) 2020 Valentin Vasilyev (valentin.vasilyev@outlook.com)
// Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.

!function (e, t) {
  "use strict";
  "undefined" != typeof window && "function" == typeof define && define.amd ? define(t) : "undefined" != typeof module && module.exports ? module.exports = t() : e.exports ? e.exports = t() : e.Fingerprint2 = t()
}(this, function () {
  "use strict";
  void 0 === Array.isArray && (Array.isArray = function (e) {
    return "[object Array]" === Object.prototype.toString.call(e)
  });

  function d(e, t) {
    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
    var n = [0, 0, 0, 0];
    return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
  }

  function f(e, t) {
    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
    var n = [0, 0, 0, 0];
    return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
  }

  function g(e, t) {
    return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
  }

  function h(e, t) {
    return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
  }

  function m(e, t) {
    return [e[0] ^ t[0], e[1] ^ t[1]]
  }

  function p(e) {
    return e = m(e, [0, e[0] >>> 1]), e = f(e, [4283543511, 3981806797]), e = m(e, [0, e[0] >>> 1]), e = f(e, [3301882366, 444984403]), e = m(e, [0, e[0] >>> 1])
  }

  function l(e, t) {
    t = t || 0;
    for (var n = (e = e || "").length % 16, a = e.length - n, r = [0, t], i = [0, t], o = [0, 0], l = [0, 0], s = [2277735313, 289559509], c = [1291169091, 658871167], u = 0; u < a; u += 16) o = [255 & e.charCodeAt(u + 4) | (255 & e.charCodeAt(u + 5)) << 8 | (255 & e.charCodeAt(u + 6)) << 16 | (255 & e.charCodeAt(u + 7)) << 24, 255 & e.charCodeAt(u) | (255 & e.charCodeAt(u + 1)) << 8 | (255 & e.charCodeAt(u + 2)) << 16 | (255 & e.charCodeAt(u + 3)) << 24], l = [255 & e.charCodeAt(u + 12) | (255 & e.charCodeAt(u + 13)) << 8 | (255 & e.charCodeAt(u + 14)) << 16 | (255 & e.charCodeAt(u + 15)) << 24, 255 & e.charCodeAt(u + 8) | (255 & e.charCodeAt(u + 9)) << 8 | (255 & e.charCodeAt(u + 10)) << 16 | (255 & e.charCodeAt(u + 11)) << 24], o = f(o, s), o = g(o, 31), o = f(o, c), r = m(r, o), r = g(r, 27), r = d(r, i), r = d(f(r, [0, 5]), [0, 1390208809]), l = f(l, c), l = g(l, 33), l = f(l, s), i = m(i, l), i = g(i, 31), i = d(i, r), i = d(f(i, [0, 5]), [0, 944331445]);
    switch (o = [0, 0], l = [0, 0], n) {
      case 15:
        l = m(l, h([0, e.charCodeAt(u + 14)], 48));
      case 14:
        l = m(l, h([0, e.charCodeAt(u + 13)], 40));
      case 13:
        l = m(l, h([0, e.charCodeAt(u + 12)], 32));
      case 12:
        l = m(l, h([0, e.charCodeAt(u + 11)], 24));
      case 11:
        l = m(l, h([0, e.charCodeAt(u + 10)], 16));
      case 10:
        l = m(l, h([0, e.charCodeAt(u + 9)], 8));
      case 9:
        l = m(l, [0, e.charCodeAt(u + 8)]), l = f(l, c), l = g(l, 33), l = f(l, s), i = m(i, l);
      case 8:
        o = m(o, h([0, e.charCodeAt(u + 7)], 56));
      case 7:
        o = m(o, h([0, e.charCodeAt(u + 6)], 48));
      case 6:
        o = m(o, h([0, e.charCodeAt(u + 5)], 40));
      case 5:
        o = m(o, h([0, e.charCodeAt(u + 4)], 32));
      case 4:
        o = m(o, h([0, e.charCodeAt(u + 3)], 24));
      case 3:
        o = m(o, h([0, e.charCodeAt(u + 2)], 16));
      case 2:
        o = m(o, h([0, e.charCodeAt(u + 1)], 8));
      case 1:
        o = m(o, [0, e.charCodeAt(u)]), o = f(o, s), o = g(o, 31), o = f(o, c), r = m(r, o)
    }
    return r = m(r, [0, e.length]), i = m(i, [0, e.length]), r = d(r, i), i = d(i, r), r = p(r), i = p(i), r = d(r, i), i = d(i, r), ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
  }

  function c(e, t) {
    if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t); else if (e.length === +e.length) for (var n = 0, a = e.length; n < a; n++) t(e[n], n, e); else for (var r in e) e.hasOwnProperty(r) && t(e[r], r, e)
  }

  function s(e, a) {
    var r = [];
    return null == e ? r : Array.prototype.map && e.map === Array.prototype.map ? e.map(a) : (c(e, function (e, t, n) {
      r.push(a(e, t, n))
    }), r)
  }

  function a(e) {
    throw new Error("'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200")
  }

  var e = {
    preprocessor: null,
    audio: {timeout: 1e3, excludeIOS11: !0},
    fonts: {
      swfContainerId: "fingerprintjs2",
      swfPath: "flash/compiled/FontList.swf",
      userDefinedFonts: [],
      extendedJsFonts: !1
    },
    screen: {detectScreenOrientation: !0},
    plugins: {sortPluginsFor: [/palemoon/i], excludeIE: !1},
    extraComponents: [],
    excludes: {enumerateDevices: !0, pixelRatio: !0, doNotTrack: !0, fontsFlash: !0, adBlock: !0},
    NOT_AVAILABLE: "not available",
    ERROR: "error",
    EXCLUDED: "excluded"
  }, n = function () {
    return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
  }, r = function (e) {
    var t = [window.screen.width, window.screen.height];
    return e.screen.detectScreenOrientation && t.sort().reverse(), t
  }, i = function (e) {
    if (window.screen.availWidth && window.screen.availHeight) {
      var t = [window.screen.availHeight, window.screen.availWidth];
      return e.screen.detectScreenOrientation && t.sort().reverse(), t
    }
    return e.NOT_AVAILABLE
  }, o = function (e) {
    if (null == navigator.plugins) return e.NOT_AVAILABLE;
    for (var t = [], n = 0, a = navigator.plugins.length; n < a; n++) navigator.plugins[n] && t.push(navigator.plugins[n]);
    return T(e) && (t = t.sort(function (e, t) {
      return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
    })), s(t, function (e) {
      var t = s(e, function (e) {
        return [e.type, e.suffixes]
      });
      return [e.name, e.description, t]
    })
  }, u = function (t) {
    var e = [];
    if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
      e = s(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function (e) {
        try {
          return new window.ActiveXObject(e), e
        } catch (e) {
          return t.ERROR
        }
      })
    } else e.push(t.NOT_AVAILABLE);
    return navigator.plugins && (e = e.concat(o(t))), e
  }, T = function (e) {
    for (var t = !1, n = 0, a = e.plugins.sortPluginsFor.length; n < a; n++) {
      var r = e.plugins.sortPluginsFor[n];
      if (navigator.userAgent.match(r)) {
        t = !0;
        break
      }
    }
    return t
  }, A = function (t) {
    try {
      return !!window.sessionStorage
    } catch (e) {
      return t.ERROR
    }
  }, v = function (t) {
    try {
      return !!window.localStorage
    } catch (e) {
      return t.ERROR
    }
  }, S = function (t) {
    if (N()) return t.EXCLUDED;
    try {
      return !!window.indexedDB
    } catch (e) {
      return t.ERROR
    }
  }, C = function (e) {
    return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
  }, w = function (e) {
    return navigator.cpuClass || e.NOT_AVAILABLE
  }, B = function (e) {
    return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
  }, y = function (e) {
    return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
  }, t = function () {
    var t, e = 0;
    void 0 !== navigator.maxTouchPoints ? e = navigator.maxTouchPoints : void 0 !== navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
    try {
      document.createEvent("TouchEvent"), t = !0
    } catch (e) {
      t = !1
    }
    return [e, t, "ontouchstart" in window]
  }, E = function (e) {
    var t = [], n = document.createElement("canvas");
    n.width = 2e3, n.height = 200, n.style.display = "inline";
    var a = n.getContext("2d");
    return a.rect(0, 0, 10, 10), a.rect(2, 2, 6, 6), t.push("canvas winding:" + (!1 === a.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), a.textBaseline = "alphabetic", a.fillStyle = "#f60", a.fillRect(125, 1, 62, 20), a.fillStyle = "#069", e.dontUseFakeFontInCanvas ? a.font = "11pt Arial" : a.font = "11pt no-real-font-123", a.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), a.fillStyle = "rgba(102, 204, 0, 0.2)", a.font = "18pt Arial", a.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), a.globalCompositeOperation = "multiply", a.fillStyle = "rgb(255,0,255)", a.beginPath(), a.arc(50, 50, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(0,255,255)", a.beginPath(), a.arc(100, 50, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(255,255,0)", a.beginPath(), a.arc(75, 100, 50, 0, 2 * Math.PI, !0), a.closePath(), a.fill(), a.fillStyle = "rgb(255,0,255)", a.arc(75, 75, 75, 0, 2 * Math.PI, !0), a.arc(75, 75, 25, 0, 2 * Math.PI, !0), a.fill("evenodd"), n.toDataURL && t.push("canvas fp:" + n.toDataURL()), t
  }, x = function () {
    function e(e) {
      return o.clearColor(0, 0, 0, 1), o.enable(o.DEPTH_TEST), o.depthFunc(o.LEQUAL), o.clear(o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT), "[" + e[0] + ", " + e[1] + "]"
    }

    var o;
    if (!(o = U())) return null;
    var l = [], t = o.createBuffer();
    o.bindBuffer(o.ARRAY_BUFFER, t);
    var n = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
    o.bufferData(o.ARRAY_BUFFER, n, o.STATIC_DRAW), t.itemSize = 3, t.numItems = 3;
    var a = o.createProgram(), r = o.createShader(o.VERTEX_SHADER);
    o.shaderSource(r, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), o.compileShader(r);
    var i = o.createShader(o.FRAGMENT_SHADER);
    o.shaderSource(i, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), o.compileShader(i), o.attachShader(a, r), o.attachShader(a, i), o.linkProgram(a), o.useProgram(a), a.vertexPosAttrib = o.getAttribLocation(a, "attrVertex"), a.offsetUniform = o.getUniformLocation(a, "uniformOffset"), o.enableVertexAttribArray(a.vertexPosArray), o.vertexAttribPointer(a.vertexPosAttrib, t.itemSize, o.FLOAT, !1, 0, 0), o.uniform2f(a.offsetUniform, 1, 1), o.drawArrays(o.TRIANGLE_STRIP, 0, t.numItems);
    try {
      l.push(o.canvas.toDataURL())
    } catch (e) {
    }
    l.push("extensions:" + (o.getSupportedExtensions() || []).join(";")), l.push("webgl aliased line width range:" + e(o.getParameter(o.ALIASED_LINE_WIDTH_RANGE))), l.push("webgl aliased point size range:" + e(o.getParameter(o.ALIASED_POINT_SIZE_RANGE))), l.push("webgl alpha bits:" + o.getParameter(o.ALPHA_BITS)), l.push("webgl antialiasing:" + (o.getContextAttributes().antialias ? "yes" : "no")), l.push("webgl blue bits:" + o.getParameter(o.BLUE_BITS)), l.push("webgl depth bits:" + o.getParameter(o.DEPTH_BITS)), l.push("webgl green bits:" + o.getParameter(o.GREEN_BITS)), l.push("webgl max anisotropy:" + function (e) {
      var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
      if (t) {
        var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        return 0 === n && (n = 2), n
      }
      return null
    }(o)), l.push("webgl max combined texture image units:" + o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), l.push("webgl max cube map texture size:" + o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE)), l.push("webgl max fragment uniform vectors:" + o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS)), l.push("webgl max render buffer size:" + o.getParameter(o.MAX_RENDERBUFFER_SIZE)), l.push("webgl max texture image units:" + o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS)), l.push("webgl max texture size:" + o.getParameter(o.MAX_TEXTURE_SIZE)), l.push("webgl max varying vectors:" + o.getParameter(o.MAX_VARYING_VECTORS)), l.push("webgl max vertex attribs:" + o.getParameter(o.MAX_VERTEX_ATTRIBS)), l.push("webgl max vertex texture image units:" + o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), l.push("webgl max vertex uniform vectors:" + o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS)), l.push("webgl max viewport dims:" + e(o.getParameter(o.MAX_VIEWPORT_DIMS))), l.push("webgl red bits:" + o.getParameter(o.RED_BITS)), l.push("webgl renderer:" + o.getParameter(o.RENDERER)), l.push("webgl shading language version:" + o.getParameter(o.SHADING_LANGUAGE_VERSION)), l.push("webgl stencil bits:" + o.getParameter(o.STENCIL_BITS)), l.push("webgl vendor:" + o.getParameter(o.VENDOR)), l.push("webgl version:" + o.getParameter(o.VERSION));
    try {
      var s = o.getExtension("WEBGL_debug_renderer_info");
      s && (l.push("webgl unmasked vendor:" + o.getParameter(s.UNMASKED_VENDOR_WEBGL)), l.push("webgl unmasked renderer:" + o.getParameter(s.UNMASKED_RENDERER_WEBGL)))
    } catch (e) {
    }
    return o.getShaderPrecisionFormat && c(["FLOAT", "INT"], function (i) {
      c(["VERTEX", "FRAGMENT"], function (r) {
        c(["HIGH", "MEDIUM", "LOW"], function (a) {
          c(["precision", "rangeMin", "rangeMax"], function (e) {
            var t = o.getShaderPrecisionFormat(o[r + "_SHADER"], o[a + "_" + i])[e];
            "precision" !== e && (e = "precision " + e);
            var n = ["webgl ", r.toLowerCase(), " shader ", a.toLowerCase(), " ", i.toLowerCase(), " ", e, ":", t].join("");
            l.push(n)
          })
        })
      })
    }), V(o), l
  }, O = function () {
    try {
      var e = U(), t = e.getExtension("WEBGL_debug_renderer_info"),
        n = e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL);
      return V(e), n
    } catch (e) {
      return null
    }
  }, M = function () {
    var e = document.createElement("div");
    e.innerHTML = "&nbsp;";
    var t = !(e.className = "adsbox");
    try {
      document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
    } catch (e) {
      t = !1
    }
    return t
  }, P = function () {
    if (void 0 !== navigator.languages) try {
      if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
    } catch (e) {
      return !0
    }
    return !1
  }, b = function () {
    return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
  }, L = function () {
    var e, t = navigator.userAgent.toLowerCase(), n = navigator.oscpu, a = navigator.platform.toLowerCase();
    if (e = 0 <= t.indexOf("windows phone") ? "Windows Phone" : 0 <= t.indexOf("windows") || 0 <= t.indexOf("win16") || 0 <= t.indexOf("win32") || 0 <= t.indexOf("win64") || 0 <= t.indexOf("win95") || 0 <= t.indexOf("win98") || 0 <= t.indexOf("winnt") || 0 <= t.indexOf("wow64") ? "Windows" : 0 <= t.indexOf("android") ? "Android" : 0 <= t.indexOf("linux") || 0 <= t.indexOf("cros") || 0 <= t.indexOf("x11") ? "Linux" : 0 <= t.indexOf("iphone") || 0 <= t.indexOf("ipad") || 0 <= t.indexOf("ipod") || 0 <= t.indexOf("crios") || 0 <= t.indexOf("fxios") ? "iOS" : 0 <= t.indexOf("macintosh") || 0 <= t.indexOf("mac_powerpc)") ? "Mac" : "Other", ("ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) && "Windows" !== e && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e && -1 === t.indexOf("cros")) return !0;
    if (void 0 !== n) {
      if (0 <= (n = n.toLowerCase()).indexOf("win") && "Windows" !== e && "Windows Phone" !== e) return !0;
      if (0 <= n.indexOf("linux") && "Linux" !== e && "Android" !== e) return !0;
      if (0 <= n.indexOf("mac") && "Mac" !== e && "iOS" !== e) return !0;
      if ((-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e)) return !0
    }
    return 0 <= a.indexOf("win") && "Windows" !== e && "Windows Phone" !== e || ((0 <= a.indexOf("linux") || 0 <= a.indexOf("android") || 0 <= a.indexOf("pike")) && "Linux" !== e && "Android" !== e || ((0 <= a.indexOf("mac") || 0 <= a.indexOf("ipad") || 0 <= a.indexOf("ipod") || 0 <= a.indexOf("iphone")) && "Mac" !== e && "iOS" !== e || !(0 <= a.indexOf("arm") && "Windows Phone" === e) && (!(0 <= a.indexOf("pike") && 0 <= t.indexOf("opera mini")) && ((a.indexOf("win") < 0 && a.indexOf("linux") < 0 && a.indexOf("mac") < 0 && a.indexOf("iphone") < 0 && a.indexOf("ipad") < 0 && a.indexOf("ipod") < 0) != ("Other" === e) || void 0 === navigator.plugins && "Windows" !== e && "Windows Phone" !== e))))
  }, I = function () {
    var e, t = navigator.userAgent.toLowerCase(), n = navigator.productSub;
    if (0 <= t.indexOf("edge/") || 0 <= t.indexOf("iemobile/")) return !1;
    if (0 <= t.indexOf("opera mini")) return !1;
    if (("Chrome" === (e = 0 <= t.indexOf("firefox/") ? "Firefox" : 0 <= t.indexOf("opera/") || 0 <= t.indexOf(" opr/") ? "Opera" : 0 <= t.indexOf("chrome/") ? "Chrome" : 0 <= t.indexOf("safari/") ? 0 <= t.indexOf("android 1.") || 0 <= t.indexOf("android 2.") || 0 <= t.indexOf("android 3.") || 0 <= t.indexOf("android 4.") ? "AOSP" : "Safari" : 0 <= t.indexOf("trident/") ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== n) return !0;
    var a, r = eval.toString().length;
    if (37 === r && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
    if (39 === r && "Internet Explorer" !== e && "Other" !== e) return !0;
    if (33 === r && "Chrome" !== e && "AOSP" !== e && "Opera" !== e && "Other" !== e) return !0;
    try {
      throw"a"
    } catch (e) {
      try {
        e.toSource(), a = !0
      } catch (e) {
        a = !1
      }
    }
    return a && "Firefox" !== e && "Other" !== e
  }, k = function () {
    var e = document.createElement("canvas");
    return !(!e.getContext || !e.getContext("2d"))
  }, D = function () {
    if (!k()) return !1;
    var e = U(), t = !!window.WebGLRenderingContext && !!e;
    return V(e), t
  }, R = function () {
    return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
  }, N = function () {
    return 2 <= ("msWriteProfilerMark" in window) + ("msLaunchUri" in navigator) + ("msSaveBlob" in navigator)
  }, _ = function () {
    return void 0 !== window.swfobject
  }, F = function () {
    return window.swfobject.hasFlashPlayerVersion("9.0.0")
  }, G = function (t, e) {
    var n = "___fp_swf_loaded";
    window[n] = function (e) {
      t(e)
    };
    var a, r, i = e.fonts.swfContainerId;
    (r = document.createElement("div")).setAttribute("id", a.fonts.swfContainerId), document.body.appendChild(r);
    var o = {onReady: n};
    window.swfobject.embedSWF(e.fonts.swfPath, i, "1", "1", "9.0.0", !1, o, {
      allowScriptAccess: "always",
      menu: "false"
    }, {})
  }, U = function () {
    var e = document.createElement("canvas"), t = null;
    try {
      t = e.getContext("webgl") || e.getContext("experimental-webgl")
    } catch (e) {
    }
    return t = t || null
  }, V = function (e) {
    var t = e.getExtension("WEBGL_lose_context");
    null != t && t.loseContext()
  }, H = [{
    key: "userAgent", getData: function (e) {
      e(navigator.userAgent)
    }
  }, {
    key: "webdriver", getData: function (e, t) {
      e(null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver)
    }
  }, {
    key: "language", getData: function (e, t) {
      e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || t.NOT_AVAILABLE)
    }
  }, {
    key: "colorDepth", getData: function (e, t) {
      e(window.screen.colorDepth || t.NOT_AVAILABLE)
    }
  }, {
    key: "deviceMemory", getData: function (e, t) {
      e(navigator.deviceMemory || t.NOT_AVAILABLE)
    }
  }, {
    key: "pixelRatio", getData: function (e, t) {
      e(window.devicePixelRatio || t.NOT_AVAILABLE)
    }
  }, {
    key: "hardwareConcurrency", getData: function (e, t) {
      e(C(t))
    }
  }, {
    key: "screenResolution", getData: function (e, t) {
      e(r(t))
    }
  }, {
    key: "availableScreenResolution", getData: function (e, t) {
      e(i(t))
    }
  }, {
    key: "timezoneOffset", getData: function (e) {
      e((new Date).getTimezoneOffset())
    }
  }, {
    key: "timezone", getData: function (e, t) {
      window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone || t.NOT_AVAILABLE) : e(t.NOT_AVAILABLE)
    }
  }, {
    key: "sessionStorage", getData: function (e, t) {
      e(A(t))
    }
  }, {
    key: "localStorage", getData: function (e, t) {
      e(v(t))
    }
  }, {
    key: "indexedDb", getData: function (e, t) {
      e(S(t))
    }
  }, {
    key: "addBehavior", getData: function (e) {
      e(!!window.HTMLElement.prototype.addBehavior)
    }
  }, {
    key: "openDatabase", getData: function (e) {
      e(!!window.openDatabase)
    }
  }, {
    key: "cpuClass", getData: function (e, t) {
      e(w(t))
    }
  }, {
    key: "platform", getData: function (e, t) {
      e(B(t))
    }
  }, {
    key: "doNotTrack", getData: function (e, t) {
      e(y(t))
    }
  }, {
    key: "plugins", getData: function (e, t) {
      R() ? t.plugins.excludeIE ? e(t.EXCLUDED) : e(u(t)) : e(o(t))
    }
  }, {
    key: "canvas", getData: function (e, t) {
      k() ? e(E(t)) : e(t.NOT_AVAILABLE)
    }
  }, {
    key: "webgl", getData: function (e, t) {
      D() ? e(x()) : e(t.NOT_AVAILABLE)
    }
  }, {
    key: "webglVendorAndRenderer", getData: function (e) {
      D() ? e(O()) : e()
    }
  }, {
    key: "adBlock", getData: function (e) {
      e(M())
    }
  }, {
    key: "hasLiedLanguages", getData: function (e) {
      e(P())
    }
  }, {
    key: "hasLiedResolution", getData: function (e) {
      e(b())
    }
  }, {
    key: "hasLiedOs", getData: function (e) {
      e(L())
    }
  }, {
    key: "hasLiedBrowser", getData: function (e) {
      e(I())
    }
  }, {
    key: "touchSupport", getData: function (e) {
      e(t())
    }
  }, {
    key: "fonts", getData: function (e, t) {
      var u = ["monospace", "sans-serif", "serif"],
        d = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
      if (t.fonts.extendedJsFonts) {
        d = d.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"])
      }
      d = (d = d.concat(t.fonts.userDefinedFonts)).filter(function (e, t) {
        return d.indexOf(e) === t
      });

      function f() {
        var e = document.createElement("span");
        return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmmmmmmmmmlli", e
      }

      function n(e) {
        for (var t = !1, n = 0; n < u.length; n++) if (t = e[n].offsetWidth !== i[u[n]] || e[n].offsetHeight !== o[u[n]]) return t;
        return t
      }

      var a = document.getElementsByTagName("body")[0], r = document.createElement("div"),
        g = document.createElement("div"), i = {}, o = {}, l = function () {
          for (var e = [], t = 0, n = u.length; t < n; t++) {
            var a = f();
            a.style.fontFamily = u[t], r.appendChild(a), e.push(a)
          }
          return e
        }();
      a.appendChild(r);
      for (var s = 0, c = u.length; s < c; s++) i[u[s]] = l[s].offsetWidth, o[u[s]] = l[s].offsetHeight;
      var h = function () {
        for (var e, t, n, a = {}, r = 0, i = d.length; r < i; r++) {
          for (var o = [], l = 0, s = u.length; l < s; l++) {
            var c = (e = d[r], t = u[l], n = void 0, (n = f()).style.fontFamily = "'" + e + "'," + t, n);
            g.appendChild(c), o.push(c)
          }
          a[d[r]] = o
        }
        return a
      }();
      a.appendChild(g);
      for (var m = [], p = 0, T = d.length; p < T; p++) n(h[d[p]]) && m.push(d[p]);
      a.removeChild(g), a.removeChild(r), e(m)
    }, pauseBefore: !0
  }, {
    key: "fontsFlash", getData: function (t, e) {
      return _() ? F() ? e.fonts.swfPath ? void G(function (e) {
        t(e)
      }, e) : t("missing options.fonts.swfPath") : t("flash not installed") : t("swf object not loaded")
    }, pauseBefore: !0
  }, {
    key: "audio", getData: function (n, e) {
      var t = e.audio;
      if (t.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return n(e.EXCLUDED);
      var a = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (null == a) return n(e.NOT_AVAILABLE);
      var r = new a(1, 44100, 44100), i = r.createOscillator();
      i.type = "triangle", i.frequency.setValueAtTime(1e4, r.currentTime);
      var o = r.createDynamicsCompressor();
      c([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", .25]], function (e) {
        void 0 !== o[e[0]] && "function" == typeof o[e[0]].setValueAtTime && o[e[0]].setValueAtTime(e[1], r.currentTime)
      }), i.connect(o), o.connect(r.destination), i.start(0), r.startRendering();
      var l = setTimeout(function () {
        return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/fingerprintjs/fingerprintjs with your user agent: "' + navigator.userAgent + '".'), r.oncomplete = function () {
        }, r = null, n("audioTimeout")
      }, t.timeout);
      r.oncomplete = function (e) {
        var t;
        try {
          clearTimeout(l), t = e.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function (e, t) {
            return e + Math.abs(t)
          }, 0).toString(), i.disconnect(), o.disconnect()
        } catch (e) {
          return void n(e)
        }
        n(t)
      }
    }
  }, {
    key: "enumerateDevices", getData: function (t, e) {
      if (!n()) return t(e.NOT_AVAILABLE);
      navigator.mediaDevices.enumerateDevices().then(function (e) {
        t(e.map(function (e) {
          return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
        }))
      }).catch(function (e) {
        t(e)
      })
    }
  }];
  return a.get = function (n, a) {
    (function (e, t) {
      if (null == t) return;
      var n, a;
      for (a in t) null == (n = t[a]) || Object.prototype.hasOwnProperty.call(e, a) || (e[a] = n)
    })(n = a ? n || {} : (a = n, {}), e), n.components = n.extraComponents.concat(H);
    var r = {
      data: [], addPreprocessedComponent: function (e, t) {
        "function" == typeof n.preprocessor && (t = n.preprocessor(e, t)), r.data.push({key: e, value: t})
      }
    }, i = -1, o = function (e) {
      if ((i += 1) >= n.components.length) a(r.data); else {
        var t = n.components[i];
        if (n.excludes[t.key]) o(!1); else {
          if (!e && t.pauseBefore) return --i, void setTimeout(function () {
            o(!0)
          }, 1);
          try {
            t.getData(function (e) {
              r.addPreprocessedComponent(t.key, e), o(!1)
            }, n)
          } catch (e) {
            r.addPreprocessedComponent(t.key, String(e)), o(!1)
          }
        }
      }
    };
    o(!1)
  }, a.getPromise = function (n) {
    return new Promise(function (e, t) {
      a.get(n, e)
    })
  }, a.getV18 = function (i, o) {
    return null == o && (o = i, i = {}), a.get(i, function (e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var a = e[n];
        if (a.value === (i.NOT_AVAILABLE || "not available")) t.push({
          key: a.key,
          value: "unknown"
        }); else if ("plugins" === a.key) t.push({
          key: "plugins", value: s(a.value, function (e) {
            var t = s(e[2], function (e) {
              return e.join ? e.join("~") : e
            }).join(",");
            return [e[0], e[1], t].join("::")
          })
        }); else if (-1 !== ["canvas", "webgl"].indexOf(a.key) && Array.isArray(a.value)) t.push({
          key: a.key,
          value: a.value.join("~")
        }); else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(a.key)) {
          if (!a.value) continue;
          t.push({key: a.key, value: 1})
        } else a.value ? t.push(a.value.join ? {key: a.key, value: a.value.join(";")} : a) : t.push({
          key: a.key,
          value: a.value
        })
      }
      var r = l(s(t, function (e) {
        return e.value
      }).join("~~~"), 31);
      o(r, t)
    })
  }, a.x64hash128 = l, a.VERSION = "2.1.4", a
});

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

  Object.defineProperty(String.prototype, 'hashCode', {
    value: function() {
      let hash = 0, i, chr;
      for (i = 0; i < this.length; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    }
  });
})(window);

;( function( window, document )
{
  'use strict';

  window.PX.securityServerApi = 'http://localhost:8080/api/v1';

}( window, document ) );

;( function( window, document )
{
  'use strict';

  console.log('=i am findgerpint_module');
  // XMLHttpRequest.prototype.open = (e) => {
  //   console.log('=2e', e);
  //   const res = o.apply(this, arguments);
  //   this.setRequestHeader('Fingerprint', 'test');
  //   return res;
  // };

  setTimeout( () => {
    Fingerprint2.get((components) => {
      window.PX.settings.fingerprint = sha256(JSON.stringify(components));
      XMLHttpRequest.prototype.origOpen = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open   = function () {
        this.origOpen.apply(this, arguments);
        this.setRequestHeader('Fingerprint', window.PX.settings.fingerprint);
      };
    })
  }, 1000);

}( window, document ) );

;( function( window, document )
{
  'use strict';

  console.log('==i am logging module');
  let proxied = window.XMLHttpRequest.prototype.send;
  window.XMLHttpRequest.prototype.send = function() {
    //Here is where you can add any code to process the request.
    //If you want to pass the Ajax request object, pass the 'pointer' below
    let pointer = this;
    let intervalId = window.setInterval(function(){
      if (pointer.readyState !== 4){
        return;
      }

      setTimeout(() => {
        console.log('==test_fetch');
        fetch(window.PX.securityServerApi)
          .then(res => console.log('==res', res));
      }, 3000);

      console.log('XXX', pointer.responseText );
      //Here is where you can add any code to process the response.
      //If you want to pass the Ajax request object, pass the 'pointer' below
      clearInterval(intervalId);

    }, 1);//I found a delay of 1 to be sufficient, modify it as you need.
    return proxied.apply(this, [].slice.call(arguments));
  };

}( window, document ) );

;( function( window, document )
{
  'use strict';

  const minWidth = 150;
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  const devToolsDetect = () => {
    if ((windowWidth - window.innerWidth >= minWidth) || (windowHeight - window.innerHeight >= minWidth)) {
      console.log('%c%s', 'font-size: 64px; line-height: 70px; font-weight: bold; color: red;', 'Стоп!');
      console.log('%c%s', 'font-size: 30px; line-height: 36px; font-weight: bold;', 'Если вас попросили скопировать/вставить что-то сюда, 11 шансов из 10, что вы жертва мошенников.');
      console.log('%c%s', 'font-size: 30px; line-height: 36px; font-weight: bold; color: red;', 'Ввод информации в эту панель может дать мошенникам доступ к вашей учётной записи');
      window.removeEventListener('resize', devToolsDetect);
      swal ( 'Будьте осторожны!', 'Ввод информации в эту панель может дать мошенникам доступ к вашей учётной записи.', 'error');
    } else {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
    }
  };

  window.addEventListener('resize', devToolsDetect);

}( window, document ) );
