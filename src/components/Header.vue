<template>
	<header class="header">
		<RouterLink active-class="link--active" to="/">
			<img class="header__logo" src="@/assets/logo.svg" alt="logo" />
		</RouterLink>
		<ul class="header__list">
			<li class="header__item" v-for="link in links" :key="link">
				<RouterLink active-class="link--active" :to="`/${link.toLowerCase()}`">{{
					link
				}}</RouterLink>
				<div class="header__item-underline"></div>
			</li>
		</ul>
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
				<li
					class="menu__item"
					v-for="link in links"
					:key="link"
					@click="isMenuOpen = false">
					<RouterLink active-class="link--active" :to="`/${link.toLowerCase()}`">{{
						link
					}}</RouterLink>
					<div class="menu__item-underline"></div>
				</li>
			</ul>
			<RouterLink
				@click="isMenuOpen = false"
				to="/contacts"
				data-button
				class="button-secondary"
				>Book a travel</RouterLink
			>
		</div>
	</Teleport>
</template>

<script setup>
import { ref } from 'vue';
import Overlay from '@/components/Overlay.vue';

const isMenuOpen = ref(false);

const links = ['About', 'Services', 'Uzbekistan', 'MICE', 'Contacts'];
</script>

<style lang="scss" scoped>
body.overflow-hidden {
	.header {
		background-color: transparent;
		border-color: transparent;
		&__button {
			opacity: 0;
			transform: translateY(-100%);
		}
		&__logo {
			transform: scale(0);
		}
		&__item {
			opacity: 0;
			&:first-child {
				transform: translateX(385%);
			}
			&:nth-child(2) {
				transform: translateX(152%);
			}
			&:nth-child(3) {
				transform: translateX(-50%);
			}
			&:nth-child(4) {
				transform: translateX(-300%);
			}
			&:nth-child(5) {
				transform: translateX(-400%);
			}
		}
	}
}
body.overflow-hidden {
	.menu__button {
		opacity: 0;
		transform: translateX(400%);
	}
}
body.bg-white .header {
	background-color: #fff;
}
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
	&-underline {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		width: 0;
		height: 1.5px;
		background-color: var(--color-secondary);
		transition: width 300ms;
	}
	& a {
		transition: font-weight 300ms;
	}
	&:hover &-underline {
		width: 100%;
	}
}
.link--active {
	color: var(--color-secondary);
	font-weight: 500;
	& + div {
		width: 100%;
		height: 4px;
	}
}
.button {
	cursor: pointer;
}
.menu {
	z-index: 101;
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
		flex-direction: column;
		@include list;
		gap: 1.8rem;
	}
	&__item {
		font-size: 17px;
		font-weight: 500;
		@include item;
		a {
			display: block;
			width: 100%;
		}
	}

	&__button {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		gap: 6px;
		transition: transform 0.5s 1.3s;
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
	position: fixed;
	top: 0;
	width: 100%;
	min-height: 7.2rem;
	background-color: var(--color-primary);
	z-index: 100;
	border-bottom: 1px solid #000;
	transition-delay: 300ms;
	transition-duration: 500ms;
	transition-property: background-color, border-color;
	@media only screen and (max-width: 768px) {
		justify-content: space-between;
	}
	@media only screen and (max-width: 900px) {
		padding: 0 3rem;
	}
	&__button {
		transition: transform 0.5s 2.9s, opacity 0.5s 2.9s, color 300ms, background-color 300ms;
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
	&__logo {
		transition: transform 0.5s 2.4s;
		width: 16rem;
		height: 100%;
		@media only screen {
			transition-delay: 800ms;
		}
	}
	&__list {
		margin: 0 calc(50% - 37rem);
		@include list;
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
	&__item {
		color: #222;
		font-weight: 400;
		border-bottom: 2px solid transparent;
		transition: border-color 300ms;
		padding: 0.5rem 0;
		position: relative;

		transition-property: opacity, transform;
		transition-duration: 700ms;
		&:first-child {
			transition-delay: 1.3s;
		}
		&:nth-child(2) {
			transition-delay: 1.7s;
		}
		&:nth-child(3) {
			transition-delay: 2.1s;
		}
		&:nth-child(4) {
			transition-delay: 1.9s;
		}
		&:nth-child(5) {
			transition-delay: 2.3s;
		}

		&-underline {
			content: '';
			display: block;
			position: absolute;
			bottom: 0;
			width: 0;
			height: 1.5px;
			background-color: var(--color-secondary);
			transition: width 300ms;
		}
		& a {
			transition: font-weight 300ms;
		}
		&:hover &-underline {
			width: 100%;
		}
	}
}
</style>
