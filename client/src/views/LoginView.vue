<script setup>
import FormComponent from '../components/form/FormComponent.vue'
import { useUserStore } from '@/stores/user.js'
import { ref } from 'vue'
const user = useUserStore()

const login = {
  inputs: [
    {
      refId: 'usernameRef',
      label: 'Username',
      placeholder: 'Username',
      type: 'text'
    },
    {
      refId: 'passwordRef',
      label: 'Password',
      placeholder: 'Password',
      type: 'password'
    }
  ],
  submit: async () => {
    const name = document.getElementById('usernameRef').value
    const password = document.getElementById('passwordRef').value

    if (name.length > 0 && password.length > 0) {
      await user.login(name, password)
    }
  }
}
const register = {
  inputs: [
    {
      refId: 'usernameRef',
      label: 'Username',
      placeholder: 'Username',
      type: 'text'
    },
    {
      refId: 'emailRef',
      label: 'E-mail',
      placeholder: 'user@email.com',
      type: 'email'
    },
    {
      refId: 'passwordRef',
      label: 'Password',
      placeholder: 'Password',
      type: 'password'
    },
    {
      refId: 'confirmPasswordRef',
      label: 'Confirm password',
      placeholder: 'Confirm Password',
      type: 'password'
    }
  ],
  submit: async () => {
    const name = document.getElementById('usernameRef').value
    const password = document.getElementById('passwordRef').value
    const confirmPassword = document.getElementById('confirmPasswordRef').value
    const email = document.getElementById('emailRef').value

    if (
      name.length > 0 &&
      password.length > 0 &&
      password === confirmPassword &&
      email.length > 0
    ) {
      await user.register(name, password, confirmPassword, email)
    }
  }
}
const layout = ref(true)
</script>

<template>
  <div class="login-page">
    <template v-if="layout">
      <FormComponent title="Login" :inputs="login.inputs" :submit="login.submit" />
      <span>
        Login to your account or <span class="nt-link" @click="layout = false">create</span> one.
      </span>
    </template>
    <template v-else>
      <FormComponent title="Register" :inputs="register.inputs" :submit="register.submit" />
      <span> Create an account or <span class="nt-link" @click="layout = true">login</span>. </span>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
