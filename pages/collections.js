import Link from 'next/link'
import Head from 'next/head'
import {HeaderTemplate} from '../templates/header'
import classes from '../styles/collections.module.css'
//import styles from '../styles/header.css'

export default function Collections() {
	return(<HeaderTemplate>
		   <section className={classes.collection+ ' container'}>
		<h2>
			<span>
				колекція
			</span>
			classic
		</h2>
		<div className={classes.product_list}>
			<div className={classes.single_product}>
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description}>
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div className={classes.price}>
						<p>Ціна</p>
						<p>1695грн</p>
					</div>
					<a href="" className={classes.buy+ ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		   <div className={classes.single_product}>
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description}>
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div className={classes.price}>
						<p>Ціна</p>
						<p>1695грн</p>
					</div>
					<a href="" className={classes.buy+ ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		   <div className={classes.single_product}>
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description}>
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div className={classes.price}>
						<p>Ціна</p>
						<p>1695грн</p>
					</div>
					<a href="" className={classes.buy+ ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
	</section>
	<section className={classes.collection+ ' container'}>
		<h2>
			<span>
				колекція
			</span>
			classic
		</h2>
		<div className={classes.product_list}>
			<div className={classes.single_product}>
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description}>
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div className={classes.price}>
						<p>Ціна</p>
						<p>1695грн</p>
					</div>
					<a href="" className={classes.buy+ ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		   <div className={classes.single_product}>
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description}>
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div className={classes.price}>
						<p>Ціна</p>
						<p>1695грн</p>
					</div>
					<a href="" className={classes.buy+ ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		   <div className={classes.single_product}>
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description}>
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div className={classes.price}>
						<p>Ціна</p>
						<p>1695грн</p>
					</div>
					<a href="" className={classes.buy+ ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		   <div className={classes.single_product}>
				<img src="%D1%84%D0%BE%D1%82%D0%BE.jpg" alt=""/>
				<div className={classes.product_description}>
					<h4>ПІЖАМА avocado</h4>
					<div className={classes.size}>
						<p>Розмір</p>
						<span className={classes.active}>xs-s</span>
						<span>m-l</span>
					</div>
					<div className={classes.price}>
						<p>Ціна</p>
						<p>1695грн</p>
					</div>
					<a href="" className={classes.buy+ ' main_button'}>купити</a>
					<a href="">Який мій розмір?</a>
				</div>
			</div>
		</div>
	</section>
		   	</HeaderTemplate>)
}