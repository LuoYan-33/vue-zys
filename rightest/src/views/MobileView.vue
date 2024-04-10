<template>
  <div class="yuan">
    <h2>1323袁磊的手机组件</h2>
    <h3>手机的品牌：{{ brand }}</h3>
    <h4>手机的型号:{{ type }}</h4>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const router = useRoute();
// 获得query参数
const brand = router.params.brand;
const type = router.params.type;
</script>

<style  scoped>
  img{
        width: 100%;
    }
    p:first-of-type{
        text-align: center;
        font-size: 16px;
        color: #e1251b;
        font-weight: 700;
        line-height: 20px;
    }
    p:nth-of-type(2){
        color: #666;
        font-size: 12px;
        line-height: 20px;
        text-align: center;;
    }
    p:nth-of-type(3){
        font-size: 16px;
        color: #e1251b;
        font-weight: 700;
        text-align: center;
    }








.tag{
    background-color: #e1251b;
    border-radius: 2px;
    color: #fff;
    padding: 0 5px;
    margin-right: 4px;
    line-height: 16px;
    height: 16px;
    font-size: 12px;
    display: inline-block;
}
</style>