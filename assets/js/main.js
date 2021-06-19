

$('.selection-currency').change(function(){
    var text = $(this).find('option:selected').text()
    var $aux = $('<select/>').append($('<option/>').text(text))
    $(this).after($aux)
    $(this).width($aux.width())
    $aux.remove()
  }).change()

// AJUSTES TOUCH CAROUSEL-------------------------------------------------------

$(document).ready(function(){
    $('.carousel-movements').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        variableWidth: true,
        autoplaySpeed: 2000,
      });
  });