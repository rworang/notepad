<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useUserStore } from '../stores/user'
const user = useUserStore()
const toggled = ref(false)
const menuRef = ref(null)
const menuWrapperRef = ref(null)

const handleClickOutside = (event) => {
  if (toggled.value) {
    const menuEl = menuRef.value
    const userWrapperEl = menuWrapperRef.value
    if (!menuEl.contains(event.target) && !userWrapperEl.contains(event.target)) {
      toggled.value = false
    }
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="user-menu-wrapper" ref="menuWrapperRef">
    <div class="user-menu-info" @click="toggled = !toggled">
      <div class="user-menu-avatar"><img :src="user.avatar" /></div>
      <div class="user-menu-username" v-html="user.name" />
      <template v-if="!toggled">
        <mdicon class="user-menu-icon" name="chevronDown" size="20" />
      </template>
      <template v-else>
        <mdicon class="user-menu-icon" name="chevronUp" size="20" />
      </template>
    </div>

    <div class="user-menu active-shadow" v-if="toggled" ref="menuRef">
      <span class="user-menu-item">Profile</span>
      <span class="user-menu-item">Notes</span>
      <span class="user-menu-item">Settings</span>
      <span class="user-menu-item" @click="user.logout()">Logout</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-menu-wrapper {
  position: relative;
  display: flex;
  .user-menu-info {
    width: 160px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: opacity 200ms;
    .user-menu-icon {
      margin-left: auto;
    }
    .user-menu-username {
      padding: 0 8px;
      /* margin: 0 auto; */
    }
    .user-menu-avatar {
      width: 28px;
      height: 28px;
      background-color: var(--nt-c-gray-dark);
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .user-menu-info:hover {
    opacity: 0.8;
  }

  .user-menu {
    position: absolute;
    top: calc(100% + 12px);
    right: 0;
    width: 160px;
    display: flex;
    border-radius: 12px;
    flex-direction: column;
    background-color: #fff;
    overflow: hidden;
    .user-menu-item {
      padding: 8px 16px;
      cursor: pointer;
      transition: all 150ms;
    }
    .user-menu-item:hover {
      background-color: var(--nt-c-gray);
    }
  }
}
</style>
