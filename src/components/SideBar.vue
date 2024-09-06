<script>
import "alertifyjs/build/css/alertify.min.css";
import SliderControl from "./SliderControll.vue";
import { useVoiceSettingsStore } from '../stores/counter.js';
import { useGenerateStore } from "../stores/generate.js";
import { useAuthStore } from "@/stores/auth.js"
import {
  RouterLink,
} from 'vue-router'
export default {
  components: { RouterLink, SliderControl },

  setup() {
    const authStore = useAuthStore()
    const gen = useGenerateStore();
    const showMessage = async () => {
      await alertify.alert('openGenAI', `Response mode changed to ${resMode.value}`)
    }
    const params = useVoiceSettingsStore();
    return {
      params,
      SliderControl,
      RouterLink,
      showMessage,
      gen,
      authStore
    }
  }

}

</script>
<template>
  <div class="nav flex-column nav-pills nav-warning me-3 mt-4" role="tablist" aria-orientation="vertical">
    <template v-if="authStore.token">
    <RouterLink class="nav-link" to="/gen">Home</RouterLink>
    <hr class="text-white">
  </template>
  <template v-else>
    <RouterLink class="nav-link" to="/">Home</RouterLink>
    <hr class="text-white">
  </template>
    <RouterLink class="nav-link" to="/chat" type="button">Chat</RouterLink>
    <hr class="text-white">
    <div class="col-lg-12 my-2">
      <div class="nav flex-column nav-pills nav-warning">
        <div class="collapse show" id="modelParameter">
          <div class="row justify-content-center">
            <div class="col-12 my-2">
              <SliderControl v-model="params.modelParams.temperature" label="Temperature" :min="0" :max="1" :step=".1"
                @change="params.changeModelParams" :caliber="params.modelParams.temperature" />
            </div>
            <div class="col-lg-12 my-2">
              <SliderControl v-model="params.modelParams.top_p" label="Top_p" :min="0" :max="1.0" :step="0.05"
                @change="params.changeModelParams" :caliber="params.modelParams.top_p" />
            </div>
            <div class="col-lg-12 my-2">
              <SliderControl v-model="params.modelParams.top_k" label="Top_k" :min="0" :max="100" :step="5"
                @change="params.changeModelParams" :caliber="params.modelParams.top_k" />
            </div>
            <div class="col-lg-12 my-2">
              <SliderControl v-model="params.modelParams.n_ctx" label="num_ctx" :min="126" :max="8192" :step="126"
                @change="params.changeModelParams" :caliber="params.modelParams.n_ctx" />
            </div>


          </div>
        </div>
      </div>
    </div>
    <hr class="text-white">

  </div>
</template>
<style>
@media (prefers-color-scheme: dark) {
  div .sidebar {
    color: var(--bs-primary-text-emphasis);
    background-color: red !important;
  }
}
</style>