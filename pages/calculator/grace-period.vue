<template>
  <v-row style="height:100%" align="center" justify="center" class="px-3">
    <v-col cols="5" align="center" justify="center">
      <v-card
        style="border-radius:10px; background-color: #F5F9E9"
        raised
        height="100%"
        class="pa-10"
      >
        <div class="headline">Grace Period</div>
        <div
          class="display-regular text-center pt-3"
        >Please provide some basic information concerning the grace period of the loan</div>
        <v-row align="center" class="px-5">
          <v-text-field
            v-model="gracePeriod"
            label="Grace period for first..."
            type="number"
            suffix="month(s)"
          />
          <v-tooltip top max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon color="grey lighten-1">mdi-help-circle</v-icon>
              </v-btn>
            </template>
            <span>You may also like to set a grace period for fees. Instead, just change the month that the fee starts in Step 2(b). For example, for a monthly fee with a grace period of three months, change the "Starting from" item in 2(b) to 4 (because the first fee is charged in the fourth month of the loan).</span>
          </v-tooltip>
        </v-row>
        <v-row align="center" class="px-2">
          <v-col cols="6">
            <v-select
              v-model="interestApplies"
              :items="items"
              label="Applies to interest?"
              :rules="[v => !!v || 'Item is required']"
              required
            />
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="principalApplies"
              :items="items"
              label="Applies to principal?"
              :rules="[v => !!v || 'Item is required']"
              required
            />
          </v-col>
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
      items: [
        { text: "Yes", value: true },
        { text: "No", valule: false }
      ]
    };
  },
  computed: {
    ...mapGetters(["formSteps", "counter"]),
    gracePeriod: {
      get() {
        return this.$store.getters["gracePeriod/gracePeriod"];
      },
      set(gracePeriod) {
        this.$store.dispatch("gracePeriod/setGracePeriod", gracePeriod);
      }
    },
    interestApplies: {
      get() {
        return this.$store.getters["gracePeriod/interestApplies"];
      },
      set(interestApplies) {
        this.$store.dispatch("gracePeriod/setInterestApplies", interestApplies);
      }
    },
    principalApplies: {
      get() {
        return this.$store.getters["gracePeriod/principalApplies"];
      },
      set(principalApplies) {
        this.$store.dispatch(
          "gracePeriod/setPrincipalApplies",
          principalApplies
        );
      }
    },
    invalid() {
      if (this.gracePeriod == undefined || this.gracePeriod == "") {
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