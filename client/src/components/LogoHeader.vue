<template>
	<div class="mx-auto mb-5" style="max-width: 300px;">
		<img
			:src="companyInfo.companyLogo"
			class="w-100"
			v-rellax
			data-rellax-xs-speed="0"
			data-rellax-mobile-speed="0"
			data-rellax-tablet-speed="0"
			data-rellax-desktop-speed="0"
		>
	</div>
</template>

<script>
import companyInfo from '../defaults/companyInfo'

export default {
	data() {
		return {
			companyInfo
		}
	},
}
</script>