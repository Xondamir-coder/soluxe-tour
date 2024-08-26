<template>
	<main class="main">
		<section class="hero">
			<div class="hero__content">
				<p class="text-weight-semibold">We are Soluxe Tour</p>
				<h1 class="hero__title">
					<span class="hero__letter">A</span> <span class="hero__letter">g</span>
					<span class="hero__letter">r</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">u</span>
					<span class="hero__letter">p</span> <span class="hero__letter">o</span>
					<span class="hero__letter">f</span> <span class="hero__letter">e</span>
					<span class="hero__letter">x</span>
					<span class="hero__letter">p</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">r</span>
					<span class="hero__letter">t</span>
					<span class="hero__letter">s</span> <span class="hero__letter">f</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">c</span>
					<span class="hero__letter">u</span>
					<span class="hero__letter">s</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">d</span> <span class="hero__letter">o</span>
					<span class="hero__letter">n</span> <span class="hero__letter">g</span>
					<span class="hero__letter">i</span>
					<span class="hero__letter">v</span>
					<span class="hero__letter">i</span>
					<span class="hero__letter">n</span>
					<span class="hero__letter">g</span> <span class="hero__letter">t</span>
					<span class="hero__letter">h</span>
					<span class="hero__letter">e</span> <span class="hero__letter">b</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">s</span>
					<span class="hero__letter">t</span> <span class="hero__letter">o</span>
					<span class="hero__letter">f</span> <span class="hero__letter">U</span>
					<span class="hero__letter">z</span>
					<span class="hero__letter">b</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">k</span>
					<span class="hero__letter">i</span>
					<span class="hero__letter">s</span>
					<span class="hero__letter">t</span>
					<span class="hero__letter">a</span>
					<span class="hero__letter">n</span>
				</h1>
				<RouterLink data-button class="hero__button button-primary" to="/contacts">
					Get in touch
				</RouterLink>
			</div>
			<Ornament class="hero__ornament hero__ornament--1" />
			<Ornament class="hero__ornament hero__ornament--2" />
		</section>
		<section data-animate class="reason">
			<h1 class="heading-style-h1"><strong>We're here for a reason</strong></h1>
			<p class="text-size-medium">
				We've been creating unforgettable memories for tourists for over a decade and we're
				able to do what we do, as well as we've been doing it because we are anchored to our
				values and aligned on our mission
			</p>
		</section>
		<section data-animate class="cards">
			<div class="cards__item">
				<p class="text-size-medium text-weight-semibold"><span>01</span> Our philosophy</p>
				<div class="cards__content">
					<div class="cards__paragraphs">
						<h1 class="heading-big">
							Share our deep rooted appreciation for the land and its wonders
						</h1>
						<p class="text-size-medium">
							We believe that travel should be more than just sightseeing; it should
							be an immersive experience that connects travelers with the soul of
							Uzbekistan. Our commitment is to uphold the authenticity of this
							remarkable land by curating journeys that foster genuine connections
							with local communities, respect for traditions, and preservation of the
							environment.
						</p>
					</div>
					<img class="cards__image" src="@/assets/card-1.jpeg" alt="banner" />
				</div>
			</div>
			<div class="cards__item">
				<p class="text-size-medium text-weight-semibold"><span>02</span> Our mission</p>
				<div class="cards__content">
					<div class="cards__paragraphs">
						<h1 class="heading-big">
							Uzbekistan through Uzbek eyes–authentic experiences above all
						</h1>
						<p class="text-size-medium">
							Our mission is to offer travelers the opportunity to discover the
							country's rich heritage, awe-inspiring landscapes, and warm hospitality.
							With meticulous attention to detail, we create unforgettable adventures
							that celebrate the authenticity and uniqueness of this enchanting
							destination
						</p>
					</div>
					<img class="cards__image" src="@/assets/card-2.jpeg" alt="banner" />
				</div>
			</div>
			<div class="cards__item cards__item--last">
				<p class="text-size-medium text-weight-semibold"><span>03</span> Our values</p>
				<div class="values">
					<h1 class="heading">Our values drive our every decision</h1>
					<div class="values__container">
						<div
							class="values__box"
							v-for="content in valuesContent"
							:key="content.title">
							<img :src="content.icon" alt="icon" />
							<h5 class="heading-5">{{ content.title }}</h5>
							<p>{{ content.text }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section data-animate class="partners">
			<p class="partners__title text-size-medium">We're honoured to work with the best</p>
			<ul class="partners__list">
				<li class="partners__item">
					<img src="@/assets/partners/hilton.png" alt="partner" />
				</li>
				<li class="partners__item">
					<img src="@/assets/partners/hyatt.png" alt="partner" />
				</li>
				<li class="partners__item">
					<img src="@/assets/partners/Intercontinental.png" alt="partner" />
				</li>
				<li class="partners__item">
					<img src="@/assets/partners/international.png" alt="partner" />
				</li>
				<li class="partners__item">
					<img src="@/assets/partners/lia.svg" alt="partner" />
				</li>
				<li class="partners__item">
					<img src="@/assets/partners/lotte.png" alt="partner" />
				</li>
				<li class="partners__item">
					<img src="@/assets/partners/minyoun.svg" alt="partner" />
				</li>
				<li class="partners__item">
					<img src="@/assets/partners/movenpick.png" alt="partner" />
				</li>
				<li class="partners__item">
					<img src="@/assets/partners/radisson.png" alt="partner" />
				</li>
				<li class="partners__item">
					<img src="@/assets/partners/ramada-tashkent.png" alt="partner" />
				</li>
				<li class="partners__item">
					<img src="@/assets/partners/ramada.png" alt="partner" />
				</li>
				<li class="partners__item">
					<img src="@/assets/partners/travel cars.png" alt="partner" />
				</li>
				<li class="partners__item">
					<img src="@/assets/partners/Wyndham.png" alt="partner" />
				</li>
			</ul>
		</section>
		<section data-animate class="words">
			<div class="words__content">
				<Ornament class="words__ornament" />
				<p class="text-weight-semibold">Tips for Tourists Visiting Uzbekistan</p>
				<p class="text-size-medium">
					When visiting Uzbekistan, it's essential to be mindful of the local customs and
					traditions. The people of Uzbekistan are known for their warm hospitality, and a
					respectful attitude towards local culture will enhance your experience. Dress
					modestly, especially when visiting religious sites, and always ask for
					permission before taking photos of people, particularly in rural areas. It’s
					also a good idea to learn a few basic phrases in Uzbek or Russian, as this will
					be greatly appreciated by locals and can help you navigate your way around more
					easily.
				</p>
				<p class="text-size-medium">
					Another important tip is to plan your finances accordingly, as Uzbekistan is
					largely a cash-based society. While major cities like Tashkent may have ATMs and
					accept credit cards at hotels and upscale restaurants, it's advisable to carry
					sufficient cash for smaller towns, markets, and local vendors. The local
					currency is the Uzbekistani Som, and exchanging money at official exchange
					points or banks is recommended for getting the best rates. Additionally, while
					tap water is generally safe in larger cities, it's advisable to drink bottled
					water during your travels to avoid any stomach upsets.
				</p>
			</div>
		</section>
		<section data-animate class="message">
			<div class="message__content">
				<Ornament class="message__ornament" />
				<h1 class="heading-style-h1">
					Let us help you show the best of Uzbekistan to your clients
				</h1>
				<RouterLink data-button class="button-primary" to="/contacts">
					Get in touch
				</RouterLink>
			</div>
		</section>
	</main>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import heartIcon from '@/assets/icons/heart.svg';
import checkIcon from '@/assets/icons/check.svg';
import idIcon from '@/assets/icons/id.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Ornament from '@/components/Ornament.vue';
gsap.registerPlugin(ScrollTrigger);

const valuesContent = [
	{
		icon: heartIcon,
		title: 'Authentic',
		text: "At Soluxe Tour, authenticity is at the heart of our decision-making process. Be it in how we create itineraries or how we show ourselves every day. Your journey with us will always be a meaningful exploration of the country's authentic treasures."
	},
	{
		icon: checkIcon,
		title: 'Dependable',
		text: 'Our commitment to reliability and professionalism ensures seamless planning and execution of your trip. Rest assured, with Soluxe Tour, your travel arrangements are in safe hands.'
	},
	{
		icon: idIcon,
		title: 'Customer first',
		text: 'Our customers are at the forefront of everything we do. Your satisfaction and comfort are paramount, and we tailor our services to meet your unique preferences and requirements. Your happiness is our priority, and we are dedicated to creating memorable experiences that exceed your expectations.'
	}
];

onMounted(() => {
	gsap.to('.hero__letter', { opacity: 1, duration: 1, stagger: 0.05 });
	document.querySelectorAll('[data-animate]').forEach(el => {
		gsap.to(el, {
			scrollTrigger: {
				trigger: el,
				start: 'top center',
				end: 'bottom top',
				toggleClass: 'active'
			}
		});
	});
});
</script>

<style lang="scss" scoped>
.message {
	&.active &__content {
		transform: scale(1);
		opacity: 1;
	}
	&__ornament {
		position: absolute;
		left: -22rem;
		bottom: -22rem;
		@media only screen and (max-width: 768px) {
			transform: scale(0.6);
			left: -30rem;
			bottom: -30rem;
		}
		@media only screen and (max-width: 500px) {
			transform: scale(0.5);
			left: -30rem;
			bottom: -30rem;
		}
	}
	&__content {
		transform: scale(0.3);
		opacity: 0;
		transition: transform 1s, opacity 1s;
		overflow: hidden;
		color: var(--color-primary);
		background-color: var(--color-secondary);
		border-radius: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		gap: 5rem;
		flex-direction: column;
		position: relative;
		padding: 15rem 3rem;
		@media only screen and (max-width: 768px) {
			padding: 10rem 3rem;
		}

		& > *:not(img) {
			z-index: 1;
		}

		a {
			color: var(--color-primary);
			border-color: var(--color-primary);
			&:hover {
				background-color: var(--color-primary);
				color: var(--color-secondary);
			}
		}
	}
}
.words {
	&.active &__content {
		transform: scale(1);
		opacity: 1;
	}
	&__ornament {
		position: absolute;
		right: -22rem;
		top: -22rem;
		@media only screen and (max-width: 768px) {
			right: -30rem;
			top: -30rem;
			transform: scale(0.6);
		}
		@media only screen and (max-width: 500px) {
			right: -30rem;
			top: -30rem;
		}
	}

	&__content {
		transform: scale(0.3);
		opacity: 0;
		transition: transform 1s, opacity 1s;
		overflow: hidden;
		position: relative;
		border-radius: 24px;
		background: var(--color-secondary);
		color: var(--color-primary);
		padding: 15rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		@media only screen and (max-width: 768px) {
			padding: 7rem;
		}
		@media only screen and (max-width: 500px) {
			padding: 3.5rem;
		}
		& > * {
			z-index: 1;
		}
	}
}
.partners {
	padding-left: 0 !important;
	padding-right: 0 !important;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 4rem;
	overflow-x: hidden;
	&__item {
		animation: slide-left infinite 20s alternate linear;
		width: 14rem;
		cursor: pointer;
		filter: contrast(0);
		transition: filter 300ms;
		&:hover {
			filter: contrast(1);
		}
		@media only screen and (max-width: 500px) {
			max-height: 4.8rem;
			width: 10rem;
		}
	}
	&__list {
		list-style: none;
		display: flex;
		gap: 5rem;
		align-items: center;
		overflow-x: hidden;

		img {
			height: 100%;
			width: 100%;
			object-fit: contain;
		}
	}
	&__title {
		font-weight: 700;
		line-height: 1.2;
	}
}
.values {
	display: flex;
	flex-direction: column;
	gap: 8rem;
	align-items: center;
	&__box {
		min-width: 200px;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: flex-start;
		img {
			width: 4.8rem;
			height: 4.8rem;
			object-fit: cover;
		}
	}
	&__container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		column-gap: 4rem;
		row-gap: 3rem;
	}
}
.cards {
	display: flex;
	flex-direction: column;
	gap: 10rem;
	&.active {
		.cards__paragraphs {
			transform: translateX(0);
			opacity: 1;
		}
		.cards__image {
			transform: translateX(0);
			opacity: 1;
		}
		p.text-size-medium {
			transform: translateY(0);
			opacity: 1;
		}
	}
	p.text-size-medium {
		transform: translateY(15px);
		opacity: 0;
		transition: opacity 300ms, transform 300ms;
	}

	&__paragraphs {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		transform: translateX(-100%);
		opacity: 0;
		transition: opacity 1s, transform 1s;
	}
	&__image {
		width: 95%;
		max-height: 372px;
		height: 100%;
		object-fit: cover;
		border-radius: 12px;
		transform: translateX(100%);
		opacity: 0;
		transition: opacity 1s, transform 1s;
	}
	&__content {
		overflow: hidden;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		align-items: center;
		column-gap: 10rem;
		row-gap: 5rem;
	}
	&__item {
		background-color: var(--color-primary);
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		gap: 10rem;
		min-height: 100vh;
		p {
			span {
				margin-right: 2rem;
			}
		}
	}
}
.reason {
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	overflow: hidden;
	&.active {
		& > * {
			transform: translateX(0);
			opacity: 1;
		}
	}
	& > * {
		transition: transform 1s, opacity 1s;
		opacity: 0;
	}
	h1 {
		transform: translateX(-100%);
	}
	p {
		transform: translateX(100%);
		text-align: center;
		max-width: 60ch;
	}
}
.hero {
	height: 100vh;
	display: grid;
	place-items: center;
	position: relative;
	overflow: hidden;
	background-color: var(--color-secondary);
	&__letter {
		opacity: 0;
	}

	&__ornament {
		position: absolute;
		animation: scale-up 1s forwards;
		@media only screen and (max-width: 768px) {
			animation: scale-up-small 1s forwards;
		}
		&--1 {
			top: -20%;
			left: -10rem;
			transform: rotate(190deg);
			@media only screen and (max-width: 768px) {
				left: 20rem;
			}
			@media only screen and (max-width: 500px) {
				left: 10rem;
			}
		}
		&--2 {
			bottom: -22%;
			right: -10rem;
			transform: rotate(13deg);
			@media only screen and (max-width: 768px) {
				right: 20rem;
			}
			@media only screen and (max-width: 500px) {
				right: 10rem;
			}
		}
	}
	&__button {
		margin-top: 4rem;
		border-color: var(--color-primary);
		color: var(--color-primary);
		&:hover {
			background-color: var(--color-primary);
			color: var(--color-secondary);
		}
	}
	&__content {
		z-index: 1;
		max-width: 70%;
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
		color: var(--color-primary);
		@media only screen and (max-width: 768px) {
			max-width: 90%;
		}
	}
	&__title {
		letter-spacing: 1.5px;
		font-size: 7.2rem;
		font-weight: 700;
		line-height: 1.2;

		@media screen and (max-width: 991px) {
			font-size: 5.2rem;
		}
		@media screen and (max-width: 767px) {
			font-size: 4rem;
		}
	}
}

section {
	&:not(.hero) {
		padding: 7rem 8%;
		@media only screen and (min-width: 1920px) {
			padding: 7rem 15%;
		}
		@media only screen and (max-width: 768px) {
			padding: 7rem 5%;
		}
	}
}
@keyframes scale-up {
	from {
		scale: 0;
	}
	to {
		scale: 1;
	}
}
@keyframes scale-up-small {
	from {
		scale: 0;
	}
	to {
		scale: 0.7;
	}
}
@keyframes slide-left {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-1440px);
	}
}
</style>
