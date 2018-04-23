<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理成员信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-select v-model="selectedYear" @change="handleSelect" placeholder="请选择届">
      <el-option
        v-for="item in filtersYear"
        :key="item.value"
        :label="item.text"
        :value="item.value">
      </el-option>
    </el-select>
    <el-table
      :data="managerList"
      style="width: 100%">
      <el-table-column
        prop="memberId"
        label="学号">
      </el-table-column>
      <el-table-column
        prop="memberName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="memberSex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="schoolName"
        label="学院">
      </el-table-column>
      <el-table-column
        prop="memberPhone"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="memberQq"
        label="QQ">
      </el-table-column>
      <el-table-column
        prop="memberWechat"
        label="微信">
      </el-table-column>
      <el-table-column
        prop="departmentName"
        label="部门">
      </el-table-column>
    <el-table-column
      prop="memberTh"
      label="任职时间"
      :filters="filtersYear"
      :filter-method="filterYear"
      filter-placement="bottom-start">
      <template slot-scope="scope">
        {{scope.row.memberTh}}
      </template>
    </el-table-column>
    <el-table-column
      prop="memberIdentify"
      label="职位"
      :filters="[{ text: '社长', value: '社长' }, { text: '副社长', value: '副社长' }, { text: '部长', value: '部长' }, { text: '副部长', value: '副部长' }]"
      :filter-method="filterJob"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="jobType(scope.row.memberIdentify)"
          close-transition>{{scope.row.memberIdentify}}</el-tag>
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
      managerList: [
        // {
        // departmentName: '技术部',
        // memberId: 1503050119,
        // memberIdentify: "社长",
        // memberName: "徐天豪9",
        // memberPhone: "13194238162",
        // memberQq: 11655808,
        // memberSex: "男",
        // memberTh: 2015,
        // memberWechat: "1q1655808",
        // schoolName: "信息科学与工程学院"
        // }
      ],
      filtersYear: [],
      selectedYear: ''
    }
  },
  computed: {
  },
  methods: {
    jobType (scope) {
      switch (scope) {
        case '社长': return 'danger'
        case '副社长': return 'success'
        case '部长': return 'warning'
        case '副部长': return 'primary'
      }
    },
    filterJob (value, row) {
      return row.memberIdentify === value
    },
    filterYear (value, row) {
      return row.memberTh === value
    },
    handleSelect (e) {
      axios.getLeader(e).then(_ => {
        this.managerList = _.data.result
      })
    }
  },
  mounted () {
    axios.getYears().then(_ => {
      _.data.result.forEach(element => {
        this.filtersYear.push({
          text: element,
          value: element
        })
      })
    })
  }
}
</script>

<style scoped>
img {
  width: 70px;
}
</style>
