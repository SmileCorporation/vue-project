/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-20 16:46:28
 * @,@LastEditTime: ,: 2020-11-20 16:57:18
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \vue-init\src\config\routes.js
 */
import Router from 'vue-router'
import Vue from 'vue'
import Index from '../components/Index'
Vue.use(Router)
//materSum
export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        },
        {
            path: '/admin',
            name: 'admin',
            component: ()=>import("../components/admin/Admin"),
        },
    ]
})