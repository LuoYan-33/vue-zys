<template>
    <main>
        <h2 @click="add">袁磊的数量，点击增加：{{count}}</h2>
    </main>
</template>
<script setup>
   import {ref} from 'vue'
   const count=ref(0);
   const add=()=>{
     count.value++;
   }
</script>
<style scoped>
   h2{
    font-size: 80px;
    background-color: #c00;
    color: #fff;
    text-align: center;
    padding: 30px;
    user-select: none;
   }
</style>