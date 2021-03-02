;( function( window, document )
{
  'use strict';

  const { send, open } = XMLHttpRequest.prototype;

  let data = null;
  XMLHttpRequest.prototype.send = function (request) {
    const data = JSON.parse(request);
    Object.keys(data).map((key) => {
      data[key] = CryptoJS.HmacSHA1(data[key], PUBLIC_KEY);
      return key;
    });

    send.call(JSON.stringify(data));
  };

  XMLHttpRequest.prototype.open = function () {
    this.addEventListener('readystatechange', function (event) {
      if (this.readyState === 4) {
        open.call(this, arguments);
        this.setRequestHeader('Hmac', data);
      }
    });
  };

}( window, document ) );
