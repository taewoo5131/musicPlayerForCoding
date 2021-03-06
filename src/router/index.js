import Vue from "vue";
import VueRouter from "vue-router";
import Player from "../views/Player.vue"
import MusicPlay from "../views/musicPlay.vue"
import Login from "../views/login.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/enter",
    name: "Enter",
    component: Player
  },
  {
    path: "/musicPlay",
    name: "MusicPlay",
    component: MusicPlay
  },
  {
    path: "/",
    name: "Login",
    component: Login
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
