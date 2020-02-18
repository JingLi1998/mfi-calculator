<template>
  <v-row style="height:100%" align="center" justify="center" class="px-3">
    <v-col cols="5" align="center" justify="center">
      <v-card
        style="border-radius:10px; background-color: #F5F9E9"
        raised
        height="100%"
        class="pa-10"
      >
        <div class="headline">Regular Payment Schedule</div>
        <div
          class="display-regular text-center pt-3"
        >Please provide some basic information concerning the payment schedule of the loan</div>
        <v-row align="center" class="px-2">
          <v-col cols="6" class="py-0">
            <v-text-field
              v-model="interestRatePercentage"
              label="Interest rate percentage"
              type="number"
              step="0.01"
              suffix="%"
            />
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="interestExpressed"
              label="expressed"
              :items="expressedItems"
              :rules="[v => !!v || 'Item is required']"
              required
            />
          </v-col>
        </v-row>
        <v-row align="center" class="px-5">
          <v-select
            v-model="principalPaymentType"
            label="Principal Payment Type"
            :items="principalTypeItems"
            :rules="[v => !!v || 'Item is required']"
            required
          />
          <v-tooltip top max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon color="grey lighten-1">mdi-help-circle</v-icon>
              </v-btn>
            </template>
            <span>End of term means the full principal is paid back at the end of the loan. Equal instalments means the same amount of principal is paid back at a regular rate. Amoritzed means principal and interest payments are calculated such that instalments are equal (e.g. EMI).</span>
          </v-tooltip>
        </v-row>
        <v-row align="center" class="px-5">
          <v-select
            v-model="interestPaymentType"
            label="Interest Payment Type"
            :items="interestTypeItems"
            :rules="[v => !!v || 'Item is required']"
            required
          />
          <v-tooltip top max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon color="grey lighten-1">mdi-help-circle</v-icon>
              </v-btn>
            </template>
            <span>Flat interest means interest is charged as a % of the original loan amount. On balance interest means interest payments depend on the loan outstanding. Amortized means principal and interest payments are calculated such that instalments are equal (e.g. EMI).</span>
          </v-tooltip>
        </v-row>
        <v-row align="center" class="px-5">
          <v-text-field
            v-model="principalPaymentFrequency"
            label="Frequency of principal payments"
            type="number"
            suffix="month(s)"
          />
          <v-tooltip top max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon color="grey lighten-1">mdi-help-circle</v-icon>
              </v-btn>
            </template>
            <span>You will only need to fill in frequency of principal payments if you select Equal instalments for principal payment type. If you select End of term or amortized, the sheet will automatically determine the frequency of principal payments.</span>
          </v-tooltip>
        </v-row>
        <v-row align="center" class="px-5">
          <v-text-field
            v-model="interestPaymentFrequency"
            label="Frequency of interest payments"
            type="number"
            suffix="month(s)"
          />
          <v-tooltip top max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon color="grey lighten-1">mdi-help-circle</v-icon>
              </v-btn>
            </template>
            <span>For bullet loan, enter frequency equal to loan duration.</span>
          </v-tooltip>
        </v-row>
        <v-row align="center" class="px-5" justify="center">
          <v-text-field
            v-model="interestMonths"
            label="Interest is charged every..."
            type="number"
            suffix="month(s)"
          />
          <v-tooltip top max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon color="grey lighten-1">mdi-help-circle</v-icon>
              </v-btn>
            </template>
            <span>Note that this may not be the same as frequency of collection! For example, imagine a bullet loan for 100,000 MMK charging 12% interest p.a.. If interested is charged every year, then the repayment at loan end is 112,000 MMK. If interested is charged monthly, then, because of compound interest, the repayment at loan end is 100*(1.01)^12 = 112,682.50. If you want to ignore compounding, then set B20 equal to B19.</span>
          </v-tooltip>
        </v-row>
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
      expressedItems: [
        { text: "yearly", value: "yearly" },
        { text: "monthly", value: "monthly" }
      ],
      interestTypeItems: [
        { text: "Flat", value: "flat" },
        { text: "On Balance", value: "on balance" },
        { text: "Amortized", value: "amortized" }
      ],
      principalTypeItems: [
        { text: "End of Term", value: "End of Term" },
        { text: "Equal Installments", value: "Equal Installments" },
        { text: "Amortized", value: "amortized" }
      ]
    };
  },
  computed: {
    ...mapGetters({
      formSteps: "formSteps",
      counter: "counter"
    }),
    interestRatePercentage: {
      get() {
        return this.$store.getters[
          "regularPaymentSchedule/interestRatePercentage"
        ];
      },
      set(interestRatePercentage) {
        this.$store.dispatch(
          "regularPaymentSchedule/setInterestRatePercentage",
          interestRatePercentage
        );
      }
    },
    interestExpressed: {
      get() {
        return this.$store.getters["regularPaymentSchedule/interestExpressed"];
      },
      set(interestExpressed) {
        this.$store.dispatch(
          "regularPaymentSchedule/setInterestExpressed",
          interestExpressed
        );
      }
    },
    principalPaymentType: {
      get() {
        return this.$store.getters[
          "regularPaymentSchedule/principalPaymentType"
        ];
      },
      set(principalPaymentType) {
        this.$store.dispatch(
          "regularPaymentSchedule/setPrincipalPaymentType",
          principalPaymentType
        );
      }
    },
    interestPaymentType: {
      get() {
        return this.$store.getters[
          "regularPaymentSchedule/interestPaymentType"
        ];
      },
      set(interestPaymentType) {
        this.$store.dispatch(
          "regularPaymentSchedule/setInterestPaymentType",
          interestPaymentType
        );
      }
    },
    principalPaymentFrequency: {
      get() {
        return this.$store.getters[
          "regularPaymentSchedule/principalPaymentFrequency"
        ];
      },
      set(principalPaymentFrequency) {
        this.$store.dispatch(
          "regularPaymentSchedule/setPrincipalPaymentFrequency",
          principalPaymentFrequency
        );
      }
    },
    interestPaymentFrequency: {
      get() {
        return this.$store.getters[
          "regularPaymentSchedule/interestPaymentFrequency"
        ];
      },
      set(interestPaymentFrequency) {
        this.$store.dispatch(
          "regularPaymentSchedule/setInterestPaymentFrequency",
          interestPaymentFrequency
        );
      }
    },
    interestMonths: {
      get() {
        return this.$store.getters["regularPaymentSchedule/interestMonths"];
      },
      set(interestMonths) {
        this.$store.dispatch(
          "regularPaymentSchedule/setInterestMonths",
          interestMonths
        );
      }
    },
    invalid() {
      if (
        this.interestRatePercentage == undefined ||
        this.interestRatePercentage == ""
      ) {
        return true;
      } else if (
        this.interestExpressed == undefined ||
        this.interestExpressed == ""
      ) {
        return true;
      } else if (
        this.principalPaymentType == undefined ||
        this.principalPaymentType == ""
      ) {
        return true;
      } else if (
        this.interestPaymentType == undefined ||
        this.interestPaymentType == ""
      ) {
        return true;
      } else if (
        this.principalPaymentFrequency == undefined ||
        this.principalPaymentFrequency == ""
      ) {
        return true;
      } else if (
        this.interestPaymentFrequency == undefined ||
        this.interestPaymentFrequency == ""
      ) {
        return true;
      } else if (
        this.interestMonths == undefined ||
        this.interestMonths == ""
      ) {
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
        return alert("Please fill in all fields");
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
