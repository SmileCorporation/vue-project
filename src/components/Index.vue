<!--
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-20 16:15:14
 * @,@LastEditTime: ,: 2020-11-20 17:25:57
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \vue-init\src\components\Index.vue
 -->

<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px',justifyContent: 'space-start', display:'flex' ,padding:'0'}"
      >
        <a-menu-item key="1">
          <router-link to="/">首页</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          nav 2
        </a-menu-item>
        <a-menu-item key="3" >
          nav 3
        </a-menu-item>
      </a-menu>
      <div> <router-link to="/admin">后台</router-link></div>
    </a-layout-header>
    <a-layout>
      <a-layout style="padding: 0">
        <a-layout-content
          :style="{ background: '#fff',  margin: 0, minHeight: '280px' }"
        >
          这是模板类型
        </a-layout-content>
      </a-layout>
    </a-layout>
    <a-layout-footer class="footer">@nomama Author</a-layout-footer>
  </a-layout>
</template>
>
<script>
export default {
  name: "index",
  data() {
    return {
      collapsed: false,
    };
  },
  props:{
      msg: String,
  }
};
</script>

<style scoped>
.header{
    padding: 0px 15px 0px 0px;
    display: flex;
    color: seashell;
    justify-content: space-between;
    
}
.footer{
    
    background-color: rgba(0, 21, 41);
    color: seashell;
}
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
