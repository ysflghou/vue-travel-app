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
    path: "/user",
    name: "user",
    component: () => import(/* webpackChunkName: "user" */ "../views/User"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login")
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: "login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
