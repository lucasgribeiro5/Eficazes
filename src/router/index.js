<<<<<<< HEAD
import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../views/NavBarView.vue";
import HomePage from "../views/HomePageView.vue";
import RegistrationUser from "../views/RegistrationUserView.vue";
import BoxSwipe from "@/components/BoxSwipe.vue";
import Login from "@/views/LoginView.vue";
import UserProfile from "@/views/UserProfileView.vue";
=======
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
>>>>>>> 3ed92b723ac0d65fc8206bbf779a7532fd78812c

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
<<<<<<< HEAD
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/Login",
      name: "login",
      component: Login,
    },
    {
      path: "/registration",
      name: "registration",
      component: RegistrationUser,
    },
    {
      path: "/profile",
      name: "profile",
      component: UserProfile,
    },
  ],
});

export default router;
=======
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
>>>>>>> 3ed92b723ac0d65fc8206bbf779a7532fd78812c
