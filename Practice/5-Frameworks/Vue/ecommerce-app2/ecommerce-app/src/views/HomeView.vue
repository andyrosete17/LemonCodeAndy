<script setup lang="ts">
// OPTIONS API
// export default {
//   data() {
//     return {
//       message: 'Hello Vue!',
//     }
//   },
// }
// COMPOSITION API
// export default {
//   setup() {
//     const message = 'Hello Vue!'
//     return {
//       message,
//     }
//   },
// }
// const message = "test";
import ProductList from '@/components/ProductList.vue'
import { onErrorCaptured, ref } from 'vue'

const error = ref('')

onErrorCaptured((errorCaptured) => {
  error.value = errorCaptured.message
})
</script>

<template>
  <main>
    <div v-if="error">Error :( {{ error }}</div>
    <Suspense v-if="!error">
      <template #default>
        <ProductList />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </main>
</template>
