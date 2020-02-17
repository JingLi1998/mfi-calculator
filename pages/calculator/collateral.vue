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
        <v-text-field label="Fixed Collateral" type="number" step="0.01" prefix="$" />
        <v-text-field
          label="Percent Collateral"
          type="number"
          step="0.01"
          suffix="as % of loan amount"
        />
        <v-row>
          <v-col cols="6">
            <v-text-field label="Interest on collateral" type="number" step="0.01" suffix="%" />
          </v-col>
          <v-col cols="6">
            <v-select
              :items="items"
              label="Expressed"
              :rules="[v => !!v || 'Item is required']"
              required
            />
          </v-col>
        </v-row>
        <v-text-field label="Interest accrues every..." type="number" suffix="month(s)" />
        <navigation-button />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import navigationButton from "../../components/navigationButton.vue";
export default {
  components: {
    navigationButton
  },
  data() {
    return {
      items: ["Yearly", "Monthly"]
    };
  }
};
</script>