<script setup>
import { computed } from 'vue'
import { useAppDataStore } from '../stores/app-data'
const appData = useAppDataStore()

const toggled = computed(() => {
  return appData.sidemenu.toggled
})
</script>

<template>
  <div class="sidemenu" :style="`margin-left: ${toggled ? '0' : '-280px'}`">
    <template v-for="(item, key) in appData.sidemenu.items" :key="key">
      <span class="sidemenu-item" v-html="item.title" />
    </template>
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

  .sidemenu-item {
    padding: 12px 22px;
    cursor: pointer;
    border-color: var(--nt-c-amber);
    transition: all 220ms;
  }
  .sidemenu-item:hover {
    background-color: var(--nt-c-gray-darker);
    border-left: solid 8px var(--nt-c-amber);
  }
}
</style>
