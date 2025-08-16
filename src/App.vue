<template>
	<Preloader />
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
import '@/js/lenis';
</script>

<style lang="scss" scoped></style>
