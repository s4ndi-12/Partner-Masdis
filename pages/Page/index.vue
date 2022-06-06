<template>
  <div>
    <h1>sandi</h1>
    <div @click="logout">logout</div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>