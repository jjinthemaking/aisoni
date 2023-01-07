<template>
	<div id="app">
		<!-- UI -->
		<NavBar />

		<!-- RouterView -->
		<RouterView />

		<!-- FooterSection -->
		<FooterSection />
	</div>
</template>

<script>
	// [IMPORT]
	import aos from "aos";
	import "aos/dist/aos.css";

	import NavBar from "./components/nav/NavBar";
	import FooterSection from "./components/nav/FooterSection";

	export default {
		components: {
			NavBar,
			FooterSection,
		},

		methods: {
			onResize() {
				this.$store.state.window.innerWidth = window.innerWidth
			},
		},

		created() { aos.init() },

		mounted() {
			this.$nextTick(() => {
				window.addEventListener('resize', this.onResize)
			})
		},

		beforeDestroy() { 
			window.removeEventListener('resize', this.onResize)
		},
	}
</script>

<style lang="scss">
	// [IMPORT] // heading // * //
	@import url('https://fonts.googleapis.com/css2?family=Lato&family=Oswald&family=Poppins:wght@300;400&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

	* { font-family: 'Montserrat', sans-serif !important; }
	h1,h2,h3,h4,h5,h6 { font-family: 'Montserrat', sans-serif !important; }

</style>