// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal (Ordered by path) //
import companyInfo from '@/defaults/companyInfo'
import index from '@/pages'
import about from '@/pages/about'
import contact from '@/pages/contact'
import gallery from '@/pages/gallery'
import privacypolicy from '../pages/privacy-policy'
import services from '@/pages/services'
import notFound from '@/pages/404'


Vue.use(VueRouter)


const router = new VueRouter({
	mode: 'history',
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
			component: notFound,
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
