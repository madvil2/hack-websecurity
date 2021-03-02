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
