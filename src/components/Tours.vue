<template>
	<section class="tours">
		<div class="tours__head">
			<span class="tours__label">Tours</span>
			<h1 class="tours__head-title">Explore the best Uzbekistan has to offer</h1>
			<p class="tours__text">
				Our team of experts sources eye-catching special offers; from private island tours
				to thrilling adventure ones, our collection is simply irresistible.
			</p>
		</div>
		<div class="tours__grids">
			<div class="tours__grid tours__grid--big">
				<div class="tours__grid-content">
					<span class="tours__label">Best selling</span>
					<h1 class="tours__grid-title--big">Glimpse of Uzbekistan</h1>
					<p class="tours__grid-text">
						Our most popular package is called Best of Uzbekistan; it is a guaranteed
						both Italian and german seat-in-coach program that takes place every week.
						The program is carved out to include all the important and most interesting
						sites in Uzbekistan offering the best combination of culture, history and
						little bit of adventure
					</p>
				</div>
				<img src="@/assets/grid-img-1.jpeg" alt="grid img" />
			</div>
			<div class="tours__grid tours__grid--medium">
				<img src="@/assets/grid-img-2.webp" alt="grid img" />
				<div class="tours__grid-content">
					<span class="tours__label">Family favourite</span>
					<h1 class="tours__grid-title--small">Wahiba sands</h1>
					<p class="tours__grid-text">
						Wahiba Sands occur to be an infinite expanse of uniform dunes. The towering
						heaps of sand turn from pale gold at noon to a brilliant yellow and then
						coppery orange at lower angles of the sun. An overnight stay here provides a
						simple opportunity to feel the raw strength of the desert from the comforts
						of opulent camps.
					</p>
				</div>
			</div>
			<div class="tours__grid tours__grid--big">
				<div class="tours__grid-content">
					<span class="tours__label">Most authentic experiences</span>
					<h1 class="tours__grid-title--big">Nizwa Friday Market</h1>
					<p class="tours__grid-text">
						Nizwa Friday Market is one of the most attractive event for tourist visiting
						Uzbekistan. It is an electrifying experience for the first time visitor as
						you would not see such action packed live stock trade anywhere in the world.
						Here farmers and traders come to this one of the best traditional market
						places in the Middle East, bringing their animals from as far away as
						Salalah for barter and trade.
					</p>
				</div>
				<img src="@/assets/hero-image-7.jpeg" alt="grid img" />
			</div>
			<div class="tours__grid tours__grid--small">
				<div class="tours__grid-content">
					<img src="@/assets/icons/binocle.svg" alt="binocle" />
					<h1 class="tours__grid-title--small">Turtle watching</h1>
					<p class="tours__grid-text">
						This is one of the few beaches in the world where you can see the green
						backed turtle coming to lay eggs. Tours and observation of turtles rank
						among the most well-liked ecotourism activities in Uzbekistan.
					</p>
				</div>
			</div>
			<div class="tours__grid tours__grid--small">
				<div class="tours__grid-content">
					<img src="@/assets/icons/music.svg" alt="music" />
					<h1 class="tours__grid-title--small">Royal opera house</h1>
					<p class="tours__grid-text">
						The Royal Opera House Muscat is the Sultanate of Uzbekistan's leading arts
						and culture organization. The Opera House, located in Muscat, Uzbekistan,
						aspires to be a centre of excellence in worldwide cultural engagement.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
	gsap.to('.tours', {
		scrollTrigger: {
			trigger: '.tours',
			start: 'top center',
			end: 'bottom center',
			toggleClass: 'active'
		}
	});
});
</script>

<style lang="scss" scoped>
.tours {
	display: flex;
	flex-direction: column;
	gap: 10rem;
	transform: translateY(10rem);
	opacity: 0;
	transition: transform 400ms, opacity 400ms;
	&.active {
		transform: translateY(0);
		opacity: 1;
	}

	@media only screen and (max-width: 768px) {
		gap: 5rem;
	}
	&__label {
		font-weight: 600;
		letter-spacing: 0.4px;
	}
	&__text {
		text-align: left;
		letter-spacing: 0.2px;
		font-size: 1.8rem;
		line-height: 1.5;
	}
	&__head {
		margin: auto;
		text-align: center;
		max-width: 60rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		@media only screen and (max-width: 768px) {
			max-width: initial;
		}
		&-title {
			font-size: 4.8rem;
			font-weight: 700;
			line-height: 1.2;
			@media screen and (max-width: 991px) {
				font-size: 4.4rem;
			}
			@media screen and (max-width: 767px) {
				font-size: 4rem;
			}
			@media screen and (max-width: 479px) {
				text-align: left;
			}
		}
	}
	&__grids {
		display: grid;
		grid-template-areas:
			'uzbekistan uzbekistan family family'
			'uzbekistan uzbekistan nizwa nizwa'
			'turtle music nizwa nizwa';
		grid-auto-columns: 1fr;
		grid-auto-rows: 32rem;
		gap: 3.2rem;
		@media only screen and (max-width: 1000px) {
			grid-auto-rows: 60rem max-content max-content 70rem 70rem;
			grid-template-areas:
				'uzbekistan uzbekistan'
				'turtle music'
				'family family'
				'nizwa nizwa';
		}
		@media only screen and (max-width: 500px) {
			grid-auto-rows: 80rem max-content max-content max-content 80rem;
			grid-template-areas:
				'uzbekistan uzbekistan'
				'turtle turtle'
				'music music'
				'family family'
				'nizwa nizwa';
		}
	}
	&__grid {
		border: 1px solid #000;
		border-radius: 12px;
		overflow: hidden;
		img {
			height: 100%;
			object-fit: cover;
		}
		&-title {
			&--small {
				line-height: 1.4;
				font-size: 2rem;
				letter-spacing: 1px;
				font-weight: 700;
			}
			&--big {
				font-size: 4rem;
				letter-spacing: 0.8px;
				line-height: 1.1;
				font-weight: 700;
				@media screen and (max-width: 991px) {
					font-size: 3.6rem;
				}
				@media screen and (max-width: 767px) {
					font-size: 2.8rem;
					line-height: 1.4;
				}
			}
		}
		&--big {
			display: flex;
			flex-direction: column;
			div {
				padding: 4.8rem;
				@media only screen and (max-width: 768px) {
					padding: 7%;
				}
			}
		}
		&--medium {
			display: flex;
			@media only screen and (max-width: 1000px) {
				align-items: center;
			}
			@media only screen and (max-width: 500px) {
				flex-direction: column;
			}
			img {
				width: 50%;
				@media only screen and (max-width: 500px) {
					width: 100%;
				}
			}
		}
		&--small {
			img {
				width: 4.8rem;
				height: 4.8rem;
			}
		}
		&-content {
			padding: 5%;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		&:first-child {
			grid-area: uzbekistan;
		}
		&:nth-child(2) {
			grid-area: family;
		}
		&:nth-child(3) {
			grid-area: nizwa;
		}
		&:nth-child(4) {
			grid-area: turtle;
		}
		&:last-child {
			grid-area: music;
		}
	}
}
</style>
