<template>
	<BContainer class="py-5" data-aos="fade-up">
		<LogoHeader />

		<hr class="bg-shine mb-5" style="max-width: 800px;">
		
		<div class="mx-auto" style="max-width: 800px;">
			<About />
		</div>
	</BContainer>
</template>

<script>
	import About from '@/components/About'
	import LogoHeader from '../components/LogoHeader'
	
	export default {
		components: {
			About,
			LogoHeader,
		},
	}
</script>