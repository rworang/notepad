<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/user'
import SideMenuItemSubmenu from './SideMenuItemSubmenu.vue'
const router = useRouter()
const user = useUserStore()

const props = defineProps({
  item: Object,
  layer: Number
})

const toggled = ref(false)

function checkFor(item) {
  if (item.for == 'all') {
    return true
  }
  if (item.for == 'authenticated') {
    return user.isAuthenticated
  }
  if (item.for == 'notAuthenticated') {
    return !user.isAuthenticated
  }
  if (item.for == 'admin') {
    return user.isAdmin
  }
  if (!item.for) {
    return true
  }
}
</script>

<template>
  <div class="item-wrapper" v-if="checkFor(item)">
    <div
      class="item"
      @click="item.nested ? (toggled = !toggled) : router.push(item.to)"
      :style="`z-index: ${layer}`"
    >
      <span v-html="item.title" />
      <mdicon :name="`${toggled ? 'chevronUp' : 'chevronDown'}`" v-if="item.nested" />
    </div>

    <SideMenuItemSubmenu
      v-if="item.nested"
      :nested="item.nested"
      :toggled="toggled"
      :layer="layer"
    />
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
