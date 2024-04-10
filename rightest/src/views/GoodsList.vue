<template>
    <div class="yuan">
        <h2>袁磊的商品列表</h2>
        <div class="goods">
            <goods v-for="v in arr" :key="v.id" :img="v.img" :tag="v.tag">
                {{v.name}}
                <template v-slot:content>{{v.content}}</template>
                <template #price>{{v.price}}</template>
            </goods>
        </div>
    </div>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import goods from "./GoodsView.vue"
const arr=ref([]);
onMounted(() => {
    arr.value=[{
        id:1,
        name:"草莓",
        content:"丹东99草莓",
        tag:"自营",
        price:10,
        img:"1.jpg"
    },{
        id:2,
        name:"苹果",
        content:"新疆阿克苏苹果",
        tag:"促销",
        price:6.5,
        img:"2.jpg"
    },{
        id:3,
        name:"葡萄",
        content:"巨峰葡萄，新鲜本地产",
        tag:"自营",
        price:8.8,
        img:"3.jpg"
    },{
        id:4,
        name:"香蕉",
        content:"海南香蕉",
        tag:"促销",
        price:4,
        img:"4.jpg"
    },{
        id:5,
        name:"草莓",
        content:"丹东99草莓",
        tag:"袁磊",
        price:10,
        img:"5.jpg"
    },{
        id:6,
        name:"草莓",
        content:"丹东99草莓",
        tag:"自营",
        price:10,
        img:"6.jpg"
    }
    ]
})

</script>

<style  scoped>
   .goods{
    display: flex;
    flex-wrap: wrap;
   }
   .item{
    width: 300px;
    margin: 4px;
   }
</style>