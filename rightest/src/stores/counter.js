import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  // state
  const doubleCount = computed(() => count.value * 2)
  // getter
  function increment() {
    count.value++
  }
  // action
// 1723袁磊
  return { count, doubleCount, increment }
})
