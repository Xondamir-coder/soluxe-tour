<template>
	<main class="contacts">
		<div class="contacts__left">
			<h1 class="contacts__title">
				{{ $t('contacts-title') }}
			</h1>
		</div>
		<div class="contacts__right">
			<div class="contacts__box">
				<p class="contacts__box-label">{{ $t('address') }}</p>
				<div class="contacts__box-content">
					<div>
						<span>{{ $t('tashkent-uzb') }}</span>
						<p>
							{{ $t('contacts-address-tash-1') }} <br />
							{{ $t('contacts-address-tash-2') }} <br />
							{{ $t('contacts-address-tash-3') }} <br />
							{{ $t('contacts-address-tash-4') }}
						</p>
					</div>
					<div>
						<span>{{ $t('beijing-china') }}</span>
						<p>
							{{ $t('contacts-address-beijing-1') }} <br />
							{{ $t('contacts-address-beijing-2') }} <br />
							{{ $t('contacts-address-beijing-3') }} <br />
							{{ $t('contacts-address-beijing-4') }} <br />
							{{ $t('contacts-address-beijing-5') }}
						</p>
					</div>
					<div>
						<span>{{ $t('almaty-kaz') }}</span>
						<p>
							{{ $t('contacts-address-almaty-1') }} <br />
							{{ $t('contacts-address-almaty-2') }}
						</p>
					</div>
				</div>
			</div>
			<div class="contacts__box">
				<p class="contacts__box-label">{{ $t('phone') }}</p>
				<div class="contacts__box-content">
					<div>
						<span>{{ $t('tashkent-uzb') }}</span>
						<a href="tel:+998 909919020">
							<p>+998 909919020</p>
						</a>
					</div>
					<div>
						<span>{{ $t('beijing-china') }}</span>
						<a href="tel:+86 15801494957">
							<p>+86 15801494957</p>
						</a>
					</div>
					<div>
						<span>{{ $t('almaty-kaz') }}</span>
						<a href="tel:+7 7076162797">
							<p>+7 7076162797</p>
						</a>
					</div>
				</div>
			</div>
			<div class="contacts__box">
				<p class="contacts__box-label">{{ $t('email') }}</p>
				<div class="contacts__box-content">
					<div>
						<a href="mailto:info@soluxetour.uz">
							<p>info@soluxetour.uz</p>
						</a>
					</div>
					<div>
						<a href="mailto:hello@soluxetour.uz">
							<p>hello@soluxetour.uz</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => document.body.classList.add('bg-white'));
onUnmounted(() => document.body.classList.remove('bg-white'));
</script>

<style lang="scss" scoped>
.contacts {
	margin: 7rem 0;
	display: grid;
	grid-template-columns: 1fr 2fr;
	min-height: 100vh;
	gap: 2rem;
	@media only screen and (max-width: 900px) {
		grid-template-columns: auto;
		grid-auto-rows: 1fr;
	}
	&__box {
		border-top: 2px solid #1e1e1e;
		padding-top: 2.4rem;
		display: grid;
		justify-content: space-between;
		grid-template-columns: 20rem 1fr;
		row-gap: 3rem;
		animation: slide-right 700ms forwards;
		opacity: 0;
		&:nth-child(2) {
			animation-delay: 300ms;
		}
		&:last-child {
			animation-delay: 600ms;
		}

		@media only screen and (max-width: 900px) {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		}
		&-label {
			font-weight: 600;
			font-size: 1.8rem;
		}
		&-content {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			column-gap: 4rem;
			row-gap: 1rem;

			div {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}
			span {
				font-size: 1.8rem;
				color: #1e1e1e;
			}
			p {
				font-weight: 500;
				font-size: 2rem;
				font-style: italic;
				color: rgba(30, 30, 30, 1);
			}
		}
	}
	&__right {
		padding: 3rem 0;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		@media only screen and (max-width: 900px) {
			padding: 3rem;
		}
	}
	&__title {
		font-size: 4rem;
		font-weight: 400;
	}
	&__left {
		background-image: url(@/images/resized/contacts-1920.avif);
		background-size: cover;
		background-repeat: no-repeat;
		display: grid;
		place-items: center;
		text-align: center;
		color: var(--color-primary);
		animation: slide-left 700ms forwards;
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
}
@keyframes slide-left {
	from {
		opacity: 0;
		transform: translateX(-100%);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes slide-right {
	from {
		opacity: 0;
		transform: translateX(100%);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
</style>
