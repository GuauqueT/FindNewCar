import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Carros from './components/Carros.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
const routes = [
  {path: '/', component:Home},
  {path: '/home', component:Home},
  {path: '/carros', component:Carros},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
