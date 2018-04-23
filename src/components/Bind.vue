<template>
<div>
  <el-card v-if="!this.oldMAC === ''" class="box-card">
    <div slot="header" class="clearfix">
      <span>MAC绑定</span>
    </div>
    <div class="text item">当前MAC:{{oldMAC}}</div>
  </el-card>
  <el-form v-if="this.oldMAC === ''" class="form-group">
    <el-form-item label="MAC">
      <el-input v-model="form.mac"></el-input>
    </el-form-item>
    <el-form-item label="确认MAC">
      <el-input v-model="checkMAC"></el-input>
    </el-form-item>
    <el-form-item label="">
      <el-button @click="onSubmit" type="primary">确定</el-button>
    </el-form-item>
  </el-form>
  <el-alert
    v-if="this.oldMAC !== ''"
    title="已绑定MAC"
    type="success"
    close-text="知道了">
  </el-alert>
  <el-alert
    title="Mac地址介绍"
    type="info"
    description="MAC（Media Access Control或者Medium Access Control）地址，意译为媒体访问控制，或称为物理地址、硬件地址，用来定义网络设备的位置。
    ">
  </el-alert>
  <el-alert
    title="别人知道你的MAC地址会对你的设备产生影响吗?"
    type="info"
    description="MAC仅仅是手机上网的一个识别码。简单来说就是相当于家里边门牌号码，别人就算知道了门牌号码也没有钥匙，是进不了屋子里面的。
    ">
  </el-alert>
  <el-alert
    title="我们使用MAC地址做什么?"
    type="info"
    description="本社团可使用wifi探针进行自动签到，并对成员进行行为分析从而可生成每场培训的热力图和年度评选报告。
    ">
  </el-alert>
</div>

</template>

<script>
import axios from '../services/my-axios'
import Control from './Control.js'
export default {
  data () {
    return {
      oldMAC: '',
      form: {
        memberId: '',
        mac: ''
      },
      checkMAC: ''
    }
  },
  methods: {
    onSubmit () {
      this.form.memberId = Control.data.id
      if (this.checkMAC === this.form.mac) {
        axios.updateMAC(this.form).then(_ => {
          if (_.data.status === 'ok') {
            this.$message({
              message: '绑定成功',
              type: 'success',
              duration: 1000
            })
          }
        })
      } else {
        this.$message({
          message: '确认MAC不一致',
          type: 'warning',
          duration: 1000
        })
      }
    }
  },
  mounted () {
    axios.getMAC(Control.data.id).then(_ => {
      this.oldMAC = _.data.result
    })
  }
}
</script>

<style scoped>
.form-group {
  width: 50%;
  margin-left: 25%;
}
.box-card {
  margin-top: 20px;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 20px;
}
.el-alert {
  width: 80%;
  margin-left: 10%;
}
</style>
