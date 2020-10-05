import Link from 'next/link'
import Head from 'next/head'
import {HeaderTemplate} from '../templates/header'
import classes from '../styles/contacts.module.css'
//import styles from '../styles/header.css'

export default function Index() {
	return(<HeaderTemplate>
		<section className={classes.contacts_page}>
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82352.4824663428!2d23.942196373134145!3d49.832778676861146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1601382729819!5m2!1sru!2sua" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
		<div className={classes.contacts}>
			<h4>Адреса</h4>
			<a href="">площа Петрушевича 5, м. Львів</a>
			<h4>Графік</h4>
			<p>пн-пт 10:00-19:00</p>
			<p>сб-нд вихідний</p>
			<h4>Телефон</h4>
			<a href="">+ 380 63 705 49 </a>
			<h4>E-mail</h4>
			<a href="">06info@swatti.com.ua</a>
		</div>
	</section>
		</HeaderTemplate>
		)
}