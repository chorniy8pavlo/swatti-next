import Link from 'next/link'
import Head from 'next/head'
import {HeaderTemplate} from '../templates/header'
import {MainBanner} from '../templates/main_banner'
import {MainCollections} from '../templates/main_collections'
import SimpleSlider from '../templates/main_collections'
import {MainComfort} from '../templates/main_comfort'
import {MainWhyUs} from '../templates/main_why_us'
import {MainCustomers} from '../templates/main_our_customers'
import {MainHaveQuestions} from '../templates/main_have_questions'
import {MainHowToGet} from '../templates/main_how_to_get'
import classes from '../styles/main.module.css'
export default function Index() {
	return(<HeaderTemplate>
		   	<Head>
      <title>My page</title>
    </Head>
		   <MainBanner ></MainBanner>
		   <MainCollections >
		   <SimpleSlider></SimpleSlider>
		   </MainCollections>
		   <MainComfort></MainComfort>
		   <MainWhyUs></MainWhyUs>
		   <MainCustomers></MainCustomers>
		   <MainHowToGet></MainHowToGet>
		   <section className={classes.main_photos+' container'}>
			<div className={classes.nav}>
				<h2>Фото</h2>
				<div className={classes.changer} >
					<span className={classes.prev}>
						<svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z" fill="#1E1D1D" />
						</svg>
					</span>
					<div className={classes.counter} >
						<span class="current_val">01</span> / <span class="all_val">04</span>
					</div>
					<span className={classes.next} >
						<svg width="46" height="8" viewBox="0 0 46 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M45.3536 4.35355C45.5488 4.15829 45.5488 3.84171 45.3536 3.64645L42.1716 0.464466C41.9763 0.269204 41.6597 0.269204 41.4645 0.464466C41.2692 0.659728 41.2692 0.976311 41.4645 1.17157L44.2929 4L41.4645 6.82843C41.2692 7.02369 41.2692 7.34027 41.4645 7.53553C41.6597 7.7308 41.9763 7.7308 42.1716 7.53553L45.3536 4.35355ZM0 4.5H45V3.5H0V4.5Z" fill="#1E1D1D" />
						</svg>
					</span>
				</div>
			</div>
			<div id="photos_slider" className={classes.photos_slider} data-slider="3">
				<div className={classes.single_slide}>
					<div>
						<a href="">
							<img src="http://localhost:3000/banner_left.jpg" alt=""/>
							<button href="">Купити</button>
						</a>
					</div>
					<div>
						<a href="">
							<img src="http://localhost:3000/banner_left.jpg" alt=""/>
							<button href="">Купити</button>
						</a>
					</div>
				</div>
		   <div className={classes.single_slide}>
					<div>
						<a href="">
							<img src="http://localhost:3000/banner_left.jpg" alt=""/>
							<button href="">Купити</button>
						</a>
					</div>
					<div>
						<a href="">
							<img src="http://localhost:3000/banner_left.jpg" alt=""/>
							<button href="">Купити</button>
						</a>
					</div>
				</div>
		   <div className={classes.single_slide}>
					<div>
						<a href="">
							<img src="http://localhost:3000/banner_left.jpg" alt=""/>
							<button href="">Купити</button>
						</a>
					</div>
					<div>
						<a href="">
							<img src="http://localhost:3000/banner_left.jpg" alt=""/>
							<button href="">Купити</button>
						</a>
					</div>
				</div>
		   <div className={classes.single_slide}>
					<div>
						<a href="">
							<img src="http://localhost:3000/banner_left.jpg" alt=""/>
							<button href="">Купити</button>
						</a>
					</div>
					<div>
						<a href="">
							<img src="http://localhost:3000/banner_left.jpg" alt=""/>
							<button href="">Купити</button>
						</a>
					</div>
				</div>
		   <div className={classes.single_slide}>
					<div>
						<a href="">
							<img src="http://localhost:3000/banner_left.jpg" alt=""/>
							<button href="">Купити</button>
						</a>
					</div>
					<div>
						<a href="">
							<img src="http://localhost:3000/banner_left.jpg" alt=""/>
							<button href="">Купити</button>
						</a>
					</div>
				</div>
			</div>
		   <div className={classes.see_all}>
				<h4>Переглянути всю
					колекцію ПІЖАМ</h4>
				<a href="" className={'main_button'}> Каталог</a>
			</div>
		</section>
		   <MainHaveQuestions></MainHaveQuestions>

	</HeaderTemplate>)
}
