<script setup lang="ts">
import Top from "@/components/layout/components/top.vue";
import headMenu from "@/components/layout/components/headMenu.vue";
import FirstHead from "@/components/layout/components/firstHead.vue";
</script>

<template>
  <div style="position: relative">
    <first-head></first-head>
    <el-container style="position: relative">
      <div style="width: 100%;display:flex;align-items: center;justify-content: center">
        <img style="width: 1200px;height: 60px;"
             src="https://gameapp-1252317822.file.myqcloud.com/yuewen/game/images/6890bb0d8ba7daa1e6e94a77eaf8966d.jpg">
      </div>
      <top></top>
      <el-header style="height: 40px;">
        <template #default>
          <headMenu></headMenu>
        </template>
      </el-header>
      <el-main>
        <template #default>
            <div style="width: 1200px;">
              <router-view></router-view>
            </div>
        </template>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.el-container {
  height: 100% !important;
  width: 100vw !important;
}

.el-header,
.el-footer {
  height: 60px;
  text-align: center;
  padding: 0;
}


.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  margin: 0 auto;
}

.el-menu {
  background-color: #d3dce6;
}

</style>
