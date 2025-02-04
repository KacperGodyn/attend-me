<script setup lang="ts">
defineProps<{
  // msg: string
}>()
</script>

<template>
  <div class="main">
    <div class="DashboardLecturer">
      <h3>Pulpit wykładowcy</h3>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #181818;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
</style>
