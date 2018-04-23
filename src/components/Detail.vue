<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/List'}">通告</el-breadcrumb-item>
      <el-breadcrumb-item>详细信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card v-if="!isComp" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{trainDetail.trainName}}</span>
      </div>
      <div class="text item">培训时间：{{trainDetail.trainTime}}</div>
      <div class="text item">培训地点：{{trainDetail.trainRoom}}</div>
      <div class="text item">详细介绍：{{trainDetail.trainExplain}}</div>
      <div class="text item">发布时间：{{trainDetail.fabuTime}}</div>
    </el-card>
    <el-card v-if="isComp" class="box-card">
      <div slot="header" class="clearfix">
        <span>{{compDetail.competationName}}</span>
      </div>
      <div class="text item">比赛时间：{{compDetail.competationTime}}</div>
      <div class="text item">详细介绍：{{compDetail.generalization}}</div>
      <div class="text item">{{compDetail.trainExplain}}</div>
      <div class="text item">报名截止时间:{{compDetail.jiezhibaoming}}</div>
      <div class="text item">人数限制:{{compDetail.memberLimit}}</div>
      <div class="text item">发布时间：{{compDetail.fabuTime}}</div>
      <a v-if="compDetail.competationFujian1" class="el-button" :href="fujian1" target="_blank">下载附件1</a>
      <a v-if="compDetail.competationFujian2" class="el-button" :href="fujian2" target="_blank">下载附件2</a>
    </el-card>
    <el-button v-if="isComp && compDetail.startapply" class="btn-sub" type="success" @click="goJoin(id)">点击报名</el-button>
  </div>
</template>

<script>
import axios from '../services/my-axios'
export default {
  data () {
    return {
      trainDetail: {
        trainId: 0,
        trainName: null,
        trainTime: null,
        trainRoom: '',
        fabuTime: '',
        trainExplain: ''
      },
      compDetail: {
        bisaidate: null,
        competationExplain: '',
        competationFujian1: '',
        competationFujian2: '',
        competationId: '',
        competationName: '',
        competationTime: '',
        fabuTime: '',
        generalization: '',
        jiezhibaoming: '',
        memberLimit: '',
        startapply: 1
      },
      name: 'xxx比赛',
      detail: '内容',
      startDate: '2018',
      endDate: '2018',
      location: ''
    }
  },
  computed: {
    isComp () {
      return this.type === '竞赛'
    },
    fujian1 () {
      return 'http://localhost:63342/' + this.compDetail.competationFujian1
    },
    fujian2 () {
      return 'http://localhost:63342/' + this.compDetail.competationFujian2
    }
  },
  methods: {
    goJoin (id) {
      this.$router.push({name: 'Join', params: {id: id}})
    }
  },
  mounted () {
    console.log(this.id, this.type)
    axios.getListDetail(this.id, this.type).then(_ => {
      if (this.isComp) {
        this.compDetail = _.data.result
      } else {
        this.trainDetail = _.data.result
      }
    })
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
    height: 50px;
    margin-left: 45%;
  }
</style>
