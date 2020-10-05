import React, { Component } from "react";
import Slider from "react-slick";
import classes from '../styles/main_collections.module.css'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Link from 'next/link'

let OnLoadFunc=()=>{
	let counter=document.querySelectorAll('.main_collections_main_collections__3Vfip .main_collections_navigation__Idp8u p');
	$('.main_collections_main_collections__3Vfip .all_val').text('0' + counter.length);
}
let ClickTabs=(e)=>{
	let contents=$('#main_product_slider>div');
    let counter=document.querySelectorAll('.main_collections_main_collections__3Vfip .main_collections_navigation__Idp8u p');
	for(let i=0;i<counter.length;i++){
		if(counter[i].classList.contains('main_collections_active__2kYgc')){
			counter[i].classList.remove('main_collections_active__2kYgc');
			$(e.target).addClass('main_collections_active__2kYgc');
			$(contents[i]).slideUp();
			$(contents[i]).removeClass('main_collections_active__2kYgc');
			
		}
	}
	for(let i=0;i<counter.length;i++){
		if(counter[i].classList.contains('main_collections_active__2kYgc')){
			$(contents[i]).slideDown();
			$(contents[i]).addClass('main_collections_active__2kYgc');
			
		}
	}
}
let NextClick=()=>{
	let contents=$('#main_product_slider>div');
	let k;
	let counter=document.querySelectorAll('.main_collections_main_collections__3Vfip .main_collections_navigation__Idp8u p');
	for(let i=0;i<counter.length;i++){
		if(counter[i].classList.contains('main_collections_active__2kYgc')){
			counter[i].classList.remove('main_collections_active__2kYgc');
			k=i+1;
			$(contents[i]).slideUp();
			$(contents[i]).removeClass('main_collections_active__2kYgc');
		}
	}
	if(k<counter.length){
		counter[k].classList.add('main_collections_active__2kYgc');
		$('.main_collections_main_collections__3Vfip .current_val').text('0' + (k+1));
		$(contents[k]).slideDown();
		$(contents[k]).addClass('main_collections_active__2kYgc');
	}else{
		counter[0].classList.add('main_collections_active__2kYgc');
		$('.main_collections_main_collections__3Vfip .current_val').text('01');
		$(contents[0]).slideDown();
		$(contents[0]).addClass('main_collections_active__2kYgc');

	}
	
}
let PrevClick=()=>{
		let contents=$('#main_product_slider>div');

	let k;
	let counter=document.querySelectorAll('.main_collections_main_collections__3Vfip .main_collections_navigation__Idp8u p');
	for(let i=0;i<counter.length;i++){
		if(counter[i].classList.contains('main_collections_active__2kYgc')){
			counter[i].classList.remove('main_collections_active__2kYgc');
			k=i-1;
			$(contents[i]).slideUp();
		}
	}
	if(k>-1){
		counter[k].classList.add('main_collections_active__2kYgc');
		$('.main_collections_main_collections__3Vfip .current_val').text('0' + (k+1));
		$(contents[k]).slideDown();
		$(contents[k]).addClass('main_collections_active__2kYgc');
	}else{
		counter[counter.length - 1].classList.add('main_collections_active__2kYgc');
		$('.main_collections_main_collections__3Vfip .current_val').text('0' + (counter.length));
		$(contents[counter.length - 1]).slideDown();
		$(contents[counter.length - 1]).addClass('main_collections_active__2kYgc');
	}
}
export default class SimpleSlider extends Component {
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
		<>
        <Slider {...settings} className={classes.active}>
        <div className={classes.single_product}>
		<span className={'slider_arrow previous_arrow'}></span>
		  	<div>	
				<img src="http://localhost:3000/duo_clothes_1.jpg" alt=""/>
				<div className={classes.product_description} >
					<h4>couple look#1</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div  className={classes.price}>
						<p>Ціна</p>
						<p>1249грн</p>
					</div>
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="http://localhost:3000/duo_clothes_2.jpg" alt=""/>
				<div className={classes.product_description} >
					<h4>couple look#2</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div  className={classes.price}>
						<p>Ціна</p>
						<p>1249грн</p>
					</div>
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="http://localhost:3000/duo_clothes_3.jpg" alt=""/>
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
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="http://localhost:3000/duo_clothes_2.jpg" alt=""/>
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
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
				
        </Slider>
		<Slider {...settings}>
        <div className={classes.single_product}>
		<span className={'slider_arrow previous_arrow'}></span>
		  	<div>	
				<img src="http://localhost:3000/women_1.jpg" alt=""/>
				<div className={classes.product_description} >
					<h4>ПІЖАМА avocado 1</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div  className={classes.price}>
						<p>Ціна</p>
						<p>695грн</p>
					</div>
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="http://localhost:3000/women_2.jpg" alt=""/>
				<div className={classes.product_description} >
					<h4>ПІЖАМА avocado 1</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div  className={classes.price}>
						<p>Ціна</p>
						<p>695грн</p>
					</div>
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="http://localhost:3000/women_3.jpg" alt=""/>
				<div className={classes.product_description} >
					<h4>ПІЖАМА avocado 1</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div  className={classes.price}>
						<p>Ціна</p>
						<p>695грн</p>
					</div>
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="http://localhost:3000/women_1.jpg" alt=""/>
				<div className={classes.product_description} >
					<h4>ПІЖАМА avocado 1</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div  className={classes.price}>
						<p>Ціна</p>
						<p>695грн</p>
					</div>
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
				
        </Slider>
		<Slider {...settings}>
        <div className={classes.single_product}>
		<span className={'slider_arrow previous_arrow'}></span>
		  	<div>	
				<img src="http://localhost:3000/women_4.jpg" alt=""/>
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
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="http://localhost:3000/women_5.jpg" alt=""/>
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
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="http://localhost:3000/women_6.jpg" alt=""/>
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
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="http://localhost:3000/women_4.jpg" alt=""/>
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
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
				
        </Slider>
		<Slider {...settings}>
        <div className={classes.single_product}>
		<span className={'slider_arrow previous_arrow'}></span>
		  	<div>	
				<img src="http://localhost:3000/duo_clothes_2.jpg" alt=""/>
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
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="http://localhost:3000/duo_clothes_1.jpg" alt=""/>
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
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.single_product}>
		  	<div>	
				<img src="http://localhost:3000/duo_clothes_3.jpg" alt=""/>
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
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
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
					<Link href="/products/111"><a className={classes.buy + ' main_button'}>купити</a></Link>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
				
        </Slider>
		</>
    );
  }
}
export function MainCollections({children}){
	return(
		<section className={classes.main_collections + ' container'} onLoad={OnLoadFunc}>
			<div className={classes.top_bar}>
				<div className={classes.navigation} >
					<p className={classes.active} onClick={ClickTabs}>Розпродаж</p>
					<p onClick={ClickTabs}>Хiти продажу</p>
					<p onClick={ClickTabs}>Новi моделi</p>
					<p onClick={ClickTabs}>Парні піжами</p>
				</div>
				<div className={classes.changer} >
					<span className={classes.prev} onClick={PrevClick}>
						<svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z" fill="#1E1D1D" />
						</svg>
					</span>
					<div className={classes.counter} >
						<span className="current_val">01</span> / <span className="all_val">04</span>
					</div>
					<span id="product_next_arrow" className={classes.next} onClick={NextClick}>
						<svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z" fill="#1E1D1D" />
						</svg>
					</span>
				</div>
			</div>
			<div className={classes.sliders} id="main_product_slider">
				{children}
			</div>
		</section>
		)}