<script setup lang="ts">
const props = defineProps({
  type: String,
  id : Number,
  trafficLightColor: String || null,
})

const whatBackground = computed(()=>{
  let  background
  if(props.type === 'building'){
    background = 'background-building'
  } else if(props.type === 'road'){
    background = 'background-road'
  } else {

    background = 'background-traffic-light-'+ `${props.trafficLightColor}`
    console.log(background)
  }
  return background
})
</script>

<template>
    <div :class="['tile',whatBackground]">
      {{props.type}}
    </div>
</template>

<style scoped>
.background-building {
  background: #808080;
}
.background-road {
  background: #000000;
}
.background-traffic-light-red {
  background: red;
}
.background-traffic-light-warning {
  background: orange;
}
.background-traffic-light-green {
  background: green;
}
.tile {
  width: 20vw;
  height: 15.625vh;
}
</style>