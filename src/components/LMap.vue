<script>
import {LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

import { deviceMixin } from "../Mixins/deviceMixin";
import { axiosMixin } from "../Mixins/axiosMixin";

export default {
  mixins: [deviceMixin, axiosMixin],

  components: {
    LMap,
    LTooltip,
    LTileLayer,
    LMarker,

  },

  created: function() {
        this.devices = this.getDevices();
    },

    data() {
        return {
            devices: []
        };
    },

    methods: {
        onBtnClick: function() {
            this.devices.push({ id: 3, name: 'samsung s30', lat: 41.306750, lng: 16.821452 });

             this.callApi ('post', 'https://eogsa514kin6a8o.m.pipedream.net', 'axios WORKS!!!')
        }
    }
  
};

</script>

<template>
  <button @click="onBtnClick()">Add device / Mixin request</button>

  <div style="height: 50vh; width: 50vw;">
        <l-map
        :zoom="5"
        :center="[43.306750, 17.821452]"
        >
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>

            <template v-for='device in devices' :key="device.id">
                <l-marker :lat-lng="[device.lat, device.lng]" draggable>
                    <l-tooltip>{{ device.name }}</l-tooltip>
                </l-marker>
            </template>

        </l-map>
    </div>

</template>