<template>
  <v-row style="height:100%" align="center" justify="center">
    <v-col cols="10" align="center">
      <v-scroll-x-reverse-transition mode="out-in">
        <component v-on:next="counter += 1" :is="components[counter]" />
      </v-scroll-x-reverse-transition>
      <!-- <div v-show="current=='landingPage'">
        <p class="text-center display-3">Welcome to the Microfinance Calculator</p>
        <v-btn
          text
          class="headline"
          @click="current='productType'"
          color="primary"
        >Click here to begin</v-btn>
      </div>-->
      <!-- <landing-page></landing-page> -->
    </v-col>
  </v-row>
</template>

<script>
import LandingPage from "../components/LandingPage.vue";
import ProductType from "../components/ProductType.vue";
import BasicInfo from "../components/BasicInfo.vue";
import PaymentSchedule from "../components/PaymentSchedule.vue";
import FeesExist from "../components/FeesExist.vue";
import CollateralExist from "../components/CollateralExist.vue";
import GracePeriod from "../components/GracePeriod.vue";
import GrossTax from "../components/GrossTax.vue";
import InterestRate from "../components/InterestRate.vue";

export default {
  components: {
    LandingPage,
    ProductType,
    BasicInfo,
    PaymentSchedule,
    FeesExist,
    CollateralExist,
    GracePeriod,
    GrossTax,
    InterestRate
  },
  data() {
    return {
      current: "landingPage",
      components: [
        LandingPage,
        ProductType,
        BasicInfo,
        PaymentSchedule,
        FeesExist,
        CollateralExist,
        GracePeriod,
        GrossTax,
        InterestRate
      ],
      counter: 0
    };
  }
};
</script>

<style scoped>
</style>
