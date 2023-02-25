<template>
  <div v-if="rows">
    <div class="q-pa-md">
      <q-table
        :title="title"
        :rows="rows"
        v-model="btndel"
        :columns="columns"
        row-key="NationalCode"
        :selected-rows-label="getSelectedRowsString"
        selection="multiple"
        v-model:selected="selectedrow"

      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";



export default {
  setup() {
    return {
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
  },
  watch:{
    selectedrow(){
      this.$emit("selected",this.selectedrow)
    }
  }

};
</script>
