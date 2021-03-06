import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    props: true,
    component: () => import(/* webpackChunkName: "chat" */ "../views/Chat.vue"),
    /* beforeEnter: (to, from, next) => {
      if (to.params.name) {
        next();
      } else {
        next({ name: "About" });
      }
    }, */
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
