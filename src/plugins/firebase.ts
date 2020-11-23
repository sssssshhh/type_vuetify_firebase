import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from '../../firebaseConfig';
import Vue from 'vue';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.prototype.$firebase = firebase;

// test
// firebase.firestore().collection('test').add({test: 'bbb'})
//   .then(r => console.log(r))
//   .catch(e => console.error(e));