<template>
    <div class="yuan">
        <h3><slot>插槽的默认值</slot></h3>
        <button @click="bd">文字变大</button>
        <button @click="bx">文字变小</button>
    </div>
</template>

<script setup>
   const emit=defineEmits(['larger','smaller'])
   const bd=()=>{
      console.log('bd');
      emit("larger",2);
    //   larger是自定义事件，第二个参数是传递给父组件的数据。
   }
    const bx=()=>{
      console.log('bx');
      emit("smaller",2);
    //   larger是自定义事件，第二个参数是传递给父组件的数据。
   }
</script>

<style  scoped>
   .yuan{
    background-color: #eee;
    margin: 20px;
    padding: 20px;
   }
</style>