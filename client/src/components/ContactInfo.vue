<template>
	<BContainer class="text-center text-light" data-aos="fade-up">
		<!-- Email -->
		<h4 class="mb-3">
			Email
		</h4>
		<a :href="companyInfo.emailLink" class="text-light">
			<h4 class="mb-5">{{ companyInfo.email }}</h4>
		</a>

		<!-- Phone # -->
		<h4 class="mb-3">
			Cell ({{ companyInfo.contacts[0].name }})
		</h4>
		<a :href="companyInfo.contacts[0].phoneNumberLink" class="text-light">
			<h4 class="mb-5">
				{{ companyInfo.contacts[0].phoneNumber }}
			</h4>
		</a>

		<!-- Social Media -->
		<h4 class="mb-3">
			Follow Us
		</h4>
		<SocialMediaPlug class="mb-3" />
	</BContainer>
</template>

<script>
import SocialMediaPlug from '../components/SocialMediaPlug'
import companyInfo from '../defaults/companyInfo'

export default {
	data() {
		return {
			companyInfo
		}
	},

	components: {
		SocialMediaPlug,
	},
}
</script>

<style lang="scss" scoped>
	.contact-info i {
		display: block;
		float: left;
		width: 60px;
		height: 60px;
		line-height: 52px;
		text-align: center;
		background: #fff;
		color: #c0996b;
		font-size: 30px;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		border-radius: 50%;
		margin-right: 20px;
	}
</style>