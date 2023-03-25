<script setup>
import { ref } from 'vue'
import FormInput from '../components/form/FormInput.vue'

const inputs = [
  {
    refId: 'noteTitleRef',
    label: 'Title',
    placeholder: 'Enter a title...',
    type: 'text'
  },
  {
    refId: 'noteContentRef',
    label: 'Content',
    placeholder: 'Enter note content...',
    type: 'text'
  }
]
const newNoteToggled = ref(false)
</script>

<template>
  <div class="note-wrapper">
    <h2>My notes</h2>
    <p>You don't have any notes</p>

    <div class="add-note">
      <template v-if="!newNoteToggled">
        <button @click="newNoteToggled = !newNoteToggled">
          New Note <mdicon name="plus" size="20" />
        </button>
      </template>

      <template v-else>
        <div class="new-note-form">
          <input class="note-title" id="noteTitleRef" type="text" placeholder="Enter a title..." />

          <textarea
            class="note-content"
            id="noteContentRef"
            placeholder="Your note"
            rows="12"
          ></textarea>

          <div class="form-buttons">
            <button @click="newNoteToggled = !newNoteToggled">Cancel</button>
            <button>Save</button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.note-wrapper {
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 10px 18px;
  margin: 0 auto;

  .add-note {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 8px 0;

    .new-note-form {
      display: flex;
      flex-direction: column;

      .note-title,
      .note-content {
        padding: 6px 12px;
        margin-bottom: 8px;
        border-radius: 11px;
      }
      .note-content {
        resize: vertical;
        padding: 8px 12px;
      }

      .form-buttons {
        display: flex;
        justify-content: flex-end;

        button {
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
