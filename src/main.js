/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-20 15:31:21
 * @,@LastEditTime: ,: 2020-11-20 15:37:53
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \vue-init\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
