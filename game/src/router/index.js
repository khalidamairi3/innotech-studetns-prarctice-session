import Vue from "vue";
import VueRouter from "vue-router";
import loginPage from "../views/login.vue";
import gamePage from "../views/game.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: loginPage
  },
  {
    path: "/game",
    name: "game",
    component: gamePage
  }
];

const router = new VueRouter({
  routes
});

export default router;
