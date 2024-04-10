<script setup lang="ts">
import {Search, ArrowRight} from '@element-plus/icons-vue'
import {onMounted, ref} from "vue";
import axios from "axios";
import router from "@/router";
import MainItem from "@/views/mainItem.vue";

const getData = () => {
 axios({
   method: 'get',
   url: '/api/getData'
 }).then(res=>{
   datas.value=res.data
 })
}
const datas = ref([])
onMounted(() => {
  getData()
})
</script>

<template>
  <div>
   <main-item :datas="datas"></main-item>
  </div>
</template>
<style scoped>

</style>