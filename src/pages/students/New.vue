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
    </div>
    <div class="row justify-end">
      <q-btn
        class="col-sm-3 col-xs-12"
        color="primary"
        label="ارسال"
        @click="sendStudent"
      />
    </div>
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";
import { ref } from '@vue/reactivity';
export default {
  setup() {
    return {
      student: ref({
        nationalCode:'',
        firstname:'',
        lastname:'',
        birthDate:'',
      }),
    };
  },
  methods: {
    async sendStudent() {
      let res = (await api.post("/student", this.student)).data;
    },
  },
};
</script>

<style></style>
