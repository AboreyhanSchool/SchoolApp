<template>
  <div  v-if="weatherdata != null">
    <q-btn
      round
      dense
      flat
      color="red"
      v-if="$q.screen.gt.sm"

    >
      <q-avatar >
        <img  :src="iconweather" />
      </q-avatar>
      <q-badge :color="color" style="width: 30px; height: 10px;" text-color="white" floating> {{ c }} C </q-badge>
      <q-tooltip :class="`bg-${color}`"  transition-show="rotate"
      transition-hide="rotate" >
     <center><img style="width: 25px; height: 15px;" :src="flag_country" /></center>
      <p><i>شهر:</i> {{weatherdata.name}}</p>
      <p><i>هوا: </i>{{weatherdata.weather[0].description}}</p>
      <p><i>دما:</i> {{ c }} C</p>

      </q-tooltip>
    </q-btn>
  </div>
    <div v-else>
     <q-linear-progress  style="width: 20px;" dark rounded indeterminate color="secondary" class="q-mt-sm" />
    </div>
</template>

<script>
export default {
  name: "Weather",
  data() {
    return {
      weatherdata: null,
      api_ip:'https://api.ipgeolocation.io/ipgeo?apiKey=70760d689d964bbbb9d2476cb2e00f13&fields=city,country_flag&output=json',
      api_wheather:'https://api.openweathermap.org/data/2.5/',
      api_key_weather:"5354bc580fb88b747dd6ecf2e6a44e9e",
      city:"",
      your_ip:'',
      iconweatrher:null,
      flag_country:'',
      info:'',
      color:'',
      c: null,

    }
  },
  methods: {
    async fetchWeather(){

        await fetch(`${this.api_ip}`)
        .then(res =>{
          console.log(res)
          return res.json()
        })
        .then(response =>{
          this.city = response.city;
          this.flag_country = response.country_flag
          console.log(response)
        }).catch(res => console.log(res.message+'flag'))

        await fetch(`${this.api_wheather}weather?q=${this.city}&lang=fa&appid=${this.api_key_weather}`)
        .then(res =>{
          return res.json()
        }).then(response  => {

         this.weatherdata = response;
         this.c = Math.floor(response.main.temp - 273.15)
         this.iconweather = `https://openweathermap.org/img/wn/${response.weather[0].icon}.png`
         console.log(response)
         this.color= ((this.c > 8) ? 'red' : 'blue')
        }).catch(res => this.info = res.name)

      }

  },
  beforeMount(){
    this.fetchWeather()
  },
}
</script>

<style>

</style>
