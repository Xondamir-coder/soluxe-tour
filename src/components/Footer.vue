<template>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__left">
				<img class="footer__logo" src="@/assets/logo-yellow.svg" alt="logo" />
				<p>
					{{ $t('address') }}:
					<br />
					{{ $t('footer-address-1') }}
					<br />
					{{ $t('footer-address-2') }}
				</p>
				<div class="footer__contact">
					<p>{{ $t('footer-contact') }}:</p>
					<a href="tel:+998909919020">+998909919020</a>
					<a href="mailto:info@soluxetour.uz">info@soluxetour.uz</a>
				</div>
			</div>
			<nav class="footer__right">
				<RouterLink v-for="link in links" :to="link.to" :key="link">
					{{ link.text }}
				</RouterLink>
			</nav>
		</div>
		<svg
			class="footer__waves"
			width="1367"
			height="20"
			viewBox="0 0 1367 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1 17.4999C62.5 -3.00004 77 24.5 133.5 17.4999"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M133.5 9.74163C195 -10.7583 209.5 16.7417 266 9.74163"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M11.5 8.81625C60.7 -11.8813 72.3 15.8838 117.5 8.81625"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M146.5 17.8163C195.7 -2.88129 207.3 24.8838 252.5 17.8163"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M276 17.4999C337.5 -3.00004 352 24.5 408.5 17.4999"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M408.5 9.74163C470 -10.7583 484.5 16.7417 541 9.74163"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M286.5 8.81625C335.7 -11.8813 347.3 15.8838 392.5 8.81625"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M421.5 17.8163C470.7 -2.88129 482.3 24.8838 527.5 17.8163"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M551 17.4999C612.5 -3.00004 627 24.5 683.5 17.4999"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M683.5 9.74163C745 -10.7583 759.5 16.7417 816 9.74163"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M561.5 8.81625C610.7 -11.8813 622.3 15.8838 667.5 8.81625"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M696.5 17.8163C745.7 -2.88129 757.3 24.8838 802.5 17.8163"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M826 17.4999C887.5 -3.00004 902 24.5 958.5 17.4999"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M958.5 9.74163C1020 -10.7583 1034.5 16.7417 1091 9.74163"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M836.5 8.81625C885.7 -11.8813 897.3 15.8838 942.5 8.81625"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M971.5 17.8163C1020.7 -2.88129 1032.3 24.8838 1077.5 17.8163"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M1101 17.4999C1162.5 -3.00004 1177 24.5 1233.5 17.4999"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M1233.5 9.74163C1295 -10.7583 1309.5 16.7417 1366 9.74163"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M1111.5 8.81625C1160.7 -11.8813 1172.3 15.8838 1217.5 8.81625"
				stroke="#FCF0B5"
				stroke-linecap="round" />
			<path
				d="M1246.5 17.8163C1295.7 -2.88129 1307.3 24.8838 1352.5 17.8163"
				stroke="#FCF0B5"
				stroke-linecap="round" />
		</svg>

		<div class="footer__copyright">
			<p>
				&copy; {{ new Date().getFullYear() }} {{ $t('soluxetour') }}
				<br />
				{{ $t('footer-reserved') }}
			</p>
			<p>
				{{ $t('footer-dev') }}
				<a href="http://www.spacelabs.uz" target="_blank" rel="noopener noreferrer">
					Space Labs
				</a>
			</p>
			<RouterLink to="/legal"
				><p>{{ $t('link-terms') }}</p></RouterLink
			>
		</div>
	</footer>
</template>

<script setup>
import { i18n } from '@/locale';
import { computed } from 'vue';

const links = computed(() => [
	{ text: i18n.global.t('link-about'), to: '/about' },
	{ text: i18n.global.t('link-services'), to: '/services' },
	{ text: i18n.global.t('link-mice'), to: '/mice' },
	{ text: i18n.global.t('link-uzbekistan'), to: '/uzbekistan' },
	{ text: i18n.global.t('link-contacts'), to: '/contacts' }
]);
</script>

<style lang="scss" scoped>
.footer {
	border-top-left-radius: 50px;
	border-top-right-radius: 50px;
	background: #222222;
	padding-top: 7rem;
	padding-bottom: 2rem;
	padding-left: 8%;
	padding-right: 8%;
	color: var(--color-primary-light);
	display: flex;
	gap: 3.5rem;
	flex-direction: column;
	align-items: flex-start;
	overflow-x: hidden;

	@media only screen and (min-width: 1920px) {
		padding-left: 15%;
		padding-right: 15%;
	}
	@media only screen and (max-width: 768px) {
		padding-left: 5%;
		padding-right: 5%;
	}
	&__logo {
		width: 16.8rem;
		height: 5.4rem;
	}
	&__container {
		align-self: stretch;
		display: flex;
		justify-content: space-between;
		gap: 3rem;
		@media only screen and (max-width: 500px) {
			flex-direction: column;
		}
	}
	&__left {
		display: flex;
		flex-direction: column;
		gap: 3.5rem;
	}
	&__right {
		text-align: right;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-weight: 500;
		@media only screen and (max-width: 500px) {
			justify-content: center;
			flex-direction: row;
			gap: 2rem;
		}
	}
	&__copyright {
		align-self: stretch;
		display: grid;
		align-items: center;
		grid-template-columns: max-content 1fr max-content;
		gap: 1rem;
		@media only screen and (max-width: 768px) {
			grid-template-columns: auto;
			gap: 2rem;
		}
		p:nth-child(2) {
			text-align: center;
			@media only screen and (max-width: 768px) {
				text-align: left;
			}
		}
		a {
			text-decoration: underline;
		}
	}
	&__waves {
		align-self: stretch;
		display: flex;
		flex-wrap: wrap;
	}
	&__contact {
		display: flex;
		flex-direction: column;
		a {
			text-decoration: underline;
		}
	}
	p {
		line-height: 1.6;
	}
}
</style>
