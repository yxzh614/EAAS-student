<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/">通告</el-menu-item>
      <el-menu-item index="/Bind">学号绑定</el-menu-item>
      <el-menu-item index="/Good">物资列表</el-menu-item>
      <el-menu-item index="/Leader">社团管理成员</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
