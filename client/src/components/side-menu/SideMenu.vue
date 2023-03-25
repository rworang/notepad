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
  <div class="sidemenu-wrapper" :style="`margin-left: ${toggled ? '0' : '-200px'}`">
    <div class="sidemenu" :style="`margin-left: ${toggled ? '0' : '-200px'}`">
      <SideMenuItem
        v-for="(item, key) in appData.sidemenu.items"
        :key="key"
        :item="item"
        :layer="450"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidemenu-wrapper,
.sidemenu {
  width: 200px;
  min-width: 200px;
  max-width: 200px;
  height: 100%;
  transition: all 300ms;
  display: flex;
}
.sidemenu-wrapper {
  position: relative;
  z-index: 399;
}
.sidemenu {
  position: fixed;
  flex-direction: column;
  color: var(--nt-c-gray-lighter);
  background-color: var(--nt-c-gray-darkest);
  z-index: 400;
}
.submenu {
  display: flex;
  flex-direction: column;
  background-color: var(--nt-c-gray-darker);
  z-index: 410;
}
</style>
