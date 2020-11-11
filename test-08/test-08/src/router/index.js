import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Home = () => import( '../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import ('../components/About')
const User = () => import ('../components/User')
const Profile = () => import ('../components/Profile')

Vue.use(Router)

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'news',
          component: HomeNews
        }, {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: User,
      meta: {
        title: '用户'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        title: '档案'
      }
    }
  ],
  mode: 'history'
})

//路由导航
//前置守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  console.log('前置守卫')
  next()
})

//后置守卫
router.afterEach((to, from) => {
  console.log('后置守卫')
})

export default router


