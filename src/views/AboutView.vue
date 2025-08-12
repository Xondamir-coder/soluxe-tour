<template>
	<main class="main">
		<section class="hero">
			<div class="hero__content">
				<p class="text-weight-semibold">{{ $t('about-hero-label') }}</p>
				<h1 class="hero__title">
					<span class="hero__letter" v-for="(letter, i) in letters" :key="i">
						{{ letter }}
					</span>
				</h1>
				<RouterLink data-button class="hero__button button-primary" to="/contacts">
					{{ $t('get-in-touch') }}
				</RouterLink>
			</div>
			<Ornament class="hero__ornament hero__ornament--1" />
			<Ornament class="hero__ornament hero__ornament--2" />
		</section>
		<section data-animate class="reason">
			<h1 class="heading-style-h1">
				<strong>{{ $t('reason-title') }}</strong>
			</h1>
			<p class="text-size-medium">
				{{ $t('reason-subtitle') }}
			</p>
		</section>
		<section data-animate class="cards">
			<div class="cards__item">
				<p class="text-size-medium text-weight-semibold">
					<span>01</span> {{ $t('card-label-1') }}
				</p>
				<div class="cards__content">
					<div class="cards__paragraphs">
						<h1 class="heading-big">
							{{ $t('card-title-1') }}
						</h1>
						<p class="text-size-medium">
							{{ $t('card-text-1') }}
						</p>
					</div>
					<img class="cards__image" src="@/assets/card-1.avif" alt="banner" />
				</div>
			</div>
			<div class="cards__item">
				<p class="text-size-medium text-weight-semibold">
					<span>02</span> {{ $t('card-label-1') }}
				</p>
				<div class="cards__content">
					<div class="cards__paragraphs">
						<h1 class="heading-big">
							{{ $t('card-title-1') }}
						</h1>
						<p class="text-size-medium">
							{{ $t('card-text-1') }}
						</p>
					</div>
					<img class="cards__image" src="@/assets/card-2.avif" alt="banner" />
				</div>
			</div>
			<div class="cards__item cards__item--last">
				<p class="text-size-medium text-weight-semibold">
					<span>03</span> {{ $t('card-label-3') }}
				</p>
				<div class="values">
					<h1 class="heading">{{ $t('card-title-3') }}</h1>
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
			<p class="partners__title text-size-medium">{{ $t('best-title') }}</p>
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
				<p class="text-weight-semibold">{{ $t('tips-title') }}</p>
				<p class="text-size-medium">
					{{ $t('tips-text-1') }}
				</p>
				<p class="text-size-medium">
					{{ $t('tips-text-2') }}
				</p>
			</div>
		</section>
		<section data-animate class="message">
			<div class="message__content">
				<Ornament class="message__ornament" />
				<h1 class="heading-style-h1">
					{{ $t('message-title') }}
				</h1>
				<RouterLink data-button class="button-primary" to="/contacts">
					{{ $t('get-in-touch') }}
				</RouterLink>
			</div>
		</section>
	</main>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import gsap from 'gsap';
import heartIcon from '@/assets/icons/heart.svg';
import checkIcon from '@/assets/icons/check.svg';
import idIcon from '@/assets/icons/id.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Ornament from '@/components/Ornament.vue';
import { i18n } from '@/locale';
gsap.registerPlugin(ScrollTrigger);

const letters = computed(() => i18n.global.t('about-hero-title').split(''));
const valuesContent = computed(() => [
	{
		icon: heartIcon,
		title: i18n.global.t('value-title-1'),
		text: i18n.global.t('value-text-1')
	},
	{
		icon: checkIcon,
		title: i18n.global.t('value-title-2'),
		text: i18n.global.t('value-text-2')
	},
	{
		icon: idIcon,
		title: i18n.global.t('value-title-3'),
		text: i18n.global.t('value-text-3')
	}
]);

onMounted(() => {
	gsap.from('.hero__letter', { opacity: 0, duration: 1, stagger: 0.05 });
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
