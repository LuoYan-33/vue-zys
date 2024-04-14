<script setup>
import {ref} from "vue";

const props = defineProps({
  item: {
    type: Object,
    default: {}
  }
})
</script>

<template>
  <div style="display:flex;padding: 20px 10px;width: 450px;">
    <div>
      <img style="width: 102px;height: 136px;" :src="item.img">
    </div>
    <div>
      <h3 style="margin: 0 0 10px 10px;text-align: left">{{ item.title }}</h3>
      <p style="margin: 0 0 10px 10px;text-align: left;font-size: 12px">{{ item.author }} </p>
      <p style="margin: 0 0 10px 10px;text-align: left">{{ item.content }} </p>
      <p style="margin: 0 0 10px 10px;text-align: left;font-size: 12px">{{ item.num }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>