<template>
    <div class="yuan">
      <h2>袁磊的商品列表，来源于json-server</h2>
      <ul>
        <li v-for="v in arr" :key="v.id" @click="goto(v.id)">
            <img :src="v.list_pic_url">
             <p>{{v.name}}</p>
             <p>{{v.retail_price}}</p>
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
        axios.defaults.baseURL="http://localhost:3000/"
        const url=`goods`;
     axios.get(url).then(res=>{
                   console.log(res.data);
                   arr.value=res.data;             
           }).catch(err=>{
            alert("网络问题或其他："+err);
            console.log(err)}
           );
    })
    const goto=id=>{
        router.push({name:"gdetail",query:{id:id}});
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