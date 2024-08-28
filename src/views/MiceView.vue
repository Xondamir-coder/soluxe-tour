<template>
	<main class="main">
		<section class="hero">
			<img class="hero__image hero__image--1" src="@/assets/img-5.jpeg" alt="img 1" />
			<img class="hero__image hero__image--2" src="@/assets/hero-image-5.jpeg" alt="img 2" />
			<img class="hero__image hero__image--3" src="@/assets/experts-4.jpeg" alt="img 3" />
			<img class="hero__image hero__image--4" src="@/assets/img-9.jpeg" alt="img 4" />
			<img class="hero__image hero__image--5" src="@/assets/about-img-3.jpg" alt="img 5" />
			<img class="hero__image hero__image--6" src="@/assets/hero-image-3.jpeg" alt="img 6" />
			<div class="hero__content">
				<h1 class="heading-style-h1">{{ $t('mice-hero-title') }}</h1>
				<p class="text-size-medium">
					{{ $t('mice-hero-text') }}
				</p>
				<RouterLink to="/contacts" data-button class="hero__button">
					{{ $t('make-mice-enquiry') }}
				</RouterLink>
			</div>
		</section>
		<section class="business" data-animate>
			<h1 class="heading-style-h2">{{ $t('business-title') }}</h1>
			<div class="business__container">
				<div class="business__box" v-for="content in businessContent" :key="content.title">
					<img :src="content.icon" alt="icon" />
					<h5 class="heading-5">{{ content.title }}</h5>
					<p>{{ content.text }}</p>
				</div>
			</div>
		</section>
		<Tours />
		<section class="us" data-animate>
			<div class="us__content">
				<p class="text-weight-semibold">{{ $t('us-label') }}</p>
				<h1 class="heading-style-h2">
					{{ $t('us-title') }}
				</h1>
				<p class="text-size-medium">
					{{ $t('us-text') }}
				</p>
				<div class="us__container">
					<div class="us__data">
						<p class="us__data-percent">125+</p>
						<p>
							{{ $t('us-text-1') }}
						</p>
					</div>
					<div class="us__data">
						<p class="us__data-percent">90%</p>
						<p>{{ $t('us-text-2') }}</p>
					</div>
				</div>
			</div>
			<div class="us__image">
				<img src="@/assets/hero-image-2.jpeg" alt="banner" />
			</div>
		</section>
		<section class="cards" data-animate>
			<div
				class="cards__item"
				v-for="(content, i) in cardsContent"
				:ket="content.title"
				:class="{ 'cards__item--reverse': (i + 1) % 2 == 0 }">
				<div class="cards__item-content">
					<p class="text-weight-semibold">{{ content.label }}</p>
					<h1 class="heading">{{ content.title }}</h1>
					<p>{{ content.text }}</p>
				</div>
				<img class="cards__image" :src="content.img" alt="img" />
			</div>
		</section>
	</main>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { computed, onMounted } from 'vue';
import chatIcon from '@/assets/icons/chat.svg';
import contactIcon from '@/assets/icons/contact.svg';
import puzzleIcon from '@/assets/icons/puzzle.svg';
import Tours from '@/components/Tours.vue';
import cardsBanner1 from '@/assets/mice-1.jpg';
import cardsBanner2 from '@/assets/mice-2.jpg';
import cardsBanner3 from '@/assets/mice-3.jpg';
import cardsBanner4 from '@/assets/mice-4.jpg';
import { i18n } from '@/locale';

gsap.registerPlugin(ScrollTrigger);

const businessContent = computed(() => [
	{
		icon: chatIcon,
		title: i18n.global.t('business-title-1'),
		text: i18n.global.t('business-text-1')
	},
	{
		icon: contactIcon,
		title: i18n.global.t('business-title-2'),
		text: i18n.global.t('business-text-2')
	},
	{
		icon: puzzleIcon,
		title: i18n.global.t('business-title-3'),
		text: i18n.global.t('business-text-3')
	}
]);
const cardsContent = computed(() => [
	{
		img: cardsBanner1,
		label: i18n.global.t('mice-card-label-1'),
		title: i18n.global.t('mice-card-title-1'),
		text: i18n.global.t('mice-card-text-1')
	},
	{
		img: cardsBanner2,
		label: i18n.global.t('mice-card-label-2'),
		title: i18n.global.t('mice-card-title-2'),
		text: i18n.global.t('mice-card-text-2')
	},
	{
		img: cardsBanner3,
		label: i18n.global.t('mice-card-label-3'),
		title: i18n.global.t('mice-card-title-3'),
		text: i18n.global.t('mice-card-text-3')
	},
	{
		img: cardsBanner4,
		label: i18n.global.t('mice-card-label-4'),
		title: i18n.global.t('mice-card-title-4'),
		text: i18n.global.t('mice-card-text-4')
	}
]);

onMounted(() => {
	[-1000, -800, -500, -900, -1000, -1000].forEach((y, index) => {
		const i = index + 1;
		gsap.to(`.hero__image--${i}`, {
			y,
			scrollTrigger: {
				trigger: '.hero',
				start: 'top top',
				scrub: 1
			}
		});
	});

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

	if (window.innerWidth <= 768) return;
	document.querySelectorAll('.cards__item').forEach((el, i) => {
		if (i == 3) return;
		gsap.to(el, {
			transform: 'scale(.8)',
			scrollTrigger: {
				trigger: el,
				start: 'center center',
				end: 'bottom top',
				scrub: 1
			}
		});
	});
});
</script>

<style lang="scss" scoped>
.cards {
	display: flex;
	flex-direction: column;
	gap: 3rem;

	&.active {
		.cards__item-content > * {
			transform: translateX(0);
			opacity: 1;
		}
		.cards__image {
			transform: scale(1);
			opacity: 1;
		}
	}

	&__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 12px;
		transform: scale(0);
		opacity: 0;
		transition: transform 1s, opacity 1s;
		@media only screen and (max-width: 500px) {
			display: none;
		}
	}
	&__item {
		background-color: var(--color-primary);
		position: sticky;
		top: 0;
		padding: 8rem;
		border-radius: 24px;
		border: 2px solid var(--color-black);
		display: grid;
		column-gap: 4rem;
		row-gap: 2rem;
		grid-template-columns: repeat(2, 1fr);
		@media only screen and (max-width: 1024px) {
			padding: 2rem;
		}
		@media only screen and (max-width: 768px) {
			position: static;
			grid-template-columns: auto;
		}
		&--reverse {
			.cards__item-content {
				order: 1;
			}
		}
		&-content {
			padding: 2rem;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			& > * {
				transition: transform 0.5s, opacity 0.5s;
				transform: translateX(-100%);
				opacity: 0;
			}
			.heading {
				transition-delay: 100ms;
			}
			p:not(.text-weight-semibold) {
				transition-delay: 200ms;
			}
			@media only screen and (max-width: 500px) {
				padding: 1rem;
			}
		}
	}
}
.us {
	display: flex;
	column-gap: 10rem;
	row-gap: 5rem;
	background: var(--color-secondary);
	color: var(--color-primary);
	flex-wrap: wrap;
	overflow: hidden;
	@media only screen and (max-width: 900px) {
		flex-direction: column;
	}

	&.active > * {
		opacity: 1;
		transform: translateX(0);
	}
	& > * {
		flex: 1;
		opacity: 0;
		transition: transform 1s, opacity 1s;
	}
	&__image {
		position: relative;
		transform: translateX(100%);

		&::before {
			content: '';
			width: 70%;
			height: 60%;
			border-style: none solid solid none;
			border-width: 0 3px 3px 0;
			border-color: var(--butter);
			border-radius: 0 0 12px;
			position: absolute;
			top: auto;
			bottom: -6%;
			left: auto;
			right: -4%;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&__content {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		transform: translateX(-100%);
	}
	&__container {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}
	&__data {
		flex: 1;
		min-width: 150px;
	}
}
.business {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 7rem;
	&.active {
		.business__box {
			transform: translateX(0);
			opacity: 1;
		}
		h1 {
			transform: translateY(0);
			opacity: 1;
		}
	}
	&__box {
		min-width: 200px;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.5rem;
		opacity: 0;
		transform: translateX(-100%);
		transition: transform 0.6s, opacity 0.6s;
		&:nth-child(2) {
			transition-delay: 0.3s;
		}
		&:nth-child(3) {
			transition-delay: 0.6s;
		}
		img {
			width: 4.8rem;
			height: 4.8rem;
		}
	}
	&__container {
		display: flex;
		min-width: 300px;
		flex-wrap: wrap;
		gap: 4rem;
	}
	h1 {
		text-align: center;
		opacity: 0;
		transform: translateY(-10rem);
		transition: transform 0.5s, opacity 0.5s;
	}
}
.hero {
	background-color: var(--color-secondary);
	position: relative;
	min-height: 200vh;
	color: var(--color-primary);
	text-align: center;
	&__button {
		color: var(--color-secondary);
		background: var(--color-primary);
		border-color: var(--color-primary);
		&:hover {
			background: var(--color-secondary);
			color: var(--color-primary);
		}
	}
	&__content {
		z-index: 2;
		margin: auto;
		position: sticky;
		top: 50%;
		transform: translateY(-50%);
		max-width: 70rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
		@media only screen and (max-width: 768px) {
			max-width: 90%;
		}
		p {
			text-align: center;
		}
	}
	&__image {
		border-radius: 16px;
		position: absolute;
		width: clamp(120px, 30vw, 300px);
		height: clamp(150px, 40vw, 350px);
		object-fit: cover;
		&--1 {
			z-index: 1;
			left: 5%;
			top: 35%;
		}
		&--2 {
			right: 5%;
			top: 55%;
		}
		&--3 {
			left: 20%;
			top: 55%;
		}
		&--4 {
			right: 30%;
			top: 45%;
		}
		&--5 {
			left: 10%;
			top: 120%;
		}
		&--6 {
			right: 10%;
			top: 130%;
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
</style>
