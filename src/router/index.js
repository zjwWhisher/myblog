import Vue from 'vue'
import Router from 'vue-router'

// import Index from "../pages/index/index";
// import Articles from "../pages/articles/index";
// import ArticleDetail from "../pages/articles/detail";
// import Newest from "../pages/newest/index";
// import About from "../pages/about/index";
const Index = resolve => require(['@/pages/index'], resolve)
const Articles = resolve => require(['@/pages/articles'], resolve)
const ArticleDetail = resolve => require(['@/pages/articles/detail'], resolve)
const Newest = resolve => require(['@/pages/newest'], resolve)
const About = resolve => require(['@/pages/about'], resolve)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/articles/:id/article-detail',
      name: 'article-detail',
      component: ArticleDetail
    },
    {
      path: '/newest',
      name: 'newest',
      component: Newest
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
