<template>
  <div>
    <p>管理成员信息</p>
    <el-table
      :data="goodsList"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="college"
        label="学院"
        width="180">
      </el-table-column>
    <el-table-column
      prop="year"
      label="任职时间"
      :filters="filtersYear"
      :filter-method="filterYear"
      filter-placement="bottom-start">
      <template slot-scope="scope">
        {{scope.row.year}}
      </template>
    </el-table-column>
    <el-table-column
      prop="job"
      label="职位"
      :filters="[{ text: '社长', value: '社长' }, { text: '副社长', value: '副社长' }, { text: '部长', value: '部长' }]"
      :filter-method="filterJob"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="jobType(scope)"
          close-transition>{{scope.row.job}}</el-tag>
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
        id: null,
        name: null,
        job: null,
        year: null,
        college: null
      }],
      filtersYear: [
        {
          text: '2017',
          value: '2017'
        },
        {
          text: '2016',
          value: '2016'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    jobType (scope) {
      switch (scope.row.tag) {
        case '社长': return 'danger'
        case '副社长': return 'primary'
        case '部长': return 'success'
      }
    },
    filterJob (value, row) {
      return row.job === value
    },
    filterYear (value, row) {
      return row.year === value
    },
  },
  mounted () {
    this.goodsList = [{
        id: null,
        name: 'aaa',
        job: '社长',
        year: '2017',
        college: null
    },
    {
        id: null,
        name: 'aaa',
        job: '副社长',
        year: '2016',
        college: null
    }]
  }
}
</script>

<style scoped>
img {
  width: 70px;
}
</style>
