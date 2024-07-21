<template>
	<header class="header">
		<RouterLink to="/">
			<img class="header__logo" src="@/assets/logo.svg" alt="logo" />
		</RouterLink>
		<ul class="header__list">
			<li class="header__item">
				<RouterLink to="/about">About</RouterLink>
			</li>
			<li class="header__item">
				<RouterLink to="/services">Services</RouterLink>
			</li>
			<li class="header__item">
				<RouterLink to="/oman">Oman</RouterLink>
			</li>
			<li class="header__item">
				<RouterLink to="/mice">MICE</RouterLink>
			</li>
		</ul>
		<button class="header__button button-secondary">Get in touch</button>
		<div class="menu__button" @click="isMenuOpen = true">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</header>
	<Teleport to="body">
		<Overlay :class="{ hidden: !isMenuOpen }" @close="isMenuOpen = false" />
		<div class="menu" :class="{ 'menu--hidden': !isMenuOpen }">
			<ul class="menu__list">
				<li class="menu__item">
					<RouterLink to="/about">About</RouterLink>
				</li>
				<li class="menu__item">
					<RouterLink to="/services">Services</RouterLink>
				</li>
				<li class="menu__item">
					<RouterLink to="/oman">Oman</RouterLink>
				</li>
				<li class="menu__item">
					<RouterLink to="/mice">MICE</RouterLink>
				</li>
			</ul>
			<button class="button-secondary">Get in touch</button>
		</div>
	</Teleport>
</template>

<script setup>
import { ref } from 'vue';
import Overlay from '@/components/Overlay.vue';

const isMenuOpen = ref(false);
</script>

<style lang="scss" scoped>
@mixin list {
	list-style: none;
	display: flex;
	gap: 3.2rem;
}
@mixin item {
	color: #222;
	font-weight: 400;
	border-bottom: 2px solid transparent;
	transition: border-color 300ms;
	padding: 0.5rem 0;
	position: relative;
	&::before {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		width: 0;
		height: 1.5px;
		border-radius: 5px;
		background-color: var(--color-secondary);
		transition: width 300ms;
	}
	&:hover::before {
		width: 100%;
	}
}
.button {
	cursor: pointer;
}
.menu {
	z-index: 2;
	display: flex;
	flex-direction: column;
	position: fixed;
	right: 0;
	top: 0;
	width: 90%;
	height: 100%;
	transition: transform 400ms;
	background-color: var(--color-primary);
	padding: 4.8rem 2.2rem;
	gap: 3rem;
	&--hidden {
		transform: translateX(150%);
	}
	&__list {
		@include list;
		flex-direction: column;
		gap: 1.8rem;
	}
	&__item {
		@include item;
		font-size: 17px;
		font-weight: 500;
	}

	&__button {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		gap: 6px;
		@media screen and (min-width: 768px) {
			display: none;
		}
		span {
			width: 24px;
			height: 2px;
			background-color: #000;
		}
	}
}
.header {
	padding: 0 7.6rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	top: 0;
	width: 100%;
	min-height: 7.2rem;
	@media only screen and (max-width: 900px) {
		padding: 0 3rem;
	}
	&__button {
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
	&__logo {
		width: 16rem;
		height: 100%;
	}
	&__list {
		@include list;
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
	&__item {
		@include item;
	}
}
</style>
