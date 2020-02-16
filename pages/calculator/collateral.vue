<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["Yearly", "Monthly"]
    };
  }
};
</script>