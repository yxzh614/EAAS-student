<template>
  <div>
    <p>物资清单</p>
    <el-table
      :data="goodsList"
      style="width: 100%">
      <el-table-column
        prop="goodsName"
        label="物品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goodsCount"
        label="物品数量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="isXiaoHao"
        label="类别">
      </el-table-column>
      <el-table-column
        prop=""
        label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.goodsJpgUrl">
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import axios from '../../services/my-axios'
import logo from '../assets/logo.png'
export default {
  data () {
    return {
      goodsList: [{
        goodsId: null,
        goodsName: null,
        goodsCount: null,
        isXiaoHao: null,
        goodsJpgUrl: null
      }],
      money: 2000
    }
  },
  methods: {
  },
  mounted () {
    this.goodsList = [{
      goodsId: '1',
      goodsName: '继电器',
      goodsCount: '5',
      isXiaoHao: '消耗品',
      goodsJpgUrl: logo
    },
    {
      goodsId: '2',
      goodsName: '继电器',
      goodsCount: '5',
      isXiaoHao: '消耗品',
      goodsJpgUrl: logo
    },
    {
      goodsId: '3',
      goodsName: '继电器',
      goodsCount: '5',
      isXiaoHao: '消耗品',
      goodsJpgUrl: logo
    },
    {
      goodsId: '4',
      goodsName: '继电器',
      goodsCount: '5',
      isXiaoHao: '消耗品',
      goodsJpgUrl: logo
    },
    {
      goodsId: '5',
      goodsName: '继电器',
      goodsCount: '5',
      isXiaoHao: '消耗品',
      goodsJpgUrl: logo
    }]
  }
}
</script>

<style scoped>
img {
  width: 70px;
}
</style>
