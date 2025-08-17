<template>
	<main class="contacts">
		<div class="contacts__left">
			<h2 class="contacts__title">
				{{ $t('contacts-title') }}
			</h2>
		</div>
		<div class="contacts__right">
			<h1 class="contacts__right-title">Send us message</h1>
			<form class="form" @submit.prevent="submitForm">
				<div class="form__box">
					<span class="form__label">Email</span>
					<input
						required
						class="form__input"
						placeholder="name@example.com"
						type="email"
						v-model="data.email" />
				</div>
				<div class="form__box">
					<span class="form__label">Name</span>
					<input
						required
						class="form__input"
						placeholder="John Doe"
						type="text"
						v-model="data.name" />
				</div>
				<div class="form__box">
					<span class="form__label">Message</span>
					<textarea
						required
						class="form__input"
						placeholder="Message"
						type="text"
						v-model="data.message"></textarea>
				</div>
				<button class="form__button" type="submit">Submit</button>
			</form>
		</div>
	</main>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

onMounted(() => document.body.classList.add('bg-white'));
onUnmounted(() => document.body.classList.remove('bg-white'));

const data = ref({
	email: '',
	name: '',
	message: ''
});

const submitForm = () => {
	console.log(data.value);
};
</script>

<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-width: 70%;
	@media only screen and (max-width: 768px) {
		max-width: 100%;
	}
	&__button {
		background: #222222;
		align-self: flex-start;
		border: none;
		color: #fff;
		font-size: 16px;
		border: 1px solid transparent;
		&:hover {
			border-color: #222222;
			color: #222222;
			background: #fff;
		}
	}
	&__label {
		font-weight: 600;
	}
	&__box {
		font-size: 2rem;
		display: flex;
		flex-direction: column;
		gap: 7px;
	}
	&__input {
		font: inherit;
		box-shadow: 0px 0px 8px 0px #0000001a;
		border: none;
		background: transparent;
		outline: none;
		padding: 1.2rem 2.4rem;
		resize: none;
		color: #555555;
		&::placeholder {
			opacity: 0.5;
		}
	}
}
.contacts {
	margin: 7rem 0;
	display: grid;
	grid-template-columns: 1fr 1.7fr;
	min-height: 100vh;
	gap: 6rem;
	@media only screen and (max-width: 900px) {
		grid-template-columns: auto;
		grid-auto-rows: 1fr;
	}

	&__right {
		margin-top: 2rem;
		display: flex;
		gap: 1.5rem;
		flex-direction: column;
		animation: slide-right 700ms forwards;
		@media only screen and (max-width: 900px) {
			padding: 0 3rem;
		}
		&-title {
			font-weight: 600;
		}
	}
	&__title {
		font-size: 4rem;
		font-weight: 400;
	}
	&__left {
		background-image: url(@/images/processed/contacts-1920.avif);
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
