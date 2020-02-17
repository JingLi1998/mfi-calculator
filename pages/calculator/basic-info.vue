<template>
  <v-container style="height: 100%" class="pa-10" fluid>
    <v-row style="height:100%" align="center" justify="center" class="px-3">
      <v-col cols="5" align="center" justify="center">
        <v-card
          style="border-radius:10px; background-color: #F5F9E9"
          raised
          height="100%"
          class="pa-10"
        >
          <div class="headline">Basic Info</div>
          <div
            class="display-regular text-center pt-3"
          >Please provide some basic information concerning the loan amount and duration</div>
          <v-text-field label="Loan Amount" type="number" />
          <v-text-field label="Loan Duration" type="number" suffix="months" />
          <div>
            <nuxt-link to="/" tag="span">
              <v-btn
                text
                class="display-regular-1"
                @click="previousPage"
                color="primary"
                v-text="'Back'"
              />
            </nuxt-link>
            <v-btn
              v-if="counter != (formSteps.length-1)"
              text
              class="display-regular-1"
              color="primary"
              @click="nextPage"
              v-text="'Click here to continue'"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["formSteps", "counter"])
  },
  methods: {
    ...mapActions(["setCounter"]),
    previousPage() {
      this.$router.go(-1);
    },
    nextPage() {
      // this.setFormSteps(this.productTypes);
      this.$router.push(this.formSteps[this.counter + 1]);
    }
  },
  mounted() {
    const currentIndex = this.formSteps.indexOf(this.$route.path);
    this.setCounter(currentIndex);
  }
};
</script>
