import type CompanyListVue from "@/components/CompanyList.vue";
<script setup lang="ts">
import { onErrorCaptured, ref } from "vue";
import CompanyList from "@/components/CompanyList/CompanyList.vue";

const error = ref("");

onErrorCaptured((errorCaptured) => {
  error.value = errorCaptured.message;
});
</script>

<template>
  <main>
    <div v-if="error">Error :( {{ error }}</div>
    <Suspense v-if="!error">
      <template #default>
        <CompanyList />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </main>
</template>
