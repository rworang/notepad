<script setup>
const props = defineProps({
  i: Number
})
</script>

<template>
  <div class="template-wrapper">
    <div class="template-name">template {{ i }}</div>
    <div class="template-layout">
      <div class="layout-title template-item" />
      <div class="layout-content template-item" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.template-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 4px 8px;
}
.template-layout {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 24px 24px 24px 24px 24px;
  background-color: var(--nt-c-gray);
  padding: 12px;
  border-radius: 15px;

  .template-item {
    border-radius: 11px;
    background-color: var(--nt-c-gray-medium);
  }

  .layout-title {
    grid-column-start: 1;
    grid-column-end: row-end;
  }
  .layout-content {
    grid-row-start: 2;
    grid-row-end: col-end;
    grid-column-start: 1;
    grid-column-end: row-end;
  }
}
</style>
