<template>
  <v-col cols="5" align="center" justify="center">
    <h1 class="headline">Results</h1>
    <p class="display-regular text-center pt-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero itaque
      dolorem ducimus natus quas numquam, voluptate velit! Earum ea ducimus
      optio voluptates sed, ratione eum rerum et velit ut?
    </p>
    <br />
    <h1 class="display-4">50%</h1>
    <br /><br /><br />
    <v-btn outlined @click="startAgain">Start Again?</v-btn>
  </v-col>
</template>

<script>
export default {
  methods: {
    startAgain() {
      this.$store.dispatch("restartApp");
      this.$router.push("/");
    }
  }
};
</script>
