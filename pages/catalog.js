import Link from 'next/link'
import Head from 'next/head'
import {HeaderTemplate} from '../templates/header'
import classes from '../styles/catalog.module.css'
//import styles from '../styles/header.css'

export default function Catalog() {
	return(<HeaderTemplate>
		   <section className={classes.catalog+ ' container'} >
		<div className={classes.filter} >
			<a href="">Усі моделі</a>
			<a href="" className={classes.active}>Короткі піжами</a>
			<a href="">Довгі піжами</a>
			<a href="">Чоловічі піжами</a>
			<a href="">Парні піжами</a>
		</div>
		<div className={classes.product_list} >
			<div className={classes.single_product} >
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description}>
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size} >
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div className={classes.price}>
						<p>Ціна</p>
						<p>695грн</p>
					</div>
					<a href="" className={classes.buy+ ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		   <div className={classes.single_product} >
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description}>
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size} >
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div className={classes.price}>
						<p>Ціна</p>
						<p>695грн</p>
					</div>
					<a href="" className={classes.buy+ ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		   <div className={classes.single_product} >
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description}>
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size} >
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div className={classes.price}>
						<p>Ціна</p>
						<p>695грн</p>
					</div>
					<a href="" className={classes.buy+ ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		   <div className={classes.single_product} >
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description}>
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size} >
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div className={classes.price}>
						<p>Ціна</p>
						<p>695грн</p>
					</div>
					<a href="" className={classes.buy+ ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
		<div className={classes.load_more}>
			<p>Переглянути більше ПІЖАМ</p>
			<a href="" class="main_button">показати ще</a>
		</div>
	</section>
	<div className={classes.bg_comfort}>
		<section className={classes.main_have_questions+' container'}>
			<h2>МАЄШ ПИТАННЯ?</h2>
			<p>Знайди відповідь сердь поширених питань <br/> або постав своє питання на <a href="">сторінці FAQ</a></p>
			<a href="" class="main_button">Перейти в FAQ</a>
			<img src="Mask%20Group.svg" alt=""/>
		</section>
	</div>
		   	</HeaderTemplate>)
}
