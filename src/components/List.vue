<template>
  <div v-if="rows">
    <div class="q-pa-md">
      <q-table
        :title="title"
        :rows="rows"
        v-model="btndel"
        :columns="columns"
        row-key="NationalCode"
        :selected-rows-label="getSelectedRowsString"
        selection="multiple"
        v-model:selected="selectedRows"
      />
    </div>
    <q-btn
      :disable="!btndel"
      @click="deleteConfirm = true"
      color="red"
      label="حذف"
    />

    <alert-dialog
      v-if="deleteConfirm"
      title="حذف دانش آموز"
      :message=" 'مطمئن هستید (ها)'+ type+ 'آیا از حذف ' "
      bgColor="red"
      textColor="white"
    >
      <template v-slot:actions>
        <q-btn flat label="خیر" v-close-popup @click="deleteConfirm = false" />
        <q-btn flat label="بله" v-close-popup @click="deleted" />
      </template>
    </alert-dialog>
    <alert-dialog
      v-if="AlertDialog"
      title="حذف شد"
      message="برای بازگشت کلیک کنید."
      bgColor="green"
      textColor="white"
    >
      <template v-slot:actions>
        <q-btn flat label="باش" v-close-popup />
      </template>
    </alert-dialog>
    <selected-a-user v-if="SelectedAUser" />
  </div>

  <div v-else></div>
</template>

<script>
import { ref } from "vue";
import { api } from "src/boot/axios";
import AlertDialog from "components/AlertDialog.vue";
import SelectedAUser from "components/SelectedAUser.vue";

const columns = [
  {
    name: "desc",
    required: true,
    label: "نام",
    align: "left",
    field: (row) => row.Firstname,
    format: (val) => `${val}`,
    sortable: true,
  },

  {
    name: "Lastname",
    align: "left",
    label: "نام خوانوادگی",
    field: "Lastname",
  },
  {
    name: "NationalCode",
    align: "left",
    label: "کد ملی",
    field: "NationalCode",
  },
  { name: "BirthDate", align: "left", label: "روز تولد", field: "BirthDate" },
];

export default {
  setup() {
    return {
      selectedRows: ref([]),
      columns,
      rows: ref([]),
      btndel: ref(false),
      deleteConfirm: ref(false),

      // reacts //
      AlertDialog: ref(false),
      SelectedAUser: ref(false),
    };
  },
  props:{
    title:String,
    type:String,
    noaPost:String,
    noaGet:String,
  },


  beforeMount() {
    this.getdata();
  },

  methods: {
    async getdata() {
      const data = (await api.get(`/${this.noaGet}`)).data;
      console.log(typeof data);
      this.rows = typeof data === "object" ? data : false;
    },

    getSelectedRowsString() {
      if (this.selectedRows.length === 0) {
        this.btndel = false;
        return "";
      } else {
        this.btndel = true;
        return `${this.selectedRows.length} record${
          this.selectedRows.length > 1 ? "s" : ""
        } selected of ${this.rows.length}`;
      }
    },
    async deleted() {
      let Userdelete = "";
      console.log("S");

      var selectedUsers = this.selectedRows.map((x) => x.NationalCode);
      console.log("selectedUsers", selectedUsers);

      if (selectedUsers.length > 0) {
        const delResult = (
          await api.delete(`/del${this.noaPost}`, { data: selectedUsers })
        ).data;

        if (delResult == "User deleted") {
          this.AlertDialog = true;

          selectedUsers.forEach((user) => {
            let indexfordel = this.rows.findIndex((row) => {
              console.log(row);
              return row.NationalCode === user;
            });
            this.rows.splice(indexfordel, 1);
          });
        }

        function sleep(time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }
        sleep(3000).then(() => {
          this.AlertDialog = false;
          this.SelectedAUser = false;
        });
      } else {
        this.SelectedAUser = true;
      }
    },
  },
  components: {
    AlertDialog,
    SelectedAUser,
  },
};
</script>
