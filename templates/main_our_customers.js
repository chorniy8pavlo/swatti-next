import React, { Component } from "react";
import Slider from "react-slick";
import ReactDOM from 'react-dom';
import Router from 'next/router'
import classes from '../styles/main_customers.module.css'
Router.events.on('routeChangeComplete', (url) => {
	setTimeout(function(){
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
		$('.main_customers_main_customers__1ouQ3 .all_val').text('0' + (Math.trunc($('#customers_slider .slick-slide:not(.slick-cloned)').length/4)+1))
},500)
})
export function MainCustomers(){
	return(
<section className={classes.main_customers+' container'}>
			<div className={classes.nav}>
				<h2>
					Наші клієнти
				</h2>
				<div className={classes.changer}>
					<span className={classes.prev}>
						<svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z" fill="#1E1D1D" />
						</svg>
					</span>
					<div className={classes.counter}>
						<span className="current_val">01</span> / <span className="all_val"></span>
					</div>
					<span className={classes.next}>
						<svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z" fill="#1E1D1D" />
						</svg>
					</span>
				</div>
			</div>
	
			<div id="customers_slider">
				<div className={classes.single_slide}>
						<div></div>
						<img src="" alt=""/>
					</div>
			   <div className={classes.single_slide}>
						<div></div>
						<img src="" alt=""/>
					</div>
			   <div className={classes.single_slide}>
						<div></div>
						<img src="" alt=""/>
					</div>
			   <div className={classes.single_slide}>
						<div></div>
						<img src="" alt=""/>
					</div>
			   <div className={classes.single_slide}>
						<div></div>
						<img src="" alt=""/>
					</div>
				<div className={classes.single_slide}>
						<div></div>
						<img src="" alt=""/>
					</div>
			   <div className={classes.single_slide}>
						<div></div>
						<img src="" alt=""/>
					</div>
			   <div className={classes.single_slide}>
						<div></div>
						<img src="" alt=""/>
					</div>
			   <div className={classes.single_slide}>
						<div></div>
						<img src="" alt=""/>
					</div>
			   <div className={classes.single_slide}>
						<div></div>
						<img src="" alt=""/>
					</div>
			</div>
		</section>
		)
}