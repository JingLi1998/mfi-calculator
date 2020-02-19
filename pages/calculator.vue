<template>
  <v-content>
    <nuxt-child />
  </v-content>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if (!store.getters.appStarted) {
      return redirect("/");
    }
  }
};
</script>