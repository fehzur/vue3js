import { createRouter, createWebHistory } from 'vue-router'
import PageAccueil from '../views/PageAccueil.vue'
import AboutVue from '../views/AboutVue.vue'
import Information from '../views/ElementInfo.vue'
import ShowAll from '../views/showAll.vue'
import LoginPage from '../views/auth/LoginPage.vue'
import RegisterPage from '../views/auth/RegisterPage.vue'
import logout from '../views/auth/LogOut.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/logout',
    name: 'LogOut',
    component: logout
  },
    {
      path: '/accueil',
      name: 'accueil',
      component: PageAccueil
    },
    {
      path:'/about',
      name:'about',
      component: AboutVue
    },
    {
      path:'/info/:id',
      name:'information',
      component: Information,
      props:true
    },
    {
      path:'/showAll',
      name:'show',
      component: ShowAll,
    }
  ]
})

export default router
