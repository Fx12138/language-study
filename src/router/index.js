import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'
import English from 'views/category/English'
import Korean from 'views/category/Korean'
import Japanese from 'views/category/Japanese'
import Russian from 'views/category/Russian'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/english',
      name: 'English',
      component: English
    },
    {
      path: '/japanese',
      name: 'Japanese',
      component: Japanese
    },
    {
      path: '/korean',
      name: 'Korean',
      component: Korean
    },
    {
      path: '/russian',
      name: 'Russian',
      component: Russian
    }
  ],
  mode: 'history'
})
