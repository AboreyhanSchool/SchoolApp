<template>
  <div>
    <q-btn style="width: 85px; height: 10px" color="purple" label="حساب شما ">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">تنضیمات</div>
            <q-toggle
              v-model="shown"
              @update:model-value="updateWeather"
              label="آب و هوا"
            />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img
                alt="عکس"
                src="https://th.bing.com/th/id/OIP.tQWLYuBCSNBA59EGwzk_5ADIDI?pid=ImgDet&w=300&h=300&c=7"
              />
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">محل اسم</div>

            <q-btn color="primary" label="خروج" push size="sm" v-close-popup />
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import { useWeatherStore } from "src/stores/weather-store";
import { ref } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "Account",
  setup() {
    const weatherStore = useWeatherStore();
    let {isShow} = storeToRefs( weatherStore);
    return {
      weatherStore,
      shown: isShow,
      bluetooth: ref(false),
    };
  },
  methods: {
    updateWeather(value) {
      if (value) {
        this.weatherStore.show();
      } else {
        this.weatherStore.hide();
      }
    },
  },
};
</script>
<style></style>
