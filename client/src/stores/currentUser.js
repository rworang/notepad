import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentUserStore = defineStore('currentUser', () => {
  const currentUser = ref(null)
  // const doubleCount = computed(() => count.value * 2)
  function setCurrentUser(user_obj) {
    currentUser.value = user_obj
  }

  return { currentUser, setCurrentUser }
})
