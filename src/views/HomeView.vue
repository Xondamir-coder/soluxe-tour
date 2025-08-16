<template>
	<main class="home">
		<section data-animate class="hero">
			<div class="hero__wrapper">
				<div class="hero__images">
					<ResponsiveImage
						original-tag="jpeg"
						name="hero-3"
						alt="hero img"
						class="hero__image" />
					<ResponsiveImage
						original-tag="jpeg"
						name="hero-image-2"
						alt="hero img"
						class="hero__image" />
					<ResponsiveImage
						original-tag="jpeg"
						name="hero-image-3"
						alt="hero img"
						class="hero__image" />
					<ResponsiveImage
						original-tag="jpeg"
						name="hero-image-4"
						alt="hero img"
						class="hero__image" />
					<ResponsiveImage
						original-tag="jpeg"
						name="hero-main"
						alt="hero img"
						class="hero__image" />
					<ResponsiveImage
						original-tag="jpeg"
						name="hero-image-5"
						alt="hero img"
						class="hero__image" />
					<ResponsiveImage
						original-tag="jpeg"
						name="hero-4"
						alt="hero img"
						class="hero__image" />
					<ResponsiveImage
						original-tag="jpeg"
						name="hero-image-8"
						alt="hero img"
						class="hero__image" />
					<ResponsiveImage
						original-tag="jpeg"
						name="hero-3"
						alt="hero img"
						class="hero__image" />
				</div>
				<div class="hero__overlay"></div>
				<h1 class="hero__title">
					<span class="hero__letter" v-for="(letter, i) in letters" :key="i">
						{{ letter }}
					</span>
				</h1>
			</div>
		</section>
		<section data-animate class="offer">
			<h1 class="heading">
				{{ $t('offer-title') }}
			</h1>
			<p class="offer__text">
				{{ $t('offer-text-1') }}
				<br />
				<br />
				{{ $t('offer-text-2') }}
			</p>
		</section>
		<section data-animate class="about">
			<div class="about__images">
				<ResponsiveImage
					original-tag="jpeg"
					name="about-img-1"
					alt="about img"
					class="about__image about__image-1" />
				<ResponsiveImage
					original-tag="jpeg"
					name="about-img-2"
					alt="about img"
					class="about__image about__image-2" />
				<ResponsiveImage
					original-tag="jpg"
					name="about-img-3"
					alt="about img"
					class="about__image about__image-3" />
				<ResponsiveImage
					original-tag="jpeg"
					name="about-img-4"
					alt="about img"
					class="about__image about__image-4" />
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
										? $t('make-mice-enquiry')
										: $t('make-enquiry')
									: $t('get-in-touch')
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
				<ResponsiveImage
					class="about__row-img"
					:name="content.img"
					:original-tag="content.tag" />
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
										? $t('make-mice-enquiry')
										: $t('make-enquiry')
									: $t('get-in-touch')
							}}
						</RouterLink>
						<button class="about__button" v-if="index < 3">
							<span>{{ $t('learn-more') }}</span>
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
			<ResponsiveImage name="big-img" original-tag="jpeg" alt="big img" class="big-img" />
		</section>
		<Tours />
		<section data-animate class="everyone">
			<h1 class="heading-big">{{ $t('everyone-title') }}</h1>
			<div class="everyone__content">
				<p class="text-size-medium">
					{{ $t('everyone-subtitle') }}
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
				<p class="semi-bold spacing-point-4px">{{ $t('experts-label') }}</p>
				<h1 class="heading-big">{{ $t('experts-title') }}</h1>
				<p class="text-size-medium">
					{{ $t('experts-subtitle') }}
				</p>
			</div>
			<div class="experts__container">
				<div class="experts__box" v-for="content in expertsContent" :key="content.title">
					<ResponsiveImage :name="content.img" :original-tag="content.tag" />
					<h5 class="heading-5">{{ content.title }}</h5>
					<p>{{ content.text }}</p>
				</div>
			</div>
			<div class="experts__buttons">
				<RouterLink data-button to="/contacts" class="button-primary">{{
					$t('make-mice-enquiry')
				}}</RouterLink>
				<RouterLink data-button to="/mice" class="experts__button">
					<span>{{ $t('learn-more') }}</span>
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
				<h1 class="partners__title">{{ $t('partners-title') }}</h1>
				<RouterLink data-button to="/form" class="partners__button button-secondary">
					{{ $t('get-in-touch') }}
				</RouterLink>
				<ul class="partners__list">
					<li class="partners__item">
						<img src="@/images/partners/hilton.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/images/partners/hyatt.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/images/partners/Intercontinental.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/images/partners/international.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/images/partners/lia.svg" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/images/partners/lotte.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/images/partners/minyoun.svg" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/images/partners/movenpick.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/images/partners/radisson.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/images/partners/ramada-tashkent.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/images/partners/ramada.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/images/partners/travel cars.png" alt="partner" />
					</li>
					<li class="partners__item">
						<img src="@/images/partners/Wyndham.png" alt="partner" />
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
import { computed, onMounted, onUnmounted } from 'vue';
import baby from '@/icons/baby.svg';
import love from '@/icons/love.svg';
import mountain from '@/icons/mountain.svg';
import work from '@/icons/work.svg';
const aboutImg1 = 'about-img-1';
const aboutImg2 = 'about-img-2';
const aboutImg3 = 'about-img-3';
const aboutImg4 = 'about-img-4';
const expertsImg1 = 'experts-1';
const expertsImg2 = 'experts-2';
const expertsImg3 = 'experts-3';
const expertsImg4 = 'experts-4';
import Tours from '@/components/Tours.vue';
import GridImages from '@/components/GridImages.vue';
import { i18n } from '@/locale';
import ResponsiveImage from '@/components/ResponsiveImage.vue';

gsap.registerPlugin(ScrollTrigger);

const letters = computed(() => i18n.global.t('hero-title').split(''));
const aboutContent = computed(() => [
	{
		img: aboutImg1,
		tag: 'jpeg',
		label: i18n.global.t('about-label-1'),
		title: i18n.global.t('about-title-1'),
		desc: i18n.global.t('about-text-1')
	},
	{
		img: aboutImg2,
		tag: 'jpeg',
		label: i18n.global.t('about-label-2'),
		title: i18n.global.t('about-title-2'),
		desc: i18n.global.t('about-text-2')
	},
	{
		img: aboutImg3,
		tag: 'jpg',
		label: i18n.global.t('about-label-3'),
		title: i18n.global.t('about-title-3'),
		desc: i18n.global.t('about-text-3')
	},
	{
		img: aboutImg4,
		tag: 'jpeg',
		label: i18n.global.t('about-label-4'),
		title: i18n.global.t('about-title-4'),
		desc: i18n.global.t('about-text-4')
	}
]);

const expertsContent = computed(() => [
	{
		img: expertsImg1,
		tag: 'jpeg',
		title: i18n.global.t('experts-title-1'),
		text: i18n.global.t('experts-text-1')
	},
	{
		img: expertsImg2,
		tag: 'jpg',
		title: i18n.global.t('experts-title-2'),
		text: i18n.global.t('experts-text-2')
	},
	{
		img: expertsImg3,
		tag: 'jpg',
		title: i18n.global.t('experts-title-3'),
		text: i18n.global.t('experts-text-3')
	},
	{
		img: expertsImg4,
		tag: 'jpeg',
		title: i18n.global.t('experts-title-4'),
		text: i18n.global.t('experts-text-4')
	}
]);
const everyoneContent = computed(() => [
	{
		icon: mountain,
		title: i18n.global.t('everyone-title-1'),
		text: i18n.global.t('everyone-text-1')
	},
	{
		icon: baby,
		title: i18n.global.t('everyone-title-2'),
		text: i18n.global.t('everyone-text-2')
	},
	{
		icon: work,
		title: i18n.global.t('everyone-title-3'),
		text: i18n.global.t('everyone-text-3')
	},
	{
		icon: love,
		title: i18n.global.t('everyone-title-4'),
		text: i18n.global.t('everyone-text-4')
	}
]);

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
		align-items: center;
		justify-content: center;
		gap: 10px;
		flex-wrap: wrap;
		list-style: none;
	}
	&__item {
		width: 12rem;
		height: 12rem;
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
		max-width: 90%;
		letter-spacing: 1.5px;
		font-size: 7.2rem;
		font-weight: 700;
		line-height: 1.2;
		@media screen and (max-width: 991px) {
			font-size: 5.2rem;
		}
		@media only screen and (max-width: 768px) {
			font-size: 4rem;
			max-width: 100%;
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
		picture {
			aspect-ratio: 3/2;
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
		grid-auto-rows: max-content;
		row-gap: 10px;
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
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
		width: 100%;
		height: 100%;
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
</style>
