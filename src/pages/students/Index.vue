<template>
  <q-page>
    <q-btn
      class="backcolor"
      label="دانش‌آموز جدید"

      :to="{ name: 'StudentsNew' }"
    />
    <!--  ListOfStudents  -->

    <List title="لیست دانش آموزان" type="دانش آموز" noaGet="students" noaPost="student"  />

    <!--  ListOfStudents  /-->

  </q-page>

</template>

<script>
import { ref } from 'vue'
import  List  from 'src/components/List.vue';

export default {
  name: "students",
  setup() {
    return {
      students: ref([]),
    };
  },
  components:{
    List
  }
};
</script>

<style>
</style>
