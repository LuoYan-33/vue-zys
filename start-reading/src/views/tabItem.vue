<script setup>
import {ref} from "vue";
const props = defineProps({
  tabs:{
    type: Array,
    default: () => []
  },
  title:{
    type: String,
    default: ''
  }
})
const selectName = ref('全部')
const tabList=ref(['全部','玄幻', '奇幻', '武侠', '仙侠', '都市', '体育', '轻小说', '现实', '军事', '历史', '游戏', '悬疑', '科幻', '诸天无限', '短篇'])
</script>

<template>
<div>
  <p style="text-align: left">{{ title }}</p>
  <div style="display:flex;flex-wrap: wrap;width: 240px;">
    <div v-for="item in tabs" @click="selectName = item" :class="{select: item === selectName}" style="font-size: 12px;height: 20px;padding: 0 4px;margin: 0 8px 8px 0;cursor: pointer">
     {{item}}
    </div>
  </div>
  <el-divider></el-divider>
</div>
</template>

<style scoped>
.select{
  background-color: #000;
  color: #fff;
}
</style>