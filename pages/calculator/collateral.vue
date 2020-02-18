<template>
  <v-row style="height:100%" align="center" justify="center" class="px-3">
    <v-col cols="5" align="center" justify="center">
      <v-card
        style="border-radius:10px; background-color: #F5F9E9"
        raised
        height="100%"
        class="pa-10"
      >
        <div class="headline">Collateral</div>
        <div
          class="display-regular text-center pt-3"
        >Please provide some basic information concerning the collateral of the loan</div>
        <v-row align="center" class="px-5">
          <v-text-field
            v-model="fixedCollateral"
            label="Fixed Collateral"
            type="number"
            step="0.01"
            prefix="$"
          />
        </v-row>
        <v-row align="center" class="px-5">
          <v-text-field
            v-model="percentCollateral"
            label="Percent Collateral"
            type="number"
            step="0.01"
            suffix="as % of loan amount"
          />
        </v-row>
        <v-row align="center" class="px-2">
          <v-col cols="6">
            <v-text-field
              v-model="interestCollateral"
              label="Interest on collateral"
              type="number"
              step="0.01"
              suffix="%"
            />
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="expressCollateral"
              :items="items"
              label="Expressed"
              :rules="[v => !!v || 'Item is required']"
              required
            />
          </v-col>
        </v-row>
        <v-row align="center" class="px-5">
          <v-text-field
            v-model="interestAccrues"
            label="Interest accrues every..."
            type="number"
            suffix="month(s)"
          />
          <v-tooltip top max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon color="grey lighten-1">mdi-help-circle</v-icon>
              </v-btn>
            </template>
            <span>This is similar to the "Interest is charged every" column, and affects the rate of compounding. If you are unsure, you should enter 12.</span>
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
            text
            v-if="counter != (formSteps.length-1)"
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
      items: [
        {
          text: "Yearly",
          value: "yearly"
        },
        { text: "Monthly", value: "monthly" }
      ]
    };
  },
  computed: {
    ...mapGetters(["formSteps", "counter"]),
    fixedCollateral: {
      get() {
        return this.$store.getters["collateral/fixedCollateral"];
      },
      set(fixedCollateral) {
        this.$store.dispatch("collateral/setFixedCollateral", fixedCollateral);
      }
    },
    percentCollateral: {
      get() {
        return this.$store.getters["collateral/percentCollateral"];
      },
      set(percentCollateral) {
        this.$store.dispatch(
          "collateral/setPercentCollateral",
          percentCollateral
        );
      }
    },
    interestCollateral: {
      get() {
        return this.$store.getters["collateral/interestCollateral"];
      },
      set(interestCollateral) {
        this.$store.dispatch(
          "collateral/setInterestCollateral",
          interestCollateral
        );
      }
    },
    expressCollateral: {
      get() {
        return this.$store.getters["collateral/expressCollateral"];
      },
      set(expressCollateral) {
        this.$store.dispatch(
          "collateral/setExpressCollateral",
          expressCollateral
        );
      }
    },
    interestAccrues: {
      get() {
        return this.$store.getters["collateral/interestAccrues"];
      },
      set(interestAccrues) {
        this.$store.dispatch("collateral/setInterestAccrues", interestAccrues);
      }
    },
    invalid() {
      if (
        this.interestCollateral == undefined ||
        this.interestCollateral == ""
      ) {
        return true;
      } else if (
        this.percentCollateral == undefined ||
        this.percentCollateral == ""
      ) {
        return true;
      } else if (
        this.expressCollateral == undefined ||
        this.expressCollateral == ""
      ) {
        return true;
      } else if (
        this.fixedCollateral == undefined ||
        this.fixedCollateral == ""
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
        return alert("Please fill in the required values");
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