<template>
	<main class="main">
		<section class="hero">
			<div class="hero__content">
				<h1 class="heading-style-h1">
					<span class="hero__letter">T</span>
					<span class="hero__letter">h</span>
					<span class="hero__letter">e</span> <span class="hero__letter">p</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">r</span>
					<span class="hero__letter">f</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">c</span>
					<span class="hero__letter">t</span> <span class="hero__letter">d</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">s</span>
					<span class="hero__letter">t</span>
					<span class="hero__letter">i</span>
					<span class="hero__letter">n</span>
					<span class="hero__letter">a</span>
					<span class="hero__letter">t</span>
					<span class="hero__letter">i</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">n</span> <span class="hero__letter">f</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">r</span> <span class="hero__letter">a</span>
					<span class="hero__letter">n</span>
					<span class="hero__letter">y</span> <span class="hero__letter">o</span>
					<span class="hero__letter">c</span>
					<span class="hero__letter">c</span>
					<span class="hero__letter">a</span>
					<span class="hero__letter">s</span>
					<span class="hero__letter">i</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">n</span>
				</h1>
				<p class="text-size-medium">
					Uzbekistan, at the crossroads of Central Asia, is a blend of ancient and modern
					wonders. Bordering Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan, and
					Turkmenistan, it offers a rich tapestry of history and culture. Discover Silk
					Road cities, stunning deserts, and magnificent Islamic architecture. Experience
					vibrant bazaars, historic mosques, and grand palaces in this landlocked gem.
				</p>
			</div>
			<img src="@/assets/mountains.jpg" alt="mountains" class="hero__image" />
		</section>
		<section class="take" data-animate>
			<div class="take__content">
				<p class="text-weight-semibold">Our take</p>
				<p class="text-size-medium">
					Due to the scenic diversity alone, Oman already has an incredible amount to
					offer. Nature lovers and action lovers will get their money’s worth in the
					fascinating desert landscapes, mystical mountain ranges, and surprisingly green
					oases. For those seeking relaxation, the more than 1,700km long coastline offers
					one dream beach after another, and exciting cultural highlights await you in the
					cities and villages.
				</p>
				<img src="@/assets/icons/flower.svg" alt="flower" class="take__image" />
			</div>
		</section>
		<section class="discover" data-animate>
			<div class="discover__cta">
				<h1 class="heading-style-h2">Discover the best of Uzbekistan with Soluxe Tour</h1>
				<p class="text-size-medium">
					Uzbekistan is still an insider tip among travelers, where mass tourism or
					overcrowded sights are nowhere to be found. Instead, an authentic oriental
					experience awaits you in the safest travel destination of the Central Asia:
					Breathtaking landscapes, fascinating culture, and genuine encounters with the
					incredibly friendly Uzbeks.
				</p>
				<button class="discover__button">
					<span>Get in touch</span>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M6 3L11 8L6 13" stroke="CurrentColor" stroke-width="1.5"></path>
					</svg>
				</button>
			</div>
			<div class="discover__container">
				<div class="discover__box" v-for="content in discoverContent" :key="content.title">
					<img :src="content.icon" alt="icon" />
					<h1 class="heading">{{ content.title }}</h1>
					<p>{{ content.desc }}</p>
				</div>
			</div>
		</section>
		<Tours data-animate />
		<section class="titles">
			<h1 class="titles__top">Beautiful beaches. Glistening waters. Rugged mountains.</h1>
			<h1 class="titles__bottom">Luxury resorts. Vibrant culture. Thrilling adventures.</h1>
		</section>
		<GridImages />
	</main>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';
import bulbIcon from '@/assets/icons/bulb.svg';
import heartIcon from '@/assets/icons/heart.svg';
import idIcon from '@/assets/icons/id.svg';
import loveIcon from '@/assets/icons/love.svg';
import Tours from '@/components/Tours.vue';
import GridImages from '@/components/GridImages.vue';

gsap.registerPlugin(ScrollTrigger);

const discoverContent = [
	{
		icon: bulbIcon,
		title: 'Deep expertise & knowledge',
		desc: "We're a team of passionate experts, with years of experience, always aim to immerse visitors in the wonders of Oman to create an unforgettable journey."
	},
	{
		icon: heartIcon,
		title: 'Thoughtfully bespoke',
		desc: "We'll craft a personalized itinerary tailored to your needs and requirements, creating cherished memories for a unique adventure."
	},
	{
		icon: idIcon,
		title: 'Customer first approach',
		desc: "Keeping visitors happy is our priority. We'll be by your side, offering warm support and exceptional service, ensuring a delightful experience."
	},
	{
		icon: loveIcon,
		title: 'Support you can depend upon',
		desc: 'Count on us anytime, day or night. With our dedicated 24/7 assistance, travellers can feel confident and cared for throughout their journey in Uzbekistan.'
	}
];

onMounted(() => {
	/**
	 * TODO: fix animation
	 */
	gsap.to('.hero__image', {
		transform: 'scale(1)',
		scrollTrigger: {
			trigger: '.hero',
			scrub: 1,
			start: 'center center',
			end: 'center top'
		}
	});
	gsap.to('.hero__content', {
		transform: 'scale(.8) translateY(100px)',
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero__content',
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
	gsap.to('.hero__letter', { opacity: 1, duration: 0.8, stagger: 0.05 });
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
	&__cta {
		flex-basis: 40%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: flex-start;
		transform: translateX(-100%);
		opacity: 0;
		transition: transform 1s, opacity 1s;
		button {
			border: none;
			display: flex;
			align-items: center;
			gap: 1rem;
			color: var(--color-secondary);
			svg {
				transition: transform 0.3s;
			}
			&:hover svg {
				transform: translateX(7px);
			}
		}
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
		bottom: 5rem;
		left: -19rem;
		transform: scale(1.6) rotate(149deg);
		object-fit: cover;
		@media only screen and (max-width: 768px) {
			transform: scale(1) rotate(149deg);
			bottom: -10rem;
			left: -25rem;
		}
		@media only screen and (max-width: 500px) {
			transform: scale(0.7) rotate(149deg);
			bottom: -20rem;
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
		& > *:not(img) {
			z-index: 1;
		}
	}
}
.hero {
	background-color: var(--color-secondary);
	padding: 10rem 0;
	&__letter {
		opacity: 0;
	}
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
