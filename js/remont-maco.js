// JavaScript Document
	if (document.getElementsByClassName('brands').item(0) != null) {
	$('.brands').slick({
	  infinite: false,
	  swipeToSlide: true,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  zIndex: 0,
	  centerMode: true,
	  variableWidth: true,
	  responsive: [
		{
		  breakpoint: 5920,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows:false,
		  }
		},
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows:false,
			dots: true,
		  }
		},
		{
		  breakpoint: 730,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows:true
		
		  }
		}
	  ]  
	}); //slick
	$('.brands').slick('slickGoTo',1);
	}

if (document.getElementsByClassName('miniPriceDetails').item(0) != null) {
$('.miniPriceDetails').slick({
  swipeToSlide: true,
  zIndex: 0,
  arrows:false,
  infinite: false,
  adaptiveHeight: true,
  adaptiveWidth: true,
  responsive: [
    {
      breakpoint: 5920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true
		
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
		dots: true,
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
		centerMode: true,
		centerPadding: '20px',
		dots: true
      }
    },
	    {
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
		centerMode: true,
		centerPadding: '20px',
		dots: true
      }
    }

  ]  
}); //slick
$('.miniPriceDetails').slick('slickGoTo',1);
}
