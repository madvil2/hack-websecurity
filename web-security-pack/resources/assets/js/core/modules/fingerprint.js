;(function (window, document) {
  'use strict';

  const options = {
    excludes: {
      localStorage: true,
    }
  };
  setInterval(() => {
    Fingerprint2.get(options, (components) => {
      window.PX.settings.envComponents = components;
      window.PX.settings.fingerprint = sha256(JSON.stringify(components));
      // XMLHttpRequest.prototype.origOpen = XMLHttpRequest.prototype.open;
      // XMLHttpRequest.prototype.open = function () {
      //   this.origOpen.apply(this, arguments);
      //   // this.setRequestHeader('Fingerprint', window.PX.settings.fingerprint);
      // };
    })
  }, 700);

}(window, document));
