<template>
  <section>
    <h1>Experiences</h1>
    <h2>{{experience.name}}</h2>
    <div class="exprience-details">
      <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name" />
      <p>{{experience.description}}</p>
    </div>
  </section>
</template>
<script>
import store from "@/store.js";
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    experienceSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.slug === this.slug
      );
    },
    experience() {
      return this.destination.experiences.find(
        destination => destination.slug === this.experienceSlug
      );
    }
  }
};
</script>
<style scoped>
.exprience-details img {
  max-width: 600px;
  width: auto;
  height: 100%;
  max-height: 400px;
}
.exprience-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>