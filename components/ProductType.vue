<template>
  <v-form>
    <p
      class="display-regular"
    >Please describe the features of the loan. Later we will ask for further information on each feature you have selected</p>
    <v-row justify="center">
      <v-col cols="11">
        <v-select
          dense
          v-for="item in items"
          :items="item.options"
          :label="item.text"
          :rules="[v => !!v || 'Item is required']"
          :key="item.id"
          required
        ></v-select>
        <v-btn
          text
          class="display-regular-1"
          @click="$emit('next')"
          color="primary"
        >Click here to continue</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      items: {
        fees: {
          text: "Click Fees if fees apply",
          options: ["Fees", "No Fees"]
        },
        collateral: {
          text: "Click Collateral if cash collateral is required",
          options: ["Collateral", "No Collateral"]
        },
        grace: {
          text: "Click Grace Period if there is any grace period",
          options: ["Grace Period", "No Grace Period"]
        },
        gross: {
          text:
            "Click Gross Witholding Tax if Maha will be required to pay GWT",
          options: ["No Gross Witholding Tax", "Gross WItholding Tax"]
        },
        repayment: {
          text:
            "Click Regular if repayments follow a regular rule. Click Irregular if you need to enter repayments manually",
          options: ["Regular", "Irregular"]
        },
        interest: {
          text:
            "Click Varies Over Time if the interest rate changes over the life of the loan",
          options: ["Varies Over Time", "Constant Over Time"]
        }
      }
    };
  }
};
</script>