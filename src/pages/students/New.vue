<template>
  <q-page class="q-pa-lg q-col-gutter-y-lg">
    <div>
      <q-toolbar-title class="flex flex-center" ><strong>دانش آموز </strong>جدید</q-toolbar-title>
      <hr>
    </div>
    <div class="row justify-between q-col-gutter-sm">

      <q-input class="col-sm-4 col-xs-12" outlined label="نام" />
      <q-input class="col-sm-4 col-xs-12" outlined label="نام خانوادگی" />
      <q-input class="col-sm-4 col-xs-12" outlined label="کد ملی" />
    </div>
    <div class="row justify-end ">
      <q-btn class="col-sm-3 col-xs-12" color="primary" label="ارسال" />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {}
  },
};
</script>

<style></style>
