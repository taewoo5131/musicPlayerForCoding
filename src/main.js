import Vue from 'vue'
import Vuetify from 'vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.config.productionTip = false;
Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
