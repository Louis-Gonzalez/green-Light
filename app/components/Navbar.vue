<script setup lang="ts">
const routeList = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Map Street',
    path: '/map-street/index',
  },
];
</script>

<template>
  <nav class="navbar">
    <div class="nav-links">
      <div v-for="route in routeList" :key="route.path">
        <NuxtLink :to="route.path">{{ route.name }}</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: green;
}

.nav-links {
  display: flex;
  gap: 1rem;
  flex-grow: 1;
}

.navbar a {
  text-decoration: none;
  color: whitesmoke;
  font-size: large;
}
</style>