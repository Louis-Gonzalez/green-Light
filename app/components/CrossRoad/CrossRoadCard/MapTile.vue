<script setup lang="ts">
const props = defineProps({
  type: String,
})

const whatBackground = computed(()=>{
  let  background
  if(props.type === 'building'){
    background = 'background-building'
  } else if(props.type === 'road'){
    background = 'background-road'
  } else {
    background = 'background-traffic-light'
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
.background-traffic-light {
  background: red;
}
.tile {
  width: 20vw;
  height: 15.625vh;
}
</style>