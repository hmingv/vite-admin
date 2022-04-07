import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("@/views/login/index.vue"),
      meta: {
        title: "Login",
        requiresAuth: false,
      },
    },
  ],
});

export default router;
