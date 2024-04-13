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
  <div>
    <el-input style="width: 348px;" v-model="searchText" size="large" class="search" @keydown.enter="onSearch">
      <template #append>
        <el-button style="background-color:#bf2c24;width: 45px;height: 40px"  :icon="Search" />
      </template>
    </el-input>
  </div>
</template>

<style scoped>

</style>