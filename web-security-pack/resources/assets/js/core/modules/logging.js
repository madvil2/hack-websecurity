;( function( window, document )
{
  'use strict';

  const sendLog = (pointer) => {
    const token = localStorage.getItem('token');
    const fingerprint = window.PX.settings.fingerprint;
    let UA = null;
    if (window.PX.settings && window.PX.settings.envComponents) {
      UA = window.PX.settings.envComponents.filter((item) => item.key === 'userAgent')[0].value;
    }

    if (UA && fingerprint && token) {
        $.ajax({
          type: 'POST',
          url: window.PX.securityServerApi + 'logs',
          dataType: 'json',
          headers: {
            'User-Token': token,
            'Fingerprint': fingerprint,
          },
          data: {
            'user-agent': UA,
            'log': pointer.responseText,
          },
          success: function (res) {
            console.log('==success', res);
          },
          error: function (request, textStatus, error) {
            console.log('==error', error);
          }
        });
    }
  };

  let proxied = window.XMLHttpRequest.prototype.send;
  window.XMLHttpRequest.prototype.send = function() {
    //Here is where you can add any code to process the request.
    //If you want to pass the Ajax request object, pass the 'pointer' below
    let pointer = this;
    let intervalId = window.setInterval(function(){
      if (pointer.readyState !== 4){
        return;
      }
      // Send the comment to the server.

      //Here is where you can add any code to process the response.
      //If you want to pass the Ajax request object, pass the 'pointer' below
      clearInterval(intervalId);

      sendLog(pointer);

    }, 1);//I found a delay of 1 to be sufficient, modify it as you need.
    return proxied.apply(this, [].slice.call(arguments));
  };

}( window, document ) );
