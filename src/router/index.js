import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    component: () => import(/* webpackChunkName: "brazil" */ "../views/Brazil")
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () =>
      import(/* webpackChunkName: "jamaica" */ "../views/Jamaica")
  },
  {
    path: "/panama",
    name: "panama",
    component: () => import(/* webpackChunkName: "panama" */ "../views/Panama")
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () => import(/* webpackChunkName: "hawaii" */ "../views/Hawaii")
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
