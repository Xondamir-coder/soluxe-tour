<template>
	<main class="main">
		<section class="hero">
			<div class="hero__content">
				<p class="text-weight-semibold">We are Soluxe Tour</p>
				<h1 class="hero__title">
					<span class="hero__letter">A</span> <span class="hero__letter">g</span>
					<span class="hero__letter">r</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">u</span>
					<span class="hero__letter">p</span> <span class="hero__letter">o</span>
					<span class="hero__letter">f</span> <span class="hero__letter">e</span>
					<span class="hero__letter">x</span>
					<span class="hero__letter">p</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">r</span>
					<span class="hero__letter">t</span>
					<span class="hero__letter">s</span> <span class="hero__letter">f</span>
					<span class="hero__letter">o</span>
					<span class="hero__letter">c</span>
					<span class="hero__letter">u</span>
					<span class="hero__letter">s</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">d</span> <span class="hero__letter">o</span>
					<span class="hero__letter">n</span> <span class="hero__letter">g</span>
					<span class="hero__letter">i</span>
					<span class="hero__letter">v</span>
					<span class="hero__letter">i</span>
					<span class="hero__letter">n</span>
					<span class="hero__letter">g</span> <span class="hero__letter">t</span>
					<span class="hero__letter">h</span>
					<span class="hero__letter">e</span> <span class="hero__letter">b</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">s</span>
					<span class="hero__letter">t</span> <span class="hero__letter">o</span>
					<span class="hero__letter">f</span> <span class="hero__letter">U</span>
					<span class="hero__letter">z</span>
					<span class="hero__letter">b</span>
					<span class="hero__letter">e</span>
					<span class="hero__letter">k</span>
					<span class="hero__letter">i</span>
					<span class="hero__letter">s</span>
					<span class="hero__letter">t</span>
					<span class="hero__letter">a</span>
					<span class="hero__letter">n</span>
				</h1>
				<button class="hero__button button-primary">Get in touch</button>
			</div>
			<img
				class="hero__flower hero__flower--1"
				src="@/assets/icons/flower.svg"
				alt="flower" />
			<img
				class="hero__flower hero__flower--2"
				src="@/assets/icons/flower.svg"
				alt="flower" />
		</section>
	</main>
</template>

<script setup></script>

<style lang="scss" scoped>
.hero {
	height: 100vh;
	display: grid;
	place-items: center;
	position: relative;
	overflow: hidden;
	&__flower {
		position: absolute;
		animation: scale-up 1s forwards;
		scale: 1.6;
		&--1 {
			top: -20%;
			left: -8%;
			transform: rotate(190deg);
		}
		&--2 {
			bottom: -22%;
			right: -3%;
			transform: rotate(13deg);
		}
	}
	&__button {
		margin-top: 4rem;
		border-color: var(--color-primary);
		color: var(--color-primary);
		&:hover {
			background-color: var(--color-primary);
			color: var(--color-secondary);
		}
	}
	&__content {
		z-index: 1;
		max-width: 70%;
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
		color: var(--color-primary);
		@media only screen and (max-width: 768px) {
			max-width: 90%;
		}
	}
	&__title {
		letter-spacing: 1.5px;
		font-size: 7.2rem;
		font-weight: 700;
		line-height: 1.2;

		@media screen and (max-width: 991px) {
			font-size: 5.2rem;
		}
		@media screen and (max-width: 767px) {
			font-size: 4rem;
		}
	}
}
.main {
	background-color: var(--color-secondary);
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
@keyframes scale-up {
	from {
		scale: 0;
	}
	to {
		scale: 1.6;
	}
}
</style>
