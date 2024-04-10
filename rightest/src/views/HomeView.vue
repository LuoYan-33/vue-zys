<script setup>

</script>

<template>
  <main>
    <h2>Yuan的首页</h2>
    <div>
       <router-link to="/">首页</router-link>
     
    </div>
    
  </main>
</template>
<style scoped>
   h2{
     line-height: 130px;
     font-size: 70px;
     background-color: #222;
     color: #fff;
     text-align: center;
   }
   div{
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
   }
   a{
    padding: 8px 20px;
    background-color: #039;
    color: #fff;
    margin: 8px;
    font-size: 22px;
    transition:all .6s;
    overflow: hidden;
    letter-spacing: 3px;
   }
   a:hover{
     background-color: #000;
    border-radius: 60%;

   }
</style>
