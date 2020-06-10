$(document).ready(
  function() {

    var menuEvento = $('.menu .with-dropdown');

    menuEvento.mouseenter(
      function() {
        $(this).children('.dropdown').addClass('active');
      }
    );

    menuEvento.mouseleave(
      function() {
        $('.dropdown').removeClass('active');
      }
    );

    // menuEvento.click(
    //   function() {
    //     $('.dropdown').removeClass('active');
    //   }
    // );

  }
);
