<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>物资列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="goodsList"
      style="width: 100%">
      <el-table-column
        prop="goodsName"
        label="物品名称">
      </el-table-column>
      <el-table-column
        prop="goodsCount"
        label="物品数量">
      </el-table-column>
      <el-table-column
        prop="goodsLocation"
        label="位置">
      </el-table-column>
      <el-table-column
        label="可消耗">
      <template slot-scope="scope">
        <span>{{ scope.row.isXiaohao ? '可消耗' : '不可消耗' }}</span>
      </template>
      </el-table-column>
      <el-table-column
        prop="goodsType"
        label="类别">
      </el-table-column>
      <el-table-column
        prop="size"
        label="尺寸">
      </el-table-column>
      <el-table-column
        prop=""
        label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.goodsJpgUrl | realPic">
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from '../services/my-axios'
export default {
  data () {
    return {
      goodsList: [],
      money: 0
    }
  },
  filters: {
    realPic (e) {
      console.log(e)
      // switch (e) {
      //   case 1: return 'static/jdq.jpg'
      //   case 8: return 'static/dc.jpg'
      //   case 9: return 'static/dx.jpg'
      //   case 10: return 'static/dpj.jpg'
      // }
      return axios.fileBaseURL + '?path=' + e
    }
  },
  mounted () {
    axios.getGoods().then(_ => {
      let data = _.data
      let goods = data.result
      for (let good of goods) {
        this.goodsList.push(good)
      }
    })
  }
}
</script>

<style scoped>
img {
  width: 70px;
}
</style>
