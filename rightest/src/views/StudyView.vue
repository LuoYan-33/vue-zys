<template>
  <div class="yuan">
    <header>
        
      <span @click="$router.push('/')">首页</span>
      <h2>导航栏</h2>
      <span>更多</span>
    </header>
    <section>
      <marquee>好好学习，自己完成三级项目。</marquee>
    </section>
    <nav>
      <router-link to="s1">主页</router-link>
      <router-link to="s2">课程</router-link>
      <router-link to="s3">我的</router-link>
    </nav>
    <router-view></router-view>
    <footer>
        1522 袁磊 2024 @copyrighgt
    </footer>
  </div>
</template>

<script setup>
</script>


<style  scoped>
header{
    display: flex;
}
h2{
    flex-grow: 1;
    text-align: center;
}
  footer{
    position: fixed;
    background-color: #eee;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
</style>