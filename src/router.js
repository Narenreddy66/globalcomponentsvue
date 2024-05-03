import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../src/components/LoginPage.vue";
import BasicComponets from "./BasicComponents/router";
const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  ...BasicComponets,
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
