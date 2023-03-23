<script setup>
const props = defineProps({
  data: Object
})
</script>

<template>
  <input :id="data.refId" class="active-shadow" :type="data.type" :placeholder="data.placeholder" />
</template>

<style lang="scss" scoped>
label {
  display: flex;
}

input {
  cursor: pointer;
  display: flex;
  padding: 6px 14px;
  margin: 0 8px;
  border-radius: 9px;
  font-size: 1.2em;
}
input:hover,
input:focus {
  outline-color: var(--nt-c-amber);
}
</style>
