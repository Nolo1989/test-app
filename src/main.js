import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router';
import { globalVue, eventBus } from './services/mixins/global';

Vue.config.productionTip = false

// Event bus
Vue.use(eventBus())
// Global Vue mixin
Vue.mixin(globalVue());

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
