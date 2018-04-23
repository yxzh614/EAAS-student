<template>
  <div>
    <el-table
      :data="compList"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form inline v-for="friend in props.row.friends" :key="friend.memberId" label-position="left" class="demo-table-expand">
            <el-form-item :label="'学号:'">
              <span>{{ friend.memberId }}</span>
            </el-form-item>
            <el-form-item :label="friend.captain ? '队长:' : '队员:'">
              <span>{{ friend.memberName }}</span>
            </el-form-item>
            <el-form-item :label="'电话:'">
              <span>{{ friend.phone }}</span>
            </el-form-item>
            <el-form-item :label="'邮箱:'">
              <span>{{ friend.mailbox }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        prop="comName"
        label="比赛名称">
      </el-table-column>
      <el-table-column
        prop="teamName"
        label="队伍名称">
      </el-table-column>
      <el-table-column
        label="位置">
        <template slot-scope="scope">
          <span>{{ scope.row.captain ? '队长' : '队员' }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="num"
        label="队伍人数">
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
      compList: [],
      money: 0
    }
  },
  mounted () {
    axios.getCompById(Control.data.id).then(_ => {
      console.log(_.data.result)
      this.compList = _.data.result
    })
  }
}
</script>

<style scoped>
img {
  width: 70px;
}
</style>
