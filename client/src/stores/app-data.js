import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppDataStore = defineStore('app-data', {
  state() {
    const sidemenu = ref({
      toggled: true,
      items: [
        {
          title: 'Home',
          to: '/',
          for: 'all', // all, authenticated, admin
          nested: false
        },
        {
          title: 'Profile',
          to: '/user/profile',
          for: 'authenticated', // all, authenticated, admin
          nested: [
            {
              title: 'Notes',
              to: '/user/notes'
            },
            {
              title: 'Settings',
              to: '/user/settings'
            }
          ]
        },
        {
          title: 'Admin',
          to: '/admin',
          for: 'admin', // all, authenticated, admin
          nested: false
        },
        {
          title: 'Login',
          to: '/login',
          for: 'all', // all, authenticated, admin
          nested: false
        }
      ]
    })
    const usermenu = ref({
      toggled: false
    })

    function setSidemenuToggled(bool) {
      sidemenu.value.toggled = bool
    }
    function setUsermenuToggled(bool) {
      usermenu.value.toggled = bool
    }

    return {
      sidemenu,
      usermenu,
      setSidemenuToggled,
      setUsermenuToggled
    }
  }
})
