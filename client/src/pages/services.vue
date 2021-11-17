<template>
	<BContainer fluid class="m-0 py-5" data-aos="fade-up">
		<LogoHeader />

		<hr class="bg-shine mb-5" style="max-width: 800px;">

		<BRow class="mx-auto mb-5" style="max-width: 800px;">
			<!-- Content -->
			<BCol cols="12">
				<div
					v-for="(c, i) in content"
					:key="i"
					class="mb-5"
				>
					<h3
						class="
							mb-5
							text-center
							font-weight-bold
							text-uppercase
							text-primary
							text-spread-lg
						"
					>{{ c.title }}</h3>

					<p class="text-center text-light">{{ c.text }}</p>
				</div>
				<br>
			</BCol>

			<!-- Services -->
			<BCol
				v-for="(s, i) in services"
				:key="i"
				cols="6" md="4"
			>
				<!-- Service Image -->
				<div class="w-100 img-holder" data-aos="fade-up">
					<img :src="s.img" v-lazy="s.img">
				</div>

				<!-- Service Name -->
				<h6 class="my-4 text-center text-primary text-uppercase text-spread-sm">
					{{ s.service }}
				</h6>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import LogoHeader from '@/components/LogoHeader'
	import PageData from '@/defaults/pages/services'
	import DPage from '@/defaults/pages/directions'

	export default {
		components: {
			LogoHeader,
		},

		data() {
			return {
				PageData: PageData,
				DPage: DPage,
				content: [],
				services: [],
			}
		},

		created() {
			this.content = this.PageData.content
			this.services = this.PageData.services
		},
	}
</script>

<style lang="scss" scoped>
	.img-holder {
		height: 200px;
		overflow: hidden;

		img {
			float: left;
			width:  100%;
			height: 200px;
			object-fit: cover;
		}
	}
</style>