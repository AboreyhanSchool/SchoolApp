<template>
      <q-page >

          <q-input style="margin-top: 2%; margin-left: 60%;"
          v-model="search"
          :onkeyup="searching"
          filled
          placeholder="جست وجو"
          :hint=" 'معلم : ' + search+ ' ' + isFind"

       />

        <List  @removed="remove" @edited="edite"  :columns="columns" v-model:rows="rows" title="لیست معلم ها"  />
        <div style="">
        <q-btn :to='{name:"TeachersNew"}'  :style="{backgroundColor:'#8abc00'}" label="ثبت معلم جدید"></q-btn>

   <q-btn

        @click="deleteConfirm = true"
        color="red"
        label="حذف"
      />
    </div>
    <alert-dialog
    v-if="deleteConfirm"
    title="حذف معلم"
    message=" آیا از حذف معلم (ها) مطمئن هستید !! "
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
    name: "Firstname",
    align: "left",
    label: "نام ",
    field: "Firstname",
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
  {name:"edit",align:"left",label:"ویرایش",filed:"edit"}
];



export default {
  name:'teachers',
  setup(){
    return{
      selectedRows: ref([]),
      columns,
      rows: ref([]),
      btndel: ref(false),
      deleteConfirm: ref(false),
      search: ref(""),
      isFind: ref(""),


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
      const data = (await api.get(`/teachers`)).data;
      console.log(data);
      this.rows = typeof data === "object" ? data : false;
    },
    updateRowSelect(rowselect){
      console.log(rowselect)
      this.selectedRows = rowselect
    }
    ,
    async remove(NationalCode) {
      let Userdelete = "";
      console.log("S");

      if (this.rows.length > 0) {
        const removeResult = (
          await api.delete(`/teachers/`,{params :{nationalCode: NationalCode}})
        ).data;
        console.log(NationalCode)
        if (removeResult == "User deleted") {
          this.AlertDialog = true;

            let indexfordel = this.rows.findIndex((row) => {
              console.log(row);
              return row.NationalCode === NationalCode;
            });
            this.rows.splice(indexfordel, 1);
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
    edite(NationalCode){
      console.log(NationalCode)
      this.$router.push({ name: 'teacherEdit',params: { nationalCode: NationalCode } })
    },
   async searching(){
      if(this.search != ""){
        this.rows = (await api.get(`/teachers`)).data
        let ListFindSearch = []
        this.rows.forEach((row)=>{
        let RegexObj = new RegExp(`.*${this.search}.*`,"g")
        console.log(RegexObj)
        if(RegexObj.exec(row.Firstname) != undefined ){
          ListFindSearch.push(row)
        }
        if(RegexObj.exec(row.NationalCode) != undefined ){
          ListFindSearch.push(row)
        }
        if(RegexObj.exec(row.Lastname) != undefined ){
          ListFindSearch.push(row)
        }

        })
      if (ListFindSearch.length > 0) {
      console.log(ListFindSearch[0])
      console.log(this.rows)
      this.rows = ListFindSearch
      this.isFind = "پیدا شد"
      }else{
        this.rows = []
        this.isFind = "پیدا نشد"
      }

    }else{
      this.getdata()
      this.isFind = ""
      console.log("else")
    }
  }
  },
  components: {
    AlertDialog,
    SelectedAUser,
    List
  },

}
</script>

<style>

</style>
