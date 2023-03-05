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
        <q-tr  @mouseover="showEdit(props.row)" @mouseleave="notshow(props.row)" :props="props"  @click="onRowClick(props.row)">
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
          <q-td id="edit" class="edit" key="NationalCode" :props="props">
              <q-btn  class="show"  color="red" label="حذف" />
              <q-btn  class="show"  color="green"  label="ویرایش" />
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
    showEdit(row){
      console.log(row)
      let columnElement =  this.$el.querySelector("#edit")
      console.log(columnElement)

      //columnelement[index].style.display = "block"


    },
    notshow(row){
      console.log(row)
      let columnElement =  this.$el.querySelector("#edit")
      console.log(columnElement)


      //columnElement[index].style.display = "none"


    }
  },
  watch:{
    selectedrow(){
      this.$emit("selected",this.selectedrow)
    }
  },

};
</script>
