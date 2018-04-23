<template>
  <div id="app">
    <el-menu :default-active="activeIndex" background-color="#545c64" text-color="#fff" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="/List">通告</el-menu-item>
      <el-menu-item index="/Good">物资列表</el-menu-item>
      <el-menu-item index="/Leader">社团管理成员</el-menu-item>
      <el-menu-item index="/Mine/Profile">我的信息</el-menu-item>
      <el-menu-item index="" style="float: right;"><a href="http://localhost/wordpress/">电子信息协会</a></el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
import Con from './components/Control.js'
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1'
    }
  },
  beforeCreate () {
    this.$router.beforeEach((to, from, next) => {
      console.log(to.name)
      console.log(Con.data.isLogged)
      if (to.name !== 'Login') {
        if (!Con.data.isLogged) {
          this.$message({
            message: '请先登录',
            type: 'warning',
            duration: 1000
          })
          next('/Login')
        }
      }
      next()
    })
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
.half-form {
  width: 50%;
  margin-left: 25%;
  margin-top: 30px;
}
.el-breadcrumb {
  margin: 15px;
}
</style>
