<script setup>

import {ref} from "vue";
import FreeItem from "@/views/freeItem.vue";
import axios from "axios";
import HomeRightItem from "@/views/homeRightItem.vue";
const items = ref([])
const getData = () => {
  axios({
    method: 'get',
    url: 'api/books',
  }).then(res => {
    items.value=res.data
  })
}
getData()
const activeName = ref('second')
const handleClick = (tab, event) => {
}
</script>

<template>
  <el-tabs
      v-model="activeName"
      type="card"
      @tab-click="handleClick"
  >
    <el-tab-pane label="限时免费" name="second">
      <div>
        <img src="https://imgservices-1252317822.image.myqcloud.com/coco/s06092022/33a8c2ee.vx0voh.png">
      </div>
      <free-item v-for="item in items" :item="item"></free-item>
    </el-tab-pane>
    <el-tab-pane label="免费作品" name="third">免费作品</el-tab-pane>
  </el-tabs>
</template>

<style scoped>
/deep/.el-tabs__item.is-active{
  color: #ed4259!important;
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  border-top: 2px solid #ed4259;
}
</style>