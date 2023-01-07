<template>
	<header>
		<!-- Desktop Spacer -->
		<div
			v-if="!this.$store.state.isHomePage"
			class="d-none d-lg-block"
			style="height: 64px;"
		/>

		<!-- Mobile Spacer -->
		<div
			v-if="!this.$store.state.isHomePage"
			class="d-block d-lg-none"
			style="height: 69.23px;"
		/>

		<div class="w-100 fixed-top">
			<!-- Desktop Menu -->
			<div
				class="py-4 d-none d-lg-flex w-100 transition"
				:class="[navClass, { 'bg-dark shadow': !this.$store.state.isHomePage }]"
			>
				<div class="mx-auto">
					<RouterLink
						v-for="(l, i) in pageLinks"
						:key="i"
						:to="l.path"
						style="text-decoration: none !important;"
					>
						<span
							variant="none"
							class="
								float-left
								mx-3 mx-lg-4
								font-weight
								text-white
								text-spread-sm
							"
							:class="titleClass"
						>
							<span class="m-0 text-uppercase menu-link" style="font-size: .85em;">
								{{ l.text }}
							</span>
						</span>
					</RouterLink>
				</div>
			</div>

			<!-- Mobile Menu -->
			<div
				class="d-flex d-lg-none m-0 p-0 text-right shadow bg-shade-darker transition"
				:class="[navClass, { 'bg-dark': !this.$store.state.isHomePage }]"
			>
				<div class="text-center w-100 px-3 py-3" style="max-width: 130px;">
					<RouterLink to="/">
					<img
						:src="companyInfo.companyLogo"
						class="w-100"
					>
					</RouterLink>
				</div>

				<!-- [HIDDEN] Menu Button -->
				<BButton
					variant="none"
					class="px-3 text-light"
					style="margin-left: auto;"
					@click="toggle()"
				><MenuIcon size="3x" /></BButton>
			</div>

			<!-- Hidden Side Menu -->
			<SideMenu />
		</div>
	</header>
</template>

<script>
	// [IMPORT] //
	import { MenuIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '../../components/nav/SideMenu'
	import companyInfo from '../../defaults/companyInfo'
	import pageLinks from '../../defaults/pageLinks'
	import buttons from '../../defaults/pageLinks'
	import router from '../../router'

	export default {
		components: {
			MenuIcon,
			SideMenu,
		},

		data() {
			return {
				titleClass: '',
				navClass: '',
				companyInfo: companyInfo,
				pageLinks: pageLinks,
				buttons: buttons,
				loggedIn: false,
				decoded: {},
				sideMenuOpen: false,router:router
			}
		},

		methods: {
			toggle() { this.$store.state.showMenu = !this.$store.state.showMenu },

			handleScroll() {
				if (window.scrollY > 0) {
					this.navClass = 'bg-shade-darker'
					this.titleClass = 'text-white'
				}
				else {
					this.navClass = ''
					this.titleClass = ''
				}
			},
		},

		created() {
			window.addEventListener('scroll', this.handleScroll)
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/bootstrap-override.scss';

	.transition {
		transition: .5s;
	}

	.nav {
		z-index: 100;
	}

	.menu-link {
		position: relative;
		transition: .2s;

		&::before {
			@extend .bg-info;

			content: "";
			position: absolute;
			width: 100%;
			height: 1px;
			bottom: -5px;
			left: 0;
			visibility: hidden;
			transform: scaleX(0);
			transition: all 0.3s ease-in-out 0s;
		}

		&:hover::before {
			visibility: visible;
			transform: scaleX(1);
		}
	}

	.router-link-exact-active {
		.menu-link::before {
			visibility: visible;
			transform: scaleX(1);
		}
	}
</style>