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

export default new Router({
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
      component: About
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ],
  mode: 'history'
})


