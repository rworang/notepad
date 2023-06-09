import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axiosAuth from '@/api/axiosAuth'

export const useUserStore = defineStore('user', {
  state() {
    const router = useRouter()
    const isAuthenticated = ref(false)
    const isAdmin = ref(false)
    const id = ref('')
    const name = ref('')
    const token = ref('')
    const avatar = ref('')
    const notesCount = ref(0)
    const notes = ref([])

    function setCurrentUser(user) {
      isAdmin.value = user.isAdmin
      id.value = user._id
      name.value = user.name
      token.value = user.token
      avatar.value = user.avatar
      notesCount.value = user.notesCount
      isAuthenticated.value = true
    }

    function clearUser() {
      isAdmin.value = false
      id.value = ''
      name.value = ''
      token.value = ''
      avatar.value = ''
      isAuthenticated.value = false
    }

    function addNote(title, content) {
      if (title.length > 0 && content.length > 0) {
        const note = {
          id: notesCount.value,
          title,
          content
        }
        notes.value.push(note)
        notesCount.value++
        return true
      } else {
        return false
      }
    }

    async function login(name, password) {
      try {
        const res = await axiosAuth.post('/auth/login', { name, password })
        const user = res.data
        setCurrentUser(user)
        router.push('/')
      } catch (err) {
        console.log(err)
      }
    }

    async function register(name, password, confirmPassword, email) {
      try {
        if (password === confirmPassword) {
          const res = await axiosAuth.post('/auth/register', { name, password, email })
          const user = res.data
          setCurrentUser(user)
          router.push('/')
        }
      } catch (err) {
        console.log(err)
      }
    }

    async function logout() {
      try {
        await axiosAuth.post('/auth/logout')
        clearUser()
        sessionStorage.removeItem('user')
        router.push('/login')
      } catch (err) {
        console.log(err)
      }
    }

    return {
      isAuthenticated,
      isAdmin,
      id,
      name,
      token,
      avatar,
      notes,
      addNote,
      setCurrentUser,
      login,
      register,
      logout
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: sessionStorage
      }
    ]
  }
})
