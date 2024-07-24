<template>
	<main class="main">
		<section class="hero">
			<h1 class="hero__title heading-big">
				No request is too small or too big. If it's important to you, it's important to us
			</h1>
			<div class="hero__grids">
				<div class="hero__grid" v-for="content in heroContent" :key="content.title">
					<img :src="content.icon" alt="icon" />
					<h6 class="heading-6">{{ content.title }}</h6>
					<p>{{ content.text }}</p>
				</div>
				<img class="hero__banner" src="@/assets/img-7.jpeg" alt="hero" />
			</div>
			<div class="hero__grid">
				<img src="@/assets/icons/checklist.svg" alt="icon" />
				<h6 class="heading-5">A-Z travel services</h6>
				<p>
					Comprehensive support and solutions, from planning to execution, ensuring a
					stress-free journey
				</p>
			</div>
		</section>
		<section class="offer" data-animate>
			<div class="offer__head">
				<p class="text-weight-semibold">What we offer</p>
				<h1 class="heading-big">Ordinary people, creating extraordinary experiences</h1>
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
					<img
						:class="{ active: chosenServiceIndex == 0 }"
						src="@/assets/about-img-3.jpeg"
						alt="banner" />
					<img
						:class="{ active: chosenServiceIndex == 1 }"
						src="@/assets/big-img.webp"
						alt="banner" />
					<img
						:class="{ active: chosenServiceIndex == 2 }"
						src="@/assets/about-img-4.jpeg"
						alt="banner" />
				</div>
			</div>
		</section>
		<section class="better" data-animate>
			<div class="better__head">
				<p class="text-weight-semibold">How we do it better</p>
				<h1 class="heading-big">Ordinary people, creating extraordinary experiences</h1>
			</div>
			<div class="better__container">
				<div class="better__box" v-for="content in betterContent" :key="content.title">
					<img :src="content.img" alt="banner" />
					<h1 class="heading">{{ content.title }}</h1>
					<p>{{ content.text }}</p>
				</div>
			</div>
		</section>
		<section class="message" data-animate>
			<div class="message__content">
				<h1 class="heading-big">
					We believe in intentionally diverting from the beaten path in pursuit of
					authentic experiences.
				</h1>
				<p class="message__text text-size-medium">
					We value the importance of authentic, connected travel, and work tirelessly to
					create once-in-a-lifetime experiences that benefit you, mankind, and the diverse
					locations you visit.
				</p>
			</div>
		</section>
		<section class="travel" data-animate>
			<img src="@/assets/travel.webp" alt="travel" />
			<div class="travel__content">
				<h1 class="travel__title">More than just a travel partner</h1>
				<p class="text-size-medium">
					We believe in the power of relationships and community, with us conversations go
					deep, friendships are forged, and connections last a lifetime. We're more than
					just a travel partner.
				</p>
				<RouterLink to="/contacts" data-button class="button-primary"
					>Get in touch</RouterLink
				>
			</div>
		</section>
	</main>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';
import globalIcon from '@/assets/icons/global.svg';
import ringsIcon from '@/assets/icons/rings.svg';
import workIcon from '@/assets/icons/work-white.svg';
import friendshipIcon from '@/assets/icons/friendship.svg';
import betterImg1 from '@/assets/img-6.jpeg';
import betterImg2 from '@/assets/hero-image-9.jpeg';
import betterImg3 from '@/assets/img-5.jpeg';

gsap.registerPlugin(ScrollTrigger);

const heroContent = [
	{
		icon: globalIcon,
		title: 'Destination management',
		text: 'Expertly curated Uzbek experiences with local insights and seamless logistics'
	},
	{
		icon: ringsIcon,
		title: 'Tours designed to your needs',
		text: 'Tailor-made itineraries crafted to match individual preferences and interests'
	},
	{
		icon: workIcon,
		title: 'M.I.C.E',
		text: 'Professional and efficient Meetings, Incentives, Conferences, and Exhibitions services'
	},
	{
		icon: friendshipIcon,
		title: 'Strong local partnerships',
		text: 'Extensive network and collaborations for exclusive access and authentic experiences at unbeatable prices'
	}
];
const offerContent = [
	{
		title: 'Destination management',
		text: "Our comprehensive destination management services offer an in-depth understanding of Oman, ensuring seamless travel arrangements, professional guidance, and access to the country's hidden gems. From logistics to cultural experiences, we curate an enriching journey for your clients."
	},
	{
		title: 'Full concierge',
		text: 'With our full concierge service, we take care of every detail, including accommodation, transportation, and activities, offering a hassle-free experience for your clients. Our dedicated team ensures a smooth and personalized journey tailored to their preferences.'
	},
	{
		title: 'Corporate & MICE travel',
		text: 'We make business travel easy, stress free and cost efficient while personalising every aspect to meet your needs. We can help you plan and execute truly memorable events for your business. We are committed to providing your team a safe and delightful experience.'
	}
];
const betterContent = [
	{
		img: betterImg1,
		title: 'Your safety is our first priority',
		text: 'Your safety is our utmost priority. We implement stringent measures and work closely with trusted partners to ensure worry-free journeys through Uzbekistan.'
	},
	{
		img: betterImg2,
		title: 'Personalised for every unique need',
		text: 'Embrace the joy of travel tailored exclusively for you. Our dedicated team designs personalized experiences, embracing your passions and preferences, making memories to cherish.'
	},
	{
		img: betterImg3,
		title: 'Real humans, real connections',
		text: 'Experience genuine warmth and care from our team. We believe in building meaningful connections, offering personalized support at every step of your adventure in Uzbekistan.'
	}
];

const chosenServiceIndex = ref(0);

onMounted(() => {
	// Hero
	gsap.to('.hero__grid', {
		opacity: 1,
		transform: 'scale(1)',
		duration: 1,
		stagger: 0.2,
		scrollTrigger: {
			start: 'top+=100 top'
		}
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
		img {
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
	img {
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

		img {
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
		.offer__images img {
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
		img {
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
		opacity: 0;
		transform: scale(0.3);
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
