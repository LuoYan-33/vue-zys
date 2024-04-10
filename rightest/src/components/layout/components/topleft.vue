<script setup lang="ts">

import {Search} from "@element-plus/icons-vue";
import {ref} from "vue";
const searchText=ref('')
const emit=defineEmits(['Search'])
const onSearch = () => {
  emit("Search",searchText.value)
}
</script>

<template>
    <el-input v-model="searchText" :prefix-icon="Search" class="search" @keydown.enter="onSearch">
      <template #append><el-button style="border-radius: 15px" @click="onSearch">搜索</el-button></template>
    </el-input>
</template>

<style scoped>
/deep/ .el-input-group__append{
  border-radius: 5px !important;
}
</style>