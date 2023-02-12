<template>
  <q-page>
    <q-btn
      label="دانش‌آموز جدید"
      :style="{ backgroundColor: '#8abc00' }"
      :to="{ name: 'StudentsNew' }"
    />
    <div class="row" v-for="(student, index) in students" :key="index">
      {{ student }}
    </div>
  </q-page>
</template>

<script>
export default {
  name: "students",
  setup() {
    return {
      students: ref([]),
    };
  },
  beforeMount() {
    this.getStudents();
  },
  methods: {
    async getStudents(nationalCode) {
      this.students = (await api.get(`/students`)).data;
    },
  },
};
</script>

<style></style>
