<template>
  <div>
    <p>报名：{{compName}}</p>
    <el-form class="form-group">
      <el-form-item label="队伍名称">
        <el-input></el-input>
      </el-form-item>
      <hr>
      <div v-for="o in limit" :key="o">
        <el-form-item :label="'队员' + o">
        </el-form-item>
        <el-form-item label="姓名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="学院">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="QQ">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input></el-input>
        </el-form-item>
        <hr>
      </div>
      <el-button type="primary">确定</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      compName: '比赛1',
      limit: 3
    }
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
</style>
