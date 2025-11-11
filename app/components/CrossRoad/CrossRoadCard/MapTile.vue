<script setup lang="ts">
const props = defineProps({
  type: String,
  trafficLightColor: String || null,
  id: Number
})

console.log("props: ", props.type)

const typeClass = computed(()=>{
  return props.trafficLightColor ? `tile--${props.type}-${props.trafficLightColor}` : `tile--${props.type}`
})
// const typeClass = props.trafficLightColor ? `tile--${props.type}-${props.trafficLightColor}` : `tile--${props.type}`

console.log(typeClass);

</script>

<template>
  <div :class="typeClass" class="tile">
    {{ props.type }}
  </div>
</template>

<style scoped>
.tile--building {
  background-color: #b0bec5;
}

.tile--road {
  background-color: black;
}

.tile--traffic-light-red {
  background-color: red;
}

.tile--traffic-light-green {
  background-color: green;
}

.tile--traffic-light-orange {
  background-color: orange;
}

.tile {
  width: 20vw;
  height: 20vh;
}
</style>