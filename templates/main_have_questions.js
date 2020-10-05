import React, { Component } from "react";
import Slider from "react-slick";
import ReactDOM from 'react-dom';
import Router from 'next/router'
import classes from '../styles/main_have_questions.module.css'
export function MainHaveQuestions(){
	return(
<div className={classes.bg_comfort}>
		<section className={classes.main_have_questions+' container'}>
			<h2>МАЄШ ПИТАННЯ?</h2>
			<p>Знайди відповідь сердь поширених питань <br/> або постав своє питання на <a href="">сторінці FAQ</a></p>
			<a href="" class="main_button">Перейти в FAQ</a>
			<img src="Mask%20Group.svg" alt=""/>
		</section>
	</div>
		)
}