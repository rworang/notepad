<script setup></script>

<template>
  <div class="no-notes">
    <mdicon name="paw" size="128" />
    <span class="subtitle" v-html="`No notes`" />
    <button class="active-shadow">Make a new note <mdicon name="plus" size="20" /></button>
  </div>
</template>

<style lang="scss" scoped>
.no-notes {
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--nt-c-gray-dark);

  .subtitle {
    font-size: 1.46em;
    font-weight: 500;
    margin-bottom: 16px;
  }

  button {
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 11px;
    padding: 8px 8px 8px 16px;

    span {
      margin-left: 8px;
    }
  }
}
</style>
