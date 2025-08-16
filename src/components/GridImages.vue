<template>
	<section class="images">
		<ResponsiveImage name="img-1" original-tag="jpeg" alt="1st image" />
		<ResponsiveImage name="img-2" original-tag="jpeg" alt="banner" />
		<ResponsiveImage name="img-3" original-tag="jpeg" alt="banner" />
		<ResponsiveImage name="img-4" original-tag="jpeg" alt="banner" />
		<ResponsiveImage name="img-5" original-tag="jpeg" alt="banner" />
		<ResponsiveImage name="img-6" original-tag="jpeg" alt="banner" />
		<ResponsiveImage name="img-7" original-tag="jpeg" alt="banner" />
		<ResponsiveImage name="img-8" original-tag="jpeg" alt="banner" />
		<ResponsiveImage name="img-9" original-tag="jpeg" alt="banner" />
	</section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ResponsiveImage from './ResponsiveImage.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
	// Effect on image grid
	gsap.fromTo(
		Array.from(document.querySelector('.images').children),
		{
			opacity: 0,
			y: 50
		},
		{
			opacity: 1,
			y: 0,
			stagger: 0.25,
			scrollTrigger: {
				trigger: '.images',
				start: 'top center',
				end: 'bottom+=100 top',
				toggleActions: 'play reverse play reverse'
			}
		}
	);
});
</script>

<style lang="scss" scoped>
.images {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 3rem;
	row-gap: 3.2rem;
	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
	picture {
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
</style>
