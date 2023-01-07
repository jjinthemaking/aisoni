<template>
	<BContainer class="text-center" style="height: 100vh; max-width: 1300px;">
		<div class="px-1 center-content">
			<img
				:src="companyInfo.companyLogo"
				class="w-100"
				style="max-width: 600px;"
				data-aos="fade"
				data-aos-delay="100"
			/>
			<h3 class="my-2 my-sm-4 text-light">———</h3>
			
			<h6
				v-html="companyInfo.aboutSmallHTML"
				class="text-center text-light text-spread-sm"
				style="font-size: .9em;"
			></h6>
		</div>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import companyInfo from '../../defaults/companyInfo'

	export default {
		data() {
			return {
				companyInfo: companyInfo,
			}
		},
	}
</script>

<style lang="scss" scoped>
	.center-content {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
</style>