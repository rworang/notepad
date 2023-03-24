<script setup>
import { computed } from 'vue'
import { useAppDataStore } from '../../stores/app-data'
import SideMenuItem from './SideMenuItem.vue'
const appData = useAppDataStore()

const toggled = computed(() => {
  return appData.sidemenu.toggled
})
</script>

<template>
  <div class="sidemenu" :style="`margin-left: ${toggled ? '0' : '-280px'}`">
    <SideMenuItem v-for="(item, key) in appData.sidemenu.items" :key="key" :item="item" />
  </div>
</template>

<style lang="scss" scoped>
.sidemenu {
  width: 240px;
  display: flex;
  flex-direction: column;
  color: var(--nt-c-gray-lighter);
  background-color: var(--nt-c-gray-darkest);
  z-index: 400;
  transition: all 300ms;
}
.submenu {
  display: flex;
  flex-direction: column;
  background-color: var(--nt-c-gray-darker);
  z-index: 410;
}
</style>
