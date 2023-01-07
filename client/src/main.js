// [IMPORT] //
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Viewer from 'v-viewer'
import Vue from 'vue'
import { createStore } from 'vuex';
//import VueLazyload from 'vue-lazyload'
import VueRellax from 'vue-rellax'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'tiny-slider/src/tiny-slider.scss'
import 'viewerjs/dist/viewer.css'


// [IMPORT] Personal //
import App from './App.vue'
import router from './router'
import './assets/styles/bootstrap-override.scss'
import './assets/styles/style.scss'


const store = createStore({
	state() {
		return {
			node_env: localStorage.node_env == 'development' ? 'development' : 'production',
	
			showIntro: true,
			loading: false,
			
			showMenu: false,
	
			userLogged: false,
			user_decoded: {},
	
			adminLogged: false,
			admin_decoded: {},
	
			isHomePage: false,
	
			window: {
				innerWidth: window.innerWidth
			},
		}
	}
})


Vue.config.productionTip = false


Vue.createApp(App)
	.use(store)
	.use(BootstrapVue)
	.use(IconsPlugin)
	.use(Viewer)
	.use(router)
	.use(VueRellax)
	.mount('#app')
;