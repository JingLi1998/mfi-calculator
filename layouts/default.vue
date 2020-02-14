<template>
  <v-app style="background-color: #8EE144">
    <!-- <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>-->
    <v-content>
      <v-container style="height: 100%" fluid>
        <v-row style="height: 100%" class="d-flex flex-column justify-center">
          <v-col style="min-height:90%" sm="8" offset-sm="2" class="pa-0">
            <v-card
              style="border-radius:30px"
              raised
              class="main-form d-flex justify-center pa-0"
              height="100%"
            >
              <v-row class="pa-0">
                <v-col sm="4" class="pa-0">
                  <v-img
                    style="border-radius:30px 0 0 30px  "
                    src="/background3.jpg"
                    class="pa-0"
                    height="100%"
                    width="100%"
                  ></v-img>
                </v-col>
                <v-col sm="8" class style="border-radius:0 30px 30px 0">
                  <nuxt />
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      title: "Microfinance Calculator"
    };
  }
};
</script>
