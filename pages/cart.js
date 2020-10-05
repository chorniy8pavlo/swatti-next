import {HeaderTemplate} from '../templates/header'
import classes from '../styles/single_product.module.css'
import ReactDOM from 'react-dom'
import Router from 'next/router'
export default function Product(){
	return(
		<HeaderTemplate>
		<section className={classes.cart_page + ' container'}>
		<div className={classes.left_side}>
				<h2>оформлення  замовлення</h2>
				<div className={classes.form}>
			<h3>
			Контакти
			</h3>
			<div className={classes.contacts}>
				<p><input placeholder="Name" type="text"/><input placeholder="Surname" type="text"/></p>
				<p><input placeholder="Phone" type="text"/><input placeholder="E-mail" type="text"/></p>
			</div>
			<div className={classes.details}>
				<div className="adress">
					<h3>Адреса</h3>
					<select name="" id="">
						<option value="">asdasd</option>
						<option value="">asdasd</option>
						<option value="">asdasd</option>
					</select>
					<select name="" id="">
						<option value="">asdasd</option>
						<option value="">asdasd</option>
						<option value="">asdasd</option>
					</select>
				</div>
				<div className={classes.pay}>
					<h3>оплата</h3>
					<select name="" id="">
						<option value="">asdasd</option>
						<option value="">asdasd</option>
						<option value="">asdasd</option>
					</select>
				</div>
			</div>
			<p className={classes.total}>Усього</p>
			<strong>1544грн</strong>
			<a href="" className="main_button">замовити</a>
			</div>
		</div>
		<div>
		<h2>Ваше замовлення</h2>
			<div>
			
			</div>
		</div>
		</section>
		</HeaderTemplate>
	)
}