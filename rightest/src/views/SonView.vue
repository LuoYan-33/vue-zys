<template>
    <div class="yuan">
        <h2>袁磊的嵌套路由</h2>
        <nav>
            <router-link to="c1">购物车</router-link>
            <router-link to="c2">图文列表</router-link>
            <router-link to="c3">购物车</router-link>
            <router-link to="c4">图文列表</router-link>
        </nav>
        <div class="main">
           <router-view></router-view>
        </div>
        <footer>1323袁磊</footer>
    </div>
</template>

<script setup>

</script>

<style  scoped>
   nav{
    display: flex;
   }
   a{
    padding: 5px 20px;
    background-color: #c00;
    color: #fff;
    margin: 8px;
   }
</style>