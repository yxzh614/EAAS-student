<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        router>
        <el-menu-item index="/Mine/Profile">个人信息</el-menu-item>
        <el-menu-item index="/Mine/MAC">MAC</el-menu-item>
        <el-menu-item index="/Mine/MyComp">我的比赛</el-menu-item>
        <el-menu-item index="/Mine/MyTrain">培训情况</el-menu-item>
        <el-menu-item index="/Mine/ChangePassword">修改密码</el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>我的信息</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
import axios from '../services/my-axios'
import Con from './Control.js'
export default {
  data () {
    return {
      form: {
        memberId: '',
        memberName: '',
        school: '',
        department: '',
        mac: '',
        phone: '',
        qq: '',
        wechat: ''
      },
      dialogFormVisible: false
    }
  },
  methods: {
    onSubmit () {
      axios.editMine(this.form).then(_ => {
        if (_.data.status === 'ok') {
          this.$message({
            message: '修改成功',
            type: 'success',
            duration: 1000
          })
          this.dialogFormVisible = false
        }
      })
    }
  },
  mounted () {
    axios.getMyDetail(Con.data.id).then(_ => {
      this.form = _.data.result
    })
  }
}
</script>

<style>
.box-card {
  margin-top: 20px;
  width: 80%;
  margin-left: 10%;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
</style>
