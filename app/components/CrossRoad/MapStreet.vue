<script setup lang="ts">
import MapTile from "~/components/CrossRoad/CrossRoadCard/MapTile.vue";

const firstLine = {
  card1 : {
    type: 'building'
  },
  card2 : {
    type: 'building'
  },
  card3: {
    type : 'road'
  },
  card4: {
    type : 'building'
  },
  card5: {
    type : 'building'
  }
}

const secondLine = {
  card1 : {
    type: 'building'
  },
  card2 : {
    type: 'traffic light'
  },
  card3: {
    type : 'road'
  },
  card4: {
    type : 'traffic light'
  },
  card5: {
    type : 'building'
  }
}

const thirdLine = {
  card1 : {
    type: 'road'
  },
  card2 : {
    type: 'road'
  },
  card3: {
    type : 'road'
  },
  card4: {
    type : 'road'
  },
  card5: {
    type : 'road'
  }
}

const fourthLine = {
  card1 : {
    type: 'building'
  },
  card2 : {
    type: 'traffic light'
  },
  card3: {
    type : 'road'
  },
  card4: {
    type : 'traffic light'
  },
  card5: {
    type : 'building'
  }
}
const fifthLine = {
  card1 : {
    type: 'building'
  },
  card2 : {
    type: 'building'
  },
  card3: {
    type : 'road'
  },
  card4: {
    type : 'building'
  },
  card5: {
    type : 'building'
  }
}
</script>

<template>
  <div class="container-map-street">
    <div v-for="card in firstLine" key="index">
      <MapTile
          :type="card.type"
      />
    </div>
  </div>
  <div class="container-map-street">
    <div v-for="card in secondLine" key="index">
      <MapTile
          :type="card.type"
      />
    </div>
  </div>
  <div class="container-map-street">
    <div v-for="card in thirdLine" key="index">
      <MapTile
          :type="card.type"
      />
    </div>
  </div>
  <div class="container-map-street">
    <div v-for="card in fourthLine" key="index">
      <MapTile
          :type="card.type"
      />
    </div>
  </div>
  <div class="container-map-street">
    <div v-for="card in fifthLine" key="index">
      <MapTile
          :type="card.type"
      />
    </div>
  </div>
</template>

<style scoped>
.container-map-street {
  display: flex;
  border: black solid 3px;
  border-radius: 0.5rem;
  width: 100%;
  height: auto;
}

</style>