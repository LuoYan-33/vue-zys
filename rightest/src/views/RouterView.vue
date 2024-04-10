<template>
 <h2>袁磊的vue router</h2>
    <div class="yuan">  
       <router-link :to="{path:'/auto',
       query:{brand:'byd',type:'秦plus'}}">汽车销量冠军</router-link>
       <!-- 带参数的router-link -->
       <router-link :to="{name:'mob',
       params:{brand:'Huawei',type:'Mate 60'}}">手机销量冠军</router-link>
    </div>
    <h2>编程式导航</h2>
    <button @click="$router.go(-1)">后退</button>
    <button @click="go0">回到首页</button>
    <button @click="go1">回到带参数的本组件</button>
    <h3>参数1：{{$route.params.name}}</h3>
    <h3>参数2：{{$route.params.count}}</h3>
    <h3>props1：{{name}}</h3>
    <h3>props2:{{count}}</h3>
    <h3>props2*2：{{count*2}}</h3>
    <!-- 1）加一个按钮，点击到带参数的本组件，使用replace代替push，参数：张飞，189 -->
    <!-- 2) 加一个router-link，点击到带参数的本组件 ，参数：刘备，180-->
    <!-- 3）加一个按钮，点击跳转到你最喜欢的手机 -->
</template>
<script setup>
  const props=defineProps({
    name:String,
    count:Number
  })
    import {useRouter} from 'vue-router'
    const router=useRouter();
    const go0=()=>{
        router.push("/");
    }
    const go1=()=>{
        router.replace({name:"router",params:{name:"Yuan Lei",count:1523}});
    }
</script>

<style  scoped>
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