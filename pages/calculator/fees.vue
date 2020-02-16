<template>
  <div>
    <div class="headline">Fees</div>
    <v-data-table
      disable-filtering
      disable-pagination
      disable-sort
      hide-actions
      hide-default-footer
      :headers="headers"
      :items="fees"
    >
      <template v-slot:item.name="props">
        <v-edit-dialog
          :return-value.sync="props.item.name"
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          {{ props.item.name }}
          <template v-slot:input>
            <v-text-field
              v-model="props.item.name"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
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
        }
      ],
      fees: [
        {
          name: "",
          type: "",
          fixed: "",
          percentage: "",
          onceOrRepeat: "",
          repeats: "",
          finish: "",
          custom: ""
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