<template>
	<main class="contacts">
		<div class="contacts__left">
			<h1 class="contacts__title">
				Welcome to Uzbekistan – where ancient Silk Road history meets modern MICE
				excellence!
			</h1>
		</div>
		<div class="contacts__right">
			<div class="contacts__box">
				<p class="contacts__box-label">Address</p>
				<div class="contacts__box-content">
					<div>
						<span>Tashkent, Uzbekistan</span>
						<p>
							38 S 2nd St <br />
							P.O. Box 68 <br />
							Columbia, PA 17512
						</p>
					</div>
					<div>
						<span>Beijing, China</span>
						<p>
							38 S 2nd St <br />
							P.O. Box 68 <br />
							Columbia, PA 17512
						</p>
					</div>
				</div>
			</div>
			<div class="contacts__box">
				<p class="contacts__box-label">Phone</p>
				<div class="contacts__box-content">
					<div>
						<span>Tashkent, Uzbekistan</span>
						<a href="tel:+998 90 123 45 67">
							<p>+998 90 123 45 67</p>
						</a>
					</div>
					<div>
						<span>Beijing, China</span>
						<a href="tel:+8 123 456 78 90">
							<p>+8 123 456 78 90</p>
						</a>
					</div>
				</div>
			</div>
			<div class="contacts__box">
				<p class="contacts__box-label">Email</p>
				<div class="contacts__box-content">
					<div>
						<span>Tashkent, Uzbekistan</span>
						<a href="mailto:info@soluxetour.uz">
							<p>info@soluxetour.uz</p>
						</a>
					</div>
					<div>
						<span>Beijing, China</span>
						<a href="mailto:info@soluxetour.cn">
							<p>info@soluxetour.cn</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup></script>

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

		@media only screen and (max-width: 900px) {
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		}
		&-label {
			font-weight: 600;
			font-size: 1.8rem;
		}
		&-content {
			display: flex;
			flex-wrap: wrap;
			gap: 4rem;

			span {
				font-size: 1.8rem;
				color: #1e1e1e;
			}
			p {
				font-size: 3rem;
				font-style: italic;
				font-weight: 500;
			}
		}
	}
	&__right {
		padding: 3rem 0;
		display: flex;
		flex-direction: column;
		gap: 8rem;
		@media only screen and (max-width: 900px) {
			padding: 3rem;
		}
	}
	&__title {
		font-size: 4rem;
		font-weight: 400;
	}
	&__left {
		background-image: url(@/assets/contacts.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		display: grid;
		place-items: center;
		text-align: center;
		color: var(--color-primary);
		@media only screen and (max-width: 768px) {
			display: none;
		}
	}
	a {
		text-decoration: underline;
	}
}
</style>
