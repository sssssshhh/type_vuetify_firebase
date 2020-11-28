import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './plugins/firebase';
import './plugins/vueToastNotification';

// import VueToast from 'vue-toast-notification';
// // Import one of the available themes
// //import 'vue-toast-notification/dist/theme-default.css';
// import 'vue-toast-notification/dist/theme-sugar.css';

// Vue.use(VueToast);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
