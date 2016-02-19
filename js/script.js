$(document).ready(function(){
  $('.main-slider__wrapper').slick({
		autoplay:true,
		dots:true,
		fade:true,
		speed: 500,
		cssEase: 'linear',
		autoplaySpeed:10000
  });
	$('.featured-products__container').slick({
		autoplay:true,
		dots:true,
		slidesToShow:4,
		slidesToScroll:4,
		autoplaySpeed:10000
  });
});