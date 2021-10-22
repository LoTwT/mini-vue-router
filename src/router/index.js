import Vue from "vue"
// import Router from "vue-router"
import Router from "../mini-vue-router/router.js"
import Home from "../views/Home.vue"
import About from "../views/About.vue"

Vue.use(Router)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      console.log("/.beforeEnter", to, from)
      next()
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    beforeEnter(to, from, next) {
      console.log("/about.beforeEnter", to, from)
      next()
    },
  },
]

const router = new Router({
  routes,
})

router.beforeEach((to, from, next) => {
  console.log("router.beforeEach", to, from)
  next()
})

router.beforeResolve((to, from, next) => {
  console.log("router.beforeResolve", to, from)
  next()
})

router.afterEach((to, from) => {
  console.log("router.afterEach", to, from)
})

export default router
