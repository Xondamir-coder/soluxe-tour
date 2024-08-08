<template>
	<main class="home">
		<section data-animate class="hero">
			<div class="hero__wrapper">
				<div class="hero__images">
					<img class="hero__image" src="@/assets/hero-image-6.jpeg" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-2.jpeg" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-3.jpeg" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-4.jpeg" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-1.jpeg" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-5.jpeg" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-7.jpeg" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-8.jpeg" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-9.jpeg" alt="hero img" />
				</div>
				<div class="hero__overlay"></div>
				<h1 class="hero__title">
					<span class="hero__letter">W</span>
					<span class="hero__letter">e</span> <span class="hero__letter">w</span>
					<span class="hero__letter">i</span>
					<span class="hero__letter">l</span>
					<span class="hero__letter">l</span> <span class="hero__letter">s</span>
					<span class="hero__letter">h</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">w</span> <span class="hero__letter">a</span>
					<span class="hero__letter">l</span>
					<span class="hero__letter">l</span> <span class="hero__letter">b</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">a</span>
					<span class="hero__letter">u</span>
					<span class="hero__letter">t</span>
					<span class="hero__letter">y</span> <span class="hero__letter">o</span>
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
			</div>
		</section>
		<section data-animate class="offer">
			<h1 class="heading">
				We offer travellers the most authentic experiences at the most affordable prices
			</h1>
			<p class="offer__text">
				At Soluxe Tour, we embrace the philosophy that "Devil is in the detail." We
				specialize in providing exceptional services to small and medium-sized global tour
				operators, ensuring every aspect of our offerings is meticulously crafted to deliver
				unparalleled experiences in Uzbekistan.
				<br />
				<br />
				Our mission is to offer high-quality services that exceed our clients' expectations,
				creating unforgettable and authentic experiences. We strive to find the perfect
				blend of elements to tailor our products to fit our client's unique preferences
				perfectly.
			</p>
		</section>
		<section data-animate class="about">
			<div class="about__images">
				<img
					class="about__image about__image-1"
					src="@/assets/about-img-1.jpeg"
					alt="about img" />
				<img
					class="about__image about__image-2"
					src="@/assets/about-img-2.jpeg"
					alt="about img" />
				<img
					class="about__image about__image-3"
					src="@/assets/about-img-3.jpeg"
					alt="about img" />
				<img
					class="about__image about__image-4"
					src="@/assets/about-img-4.jpeg"
					alt="about img" />
			</div>
			<div class="about__content">
				<div
					class="about__box"
					v-for="(content, index) in aboutContent"
					:key="content.title"
					:class="`about__box-${index + 1}`">
					<span class="about__label">{{ content.label }}</span>
					<h1 class="about__title">{{ content.title }}</h1>
					<p class="about__text">{{ content.desc }}</p>
					<div class="about__box-buttons">
						<RouterLink data-button to="/contacts" class="button-primary">
							{{
								index < 3
									? content.title.includes('M.I.C.E')
										? 'Make a MICE enquiry'
										: 'Make an enquiry'
									: 'Get in touch'
							}}
						</RouterLink>
						<RouterLink
							:to="content.title.includes('M.I.C.E') ? '/mice' : '/about'"
							data-button
							class="about__button"
							v-if="index < 3">
							<span>Learn more</span>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6 3L11 8L6 13"
									stroke="CurrentColor"
									stroke-width="1.5"></path>
							</svg>
						</RouterLink>
					</div>
				</div>
			</div>
			<div
				class="about__row"
				v-for="(content, index) in aboutContent"
				:key="content.title"
				:class="`about__row-${index + 1}`">
				<img class="about__row-img" :src="content.img" />
				<div class="about__box about__box--small" :class="`about__box-${index + 1}`">
					<span class="about__label">{{ content.label }}</span>
					<h1 class="about__title">{{ content.title }}</h1>
					<p class="about__text">{{ content.desc }}</p>
					<div class="about__box-buttons">
						<RouterLink
							data-button
							:to="index >= 3 ? '/contacts' : '/'"
							class="button-primary">
							{{
								index < 3
									? content.title.includes('M.I.C.E')
										? 'Make a MICE enquiry'
										: 'Make an enquiry'
									: 'Get in touch'
							}}
						</RouterLink>
						<button class="about__button" v-if="index < 3">
							<span>Learn more</span>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M6 3L11 8L6 13"
									stroke="CurrentColor"
									stroke-width="1.5"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
		<section data-animate>
			<img class="big-img" src="@/assets/big-img.jpeg" alt="big img" />
		</section>
		<Tours />
		<section data-animate class="everyone">
			<h1 class="heading-big">Uzbekistan has a little something for everyone</h1>
			<div class="everyone__content">
				<p class="text-size-medium">
					At Soluxe Tour, we specialize in crafting unforgettable MICE experiences
					tailored to your needs. Join us and explore why Uzbekistan is the ideal
					destination for your next MICE tour.
				</p>
				<div class="everyone__box" v-for="content in everyoneContent" :key="content.title">
					<img :src="content.icon" alt="mountain" />
					<h6 class="heading-6">{{ content.title }}</h6>
					<p>{{ content.text }}</p>
				</div>
			</div>
		</section>
		<GridImages />
		<section data-animate class="experts">
			<div class="experts__head">
				<p class="semi-bold spacing-point-4px">MICE</p>
				<h1 class="heading-big">Experts in Corporate & M.I.C.E. travel</h1>
				<p class="text-size-medium">
					We make business travel easy, stress free and cost efficient while personalising
					every aspect to meet your needs. We can help you plan and execute truly
					memorable events for your business. We are committed to providing your team a
					safe and delightful experience.
				</p>
			</div>
			<div class="experts__container">
				<div class="experts__box" v-for="content in expertsContent" :key="content.title">
					<img :src="content.img" alt="banner" />
					<h5 class="heading-5">{{ content.title }}</h5>
					<p>{{ content.text }}</p>
				</div>
			</div>
			<div class="experts__buttons">
				<RouterLink data-button to="/contacts" class="button-primary"
					>Make a MICE enquiry</RouterLink
				>
				<RouterLink data-button to="/mice" class="experts__button">
					<span>Learn more</span>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M6 3L11 8L6 13" stroke="CurrentColor" stroke-width="1.5"></path>
					</svg>
				</RouterLink>
			</div>
		</section>
		<section data-animate class="partners">
			<div class="partners__content">
				<h1 class="partners__title">Let us show you the best of Uzbekistan</h1>
				<RouterLink data-button to="/contacts" class="partners__button button-secondary">
					Get in touch
				</RouterLink>
				<ul class="partners__list">
					<li class="partners__item">
						<img src="@/assets/partners-1.webp" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/assets/partners-2.webp" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/assets/partners-3.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/assets/partners-4.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/assets/partners-5.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/assets/partners-6.webp" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/assets/partners-7.webp" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/assets/partners-8.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/assets/partners-9.webp" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/assets/partners-10.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/assets/partners-11.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/assets/partners-12.png" alt="partner" />
					</li>
				</ul>
			</div>
		</section>
	</main>
</template>

<script setup>
import gsap from 'gsap';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, onUnmounted } from 'vue';
gsap.registerPlugin(ScrollTrigger);
import aboutImg1 from '@/assets/about-img-1.jpeg';
import aboutImg2 from '@/assets/about-img-2.jpeg';
import aboutImg3 from '@/assets/about-img-3.jpeg';
import aboutImg4 from '@/assets/about-img-4.jpeg';
import baby from '@/assets/icons/baby.svg';
import love from '@/assets/icons/love.svg';
import mountain from '@/assets/icons/mountain.svg';
import work from '@/assets/icons/work.svg';
import expertsImg1 from '@/assets/experts-1.webp';
import expertsImg2 from '@/assets/experts-2.webp';
import expertsImg3 from '@/assets/experts-3.webp';
import expertsImg4 from '@/assets/experts-4.webp';
import Tours from '@/components/Tours.vue';
import GridImages from '@/components/GridImages.vue';

const aboutContent = [
	{
		img: aboutImg1,
		label: 'Experts in',
		title: 'Destination management',
		desc: "We are a group of passionate travelers and tourism professionals. Our profound love for and knowledge of Uzbekistan inspire us to share the beauty of this remarkable country with those seeking unique experiences and hidden secrets. With our team's extensive destination knowledge, a dedicated account manager, 24/7 support, and strong partnerships throughout the region, we believe working with us is an easy choice."
	},
	{
		img: aboutImg2,
		label: 'Driven to create',
		title: 'Authentic experiences',
		desc: 'Over decades, our team of superstars has learned the secrets behind creating the most memorable experiences in Uzbekistan. While catering to your every need, we ensure that each adventure remains authentic and off the beaten path.'
	},
	{
		img: aboutImg3,
		label: 'Focused on elevating',
		title: 'Corporate travel & M.I.C.E.',
		desc: "When it comes to MICE travel, our team will help you put together unforgettable events for your company. Whether it's a conference or an incentive trip, trust Soluxe Tour's MICE team to be your strategic travel partner from the very start."
	},
	{
		img: aboutImg4,
		label: 'Your partner for',
		title: 'A-Z travel solutions',
		desc: "No request is too small or too big for us. If it's important to you, it's important to us. We've catered to thousands of requests, from reservations and transfers to exquisitely tailored tour packages for large groups. We go above and beyond for every client and any request."
	}
];
const everyoneContent = [
	{
		icon: mountain,
		title: 'Thrill seekers',
		text: 'Uzbekistan offers a variety of activities for thrill seekers, including sandboarding in the Kyzylkum Desert, hiking in the Chimgan Mountains, and exploring the ancient Silk Road cities.'
	},
	{
		icon: baby,
		title: 'Family & leisure',
		text: 'Uzbekistan is a great place to visit with the family. There are plenty of beaches, resorts, and waterparks to enjoy, as well as historical sites and cultural attractions.'
	},
	{
		icon: work,
		title: 'Corporate & MICE',
		text: 'Uzbekistan is a popular destination for corporate events and MICE groups. The country offers a variety of venues, including hotels, conference centers, and gorgeous resorts.'
	},
	{
		icon: love,
		title: 'Culture explorers',
		text: 'Uzbekistan is a country with a rich history and culture. There are many historical sites to visit, including forts, mosques, and museums. The country also has a vibrant arts and culture scene.'
	}
];
const expertsContent = [
	{
		img: expertsImg1,
		title: 'Meetings',
		text: 'We follow your guidelines and requirements to create the most meaningful meeting spaces enabling you to express the most innovative ideas.'
	},
	{
		img: expertsImg2,
		title: 'Incentives',
		text: "We'll help you give your employees the incentive travel they deserve by creating the most memorable, engaging and unique experiences in Uzbekistan."
	},
	{
		img: expertsImg3,
		title: 'Conferences',
		text: "Through our expert planners, strong networks and customised packages, we'll help take your conference events to the next level."
	},
	{
		img: expertsImg4,
		title: 'Events',
		text: 'From half day to weeks long, we can help create something unique and unforgettable for your next corporate event.'
	}
];

const animations = [];
onMounted(() => {
	const heroScrollTrigger = {
		trigger: '.hero',
		start: 'top top',
		end: 'bottom bottom',
		scrub: 1
	};

	// Hero scrolling effect
	gsap.to('.hero__title', {
		opacity: 0,
		scrollTrigger: heroScrollTrigger
	});
	gsap.to('.hero__images', {
		scale: 1,
		scrollTrigger: heroScrollTrigger
	});
	gsap.to('.hero__overlay', {
		backgroundColor: 'transparent',
		scrollTrigger: heroScrollTrigger
	});

	// About scrolling effect
	const aboutImages = document.querySelectorAll('.about__image');
	aboutImages.forEach((image, index) => {
		gsap.to(image, {
			opacity: 1,
			scrollTrigger: {
				trigger: `.about__box-${index + 1}`,
				toggleActions: index == 0 ? 'play none reverse' : 'play reverse play reverse',
				start: 'top-=300 top'
			}
		});
	});

	// Effect on every section
	Array.from(document.querySelectorAll('[data-animate]'))
		.slice(1)
		.forEach(section => {
			gsap.fromTo(
				section,
				{
					opacity: 0,
					y: 50
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.3,
					scrollTrigger: {
						trigger: section,
						start: 'top center'
					}
				}
			);
		});

	[2, 4].forEach(e => {
		const out = gsap.fromTo(
			document.body,
			{ backgroundColor: 'var(--color-primary)' },
			{
				backgroundColor: 'var(--color-secondary)',
				scrollTrigger: {
					trigger: window.innerWidth < 1200 ? `.about__row-${e}` : `.about__box-${e}`,
					toggleActions: 'play reverse play reverse',
					start: 'top-=300 top',
					end: 'bottom-=500 top'
				}
			}
		);
		animations.push(out);
	});
});
onUnmounted(() => {
	document.body.style.backgroundColor = 'var(--color-primary)';
});

const lenis = new Lenis();

lenis.on('scroll', e => {});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add(time => {
	lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);
</script>

<style lang="scss" scoped>
.partners {
	&__list {
		align-self: stretch;
		padding-top: 8px;
		padding-bottom: 8px;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		list-style: none;
	}
	&__item {
		width: 8rem;
		height: 8rem;
		img {
			object-fit: contain;
		}
	}
	&__content {
		padding-top: 7rem;
		padding-bottom: 7rem;
		border-radius: 32px;
		background-color: var(--color-secondary);
		color: var(--color-primary);
		display: flex;
		flex-direction: column;
		gap: 4rem;
		align-items: center;
		text-align: center;
	}
	&__title {
		letter-spacing: 1.5px;
		font-size: 7.2rem;
		font-weight: 700;
		line-height: 1.2;
		@media screen and (max-width: 991px) {
			font-size: 5.2rem;
		}
		@media only screen and (max-width: 768px) {
			font-size: 4rem;
		}
	}
	&__button {
		background-color: var(--color-primary);
		color: var(--color-secondary);
		border-color: transparent;
		transition: color 300ms, background-color 300ms, border-color 300ms;

		&:hover {
			background-color: var(--color-secondary);
			color: var(--color-primary);
			border-color: var(--color-primary);
		}
	}
}
.experts {
	background: var(--color-secondary);
	color: var(--color-primary);
	display: flex;
	flex-direction: column;
	gap: 10rem;
	@media only screen and (max-width: 768px) {
		gap: 6rem;
	}
	&__button {
		border-color: transparent;
		display: flex;
		align-items: center;
		gap: 1rem;
		svg {
			transition: transform 300ms;
		}
		&:hover svg {
			transform: translateX(5px);
		}
	}

	&__buttons {
		display: flex;
		gap: 2rem;
		@media only screen and (max-width: 500px) {
			flex-direction: column;
			align-items: flex-start;
		}
		a {
			color: #fff;

			&:first-child {
				border-color: #fff;
				&:hover {
					background-color: #fff;
					color: var(--color-secondary);
				}
			}
		}
	}
	&__head {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		max-width: 768px;
	}
	&__container {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		gap: 4rem;
	}
	&__box {
		min-width: 25rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16px;
		img {
			height: auto;
			border-radius: 6px;
		}
	}
}

.everyone {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	column-gap: 8rem;
	row-gap: 6rem;
	overflow: hidden;
	@media only screen and (max-width: 768px) {
		row-gap: 3rem;
	}
	h1 {
		@media only screen and (max-width: 415px) {
			max-width: 30rem;
		}
	}
	&__content {
		display: grid;
		row-gap: 5rem;
		column-gap: 4rem;
		grid-template-areas:
			'head head'
			'thrill family'
			'mice culture';
		@media only screen and (max-width: 768px) {
			grid-template-areas:
				'head head'
				'thrill thrill'
				'family family'
				'mice mice'
				'culture culture';
			row-gap: 3rem;
		}
		@media only screen and (max-width: 400px) {
			width: 80%;
		}
	}
	p.text-size-medium {
		grid-area: head;
	}
	&__box {
		display: grid;
		grid-template-columns: max-content 1fr;
		grid-template-areas:
			'icon title'
			'. text';
		column-gap: 2rem;
		@media only screen and (max-width: 400px) {
			grid-template-areas:
				'icon title'
				'text text';
		}
		img {
			width: 3.2rem;
			height: 3.2rem;
			grid-area: icon;
		}
		h6 {
			grid-area: title;
		}
		p {
			grid-area: text;
		}

		&:nth-child(2) {
			grid-area: thrill;
		}
		&:nth-child(3) {
			grid-area: family;
		}
		&:nth-child(4) {
			grid-area: mice;
		}
		&:last-child {
			grid-area: culture;
		}
	}
}
.about {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 8rem;
	@media only screen and (max-width: 1200px) {
		display: flex;
		flex-direction: column;
		gap: 10rem;
	}
	&__image {
		opacity: 0;
		height: 70%;
		position: absolute;
		border-radius: 10px;
		&:first-child {
			opacity: 1;
		}
	}

	&__images {
		height: 100vh;
		position: sticky;
		top: 15rem;
		display: flex;
		justify-content: center;
		@media only screen and (max-width: 1200px) {
			display: none;
		}
	}
	&__row {
		align-self: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5rem;
		&-2,
		&-4 {
			color: var(--color-primary);
			a,
			button {
				color: var(--color-primary);
				border-color: var(--color-primary);
			}
		}
		@media only screen and (min-width: 1200px) {
			display: none;
		}

		&-img {
			max-height: 66.5rem;
		}
	}
	&__box {
		height: 100vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 2rem;
		&--small {
			height: auto;
		}
		& > *:not(button) {
			transition: color 1.3s;
		}
		button {
			transition: color 1.3s, border-color 1.3s;
		}
	}
	&__box-2,
	&__box-4 {
		color: var(--color-primary);
		a,
		button {
			color: var(--color-primary);
			border-color: var(--color-primary);
		}
	}
	&__text {
		text-align: left;
		letter-spacing: 0.2px;
		font-size: 1.8rem;
		line-height: 1.5;
	}
	&__title {
		letter-spacing: 1.4px;
		line-height: 1.2;
		font-size: 4.8rem;
		font-weight: 700;
		@media only screen and (max-width: 768px) {
			font-size: 3rem;
		}
	}
	&__label {
		font-weight: 600;
		letter-spacing: 0.4px;
		line-height: 1.5;
	}
	&__content {
		display: flex;
		flex-direction: column;
		@media only screen and (max-width: 1200px) {
			display: none;
		}
	}
	&__box-buttons {
		display: flex;
	}
	&__button {
		border: none;
		display: flex;
		align-items: center;
		svg {
			transition: transform 300ms;
		}
		&:hover svg {
			transform: translateX(5px);
		}
	}
}
.offer {
	margin: auto;
	display: flex;
	gap: 3.5rem;
	color: #000;
	& > * {
		flex-basis: 50%;
	}
	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}

	&__text {
		text-align: left;
		letter-spacing: 0.2px;
		font-size: 1.8rem;
	}
}
.hero {
	height: 300vh;
	&__overlay {
		width: 100%;
		height: 100%;
		background-color: #00000090;
		position: absolute;
		inset: 0;
		transition: opacity 300ms, visibility 300ms;
		cursor: pointer;
		&.hidden {
			opacity: 0;
			visibility: hidden;
		}
	}
	&__letter {
		transition: opacity 300ms;
		@for $i from 2 through 40 {
			&:nth-child(#{$i}) {
				transition-delay: #{$i * 50}ms;
			}
		}
	}
	&__wrapper {
		display: grid;
		place-items: center;
		height: 100vh;
		position: sticky;
		top: 0;
		overflow: hidden;
	}
	&__images {
		height: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		gap: 1.6rem;
		transform: scale(3.2);
		@media only screen and (max-width: 600px) {
			gap: 0.5rem;
		}
	}
	&__image {
		aspect-ratio: 3 / 1;
	}
	&__title {
		max-width: 95%;
		z-index: 10;
		font-size: 15rem;
		line-height: 1.1;
		letter-spacing: 1.5px;
		font-weight: 700;
		color: var(--color-primary);
		position: absolute;
		text-align: center;
		@media only screen and (max-width: 1024px) {
			font-size: 12rem;
		}
		@media only screen and (max-width: 768px) {
			font-size: 9rem;
		}
		@media only screen and (max-width: 400px) {
			font-size: 7rem;
		}
	}
}
body.overflow-hidden .hero__letter {
	opacity: 0;
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
.big-img {
	border-radius: 25px;
}
img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
