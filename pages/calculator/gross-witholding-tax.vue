<template>
  <v-col cols="5" align="center" justify="center">
    <div class="headline">Gross Witholding Tax</div>
    <div class="display-regular text-center pt-3">
      Please provide information about the gross witholding tax of the loan
    </div>
    <v-text-field v-model="taxRate" label="Tax Rate" />

    <v-select
      v-model="interestApplies"
      :items="items"
      label="Applies to interest repayments?"
      :rules="[v => !!v || 'Item is required']"
      required
    />
    <v-select
      v-model="feeApplies"
      :items="items"
      label="Applies to fees?"
      :rules="[v => !!v || 'Item is required']"
      required
    />
    <v-select
      v-model="principalApplies"
      :items="items"
      label="Applies to principal repayments?"
      :rules="[v => !!v || 'Item is required']"
      required
    />
    <div>
      <nuxt-link to="/" tag="span">
        <v-btn
          outlined
          class="display-regular-1"
          @click="previousPage"
          color="primary"
          v-text="'Back'"
        />
      </nuxt-link>
      <v-btn
        v-if="counter != formSteps.length - 1"
        outlined
        class="display-regular-1"
        color="primary"
        @click="nextPage"
        v-text="'Click here to continue'"
      />
    </div>
  </v-col>
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
    ...mapGetters(["formSteps", "counter"]),
    taxRate: {
      get() {
        return this.$store.getters["grossWitholdingTax/taxRate"];
      },
      set(taxRate) {
        this.$store.dispatch("grossWitholdingTax/setTaxRate", taxRate);
      }
    },
    interestApplies: {
      get() {
        return this.$store.getters["grossWitholdingTax/interestApplies"];
      },
      set(interestApplies) {
        this.$store.dispatch(
          "grossWitholdingTax/setInterestApplies",
          interestApplies
        );
      }
    },
    feeApplies: {
      get() {
        return this.$store.getters["grossWitholdingTax/feeApplies"];
      },
      set(feeApplies) {
        this.$store.dispatch("grossWitholdingTax/setFeeApplies", feeApplies);
      }
    },
    principalApplies: {
      get() {
        return this.$store.getters["grossWitholdingTax/principalApplies"];
      },
      set(principalApplies) {
        this.$store.dispatch(
          "grossWitholdingTax/setPrincipalApplies",
          principalApplies
        );
      }
    },
    invalid() {
      if (this.feeApplies == undefined || this.feeApplies == "") {
        return true;
      } else if (
        this.interestApplies == undefined ||
        this.interestApplies == ""
      ) {
        return true;
      } else if (
        this.principalApplies == undefined ||
        this.principalApplies == ""
      ) {
        return true;
      } else if (this.taxRate == undefined || this.taxRate == "") {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapActions(["setCounter"]),
    previousPage() {
      this.$router.go(-1);
    },
    nextPage() {
      if (this.invalid) {
        return alert("Please fill out all required fields");
      }
      this.$router.push(this.formSteps[this.counter + 1]);
    }
  },
  mounted() {
    const currentIndex = this.formSteps.indexOf(this.$route.path);
    this.setCounter(currentIndex);
  }
};
</script>
