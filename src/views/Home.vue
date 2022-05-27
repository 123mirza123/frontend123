<script setup lang="ts">

import InputForm from '@/views/InputForm.vue'
import LMap  from '@/components/LMap.vue'; 

</script>

<template>
  <main>
    <InputForm></InputForm>
    
    <l-map ref="map" style="height:50vh; width: 50vw;" :center="[43.306750, 17.821452]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
   </l-map>
  </main>
</template>

<style>

</style>