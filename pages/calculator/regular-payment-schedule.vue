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
        <v-text-field label="Interest rate percentage" type="number" step="0.01" suffix="%" />
        <v-text-field label="Frequency of principal payments" type="number" suffix="month(s)" />
        <v-text-field label="Frequency of interest payments" type="number" suffix="month(s)" />
        <v-text-field label="Interest is charged every..." type="number" suffix="month(s)" />
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
  }
};
</script>
