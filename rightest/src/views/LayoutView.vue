<template>
  <div class="yuan">
    <h2>袁磊的elementplus 布局</h2>
    <el-container>
      <el-header>Header
        <img-view></img-view>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside
             <plus></plus>
        </el-aside>
        <el-main>
            <movie></movie>
        </el-main>
      </el-container>
      <el-footer>footer
        <cart-view></cart-view>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
   import ImgView from './ImgView.vue'
   import CartView from './CartView.vue'
   import plus from "./ElementPlus.vue"
   import movie from "./MovieList.vue"

</script>

<style  scoped>
.el-header{
    overflow: hidden;
    height: 300px;
}
</style>