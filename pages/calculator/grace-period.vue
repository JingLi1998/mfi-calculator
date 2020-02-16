<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["Yes", "No"]
    };
  }
};
</script>