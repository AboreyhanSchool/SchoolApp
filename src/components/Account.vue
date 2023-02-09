<template>
  <div >
    <q-btn style="width: 85px; height: 10px;" color="purple" label="حساب شما ">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">تنضیمات</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img alt="عکس" src="https://th.bing.com/th/id/OIP.tQWLYuBCSNBA59EGwzk_5ADIDI?pid=ImgDet&w=300&h=300&c=7">
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">محل اسم</div>

            <q-btn
              color="primary"
              label="خروج"
              push
              size="sm"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name:'Account',
  setup () {
    return {
      mobileData: ref(true),
      bluetooth: ref(false)
    }
  }
}
</script>
<style>
</style>
