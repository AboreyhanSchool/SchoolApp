<template>
  <div v-if="rows">
    <div class="q-pa-md">
      <q-table
        title="لیست دانش آموزان"
        :rows="rows"
        v-model="btndel"
        :columns="columns"
        row-key="NationalCode"
        :selected-rows-label="getSelectedString"
        selection="multiple"
        v-model:selected="selected"
      />
    </div>
    <q-btn v-if="btndel" @click="DelStudents" color="red" label="حذف" />

    <user-deleted v-if="UserDeleted" />
    <selected-a-user v-if="SelectedAUser" />


  </div>

  <div v-else></div>
</template>

<script>
import { ref } from "vue";
import { api } from "src/boot/axios";
import UserDeleted from 'components/UserDeleted.vue'
import SelectedAUser from 'components/SelectedAUser.vue'

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
      selected: ref([]),
      columns,
      rows: ref([]),
      btndel: ref(false),

      // reacts //
      UserDeleted:ref(false),
      SelectedAUser:ref(false),
    };
  },

  beforeMount() {
    this.getdata();
  },

  methods: {
    // async DelStudents() {
    //   console.log("S");
    //   console.log((await api.get(`/delstudents`)).data);
    //   console.log("E");
    // },

    async getdata() {
      const data = (await api.get(`/students`)).data;
      console.log(typeof data);
      this.rows = typeof data === "object" ? data : false;
    },

    getSelectedString() {
      if (this.selected.length === 0) {
        this.btndel = false;
        return "";
      } else {
        this.btndel = true;
        return `${this.selected.length} record${
          this.selected.length > 1 ? "s" : ""
        } selected of ${this.rows.length}`;
      }
    },

    async DelStudents() {
      let Userdelete = "";
      console.log("S");

      var selectedStudents = this.selected.map((x) => x.NationalCode);
      console.log("selectedStudents", selectedStudents);

      const delResult = (
        await api.delete(`/delstudents`, { data: selectedStudents })
      ).data;

      if (delResult == "User deleted") {
        this.UserDeleted = true
      }
      if(delResult == "select a user"){
        this.SelectedAUser = true
      }
      function sleep (time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }
      sleep(3000).then(() => {
          this.UserDeleted = false
          this.SelectedAUser = false

      });
    },
  },
  components:{
    UserDeleted,
    SelectedAUser
  }
};
</script>
