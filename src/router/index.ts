import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Splashscreen",
    component: () => import(/* webpackChunkName: "home" */ "../views/splashscreen/index.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import(/* webpackChunkName: "game" */ "../views/game/index.vue"),
  },
  {
    path: "/endgame",
    name: "Endscreen",
    component: () => import(/* webpackChunkName: "end" */ "../views/endgame/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
