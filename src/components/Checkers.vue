<script setup>
import { ref, watchEffect } from "vue";

// define component props for the slider component
const { label, modelValue } = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: [String, Boolean],
    required: true
  },
});
</script>
<template>

  <div class="form-group">
    <input :v-model="modelValue" type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
    <label class="btn btn-outline-warning" for="btn-check-outlined">{{ label }}</label><br>
  </div>
</template>