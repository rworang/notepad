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
          title: 'User',
          for: 'authenticated', // all, authenticated, admin
          nested: [
            {
              title: 'Profile',
              to: '/user/profile'
            },
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
          for: 'notAuthenticated', // all, authenticated, notAuthenticated, admin
          nested: false
        },
        {
          title: 'Logout',
          to: '/logout',
          for: 'authenticated', // all, authenticated, notAuthenticated, admin
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
