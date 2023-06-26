<script setup>
import Edit from './components/Edit.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

// TODO: 列表渲染
const dataList = ref([])
const getData = async () => {
  const { data } = await axios.get('/list')
  dataList.value = data
}
onMounted(() => getData())

// TODO: 删除功能
const delInfo = async (id) => {
  await axios.delete(`/del/${id}`)
  getData()
}
// TODO: 编辑功能
const onUpData = ref(null)
const upData = (row) => {
  onUpData.value.open(row)
}
</script>

<template>
  <div class="app">
    <el-table :data="dataList">
      <el-table-column label="ID" prop="id"></el-table-column>
      <el-table-column label="姓名" prop="name" width="150"></el-table-column>
      <el-table-column label="籍贯" prop="place"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="item">
          <el-button type="primary" link @click="upData(item.row)">编辑</el-button>
          <el-button type="danger" link @click="delInfo(item.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <Edit ref="onUpData" @sharegetData="getData" />
</template>

<style scoped>
.app {
  width: 980px;
  margin: 100px auto 0;
}
</style>
