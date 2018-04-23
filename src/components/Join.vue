<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>比赛报名</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form class="form-group">
      <el-form-item label="队伍名称">
        <el-input placeholder="请输入队伍名称" v-model="form.teamName"></el-input>
      </el-form-item>
      <el-form-item label="指导老师">
        <el-input placeholder="请输入指导老师" v-model="form.teacher"></el-input>
      </el-form-item>
    </el-form>
    <el-form class="form-group2" inline>
      <p>队长</p>
      <el-form-item label-width="50px" label="姓名">
        <el-input style="width: 80px;" v-model="leader.memberName"></el-input>
      </el-form-item>
      <el-form-item label-width="50px" label="学号">
        <el-input style="width: 120px;" v-model="leader.memberId"></el-input>
      </el-form-item>
      <el-form-item label="学院">
        <el-input style="width: 180px" v-model="leader.memberSchool"></el-input>
      </el-form-item>
      <el-form-item label-width="50px" label="电话">
        <el-input style="width: 120px;" v-model="leader.memberPhone"></el-input>
      </el-form-item>
      <el-form-item label-width="50px" label="邮箱">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="">
    <el-button type="primary" @click="addMember">添加队员</el-button>
      </el-form-item>
    </el-form>
    <hr>
    <div v-for="o in form.baoming" :key="o.memberId">
      <el-form class="form-group2" inline>
        <p>队员</p>
        <el-form-item label-width="50px" label="姓名">
          <el-input style="width: 80px;" v-model="o.memberName"></el-input>
        </el-form-item>
        <el-form-item label-width="50px" label="学号">
          <el-input style="width: 120px;" v-model="o.memberId"></el-input>
        </el-form-item>
        <el-form-item label="学院">
          <el-input v-model="o.memberSchool" style="width: 180px"></el-input>
        </el-form-item>
        <el-form-item label-width="50px" label="电话">
          <el-input style="width: 120px;" v-model="o.memberPhone"></el-input>
        </el-form-item>
        <el-form-item label-width="50px" label="邮箱">
          <el-input v-model="o.memberBox"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button type="danger" @click.prevent="removeDomain(o)">删除队员</el-button>
        </el-form-item>
      </el-form>
      <hr>
    </div>
    <el-button style="
    width: 10%;
    margin-left: 45%;" type="primary" @click="onSubmit">确定</el-button>
  </div>
</template>

<script>
import axios from '../services/my-axios'
export default {
  data () {
    return {
      comId: '',
      limit: 3,
      leader: {
        memberId: '',
        memberName: '',
        memberSchool: '',
        memberPhone: '',
        memberBox: ''
      },
      form: {
        comId: '',
        teamName: '',
        teacher: '',
        baoming: []
      }
    }
  },
  methods: {
    addMember () {
      if (this.form.baoming.length < this.limit - 1) {
        this.form.baoming.push({
          memberId: '',
          memberName: '',
          memberSchool: '',
          memberPhone: '',
          memberBox: ''
        })
      }
    },
    onSubmit () {
      this.form.baoming.unshift(this.leader)
      axios.Join(this.form).then(_ => {
        console.log(_.data)
        this.form.baoming.shift()
      })
    },
    removeDomain (item) {
      var index = this.form.baoming.indexOf(item)
      if (index !== -1) {
        this.form.baoming.splice(index, 1)
      }
    }
  },
  mounted () {
    this.form.comId = this.id
  },
  props: [
    'id'
  ]
}
</script>

<style scoped>
.form-group {
  width: 50%;
  margin-left: 25%;
}
.form-group2 {
  width: 90%;
  margin-left: 5%;
}
</style>
