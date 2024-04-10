<template>
    <div class="yuan">
      <ul>
        <li v-for="v in arr" :key="v.id" @click="goto(v.id)">
            <img :src="v.img">
             <p>{{v.nm}}</p>
             <p>{{v.sc}}</p>
        </li>
      </ul>
    </div>
</template>

<script setup>
  import { ref, reactive, inject, onBeforeMount} from "vue"
   import {useRouter} from 'vue-router'
   const router=useRouter();
    const axios = inject("$axios");

    const arr=ref([]);
    onBeforeMount(() => {
        axios.defaults.baseURL="/api"
        const url=`movieOnInfoList`;
     axios.get(url).then(res=>{
                   console.log(res.data);
                   arr.value=res.data.movieList;             
           }).catch(err=>{
            alert("网络问题或其他："+err);
            console.log(err)}
           );
    })

    const goto=id=>{
        router.push({name:"mdetail",query:{movieId:id}});
    }
</script>

<style scoped>
 ul{
    display: flex;
    flex-wrap: wrap;
  }
  li{
    width: 40%;
    flex-grow: 1;
    margin-left: 2px;
  }
  img{
    width: 100%;
  }
</style>