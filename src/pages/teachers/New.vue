<template>
  <q-page class="q-pa-lg q-col-gutter-y-lg">
    <div>
      <b>معلم جدید</b>
      <hr>
    </div>
    <div class="login-page ">
      <div class="form ">
        <form class="register-form q-pa-lg q-col-gutter-y-sm">
          <q-input v-model="teacher.firstname" type="text" outlined label="نام "/>
          <q-input v-model="teacher.lastname" type="text" outlined label="نام خوانوادگی"/>
          <q-input v-model="teacher.nationalCode" outlined label="کد ملی"/>
          <date-picker v-model="teacher.birthDate"  placeholder='تاریخ تولد شما ؟' min="1340/00/00" max="1402/00/00"></date-picker>
          <div>      <q-btn
        class="col-sm-3 col-xs-12"
        color="primary"
        label="حساب معلم ساخته شود"
        @click="sendTeacher"
      /></div>
        </form>
      </div>
    </div>

    <alert-dialog
      v-if="UserAdded"
      title="کاربر ازافه شد !"
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

      <alert-dialog
      v-if="UserFiledAdded"
      title="کاربری با این کد ملی وجود دارد !!"
      message="برای بازگشت کلیک کنید."
      bgColor="red"
      textColor="white">
        <template v-slot:actions>
        <q-btn flat label="باش" v-close-popup />
        </template>
      </alert-dialog>


  </q-page>
</template>

<script>
import DatePicker from 'vue3-persian-datetime-picker'
import {ref} from 'vue'
import {api} from 'src/boot/axios'
import AlertDialog from 'src/components/AlertDialog.vue';
export default {
  setup() {
    return {
      teacher: ref({
        nationalCode:'',
        firstname:'',
        lastname:'',
        birthDate:'',
      }),

      UserAdded:ref(false),
      UserNotAdded:ref(false),
      UserFiledAdded:ref(false)

    }
  },
  components:{
    DatePicker,
    AlertDialog
  },
  methods: {
    async sendTeacher() {
      if(this.teacher.birthDate != '' || this.teacher.firstname != '' || this.teacher.lastname != '' || this.teacher.nationalCode != ''){
        let res = (await api.post("/teacher", this.teacher)).data;
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
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: block;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: rgb(141,194,111);
  background: linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
