<template>
  <div>
    <div class="headline">Basic Info</div>
    <v-text-field label="Loan Amount" type="number" />
    <v-text-field label="Loan Duration" type="number" suffix="months" />
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
