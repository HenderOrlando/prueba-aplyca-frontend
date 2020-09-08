import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from "@/components/Users"
import UserEdit from "@/components/UsersEdit"
import UserTodos from "@/components/UserTodos"
import UserTodosEdit from "@/components/UserTodosEdit"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Users',
    component: Home,
    children: [
      {
        name: 'UserList',
        path: '',
        component: Users
      },
      {
        path: 'users/:userId',
        name: 'UserEdit',
        component: UserEdit,
        props: true
      },
      {
        path: 'users/:userId/todos',
        name: 'UserTodos',
        component: UserTodos,
        props: true
      },
      {
        path: 'users/:userId/todos/:todoId',
        name: 'UserTodosEdit',
        component: UserTodosEdit,
        props: true
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
