<template>
  <v-row style="height:100%" align="center" justify="center">
    <nuxt-child />
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["formSteps"])
  },
  methods: {
    ...mapActions(["setCounter"])
  },
  mounted() {
    const currentIndex = this.formSteps
      .map(e => e.to)
      .indexOf(this.$route.path);
    this.setCounter(currentIndex);
  }
};
</script>
