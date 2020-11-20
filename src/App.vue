<!--
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-20 15:31:21
 * @,@LastEditTime: ,: 2020-11-20 17:00:05
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \vue-init\src\App.vue
 -->
<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
