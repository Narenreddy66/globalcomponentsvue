import HomeComp from "./HomeComp.vue";
import HomePage from "../HomePage.vue";
import AboutComp from "./AboutComp.vue";
import HelpComp from "./HelpComp.vue";
import ContactComp from "./ContactComp.vue";
const TabRouter = [
  {
    path: "/",
    component: HomePage,
    redirect: "/homecomp",

    children: [
      {
        path: "/homecomp",
        component: HomeComp,
      },
      { path: "/about", component: AboutComp },
      { path: "/help", component: HelpComp },
      {
        path: "/contact",
        component: ContactComp,
      },
    ],
  },
];
export default TabRouter;
