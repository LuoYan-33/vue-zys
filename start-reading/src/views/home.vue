<script setup lang="ts">
import HomeLeft from "@/views/homeLeft.vue";
import HomeRightItem from "@/views/homeRightItem.vue";
import {ref} from "vue";
import axios from "axios";
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
</script>

<template>
  <div style="display:flex;">
    <div style="width: 20%;">
      <home-left></home-left>
    </div>
    <div style="width: 80%;margin-left: 10px">
      <div style="height: 40px;background-color:#f7f6f2;display:flex;align-items: center;justify-content: space-between">
        <div>
          人气排序 总收藏 总字数 推荐票
        </div>
      </div>
      <div style="display: flex;flex-wrap: wrap">
        <home-right-item style="width: 450px;" v-for="item in items" :item="item"></home-right-item>
      </div>
    </div>
  </div>
  <el-pagination
      style="float: right"
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000"
  />
</template>
<style scoped>

</style>