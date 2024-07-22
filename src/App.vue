<template>
	<div class="container">
		<Header />
		<RouterView />
	</div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Lenis from 'lenis';

const lenis = new Lenis();

lenis.on('scroll', e => {
	console.log(e);
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
</script>

<style lang="scss" scoped></style>
