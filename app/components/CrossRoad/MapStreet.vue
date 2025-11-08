<script setup lang="ts">

</script>

<template>
  <div class="container-map-street">
    <div>
      <p>test border</p>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container-map-street {
  border: black solid 3px;
  border-radius: 0.5rem;
  width: 100%;
  height: auto;
}
</style>