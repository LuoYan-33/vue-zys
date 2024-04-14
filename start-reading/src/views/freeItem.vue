<script setup>
import {ref} from "vue";
import router from "@/router/index.js";

const props = defineProps({
  item: {
    type: Object,
    default: {}
  }
})
const toDetail = (title) => {
router.push({path: '/detail/'+title})
}
</script>

<template>
  <div style="width: 100%;display:flex;justify-content: space-between">
    <div style="display:flex;padding: 20px 10px;width: 450px;">
      <div>
        <img style="width: 102px;height: 136px;" :src="item.img">
      </div>
      <div>
        <h3 style="margin: 0 0 10px 10px;text-align: left" @click="toDetail(item.title)">{{ item.title }}</h3>
        <p style="margin: 0 0 10px 10px;text-align: left;font-size: 12px">{{ item.author }} </p>
        <p style="margin: 0 0 10px 10px;text-align: left">{{ item.content }} </p>
        <p style="margin: 0 0 10px 10px;text-align: left;font-size: 12px">{{ item.num }}</p>
      </div>
    </div>
    <div
        style="float: right;font-size: 20px;font-weight: 600;display: flex;align-items: center;justify-content: center;flex-direction: column">
      $10
      <div style="margin-top: 30px;">
        <el-button style="background: #bf2c24;border-color: #bf2c24;color: #fff;margin-right: 24px;">免费阅读
        </el-button>
        <el-button>加入书架</el-button>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>