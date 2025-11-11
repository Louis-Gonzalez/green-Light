<script setup lang="ts">
import { ref, onMounted } from 'vue'

const msg = ref<string>('')
const clickMe = () => {
  msg.value = "Hello"
}

onMounted(() => {
  setInterval(()=>{
    msg.value = ''
  },1000)
})
</script>

<template>
  <h1>Vuetify</h1>
  <div>
    <v-btn @click="clickMe">click Me</v-btn>
    <div v-if="msg !== '' ">
      {{msg}}
    </div>
    <div v-else>
      Click on the button !
    </div>
  </div>

</template>

<style scoped></style>