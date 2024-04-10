<template>
    <div class="yuan">
         <ul>
            <li v-for="(v,i) in arr" :key="v">
                <span>{{i+1}}</span>
                {{v}}
                <button @click="del(i)">删除</button>
            </li>
         </ul>
    </div>
 
</template>

<script setup>
// reactive:定义引用类型的数据，如对象、数组，简单类型的数据用ref
// reactive类型的变量改变时不需要加.value
 import {reactive,ref} from 'vue';
 const goods=ref("");
 const arr=reactive(["地瓜","土豆","苹果","番茄","黄瓜","香蕉"]);
 const del=i=>{
    arr.splice(i,1);
 }
//  扩展1：增加商品。ref定义变量goods
//  扩展2：商品数量统计
</script>

<style  scoped>

</style>