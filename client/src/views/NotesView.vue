<script setup>
import { ref, onBeforeMount } from 'vue'
import { useUserStore } from '../stores/user'
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

const toggleNoteForm = () => {
  newNoteToggled.value = !newNoteToggled.value
  const noteForm = document.getElementById('newNoteFormRef')
  const addNote = document.getElementById('addNoteRef')
  if (noteForm) {
    if (newNoteToggled.value) {
      noteForm.style.marginTop = '0'
      setTimeout(() => {
        addNote.style.overflow = 'default'
      }, 300)
    } else {
      addNote.style.overflow = 'hidden'
      noteForm.style.marginTop = '-400px'
    }
  }
}
</script>

<template>
  <div class="note-view">
    <div class="note-wrapper">
      <div id="addNoteRef" class="add-note">
        <div class="note-header-wrapper">
          <div class="note-header">
            <h2>My notes</h2>
            <button @click="toggleNoteForm()">New Note <mdicon name="plus" size="20" /></button>
          </div>
        </div>

        <div id="newNoteFormRef" class="new-note-form">
          <input class="note-title" id="noteTitleRef" type="text" placeholder="Enter a title..." />

          <textarea
            id="noteContentRef"
            class="note-content"
            placeholder="Your note"
            rows="12"
          ></textarea>

          <div class="form-buttons">
            <button @click="toggleNoteForm()">Cancel</button>
            <button @click="submit">Save</button>
          </div>
        </div>
      </div>
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
.note-view {
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  .note-wrapper {
    display: flex;
    flex-direction: column;
    padding: 10px 18px;

    .add-note {
      width: 100%;
      min-height: 36px;
      display: flex;
      flex-direction: column;
      position: relative;
      margin: 8px 0;
      overflow: hidden;
      .note-header-wrapper {
        height: 36px;
        display: flex;
        margin-bottom: 8px;
        z-index: 350;
        .note-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          background-color: var(--nt-c-gray-light);
        }
      }

      .new-note-form {
        display: flex;
        flex-direction: column;
        margin-top: -400px;
        z-index: 340;
        transition: all 300ms;

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
}
</style>
