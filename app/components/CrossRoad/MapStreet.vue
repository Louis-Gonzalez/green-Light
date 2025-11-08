<script setup lang="ts">
import MapTile from "~/components/CrossRoad/CrossRoadCard/MapTile.vue";

const building = {
  type: "traffic",
}
</script>

<template>
  <div class="container-map-street">
    <div>
      <MapTile
          :type="building.type"
      />
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