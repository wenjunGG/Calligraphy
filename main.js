import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'


import popModel from '@/components/common/popModel';
Vue.component('popModel',popModel)



const app = new Vue({
    ...App
})
app.$mount()
