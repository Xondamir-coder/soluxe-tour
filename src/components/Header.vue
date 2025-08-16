<template>
	<header class="header">
		<RouterLink active-class="link--active" to="/">
			<img class="header__logo" src="@/icons/logo.svg" alt="logo" />
		</RouterLink>
		<ul class="header__list">
			<li class="header__item" v-for="link in links" :key="link.to">
				<RouterLink active-class="link--active" :to="link.to">{{ link.text }}</RouterLink>
				<div class="header__item-underline"></div>
			</li>
		</ul>
		<div class="lang" @click="isLangOpen = !isLangOpen">
			<div class="lang__item">
				<svg
					width="22"
					height="22"
					viewBox="0 0 22 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4 7L10 13M3 13L9 7L11 4M1 4H13M6 1H7M21 21L16 11L11 21M13 17H19"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round" />
				</svg>
				<span class="lang__label">
					{{ $i18n.locale[0].toUpperCase() + $i18n.locale.slice(1) }}
				</span>
				<svg
					class="lang__arrow"
					width="14"
					height="8"
					viewBox="0 0 14 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M1 7L7 1L13 7" stroke="white" />
				</svg>
			</div>
			<ul class="lang__list" :class="{ hidden: !isLangOpen }">
				<li
					class="lang__item"
					v-for="{ lang, label } in langs"
					:key="lang"
					:class="{ hidden: lang == $i18n.locale }"
					@click="selectLang(lang)">
					{{ label }}
				</li>
			</ul>
		</div>
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
					<RouterLink active-class="link--active" :to="link.to">
						{{ link.text }}
					</RouterLink>
					<div class="menu__item-underline"></div>
				</li>
			</ul>
			<div class="lang" @click="isLangOpen = !isLangOpen">
				<div class="lang__item">
					<svg
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M4 7L10 13M3 13L9 7L11 4M1 4H13M6 1H7M21 21L16 11L11 21M13 17H19"
							stroke="white"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round" />
					</svg>
					<span class="lang__label">
						{{ $i18n.locale[0].toUpperCase() + $i18n.locale.slice(1) }}
					</span>
					<svg
						class="lang__arrow"
						width="14"
						height="8"
						viewBox="0 0 14 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M1 7L7 1L13 7" stroke="white" />
					</svg>
				</div>
				<ul class="lang__list" :class="{ hidden: !isLangOpen }">
					<li
						class="lang__item"
						v-for="{ lang, label } in langs"
						:key="lang"
						:class="{ hidden: lang == $i18n.locale }"
						@click="selectLang(lang)">
						{{ label }}
					</li>
				</ul>
			</div>
			<RouterLink
				@click="isMenuOpen = false"
				to="/contacts"
				data-button
				class="button-secondary"
				>{{ $t('book-travel') }}</RouterLink
			>
		</div>
	</Teleport>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import Overlay from '@/components/Overlay.vue';
import { changeLang, i18n } from '@/locale';

const isMenuOpen = ref(false);
const isLangOpen = ref(false);

const selectLang = newLang => {
	changeLang(newLang);
};
const langs = computed(() => [
	{
		lang: 'en',
		label: 'English'
	},
	{
		lang: 'uz',
		label: 'Uzbek'
	},
	{
		lang: 'zh',
		label: 'Chinese'
	}
]);
const links = computed(() => [
	{ text: i18n.global.t('link-about'), to: '/about' },
	{ text: i18n.global.t('link-services'), to: '/services' },
	{ text: i18n.global.t('link-mice'), to: '/mice' },
	{ text: i18n.global.t('link-uzbekistan'), to: '/uzbekistan' },
	{ text: i18n.global.t('link-contacts'), to: '/contacts' }
]);

const func = e => {
	if (e.target.closest('.lang')) return;
	isLangOpen.value = false;
};
onMounted(() => {
	if (window.innerWidth < 768) return;
	document.addEventListener('click', func);
});
onUnmounted(() => {
	if (window.innerWidth < 768) return;
	document.removeEventListener('click', func);
});
</script>

<style lang="scss" scoped>
.lang {
	color: #fff;
	padding: 5px;
	border-radius: 4px;
	position: relative;
	transition: opacity 0.5s 3s, transform 0.5s 3s, background-color 0.5s, box-shadow 0.5s;
	&:has(.lang__list:not(.hidden)) {
		background-color: #fff;
		box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
	}
	&:has(.lang__list.hidden) {
		.lang__arrow {
			transform: rotate(180deg);
		}
	}
	&__arrow {
		transition: transform 0.5s;
	}
	&__list {
		width: 100%;
		list-style-type: none;
		display: flex;
		flex-direction: column;
		gap: 10px;
		position: absolute;
		top: 95%;
		left: 0;
		padding: 5px;
		background-color: #fff;
		border-radius: 4px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		transition: opacity 0.5s, transform 0.5s, visibility 0.5s;
		&.hidden {
			visibility: hidden;
			opacity: 0;
			transform: translateY(-3rem);
		}
	}
	&__item {
		font-size: 1.6rem;
		font-weight: 500;
		cursor: pointer;
		text-align: center;
		justify-content: center;
		border-radius: 4px;
		background: var(--color-secondary);
		display: flex;
		align-items: center;
		gap: 1.2rem;
		padding: 1.2rem 2.9rem;
		&:not(:first-child) {
			background-color: rgba(#e7c87f, 0.7);
		}
		&.hidden {
			display: none;
		}
	}
}
body.overflow-hidden {
	.lang {
		opacity: 0;
		transform: translateX(150%);
	}
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
	.lang {
		align-self: flex-start;
	}
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
	display: grid;
	grid-template-columns: max-content 1fr max-content;
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
		grid-template-columns: repeat(2, max-content);
		justify-content: space-between;
	}
	@media only screen and (max-width: 900px) {
		padding: 0 3rem;
	}
	.lang {
		@media only screen and (max-width: 768px) {
			display: none;
		}
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
		justify-content: center;
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
