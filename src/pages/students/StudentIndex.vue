<template>
  <q-page>
    {{ student.Firstname }}
    <br />
    <q-input label="Firstname" v-model="student.Firstname" />
    {{ student }}
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";
import { ref } from "@vue/reactivity";
export default {
  name: "studentIndex",
  setup() {
    return {
      student: ref({}),
      firstname: ref(""),
    };
  },
  beforeMount() {
    this.getStudent(this.$route.params.nationalCode);
  },
  methods: {
    async getStudent(nationalCode) {
      this.student = (await api.get(`/student/${nationalCode}`)).data;
      this.firstname = this.student.Firstname;
    },
  },
};
</script>

<style></style>
