<template>
  <div id="app">
    <p>{{ message }}</p>
    <EditForm />
  </div>
</template>

<script>
/* eslint-disable */
// 子コンポーネントを読み込む
import EditForm from '@/components/EditForm';

export default {
  name: 'app',
  components: {
    EditForm,
  },
  computed: {
    // ローカルのmessageとストアのmessageを同期
    message() { return this.$store.getters.message; },
  },
};
</script>
