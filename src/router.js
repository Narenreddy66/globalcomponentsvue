import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../src/components/LoginPage.vue";
import BasicComponets from "./BasicComponents/router";
import HomePage from "./components/HomePage.vue";
import isAuthenticated from "./components/shared/auth";
import TabRouter from "./components/tabcomponents/tabconprouter";

const routes = [
  {
    name: "LoginPage",
    path: "/",
    component: LoginPage,
    meta: {
      isLoginPage: true,
    },
    props: true,
  },
  {
    name: "HomePage",
    path: "/HomePage",
    component: HomePage,
  },
  ...BasicComponets,
  ...TabRouter,
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  console.log(to);
  console.log(from);

  if (to.matched.some((record) => !record.meta.isLoginPage)) {
    if (!isAuthenticated()) {
      next({ name: "LoginPage" });
    } else {
      next();
    }
  } else {
    if (isAuthenticated()) {
      next({ name: "HomePage" });
    } else {
      next();
    }
  }
});
export default router;
