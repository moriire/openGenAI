<script setup>
import { ref, watchEffect } from "vue";

// define component props for the slider component
const { label, caliber } = defineProps({
  label: {
    type: [String, Boolean],
    required: !true
  },
  caliber: {
    type: Number,
    default:0
  },
});

</script>
<template>
 


</template>
<style>

</style>
