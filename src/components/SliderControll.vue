<script setup>
import { ref, watchEffect } from "vue";

// define component props for the slider component
const { min, max, step, modelValue } = defineProps({
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
  label: {
    type: [String, Boolean],
    required: true
  },
  caliber: {
    type: Number,
    default:0
  },
});

// define emits for the slider component
const emit = defineEmits(["update:modelValue"]);

// define refs for the slider component
const sliderValue = ref(modelValue);
const slider = ref(null);

// function to get the progress of the slider
const getProgress = (value, min, max) => {
  return ((value - min) / (max - min)) * 100;
};

// function to set the css variable for the progress
const setCSSProgress = (progress) => {
  slider.value.style.setProperty("--ProgressPercent", `${progress}%`);
};

// watchEffect to update the css variable when the slider value changes
watchEffect(() => {
  if (slider.value) {
    // emit the updated value to the parent component
    emit("update:modelValue", sliderValue.value);

    // update the slider progress
    const progress = getProgress(
      sliderValue.value,
      slider.value.min,
      slider.value.max
    );

    // define extrawidth to ensure that the end of progress is always under the slider thumb.
    let extraWidth = (100 - progress) / 10;

    // set the css variable
    setCSSProgress(progress + extraWidth);
  }
});
</script>
<template>
  <div class="form-group slider">
    <label :for="label" class="mb-2">{{ label }} : {{ caliber }}</label>
    <input
     :id="label"
      ref="slider"
      :value="sliderValue"
      @input="({ target }) => (sliderValue = parseFloat(target.value))"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      class="w-100"
    />
  </div>
</template>