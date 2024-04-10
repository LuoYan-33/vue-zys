<script setup lang="ts">
import {ref} from "vue";
import {routes} from '@/router/routes.js'
import router from "@/router/index.js";
import Download from "@/views/download.vue";

const activeIndex = ref('/home')
const selectMenu = (key: string, keyPath: string[]) => {
  activeIndex.value = key
  console.log(activeIndex.value)
}
const menus = routes.filter(item => !item.isHide)
const toPage = (name) => {
  if (name === 'download'){
    downloadRef.value.visible=true
    return
  }
  if (name === 'creator'){
    const url = router.resolve({ name: 'creator-n' }).href;
    window.open(url, '_blank')
    return
  }
  router.push({name: name})
}
const downloadRef = ref()
</script>

<template>
  <div class="headMenu">
    <el-menu style="width: 100%;" :default-active="activeIndex" :active-text-color="'#fff'" :collapse-transition="false"
             mode="vertical"
             :show-timeout="0" :hide-timeout="0" @select="selectMenu">
      <el-menu-item @click="toPage(item.name)" v-for="item in menus"
                    :class="{selected: activeIndex===item.path}" :index="item.path"><a>
        {{ item.title }}</a>
      </el-menu-item>
    </el-menu>
  </div>
  <download ref="downloadRef"></download>
</template>

<style scoped>
.headMenu {
  height: 100%;
  position: absolute;
  top: 70px !important;
  width: 180px;
  padding: 10px;
  margin-right: 12px;
  height: 836px;
  background-color: #fff;
  border-radius: 10px
}

.selected {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600 !important;
  background-color: #f5f5f7 !important;
  color: #000;
}

a {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border-radius: 18px;
}

li {
  align-items: center;
  border-radius: 10px;
}


.el-menu--horizontal > .el-menu-item a, .el-menu--horizontal > .el-menu-item a:hover {
  font-weight: 600;
}
</style>