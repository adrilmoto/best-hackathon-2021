import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { TweenMax, TweenLite, TimelineMax, gsap } from 'gsap';

Vue.config.productionTip = false

Vue.prototype.$wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
Vue.prototype.$tween = TweenMax;
Vue.prototype.$tweenLite = TweenLite;
Vue.prototype.$timeline = TimelineMax;
Vue.prototype.$gsap = gsap;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
