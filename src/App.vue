<!-- App.vue -->
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- Optional: You can wrap your RouterView in a container for global styling -->
  <div class="app-wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.app-wrapper {
  /* Add any global layout styles you need here */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
