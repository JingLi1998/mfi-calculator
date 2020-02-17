<template>
  <v-app style="background-image: url('/main.jpg')">
    <div class="overlay" />
    <v-content>
      <v-container style="height: 100%" class="pa-10" fluid>
        <v-card
          style="border-radius:10px"
          raised
          class="main-form d-flex justify-center pa-0"
          height="100%"
        >
          <nuxt />
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      title: "Microfinance Calculator"
    };
  }
};
</script>
