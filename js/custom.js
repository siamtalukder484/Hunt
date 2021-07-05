$(function(){

  
//bottom to top buttom
$('.bottom-to-top').click(function(){
  $('html, body').animate({scrollTop:0},2000);
});

$(window).scroll(function(){
  var bottom_to_top = $(this).scrollTop();
  if(bottom_to_top > 100){
    $('.bottom-to-top').fadeIn(500);
  }
  else {
    $('.bottom-to-top').fadeOut(500);
  }

});


//banner slider
$('.bannar-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  prevArrow: '.b-slide-prev',
  nextArrow: '.b-slide-next',
  speed:2000,
  fade: true,
  fadeIn: 500,
  fadeOut: 500,
  autoplaySpeed: 3000,
});


  //portfolio part img slider
$('.port-item-main').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  speed: 1500,
});




//service part vertical slider
$('.service-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  dots: false,
  arrows: true,
  prevArrow: '.service-top-array',
  nextArrow: '.service-bottom-array',
  autoplay: false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
  speed: 1000,
});

//testimonial part vertical slider
$('.testimonial-slider-img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  dots: false,
  centerMode: true,
  centerPadding: '0px',
  arrows: true,
  prevArrow: '.testi-top-array',
  nextArrow: '.testi-bottom-array',
  asNavFor: '.testimonial-details-slider'
});
$('.testimonial-details-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  dots: false,
  arrows: false,
  asNavFor: '.testimonial-slider-img',
});


//counter
$('.counter').counterUp({
  delay: 3,
  time: 2000,
});


//our team part venobox activation
$('.venobox').venobox(); 

//our team part slider
$('.team-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  speed: 2500,
  autoplay: true,
  autoplaySpeed: 4000,
});


//brand part slider
$('.brand-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0px',
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed:1500,
});




});