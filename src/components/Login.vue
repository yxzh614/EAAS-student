<template>
  <div>
    <el-card class="half-form">
      <el-form :model="form">
        <el-form-item label="用户名">
          <el-input v-model="form.memberId"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Con from './Control.js'
import myAxs from '../services/my-axios'
export default {
  data () {
    return {
      form: {
        memberId: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      myAxs.login(this.form).then(_ => {
        let data = _.data
        if (data.status === 'ok') {
          this.$message({
            message: '登陆成功',
            type: 'success',
            duration: 1000
          })
          Con.data.isLogged = true
          Con.data.id = this.form.memberId
          this.$router.push({name: 'List'})
        } else {
          this.$message({
            message: data.result,
            type: 'warning'
          })
        }
      }, _ => {
        console.log(_)
      })
    }
  },
  beforeRouteLeave (to, from, next) {
    if (Con.data.isLogged) {
      next()
    }
  }
}
</script>
