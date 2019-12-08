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
    path: "/details/:id",
    name: "DestinationDetails",
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/DestinationDetails")
  }
];

const router = new VueRouter({
  routes
});

export default router;
