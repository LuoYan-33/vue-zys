<script setup>
import {ref} from "vue";

const props = defineProps({
  datas: {
    type: Array,
    default: () => []
  }
})
const value = ref(0)
</script>

<template>
  <el-card style="margin-top: 10px;" v-for="(item,index) in datas" :key="index">
    <div style="display:flex;">
      <el-avatar :size="44" :src="item.icon" />
      <div style="max-width: 500px">
        <div style="height: 22px;font-size: 15px;margin-left: 5px;color:#7C7E86;text-align: start">{{item.name}}</div>
        <div style="font-size: 13px;color:#bbb;text-align:start;margin-left: 5px">{{item.date}}</div>
        <div style="font-size: 13px;margin-top: 10px;text-align:start;margin-left: 5px">{{item.substance.text}}</div>
        <div>
          <el-image style="cursor: pointer" :src="item.substance.images"></el-image>
        </div>
        <el-rate
            v-model="value"
            show-score
            text-color="#ff9900"
            score-template="{value} points"
        />
      </div>
    </div>
  </el-card>
</template>

<style scoped>

</style>