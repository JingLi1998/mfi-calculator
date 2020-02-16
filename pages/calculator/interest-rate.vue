<template>
  <div>
    <div class="headline">Variable Interest Rate</div>
    <v-data-table
      hide-actions="true"
      disable-filtering
      disable-pagination
      disable-sort
      hide-default-footer
      :headers="headers"
      :items="interestRates"
    >
      <!-- <template v-slot:item.start="props">
        <v-edit-dialog
          :return-value.sync="props.item.start"
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          {{ props.item.start }}
          <template v-slot:input>
            <v-text-field
              v-model="props.item.start"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>-->
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snack: false,
      snackColor: "",
      snackText: "",
      max25chars: v => v.length <= 25 || "Input too long!",
      pagination: {},
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
        }
      ],
      interestRates: [
        {
          start: "",
          interest: "",
          expressed: ""
        }
      ]
    };
  },
  methods: {
    save() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Data saved";
    },
    cancel() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Canceled";
    },
    open() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Dialog opened";
    },
    close() {
      console.log("Dialog closed");
    }
  }
};
</script>