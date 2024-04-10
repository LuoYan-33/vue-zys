<template>
    <div class="yuan">
        <h2>袁磊的计算属性</h2>
        <div> 语文：<input type="text" v-model.number="a"></div>
        <div> 数学：<input type="text" v-model.number="b"></div>
        <div> 英语：<input type="text" v-model.number="c"></div>
       <h3>总成绩：{{sum}}</h3>
        <h3>总成绩2：{{he()}}</h3>
        <h3>平均成绩：{{}}</h3>
    </div>
</template>
<script setup>
   import {ref,computed} from 'vue'
   const a=ref(0),b=ref(0),c=ref(0);
   const sum=computed(()=>{
      return a.value+b.value+c.value;
   });
   const he=()=>{
     return a.value+b.value+c.value;
   }
//    const avg=computed();
//   扩展：1）实现函数 he，计算总成绩并显示。2）实现计算属性avg，平均成绩

</script>

<style  scoped>

</style>