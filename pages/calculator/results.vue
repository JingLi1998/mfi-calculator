<template>
  <v-col>
    <v-row align="center" justify="center">
      <v-col cols="5" align="center" justify="center">
        <h1 class="headline">Results</h1>
        <p class="display-regular text-center pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero itaque
          dolorem ducimus natus quas numquam, voluptate velit! Earum ea ducimus
          optio voluptates sed, ratione eum rerum et velit ut?
        </p>
        <br />
        <h1 class="display-4">50%</h1>
        <br />
        <br />
        <br />
        <v-btn outlined @click="startAgain">Start Again?</v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-9" align="center" justify="center">
      <v-col cols="5" align="center" justify="center">
        <h1 class="headline">Interest Repayment Schedule</h1>
        <p class="display-regular text-center pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero itaque
          dolorem ducimus natus quas numquam, voluptate velit! Earum ea ducimus
          optio voluptates sed, ratione eum rerum et velit ut?
        </p>
        <br />
        <h3>Total interest repayment: 50</h3>
        <br />
        <v-data-table
          disable-filtering
          disable-pagination
          disable-sort
          hide-default-footer
          :headers="headers_interest"
          :items="interest_repayments"
        >
          <template v-slot:no-data>
            <div>No Repayment Schedule</div>
          </template>
        </v-data-table>
        <br />
        <h1 class="headline mt-9">Principal Repayment Schedule</h1>
        <p class="display-regular text-center pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero itaque
          dolorem ducimus natus quas numquam, voluptate velit! Earum ea ducimus
          optio voluptates sed, ratione eum rerum et velit ut?
        </p>
        <br />
        <h3>Total interest repayment: 50</h3>
        <br />
        <v-data-table
          disable-filtering
          disable-pagination
          disable-sort
          hide-default-footer
          :headers="headers_principal"
          :items="principal_repayments"
        >
          <template v-slot:no-data>
            <div>No Repayment Schedule</div>
          </template>
        </v-data-table>
        <br />
        <h1 class="headline mt-9">Fee Repayment Schedule</h1>
        <p class="display-regular text-center pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero itaque
          dolorem ducimus natus quas numquam, voluptate velit! Earum ea ducimus
          optio voluptates sed, ratione eum rerum et velit ut?
        </p>
        <br />
        <h3>Total fee amount: 50</h3>
        <br />
        <v-data-table
          disable-filtering
          disable-pagination
          disable-sort
          hide-default-footer
          :headers="headers_fees"
          :items="fee_repayments"
        >
          <template v-slot:no-data>
            <div>No Repayment Schedule</div>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  methods: {
    startAgain() {
      this.$store.dispatch("restartApp");
      this.$store.dispatch("basicInfo/restartApp");
      this.$store.dispatch("collateral/restartApp");
      this.$store.dispatch("fees/restartApp");
      this.$store.dispatch("gracePeriod/restartApp");
      this.$store.dispatch("grossWitholdingTax/restartApp");
      this.$store.dispatch("interestRate/restartApp");
      this.$store.dispatch("regularPaymentSchedule/restartApp");
      this.$router.push("/");
    }
  },
  data() {
    return {
      // feeItems: [
      //   { text: "Fixed", value: "fixed" },
      //   { text: "Percentage of Loan Size", value: "percentage" }
      // ],
      // oneOffRepeatItems: [
      //   { text: "One-off", value: "one-off" },
      //   { text: "Repeated", value: "repeated" }
      // ],
      // dialog: false,
      // editedIndex: -1,
      // editedItem: {
      //   name: "",
      //   type: "",
      //   fixed: "",
      //   percentage: "",
      //   onceOrRepeat: " ",
      //   start: "",
      //   repeats: "",
      //   finish: "",
      //   custom: ""
      // },
      // defaultItem: {
      //   start: "",
      //   interest: "",
      //   expressed: ""
      // },
      // max25chars: v => v.length <= 25 || "Input too long!",
      headers_interest: [
        {
          text: "Itemised by month",
          align: "center",
          value: "month"
        },
        {
          text: "Interest Repayment",
          align: "center",
          value: "value"
        }
      ],
      headers_principal: [
        {
          text: "Itemised by month",
          align: "center",
          value: "month"
        },
        {
          text: "Principal Repayment",
          align: "center",
          value: "value"
        }
      ],
      headers_fees: [
        {
          text: "Itemised by month",
          align: "center",
          value: "month"
        },
        {
          text: "Principal Repayment",
          align: "center",
          value: "value"
        }
      ],
      interest_repayments: [
        {
          month: 6,
          value: 7.1
        },
        {
          month: 12,
          value: 7.1
        },
        {
          month: 18,
          value: 7.1
        },
        {
          month: 24,
          value: 7.1
        }
      ],
      principal_repayments: [
        {
          month: 6,
          value: 7.1
        },
        {
          month: 12,
          value: 7.1
        }
      ],
      fee_repayments: [
        {
          month: 6,
          value: 7.1
        },
        {
          month: 12,
          value: 7.1
        }
      ]
    };
  }
  // computed: {
  //   ...mapGetters(["formSteps", "counter"]),
  //   feeCategories() {
  //     return this.$store.getters["fees/feeCategories"];
  //   },
  //   formTitle() {
  //     return this.editedIndex === -1 ? "New Fee Category" : "Edit Fee Category";
  //   }
  // },
  // watch: {
  //   dialog(val) {
  //     val || this.close();
  //   }
  // },
  // methods: {
  //   ...mapActions(["setCounter"]),
  //   previousPage() {
  //     this.$router.go(-1);
  //   },
  //   showForm() {
  //     if (this.feeCategories.length == 10) {
  //       return alert("Max categories reached. Please delete one and try again");
  //     }
  //     this.dialog = !this.dialog;
  //   },
  //   nextPage() {
  //     if (this.feeCategories.length == 0) {
  //       return alert("Please add a fee category");
  //     }
  //     this.$router.push(this.formSteps[this.counter + 1]);
  //   },

  //   editItem(item) {
  //     this.editedIndex = this.feeCategories.indexOf(item);
  //     this.editedItem = Object.assign({}, item);
  //     this.dialog = true;
  //   },

  //   deleteItem(item) {
  //     const index = this.feeCategories.indexOf(item);
  //     confirm("Are you sure you want to delete this item?") &&
  //       this.$store.dispatch("fees/deleteFeeCategory", index);
  //   },

  //   close() {
  //     this.dialog = false;
  //     setTimeout(() => {
  //       this.editedItem = Object.assign({}, this.defaultItem);
  //       this.editedIndex = -1;
  //       this.$refs.form.resetValidation();
  //     }, 300);
  //   },

  //   save() {
  //     if (this.editedIndex > -1) {
  //       this.$store.dispatch("fees/editFeeCategory", {
  //         item: this.editedItem,
  //         index: this.editedIndex
  //       });
  //     } else {
  //       this.$store.dispatch("fees/addFeeCategory", this.editedItem);
  //     }
  //     this.close();
  //   }
  // },
  // mounted() {
  //   const currentIndex = this.formSteps.indexOf(this.$route.path);
  //   this.setCounter(currentIndex);
  // }
};
</script>
