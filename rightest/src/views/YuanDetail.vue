<template>
    <div class="yuan">
       <h2>袁磊的商品详情</h2>
       <h3>电影名称：{{obj.name}}</h3>
       <img :src="obj['list_pic_url']">
       <p>{{obj.retail_price}}</p>
    </div>
</template>

<script setup>
    import { ref, reactive, inject, onBeforeMount} from "vue"
    import {useRoute} from 'vue-router'
    const route=useRoute();    
    const axios = inject("$axios");
    const obj=ref({});
    onBeforeMount(() => {
        const url=`http://localhost:3000/goods?id=${route.query.id}`;
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
  img{
    width: 30vw;
  }
</style>