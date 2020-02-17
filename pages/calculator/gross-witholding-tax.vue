<template>
  <v-row style="height:100%" align="center" justify="center" class="px-3">
    <v-col cols="5" align="center" justify="center">
      <v-card
        style="border-radius:10px; background-color: #F5F9E9"
        raised
        height="100%"
        class="pa-10"
      >
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
      items: ["Yes", "No"]
    };
  }
};
</script>