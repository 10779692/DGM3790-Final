// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import AppHome from './AppHome'
import router from './router'

import Vuetify from 'vuetify'

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
 
Vue.use(Vuetify)

Vue.config.productionTip = false

// Custom Directive Here
Vue.directive('rainbow', {
  bind(el){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,AppHome },
  template: '<App/>'
})


