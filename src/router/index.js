import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cart from "../views/Cart.vue";
import SingleProductView from "../views/SingleProductView.vue";
import Delivery from "../views/Delivery.vue";
import Payment from "../views/Payment.vue";
import CreditCardInfo from "../views/CreditCardInfo.vue";
import Profile from "../views/Profile";
import Login from "../views/Login";
import Shipping from "../views/Shipping";
import SkateboardsCategoryView from "../views/SkateboardsCategoryView";
import AccessoriesCategoryView from "../views/AccessoriesCategoryView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    name: "Profile",
    path: "/profile",
    component: Profile,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Cart",
    path: "/cart",
    component: Cart,
  },
  {
    name: "Product",
    path: "/product/:id",
    component: SingleProductView,
  },
  {
    name: "Delivery",
    path: "/delivery/",
    component: Delivery,
  },
  {
    name: "Payment",
    path: "/payment",
    component: Payment,
  },
  {
    name: "Credit card",
    path: "/credit",
    component: CreditCardInfo,
  },
  {
    name: "Shipping Adress",
    path: "/shipping",
    component: Shipping,
  },
  {
    name: "Skateboards Category View",
    path: "/skateboards",
    component: SkateboardsCategoryView,
  },
  {
    name: "Accessories Category View",
    path: "/accessories",
    component: AccessoriesCategoryView,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
