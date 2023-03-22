<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main class="app-content">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.app-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--nt-c-gray-darker);
  background-color: var(--nt-c-gray-light);
  margin-top: var(--nt-navbar-height);
  padding: 0 8px;
}
</style>
