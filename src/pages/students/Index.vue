<template>
  <q-page>
    <q-btn
      class="backcolor"
      label="دانش‌آموز جدید"

      :to="{ name: 'StudentsNew' }"
    />
    <!--  ListOfStudents  -->

    <List v-model:selected="selectedRows" @selected="updateRowSelect" :columns="columns" v-model:rows="rows" title="لیست دانش آموزان"  />

    <!--  ListOfStudents  /-->
    <q-btn

@click="deleteConfirm = true"
color="red"
label="حذف"
/>
<alert-dialog
v-if="deleteConfirm"
title="حذف معلم"
message=" آیا از حذف دانش آموز (ها) مطمئن هستید !! "
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

  </q-page>

</template>

<script>
import List from 'src/components/List.vue';
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
  name: "students",
  setup() {
    return{
      selectedRows: ref([]),
      columns,
      rows: ref([]),
      btndel: ref(false),
      deleteConfirm: ref(false),

      // reacts //
      AlertDialog: ref(false),
      SelectedAUser: ref(false),
    }
  },

  beforeMount() {
    this.getdata();
  },
  methods: {
    async getdata() {
      const data = (await api.get(`/students`)).data;
      console.log(typeof data);
      this.rows = typeof data === "object" ? data : false;
    },
    updateRowSelect(rowselect){
      console.log(rowselect)
      this.selectedRows = rowselect
    }
    ,
    async deleted() {
      let Userdelete = "";
      console.log("S");

      var selectedUsers = this.selectedRows.map((x) => x.NationalCode);
      console.log("selectedUsers", selectedUsers);

      if (selectedUsers.length > 0) {
        const delResult = (
          await api.delete(`/students`, { data: selectedUsers })
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
          this.deleteConfirm= false;

        });
      } else {
        this.deleteConfirm= false;
        this.SelectedAUser = true;
        this.AlertDialog = false;
      }
    },
  },
  components: {
    AlertDialog,
    SelectedAUser,
    List
  }
};
</script>

<style>
</style>
