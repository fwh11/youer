// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Donglef from './Donglef'
import router from './router'

import Vueresource from 'vue-resource'
Vue.use(Vueresource)

/*import fastclick  from 'fastclick'*/
//import Vuex from 'vuex'
//Vue.use(Vuex)


/*import Store from '.store'*/


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
new Vue({
  el: '#donglef',
  router,
  template: '<Donglef/>',
  components: { Donglef }
})
var cebianlan = document.getElementById('cebianlan');
var cedv = document.getElementById('cedv');
var app = document.getElementById('app');
var mubu = document.getElementById('mubu');
console.log(cedv)
cebianlan.addEventListener('click',function(){
		app.style.transform='scale(0.8) translatex(680px)';
		cedv.style.left=0;
		mubu.style.display="block";
},true)
app.addEventListener('click',function(){
		this.style.transform='scale(1) translatex(0)';
		cedv.style.left="-750px";
		mubu.style.display="none";
},true)