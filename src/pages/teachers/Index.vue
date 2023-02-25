<template>
      <q-page class="flex flex-center">
          <q-btn :to='{name:"TeachersNew"}'  :style="{backgroundColor:'#8abc00'}" label="ثبت معلم جدید"></q-btn>

        <List title="لیست معلم ها" type="معلم" noaGet="teachers" noaPost="teacher" />
      </q-page>
</template>

<script>
import List from 'src/components/List.vue';
export default {
  name:'teachers',
  setup(){

  },
  components:{
    List
  }

}
</script>

<style>

</style>
