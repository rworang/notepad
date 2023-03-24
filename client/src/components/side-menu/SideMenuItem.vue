<script setup>
import { ref } from 'vue'
import { useAppDataStore } from '../../stores/app-data'
import SideMenuItemSubmenu from './SideMenuItemSubmenu.vue'
const appData = useAppDataStore()

const props = defineProps({
  item: Object
})

const toggled = ref(false)
</script>

<template>
  <div class="item-wrapper">
    <div class="item" @click="item.nested ? (toggled = !toggled) : ''">
      <span v-html="item.title" />
      <mdicon :name="`${toggled ? 'chevronUp' : 'chevronDown'}`" v-if="item.nested" />
    </div>
    <SideMenuItemSubmenu v-if="item.nested" :nested="item.nested" :toggled="toggled" />
  </div>
</template>

<style lang="scss" scoped>
.item-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
}
.item {
  display: flex;
  width: 100%;
  cursor: pointer;
  padding: 12px 22px;
  border-color: var(--nt-c-amber-dark);
  background-color: var(--nt-c-gray-darkest);
  z-index: 460;
  transition: all 220ms;

  span:first-child {
    margin-right: auto;
  }
}
.item:hover {
  background-color: var(--nt-c-gray-darker);
  border-left: solid 8px var(--nt-c-amber-dark);
}
</style>
