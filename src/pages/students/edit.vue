<template>
  <q-page class="q-pa-lg q-col-gutter-y-lg">
    <div>
      <q-toolbar-title class="flex flex-center"
        ><strong>دانش آموز ویرایش</strong></q-toolbar-title
      >
      <hr />
    </div>
    <div class="row justify-between q-col-gutter-sm">
      <q-input
        class="col-sm-4 col-xs-12"
        outlined
        label="نام"
        v-model="student.Firstname"
      />
      <q-input
        class="col-sm-4 col-xs-12"
        outlined
        label="نام خانوادگی"
        v-model="student.Lastname"
      />
      <q-input
        class="col-sm-4 col-xs-12"
        outlined
        label="کد ملی"
        v-model="student.NationalCode"
      />
    <date-picker  placeholder='تاریخ تولد شما ؟' min="1340/00/00" max="1402/00/00" v-model="student.BirthDate"></date-picker>
  </div>
    <div class="row justify-end">
      <q-btn
        class="col-sm-3 col-xs-12"
        color="green"
        label="ویرایش"
        @click="editTeacher"
      />
      <alert-dialog
      v-if="UserAdded"
      title="کاربر ویرایش شد !"
      message="برای بازگشت کلیک کنید."
      bgColor="green"
      textColor="white">
        <template v-slot:actions>
        <q-btn flat label="باش" v-close-popup />
        </template>
      </alert-dialog>

      <alert-dialog
      v-if="UserNotAdded"
      title="کل فورم را پر کنید !!"
      message="برای بازگشت کلیک کنید."
      bgColor="red"
      textColor="white">
        <template v-slot:actions>
        <q-btn flat label="باش" v-close-popup />
        </template>
      </alert-dialog>



    </div>
  </q-page>
</template>

<script>
import { ref } from '@vue/reactivity';
import AlertDialog from "components/AlertDialog.vue";
import DatePicker from 'vue3-persian-datetime-picker'
import studentApi from "src/api/studentApi/studentApi";

export default {
  setup() {
    return {
      student: ref({
        NationalCode:'',
        Firstname:'',
        Lastname:'',
        BirthDate:'',

      }),

      UserAdded:ref(false),
      UserNotAdded:ref(false),
    };
  },
  components:{
    DatePicker,
    AlertDialog,
  },
  async beforeMount(){
    let {nationalCode} = this.$route.params
    console.log(nationalCode)
    this.student = await studentApi.studentGet(nationalCode)


  },
  methods: {
    async editTeacher() {
      if(this.student.BirthDate != '' || this.student.Firstname != '' || this.student.Lastname != '' || this.student.NationalCode != ''){
        let res = await studentApi.studentPut(this.student.NationalCode,this.student);
        console.log(res)
        if(res === true){
          this.UserAdded = true
        }

      }else{
          this.UserNotAdded = true
      }
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }
      sleep(5000).then(() => {
          this.UserNotAdded = false
          this.UserAdded = false
          this.UserFiledAdded = false
      })
    }
  }
}
</script>

<style scoped>
.brithday{
  text-align-last: right;
}

</style>
