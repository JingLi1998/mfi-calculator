<template>
  <!-- <v-app style="background-image: url('/main.jpg')"> -->
  <v-app>
    <v-app-bar
      style="border-bottom: 1px rgba(100, 100, 100, 0.3) solid;"
      flat
      color="info"
      app
      height="65px"
      hide-on-scroll
    >
      <!-- <v-icon>mdi-leaf</v-icon> -->
      <v-toolbar-title class="pl-9 headline primary--text"
        >MicroFinance Calculator</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text class="title" to="/" style="text-transform: capitalize"
          >Home</v-btn
        >
        <v-list-item class="title" style="text-transform: capitalize"
          >|</v-list-item
        >
        <v-btn text class="title" to="/about" style="text-transform: capitalize"
          >About</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer height="65px" color="green-darken-4" dark>
      <span>Created by Jing Li and James Stratton 2020 &copy;</span>
    </v-footer>
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
