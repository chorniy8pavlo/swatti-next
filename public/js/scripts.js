window.addEventListener('popstate', function (event) {
//alert('hello')
});
$(window).scroll(function () {
      if ($(this).scrollTop() > 10) {
        $('header').addClass("scrolled");
        // $(".header-main div.line-block").remove();
      } else {
        $('header').removeClass("scrolled");
      }
    });


$('body').on('click','.faq_question__3m1-n h3', function () {
	$(this).parent().find('.faq_answer__2we-N').slideToggle();
})
//header
$('body').on('click','.burger', function () {
	$('header .main_menu').toggleClass('active');
	$('header ').toggleClass('opened');
	$(this).toggleClass('active');
});
$('body').on('click','.cart', function (e) {
	e.preventDefault();
	$('header .cart_pop_up').toggleClass('active');
});
setTimeout(function(){
//$('#customers_slider').slick({
//	slidesToShow: 4,
//	slidesToScroll: 1,
//	infinite: false,
//	arrows: true,
//	prevArrow: <span id="hrh"></span>,
//	nextArrow: <span></span>,
//});

},500)
if ($(window).width() < 992) {
		setTimeout(function(){
			$('#slider_mobile').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				speed: 600,
				responsive: [
					{
						breakpoint: 768,
						settings: {
						slidesToShow: 1
						}
					}
				]
			});
		},500)

	}
setTimeout(function(){
	$('#customers_slider').slick({
			slidesToShow: 4,
	arrows: true,
	prevArrow:'<span class="previous_arrow"></span>',
	nextArrow:'<span class="next_arrow"></span>',
	 responsive: [
		{
		  breakpoint: 1300,
		  settings: {
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 2
		  }
		},
	 {
		  breakpoint: 700,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
	});
	$('#photos_slider').slick({
			slidesToShow: 4,
	arrows: false,
		slidesToScroll:4,
	 responsive: [
		{
		  breakpoint: 1300,
		  settings: {
			slidesToShow: 3,
			  slidesToScroll:3,
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 2,
			  slidesToScroll:2,
		  }
		},
	 {
		  breakpoint: 700,
		  settings: {
			slidesToShow: 1,
			  slidesToScroll:1,
		  }
		}
	  ]
	});
	if ($(window).width()>1920) {
	if(Math.trunc($('#customers_slider .slick-slide:not(.slick-cloned)').length/4)+1<10){
	$('.main_customers_main_customers__1ouQ3 .all_val').text('0' + (Math.trunc($('#customers_slider .slick-slide:not(.slick-cloned)').length/4)+1));
	}
	} if($(window).width() < 1300) {
		if(Math.trunc($('#customers_slider .slick-slide:not(.slick-cloned)').length/3)+1<10){
	$('.main_customers_main_customers__1ouQ3 .all_val').text('0' + (Math.trunc($('#customers_slider .slick-slide:not(.slick-cloned)').length/3)+1));
	}
	}
},500)
$('body').on('click','.main_main_photos__1gkmM .main_next__2S_Qf',function(){
	$('#photos_slider').slick('slickNext');
});
$('body').on('click','.main_main_photos__1gkmM .main_prev__g9u16',function(){
	$('#photos_slider').slick('slickPrev');
});
$('body').on('click','.main_customers_main_customers__1ouQ3 .main_customers_next__2yu7p',function(){
	let current=parseInt($('.main_customers_main_customers__1ouQ3 .current_val').text());
	let all=parseInt($('.main_customers_main_customers__1ouQ3 .all_val').text());
	$('#customers_slider').slick('slickSetOption', {
		slidesToScroll: 4,
	});
	if ($(window).width() < 1300) {
		$('#customers_slider').slick('slickSetOption', {
		slidesToScroll: 3,
	});
	}
	if(current<all){
		$('.main_customers_main_customers__1ouQ3 .current_val').text('0' + (current + 1));
	}
	else{
		$('.main_customers_main_customers__1ouQ3 .current_val').text('01');
	}
	$('.main_customers_main_customers__1ouQ3 .all_val').text('0' + (Math.trunc($('#customers_slider .slick-slide:not(.slick-cloned)').length/4)+1))
	$('#customers_slider').slick('slickNext');
	$('#customers_slider').slick('slickSetOption', {
		slidesToScroll: 1,
	});
});
$('body').on('click','.main_customers_main_customers__1ouQ3 .main_customers_prev__3bT7d',function(){
	let current=parseInt($('.main_customers_main_customers__1ouQ3 .current_val').text());
	let all=parseInt($('.main_customers_main_customers__1ouQ3 .all_val').text());
	$('#customers_slider').slick('slickSetOption', {
		slidesToScroll: 4,
	});
	if(current>1){
		$('.main_customers_main_customers__1ouQ3 .current_val').text('0' + (current - 1));
	}
	else{
		$('.main_customers_main_customers__1ouQ3 .current_val').text('0' + all);
	}
	$('.main_customers_main_customers__1ouQ3 .all_val').text('0' + (Math.trunc($('#customers_slider .slick-slide:not(.slick-cloned)').length/4)+1))
	$('#customers_slider').slick('slickPrev');
	$('#customers_slider').slick('slickSetOption', {
		slidesToScroll: 1,
	});
});

//let counter=$('.main_collections_main_collections__3Vfip .main_collections_navigation__Idp8u p');
//		$('.main_collections_main_collections__3Vfip .all_val').text('0' + counter.length);
//
//$('body .main_collections_next__1C7Yw').on('DOMSubtreeModified',function(){
//		console.log('hello');
//	return false;
//});
//		$('.main_collections_next__1C7Yw').one('click', function () {
//			console.log('hello');
//		});
//	}

//});







$(document).ready(function() {
		(function () {

	var youtube = document.querySelectorAll("#youtube");

	for (var i = 0; i < youtube.length; i++) {

		var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

		var image = new Image();
		image.src = source;
		image.addEventListener("load", function () {
			youtube[i].appendChild(image);
		}(i));

		youtube[i].addEventListener("click", function () {

			var iframe = document.createElement("iframe");

			iframe.setAttribute("frameborder", "0");
			iframe.setAttribute("allowfullscreen", "");
			iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

			this.innerHTML = "";
			this.appendChild(iframe);
		});
	};

})();
});
//setTimeout(function(){

//$('div[data-slider="3"]').slick({
//	infinite: false,
//	slidesToShow: 4,
//	slidesToScroll: 4,
//	arrows: false,
//	speed: 600,
//	//  asNavFor: '.slider-nav'
//});
//
//	}, 2000);
//});
//
//
//
//
//
//
//
//$('body').on('click', '.main_photos .next', function () {
//	$('.main_photos .photos_slider').slick('slickNext');
//	let current = parseInt($('.main_photos .current_val').text());
//	if (current < Math.trunc($('.main_photos .photos_slider .single_slide').length / 4 + 1)) {
//		$('.main_photos .current_val').text('0' + (current + 1))
//	}
//});
//$('body').on('click', '.main_photos .prev', function () {
//	$('.main_photos .photos_slider').slick('slickPrev');
//	let current = parseInt($('.main_photos .current_val').text());
//	if (current > 1) {
//		$('.main_photos .current_val').text('0' + (current - 1))
//	}
//});
//
//
//
//
//$('.main_customers .all_val').text('0' + Math.trunc($('.main_customers .customers_slider  .single_slide:not(.slick-cloned)').length / 4 + 1));
//$('body').on('click', '.main_customers .next', function () {

//});
//$('body').on('click', '.main_customers .prev', function () {
//	$('.main_customers .customers_slider').slick('slickSetOption', {
//		slidesToScroll: 4,
//	});
//	$('.main_customers .customers_slider').slick('slickPrev');
//	let current = parseInt($('.main_customers .current_val').text());
//	$('.main_customers .customers_slider').slick('slickSetOption', {
//		slidesToScroll: 1,
//	});
//});
//$('.main_customers .customers_slider').on('afterChange', function () {
//	let current_val = parseInt($(this).find('.slick-active').attr('data-slick-index'));
//	$('.main_customers .current_val').text('0' + (Math.trunc((current_val + 1) / 4) + 1));
//	console.log(current_val);
//});
//
//
//
//let navigation_item = $('body .main_collections .navigation p');
//$('.main_collections .all_val').text('0' + navigation_item.length);
//
//(function () {
//
//	var youtube = document.querySelectorAll(".youtube");
//
//	for (var i = 0; i < youtube.length; i++) {
//
//		var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
//
//		var image = new Image();
//		image.src = source;
//		image.addEventListener("load", function () {
//			youtube[i].appendChild(image);
//		}(i));
//
//		youtube[i].addEventListener("click", function () {
//
//			var iframe = document.createElement("iframe");
//
//			iframe.setAttribute("frameborder", "0");
//			iframe.setAttribute("allowfullscreen", "");
//			iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
//
//			this.innerHTML = "";
//			this.appendChild(iframe);
//		});
//	};
//
//})();
//
////faq page
//$('.faq_page .question h3').on('click', function () {
//	$(this).parent('.question').find('.answer').slideToggle();
//	$(this).toggleClass('active');
//})
//
////collections page
//if ($(window).width() < 768) {
//	$('.collection  .product_list').slick({
//		slidesToShow: 1,
//		arrows: true,
//		prevArrow: '<span class="previous_arrow slider_arrow"></span>',
//		nextArrow: '<span class="next_arrow slider_arrow"></span>',
//		//  asNavFor: '.slider-nav'
//	});
//}
////single product


