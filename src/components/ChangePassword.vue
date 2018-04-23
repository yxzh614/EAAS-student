<template>
  <div>
    <el-form :model="form" style="width: 50%;margin-left: 25%">
      <el-form-item label="旧密码">
        <el-input type="password" v-model="form.oldPassword"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.checkPassword" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from '../services/my-axios'
import Control from './Control'
export default {
  data () {
    return {
      form: {
        memberId: '',
        password: '',
        checkPassword: '',
        oldPassword: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if (this.form.password === this.form.checkPassword) {
        axios.login({
          memberId: Control.data.id,
          password: this.form.oldPassword
        }).then(_ => {
          if (_.data.status === 'ok') {
            console.log('1ok')
            axios.changePassword({
              memberId: Control.data.id,
              password: this.form.password
            }).then(() => {
              console.log('2ok')
              this.$message({
                message: '修改成功',
                type: 'success',
                duration: 1000
              })
            })
          }
        })
      } else {
        this.$message({
          message: '两次输入的密码不一致',
          type: 'warning',
          duration: 1000
        })
      }
    }
  },
  mounted () {
    this.form.memberId = Control.data.id
  }
}
</script>

<style>

</style>
