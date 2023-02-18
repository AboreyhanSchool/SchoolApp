<template>
  <q-page>
    <q-btn
      class="backcolor"
      label="دانش‌آموز جدید"

      :to="{ name: 'StudentsNew' }"
    />
    <!--  ListOfStudents  -->

    <ListOfStudents />

    <!--  ListOfStudents  /-->

  </q-page>

</template>

<script>
import { ref } from 'vue'
import  ListOfStudents  from 'components/ListOfStudents.vue';

export default {
  name: "students",
  setup() {
    return {
      students: ref([]),
    };
  },
  components:{
    ListOfStudents
  }
};
</script>

<style>
</style>
