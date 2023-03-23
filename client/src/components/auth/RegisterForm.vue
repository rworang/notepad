<script setup></script>

<template>
  <div class="register-form">
    <h2 class="form-title" v-html="`Register`" />
    <div class="form-row">
      <input class="active-shadow" type="text" placeholder="Username" />
    </div>
    <div class="form-row">
      <input class="active-shadow" type="password" placeholder="Password" />
    </div>
    <div class="form-row">
      <button class="register-button active-shadow">Register</button>
    </div>
    <div class="form-row">
      <span>Create your account or <span class="nt-link">login</span>.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-title {
  display: flex;
  font-size: 1.4em;
  font-weight: 700;
  margin-bottom: 16px;
}

.form-row {
  display: flex;
  margin-bottom: 12px;
  align-items: center;
}

.register-button {
  margin: 6px 0;
}

span {
  color: var(--nt-c-gray-dark);
}

label {
  display: flex;
}

input {
  cursor: pointer;
  display: flex;
  padding: 6px 12px;
  margin: 0 8px;
  border-radius: 9px;
}
input:hover,
input:focus {
  outline-color: var(--nt-c-amber);
}
</style>
