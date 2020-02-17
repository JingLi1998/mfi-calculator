<template>
  <v-row style="height:100%" align="center" justify="center">
    <v-col cols="10" align="center">
      <nuxt-child />
      <v-btn
        v-if="counter != (formSteps.length-1)"
        text
        class="display-regular-1"
        color="primary"
        @click="nextPage"
        v-text="'Click here to continue'"
      />
      <v-btn
        v-if="counter != 0"
        text
        class="display-regular-1"
        color="primary"
        @click="previousPage"
        v-text="'Back'"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["formSteps", "counter"])
  },
  methods: {
    ...mapActions(["setCounter", "incrementCounter", "decrementCounter"]),
    nextPage() {
      this.incrementCounter();
      this.$router.push(this.formSteps[this.counter].to);
    },
    previousPage() {
      this.decrementCounter();
      this.$router.push(this.formSteps[this.counter].to);
    }
  },
  mounted() {
    const currentIndex = this.formSteps
      .map(e => e.to)
      .indexOf(this.$route.path);
    this.setCounter(currentIndex);
  }
};
</script>
