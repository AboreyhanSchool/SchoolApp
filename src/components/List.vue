<template>
  <div v-if="rows">
    <div class="q-pa-md">

      <q-table
      :title="title"
      :rows="rows"
      :columns="columns"
      row-key="NationalCode"
    >
      <template v-slot:body="props">
        <q-tr  @mouseover="showEdit(props.row.NationalCode)" @mouseleave="notshow(props.row.NationalCode)" :props="props" >
          <q-td key="Firstname" :props="props">
            <q-badge color="green">
              {{ props.row.Firstname }}
            </q-badge>
          </q-td>
          <q-td key="Lastname" :props="props">
            <q-badge color="purple">
              {{ props.row.Lastname }}
            </q-badge>
          </q-td>
          <q-td key="NationalCode" :props="props">
            <q-badge color="orange">
              {{ props.row.NationalCode }}
            </q-badge>
          </q-td>
          <q-td key="BirthDate" :props="props">
            <q-badge color="green">
              {{ props.row.BirthDate }}
            </q-badge>
          </q-td>
          <q-td style="display: none;" :id="'E'+props.row.NationalCode" key="edit" :props="props">
              <q-btn @click="removed(props.row.NationalCode)" color="red" label="حذف" />
              <q-btn @click="edited(props.row.NationalCode)"  color="green"  label="ویرایش" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";


export default {
  setup() {
    return {
      onRowClick: (row) => alert(`${row.NationalCode} clicked`),
      selectedrow:ref([]),
      btndel:ref(true),
    };
  },
  props:{
    title:String,
    rows:Array,
    columns:Array,
  },
  methods:{

    getSelectedRowsString() {
      if (this.selectedrow.length === 0) {
        this.btndel = false;
       // this.$emit('seled',[])

      } else {
        this.btndel = false;
        //this.$emit('seled',this.s)
        return `${this.selectedrow.length} record${
          this.selectedrow.length > 1 ? "s" : ""
        } selected of ${this.rows.length}`;
      }
    },
    showEdit(NationalCode){
      let columnElement =  this.$el.querySelector(`#E${NationalCode}`)

      columnElement.style.display = "block"


    },
    notshow(NationalCode){

      let columnElement =  this.$el.querySelector(`#E${NationalCode}`)

      columnElement.style.display = "none"


    },
    removed(NationalCode){
      let ForvardNationalCode = NationalCode
      this.$emit("removed",ForvardNationalCode)
    },
    edited(NationalCode){
      let ForvardNationalCode = NationalCode
      this.$emit("edited", ForvardNationalCode)
    }
  },
  watch:{
    selectedrow(){
      this.$emit("selected",this.selectedrow)
    }
  },

};
</script>
