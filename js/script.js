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

    $('.menu .link-btn a').click(
      function() {
        $('.form').toggle();
      }
    );

    $('.form button').click(
      function() {
        var nome = $('.nome input').val();
        var eta = $('.eta select').val();
        var mail = $('.mail input').val();

        var messaggioStandard = 'Ciao ' + nome + ', ti sarà inviata una mail a questo indirizzo: ' + mail +'.<br>';
        var messaggioEta = 'Essendo maggiorenne, hai diritto ad un mese di prova gratuita'
        if ( eta === 'minorenne' ) {
        messaggioEta = 'Essendo minorenne, hai diritto ad un 20% su ogni prodotto, fino al 30 di questo mese.'
        }
        $('.lista-registrati ul').append(messaggioStandard + messaggioEta + '. <br>Benvenuto a bordo!')
      }
    );

  }
);
