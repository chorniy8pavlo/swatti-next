import Link from 'next/link'
import Head from 'next/head'
import React, { Component } from "react"
import Slider from "react-slick"
//import 'slick-carousel/slick/slick-theme.css';
//import 'slick-carousel/slick/slick.css';
import {HeaderTemplate} from '../../templates/header'
import classes from '../../styles/single_product.module.css'
import ReactDOM from 'react-dom'
import Router from 'next/router'
Router.events.on('routeChangeComplete', (url) => {
	let kkk=$('#cart_rows').html();
	ReactDOM.render(AddToCart, document.getElementById('cart_rows'))
})
let AddToCart=()=>{
	let name=$('.single_product_product_page__2EXyF h1').text();
	let price=$('.single_product_product_page__2EXyF strong span').text();
	let img=$('.single_product_big_slider__3kT_G img');
	let img_src=$(img[0]).attr('src');
	$("#cart_rows").append('<div class="cart_row"><img src="' + img_src + '" /><div class="descr"><div class="title"><h4>'+ name +'</h4><p><span>' + price + ' </span>грн</p></div><div class="counter"><button>-</button><input type="number" value="1" /><button>+</button></div><div class="links"><a>деталі</a><a><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5809 5.64051H2.41909C2.2767 5.62859 2.1356 5.67497 2.02891 5.76871C1.924 5.86804 1.87541 6.01184 1.89886 6.15333L3.25144 17.7686C3.41007 19.0492 4.51784 20.0089 5.82656 19.9993H12.3815C13.727 20.0182 14.8604 19.0127 14.9826 17.6917L16.1011 6.10204C16.108 5.97773 16.0607 5.85641 15.9711 5.76871C15.8644 5.67497 15.7233 5.62859 15.5809 5.64051ZM13.9422 17.6404C13.8605 18.4212 13.1772 19.0049 12.3815 18.9737H5.82661C5.04525 19.005 4.37361 18.4327 4.29191 17.666L2.99135 6.66615H15.0087L13.9422 17.6404Z" fill="#1E1D1D"/><path d="M17.4798 2.30795H12.1214V1.48741C12.1502 0.694902 11.5219 0.0294033 10.718 0.000937995C10.6916 5.51205e-06 10.6651 -0.000239878 10.6387 0.000250902H7.36126C6.55689 -0.0144234 5.89282 0.616426 5.87794 1.40933C5.87744 1.43534 5.87769 1.4614 5.87863 1.48741V2.3079H0.520232C0.232907 2.3079 0 2.53749 0 2.82072C0 3.10395 0.232907 3.33354 0.520232 3.33354H17.4798C17.7671 3.33354 18 3.10395 18 2.82072C18 2.53749 17.767 2.30795 17.4798 2.30795ZM11.0809 1.48741V2.3079H6.91905V1.48741C6.88972 1.26269 7.05079 1.0571 7.27876 1.02819C7.3061 1.02471 7.33373 1.02397 7.36121 1.02588H10.6387C10.868 1.00989 11.067 1.18009 11.0832 1.40614C11.0852 1.43323 11.0844 1.46047 11.0809 1.48741Z" fill="#1E1D1D"/></svg></a></div></div></div>')
	return ($('#cart_rows').html());
}
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
				<img src="../%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
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
				<img src="../%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
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
				<img src="../%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
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
				<img src="../%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
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
export class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }
	  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
	  render() {
    return (
		<div className={classes.product_sliders}>
        <Slider className={classes.small_slider}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
		slidesToShow={3}
vertical={true}
arrows={false}
focusOnSelect={true}
responsive={ [
    {
      breakpoint: 768,
      settings: {
        vertical:false
      }
    }
  ]}
        >
          <div className={classes.single_slide}>
				<img src="http://localhost:3000/women_1.jpg" alt=""/>
			</div>
			<div className={classes.single_slide}>
				<img src="http://localhost:3000/women_1.jpg" alt=""/>
			</div>
			<div className={classes.single_slide}>
				<img src="http://localhost:3000/women_1.jpg" alt=""/>
			</div>
			<div className={classes.single_slide}>
				<img src="http://localhost:3000/women_1.jpg" alt=""/>
			</div>
        </Slider>
        <Slider className={classes.big_slider}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={1}
prevArrow={<span class="big_prev_arrow big_arrow"><svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 3.64644C0.451183 3.8417 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82842L1.70711 4L4.53553 1.17157C4.7308 0.976307 4.7308 0.659725 4.53553 0.464462C4.34027 0.2692 4.02369 0.2692 3.82843 0.464462L0.646446 3.64644ZM46 3.5L1 3.5L1 4.5L46 4.5L46 3.5Z" fill="#1E1D1D" /></svg></span>}
nextArrow={<span class="big_next_arrow big_arrow"><svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z" fill="#1E1D1D"/></svg></span>}
        >
          <div className={classes.single_slide}>
					<img src="http://localhost:3000/women_1.jpg" alt=""/>
				</div>
				<div className={classes.single_slide}>
					<img src="http://localhost:3000/women_1.jpg" alt=""/>
				</div>
				<div className={classes.single_slide}>
					<img src="http://localhost:3000/women_1.jpg" alt=""/>
				</div>
				<div className={classes.single_slide}>
					<img src="http://localhost:3000/women_1.jpg" alt=""/>
				</div>
        </Slider>
      </div>
    );
  }
}
export default function Product(){
	return(
		<HeaderTemplate>
		<section className={classes.product_page + ' container'}>
		
			<AsNavFor></AsNavFor>
		<div className={classes.description}>
			<div className={classes.title}>
				<h1>Піжама black Classic</h1>
				<p>В наявності</p>
			</div>
			<p className={classes.grey_color}>3 людини вже добавили цей товар в список бажань</p>
			<div className={classes.price}>
				<p> 990грн.
				</p>
				<strong><span>695</span>грн</strong>
			</div>
			<div className={classes.color}>
				<p>Виберіть колір</p>
				<span>
					<img src="http://localhost:3000/print.jpg" alt=""/>
				</span>
				<span>
					<img src="http://localhost:3000/print.jpg" alt=""/>
				</span>
				<span>
					<img src="http://localhost:3000/print.jpg" alt=""/>
				</span>
			</div>
			<div className={classes.size}>
				<p>Виберіть розмір</p>
				<div>
					<span>
						xs-s
					</span>
					<span>
						m-l
					</span>
				</div>
				<a href="">Визначити розмір</a>
			</div>
			<div className={classes.buttons}>
				<a href="" className="main_button">купити в 1 клік</a>
				<a className={classes.transparent_button} onClick={AddToCart}>
					<svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M18.9875 21.5938L17.6042 6.96094C17.5669 6.55781 17.2166 6.25 16.7966 6.25H15.9265C15.0636 6.25 14.364 5.55045 14.364 4.6875C14.364 3.43125 13.858 2.25312 12.9417 1.37031C12.0401 0.5 10.7848 0 9.49882 0C6.81648 0 4.63364 2.10312 4.63364 4.6875C4.63364 5.55045 3.93408 6.25 3.07114 6.25H2.20105C1.78102 6.25 1.43072 6.55781 1.39342 6.96094L0.0133349 21.5922C-0.0693732 22.4656 0.235512 23.3359 0.848525 23.9828C1.46154 24.6297 2.33403 25 3.24382 25H15.7554C16.6636 25 17.5361 24.6297 18.1491 23.9844C18.7637 23.3375 19.067 22.4656 18.9875 21.5938ZM12.7423 4.6875C12.7423 5.55045 12.0427 6.25 11.1798 6.25H7.81786C6.95492 6.25 6.25536 5.55045 6.25536 4.6875C6.25536 2.96406 7.71005 1.5625 9.49882 1.5625C10.3583 1.5625 11.1951 1.89375 11.7952 2.47344C12.4066 3.0625 12.7423 3.84844 12.7423 4.6875Z" fill="#1E1D1D" />
					</svg>
					в кошик
				</a>
			</div>
			<div className={classes.tabs}>
				<div className={classes.tabs_item}>
					<p class="active">Доставка</p>
					<p>Оплата</p>
					<p>Обмін / Повернення</p>
				</div>
				<div className={classes.tabs_content}>
					<div class="active">
						<p>
						Ми пропонуємо вам декілька способів доставки – поштову пересилку по всій території України та адресну доставку кур'єром за допомогою сервісу Нова Пошта.
</p>
						<p>
							Ми пропонуємо вам декілька способів доставки – поштову пересилку по всій території України та адресну доставку кур'єром за допомогою сервісу Нова Пошта.

						</p>
						<p>
							Ми пропонуємо вам декілька способів доставки – поштову пересилку по всій території України та адресну доставку кур'єром за допомогою сервісу Нова Пошта.

						</p>
						<p>
							Ми пропонуємо вам декілька способів доставки – поштову пересилку по всій території України та адресну доставку кур'єром за допомогою сервісу Нова Пошта.

						</p>
					</div>
				</div>
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
		</HeaderTemplate>
	)
}
