<template>
    <main>
       <h2>{{count}}</h2>
        <button @click="add">点击增加{{count}}</button>
    </main>
</template>

<script>
import { ref } from 'vue'
export default {
    setup () {
        // 组合式API
        const count=ref(0);
           // 所有的响应式数据用ref或reactive定义
        //    count和选项式API data()中定义的count相同意义。
        const add=function(){
            count.value++;
            // ref类型一定要通过value修改它的值。
        }
        return {
            count,
            add
        }
    }
}
</script>
<style scoped>
   main{
    padding: 30px;
    text-align: center;
    font-size: 70px;
   }
</style>