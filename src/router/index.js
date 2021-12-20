import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index.js'

import Login from '../views/Login.vue'
import TaskBoard from '../components/Templates/TaskBoard.vue'
import About from '../views/About.vue'
import MyPage from '../views/MyPage.vue'
import NotFound from '../views/NotFound.vue'
import CreateTask from '../components/Molecules/CreateTask.vue'
import CreateGroup from '../views/CreateGroup.vue'
import SearchGroup from '../components/Templates/SearchGroup.vue'
import EditTask from '../components/Molecules/EditTask.vue'


const routes = [
  {
    // path名 = router-link :to=path名
    path: '/',
    name: 'TaskBoard',
    component: TaskBoard,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { requiresAuth: true }
  },
  {
    path: '/createTask',
    name: 'Task',
    component: CreateTask,
    meta: { requiresAuth: true }
  },
  {
    path: '/editTask',
    name: 'EditTask',
    component: EditTask,
    meta: { requiresAuth: true }
  },
  {
    path: '/createGroup',
    name: 'CreateGroup',
    component: CreateGroup,
    meta: { requiresAuth: true }
  },
  {
    path: '/searchGroup',
    name: 'SearchGroup',
    component: SearchGroup,
    meta: { requiresAuth: true }
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/*',
    name: "NotFound",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(/* process.env.BASE_URL */),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      console.error("login")
      console.error("key: ", store.state.tokenKey)
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        }
      })
    } else {
      next()
    }
  } else {
    console.error(321321321)
    next()
  }
})

export default router
