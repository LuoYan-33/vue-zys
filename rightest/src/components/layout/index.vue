<script setup lang="ts">
import Top from "@/components/layout/components/top.vue";
import headMenu from "@/components/layout/components/sideMenu.vue";
import MainView from "@/components/layout/components/mainView.vue";
</script>

<template>
  <div class="common-layout">
    <img style="position:absolute;top: -60px;z-index: -1;width: 100vw;"
         src="https://static.ixiaochuan.cn/planck-web/67e2de54815e12ab8bab.png">
    <el-container style="z-index: 999">
      <el-header>
        <top style="z-index: 99;position: fixed;top: 0;order: 1;"></top>
      </el-header>
      <div class="base-div" style="width: 100%;">
        <div style="width: 1000px;">
          <el-container style="width: 1200px !important;">
            <el-aside>
              <template #default>
                <headMenu></headMenu>
              </template>
            </el-aside>
            <el-main>
              <template #default>
                <main-view>
                  <template #rn>
                    <router-view></router-view>
                  </template>
                </main-view>
              </template>
            </el-main>
          </el-container>
        </div>
      </div>
    </el-container>
  </div>

</template>

<style scoped>
.el-container {
  height: 100vh !important;
  width: 100vw !important;
}
.el-aside{
  width: 220px !important;
}
.el-header,
.el-footer {
  height: 60px;
  text-align: center;
  padding: 0;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 900px;
  width: 700px;
  left: 720px;
  position: absolute;
  top: 70px;
  z-index: 999;
  padding: 0;
}

.el-menu {
  background-color: #d3dce6;
}
</style>
