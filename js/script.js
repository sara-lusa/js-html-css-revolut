$(document).ready(
  function() {

    var menuEvento = $('.menu .with-dropdown');

    // menuEvento.mouseenter(
    //   function() {
    //     $(this).children('.dropdown').addClass('active');
    //   }
    // );

    menuEvento.mouseleave(
      function() {
        $('.dropdown').removeClass('active');
      }
    );

    menuEvento.click(
      function() {
        $(this).children('.dropdown').toggleClass('active');
      }
    );

    var arrowEvento = $('.arrow-down i');

    $('.arrow-down').mouseenter(
      function() {
        arrowEvento.removeClass('fa-angle-down');
        arrowEvento.addClass('fa-angle-up');
      }
    );

    $('.arrow-down').mouseleave(
      function() {
        arrowEvento.removeClass('fa-angle-up');
        arrowEvento.addClass('fa-angle-down');
      }
    );

  }
);
