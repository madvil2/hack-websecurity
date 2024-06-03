;( function( window, document )
{
  'use strict';

  if (window.top !== window.self) {
    window.top.location.href = window.self.location.href;
  }
}( window, document ) );
