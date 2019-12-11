<template>
  <nav id="nav">
    <p class="logo">The Vue travel app</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.name" class="links">
        <router-link
          :to="{name: 'DestinationDetails', params: {slug: destination.slug}}"
        >{{destination.name}}</router-link>
      </li>
      <li class="links">
        <router-link to="/user">Profile</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import store from "@/store.js";
export default {
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
<style scoped>
#nav {
  display: flex;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>