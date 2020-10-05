import Head from 'next/head'
import Link from 'next/link'

export function HeaderTemplate({children}){
	return(
	<>
		<Head>
      <title>My styled page</title>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossOrigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossOrigin="anonymous"></script>
    </Head>
		<header>
		<div className="container">
			<Link href="/"><a className="logo"><img src="http://localhost:3000/LOGO.svg" alt=""/></a></Link>
			<ul className="main_menu">
				<li><Link href="/"><a>Головна</a></Link></li>
				<li><Link href="/catalog"><a>Каталог</a></Link></li>
				<li><Link href="/collections"><a>Колекції</a></Link></li>
				<li><Link href="/my_size"><a>Мій розмір</a></Link></li>
				<li><Link href="/faq"><a>FAQ</a></Link></li>
				<li><Link href="/contacts"><a>Контакти</a></Link></li>
			</ul>
			<div className="right_block">
				<a href="" className="phone">+ 380 63 705 49 06</a>
				<ul className="languages">
					<li className="item_has_child">
						<a href="">укр</a>
						<ul className="sub_menu">
							<li>
								<a href="">en</a>
							</li>
							<li>
								<a href="">
									рус
								</a>
							</li>
						</ul>
					</li>
				</ul>
				<a href="" className="cart">
					<img src="http://localhost:3000/Vector2.svg" alt=""/>
				</a>
			</div>
		<div className="burger">
				<span></span>
			</div>
		</div>
		<div className="cart_pop_up">
		<div id="cart_rows">
		</div>
			<div className="subtotal">
			<p>усього до оплати
			</p>
			<p>
			</p>
			</div>
			<a className="main_button">оформити замовлення</a>
		</div>
	</header>
		<main>
		{children}
		</main>
		<footer> 
		<div className="container">
			<div className="left_block">
				<a href="" className="logo">
					<img src="http://localhost:3000/Mask%20Group1.svg" alt=""/>
				</a>
				<a href="">
					<img src="http://localhost:3000/%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D0%B0.svg" alt=""/>
				</a>
			</div>
			<div className="footer_columns">
				<div className="column">
					<h4>
						ГРАФІК РОБОТИ
					</h4>
					<p>пн-пт 10:00-19:00</p>
					<p>сб-нд вихідний</p>
				</div>
				<div className="column">
					<h4>
						КОНТАКТИ </h4>
					<a href="">+ 380 63 705 49 </a>
					<a href="">06info@swatti.com.ua</a>
				</div>
				<div className="column">
					<h4>
						ДЛЯ КЛІЄНТА </h4>
					<a href="">Доставка і оплата</a>
					<a href="">FAQ</a>
					<a href="">Політика конфіденційності</a>
					<a href="">Публічна оферта</a>
				</div>
			</div>
		</div>
		<div className="copywrite">
			<p>Все права защищены. © 2020</p>
			<a href="">Политика конфиденциальности</a>
		</div>
	</footer>
		
		<script type="text/javascript" src="/js/scripts.js"></script>
		</>
	)
}