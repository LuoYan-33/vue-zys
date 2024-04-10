<template>
  <div class="yuan">
    <h2>袁磊的axios数据</h2>
      <ul>
        <li v-for="v in arr" :key="v.title">
            <img :src="v.pic">
            <h3>{{v.title}}</h3>
            <p>{{v.content}}</p>
        </li>
      </ul>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, inject } from "vue";
const axios = inject("$axios");
const arr = ref([]);
onBeforeMount(() => {
    const url=`http://rap2api.taobao.org/app/mock/data/1632421`
  axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      arr.value = res.data;
    })
    .catch((err) => console.log(err));
});
</script>
<style  scoped>
ul{
    display: flex;
}
li{
    margin: 8px;
}
img{
    width: 100%;
}
</style>