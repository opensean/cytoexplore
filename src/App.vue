<template>
  <v-app>
    <v-main>
          <CytoExplore />
    </v-main>
  </v-app>
</template>

<script>
import CytoExplore from './components/CytoExplore';

export default {
  name: 'App',

  components: {
    CytoExplore,
  },

  data: () => ({
    //
  }),
};
</script>
