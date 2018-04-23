<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{'个人信息'}}</span>
      </div>
      <div class="text item">我的学号:{{form.memberId}}</div>
      <div class="text item">姓名:{{form.memberName}}</div>
      <div class="text item">学院:{{form.school}}</div>
      <div class="text item">部门:{{form.department}}</div>
      <div class="text item">QQ:{{form.qq}}</div>
      <div class="text item">手机:{{form.phone}}</div>
      <div class="text item">微信:{{form.wechat}}</div>
    <el-button type="primary" @click="dialogFormVisible = true">修改信息</el-button>
    </el-card>
    <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
      <el-form-item label="学院">
        <el-input v-model="form.school"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <el-input v-model="form.department"></el-input>
      </el-form-item>
      <el-form-item label="qq">
        <el-input v-model="form.qq"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="微信">
        <el-input v-model="form.wechat"></el-input>
      </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
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
  background-color: rgb(204, 255, 238);
}
.text {
  font-size: 20px;
}
.item {
  margin-bottom: 18px;
}
</style>
