<template>
    <div class="yuan">
       <h2>1323袁磊的汽车组件</h2>
       <h3>汽车的品牌：{{brand}}</h3>
       <h4>汽车的型号:{{type}}</h4>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import {useRoute} from 'vue-router'
const router=useRoute();
// 获得query参数
const brand=router.query.brand;
const type=router.query.type;
</script>
<style  scoped>
   
</style>