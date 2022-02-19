import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './pages/Dashboard';
import SmallGame from './pages/SmallGame.vue';
import MediumGame from './pages/MediumGame.vue';
import LargeGame from './pages/LargeGame.vue';
import MyGame from './pages/MyGame.vue';

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: '/',
			redirect: '/dashboard'
		},
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: Dashboard
		},
		{
			path: '/small-game',
			name: 'SmallGame',
			component: SmallGame,
			meta: { gameInProgress: true }
		},
		{
			path: '/medium-game',
			name: 'MediumGame',
			component: MediumGame,
			meta: { gameInProgress: true }
		},
		{
			path: '/large-game',
			name: 'LargeGame',
			component: LargeGame,
			meta: { gameInProgress: true }
		},
		{
			path: '/my-game',
			name: 'MyGame',
			component: MyGame,
			meta: { gameInProgress: true }
		},
	]
});

// window.popStateDetected = false;
// window.addEventListener('popstate', () => {
//   window.popStateDetected = true;
// })


// router.beforeEach((to, from, next) => {
//   const IsItABackButton = window.popStateDetected;
//   window.popStateDetected = false;

//   if (IsItABackButton) {
//     if (from && from.meta && from.meta.gameInProgress) {
//         this.$bus.$emit('openModal');
//     }
//     return '';
//   }
//   next();
// })

export default router;