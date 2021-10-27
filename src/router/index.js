import Vue from "vue";
import VueRouter from "vue-router";
import Player from "../views/Player.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/enter",
    name: "Enter",
    component: Player
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
