<template>
	<BContainer fluid class="m-0 py-5" data-aos="fade-up">
		<LogoHeader />

		<div class="mx-auto mb-5" style="max-width: 800px;">
			<viewer :options="{ title: false, transition: false, }">
				<!-- Instagram -->
				<BRow v-if="instagramFeed.length != 0">
					<BCol cols="12">
						<hr class="bg-shine mb-5" style="max-width: 800px;">
					</BCol>

					<BCol cols="12">
						<p class="text-center mb-5 h2 text-primary">Instagram</p>
					</BCol>

					<BCol
						v-for="(item, i) in instagramFeed" :key="i"
						cols="6" md="4"
					>
						<div class="pb-5">
							<img
								:src="item.media_url"
								v-lazy="item.media_url"
								class="w-100"
							>
						</div>
					</BCol>
				</BRow>

				<!-- Other Work -->
				<BRow>
					<BCol cols="12">
						<hr class="bg-shine mb-5" style="max-width: 800px;">
					</BCol>

					<BCol cols="12">
						<p class="text-center mb-5 h2 text-primary">Our Work</p>
					</BCol>

					<BCol
						v-for="(img, i) in pageData.images"
						:key="i"
						cols="6" md="4"
						data-aos="fade-up"
					>
						<div class="img-holder mb-4">
							<img
								:src="img"
								v-lazy="img"
								alt="No Photo"
							>
						</div>
					</BCol>
				</BRow>
			</viewer>
		</div>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import LogoHeader from '@/components/LogoHeader'
	import pageData from '@/defaults/pages/gallery'
	import PageService from '@/services/PageService'

	export default {
		data() {
			return {
				reqData: {},
				pageData: pageData,
				instagramFeed: []
			}
		},

		components: {
			LogoHeader,
		},

		methods: {
			async getPageData() {
				this.reqData = await PageService.s_gallery()

				if (this.reqData.status) {
					this.instagramFeed = this.reqData.instagramFeed
				}
			}
		},

		async created() {
			await this.getPageData()
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