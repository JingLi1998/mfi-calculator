<template>
  <v-app style="background-image: url('/main.jpg')">
    <div class="overlay" />
    <nuxt />
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
