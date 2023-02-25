<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="persistent"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card
        :class="'bg-' + bgColor + ' text-' + textColor"
        style="width: 300px"
      >
        <q-card-section>
          <div class="text-h6">{{ title }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ message }}
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <slot name="actions">

          </slot>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "UserNotAdded",
  props: {
    title:String,
    message:String,
    bgColor:String,
    textColor:String,
  },
  setup() {
    return {
      persistent: ref(true),
    };
  },
};
</script>
