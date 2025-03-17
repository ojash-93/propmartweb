
$(document).ready(function(){
  $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: $('.prev'),
   nextArrow: $('.next'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: true,
            
          }
        },
       
        // instead of a settings object
      ]
    });
});

