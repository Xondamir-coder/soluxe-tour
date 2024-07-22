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
				<div class="hero__overlay"></div>
				<h1 class="hero__title">
					<span class="hero__letter">S</span>
					<span class="hero__letter">h</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">w</span>
					<span class="hero__letter">i</span>
					<span class="hero__letter">n</span>
					<span class="hero__letter">g</span> <span class="hero__letter">y</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">u</span> <span class="hero__letter">U</span>
					<span class="hero__letter">z</span>
					<span class="hero__letter">b</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">k</span>
					<span class="hero__letter">i</span>
					<span class="hero__letter">s</span>
					<span class="hero__letter">t</span>
					<span class="hero__letter">a</span>
					<span class="hero__letter">n</span> <span class="hero__letter">t</span>
					<span class="hero__letter">h</span>
					<span class="hero__letter">r</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">u</span>
					<span class="hero__letter">g</span>
					<span class="hero__letter">h</span> <span class="hero__letter">U</span>
					<span class="hero__letter">z</span>
					<span class="hero__letter">b</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">k</span> <span class="hero__letter">e</span>
					<span class="hero__letter">y</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">s</span>
				</h1>
			</div>
		</section>
		<section class="offer">
			<h1 class="heading">
				We offer travellers the most authentic experiences at the most affordable prices
			</h1>
			<p class="offer__text">
				As our business has been raised on the keynote “Devil is in the detail”, we are
				specialized in servicing small & medium sized global tour operators in order to give
				consideration to this statement and to provide premier experiences unparalleled in
				Uzbekistan.
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
		<section>
			<img src="@/assets/big-img.webp" alt="big img" />
		</section>
		<section class="explore">
			<div class="explore__head">
				<span class="explore__label">Tours</span>
				<h1 class="explore__head-title">Explore the best Uzbekistan has to offer</h1>
				<p class="explore__text">
					Our team of experts sources eye-catching special offers; from private island
					tours to thrilling adventure ones, our collection is simply irresistible.
				</p>
			</div>
			<div class="explore__grids">
				<div class="explore__grid explore__grid--big">
					<div class="explore__grid-content">
						<span class="explore__label">Best selling</span>
						<h1 class="explore__grid-title--big">Glimpse of Uzbekistan</h1>
						<p class="explore__grid-text">
							Our most popular package is called Best of Uzbekistan; it is a
							guaranteed both Italian and german seat-in-coach program that takes
							place every week. The program is carved out to include all the important
							and most interesting sites in Uzbekistan offering the best combination
							of culture, history and little bit of adventure
						</p>
					</div>
					<img src="@/assets/grid-img-1.webp" alt="grid img" />
				</div>
				<div class="explore__grid explore__grid--medium">
					<img src="@/assets/grid-img-2.webp" alt="grid img" />
					<div class="explore__grid-content">
						<span class="explore__label">Family favourite</span>
						<h1 class="explore__grid-title--small">Wahiba sands</h1>
						<p class="explore__grid-text">
							Wahiba Sands occur to be an infinite expanse of uniform dunes. The
							towering heaps of sand turn from pale gold at noon to a brilliant yellow
							and then coppery orange at lower angles of the sun. An overnight stay
							here provides a simple opportunity to feel the raw strength of the
							desert from the comforts of opulent camps.
						</p>
					</div>
				</div>
				<div class="explore__grid explore__grid--big">
					<div class="explore__grid-content">
						<span class="explore__label">Most authentic experiences</span>
						<h1 class="explore__grid-title--big">Nizwa Friday Market</h1>
						<p class="explore__grid-text">
							Nizwa Friday Market is one of the most attractive event for tourist
							visiting Uzbekistan. It is an electrifying experience for the first time
							visitor as you would not see such action packed live stock trade
							anywhere in the world. Here farmers and traders come to this one of the
							best traditional market places in the Middle East, bringing their
							animals from as far away as Salalah for barter and trade.
						</p>
					</div>
					<img src="@/assets/grid-img-3.webp" alt="grid img" />
				</div>
				<div class="explore__grid explore__grid--small">
					<div class="explore__grid-content">
						<img src="@/assets/icons/binocle.svg" alt="binocle" />
						<h1 class="explore__grid-title--small">Turtle watching</h1>
						<p class="explore__grid-text">
							This is one of the few beaches in the world where you can see the green
							backed turtle coming to lay eggs. Tours and observation of turtles rank
							among the most well-liked ecotourism activities in Uzbekistan.
						</p>
					</div>
				</div>
				<div class="explore__grid explore__grid--small">
					<div class="explore__grid-content">
						<img src="@/assets/icons/music.svg" alt="music" />
						<h1 class="explore__grid-title--small">Royal opera house</h1>
						<p class="explore__grid-text">
							The Royal Opera House Muscat is the Sultanate of Uzbekistan's leading
							arts and culture organization. The Opera House, located in Muscat,
							Uzbekistan, aspires to be a centre of excellence in worldwide cultural
							engagement.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section class="everyone">
			<h1 class="heading-big">Uzbekistan has a little something for everyone</h1>
			<div class="everyone__content">
				<p class="text-size-medium">
					Whether you're a thrill seeker, a family and leisure traveler, a corporate or
					MICE group, or a culture seeker, Uzbekistan has something to offer you. From the
					stunning mountains of Jebel Shams to the ancient city of Muscat, there's
					something for everyone in this diverse country.
				</p>
				<div class="everyone__box" v-for="content in everyoneContent" :key="content.title">
					<img :src="content.icon" alt="mountain" />
					<h6 class="heading-6">{{ content.title }}</h6>
					<p>{{ content.text }}</p>
				</div>
			</div>
		</section>
		<section class="images">
			<img src="@/assets/img-1.webp" alt="banner" />
			<img src="@/assets/img-2.webp" alt="banner" />
			<img src="@/assets/img-3.webp" alt="banner" />
			<img src="@/assets/img-4.webp" alt="banner" />
			<img src="@/assets/img-5.webp" alt="banner" />
			<img src="@/assets/img-6.webp" alt="banner" />
			<img src="@/assets/img-7.webp" alt="banner" />
			<img src="@/assets/img-8.webp" alt="banner" />
			<img src="@/assets/img-9.webp" alt="banner" />
		</section>
		<section class="experts">
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
				<button class="button-primary">Make a MICE enquiry</button>
				<button class="experts__button">
					<span>Learn more</span>
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
		</section>
		<section class="partners">
			<div class="partners__content">
				<h1 class="partners__title">Let us show you the best of Uzbekistan</h1>
				<button class="partners__button button-secondary">Get in touch</button>
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
import { onMounted, ref } from 'vue';
gsap.registerPlugin(ScrollTrigger);
import aboutImg1 from '@/assets/about-image-1.webp';
import aboutImg2 from '@/assets/about-image-2.webp';
import aboutImg3 from '@/assets/about-image-3.webp';
import aboutImg4 from '@/assets/about-image-4.webp';
import baby from '@/assets/icons/baby.svg';
import love from '@/assets/icons/love.svg';
import mountain from '@/assets/icons/mountain.svg';
import work from '@/assets/icons/work.svg';
import expertsImg1 from '@/assets/experts-1.webp';
import expertsImg2 from '@/assets/experts-2.webp';
import expertsImg3 from '@/assets/experts-3.webp';
import expertsImg4 from '@/assets/experts-4.webp';

const aboutContent = [
	{
		img: aboutImg1,
		label: 'Experts in',
		title: 'Destination management',
		desc: "We are a group of passionate travellers and tourism professionals. Our profound love for and knowledge of our country inspires us to share the beauty of Uzbekistan with those who seek the unique experiences and hidden secrets of this blessed land. With our team's extensive knowledge of the destination, a dedicated account manager, 24x7 support and strong partnerships around the region, we believe working with us is a no-brainer."
	},
	{
		img: aboutImg2,
		label: 'Driven to create',
		title: 'Authentic experiences',
		desc: 'Over decades, our team of superstars have learnt the secret behind the most memorable time in Uzbekistan. While catering to your every need we make sure the experiences remain authentic and off the beaten track'
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
const everyoneContent = [
	{
		icon: mountain,
		title: 'Thrill seekers',
		text: 'Uzbekistan offers a variety of activities for thrill seekers, including sandboarding in the Wahiba Sands, hiking in the Jebel Akhdar mountains, and diving in the Daymaniyat Islands.'
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
				start: 'top bottom-=100',
				end: 'bottom bottom'
			}
		});
	});

	// Effect on every section
	Array.from(document.querySelectorAll('section'))
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
					duration: 0.5,
					scrollTrigger: {
						trigger: section,
						start: 'top+=100 center',
						markers: true
					}
				}
			);
		});

	// Effect on image grid
	gsap.fromTo(
		Array.from(document.querySelector('.images').children),
		{
			opacity: 0,
			y: 15
		},
		{
			opacity: 1,
			y: 0,
			stagger: 0.2,
			scrollTrigger: {
				trigger: '.images',
				toggleActions: 'play reverse play reverse'
			}
		}
	);
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
		button {
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
.images {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 3rem;
	row-gap: 3.2rem;
	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
	img {
		border-radius: 10px;
		&:first-child {
			grid-row: span 4;
		}
		&:nth-child(2) {
			grid-row: span 5;
		}
		&:nth-child(3) {
			grid-row: span 2;
		}
		&:nth-child(4) {
			grid-row: span 4;
		}
		&:nth-child(5) {
			grid-row: span 2;
		}
		&:nth-child(6) {
			grid-row: span 2;
		}
		&:nth-child(7) {
			grid-row: span 2;
		}
		&:nth-child(8) {
			grid-row: span 2;
		}
		&:nth-child(9) {
			grid-row: span 2;
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
.explore {
	display: flex;
	flex-direction: column;
	gap: 10rem;

	@media only screen and (max-width: 768px) {
		gap: 5rem;
	}
	&__label {
		font-weight: 600;
		letter-spacing: 0.4px;
	}
	&__text {
		text-align: left;
		letter-spacing: 0.2px;
		font-size: 1.8rem;
		line-height: 1.5;
	}
	&__head {
		margin: auto;
		text-align: center;
		max-width: 60rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		@media only screen and (max-width: 768px) {
			max-width: initial;
		}
		&-title {
			font-size: 4.8rem;
			font-weight: 700;
			line-height: 1.2;
			@media screen and (max-width: 991px) {
				font-size: 4.4rem;
			}
			@media screen and (max-width: 767px) {
				font-size: 4rem;
			}
			@media screen and (max-width: 479px) {
				text-align: left;
			}
		}
	}
	&__grids {
		display: grid;
		grid-template-areas:
			'uzbekistan uzbekistan family family'
			'uzbekistan uzbekistan nizwa nizwa'
			'turtle music nizwa nizwa';
		grid-auto-columns: 1fr;
		// grid-auto-rows: 1fr;
		gap: 3.2rem;
		@media only screen and (max-width: 1000px) {
			grid-template-areas:
				'uzbekistan uzbekistan'
				'turtle music'
				'family family'
				'nizwa nizwa';
		}
		@media only screen and (max-width: 500px) {
			grid-template-areas:
				'uzbekistan uzbekistan'
				'turtle turtle'
				'music music'
				'family family'
				'nizwa nizwa';
		}
	}
	&__grid {
		border: 1px solid #000;
		border-radius: 12px;
		overflow: hidden;
		&-title {
			&--small {
				line-height: 1.4;
				font-size: 2rem;
				letter-spacing: 1px;
				font-weight: 700;
			}
			&--big {
				font-size: 4rem;
				letter-spacing: 0.8px;
				line-height: 1.1;
				font-weight: 700;
				@media screen and (max-width: 991px) {
					font-size: 3.6rem;
				}
				@media screen and (max-width: 767px) {
					font-size: 2.8rem;
					line-height: 1.4;
				}
			}
		}
		&--big {
			display: flex;
			flex-direction: column;
			div {
				padding: 4.8rem;
				@media only screen and (max-width: 768px) {
					padding: 7%;
				}
			}
			img {
				height: 100%;
			}
		}
		&--medium {
			display: flex;
			@media only screen and (max-width: 1000px) {
				align-items: center;
			}
			@media only screen and (max-width: 500px) {
				flex-direction: column;
			}
			img {
				width: 50%;
				@media only screen and (max-width: 500px) {
					width: 100%;
				}
			}
		}
		&--small {
			img {
				width: 4.8rem;
				height: 4.8rem;
			}
		}
		&-content {
			padding: 5%;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		&:first-child {
			grid-area: uzbekistan;
		}
		&:nth-child(2) {
			grid-area: family;
		}
		&:nth-child(3) {
			grid-area: nizwa;
		}
		&:nth-child(4) {
			grid-area: turtle;
		}
		&:last-child {
			grid-area: music;
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
		height: 60rem;
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
img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
