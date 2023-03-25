<script setup>
import NavBar from '@/components/NavBar.vue'
import SideMenu from './components/side-menu/SideMenu.vue'
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
  overflow: auto;
  display: flex;
  color: var(--nt-c-gray-darker);
  background-color: var(--nt-c-gray-light);
  margin-top: var(--nt-navbar-height);
}
</style>
