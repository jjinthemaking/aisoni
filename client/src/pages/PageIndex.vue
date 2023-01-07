<template>
	<div class="outerWrapper">
		<div class="bg-shade-darkerer">
			<HeroSection />
		</div>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import HeroSection from '@/components/home/HeroSection'
	import pageData from '@/defaults/pages'
	import router from '@/router'

	export default {
		name: 'PageIndex',

		components: {
			HeroSection,
		},

		data() {
			return {
				pageData: pageData,
				reqData: {},
				reikiTitle: 'Reiki Title',
				reikiDescription: 'Reiki description goes here',
				services: [],
			}
		},

		methods: {
			redirectCompanyInfo() { router.push({ name: 'book' }) },
		},

		async created() {
			this.$store.state.isHomePage = true		
		},

		destroyed() {
			this.$store.state.isHomePage = false
		},
	}
</script>

<style lang="scss" scoped>
	.outerWrapper {
		background-image: url('../assets/bg-photo.jpg');
		background-position: center center;
		background-size: cover;
		background-attachment: fixed;
		background-repeat: no-repeat;
	}

	.fade-enter-active,
	.fade-leave-active { transition: opacity 1s; }
	.fade-enter,
	.fade-leave-to { opacity: 0; }
</style>
