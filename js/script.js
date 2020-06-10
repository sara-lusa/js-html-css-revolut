$(document).ready(
  function() {

    var eventoMenu = $('.menu .with-dropdown');

    eventoMenu.mouseenter(
      function() {
        $('.dropdown').addClass('active');
      }
    );

    eventoMenu.mouseleave(
      function() {
        $('.dropdown').removeClass('active');
      }
    );

    // eventoMenu.click(
    //   function() {
    //     $('.dropdown').removeClass('active');
    //   }
    // );

  }
);
