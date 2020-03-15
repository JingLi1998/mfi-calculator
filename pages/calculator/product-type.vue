<template>
  <v-col cols="7" align="center" justify="center">
    <div class="display-regular text-center mb-5">
      Please describe the features of the loan. Later we will ask for further
      information on each feature you have selected
    </div>
    <v-row align="center" class="px-5">
      <v-select
        v-model="paymentScheduleType"
        :items="paymentScheduleItems.options"
        :label="paymentScheduleItems.label"
        :rules="[v => !!v || 'Item is required']"
        required
      />
    </v-row>
    <v-row align="center" class="px-5">
      <v-select
        v-model="feesType"
        :items="feeItems.options"
        :label="feeItems.label"
        :rules="[v => !!v || 'Item is required']"
        required
      />
    </v-row>
    <v-row align="center" class="px-5">
      <v-select
        v-model="collateralType"
        :items="collateralItems.options"
        :label="collateralItems.label"
        :rules="[v => !!v || 'Item is required']"
        required
      />
    </v-row>
    <v-row align="center" class="px-5">
      <v-select
        v-model="gracePeriodType"
        :items="gracePeriodItems.options"
        :label="gracePeriodItems.label"
        :rules="[v => !!v || 'Item is required']"
        required
      />
    </v-row>
    <v-row align="center" class="px-5">
      <v-select
        v-model="grossTaxType"
        :items="grossTaxItems.options"
        :label="grossTaxItems.label"
        :rules="[v => !!v || 'Item is required']"
        required
      />
    </v-row>
    <v-row align="center" class="px-5">
      <v-select
        v-model="interestRateType"
        :items="interestRateItems.options"
        :label="interestRateItems.label"
        :rules="[v => !!v || 'Item is required']"
        required
      />
    </v-row>
    <div>
      <nuxt-link to="/" tag="span">
        <v-btn text class="display-regular-1" color="primary" v-text="'Back'" />
      </nuxt-link>
      <v-btn
        text
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
      test: " ",
      paymentScheduleItems: {
        options: [
          { text: "Regular", value: "/calculator/regular-payment-schedule" },
          { text: "Irregular", value: " " }
        ],
        label:
          "Click Regular if repayments follow a regular rule. Click Irregular if you need to enter repayments manually"
      },
      feeItems: {
        options: [
          { text: "Fees", value: "/calculator/fees" },
          { text: "No Fees", value: " " }
        ],
        label: "Click Fees if Fees apply"
      },
      collateralItems: {
        options: [
          { text: "Collateral", value: "/calculator/collateral" },
          { text: "No Collateral", value: " " }
        ],
        label: "Click Collateral if cash collateral is required"
      },
      gracePeriodItems: {
        options: [
          { text: "Grace Period", value: "/calculator/grace-period" },
          { text: "No Grace Period", value: " " }
        ],
        label: "Click Grace Period if there is a grace period"
      },
      grossTaxItems: {
        options: [
          {
            text: "Gross Witholding Tax",
            value: "/calculator/gross-witholding-tax"
          },
          { text: "No Gross Witholding Tax", value: " " }
        ],
        label: "Click Gross Witholding Tax if Maha will be required to pay GWT"
      },
      interestRateItems: {
        options: [
          { text: "Varies over Time", value: "/calculator/interest-rate" },
          { text: "Constant over Time", value: " " }
        ],
        label:
          "Click Varies Over Time if the interest rate changes over the life of the loan"
      }
    };
  },
  computed: {
    ...mapGetters(["counter", "formSteps"]),
    paymentScheduleType: {
      get() {
        return this.$store.getters["paymentScheduleType"];
      },
      set(paymentScheduleType) {
        this.$store.dispatch("setPaymentScheduleType", paymentScheduleType);
      }
    },
    feesType: {
      get() {
        return this.$store.getters["feesType"];
      },
      set(feesType) {
        this.$store.dispatch("setFeesType", feesType);
      }
    },
    collateralType: {
      get() {
        return this.$store.getters["collateralType"];
      },
      set(collateralType) {
        this.$store.dispatch("setCollateralType", collateralType);
      }
    },
    gracePeriodType: {
      get() {
        return this.$store.getters["gracePeriodType"];
      },
      set(gracePeriodType) {
        this.$store.dispatch("setGracePeriodType", gracePeriodType);
      }
    },
    grossTaxType: {
      get() {
        return this.$store.getters["grossTaxType"];
      },
      set(grossTaxType) {
        this.$store.dispatch("setGrossTaxType", grossTaxType);
      }
    },
    interestRateType: {
      get() {
        return this.$store.getters["interestRateType"];
      },
      set(interestRateType) {
        this.$store.dispatch("setInterestRateType", interestRateType);
      }
    }
  },
  methods: {
    ...mapActions(["setFormSteps", "setCounter"]),
    nextPage() {
      const selectedSteps = [
        this.paymentScheduleType,
        this.feesType,
        this.collateralType,
        this.gracePeriodType,
        this.grossTaxType,
        this.interestRateType
      ];
      if (selectedSteps.indexOf(null) != -1) {
        return alert("Please fill in all required fields");
      }
      this.setFormSteps(selectedSteps);
      this.$router.push(this.formSteps[this.counter + 1]);
    }
  },
  mounted() {
    const currentIndex = this.formSteps.indexOf(this.$route.path);
    this.setCounter(currentIndex);
  }
};
</script>
