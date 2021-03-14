import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Router from 'vue-router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/css/public.css'

Vue.use(Antd)
Vue.config.productionTip = false


const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
