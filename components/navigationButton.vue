<template>
  <div>
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["formSteps", "counter"])
  },
  methods: {
    ...mapActions(["incrementCounter", "decrementCounter"]),
    nextPage() {
      this.incrementCounter();
      this.$router.push(this.formSteps[this.counter]);
    },
    previousPage() {
      this.decrementCounter();
      this.$router.push(this.formSteps[this.counter]);
    }
  }
};
</script>