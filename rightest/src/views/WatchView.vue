<template>
    <div class="yuan">
        <h2>袁磊的计算属性</h2>
        <div> 语文：<input type="text" v-model.number="a"></div>
        <div> 数学：<input type="text" v-model.number="b"></div>
        <div> 英语：<input type="text" v-model.number="c"></div>
       <h3>总成绩：{{sum}}</h3>
        
    </div>
</template>
<script setup>
   import {ref,watch,watchEffect} from 'vue'
   const a=ref(0),b=ref(0),c=ref(0),sum=ref(0);
   watch(a,(newValue,oldValue)=>{
      sum.value=newValue+b.value+c.value;
   },/*{immediate:true,deep:true}*/);
   watchEffect(()=>{
     sum.value=a.value+b.value+c.value;
   });
</script>

<style  scoped>

</style>