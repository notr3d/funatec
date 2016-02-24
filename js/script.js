$(document).ready(function(){
	$('#all').click(function(){
		$('.products__item').slideDown();
	});
	$('#pedals').click(function(){
		$('.products__item').filter('.pedals').slideDown();
		$('.products__item').filter(':not(.pedals)').slideUp();
	});
	$('#wheel').click(function(){
		$('.products__item').filter('.wheel').slideDown();
		$('.products__item').filter(':not(.wheel)').slideUp();
	});
	$('#mount').click(function(){
		$('.products__item').filter('.mount').slideDown();
		$('.products__item').filter(':not(.mount)').slideUp();
	});
	$('#shifter').click(function(){
		$('.products__item').filter('.shifter').slideDown();
		$('.products__item').filter(':not(.shifter)').slideUp();
	});
	
  $('.main-slider__wrapper').slick({
		autoplay:true,
		dots:true,
		arrows:false,
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
		autoplaySpeed:10000,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},            
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
  });
});

{

    var myCenter=new google.maps.LatLng(54.212117, 37.646803);

    function initialize(){
        var mapProp = {
            center:myCenter,
            zoom:16,
					  scrollwheel:false,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };

        var map=new google.maps.Map(document.getElementById("map"), mapProp);

        var marker=new google.maps.Marker({
            position:myCenter,
            icon:'../img/page-logo.png',
            size: new google.maps.Size(20, 32)
        });

        marker.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

};