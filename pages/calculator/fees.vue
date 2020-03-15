<template>
  <v-col cols="10" align="center" justify="center">
    <div class="headline">Fees</div>
    <div class="display-regular text-center py-3">
      Add one fee for each fee category. For example, a recurring fee charged
      annually is one fee category. You can enter up to ten fee categories
      below.
    </div>
    <v-data-table
      disable-filtering
      disable-pagination
      disable-sort
      hide-default-footer
      :headers="headers"
      :items="feeCategories"
    >
      <template v-slot:footer>
        <v-btn color="primary" text @click="showForm">Add New Fee</v-btn>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>

      <template v-slot:no-data>
        <div>No Fees</div>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="60%">
      <v-card color="success">
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-form ref="form">
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field v-model="editedItem.name" label="Fee Name" />
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    v-model="editedItem.type"
                    :items="feeItems"
                    label="Fee Type"
                    :rules="[v => !!v || 'Item is required']"
                    required
                  />
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.fixed"
                    label="Fixed Amount"
                    suffix="MMK"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.percentage"
                    label="Percentage Amount"
                    suffix="%"
                  />
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    v-model="editedItem.onceOrRepeat"
                    :items="oneOffRepeatItems"
                    label="One-off or Repeat"
                    :rules="[v => !!v || 'Item is required']"
                    required
                  />
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.start"
                    label="Starting From"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.repeats"
                    label="Repeats every"
                  />
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.finish"
                    label="Finishing date"
                  />
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.custom"
                    label="Custom Input Month"
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="close">Cancel</v-btn>
          <v-btn color="primary" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div>
      <nuxt-link to="/" tag="span">
        <v-btn
          text
          class="display-regular-1"
          @click="previousPage"
          color="primary"
          v-text="'Back'"
        />
      </nuxt-link>
      <v-btn
        v-if="counter != formSteps.length - 1"
        text
        class="display-regular-1"
        color="primary"
        @click="nextPage"
        v-text="'Click here to continue'"
      />
    </div>
  </v-col>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      feeItems: [
        { text: "Fixed", value: "fixed" },
        { text: "Percentage of Loan Size", value: "percentage" }
      ],
      oneOffRepeatItems: [
        { text: "One-off", value: "one-off" },
        { text: "Repeated", value: "repeated" }
      ],
      dialog: false,
      editedIndex: -1,
      editedItem: {
        name: "",
        type: "",
        fixed: "",
        percentage: "",
        onceOrRepeat: " ",
        start: "",
        repeats: "",
        finish: "",
        custom: ""
      },
      defaultItem: {
        start: "",
        interest: "",
        expressed: ""
      },
      max25chars: v => v.length <= 25 || "Input too long!",
      headers: [
        {
          text: "Fee Name",
          align: "left",
          value: "name"
        },
        {
          text: "Fee Type",
          align: "left",
          value: "type"
        },
        {
          text: "Fixed Amount",
          align: "left",
          value: "fixed"
        },
        {
          text: "Percentage Amount",
          align: "left",
          value: "percentage"
        },
        {
          text: "One-off or Repeated?",
          align: "left",
          value: "onceOrRepeat"
        },
        {
          text: "Starting from?",
          align: "left",
          value: "start"
        },
        {
          text: "Repeats Every",
          align: "left",
          value: "repeats"
        },
        {
          text: "Finishing Date",
          align: "left",
          value: "finish"
        },
        {
          text: "Custom Input Month",
          align: "left",
          value: "custom"
        },
        { text: "Actions", value: "action" }
      ]
    };
  },
  computed: {
    ...mapGetters(["formSteps", "counter"]),
    feeCategories() {
      return this.$store.getters["fees/feeCategories"];
    },
    formTitle() {
      return this.editedIndex === -1 ? "New Fee Category" : "Edit Fee Category";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    ...mapActions(["setCounter"]),
    previousPage() {
      this.$router.go(-1);
    },
    showForm() {
      if (this.feeCategories.length == 10) {
        return alert("Max categories reached. Please delete one and try again");
      }
      this.dialog = !this.dialog;
    },
    nextPage() {
      if (this.feeCategories.length == 0) {
        return alert("Please add a fee category");
      }
      this.$router.push(this.formSteps[this.counter + 1]);
    },

    editItem(item) {
      this.editedIndex = this.feeCategories.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.feeCategories.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.$store.dispatch("fees/deleteFeeCategory", index);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        this.$refs.form.resetValidation();
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        this.$store.dispatch("fees/editFeeCategory", {
          item: this.editedItem,
          index: this.editedIndex
        });
      } else {
        this.$store.dispatch("fees/addFeeCategory", this.editedItem);
      }
      this.close();
    }
  },
  mounted() {
    const currentIndex = this.formSteps.indexOf(this.$route.path);
    this.setCounter(currentIndex);
  }
};
</script>
