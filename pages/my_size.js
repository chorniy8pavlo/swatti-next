import Link from 'next/link'
import Head from 'next/head'
import {HeaderTemplate} from '../templates/header'
import classes from '../styles/my_size.module.css'
//import { Range, getTrackBackground } from "react-range";
let MyFunc1=()=>{
	$('#size_1').text($('#inp1').val());
}
let MyFunc2=()=>{
	$('#size_2').text($('#inp2').val());
}
let MyFunc3=()=>{
	$('#size_3').text($('#inp3').val());
}
export default function Index() {
	return(
		<HeaderTemplate>
		<section className={classes.banner}>
		<div className={classes.left_side}>
		<div>
		<h1>який твій розмір?</h1>
		<strong>XS</strong>
		<div className={classes.sizes}>
			<p>Обхват грудної клітки</p>
			<span id="size_1">0</span>
		</div>
		<input id="inp1" type="range" min="0" max="100" defaultValue="0" step="1" onInput={MyFunc1}/>
		<div className={classes.sizes}>
			<p>Обхват талії</p>
			<span id="size_2">0</span>
		</div>
		<input id="inp2" type="range" min="0" max="100" defaultValue="0" step="1" onInput={MyFunc2}/>
		<div className={classes.sizes}>
			<p>Обхват стегон</p>
			<span id="size_3">0</span>
		</div>
		<p>asdasdasd</p>
		<input id="inp3" type="range" min="0" max="100" defaultValue="0" step="1" onInput={MyFunc3}/>
		<a className="main_button">обрати піжаму</a>
		</div>
		</div>
		
		<div style={{backgroundImage:"url('http://localhost:3000/banner_left.jpg')"}}>
		</div>
		</section>
		<section className={classes.table_sizes + ' container'}>
		<div className={classes.tabs}>
		<p className={classes.active}>
		Короткі піжами
		</p>
		<p>
		Довгі піжами
		</p>
		<p>
		Чоловічі піжами
		</p>
		</div>
		<div className={classes.content}>
		<table>
			<tr>
				<td>
					Розмір
				</td>
				<td>
					xs-s
				</td>
				<td>
					m-l
				</td>
			</tr>
			<tr>
				<td>
					Обхват грудної клітки
				</td>
				<td>
					75-86
				</td>
				<td>
					86-96
				</td>
			</tr>
			<tr>
				<td>
					Обхват талії
				</td>
				<td>
					55-66
				</td>
				<td>
					66-96
				</td>
			</tr>
			<tr>
				<td>
					Обхват стегон
				</td>
				<td>
					89-92
				</td>
				<td>
					92-102
				</td>
			</tr>
		</table>
		</div>
		<img src="http://localhost:3000/Mask%20Group.svg"/>
		</section>
	    </HeaderTemplate>
)}
