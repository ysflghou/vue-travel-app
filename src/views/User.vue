<template>
  <div>
    <h2>Hello {{user}}, your adventure ends here ...</h2>
    <button @click="logOut" class="btn">Log out</button>
  </div>
</template>
<script>
import store from "@/store.js";
export default {
  data() {
    return {
      user: store.user
    };
  },
  methods: {
    logOut() {
      store.user == null;
      this.$router.push("/login");
    }
  }
};
</script>