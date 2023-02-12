<template>
  <div>
    <q-btn style="width: 85px; height: 10px" color="purple" label="حساب شما ">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">تنضیمات</div>
            <q-toggle v-model="weather" label="آب و هوا" />
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

export default {
  name: "Account",
  props: {
    OnOff: Function,
  },
  setup() {
    const weatherStore = useWeatherStore;
    return {
      weatherStore,
      weather: ref(true),
      bluetooth: ref(false),
    };
  },
  mounted() {
    console.log('shown',this.weatherStore.isShow);
    this.weather = this.weatherStore.isShow;
  },
  watch: {
    weather() {
      if (this.weather) {
        this.weatherStore.show();
      } else {
        this.weatherStore.hide();
      }
      this.$emit("OnOffWrather", this.weather);
      console.log("helloo");
    },
  },
};
</script>
<style></style>
