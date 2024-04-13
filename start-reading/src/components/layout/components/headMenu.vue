<script setup lang="ts">
import {ref} from "vue";
import {ArrowDown,Expand} from '@element-plus/icons-vue'
import {routes} from '@/router/routes.js'
import router from "@/router/index.js";
const activeIndex=ref('/home')
const selectMenu = (key: string, keyPath: string[]) => {
  activeIndex.value=key
  console.log(activeIndex.value)
}
const menus=routes.filter(item=>!item.isHide)
</script>

<template>
  <div class="headMenu">
    <el-dropdown>
      <el-button style="height: 40px;color:#fff;background:#313035;border: none;margin-right: 30px;">
        <el-icon style="margin-right: 10px;"><Expand /></el-icon>
        作品分类<el-icon style="color:#fff;" class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>玄幻</el-dropdown-item>
          <el-dropdown-item>奇幻</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-menu style="color:#fff;" :default-active="activeIndex" :active-text-color="'#fff'" :collapse-transition="false" mode="horizontal" :show-timeout="0" :hide-timeout="0" @select="selectMenu">
      <el-menu-item @click="router.push({path: item.path})" v-for="item in menus" :class="{selected: activeIndex===item.path}" :index="item.path"><a>{{item.title}}</a></el-menu-item>
      <el-menu-item index="5"><a>免费</a></el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.headMenu{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3e3d43;
  height: 100%;
}
.selected{
  width: 94px;
  height: 40px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400 !important;
  background-color: #ed4259 !important;
}

a{
  width: 94px;
  height: 34px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border-radius: 18px;
}

li{
  color: #fff !important;
  border-bottom: none !important;
  height: 40px !important;

}
ul{
  height: 40px;
  display: flex;
  background-color: #3e3d43;
  align-items: center;
  justify-content: center;
}
.el-menu--horizontal>.el-menu-item a, .el-menu--horizontal>.el-menu-item a:hover {
  font-weight: 400;
}
</style>