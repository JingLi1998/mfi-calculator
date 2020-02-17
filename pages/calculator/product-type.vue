<template>
  <v-container style="height: 100%" class="px-10" fluid>
    <v-row style="height:100%" align="center" justify="center" class="px-3">
      <v-col cols="7" align="center" justify="center">
        <v-card
          style="border-radius:10px; background-color: #F5F9E9"
          raised
          height="100%"
          class="pa-10"
        >
          <div
            class="display-regular text-center mb-5"
          >Please describe the features of the loan. Later we will ask for further information on each feature you have selected</div>
          <v-select
            dense
            v-for="(item,i) in items"
            v-model="productTypes[i]"
            :items="item.options"
            :label="item.label"
            :rules="[v => !!v || 'Item is required']"
            :key="item.id"
            required
          />
          <v-btn @click="setFormSteps(productTypes)" text>Save</v-btn>
          <navigation-button />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import navigationButton from "../../components/navigationButton.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    navigationButton
  },
  data() {
    return {
      test: " ",
      productTypes: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      ],
      items: [
        {
          options: [
            { text: "Regular", value: "/calculator/regular-payment-schedule" },
            { text: "Irregular", value: " " }
          ],
          label:
            "Click Regular if repayments follow a regular rule. Click Irregular if you need to enter repayments manually"
        },
        {
          options: [
            { text: "Fees", value: "/calculator/fees" },
            { text: "No Fees", value: " " }
          ],
          label: "Click Fees if Fees apply"
        },
        {
          options: [
            { text: "Collateral", value: "/calculator/collateral" },
            { text: "No Collateral", value: " " }
          ],
          label: "Click Collateral if cash collateral is required"
        },
        {
          options: [
            { text: "Grace Period", value: "/calculator/grace-period" },
            { text: "No Grace Period", value: " " }
          ],
          label: "Click Grace Period if there is a grace period"
        },
        {
          options: [
            {
              text: "Gross Witholding Tax",
              value: "/calculator/gross-witholding-tax"
            },
            { text: "No Gross Witholding Tax", value: " " }
          ],
          label:
            "Click Gross Witholding Tax if Maha will be required to pay GWT"
        },
        {
          options: [
            { text: "Varies over Time", value: "/calculator/interest-rate" },
            { text: "Constant over Time", value: " " }
          ],
          label:
            "Click Varies Over Time if the interest rate changes over the life of the loan"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["setFormSteps"])
  }
};
</script>