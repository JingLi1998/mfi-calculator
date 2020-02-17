<template>
  <div>
    <div class="headline text-center">Variable Interest Rate</div>

    <v-data-table
      disable-filtering
      disable-pagination
      disable-sort
      hide-default-footer
      :headers="headers"
      :items="interestRates"
    >
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
                <v-text-field v-model="editedItem.start" label="Start of Period"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="editedItem.interest" label="Interest Rate"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="editedItem.expressed" label="Expressed"></v-text-field>
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
  </div>
</template>


<script>
export default {
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
          text: "Start of period (month)",
          align: "left",
          value: "start"
        },
        {
          text: "Interest Rate",
          align: "left",
          value: "interest"
        },
        {
          text: "Expressed",
          align: "left",
          value: "expressed"
        },
        {
          text: "Actions",
          value: "action"
        }
      ],
      interestRates: []
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