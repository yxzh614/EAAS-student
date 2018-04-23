<template>
  <div>
    <el-table
      :data="trainList"
      style="width: 100%">
      <el-table-column
        prop="trainName"
        label="培训名称">
      </el-table-column>
      <el-table-column
        prop="trainTime"
        label="培训时间">
      </el-table-column>
      <el-table-column
        prop="attend"
        label="到场情况">
      </el-table-column>
      <el-table-column
        label="听讲情况">
        <template slot-scope="scope">
          {{(scope.row.score).toFixed(2)}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from '../services/my-axios'
import Control from './Control'
export default {
  data () {
    return {
      trainList: []
    }
  },
  mounted () {
    axios.getTrainsById(Control.data.id).then(_ => {
      this.trainList = _.data.result
    })
  }
}
</script>

<style>

</style>
