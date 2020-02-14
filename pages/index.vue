<template>
  <v-row style="height:100%" align="center" justify="center">
    <v-col cols="10" align="center">
      <div v-show="current=='landingPage'">
        <p class="text-center display-3">Welcome to the Microfinance Calculator</p>
        <v-btn
          text
          class="headline"
          @click="current='productType'"
          color="primary"
        >Click here to begin</v-btn>
      </div>
      <!-- <landing-page></landing-page> -->
      <product-type v-show="current=='productType'"></product-type>
    </v-col>
  </v-row>
</template>

<script>
// import LandingPage from "../components/LandingPage.vue";
import ProductType from "../components/ProductType.vue";
export default {
  components: {
    // LandingPage,
    ProductType
  },
  data() {
    return {
      current: "landingPage"
    };
  }
};
</script>

<style scoped>
</style>
