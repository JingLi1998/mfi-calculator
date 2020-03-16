<template>
  <v-container class="full-height">
    <v-row align="center" justify="center" style="minimum-full-height">
      <v-col>
        <v-row>
          <v-progress-linear
            ref="progress"
            :value="value"
            class="my-9"
            style="width: 55%; margin:auto; height: 10px"
          />
        </v-row>
        <v-row align="center" justify="center">
          <nuxt-child />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if (!store.getters.appStarted) {
      return redirect("/");
    }
  },
  computed: {
    value() {
      return this.$route.name === "calculator-results"
        ? 100
        : this.$store.getters.progressCounter * 100;
    }
  }
};
</script>
