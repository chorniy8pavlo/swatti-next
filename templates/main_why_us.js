import React, { Component } from "react";
import Slider from "react-slick";
import ReactDOM from 'react-dom';
import Router from 'next/router'
import classes from '../styles/main_why_us.module.css'
Router.events.on('routeChangeComplete', (url) => {
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
		},500)

	}
})
let NextClick=()=>{
$('#slider_mobile').slick('slickNext');
	let count=$('#slider_mobile').find('.slick-current').attr('data-slick-index');
	$('.main_why_us_main_why_us__9nA1t .current_val').text('0' + (parseInt(count) + 1))
}
let PrevClick=()=>{
	let count=$('#slider_mobile').find('.slick-current').attr('data-slick-index');
	$('.main_why_us_main_why_us__9nA1t .current_val').text('0' + (parseInt(count)))
	if(parseInt(count)==0){
		$('.main_why_us_main_why_us__9nA1t .current_val').text('03')
	}
$('#slider_mobile').slick('slickPrev');
}
export function MainWhyUs(){
	return(
		<section className={classes.main_why_us+' container'}>
			<h2>Чому нас обирають</h2>
		<div id="slider_mobile" className={classes.slider_mobile}>
			<div className={classes.wrap}>
				<img src="http://localhost:3000/women_7.jpg" alt=""/>
				<h4>
					тканина "Шовк армані"
				</h4>
				<p>Тканина не сідає, не розтягується та не втрачає колір навіть після багаторазового прання.</p>
			</div>
			<div className={classes.wrap}>
				<img src="http://localhost:3000/women_8.jpg" alt=""/>
				<h4>
					підкреслить твою фігуру
				</h4>
				<p>Довжина бретель регулється – топ буде дивитися на грудях будь-якого розміру, а резинка в поясі шортів забезпечить комфорт.</p>
			</div>
			<div className={classes.wrap}>
				<img src="http://localhost:3000/women_9.jpg" alt=""/>
				<h4>
					вироблено в україні
				</h4>
				<p>Контролюємо якість на рівні. Наші виробництва знаходяться у Львові, Рівному та Новояворівську.</p>
			</div>
		</div>
		<div className={classes.changer} >
					<span className={classes.prev} onClick={PrevClick}>
						<svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z" fill="#1E1D1D" />
						</svg>
					</span>
					<div className={classes.counter} >
						<span className="current_val">01</span> / <span className="all_val">03</span>
					</div>
					<span id="product_next_arrow" className={classes.next} onClick={NextClick}>
						<svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z" fill="#1E1D1D" />
						</svg>
					</span>
				</div>
		</section>
		)
}

		