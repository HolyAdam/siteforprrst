$(function(){

	$('.header-slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img src="img/arrow-left.svg" class="prev-arrow">',
		nextArrow: '<img src="img/arrow-right.svg" class="next-arrow">',
		asNavFor: '.dots'
	})

	$('.dots').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.header-slider',
		margin: 40,
		focusOnSelect: true
	})

	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img src="img/arrow-left.svg" class="prev-arrow">',
		nextArrow: '<img src="img/arrow-right.svg" class="next-arrow">',
		asNavFor: '.surf-mapslider',
		focusOnSelect: true,
		responsive: [
		    {
		      breakpoint: 1101,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 966,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]

	})

	$('.surf-mapslider').slick({
		slidesToShow: 8,
		arrows: false,
		dots: false,
		asNavFor: '.surf-slider',
		focusOnSelect: true,
		responsive: [
		    {
		      breakpoint: 1101,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }

		    },
		    {
		      breakpoint: 966,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }

		    },
		  ]

	})

	$('.travel-slider').slick({
		prevArrow: '<img src="img/arrow-left.svg" class="prev-arrow">',
		nextArrow: '<img src="img/arrow-right.svg" class="next-arrow">'
	})

	$('.sleep-slider').slick({
		prevArrow: '<img src="img/arrow-left.svg" class="prev-arrow">',
		nextArrow: '<img src="img/arrow-right.svg" class="next-arrow">'
	})

	$('.shop-slider').slick({
		prevArrow: '<img src="img/arrow-left.svg" class="prev-arrow">',
		nextArrow: '<img src="img/arrow-right.svg" class="next-arrow">'
	})



	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="star"></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="star"></div></div>').insertAfter('.quantity input');
	$('.quantity').each(function() {
	  var spinner = $(this),
	    input = spinner.find('input[type="number"]'),
	    btnUp = spinner.find('.quantity-up'),
	    btnDown = spinner.find('.quantity-down'),
	    min = input.attr('min'),
	    max = input.attr('max');

	  btnUp.click(function() {
	    var oldValue = parseFloat(input.val());
	    if (oldValue >= max) {
	      var newVal = oldValue;
	    } else {
	      var newVal = oldValue + 1;
	    }
	    spinner.find("input").val(newVal);
	    spinner.find("input").trigger("change");
	  });

	  btnDown.click(function() {
	    var oldValue = parseFloat(input.val());
	    if (oldValue <= min) {
	      var newVal = oldValue;
	    } else {
	      var newVal = oldValue - 1;
	    }
	    spinner.find("input").val(newVal);
	    spinner.find("input").trigger("change");
	  });

	});


/*	let sum = $('.nights').val() * $('.summary').data('night') + $('.guests').val() * $('.summary').data('guest')

	$('.nights').on('change', function() {
		let sum = $('.nights').val() * $('.summary').data('night') + $('.guests').val() * $('.summary').data('guest')
		$('.summary').html(sum + ' ');
	})

	$('.guests').on('change', function() {
		let sum = $('.nights').val() * $('.summary').data('night') + $('.guests').val() * $('.summary').data('guest')
		$('.summary').html(sum + ' ');
	})






	$('.summary').html(sum + ' ');*/

	// 


	$('.quantity-button').on('click', function(){

	var parents = $(this).parents('.section-slider__info');

	 let summ = $('.summary', parents).data('night') * $('.nights', parents).val() + $('.summary', parents).data('guest') * $('.guests', parents).val();

	 $('.summary', parents).html(summ + ' ');

	});

	$('.quantity').each(function() {

	var parents = $(this).parents('.section-slider__info');

	let summ = $('.summary', parents).data('night') * $('.nights', parents).val() + $('.summary', parents).data('guest') * $('.guests', parents).val();

	 $('.summary', parents).html(summ + ' ');

	});


	$('.surfboard-item__circle').on('click', function() {
		$(this).toggleClass('palka')
	})

	new WOW().init();


	$('.menu-btn').on('click', function() {
		$('.header-menu').toggleClass('menu-act')
	})
  
});