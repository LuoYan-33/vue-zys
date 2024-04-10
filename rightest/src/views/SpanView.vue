<template>
  <div class="yuan">
    <el-row>
      <el-col :span="24"><div class="grid-content ep-bg-purple-dark" /></el-col>
    </el-row>
    <el-row :gutter="8">
      <el-col :span="12"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="12"
        ><div class="grid-content ep-bg-purple-light"
      /></el-col>
    </el-row>
    <el-row justify="space-between">
      <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="3"><div class="grid-content ep-bg-purple-light" /></el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple-light" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple-light" /></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple-light" /></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple-light" /></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
      <el-col :span="4"><div class="grid-content ep-bg-purple-light" /></el-col>
    </el-row>
    <el-icon><Female /></el-icon>
    <el-icon><Share /></el-icon>
     <el-text class="mx-1" type="success">Success</el-text>

      <el-tag type="primary">Tag 1</el-tag>
    <el-tag type="success">Tag 2</el-tag>
    <el-tag type="info">Tag 3</el-tag>
    <el-tag type="warning">Tag 4</el-tag>
    <el-tag type="danger">Tag 5</el-tag>
  </div>
</template>

<script setup>
</script>

<style  scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
  background-color: #ccc;
}
.el-col:nth-child(even){
    background-color: #c00;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-icon{
    font-size: 100px;
    color: var(--yuan-text-color);
}
.el-tag.el-tag--primary {
  --el-tag-text-color: #c00;
}
</style>