<template>
  <div>
    <v-progress-circular value="90" color="red"/>
    <div style="position:absolute;top:0,left:0,z-index:9">
      <v-progress-circular value="70" color="blue"/>
    </div>
  </div>
</template>

<script>
  //import { VProgressCircular } from "vuetify/lib";

  export default {
    name: 'VProgressCircularOverlay',

    data: () => ({
    }),
    mounted: function(){
    }

  }
</script>
