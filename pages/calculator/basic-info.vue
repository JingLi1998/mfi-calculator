<template>
  <v-container style="height: 100%" class="pa-10" fluid>
    <v-row style="height:100%" align="center" justify="center" class="px-3">
      <v-col cols="5" align="center" justify="center">
        <v-card
          style="border-radius:10px; background-color: #F5F9E9"
          raised
          height="100%"
          class="pa-10"
        >
          <div class="headline">Basic Info</div>
          <div
            class="display-regular text-center pt-3"
          >Please provide some basic information concerning the loan amount and duration</div>
          <v-text-field label="Loan Amount" type="number" />
          <v-text-field label="Loan Duration" type="number" suffix="months" />
          <navigation-button />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import navigationButton from "../../components/navigationButton.vue";
export default {
  components: {
    navigationButton
  }
};
</script>
