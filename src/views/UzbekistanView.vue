<template>
	<main class="main">
		<section class="hero" ref="heroRef">
			<div ref="heroContentRef" class="hero__content">
				<h1 class="heading-style-h1">
					<span class="hero__letter" v-for="(letter, i) in letters" :key="i">
						{{ letter }}
					</span>
				</h1>
				<p class="text-size-medium">
					{{ $t('uzb-hero-text') }}
				</p>
			</div>
			<img
				ref="heroImageRef"
				src="@/assets/mountains.avif"
				alt="mountains"
				class="hero__image" />
		</section>
		<HorizontalCards />
		<section class="take" data-animate>
			<div class="take__content">
				<p class="text-weight-semibold">{{ $t('take-title') }}</p>
				<p class="text-size-medium">
					{{ $t('take-text') }}
				</p>
				<Ornament class="take__image" />
			</div>
		</section>
		<section class="discover" data-animate>
			<div class="discover__cta">
				<h1 class="heading-style-h2">{{ $t('discover-title') }}</h1>
				<p class="text-size-medium">
					{{ $t('discover-subtitle') }}
				</p>
				<RouterLink data-animate to="/contacts" class="discover__button">
					<span>{{ $t('get-in-touch') }}</span>
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
			<div class="discover__container">
				<div class="discover__box" v-for="content in discoverContent" :key="content.title">
					<img :src="content.icon" alt="icon" />
					<h1 class="heading">{{ content.title }}</h1>
					<p>{{ content.desc }}</p>
				</div>
			</div>
		</section>
		<Tours />
		<section class="titles">
			<h1 class="titles__top">{{ $t('titles-1') }}</h1>
			<h1 class="titles__bottom">{{ $t('titles-2') }}</h1>
		</section>
		<GridImages />
	</main>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { computed, onMounted, ref } from 'vue';
import bulbIcon from '@/assets/icons/bulb.svg';
import heartIcon from '@/assets/icons/heart.svg';
import idIcon from '@/assets/icons/id.svg';
import loveIcon from '@/assets/icons/love.svg';
import Tours from '@/components/Tours.vue';
import GridImages from '@/components/GridImages.vue';
import HorizontalCards from '@/components/HorizontalCards.vue';
import Ornament from '@/components/Ornament.vue';
import { i18n } from '@/locale';

gsap.registerPlugin(ScrollTrigger);

const letters = computed(() => i18n.global.t('uzb-hero-title').split(''));
const discoverContent = computed(() => [
	{
		icon: bulbIcon,
		title: i18n.global.t('discover-title-1'),
		desc: i18n.global.t('discover-text-1')
	},
	{
		icon: heartIcon,
		title: i18n.global.t('discover-title-2'),
		desc: i18n.global.t('discover-text-2')
	},
	{
		icon: idIcon,
		title: i18n.global.t('discover-title-3'),
		desc: i18n.global.t('discover-text-3')
	},
	{
		icon: loveIcon,
		title: i18n.global.t('discover-title-4'),
		desc: i18n.global.t('discover-text-4')
	}
]);

const heroRef = ref();
const heroImageRef = ref();
const heroContentRef = ref();

onMounted(() => {
	gsap.to(heroImageRef.value, {
		scale: 1,
		scrollTrigger: {
			trigger: heroRef.value,
			scrub: 1,
			start: 'center center',
			end: 'center top'
		}
	});
	gsap.to(heroContentRef.value, {
		scale: 0.8,
		y: 100,
		opacity: 0,
		scrollTrigger: {
			trigger: heroContentRef.value,
			scrub: 1,
			start: '5% top',
			end: 'bottom 10%'
		}
	});
	gsap.fromTo(
		'.titles__bottom',
		{
			x: -400
		},
		{
			x: -10,
			scrollTrigger: {
				trigger: '.titles',
				scrub: 1,
				start: 'top bottom-=15%'
			}
		}
	);
	gsap.fromTo(
		'.titles__top',
		{
			x: 100
		},
		{
			x: -100,
			scrollTrigger: {
				trigger: '.titles',
				scrub: 1,
				start: 'top bottom-=15%'
			}
		}
	);
	gsap.utils.toArray('[data-animate]').forEach(el => {
		gsap.to(el, {
			scrollTrigger: {
				trigger: el,
				start: 'top center',
				end: 'bottom top',
				toggleClass: 'active'
			}
		});
	});
	gsap.from('.hero__letter', { opacity: 0, duration: 0.8, stagger: 0.05 });
});
</script>

<style lang="scss" scoped>
.titles {
	padding-left: 0 !important;
	padding-right: 0 !important;
	overflow: hidden;
	h1 {
		font-size: 9.6rem;
		font-weight: 700;
		line-height: 1.2;
		text-wrap: nowrap;
		@media only screen and (max-width: 500px) {
			font-size: 4.8rem;
		}
		@media only screen and (max-width: 767px) {
			font-size: 4.8rem;
		}
	}
}
.discover {
	display: flex;
	gap: 10rem;
	@media only screen and (max-width: 1000px) {
		flex-direction: column;
	}
	&.active {
		.discover__cta {
			transform: translateX(0);
			opacity: 1;
		}
		.discover__box {
			transform: scale(1);
			opacity: 1;
		}
	}
	&__button {
		border: none;
		display: flex;
		align-items: center;
		gap: 1rem;
		color: var(--color-secondary);
		letter-spacing: 1px;
		svg {
			transition: transform 0.3s;
		}
		&:hover svg {
			transform: translateX(7px);
		}
	}
	&__cta {
		flex-basis: 40%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: flex-start;
		transform: translateX(-100%);
		opacity: 0;
		transition: transform 1s, opacity 1s;
	}
	&__box {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
		transform: scale(0);
		opacity: 0;
		transition: transform 1s, opacity 1s;
		img {
			width: 4.8rem;
			height: 4.8rem;
		}
		&:nth-child(2) {
			transition-delay: 0.2s;
		}
		&:nth-child(3) {
			transition-delay: 0.4s;
		}
		&:nth-child(4) {
			transition-delay: 0.6s;
		}
	}
	&__container {
		flex-basis: 60%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 4rem;
		@media only screen and (max-width: 1000px) {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}
}
.take {
	&.active &__content {
		transform: scale(1);
		opacity: 1;
	}
	&__image {
		position: absolute;
		bottom: 6rem;
		left: -26rem;
		object-fit: cover;
		@media only screen and (max-width: 768px) {
			transform: scale(0.7);
			bottom: 5rem;
			left: -30rem;
		}
		@media only screen and (max-width: 500px) {
			transform: scale(0.5);
			bottom: 5rem;
			left: -30rem;
		}
	}
	&__content {
		transition: transform 1s, opacity 1s;
		transform: scale(0.3);
		opacity: 0;
		overflow: hidden;
		padding: 15rem;
		position: relative;
		background-color: var(--color-secondary);
		border-radius: 16px;
		text-align: center;
		color: var(--color-primary);
		display: grid;
		place-items: center;
		grid-auto-rows: max-content;
		align-content: center;
		gap: 1rem;
		@media only screen and (max-width: 768px) {
			padding: 10rem;
		}
		@media only screen and (max-width: 500px) {
			padding: 7rem 2rem;
		}
		& > *:not(.take__image) {
			z-index: 1;
		}
	}
}
.hero {
	background-color: var(--color-secondary);
	padding: 10rem 0;
	&__content {
		color: var(--color-primary);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 2rem;
		transform-style: preserve-3d;
	}
	&__image {
		transform: scale(0.75);
		width: 100%;
		height: 100vh;
		border-radius: 12px;

		@media only screen and (max-width: 768px) {
			height: 50rem;
		}
	}
	h1 {
		max-width: 15ch;
	}
	p {
		max-width: 70ch;
		text-align: center;
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
