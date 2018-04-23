<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      sortable
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="类别"
      :filters="[{ text: '竞赛', value: '竞赛' }, { text: '培训', value: '培训' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '竞赛' ? 'primary' : 'success'"
          close-transition>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleSelect(scope.$index, scope.row)">查看</el-button>
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
      tableData: [{
        id: '1',
        date: '2016-05-02',
        name: '竞赛名',
        tag: '竞赛'
      }]
    }
  },
  methods: {
    formatter (row, column) {
      return row.info
    },
    filterTag (value, row) {
      return row.tag === value
    },
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    handleSelect (index, row) {
      console.log(row.tag)
      this.$router.push({name: 'Detail', params: {id: row.id, type: row.tag}})
    }
  },
  mounted () {
    axios.getList().then(_ => {
      let arr = []
      _.data.result.forEach(element => {
        arr.push({
          id: element.id,
          date: element.fabuTime,
          name: element.name,
          tag: element.type
        })
      })
      this.tableData = arr
    })
  }
}
</script>
