<script setup>
import SideMenu from './components/SideMenu.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main class="app-content">
    <SideMenu />
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.app-content {
  width: 100%;
  height: 100%;
  display: flex;
  color: var(--nt-c-gray-darker);
  background-color: var(--nt-c-gray-light);
  margin-top: var(--nt-navbar-height);
}
</style>
