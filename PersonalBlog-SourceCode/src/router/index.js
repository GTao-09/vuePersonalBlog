import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import AddBlog from '../components/AddBlog'
import ShowBlog from '../components/ShowBlog'
import SingleBlog from '../components/SingleBlog'
import Edit from '../components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/addblog',
      name: 'AddBlogLink',
      component: AddBlog
    },
    {
      path: '/showblog',
      name: 'ShowBlogLink',
      component: ShowBlog
    },
    {
      path: '/sigleblog/:id',
      component: SingleBlog
    },
    {
      path: '/edit/:id',
      component: Edit
    },
    {
      path: '/',
      redirect: '/showblog'
    },
    {
      path: '*',
      redirect: '/showblog'
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})
