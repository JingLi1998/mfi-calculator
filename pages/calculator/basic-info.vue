<template>
  <v-col cols="5" align="center" justify="center">
    <div class="headline">Basic Info</div>
    <div class="display-regular text-center pt-3">
      Please provide some basic information concerning the loan amount and
      duration
    </div>
    <v-text-field
      :rules="[v => !!v || 'Item is required']"
      v-model="amount"
      label="Loan Amount"
      type="number"
    />
    <v-text-field
      v-model="duration"
      label="Loan Duration"
      type="number"
      suffix="months"
      :rules="[v => !!v || 'Item is required']"
    />
    <div>
      <nuxt-link to="/" tag="span">
        <v-btn
          outlined
          class="display-regular-1"
          @click="previousPage"
          v-text="'Back'"
        />
      </nuxt-link>
      <v-btn
        outlined
        v-if="counter != formSteps.length - 1"
        class="display-regular-1"
        @click="nextPage"
        v-text="'Click here to continue'"
      />
    </div>
  </v-col>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      formSteps: "formSteps",
      counter: "counter",
      loanDuration: "basicInfo/loanDuration",
      loanAmount: "basicInfo/loanAmount"
    }),
    amount: {
      get() {
        return this.loanAmount;
      },
      set(amount) {
        this.$store.dispatch("basicInfo/setLoanAmount", amount);
      }
    },
    duration: {
      get() {
        return this.loanDuration;
      },
      set(duration) {
        this.$store.dispatch("basicInfo/setLoanDuration", duration);
      }
    },
    invalid() {
      if (this.amount == undefined || this.amount == "") {
        return true;
      } else if (this.duration == undefined || this.duration == "") {
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
