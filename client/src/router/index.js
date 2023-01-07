// [IMPORT] //
import { createRouter, createWebHistory } from 'vue-router'


// [IMPORT] Personal (Ordered by path) //
import companyInfo from '../defaults/companyInfo.js'
import index from '../pages/PageIndex.vue'
import about from '../pages/PageAbout.vue'
import contact from '../pages/PageContact.vue'
import gallery from '../pages/PageGallery.vue'
import privacypolicy from '../pages/PagePrivacyPolicy.vue'
import services from '../pages/PageServices.vue'
import PageNotFound from '../pages/PageNotFound.vue'


const router = createRouter({
	history: createWebHistory(),

	base: process.env.BASE_URL,

	routes: [
		{
			path: '/',
			name: '/',
			component: index,
			meta: {
				title: 'Home'
			},
		},
		{
			path: '/about',
			name: 'about',
			component: about,
			meta: {
				
				title: 'About'
			},
		},
		{
			path: '/bio',
			name: 'bio',
			component: about,
			meta: {
				
				title: 'Bio'
			},
		},
		{
			path: '/contact',
			name: 'contact',
			component: contact,
			meta: {
				title: 'Contact'
			},
		},
		{
			path: '/gallery',
			name: 'gallery',
			component: gallery,
			meta: {
				title: 'Gallery'
			},
		},
		{
			path: '/privacy-policy',
			name: 'privacy-policy',
			component: privacypolicy,
			meta: {
				title: 'Privacy Policy & Terms of Service'
			},
		},
		{
			path: '/services',
			name: 'services',
			component: services,
			meta: {
				title: 'Services'
			},
		},
		// Not-Found //
		{
			path: '/**',
			name: 'not_found',
			component: PageNotFound,
			meta: {
				title: 'Not Found'
			},
		},
	],

	// [VUE-ROUTER] Scroll Behavior //
	scrollBehavior () { return { x: 0, y: 0 } }
})


// [VUE-ROUTER-SET-TITLE] //
router.beforeEach((to, from, next) => {
	document.title = to.meta.title + ' — ' + companyInfo.companyShortName
	next()
})


export default router
