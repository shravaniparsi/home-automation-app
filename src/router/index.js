import firebase from "firebase";
import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/home";
import Login from "@/views/login";
import Room from "@/views/Room";
import Switch from "@/views/switch";
import Resetpassword from "@/views/Resetpassword";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/resetpassword",
      name: "Resetpassword",
      component: Resetpassword
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true
      },
      // beforeEnter: (to, from, next) => {
      //   if (localStorage.auth) {
      //     next();
      //   } else {
      //     next("/");
      //   }
      // }
    },
    {
      path: "/room",
      name: "Room",
      component: Room,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/switch",
      name: "switch",
      component: Switch,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("home");
  else next();
});

export default router;
