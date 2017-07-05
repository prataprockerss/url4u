$(window).load(function(){
  $('.banner').slick({
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows:false,
          dots: true
        }
      }
    ]
  });
  $('.product-list .slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows:false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll:1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow:1,
          slidesToScroll: 1
        }
      },

    ]
  })
  $('.related-products .product-cnt').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows:false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll:1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow:1,
          slidesToScroll: 1
        }
      },

    ]
  })
});
