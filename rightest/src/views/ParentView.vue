<template>
  <div class="yuan" :style="{ fontSize: count + 'px' }">
    <h2>1304袁磊的父组件</h2>
    <child @larger="change1"></child>
    <child @larger="change1">袁磊的父组件</child>
    <child  @smaller="change2">父子组件通信</child>
    <child @larger="change1" @smaller="change2">父传子的3种方法和子传父</child>
  </div>
</template>

<script setup>
import { ref } from "vue";
import child from "./ChildView.vue";
const count = ref(14);
const change1 = (data) => {
  // data即为子组件传送过来的数据。
  count.value += data;
};

const change2 = (data) => {
  // data即为子组件传送过来的数据。
  count.value -= data;
};
</script>

<style  scoped>
</style>