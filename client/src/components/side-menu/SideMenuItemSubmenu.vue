<script setup>
import { computed } from 'vue'
import { useAppDataStore } from '../../stores/app-data'
import SideMenuItem from './SideMenuItem.vue'
const appData = useAppDataStore()

const props = defineProps({
  nested: Array,
  toggled: Boolean,
  layer: Number
})

const height = computed(() => {
  let h = props.nested.length * 48
  return 0 - h
})
</script>

<template>
  <div class="submenu" :style="`margin-top: ${toggled ? '0' : height}px`">
    <SideMenuItem
      v-for="(nestedItem, key) in nested"
      :key="key"
      :item="nestedItem"
      :layer="layer - 10"
    />
  </div>
</template>

<style lang="scss" scoped>
.submenu {
  display: flex;
  flex-direction: column;
  background-color: var(--nt-c-amber-dark);
  padding-left: 8px;
  transition: all 220ms;
}
.item {
  width: 100%;
  cursor: pointer;
  padding: 12px 32px;
  border-color: var(--nt-c-amber);
  background-color: var(--nt-c-gray-dark);
  transition: all 220ms;
}
.item:hover {
  background-color: var(--nt-c-gray-darker);
  border-left: solid 8px var(--nt-c-amber);
}
</style>
