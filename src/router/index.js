import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Brazil from "../views/Brazil.vue";
import Jamaica from "../views/Jamaica.vue";
import Hawaii from "../views/Hawaii.vue";
import Panama from "../views/Panama.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/brazil",
    name: "brazil",
    component: Brazil
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: Jamaica
  },
  {
    path: "/panama",
    name: "panama",
    component: Panama
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: Hawaii
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
