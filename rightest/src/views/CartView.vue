<template>
  <div class="yuan">
    <h2>袁磊的购物车</h2>
     <table>
       <tr>
        <th>序号</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>操作</th>
       </tr>
       <tr v-for="(v,i) in arr" :key="v.id">
          <td>{{i+1}}</td>
          <td>{{v.name}}</td>
          <td>{{v.price}}</td>
          <td>
            <button @click="add(i)">+</button>
           <span>{{v.count}}</span> 
            <button @click="reduce(i)">-</button>
          </td>
          <td>
            <button @click="del(i)">删除</button>
          </td>
       </tr>
     </table>
     <h3>总价格：{{sum}}</h3>
  </div>
</template>
<script setup>
import { ref,computed } from "vue";
const arr = ref([
  { id: 1, name: "香蕉", price: 2.5, count: 1 },
  { id: 2, name: "苹果", price: 5, count: 1 },
  { id: 3, name: "黄瓜", price: 4, count: 2 },
  { id: 4, name: "地瓜", price: 3, count: 3 },
  { id: 5, name: "葡萄", price: 6, count: 1 },
]);
   const add=i=>{
      arr.value[i].count++;
   }
   const del=i=>{
     arr.value.splice(i,1);
   }
//    扩展：实现reduce函数
 const reduce=i=>{
       if(arr.value[i].count>0)
        arr.value[i].count--;
   }
  const sum=computed(()=>{
    let he=0;
    for(let j=0;j<arr.value.length;j++){
        he+=arr.value[j].count*arr.value[j].price;
    }
    return he;
  });
</script>

<style  scoped>

tr{
    text-align: center;
}
th:nth-child(1){
    width: 50px;
}
th:nth-child(n+2){
    width: 150px;
}
tr:nth-child(even){
    background-color: #eee;
}
span{
    width: 30px;
    display: inline-block;
}
</style>