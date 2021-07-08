import Vue from 'vue'
import App from './App'
import tabBar from './componets/tabbar/tabbar.vue'
Vue.component('tab-bar', tabBar)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
