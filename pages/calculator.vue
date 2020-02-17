<template>
  <v-content>
    <nuxt-child />
  </v-content>
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
    const currentIndex = this.formSteps.indexOf(this.$route.path);
    this.setCounter(currentIndex);
  }
};
</script>

