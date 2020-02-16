<template>
  <v-row style="height:100%" align="center" justify="center">
    <v-col cols="10" align="center">
      <nuxt-child />
      <v-btn
        text
        class="display-regular-1"
        color="primary"
        @click="nextPage"
        v-text="'Click here to continue'"
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
    ...mapActions(["incrementCounter"]),
    nextPage() {
      this.incrementCounter();
      this.$router.push(this.formSteps[this.counter].to);
    }
  }
};
</script>
