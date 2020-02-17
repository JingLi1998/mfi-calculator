<template>
  <v-row style="height:100%" align="center" justify="center" class="px-3">
    <v-col cols="5" align="center" justify="center">
      <v-card
        style="border-radius:10px; background-color: #F5F9E9"
        raised
        height="100%"
        class="pa-10"
      >
        <div class="headline">Grace Period</div>
        <v-text-field label="Grace period for first..." type="number" suffix="month(s)" />

        <v-row>
          <v-col cols="6">
            <v-select
              :items="items"
              label="Applies to interest?"
              :rules="[v => !!v || 'Item is required']"
              required
            />
          </v-col>
          <v-col cols="6">
            <v-select
              :items="items"
              label="Applies to principal?"
              :rules="[v => !!v || 'Item is required']"
              required
            />
          </v-col>
        </v-row>
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