<!--
 * @,@Author: ,: 985911032@qq.com
 * @,@Date: ,: 2020-11-20 15:31:21
 * @,@LastEditTime: ,: 2020-11-20 15:36:54
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \vue-init\src\components\HelloWorld.vue
 -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a-button type="primary">Button></a-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
