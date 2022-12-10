import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import {routes} from "./router/routes.js"
import {store} from "./store/store.js"
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";


Vue.use(VueRouter);
Vue.use(VueSweetalert2)


const router = new VueRouter({
  //aqui se pone las rutas
  routes,
  mode:"history"
})

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store,
}).$mount('#app')
