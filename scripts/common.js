$(window).load(function functionName() {
  $('.loader').fadeOut();

  $(document).ready(function() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 80000,
      values: [0, 25000],
      slide: function(event, ui) {
        $("#amount").html("Rs. " + ui.values[0] + " - Rs. " + ui.values[1]);
      }
    });
    $("#amount").html("Rs. " + $("#slider-range").slider("values", 0) +
      " - Rs. " + $("#slider-range").slider("values", 1));
    $('#slider-range').draggable();
  });
  $('.store-locator-filter .search input').on('focus blur',function(){
    if($(this).parent('.search').hasClass('focused')){
      $(this).parent('.search').removeClass('focused');
    }
    else{
      $(this).parent('.search').addClass('focused');
    }
  });
  $('.store-locator-filter .select-brand,.advance-search .close').on('click',function(){
    if($('.advance-search').hasClass('opened')){
      $('.advance-search').removeClass('opened')
    }
    else{
      $('.advance-search').addClass('opened')
    }
  });
  $('.switch-view input[type="checkbox"]').on('change',function(){
    if($(this).is(":checked")){
      $('.store-locator-view .list-view').hide();
      $('.store-locator-view .map-view').show();
    }
    else{
      $('.store-locator-view .list-view').show();
      $('.store-locator-view .map-view').hide();;
    }
  });
  var flag = true;
  $('.advance-search .btn').on('click',function(){
    $('.advance-search').removeClass('opened')
    $('.select-brand').html('');
    $('.advance-search li').each(function(){
      if($(this).find('input[type="checkbox"]').is(':checked')){
        $('.select-brand').append('<span class="tag">'+ $(this).find('label span').html() +' </span>')
        flag = false;
      }
    });
    if(flag){
      $('.select-brand').html('Select Brand');
    }
  })
  $('.review-analysis,.prod-addons>header .back').on('click',function(){
    if($(this).parents('.product').find('.prod-addons').hasClass('active')){
      $('.prod-addons').removeClass('active')
    }
    else{
      $('.prod-addons').removeClass('active');
      $(this).parents('.product').find('.prod-addons').addClass('active')
    }
  })
});


// navigation
$('.close-nav').on('click', function() {
  navTl.reverse().timeScale( 2 );
})
$('.toggle-btn').on('click', function() {
  if ($('this').hasClass('opened')) {
    $('this').removeClass('opened')
    navTl.reverse().timeScale( 2 );
  } else {
    $('this').removeClass('opened');
    navTl.play().timeScale( 1 );
  }
});
// navigation timeline
var navTl = new TimelineMax({
  paused: true
});
navTl.from('.close-nav', .25, {
    // x: 100,
    autoAlpha: 0,
  })
  .from('.nav', .25, {
    x: '100%',
    autoAlpha: 0,
  },'-=.25')
  .staggerFrom('.nav li', .5, {
    y: 50,
    autoAlpha: 0
  }, .15, '-=.25')


// store locator
$('.store-locator-cnt .store-locator-view > header .back').on('click',function(){
  storelocatorTl.reverse().timeScale(2)
});
$('.search-btn').on('click',function(){
  storelocatorTl.play().timeScale(1)
});

// store locator timeline

var storelocatorTl = new TimelineMax({
  paused: true
});

$(window).load(function(){
  if($(window).width() >=1025 ){
    TweenMax.killAll();
  }
  else{
    storelocatorTl.from('.store-locator-view',.25,{
      y: '100%',
      autoAlpha: 0,
    })
    .from('.store-locator-view main header',.25,{
      y:100
    })
    .staggerFrom('.store-locator-cnt .store-locator-view > main .list > ul > li',.5,{
      autoAlpha: 0,
      y:100,
      ease: Back.EaseOut
    },.10)
  }
});
