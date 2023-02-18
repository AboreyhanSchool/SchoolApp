<template>
<div v-if="rows">
  <div class="q-pa-md">
    <q-table
      title="لیست دانش آموزان"
      :rows="rows"
      v-model="btndel"
      :columns="columns"
      row-key="NationalCode"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      v-model:selected="selected"
    />

    <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div>
  </div>
  <q-btn
    v-if="btndel"
    @click="DelStudents"
    color="red"
    label="حذف"
    />
</div>

<div v-else></div>
</template>

<script>
import { ref } from 'vue'
import { api } from 'src/boot/axios'

const columns = [
  {

    name: 'desc',
    required: true,
    label: 'نام',
    align: 'left',
    field: row => row.Firstname,
    format: val => `${val}`,
    sortable: true
  },

  { name: 'Lastname',align: 'left', label: 'نام خوانوادگی', field: 'Lastname' },
  { name: 'NationalCode',align: 'left', label: 'کد ملی', field: 'NationalCode' },
  { name: 'BirthDate',align: 'left', label: 'روز تولد', field: 'BirthDate' },

 ]

const Getdata = (await api.get(`/students`)).data
console.log(typeof Getdata)
let rows = typeof Getdata === 'object' ? Getdata : false


export default {
  setup () {
    const selected = ref([])
    return {
      selected,
      columns,
      rows,
      btndel: ref(false),


      getSelectedString () {
        return selected.value.length === 0 ? '' : `${selected.value.length} record${selected.value.length > 1 ? 's' : ''} selected of ${rows.length}`
      },

      async DelStudents() {
      let Userdelete = ''
      console.log("S");
      let element= new Array()
      for (let index = 0; index < selected.value.length; index++) {
         element[index] = new Array(selected.value[index].NationalCode);

      }
      console.log(element)
      if( (await api.delete(`/delstudents`,{data:selected})).data == 'User deleted' ){
        console.log("del")

      }
      rows.forEach(element => {
          Userdelete += element+','
      });
      Userdelete = Userdelete.replace(/.$/, '')
      delete rows[Userdelete]
      console.log(rows)
      }
    }
  },
  watch: {
    btndel:()=>{
      if (this.btndel === false) {
        this.btndel = true
      }else{
        this.btndel = false
      }
    }
  },
  /*,
  beforeMount() {
    this.getStudents();
  },
  methods: {
    async DelStudents() {
      console.log("S");
      console.log((await api.get(`/delstudents`)).data);
      console.log("E");
    },
  }*/

}
</script>
