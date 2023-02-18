<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-red text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">کاربری با این کد ملی وجود دارد !!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          برای بازگشت کلیک کنید.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="باش" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name:"UserFiledAdded",
  setup () {
    return {
      persistent: ref(true)
    }
  },

}
</script>
