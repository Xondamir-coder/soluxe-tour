<template>
	<section class="images">
		<img src="@/assets/img-1.avif" alt="banner" />
		<img src="@/assets/img-2.jpeg" alt="banner" />
		<img src="@/assets/img-3.jpeg" alt="banner" />
		<img src="@/assets/img-4.jpeg" alt="banner" />
		<img src="@/assets/img-5.jpeg" alt="banner" />
		<img src="@/assets/img-6.jpeg" alt="banner" />
		<img src="@/assets/img-7.jpeg" alt="banner" />
		<img src="@/assets/img-8.jpeg" alt="banner" />
		<img src="@/assets/img-9.jpeg" alt="banner" />
	</section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
img {
	width: 100%;
	height: 100%;
	object-fit: cover;
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
</style>
