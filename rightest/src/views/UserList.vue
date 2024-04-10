<template>
    <div class="yuan">
        <ul>
            <li v-for="v in arr" :key="v.id" @click="goto(v.id)">
                  {{v.username}}
            </li>
        </ul>
    </div>
</template>

<script setup>
   import { ref, reactive, inject, onBeforeMount} from "vue"
   import {useRouter} from 'vue-router'
   const router=useRouter();
//    router用来push 或replace
    const axios = inject("$axios");
    const arr=ref([]);
    onBeforeMount(() => {
        const url=`http://jsonplaceholder.typicode.com/users`;
     axios.get(url).then(res=>{
                   console.log(res.data);
                   arr.value=res.data;             
           }).catch(err=>{
            alert("网络问题或其他："+err);
            console.log(err)}
           );
    })

    const goto=id=>{
        router.push({name:"detail",query:{id}});
    }
</script>
<style  scoped>
   ul{
    width: 30vw;
    margin:5vh auto;
   }
   li{
    width: 160px;
    background-color: #036;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;
    height: 33px;
    font-size: 16px;
   }
</style>