<template>
  <v-row style="height:100%" align="center" justify="center" class="px-3">
    <v-col cols="5" align="center" justify="center">
      <v-card
        style="border-radius:10px; background-color: #F5F9E9"
        raised
        height="100%"
        class="pa-10"
      >
        <div class="headline">Gross Witholding Tax</div>
        <div
          class="display-regular text-center pt-3"
        >Please provide information about the gross witholding tax of the loan</div>
        <v-text-field label="Tax Rate" />

        <v-select
          :items="items"
          label="Applies to interest repayments?"
          :rules="[v => !!v || 'Item is required']"
          required
        />
        <v-select
          :items="items"
          label="Applies to fees?"
          :rules="[v => !!v || 'Item is required']"
          required
        />
        <v-select
          :items="items"
          label="Applies to principal repayments?"
          :rules="[v => !!v || 'Item is required']"
          required
        />
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      items: ["Yes", "No"]
    };
  },
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
