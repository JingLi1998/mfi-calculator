<template>
  <div>
    <div class="headline">Gross Witholding Tax</div>
    <v-text-field label="Tax Rate" />

    <v-select
      :items="items"
      label="Applies to interest repayments?"
      :rules="[v => !!v || 'Item is required']"
      required
    />
    <v-select
      :items="items"
      label="Applies to fees?"
      :rules="[v => !!v || 'Item is required']"
      required
    />
    <v-select
      :items="items"
      label="Applies to principal repayments?"
      :rules="[v => !!v || 'Item is required']"
      required
    />
    <navigation-button />
  </div>
</template>

<script>
import navigationButton from "../../components/navigationButton.vue";
export default {
  components: {
    navigationButton
  },
  data() {
    return {
      items: ["Yes", "No"]
    };
  }
};
</script>