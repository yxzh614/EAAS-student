<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{name}}</span>
      </div>
      <div class="text item">详细内容：{{detail}}</div>
      <div v-if="isComp" class="text item">报名截止日期：{{endDate}}</div>
      <div v-if="!isComp" class="text item">开始时间：{{startDate}}</div>
      <div v-if="!isComp" class="text item">地点：{{location}}</div>
    </el-card>
    <el-button v-if="isComp" class="btn-sub" type="success" @click="goJoin(id)">点击报名</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'xxx比赛',
      detail: '内容',
      startDate: '2018',
      endDate: '2018',
      location: ''
    }
  },
  computed: {
    isComp () {
      return this.type === '比赛'
    }
  },
  methods: {
    goJoin (id) {
      this.$router.push({name: 'Join', params: {id: id}})
    }
  },
  props: [
    'id',
    'type'
  ]
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin-top: 20px;
    width: 80%;
    margin-left: 10%;
  }
  .btn-sub {
    margin-top: 100px;
    width: 10%;
    height: 70px;
    margin-left: 45%;
  }
</style>
