<script setup lang="ts">

</script>

<template>
  <div class="headMenu">
     <div style="width: 1200px;background-color:#e7e6e6;height: 35px;display: flex;align-items: center;justify-content: space-between">
      <div style="display:flex;">
        <div class="title">起点中文网</div>
        <div class="title">起点女网</div>
        <div class="title">繁体版</div>
      </div>
       <div style="display:flex;">
         <div class="title">登录</div>
         <div class="title">注册</div>
       </div>
     </div>
  </div>
</template>

<style scoped>
.headMenu{
  height: 35px;
  background-color: #e7e6e6;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title{
  padding: 0 5px;
  border-top: none !important;
  border-bottom: none !important;
  border: 1px solid #e5e3e3;
  color: gray;
  font-size: 12px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>