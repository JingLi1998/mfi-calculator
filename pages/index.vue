<template>
  <v-content>
    <v-container style="height: 100%" class="pa-10" fluid>
      <v-card
        style="border-radius:10px; background-color: #F5F9E9"
        raised
        class="main-form d-flex justify-center pa-0"
        height="100%"
      >
        <v-row style="height:100%" align="center" justify="center" class="px-3">
          <v-col sm="4" class="tree pa-0" />
          <v-col cols="8" align="center">
            <p class="text-center display-3 px-5">Welcome to the Microfinance Calculator</p>
            <v-btn text class="headline" @click="nextPage" color="primary">Click here to begin</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
export default {
  methods: {
    nextPage() {
      this.$store.dispatch("startApp");
      this.$router.push("/calculator/product-type");
    }
  }
};
</script>
   