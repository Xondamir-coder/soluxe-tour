<template>
	<section class="tours">
		<div class="tours__head">
			<span class="tours__label">Discover</span>
			<h1 class="tours__head-title">Explore the best Uzbekistan has to offer</h1>
			<p class="tours__text">
				Uzbekistan, a gem in the heart of Central Asia, beckons with its rich tapestry of
				history, culture, and natural beauty.
			</p>
		</div>
		<div class="tours__grids">
			<div class="tours__grid tours__grid--big">
				<div class="tours__grid-content">
					<h1 class="tours__grid-title--big">Glimpse of Uzbekistan</h1>
					<p class="tours__grid-text">
						As a premier destination for MICE (Meetings, Incentives, Conferences,
						Exhibitions) tours, Uzbekistan offers an extraordinary blend of ancient
						traditions and modern amenities, making it the perfect location for your
						next business event.
					</p>
				</div>
				<img src="@/assets/grid-img-1.jpeg" alt="grid img" />
			</div>
			<div class="tours__grid tours__grid--medium">
				<div class="tours__grid-content">
					<h1 class="tours__grid-title--small">Historical Treasures</h1>
					<p class="tours__grid-text">
						Wander through the legendary cities of Samarkand, Bukhara, and Khiva, where
						the ancient Silk Road comes alive with stunning architecture and vibrant
						markets. Marvel at the grand Registan Square, the intricate Shah-i-Zinda
						necropolis, and the timeless Ark Fortress.
					</p>
				</div>
				<img src="@/assets/grid-img-treasure.jpg" alt="grid img" />
			</div>
			<div class="tours__grid tours__grid--medium">
				<div class="tours__grid-content">
					<h1 class="tours__grid-title--medium">Modern Facilities</h1>
					<p class="tours__grid-text">
						Benefit from state-of-the-art conference venues, luxury hotels, and
						top-notch event management services. Uzbekistan's infrastructure ensures a
						seamless and comfortable experience for all your business needs.
					</p>
				</div>
				<img src="@/assets/grid-img-modern.jpg" alt="grid img" />
			</div>
			<div class="tours__grid tours__grid--small">
				<div class="tours__grid-content">
					<img src="@/assets/icons/uzb.svg" alt="uzb" />
					<h1 class="tours__grid-title--small">Cultural Richness</h1>
					<p class="tours__grid-text">
						Immerse yourself in Uzbekistan's diverse cultural heritage, from traditional
						music and dance to exquisite cuisine. Experience the vibrant local
						traditions that make each visit uniquely memorable.
					</p>
				</div>
			</div>
			<div class="tours__grid tours__grid--small">
				<div class="tours__grid-content">
					<img src="@/assets/icons/warm.svg" alt="warm" />
					<h1 class="tours__grid-title--small">Warm Hospitality</h1>
					<p class="tours__grid-text">
						Experience the renowned Uzbek hospitality, where every visitor is welcomed
						as a cherished guest. The warmth and friendliness of the people will make
						you feel at home, ensuring a pleasant and memorable stay.
					</p>
				</div>
			</div>
			<div class="tours__grid tours__grid--medium">
				<img src="@/assets/grid-img-handmade.jpeg" alt="handmade img" />
				<div class="tours__grid-content">
					<h1 class="tours__grid-title--medium">Handmade Works from Ancient Times</h1>
					<p class="tours__grid-text">
						Explore the exquisite handmade crafts that have been passed down through
						generations. From intricate silk weaving and detailed ceramics to stunning
						embroidery and wood carvings, Uzbekistan's artisans continue to create
						masterpieces that reflect the country's rich cultural heritage.
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
		p {
			text-align: center;
		}
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
		}
	}
	&__grids {
		display: grid;
		grid-template-areas:
			'uzbekistan uzbekistan treasure treasure'
			'uzbekistan uzbekistan handmade handmade'
			'richness warm modern modern';
		grid-auto-columns: 1fr;
		grid-auto-rows: 32rem;
		gap: 3.2rem;
		@media only screen and (max-width: 1000px) {
			grid-auto-rows: 60rem max-content max-content 1fr max-content max-content;
			grid-template-areas:
				'uzbekistan uzbekistan'
				'richness warm'
				'treasure treasure'
				'handmade handmade'
				'modern modern';
		}
		@media only screen and (max-width: 500px) {
			grid-auto-rows: 60rem max-content max-content 1fr max-content max-content;
			grid-template-areas:
				'uzbekistan uzbekistan'
				'richness richness'
				'warm warm'
				'handmade handmade'
				'treasure treasure'
				'modern modern';
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
				width: 40%;
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
			grid-area: treasure;
		}
		&:nth-child(3) {
			grid-area: modern;
		}
		&:nth-child(4) {
			grid-area: richness;
		}
		&:nth-child(5) {
			grid-area: warm;
		}
		&:last-child {
			grid-area: handmade;
		}
	}
}
</style>
