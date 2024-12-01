import { createRouter, createWebHistory } from 'vue-router';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ServicesView from '@/views/ServicesView.vue';
import UzbekistanView from '@/views/UzbekistanView.vue';
import MiceView from '@/views/MiceView.vue';
import ContactsView from '@/views/ContactsView.vue';
import LegalView from '@/views/LegalView.vue';
import FormView from '@/views/FormView.vue';
import lenis from '@/js/lenis';

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
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: ContactsView
		},
		{
			path: '/form',
			name: 'form',
			component: FormView
		},
		{
			path: '/legal',
			name: 'legal',
			component: LegalView
		}
	]
});

router.beforeEach(() => {
	ScrollTrigger.getAll().forEach(trigger => trigger.kill());
	lenis.scrollTo(0, { immediate: true });
});

export default router;
