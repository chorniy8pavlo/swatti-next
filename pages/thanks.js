import Head from 'next/head'
import React, { Component } from "react";
import Slider from "react-slick";
import ReactDOM from 'react-dom';
import {HeaderTemplate} from '../templates/header'
import classes from '../styles/thanks.module.css'


export class SimpleSlider extends Component {
  render() {
    const settings = {
		slidesToShow: 3,
	arrows: true,
	prevArrow: <span id="previous_arrow"></span>,
	nextArrow: <span id="next_arrow"></span>,
	 responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
    };
    return (
        <Slider {...settings}>
        <div className={classes.single_product}>
		<span className={'slider_arrow previous_arrow'}></span>
		  	<div>	
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description} >
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div  className={classes.price}>
						<p>Ціна</p>
						<p>695грн</p>
					</div>
					<a href="" className={classes.buy + ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description} >
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div  className={classes.price}>
						<p>Ціна</p>
						<p>695грн</p>
					</div>
					<a href="" className={classes.buy + ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description} >
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div  className={classes.price}>
						<p>Ціна</p>
						<p>695грн</p>
					</div>
					<a href="" className={classes.buy + ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description} >
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div  className={classes.price}>
						<p>Ціна</p>
						<p>695грн</p>
					</div>
					<a href="" className={classes.buy + ' main_button'}>купити</a>
					<a href="" >Який мій розмір?</a>
				</div>
			</div>
		</div>
				
        </Slider>
    );
  }
}

export default function Index() {
	return(<HeaderTemplate>
		   	<Head>
      <title>Thanks page</title>
    </Head>
		   <section className={classes.banner} style={{backgroundImage:"url('http://localhost:3000/women_thanks_page.jpg')"}}>
		   	<div className={classes.content}>
		   <a>Відкрити instagram<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M1.87488 2.04137C-0.482617 4.49012 -0.000117138 7.09137 -0.000117138 14.9939C-0.000117138 21.5564 -1.14512 28.1351 4.84738 29.6839C6.71863 30.1651 23.2986 30.1651 25.1674 29.6814C27.6624 29.0376 29.6924 27.0139 29.9699 23.4851C30.0086 22.9926 30.0086 7.00387 29.9686 6.50137C29.6736 2.74262 27.3599 0.576369 24.3111 0.137619C23.6124 0.036369 23.4724 0.00636903 19.8874 0.00011903C7.17113 0.00636903 4.38363 -0.559881 1.87488 2.04137Z" fill="url(#paint0_linear)"/>
<path d="M14.9975 3.92378C10.4588 3.92378 6.14876 3.52003 4.50251 7.74503C3.82251 9.49003 3.92126 11.7563 3.92126 15.0013C3.92126 17.8488 3.83001 20.525 4.50251 22.2563C6.14501 26.4838 10.49 26.0788 14.995 26.0788C19.3413 26.0788 23.8225 26.5313 25.4888 22.2563C26.17 20.4938 26.07 18.2613 26.07 15.0013C26.07 10.6738 26.3088 7.88003 24.21 5.78253C22.085 3.65753 19.2113 3.92378 14.9925 3.92378H14.9975ZM14.005 5.92003C23.4725 5.90503 24.6775 4.85253 24.0125 19.4738C23.7763 24.645 19.8388 24.0775 14.9988 24.0775C6.17376 24.0775 5.92001 23.825 5.92001 14.9963C5.92001 6.06503 6.62001 5.92503 14.005 5.91753V5.92003ZM20.91 7.75878C20.1763 7.75878 19.5813 8.35378 19.5813 9.08753C19.5813 9.82128 20.1763 10.4163 20.91 10.4163C21.6438 10.4163 22.2388 9.82128 22.2388 9.08753C22.2388 8.35378 21.6438 7.75878 20.91 7.75878ZM14.9975 9.31253C11.8563 9.31253 9.31001 11.86 9.31001 15.0013C9.31001 18.1425 11.8563 20.6888 14.9975 20.6888C18.1388 20.6888 20.6838 18.1425 20.6838 15.0013C20.6838 11.86 18.1388 9.31253 14.9975 9.31253ZM14.9975 11.3088C19.8788 11.3088 19.885 18.6938 14.9975 18.6938C10.1175 18.6938 10.11 11.3088 14.9975 11.3088Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear" x1="1.93241" y1="28.084" x2="29.8142" y2="3.95259" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDD55"/>
<stop offset="0.5" stop-color="#FF543E"/>
<stop offset="1" stop-color="#C837AB"/>
</linearGradient>
<clipPath id="clip0">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg></a>
<svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M101.998 14.3547C100.453 12.8074 97.9468 12.8047 96.4021 14.3481L48.928 61.697L31.7994 43.0937C30.3194 41.4871 27.817 41.383 26.2078 42.8628C24.5998 44.3429 24.4968 46.8465 25.9769 48.4545L45.8953 70.0863C46.6247 70.8791 47.6456 71.3395 48.7221 71.3619C48.751 71.3631 48.7789 71.3631 48.8066 71.3631C49.8527 71.3631 50.859 70.9476 51.6003 70.209L101.99 19.9515C103.538 18.4083 103.541 15.902 101.998 14.3547Z" fill="#E1C69E"/>
<path d="M101.043 48.5426C98.8569 48.5426 97.0854 50.3141 97.0854 52.5C97.0854 77.0854 77.0854 97.0854 52.5 97.0854C27.9161 97.0854 7.91458 77.0854 7.91458 52.5C7.91458 27.9161 27.9161 7.91458 52.5 7.91458C54.6857 7.91458 56.4574 6.14312 56.4574 3.95739C56.4574 1.77146 54.6857 0 52.5 0C23.5512 0 0 23.5512 0 52.5C0 81.4476 23.5512 105 52.5 105C81.4476 105 105 81.4476 105 52.5C105 50.3143 103.229 48.5426 101.043 48.5426Z" fill="#E1C69E"/>
</svg>
		   <h1>Дякуємо за ваш час <br/>
очікуйте дзвінка оператора :) </h1>
	<div className={classes.buttons_container}><a className="main_button">продовжити покупки</a>
	<a className={classes.transparent_button}>дізнатись про новинки</a>
	</div>
		   </div>
		   </section>	
		   <section className={classes.main_collections + ' container'}>
			<div className={classes.top_bar}>
				<h2>Ви також можете замовити </h2>
				<div className={classes.changer} >
					<span className={classes.prev}>
						<svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z" fill="#1E1D1D" />
						</svg>
					</span>
					<div className={classes.counter} >
						<span className="current_val">01</span> / <span className="all_val">04</span>
					</div>
					<span id="product_next_arrow" className={classes.next}>
						<svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z" fill="#1E1D1D" />
						</svg>
					</span>
				</div>
			</div>
			<div className={""} id="main_product_slider">
						   <SimpleSlider></SimpleSlider>
			</div>
		</section>
	</HeaderTemplate>)
}
