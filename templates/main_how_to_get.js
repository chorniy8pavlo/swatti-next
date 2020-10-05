import React, { Component } from "react";
import Slider from "react-slick";
import ReactDOM from 'react-dom';
import Router from 'next/router'
import classes from '../styles/main_how_to_get.module.css'
export function MainHowToGet(){
	return(
<div  className={classes.bg_comfort} >
			<section className={classes.main_how_to_get_product+' container'}>
				<h2>Як зробити замовлення </h2>
				<div>
					<span>
						<img src="%D1%96%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0%20monitor.svg" alt=""/>
					</span>
					<p>Залишаєш заявку на сайті, обираючи метод оплати карткою або накладний платіж.</p>
				</div>
				<div>
					<span>
						<img src="Group.svg" alt=""/>
					</span>
					<p>Наш менеджер зв'яжеться з тобою, щоб підтвердити усі деталі замовлення</p>
				</div>
				<div>
					<span>
						<img src="Vector.svg" alt=""/>
					</span>
					<p>Ми відправляємо товар Новою Поштою. Термін доставки
						1-2 дні.</p>
				</div>
		<div className={classes.buuton_container}>
				<a href="" class="main_button">ХОЧУ зАМОВИТИ</a>
		</div>
			</section>
		</div>
		)
}