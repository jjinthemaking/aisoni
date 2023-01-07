<template>
	<div class="w-100 bg-dark text-secondary border-top" style="border-color: #ffffff4d !important;">
		<BContainer>
			<BRow class="pt-4">
				<BCol cols="12" class="text-center" data-aos="fade">
					<RouterLink to="/" class="text-decoration-none">
						<img
							:src="companyInfo.companyLogo"
							:alt="companyInfo.companyShortName"
							class="w-100"
							style="max-width: 120px;"
						>
					</RouterLink>
					<br><br><br>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up">
					<h4 class="mb-5 text-primary">
						<span class="pb-2 border-bottom border-secondary">
							Follow Us
						</span>
					</h4>
					<SocialMediaPlug variant="light" />
					<br><br>

					<h4 v-if="companyInfo.address" class="text-center text-primary">
						Location
					</h4>
					<a :href="companyInfo.googleMapsLink" class="mb-3 text-white">
						<h5 class="mb-4">{{ companyInfo.address }}</h5>
					</a>

					<h4 v-if="companyInfo.hoursOfOperation.length" class="text-primary">Hours</h4>
					<ul class="list-unstyled text-small text-white">
						<li
							v-for="(hoo, index) in companyInfo.hoursOfOperation"
							:key="index"
						>
							<span class="text-primary">{{ hoo.days }}:</span>
							{{ hoo.hours }}
						</li>
					</ul>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up">
					<h4 class="mb-5 text-primary">
						<span class="pb-3 border-bottom border-primary">
							Company
						</span>
					</h4>

					<ul class="list-unstyled text-small">
						<li v-for="(link, i) in pageLinks" :key="i">
							<RouterLink :to="link.path" class="text-white">
								<span v-if="link.text">{{ link.text }}</span>
								<span v-else v-html="link.navIcon"></span>
							</RouterLink>
						</li>
					</ul>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up">
					<h4 class="mb-5 text-primary">
						<span class="pb-3 border-bottom border-info">Legal</span>
					</h4>
					
					<RouterLink to="/privacy-policy" class="">
						Privacy Policy & Terms of Service
					</RouterLink>
					<br><br>
				</BCol>

				<BCol cols="12" class="my-3 text-center">
					<h6 class="">
						<a href="https://www.w3st.io" target="_blank" class="text-light">
						© w3st.io {{ new Date().getFullYear() }}
						</a>
					</h6>
					<br><br><br><br><br>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import SocialMediaPlug from '../../components/SocialMediaPlug'
	import companyInfo from '../../defaults/companyInfo'
	import pageLinks from '../../defaults/pageLinks'

	export default {
		components: {
			SocialMediaPlug
		},

		data() {
			return {
				companyInfo: companyInfo,
				pageLinks: pageLinks,
			}
		},
	}
</script>