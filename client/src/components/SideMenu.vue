<script setup>
import { computed } from 'vue'
import { useUserStore } from '../stores/user'
const user = useUserStore()

const toggled = computed(() => {
  return user.sidemenuToggled
})
</script>

<template>
  <div class="sidemenu" :style="`margin-left: ${toggled ? '0' : '-280px'}`">
    <span class="sidemenu-item">sidemenu</span>
    <span class="sidemenu-item">sidemenu</span>
    <span class="sidemenu-item">sidemenu</span>
    <span class="sidemenu-item">sidemenu</span>
  </div>
</template>

<style lang="scss" scoped>
.sidemenu {
  width: 280px;
  display: flex;
  flex-direction: column;
  color: var(--nt-c-gray-lighter);
  background-color: var(--nt-c-gray-darkest);
  z-index: 400;
  transition: all 300ms;

  .sidemenu-item {
    padding: 10px 16px;
    cursor: pointer;
  }
  .sidemenu-item:hover {
    background-color: var(--nt-c-gray-darker);
  }
}
</style>
