<template>
    <div class="yuan">
        <h2>袁磊的生命周期函数：{{count}}</h2>
        <input type="text" ref="input">
    </div>
</template>
<script setup>
   import {ref,onMounted,onBeforeMount} from 'vue'
   const count=ref(100),input=ref(null);
   console.log(count.value);
   onMounted(() => {
      count.value=200;
      console.log(input.value);
      input.value.focus();
      input.value.placeholder=count.value;
   });
   onBeforeMount(() => {
      count.value=300;
      console.log(input.value)
   })
</script>
<style scoped>

</style>