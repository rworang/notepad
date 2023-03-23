<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import UserMenu from './UserMenu.vue'
const user = useUserStore()
const router = useRouter()
</script>

<template>
  <header class="navbar">
    <div class="left">
      <div class="menu-button">
        <mdicon name="menu" />
      </div>
      <h1 class="app-title">Notepad</h1>
    </div>
    <div class="center"></div>
    <div class="right">
      <template v-if="user.isAuthenticated">
        <UserMenu />
      </template>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: var(--nt-navbar-height);
  min-height: var(--nt-navbar-height);
  max-height: var(--nt-navbar-height);
  position: fixed;
  display: flex;
  color: var(--nt-c-gray-darker);
  background-color: var(--nt-c-gray);
  align-items: center;
  justify-content: space-between;
  padding: 4px 6px;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.17);
  z-index: 500;

  .left,
  .center,
  .right {
    display: flex;
    height: 100%;
    align-items: center;
  }
}

.menu-button {
  padding: 2px;
}
.app-title {
  padding: 2px;
}
</style>
