<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import FormInput from '../components/form/FormInput.vue'
const user = useUserStore()

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
const noteAdded = ref(false)

const submit = async () => {
  const title = document.getElementById('noteTitleRef').value
  const content = document.getElementById('noteContentRef').value
  noteAdded.value = await user.addNote(title, content)
}
</script>

<template>
  <div class="note-wrapper">
    <div
      class="add-note"
      :style="`height: ${newNoteToggled ? 'auto' : '36px'};overflow: ${
        newNoteToggled ? '' : 'hidden'
      }`"
    >
      <div class="note-header">
        <h2>My notes</h2>
        <button @click="newNoteToggled = !newNoteToggled">
          New Note <mdicon name="plus" size="20" />
        </button>
      </div>

      <!-- <template v-if="newNoteToggled"> -->
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
          <button @click="submit">Save</button>
        </div>
      </div>
      <!-- </template> -->
    </div>

    <template v-if="user.notes.length == 0">
      <p>You don't have any notes</p>
    </template>
    <template v-else>
      <div v-for="note in user.notes" :key="note.id">
        <span v-html="note.id" />
        <span v-html="note.title" />
        <span v-html="note.content" />
      </div>
    </template>
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
    position: relative;
    margin: 8px 0;
    transition: all 200ms;

    .note-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

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
