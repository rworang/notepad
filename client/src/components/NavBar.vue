<script setup>
import { useAppDataStore } from '../stores/app-data'
import { useUserStore } from '../stores/user'
import UserMenu from './UserMenu.vue'
const appData = useAppDataStore()
const user = useUserStore()
</script>

<template>
  <header class="navbar">
    <div class="left" @click="appData.setSidemenuToggled(!appData.sidemenu.toggled)">
      <div class="menu-button">
        <mdicon name="menu" />
      </div>
      <h1 class="app-title">Notepad</h1>
    </div>
    <div class="center"></div>
    <div class="right" @click="appData.setUsermenuToggled(!appData.usermenu.toggled)">
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
  box-shadow: 0 1px 4px 2px rgba(0, 0, 0, 0.17);
  z-index: 500;

  .left,
  .center,
  .right {
    display: flex;
    height: 100%;
    align-items: center;
  }
}

.left {
  cursor: pointer;
  padding: 2px;
}
.app-title {
  padding: 4px 6px 2px 6px;
  font-size: 1.06em;
  font-weight: 500;
  letter-spacing: 0.5px;
}
</style>
