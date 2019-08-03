<template>
  <div class="edit-form">
    <input v-model="message">
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'EditForm',
  computed: {
    message: {
      get() { return this.$store.getters.message; },
      set(value) { this.$store.dispatch('doUpdate', value) }
    }
  }
}
</script>
