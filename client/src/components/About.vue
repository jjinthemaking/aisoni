<template>
	<div
		class="my-5"
		v-rellax
		data-rellax-xs-speed="0"
		data-rellax-mobile-speed="0"
		data-rellax-tablet-speed="0"
		data-rellax-desktop-speed="0"
	>
		<p
			v-html="companyInfo.aboutHTML"
			class="mb-4 text-light text-center text-spread-sm"
			data-aos="fade-up"
		></p>

		<div class="text-center my-5">
			<RouterLink to="/contact">
				<BButton variant="info" size="lg" class="text-spread-sm">CONTACT US</BButton>
			</RouterLink>
		</div>
	</div>
</template>

<script>
import companyInfo from '@/defaults/companyInfo'

export default {
	data() {
		return {
			companyInfo
		}
	},
}
</script>