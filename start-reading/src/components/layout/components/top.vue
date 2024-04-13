<template>
  <div style="z-index: 999" class="cmhead1">
    <div class="cmhead2">
      <img style="position: absolute;left: 0;"  src="https://qdfepccdn.qidian.com/www.qidian.com/images/logo.29766..png">
      <topleft @Search="onSearch"></topleft>
      <div style="position: absolute;right: 0;">
        <el-link style="margin-left: 30px;margin-right: 0;">
          <el-button size="large"><el-icon style="margin-right: 10px;"><Management /></el-icon>我的书</el-button>
        </el-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Management} from '@element-plus/icons-vue'
import {ref} from "vue";
import Topleft from "@/components/layout/components/topleft.vue";
import router from "@/router/index.js";

const onSearch = (text: string) => {
  console.log(text)
  router.push({
    path: "/search",
    query: {
      text: text
    }
  })
}
</script>
<style scoped>
.cmhead1 {
  background-color: rgba(0, 169, 255, 0);
  min-height: 60px;
  width: 100%;
}

.cmhead2 {
  position: relative;
  width: 1200px;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search {
  width: 280px;
  height: 30px;
  border-radius: 10px;
}
</style>