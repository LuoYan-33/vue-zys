<template>
    <div class="yuan">
       <h2>袁磊的电影详情</h2>
       <h3>电影名称：{{obj.nm}}</h3>
       <img :src="obj['img']">
       <p>{{obj.dra}}</p>
    </div>
</template>

<script setup>
    import { ref, reactive, inject, onBeforeMount} from "vue"
    import {useRoute} from 'vue-router'
    const route=useRoute();    
    const axios = inject("$axios");
    const obj=ref({});
    onBeforeMount(() => {
         axios.defaults.baseURL="/api"
        const url=`detailmovie?movieId=${route.query.movieId}`;
     axios.get(url).then(res=>{
                   console.log(res.data);
                   obj.value=res.data.detailMovie;
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