import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home.vue';
import Translate from '@/components/translate/Translate.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/translate',
			name: 'Translate',
			component: Translate,
		},
	],
});
