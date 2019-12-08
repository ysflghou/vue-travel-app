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
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/DestinationDetails"),
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "experienceDetails" */ "../views/ExperienceDetails"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
