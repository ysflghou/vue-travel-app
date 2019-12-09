import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store.js";

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
          ),
        beforeEnter: (to, from, next) => {
          let destination = store.destinations.find(
            destination => destination.slug == to.params.slug
          );
          if (destination) {
            let experience = destination.experiences.find(
              destination => destination.slug === to.params.experienceSlug
            );
            if (experience) {
              next();
            } else {
              next({ name: "NotFound" });
            }
          } else {
            next({ name: "NotFound" });
          }
        }
      }
    ],
    beforeEnter: (to, from, next) => {
      let experience = store.destinations.find(
        destination => destination.slug == to.params.slug
      );
      if (experience) {
        next();
      } else {
        next({ name: "NotFound" });
      }
    }
  },
  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    props: true,
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../components/NotFound")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
