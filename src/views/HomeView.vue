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
		<section class="section"></section>
		<section class="section"></section>
		<section class="section"></section>
		<section class="section"></section>
		<section class="section"></section>
		<section class="section"></section>
		<section class="section"></section>
	</main>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
	const scrollTrigger = {
		trigger: '.hero',
		start: 'top top',
		end: 'bottom bottom',
		scrub: 1
	};
	gsap.to('.hero__title', {
		opacity: 0,
		scrollTrigger
	});
	gsap.to('.hero__overlay', {
		opacity: 0,
		scrollTrigger
	});
	gsap.to('.hero__images', {
		scale: 1,
		scrollTrigger
	});
	gsap.to('.hero__letter', { opacity: 1, duration: 1, stagger: 0.05 });
});
</script>

<style lang="scss" scoped>
.section {
	height: 100vh;
	background-color: blue;
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
