<script setup>
import { ref, computed, watch } from 'vue'
import FormInput from './FormInput.vue'

const props = defineProps({
  title: String,
  inputs: Array,
  submit: Function
})
</script>

<template>
  <div class="form-component">
    <template v-if="title != ''">
      <h2 class="form-title" v-html="title" />
    </template>

    <div class="form-row" v-for="input in inputs" :key="input.refId">
      <FormInput :data="input" />
    </div>

    <div class="form-row">
      <button class="form-button active-shadow" @click="submit()">
        {{ title }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-component {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-title {
  display: flex;
  font-size: 1.7em;
  font-weight: 700;
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  margin-bottom: 12px;
  align-items: center;
}

.form-button {
  margin: 12px 0;
}

span {
  color: var(--nt-c-gray-dark);
}
</style>
