$(function(){

  $(".menu a").on("click", function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1500);
  })

  $('.blog-slider__inner').slick({
    arrows: false,
    dots: true,
    centerPadding: "600px",
  })

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active')
  })

  var mixer = mixitup('.gallery__content');

})