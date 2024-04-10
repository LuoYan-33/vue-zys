<template>
  <div class="item">
    <img :src="showPic(img)" />
    <p><slot>商品名称</slot></p>
    <p>
      <span class="tag" v-if="tag">{{ tag }}</span>
      <slot name="content">商品内容</slot>
    </p>
    <p>￥<slot name="price">商品价格</slot></p>
  </div>
</template>
<script setup>
var props = defineProps({
  img: String,
  // price:Number
  tag: String,
});

const showPic = (name) => {
  return new URL("../assets/images/" + name, import.meta.url).href;
};
</script>

<style  scoped>
img {
  width: 100%;
  margin:0 auto;
}
p:first-of-type {
  text-align: center;
  font-size: 16px;
  color: #e1251b;
  font-weight: 700;
  line-height: 20px;
}
p:nth-of-type(2) {
  color: #666;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
}
p:nth-of-type(3) {
  font-size: 16px;
  color: #e1251b;
  font-weight: 700;
  text-align: center;
}
.tag {
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