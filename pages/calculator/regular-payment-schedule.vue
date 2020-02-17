<template>
  <div>
    <div class="headline">Regular Payment Schedule</div>
    <v-text-field label="Interest rate percentage" type="number" step="0.01" suffix="%" />
    <v-text-field label="Frequency of principal payments" type="number" suffix="month(s)" />
    <v-text-field label="Frequency of interest payments" type="number" suffix="month(s)" />
    <v-text-field label="Interest is charged every..." type="number" suffix="month(s)" />
    <navigation-button />
  </div>
</template>

<script>
import navigationButton from "../../components/navigationButton.vue";
export default {
  components: {
    navigationButton
  }
};
</script>
