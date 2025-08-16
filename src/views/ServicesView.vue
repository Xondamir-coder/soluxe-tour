<template>
	<main class="main">
		<section class="hero">
			<h1 class="hero__title heading-big">
				{{ $t('services-hero-title') }}
			</h1>
			<div class="hero__grids">
				<div class="hero__grid" v-for="content in heroContent" :key="content.title">
					<img :src="content.icon" alt="icon" />
					<h6 class="heading-6">{{ content.title }}</h6>
					<p>{{ content.text }}</p>
				</div>
				<ResponsiveImage
					original-tag="jpeg"
					name="services-hero"
					alt="hero"
					class="hero__banner" />
			</div>
			<div class="hero__grid">
				<img src="@/icons/checklist.svg" alt="icon" />
				<h6 class="heading-5">{{ $t('services-hero-title-5') }}</h6>
				<p>
					{{ $t('services-hero-text-5') }}
				</p>
			</div>
		</section>
		<section class="offer" data-animate>
			<div class="offer__head">
				<p class="text-weight-semibold">{{ $t('services-offer-label') }}</p>
				<h1 class="heading-big">{{ $t('services-offer-title') }}</h1>
			</div>
			<div class="offer__content">
				<div class="offer__grids">
					<div
						class="offer__grid"
						v-for="(content, index) in offerContent"
						:key="content.title"
						:class="{ active: chosenServiceIndex == index }"
						@click="chosenServiceIndex = index">
						<h3 class="heading-3">{{ content.title }}</h3>
						<p>{{ content.text }}</p>
					</div>
				</div>
				<div class="offer__images">
					<ResponsiveImage
						original-tag="jpeg"
						name="img-2"
						alt="banner"
						:class="{ active: chosenServiceIndex == 0 }" />
					<ResponsiveImage
						original-tag="jpeg"
						name="services-2"
						alt="banner"
						:class="{ active: chosenServiceIndex == 1 }" />
					<ResponsiveImage
						original-tag="jpeg"
						name="about-img-4"
						alt="banner"
						:class="{ active: chosenServiceIndex == 2 }" />
				</div>
			</div>
		</section>
		<section class="better" data-animate>
			<div class="better__head">
				<p class="text-weight-semibold">{{ $t('better-label') }}</p>
				<h1 class="heading-big">{{ $t('better-title') }}</h1>
			</div>
			<div class="better__container">
				<div class="better__box" v-for="content in betterContent" :key="content.title">
					<ResponsiveImage :name="content.img" :original-tag="content.tag" />
					<h1 class="heading">{{ content.title }}</h1>
					<p>{{ content.text }}</p>
				</div>
			</div>
		</section>
		<section class="message" data-animate>
			<div class="message__content">
				<h1 class="heading-big">
					{{ $t('services-message-title') }}
				</h1>
				<p class="message__text text-size-medium">
					{{ $t('services-message-text') }}
				</p>
			</div>
		</section>
		<section class="travel" data-animate>
			<ResponsiveImage original-tag="jpeg" name="services-big" alt="travel" />
			<div class="travel__content">
				<h1 class="travel__title">{{ $t('travel-title') }}</h1>
				<p class="text-size-medium">
					{{ $t('travel-text') }}
				</p>
				<RouterLink to="/contacts" data-button class="button-primary">{{
					$t('get-in-touch')
				}}</RouterLink>
			</div>
		</section>
	</main>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { computed, onMounted, ref } from 'vue';
import globalIcon from '@/icons/global.svg';
import ringsIcon from '@/icons/rings.svg';
import workIcon from '@/icons/work-white.svg';
import friendshipIcon from '@/icons/friendship.svg';
const betterImg1 = 'services-safety';
const betterImg2 = 'grid-img-3';
const betterImg3 = 'services-humans';
import { i18n } from '@/locale';
import ResponsiveImage from '@/components/ResponsiveImage.vue';

gsap.registerPlugin(ScrollTrigger);

const heroContent = computed(() => [
	{
		icon: globalIcon,
		title: i18n.global.t('services-hero-title-1'),
		text: i18n.global.t('services-hero-text-1')
	},
	{
		icon: ringsIcon,
		title: i18n.global.t('services-hero-title-2'),
		text: i18n.global.t('services-hero-text-2')
	},
	{
		icon: workIcon,
		title: i18n.global.t('services-hero-title-3'),
		text: i18n.global.t('services-hero-text-3')
	},
	{
		icon: friendshipIcon,
		title: i18n.global.t('services-hero-title-4'),
		text: i18n.global.t('services-hero-text-4')
	}
]);
const offerContent = computed(() => [
	{
		title: i18n.global.t('services-offer-title-1'),
		text: i18n.global.t('services-offer-text-1')
	},
	{
		title: i18n.global.t('services-offer-title-2'),
		text: i18n.global.t('services-offer-text-2')
	},
	{
		title: i18n.global.t('services-offer-title-3'),
		text: i18n.global.t('services-offer-text-3')
	}
]);
const betterContent = computed(() => [
	{
		img: betterImg1,
		tag: 'jpg',
		title: i18n.global.t('better-title-1'),
		text: i18n.global.t('better-text-1')
	},
	{
		img: betterImg2,
		tag: 'jpeg',
		title: i18n.global.t('better-title-2'),
		text: i18n.global.t('better-text-2')
	},
	{
		img: betterImg3,
		tag: 'jpg',
		title: i18n.global.t('better-title-3'),
		text: i18n.global.t('better-text-3')
	}
]);

const chosenServiceIndex = ref(0);

onMounted(() => {
	// Hero
	gsap.from('.hero__grid', {
		opacity: 0,
		scale: 0.3,
		duration: 1,
		stagger: 0.2
	});

	// Animate each section
	document.querySelectorAll('[data-animate]').forEach(el => {
		gsap.to(el, {
			scrollTrigger: {
				trigger: el,
				start: 'top center',
				end: 'bottom top',
				toggleClass: 'active'
			}
		});
		setTimeout(() => {
			ScrollTrigger.refresh();
		}, 1500);
	});
});
</script>

<style lang="scss" scoped>
.travel {
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 7rem;
	&.active {
		picture {
			opacity: 1;
			transform: translateX(0);
		}
		.travel__content > * {
			opacity: 1;
			transform: translateY(0);
		}
	}
	&__content {
		align-self: center;
		max-width: 78.6rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2.5rem;
		& > * {
			transition: opacity 600ms, transform 600ms;
			transform: translateY(-7rem);
			opacity: 0;
		}
		p {
			transition-delay: 200ms;
		}
		a {
			transform: translateY(7rem);
			transition-delay: 400ms;
		}
	}
	picture {
		opacity: 0;
		transform: translateX(-50%);
		transition: opacity 1s, transform 1s;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 12px;
	}
	p {
		text-align: center;
	}
	&__title {
		font-size: 4.8rem;
		font-weight: 700;
		letter-spacing: 1.4px;
		line-height: 1.2;
		@media only screen and (max-width: 991px) {
			font-size: 4.4rem;
		}
		@media only screen and (max-width: 768px) {
			font-size: 3.6rem;
		}
	}
}
.message {
	padding-left: 4%;
	padding-right: 4%;
	&.active &__content {
		transform: scale(1);
		opacity: 1;
	}
	&__content {
		transition: transform 1s, opacity 1s;
		transform: scale(0.5);
		opacity: 0;
		display: grid;
		place-items: center;
		background-color: var(--color-secondary);
		border-radius: 18px;
		color: var(--color-primary);
		text-align: center;
		padding: 15rem 0;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		@media only screen and (max-width: 768px) {
			padding: 7rem 0;
		}
		& > * {
			max-width: 70%;
			text-align: center;
			@media only screen and (max-width: 768px) {
				max-width: 95%;
			}
		}
	}
}
.better {
	display: flex;
	flex-direction: column;
	gap: 10rem;
	&.active {
		.better__head {
			& > * {
				transform: translateX(0);
				opacity: 1;
			}
		}
		.better__box {
			opacity: 1;
			transform: scale(1);
		}
	}
	&__head {
		max-width: 70rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		& > * {
			transition: transform 1s, opacity 1s;
			transform: translateX(-120%);
			opacity: 0;
		}
		h1 {
			transition-delay: 200ms;
		}
		@media only screen and (max-width: 768px) {
			max-width: 95%;
		}
	}
	&__container {
		display: flex;
		flex-wrap: wrap;
		gap: 4rem;
		row-gap: 6rem;
		& > * {
			flex: 1;
		}
	}
	&__box {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		min-width: 250px;
		opacity: 0;
		transform: scale(0);
		transition: transform 1s, opacity 1s;
		&:first-child {
			transition-delay: 200ms;
		}
		&:nth-child(2) {
			transition-delay: 400ms;
		}
		&:nth-child(3) {
			transition-delay: 600ms;
		}

		picture {
			width: 100%;
			height: 30rem;
			object-fit: cover;
			border-radius: 12px;
		}
	}
}
.offer {
	display: flex;
	flex-direction: column;
	gap: 8rem;
	&.active {
		.offer__images picture {
			transform: scale(1);
		}
		.offer__grid {
			opacity: 1;
			transform: translateX(0);
		}
		.offer__head {
			& > * {
				opacity: 1;
				transform: translateX(0);
			}
		}
	}
	&__head {
		max-width: 70rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		& > * {
			transition: transform 1s, opacity 1s;
			transform: translateX(-120%);
			opacity: 0;
		}
		h1 {
			transition-delay: 200ms;
		}
		@media only screen and (max-width: 768px) {
			max-width: 95%;
		}
	}
	&__content {
		display: flex;
		gap: 8rem;
		@media only screen and (max-width: 768px) {
			flex-direction: column;
		}
		& > * {
			flex-basis: 50%;
		}
	}
	&__images {
		position: relative;
		@media only screen and (max-width: 768px) {
			height: 53rem;
			flex-basis: initial;
		}
		picture {
			position: absolute;
			opacity: 0;
			transform: scale(0.5);
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 12px;
			transition: opacity 300ms, transform 1.5s;
			&.active {
				opacity: 1;
			}
		}
	}
	&__grids {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}
	&__grid {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-left: 4rem;
		border-left: 2px solid transparent;
		transition: border-color 300ms, background-color 300ms, transform 1s, opacity 1s;
		transform: translateX(-100%);
		opacity: 0;
		&:first-child {
			transition: border-color 300ms, background-color 300ms, transform 1s 400ms,
				opacity 1s 400ms;
		}
		&:nth-child(2) {
			transition: border-color 300ms, background-color 300ms, transform 1s 700ms,
				opacity 1s 700ms;
		}
		&:last-child {
			transition: border-color 300ms, background-color 300ms, transform 1s 900ms,
				opacity 1s 900ms;
		}
		&:hover {
			background-color: var(--color-primary-light);
		}
		&.active {
			border-color: #000;
		}
	}
}
.hero {
	min-height: 100vh;
	padding-top: 11.2rem;
	padding-bottom: 11.2rem;
	text-align: center;
	background-color: var(--color-secondary);
	color: var(--color-primary);
	display: flex;
	flex-direction: column;
	gap: 8rem;
	&__title {
		align-self: center;
		max-width: 76.8rem;
		@media only screen and (max-width: 768px) {
			max-width: 90%;
		}
	}
	&__grid {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: center;
		img {
			width: 5.2rem;
			height: 5.2rem;
		}
		&:first-child {
			grid-area: destination;
		}
		&:nth-child(2) {
			grid-area: mice;
		}
		&:nth-child(3) {
			grid-area: tours;
		}
		&:nth-child(4) {
			grid-area: friendship;
		}
	}
	&__grids {
		display: grid;
		grid-template-areas:
			'. banner .'
			'destination banner mice'
			'tours banner friendship'
			'. banner .';
		row-gap: 7rem;
		column-gap: 3rem;
		@media only screen and (max-width: 900px) {
			grid-template-areas:
				'destination mice'
				'tours friendship'
				'banner banner';
		}
		@media only screen and (max-width: 500px) {
			gap: 3rem;
			grid-template-areas:
				'destination'
				'mice'
				'tours'
				'friendship'
				'banner';
		}
	}
	&__banner {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 16px;
		grid-area: banner;
	}
}

section {
	padding: 7rem 8%;
	@media only screen and (min-width: 1920px) {
		padding: 7rem 15%;
	}
	@media only screen and (max-width: 768px) {
		padding: 7rem 5%;
	}
}
</style>
