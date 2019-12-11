<template>
  <span class="go-back">
    <button class="btn" @click="goBack">Go Back</button>
  </span>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
}
</style>
