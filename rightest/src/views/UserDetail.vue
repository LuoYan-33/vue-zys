<template>
    <div class="yuan">
        <h2>袁磊的用户详情</h2>
        <h3>姓名:{{obj.name}}</h3>
        <h3>{{obj.username}}</h3>
    </div>
</template>

<script setup>
 import { ref, reactive, inject, onBeforeMount} from "vue"
 import {useRoute} from 'vue-router'
 const route=useRoute();

    const axios = inject("$axios");
    const obj=ref([]);
    onBeforeMount(() => {
    const url=`http://jsonplaceholder.typicode.com/users?id=${route.query.id}`;
     axios.get(url).then(res=>{
                   console.log(res.data);
                   obj.value=res.data[0];
                     //返回结果为对象是不要加[0],为 obj.value=res.data
           }).catch(err=>{
            alert("网络问题或其他："+err);
            console.log(err)}
           );
    })
</script>

<style  scoped>

</style>