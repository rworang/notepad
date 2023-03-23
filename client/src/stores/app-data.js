import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppDataStore = defineStore('app-data', {
  state() {
    const sidemenu = ref({
      toggled: false,
      items: [
        {
          title: 'Home',
          to: '/',
          for: 'all' // all, authenticated, admin
        },
        {
          title: 'Profile',
          to: '/user/profile',
          for: 'authenticated' // all, authenticated, admin
        },
        {
          title: 'Notes',
          to: '/user/notes',
          for: 'authenticated' // all, authenticated, admin
        },
        {
          title: 'Settings',
          to: '/settings',
          for: 'authenticated' // all, authenticated, admin
        },
        {
          title: 'Admin',
          to: '/admin',
          for: 'admin' // all, authenticated, admin
        },
        {
          title: 'Login',
          to: '/login',
          for: 'all' // all, authenticated, admin
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
