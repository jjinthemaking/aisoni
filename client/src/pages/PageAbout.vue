<template>
	<BContainer class="py-5" data-aos="fade-up">
		<LogoHeader />

		<hr class="bg-shine mb-5" style="max-width: 800px;">
		
		<div class="mx-auto" style="max-width: 800px;">
			<AboutSection />
		</div>
	</BContainer>
</template>

<script>
	import AboutSection from '../components/AboutSection'
	import LogoHeader from '../components/LogoHeader'
	
	export default {
		components: {
			AboutSection,
			LogoHeader,
		},
	}
</script>