<template>
	<!-- <Preloader /> -->
	<div class="container">
		<Header />
		<RouterView />
		<Footer />
	</div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Preloader from '@/components/Preloader.vue';
import Lenis from 'lenis';

const lenis = new Lenis();
lenis.on('scroll', e => {});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.addEventListener('load', () => {
	window.scrollTo(0, 0);
});
</script>

<style lang="scss" scoped></style>
