<script setup>
import {ref} from "vue";

const visible = ref(false)
defineExpose({
  visible
})
</script>

<template>
 <el-dialog width="280" v-model="visible">
      <div style="width: 100%;display:flex;align-items: center;justify-content: center;flex-direction: column">
        <h1 style="font-size: 30px;line-height: 30px;margin: 10px">下载最右</h1>
        <img style="width: 200px;height: 200px" src="data:image/png;base64,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">
      </div>
 </el-dialog>
</template>

<style scoped>

</style>