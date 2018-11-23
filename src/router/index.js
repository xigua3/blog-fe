import Vue from 'vue'
import Router from 'vue-router'
import HomeCardDesc from '@/components/HomeCardDesc'
import Login from '@/components/Login'
import Home from '@/components/Home'
import HomeCard from '@/components/HomeCard'
import store from '@/store/index'

Vue.use(Router)

const router= new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [{
        path: '/HomeCard',
        name: 'HomeCard',
        component: HomeCard
      }]
    },
    {
      path: '/HomeCardDesc',
      name: 'HomeCardDesc',
      component: HomeCardDesc
    }
  ]
});
router.beforeEach((to, from, next) => {
  if(to.path.startsWith('/login')) {
    window.sessionStorage.removeItem('user');
    next()
  }else {
    let token = window.sessionStorage.getItem('user');
    if (!token) {
      next({path: '/login'})
    }else {
      next()
    }
  }
});
export default router