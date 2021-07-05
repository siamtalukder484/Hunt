$(function(){ 
//bottom to top buttom
$('.bottom-to-top').click(function(){
  $('html, body').animate({scrollTop:0},1500);
});

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 100){
    $('.bottom-to-top').fadeIn(500);
  }
  else {
    $('.bottom-to-top').fadeOut(500);
  }

  if(scrolling > 200){
      $('.nav-top-class').addClass('nav-add-bg');
  }
  else{
      $('.nav-top-class').removeClass('nav-add-bg');
  }
});


//section animation scroll
// $(".nav-item .nav-link").on('click', function(event) {
//   if (this.hash !== "") {
//     event.preventDefault();
//     var hash = this.hash;
//     $('html, body').animate({
//       scrollTop: $(hash).offset().top
//     }, 1500, function(){
//       window.location.hash = hash;
//     });
//   }
// });



// back to top
// $('.back-to-top').click(function(){
//   $('html, body').animate({scrollTop:0},1500);
// });

// $(window).scroll(function(){
//   var scrolling = $(this).scrollTop();
//   if(scrolling > 200){
//       $('.back-to-top').fadeIn(500);
//   }
//   else {
//       $('.back-to-top').fadeOut(500);
//   }

//   if(scrolling > 300){
//       $('.nav').addClass('bg');
//   }
//   else {
//       $('.nav').removeClass('bg');
//   }
// });




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

//Bannar Type JS Part 
$(function(){
  $(".typed").typed({
		strings: ["Designer", "Developers", "Programmer", "Fullstack"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 150,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 50,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: Infinity,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});