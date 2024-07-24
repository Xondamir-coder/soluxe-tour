import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ServicesView from '@/views/ServicesView.vue';
import UzbekistanView from '@/views/UzbekistanView.vue';
import MiceView from '@/views/MiceView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView
		},
		{
			path: '/services',
			name: 'services',
			component: ServicesView
		},
		{
			path: '/uzbekistan',
			name: 'uzbekistan',
			component: UzbekistanView
		},
		{
			path: '/mice',
			name: 'mice',
			component: MiceView
		}
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { left: 0, top: 0 };
		}
	}
});

export default router;
