<script setup lang="ts">
import { useTheme } from '~/composables/useTheme';
import { onMounted } from "vue";

const { theme, toggleTheme, initTheme } = useTheme();
onMounted(() => initTheme());

const routeList = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Map Street',
    path: '/map-street',
  },
];
</script>

<template>
  <nav class="navbar">
    <div class="nav-links">
      <div v-for="route in routeList" :key="route.path">
        <NuxtLink
            :to="route.path"
            exact-active-class="active-link"
        >
          {{ route.name }}
        </NuxtLink>
      </div>
    </div>
    <button class="theme-toggle" @click="toggleTheme">
      {{ theme === 'dark' ? '🌞 Light' : '🌙 Dark' }}
    </button>
  </nav>
</template>

<style>
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

.navbar a.active-link {
  color: orangered;
  font-weight: bold;
  font-size: large;
  text-decoration: none;
}
</style>