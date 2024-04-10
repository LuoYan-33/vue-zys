<script setup>
import {useRoute} from "vue-router";
import {onMounted, reactive, ref} from "vue";
import axios from "axios";

const info = ref({})
const route = useRoute()
const getData = () => {
  axios({
    method: "get",
    url: "/api/getUserInfo",
  }).then(res => {
    info.value = res.data
    info.number = route.params.info
  })
  axios({
    method: "get",
    url: "/api/getDataList",
  }).then(res => {
    myData.value = res.data
  })
}
const myData = ref([])
onMounted(() => {
  getData()
})
</script>

<template>
  <div class="bg">
    <el-descriptions style="width: 900px;height: 500px;background-color:#f5f5f5;padding: 20px" title="创作者信息">
      <el-descriptions-item label="姓名">{{ info.name }}</el-descriptions-item>
      <el-descriptions-item label="电话">{{ info.number }}</el-descriptions-item>
      <el-descriptions-item label="城市">{{ info.city }}</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">{{ info.remarks }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="地址"
      >{{ info.address }}
      </el-descriptions-item
      >
      <el-descriptions-item label=""></el-descriptions-item>
      <el-descriptions-item label="">
        <el-card>
          <el-table :data="myData" :width="800">
            <el-table-column label="作品" :width="200">
              <template #default="scope">
                <el-link type="primary" :href="scope.row.url">{{ scope.row.name }}</el-link>
              </template>
            </el-table-column>
            <el-table-column label="描述">
              <template #default="scope">
                <el-link type="primary" :href="scope.row.text">{{ scope.row.text }}</el-link>
              </template>
            </el-table-column>
            <el-table-column label="浏览量" :width="100">
              <template #default="scope">
                <el-link type="primary">{{ scope.row.look }}</el-link>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-descriptions-item>
    </el-descriptions>

  </div>
</template>

<style scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background-image: url(https://daren.izuiyou.com/dist/static/bg.42e711f4.png);
  background-repeat: repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/deep/ .el-descriptions__body {
  background-color: #f5f5f5;
}
</style>