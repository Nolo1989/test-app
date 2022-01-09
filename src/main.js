import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router';
import { eventBus } from './services/mixins/global';

Vue.config.productionTip = false

// Event bus
Vue.use(eventBus())

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
