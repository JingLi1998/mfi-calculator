<template>
  <v-row style="height:100%" align="center" justify="center" class="px-3">
    <v-col cols="10" align="center" justify="center">
      <v-card
        style="border-radius:10px; background-color: #F5F9E9"
        raised
        height="100%"
        class="pa-10"
      >
        <div class="headline">Fees</div>
        <v-data-table
          style="background-color:#F5F9E9"
          disable-filtering
          disable-pagination
          disable-sort
          hide-default-footer
          :headers="headers"
          :items="fees"
        >
          <template v-slot:top>
            <v-btn color="primary" text @click="dialog = !dialog">Add New Item</v-btn>
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
          <template v-slot:top>
            <v-btn color="primary" text @click="dialog = !dialog">Add New Item</v-btn>
            <v-spacer />
          </template>

          <template v-slot:no-data>
            <div>No items</div>
          </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Start of Period"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.type" label="Interest Rate"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.fixed" label="Expressed"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.percentage" label="Start of Period"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.onceOrRepeat" label="Interest Rate"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.repeats" label="Expressed"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.finish" label="Start of Period"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.custom" label="Interest Rate"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
      dialog: false,
      editedIndex: -1,
      editedItem: {
        start: "",
        interest: "",
        expressed: ""
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
      ],
      fees: []
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Rate" : "Edit Rate";
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.interestRates.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.interestRates.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.interestRates.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.interestRates[this.editedIndex], this.editedItem);
      } else {
        this.interestRates.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>