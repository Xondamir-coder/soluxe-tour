<template>
	<main class="home">
		<section class="hero">
			<div class="hero__wrapper">
				<div class="hero__images">
					<img class="hero__image" src="@/assets/hero-image-1.webp" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-2.webp" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-3.webp" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-4.webp" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-5.webp" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-6.webp" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-7.webp" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-8.webp" alt="hero img" />
					<img class="hero__image" src="@/assets/hero-image-9.webp" alt="hero img" />
				</div>
				<div class="hero__overlay" :style="heroStyle"></div>
				<h1 class="hero__title">
					<span class="hero__letter">S</span>
					<span class="hero__letter">h</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">w</span>
					<span class="hero__letter">i</span>
					<span class="hero__letter">n</span>
					<span class="hero__letter">g</span> <span class="hero__letter">y</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">u</span> <span class="hero__letter">O</span>
					<span class="hero__letter">m</span>
					<span class="hero__letter">a</span>
					<span class="hero__letter">n</span> <span class="hero__letter">t</span>
					<span class="hero__letter">h</span>
					<span class="hero__letter">r</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">u</span>
					<span class="hero__letter">g</span>
					<span class="hero__letter">h</span> <span class="hero__letter">O</span>
					<span class="hero__letter">m</span>
					<span class="hero__letter">a</span>
					<span class="hero__letter">n</span>
					<span class="hero__letter">i</span> <span class="hero__letter">e</span>
					<span class="hero__letter">y</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">s</span>
				</h1>
			</div>
		</section>
		<section class="offer">
			<h1 class="offer__title">
				We offer travellers the most authentic experiences at the most affordable prices
			</h1>
			<p class="offer__text">
				As our business has been raised on the keynote “Devil is in the detail”, we are
				specialized in servicing small & medium sized global tour operators in order to give
				consideration to this statement and to provide premier experiences unparalleled in
				Oman.
				<br />
				<br />
				Our quest is to provide high-quality services to our clients and to exceed their
				expectations with an unforgettable and authentic experience. Thus, we always try to
				determine the perfect mix of ingredients for creating a product that fits best to
				our client’s preferences.
			</p>
		</section>
		<section class="about">
			<div class="about__images">
				<img
					class="about__image about__image-1"
					src="@/assets/about-image-1.webp"
					alt="about img" />
				<img
					class="about__image about__image-2"
					src="@/assets/about-image-2.webp"
					alt="about img" />
				<img
					class="about__image about__image-3"
					src="@/assets/about-image-3.webp"
					alt="about img" />
				<img
					class="about__image about__image-4"
					src="@/assets/about-image-4.webp"
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
						<button class="button-primary">
							{{
								index < 3
									? content.title.includes('M.I.C.E')
										? 'Make a MICE enquiry'
										: 'Make an enquiry'
									: 'Get in touch'
							}}
						</button>
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
						<button class="button-primary">
							{{
								index < 3
									? content.title.includes('M.I.C.E')
										? 'Make a MICE enquiry'
										: 'Make an enquiry'
									: 'Get in touch'
							}}
						</button>
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
		<div class="section"></div>
		<div class="section"></div>
	</main>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { computed, onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger);
import aboutImg1 from '@/assets/about-image-1.webp';
import aboutImg2 from '@/assets/about-image-2.webp';
import aboutImg3 from '@/assets/about-image-3.webp';
import aboutImg4 from '@/assets/about-image-4.webp';

const aboutContent = [
	{
		img: aboutImg1,
		label: 'Experts in',
		title: 'Destination management',
		desc: "We are a group of passionate travellers and tourism professionals. Our profound love for and knowledge of our country inspires us to share the beauty of Oman with those who seek the unique experiences and hidden secrets of this blessed land. With our team's extensive knowledge of the destination, a dedicated account manager, 24x7 support and strong partnerships around the region, we believe working with us is a no-brainer."
	},
	{
		img: aboutImg2,
		label: 'Driven to create',
		title: 'Authentic experiences',
		desc: 'Over decades, our team of superstars have learnt the secret behind the most memorable time in Oman. While catering to your every need we make sure the experiences remain authentic and off the beaten track'
	},
	{
		img: aboutImg3,
		label: 'Focused on elevating',
		title: 'Corporate travel & M.I.C.E.',
		desc: "When it comes to M.I.C.E. Travel, our team will help you put together unforgettable events for your company. Be it a conference or an incentive trip, trust Arabica Orient's M.I.C.E. team to be your strategic travel partner from the very start."
	},
	{
		img: aboutImg4,
		label: 'Your partner for',
		title: 'A-Z travel solutions',
		desc: "No request is too small or big for us. If it's important to you, it's important to us. We've catered to 1000s of requests from reservations and transfers to exquisitely tailor made tour packages for large groups. We go above and beyond for every client and any request."
	}
];
const heroStyle = computed(() => ({
	visibility: window.scrollY > 2.5 * window.innerHeight ? 'hidden' : 'visible'
}));

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
	gsap.to('.hero__overlay', {
		opacity: 0,
		scrollTrigger: heroScrollTrigger,
		onUpdate: () => {
			document.querySelector('.hero__overlay').classList.remove('hidden');
		},
		onComplete: () => {
			document.querySelector('.hero__overlay').classList.add('hidden');
		}
	});
	gsap.to('.hero__images', {
		scale: 1,
		scrollTrigger: heroScrollTrigger
	});
	gsap.to('.hero__letter', { opacity: 1, duration: 1, stagger: 0.05 });

	// About scrolling effect
	const aboutImages = document.querySelectorAll('.about__image');
	aboutImages.forEach((image, index) => {
		gsap.to(image, {
			opacity: 1,
			scrollTrigger: {
				trigger: `.about__box-${index + 1}`,
				toggleActions: index == 0 ? 'play none reverse' : 'play reverse play reverse',
				start: 'bottom bottom'
			}
		});
	});
	[2, 4].forEach(index => {
		gsap.to(document.body, {
			backgroundColor: 'var(--color-secondary)',
			onUpdate: () => {
				if (window.innerWidth < 1200) {
					document
						.querySelector(`.about__row-${index}`)
						.classList.add('about__row--active');
				} else {
					document
						.querySelector(`.about__box-${index}`)
						.classList.add('about__box--active');
				}
			},
			scrollTrigger: {
				trigger: window.innerWidth < 1200 ? `.about__row-${index}` : `.about__box-${index}`,
				toggleActions: 'play reverse play reverse',
				start: 'top top',
				end: 'bottom center'
			}
		});
	});
});
</script>

<style lang="scss" scoped>
.section {
	height: 100vh;
	background-color: blue;
}
.about {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 8rem;
	padding: 7rem 5%;
	@media only screen and (max-width: 1200px) {
		display: flex;
		flex-direction: column;
		gap: 10rem;
	}
	&__image {
		opacity: 0;
		width: 100%;
		height: 60rem;
		object-fit: cover;
		position: absolute;
		&:first-child {
			opacity: 1;
		}
	}

	&__images {
		height: 100vh;
		position: sticky;
		top: 0;
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
			button {
				color: var(--color-primary);
				border-color: var(--color-primary);
			}
		}
		@media only screen and (min-width: 1200px) {
			display: none;
		}

		&-img {
			width: 100%;
			height: 100%;
			object-fit: cover;
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
	&__box-2.about__box--active,
	&__box-4.about__box--active {
		color: var(--color-primary);
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
	padding: 7rem 5%;
	display: flex;
	gap: 3.5rem;
	color: #000;
	& > * {
		flex-basis: 50%;
	}
	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
	&__title {
		letter-spacing: 1.4px;
		line-height: 1.2;
		font-size: 4rem;
		font-weight: 700;
		@media only screen and (max-width: 768px) {
			font-size: 3rem;
		}
	}
	&__text {
		text-align: left;
		letter-spacing: 0.2px;
		font-size: 1.8rem;
	}
}
.hero {
	height: 300vh;
	&__letter {
		opacity: 0;
	}
	&__wrapper {
		display: grid;
		place-items: center;
		height: 100vh;
		position: sticky;
		top: 0;
		overflow: hidden;
	}
	&__overlay {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		background-color: #0000006f;
		&.hidden {
			visibility: hidden !important;
		}
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
		object-fit: cover;
	}
	&__title {
		max-width: 80%;
		z-index: 10;
		font-size: 16rem;
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
</style>
