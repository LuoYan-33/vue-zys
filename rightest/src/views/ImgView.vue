<template>
    <h2>袁磊的图文列表</h2>
    <ul>
        <li v-for="v in arr" :key="v.id">
             <img :src="showPic(v.img)">
             <p>{{v.title}}</p>
        </li>
    </ul>
</template>
<script setup>
import { reactive } from "vue";
const arr = reactive([
  { id: 1, title: "Yuan的标题1", img: "1.jpg" },
  { id: 2, title: "Yuan的标题2", img: "2.jpg" },
  { id: 3, title: "Yuan的标题3", img: "3.jpg" },
  { id: 4, title: "Yuan的标题4", img: "4.jpg" },
  { id: 5, title: "Yuan的标题5", img: "5.jpg" },
  { id: 6, title: "Yuan的标题6", img: "6.jpg" },
]);
const showPic = name => {
  return new URL("../assets/images/" + name, import.meta.url).href;
};
</script>

<style  scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  padding:4px;
}
li {
  width: 30%;
  flex-grow: 1;
  margin-right: 1px;
}
p {
  line-height: 26px;
  text-align: center;
  font-size: 14px;
}
img {
  width: 100%;
}
</style>