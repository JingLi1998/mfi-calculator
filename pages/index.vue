<template>
  <div>
    <v-container class="full-height">
      <v-row justify="center" align="center" style="full-height">
        <v-col offset="1" align="center" justify="center" cols="3">
          <h1 class="display-2 pb-6 font-weight-medium">
            Microfinance Calculator Tool
          </h1>
          <p class="subtitle-1 pb-3">
            Calculate your Microfinance loans with ease!
          </p>
          <div style="width: 80%;padding-bottom:30%">
            <v-btn @click="nextPage" block class="font-weight-bold"
              >Calculate now, it's free!</v-btn
            >
            <br />
            <v-btn
              @click="$vuetify.goTo('#scrollTo', options)"
              class="font-weight-bold"
              block
              >How it works</v-btn
            >
          </div>
        </v-col>
        <v-col cols="8" class="computer" style="height:100vh" />
      </v-row>
    </v-container>
    <v-row
      id="scrollTo"
      class="info"
      justify="center"
      align="center"
      style="height:100vh"
    >
      <v-col offset="1" cols="3" justify="center" align="center">
        <h1 class="mb-9">How It Works</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut
          quasi voluptatem aliquam labore culpa facilis exercitationem veritatis
          ullam, qui a deleniti perspiciatis quis iure est nobis optio accusamus
          neque minus, natus sint sunt aperiam. Voluptatibus, tempora dicta eius
          corporis modi blanditiis necessitatibus culpa earum vero, minus
          doloremque, minima asperiores.
        </p>
      </v-col>
      <v-col cols="1" />
      <v-col cols="6" justify="center" align="center">
        <h1 class="mb-9">What our calculator does</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae
          voluptas adipisci vitae magni commodi praesentium quasi obcaecati,
          nostrum ipsa quas earum delectus laudantium esse similique eum est
          fuga numquam non blanditiis mollitia aliquam deserunt laboriosam.
          Corporis, doloribus culpa! Alias qui doloribus iste ea similique sequi
          minima! Voluptas, quam soluta!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          explicabo corrupti non placeat delectus quasi fugiat nihil illo
          laboriosam est minus voluptatem labore nemo repellat libero excepturi
          eligendi minima, aspernatur eos alias natus perspiciatis possimus
          odio? Doloribus exercitationem, autem, voluptate rerum error vitae
          eius dolores nulla inventore architecto optio perspiciatis! lorem50
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          explicabo corrupti non placeat delectus quasi fugiat nihil illo
          laboriosam est minus voluptatem labore nemo repellat libero excepturi
          eligendi minima, aspernatur eos alias natus perspiciatis possimus
          odio? Doloribus exercitationem, autem, voluptate rerum error vitae
          eius dolores nulla inventore architecto optio perspiciatis! lorem50
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          explicabo corrupti non placeat delectus quasi fugiat nihil illo
          laboriosam est minus voluptatem labore nemo repellat libero excepturi
          eligendi minima, aspernatur eos alias natus perspiciatis possimus
          odio? Doloribus exercitationem, autem, voluptate rerum error vitae
          eius dolores nulla inventore architecto optio perspiciatis! lorem50
        </p>
      </v-col>
      <v-col cols="1" />
    </v-row>
  </div>
  <!-- <v-container style="height: 100%" class="pa-10" fluid>
      <v-card
        style="border-radius:10px; background-color: #F5F9E9"
        raised
        class="main-form d-flex justify-center pa-0"
        height="100%"
      >
        <v-row style="height:100%" align="center" justify="center" class="px-3">
          <v-col sm="4" class="tree pa-0" />
          <v-col cols="8" align="center">
            <p class="text-center display-3 px-5">Welcome to the Microfinance Calculator</p>
            <v-btn text class="headline" @click="nextPage" color="primary">Click here to begin</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container> -->
</template>

<script>
import * as easings from "vuetify/es5/services/goto/easing-patterns";

export default {
  data() {
    return {
      options: {
        duration: 1500,
        offset: -200,
        easing: "easeInOutQuint"
      }
    };
  },
  methods: {
    nextPage() {
      this.$store.dispatch("startApp");
      this.$router.push("/calculator/product-type");
    }
  }
};
</script>
