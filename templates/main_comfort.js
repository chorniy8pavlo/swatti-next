import React, { Component } from "react";
import Slider from "react-slick";
import ReactDOM from 'react-dom';
import Router from 'next/router'
//import App from './App';
import $ from 'jquery';
import classes from '../styles/main_comfort.module.css'
Router.events.on('routeChangeComplete', (url) => {
  		(function () {

	var youtube = document.querySelectorAll("#youtube");

	for (var i = 0; i < youtube.length; i++) {

		var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

		var image = new Image();
		image.src = source;
		image.addEventListener("load", function () {
			youtube[i].appendChild(image);
		}(i));

		youtube[i].addEventListener("click", function () {

			var iframe = document.createElement("iframe");

			iframe.setAttribute("frameborder", "0");
			iframe.setAttribute("allowfullscreen", "");
			iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

			this.innerHTML = "";
			this.appendChild(iframe);
		});
	};

})();
})
export function MainComfort(){
	return(
<div className={classes.bg_comfort}>
			<section className={classes.main_comfort} onLoad={()=>{alert('hello')}}>
				<div className={classes.content} onLoad={()=>{alert('hello')}}>
					<h2>
						КОМФОРТ – ЦЕ <br/> НАШЕ ВСЕ
					</h2>
					<p>
						У виготовленні наших піжам, ми використовуємо надзвичайно ніжну та приємну на дотик натуральну та антибактеріальну тканину "Шовк армані".
					</p>
					<p>
						Ми дуже прискіпливо ставимося до вибору тканини для наших піжам, адже хочемо створити максимально зручний комплект для дому, в якому ви захочете проводити увесь свій вільний час, після важкого дня.
					</p>
					<a href="" className="main_button" onLoad={()=>{alert('hello')}}>Каталог</a>
				</div>
				<div  id="youtube" className={classes.youtube} data-embed="MVZQBLce60w" onLoad={()=>{alert('hello')}}>
					<div className={classes.play_button} onLoad={()=>{alert('hello')}}></div>
				</div>
			</section>
		</div>
		)
}