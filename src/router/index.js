import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: Home
  },
  {
    path: "/details/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/DestinationDetails")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
