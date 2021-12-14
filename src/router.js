import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './pages/Dashboard';
import SmallGame from './pages/SmallGame.vue';
import MediumGame from './pages/MediumGame.vue';
import LargeGame from './pages/LargeGame.vue';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/dashboard',
            component: Dashboard
        },
        {
			path: '/small-game',
			name: 'SmallGame',
			component: SmallGame,
		},
        {
			path: '/medium-game',
			name: 'MediumGame',
			component: MediumGame,
		},
        {
			path: '/large-game',
			name: 'LargeGame',
			component: LargeGame,
		},
    ]
});

export default router;