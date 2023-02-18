<template>
  <q-page class="q-pa-lg q-col-gutter-y-lg">
    <div>
      <q-toolbar-title class="flex flex-center"
        ><strong>دانش آموز </strong>جدید</q-toolbar-title
      >
      <hr />
    </div>
    <div class="row justify-between q-col-gutter-sm">
      <q-input
        class="col-sm-4 col-xs-12"
        outlined
        label="نام"
        v-model="student.firstname"
      />
      <q-input
        class="col-sm-4 col-xs-12"
        outlined
        label="نام خانوادگی"
        v-model="student.lastname"
      />
      <q-input
        class="col-sm-4 col-xs-12"
        outlined
        label="کد ملی"
        v-model="student.nationalCode"
      />
    <date-picker  placeholder='تاریخ تولد شما ؟' min="1340/00/00" max="1402/00/00" v-model="student.birthDate"></date-picker>
  </div>
    <div class="row justify-end">
      <q-btn
        class="col-sm-3 col-xs-12"
        color="primary"
        label="ارسال"
        @click="sendStudent"
      />

      <user-added  v-if="UserAdded" />
      <user-not-added  v-if="UserNotAdded"/>
      <user-filed-added v-if="UserFiledAdded" />
    </div>
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";
import { ref } from '@vue/reactivity';
import UserAdded from 'components/UserAdded.vue'
import UserNotAdded from 'components/UserNotAdded.vue'
import UserFiledAdded from 'components/UserFiledAdded.vue'
import DatePicker from 'vue3-persian-datetime-picker'
export default {
  setup() {
    return {
      student: ref({
        nationalCode:'',
        firstname:'',
        lastname:'',
        birthDate:'',

      }),

      UserAdded:ref(false),
      UserNotAdded:ref(false),
      UserFiledAdded:ref(false)
    };
  },
  components:{
    DatePicker,
    UserAdded,
    UserNotAdded,
    UserFiledAdded
  },
  methods: {
    async sendStudent() {
      if(this.student.birthDate != '' || this.student.firstname != '' || this.student.lastname != '' || this.student.nationalCode != ''){
        let res = (await api.post("/student", this.student)).data;
        if(res === true){
          this.UserAdded = true
        }else{
          this.UserFiledAdded = true
        }

      }else{
          this.UserNotAdded = true
      }
      function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }
      sleep(3000).then(() => {
          this.UserNotAdded = false
          this.UserAdded = false
          this.UserFiledAdded = false
      });


    },
  }
};
</script>

<style scoped>
.brithday{
  text-align-last: right;
}

</style>
