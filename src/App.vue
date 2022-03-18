<template>
  <v-app>
    <app-top-bar/>

   <v-main>
        <Primeiraparte/>
    </v-main>
  </v-app>
</template>

<script>
import Primeiraparte from './components/PrimeiraParte.vue'
import AppTopBar from './components/shared/AppTopBar.vue'

export default {
  name: 'App',

  components: {
    Primeiraparte,
    AppTopBar,
  },


};
</script>
