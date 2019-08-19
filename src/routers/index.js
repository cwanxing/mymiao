import Vue from 'vue'
import Router from 'vue-router'
import CinemaRouter from './cinema'
import MovieRouter from './movie'
import MineRouter from './mine'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    MineRouter,
    CinemaRouter,
    MovieRouter,
    { 
      path: '/*',
      redirect: '/movie'
    }
  ]
})
