<template>
  <el-tabs
      v-model="activeName"
      type="card"
      @tab-click="handleClick"
  >
    <el-tab-pane label="男生" name="first">
      <tab-item :title="'分类'" :tabs="boy.tabList"></tab-item>
      <tab-item :title="'状态'" :tabs="boy.state"></tab-item>
      <tab-item :title="'字数'" :tabs="boy.size"></tab-item>
      <tab-item :title="'品质'" :tabs="boy.pz"></tab-item>
      <tab-item :title="'更新时间'" :tabs="boy.updateTime"></tab-item>

    </el-tab-pane>
    <el-tab-pane label="女生" name="second">女生</el-tab-pane>
    <el-tab-pane label="出版" name="third">出版</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import {reactive, ref} from 'vue'
import type { TabsPaneContext } from 'element-plus'
import TabItem from "@/views/tabItem.vue";
import axios from "axios";

const activeName = ref('first')
const boy=reactive({
  tabList: [],
  state: [],
  pz: [],
  size:[],
  updateTime: []

})
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
const getData = () => {
  axios({
    method: 'get',
    url: '/api/boy',
  }).then(res=>{
    Object.assign(boy,res.data)
  })
}
getData()
</script>
<style scoped>

/deep/.el-tabs__item.is-active{
  color: #ed4259!important;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  border-top: 2px solid #ed4259;
}
</style>
