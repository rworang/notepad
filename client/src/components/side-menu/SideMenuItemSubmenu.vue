<script setup>
import { computed } from 'vue'
import { useAppDataStore } from '../../stores/app-data'
const appData = useAppDataStore()

const props = defineProps({
  nested: Array,
  toggled: Boolean
})

const height = computed(() => {
  let h = props.nested.length * 48
  return 0 - h
})
</script>

<template>
  <div class="submenu" :style="`margin-top: ${toggled ? '0' : height}px`">
    <span class="item" v-for="(nestedItem, key) in nested" :key="key" v-html="nestedItem.title" />
  </div>
</template>

<style lang="scss" scoped>
.submenu {
  display: flex;
  flex-direction: column;
  transition: all 220ms;
}
.item {
  width: 100%;
  cursor: pointer;
  padding: 12px 32px;
  border-color: var(--nt-c-amber);
  background-color: var(--nt-c-gray-dark);
  z-index: 450;
  transition: all 220ms;
}
.item:hover {
  background-color: var(--nt-c-gray-darker);
  border-left: solid 8px var(--nt-c-amber);
}
</style>
