<template>
	<main class="container">
		<div class="legal">
			<div class="legal__head">
				<h1 class="heading-style-h1">Terms of Service</h1>
				<p class="text-size-medium">Effective date: July 31, 2024</p>
			</div>
			<div class="legal__content">
				<div class="legal__row">
					<h2 class="heading-big">Terms</h2>
					<p>By using our website, you agree to the following Terms of Service:</p>
					<ol class="legal__ordered">
						<li>
							Acceptance of Terms: By accessing and using our website, you acknowledge
							that you have read, understood, and agree to these Terms of Service,
							which govern your use of our website.
						</li>
						<li>
							Description of Service: Our website provides information about our MICE
							travel services and offerings in Uzbekistan.
						</li>

						<li>
							User Responsibilities: You are responsible for ensuring the accuracy of
							the information you provide on the website and for maintaining the
							confidentiality of your account credentials.
						</li>
						<li>
							Prohibited Activities: You agree not to engage in any unauthorized or
							unlawful activities on our website, including but not limited to
							hacking, spamming, or violating intellectual property rights.
						</li>
						<li>
							Intellectual Property: All content and materials on the website,
							including logos, images, and text, are the property of Soluxe Tour and
							are protected by applicable copyright and trademark laws.
						</li>
						<li>
							Privacy Policy: Please refer to our Privacy Policy for information about
							how we collect, use, and protect your personal data.
						</li>
						<li>
							Liability Limitations: While we strive to provide accurate and
							up-to-date information, we do not guarantee the completeness, accuracy,
							or reliability of the content on the website. Soluxe Tour shall not be
							liable for any damages resulting from your use of the website.
						</li>
						<li>
							Indemnification: You agree to indemnify and hold Soluxe Tour and its
							affiliates harmless from any claims, damages, or liabilities arising out
							of your use of the website or violation of these Terms of Service.
						</li>
						<li>
							Termination: Soluxe Tour reserves the right to terminate or suspend your
							access to the website at any time and for any reason.
						</li>
						<li>
							Modifications: We may update or modify these Terms of Service from time
							to time. Any changes will be effective immediately upon posting on the
							website. It is your responsibility to review these terms periodically.
						</li>
						<li>
							Governing Law and Jurisdiction: These Terms of Service shall be governed
							by the laws of Uzbekistan, and any disputes shall be subject to the
							exclusive jurisdiction of the courts in Uzbekistan.
						</li>
					</ol>
					<p>
						If you do not agree with these Terms of Service, please refrain from using
						our website. If you have any questions or concerns, please contact us at
						<a href="mailto:info@soluxetour.uz">info@soluxetour.uz.</a>
					</p>
				</div>
				<div class="legal__row">
					<h2 class="heading-big">Privacy Policy</h2>
					<p>
						At Soluxe Tour, we value your privacy and are committed to protecting your
						personal information. We collect only essential data to provide our travel
						services and ensure a seamless experience. We do not share your information
						with third parties, except for necessary service providers. Your data is
						securely stored, and we adhere to all applicable data protection
						regulations. By using our services, you agree to this Privacy Policy. For
						any inquiries or concerns, please contact us at
						<a href="mailto:info@soluxetour.uz">info@soluxetour.uz.</a>
					</p>
				</div>
				<div class="legal__row">
					<h2 class="heading-big">Cancellation and Refund Policy</h2>
					<p><strong>Cancellation Charges</strong></p>
					<p>
						Our Cancellation Policy is designed to ensure clarity and fairness for our
						valued clients. We understand that changes in travel plans may sometimes be
						unavoidable, and we aim to accommodate such situations while also
						considering the resources and efforts involved in organizing our tours.
					</p>
					<ul>
						<li>30 days or more prior to the scheduled arrival date: No charges.</li>
						<li>
							29 to 21 days before the scheduled arrival date: Cancellation fee
							equivalent to 50% of the total package cost.
						</li>
						<li>
							20 to 15 days before the scheduled arrival date: Cancellation fee
							equivalent to 75% of the total package cost.
						</li>
						<li>
							14 days and the arrival date: Cancellation fee equivalent to 100% of the
							total package cost.
						</li>
						<li>
							No Show: Cancellation fee equivalent to 100% of the total package cost.
						</li>
					</ul>
					<p><strong>Itinerary Modifications</strong></p>
					<p>
						We recognize that unforeseen circumstances may arise that could necessitate
						changes to the tour itinerary or its components. Soluxe Tour reserves the
						right to modify or vary the tour itinerary due to prevailing local
						conditions or force majeure events. In such cases, we will make every effort
						to provide suitable alternatives of comparable value or charge a supplement
						locally if necessary, without any liability to the client for costs or loss
						of enjoyment resulting from these changes.
					</p>
					<p><strong>**Client Responsibilities**</strong></p>
					<p>
						To ensure prompt and appropriate resolution, please note the following
						conditions:
					</p>
					<p>
						- If any services are lacking during the tour, it is the responsibility of
						the client to communicate the issue directly to Soluxe Tour immediately,
						allowing us the opportunity to address and resolve the matter to the guest's
						satisfaction.
					</p>
					<p>
						- Any negative feedback or complaints must be expressed during the trip or
						before leaving Uzbekistan. We encourage clients to provide feedback through
						our feedback form, which will allow us to address any concerns promptly.
					</p>
					<p><strong>Our Commitment</strong></p>
					<p>
						We value our clients' trust and are committed to providing exceptional
						travel experiences. We appreciate your understanding and cooperation in
						adhering to our cancellation policy. For any further inquiries or
						assistance, please don't hesitate to contact our dedicated customer support
						team.
					</p>
					<p><strong>Policy Effective Date</strong></p>
					<p>
						This cancellation policy is effective from 31 July 2024 and supersedes any
						previous policy statements. Soluxe Tour reserves the right to modify this
						policy as necessary, and any changes will be duly communicated on our
						website.
					</p>
				</div>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.legal {
	max-width: 76.8rem;
	margin: 10rem auto;
	display: flex;
	flex-direction: column;
	gap: 10rem;
	padding: 3rem;
	&__content {
		display: flex;
		flex-direction: column;
		gap: 5rem;
	}
	&__row {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	&__ordered {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		li {
			margin-left: 2rem;
			padding-left: 1rem;
		}
	}
	&__head {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}
	h1 {
		text-align: center;
	}
}
a {
	text-decoration: underline;
}
.decimal-list {
	list-style: decimal;
}
</style>
