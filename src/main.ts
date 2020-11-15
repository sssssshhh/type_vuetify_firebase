import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

// Firebase App (the core Firebase SDK) is always required and
import firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from '../firebaseConfig';

Vue.config.productionTip = false;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// test
firebase.firestore().collection('test').add({test: 'aaa'})
  .then(r => console.log(r))
  .catch(e => console.error(e));

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
