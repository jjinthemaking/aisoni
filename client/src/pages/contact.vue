<template>
	<BContainer fluid class="m-0 py-5" data-aos="fade-up">
		<LogoHeader />
		
		<hr class="bg-shine mb-5" style="max-width: 800px;">
		
		<div class="mb-5">
			<h3 class="mb-5 text-center font-weight-bold text-spread text-primary">
				{{ companyInfo.companyName }}
			</h3>
			<ContactInfo class="my-3" />
		</div>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import ContactInfo from '@/components/ContactInfo'
	import LogoHeader from '@/components/LogoHeader'
	import companyInfo from '@/defaults/companyInfo'
	import DPage from '@/defaults/pages/directions'

	export default {
		components: {
			LogoHeader,
			ContactInfo,
		},

		data() {
			return {
				companyInfo: companyInfo,
				DPage: DPage,
			}
		},
	}
</script>