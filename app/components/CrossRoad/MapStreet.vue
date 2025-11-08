<script setup lang="ts">
import MapTile from "~/components/CrossRoad/CrossRoadCard/MapTile.vue";

const data = {
  firstLine : {
    card1 : {
      id : 1,
      type: 'building'
    },
    card2 : {
      id : 2,
      type: 'building'
    },
    card3: {
      id : 3,
      type : 'road'
    },
    card4: {
      id : 4,
      type : 'building'
    },
    card5: {
      id : 5,
      type : 'building'
    }
  },
  secondLine :{
    card1 : {
      id : 6,
      type: 'building'
    },
    card2 : {
      id : 7,
      type: 'traffic light',
      trafficLightColor : 'red'
    },
    card3: {
      id : 8,
      type : 'road'
    },
    card4: {
      id : 9,
      type : 'traffic light',
      trafficLightColor:'green'
    },
    card5: {
      id : 10,
      type : 'building'
    }
  },
  thirdLine : {
    card1 : {
      id : 11,
      type: 'road'
    },
    card2 : {
      id : 12,
      type: 'road'
    },
    card3: {
      id : 13,
      type : 'road'
    },
    card4: {
      id : 14,
      type : 'road'
    },
    card5: {
      id : 15,
      type : 'road'
    }
  },
  fourthLine: {
    card1 : {
      id : 16,
      type: 'building'
    },
    card2 : {
      id : 17,
      type: 'traffic light',
      trafficLightColor:'green'
    },
    card3: {
      id : 18,
      type : 'road'
    },
    card4: {
      id : 19,
      type : 'traffic light',
      trafficLightColor:'red'
    },
    card5: {
      id: 20,
      type : 'building'
    }
  },
  fifthLine: {
    card1 : {
      id : 21,
      type: 'building'
    },
    card2 : {
      id : 22,
      type: 'building'
    },
    card3: {
      id : 23,
      type : 'road'
    },
    card4: {
      id : 24,
      type : 'building'
    },
    card5: {
      id : 25,
      type : 'building'
    }
  }
}
</script>

<template>
  <div class="container-map-street">
    <div v-for="(item,index) in data" :key="index">
      <div v-for="(tile, index) in item" :key="index">
        <MapTile
            :type="tile.type"
            :traffic-light-color="tile.trafficLightColor"
        />
      </div>
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