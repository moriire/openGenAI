<script setup>
import axios from 'axios';
import moment from 'moment';
import TTS from 'text-to-speech-offline';
import { useVoiceSettingsStore } from '@/stores/counter';
import { useAuthStore } from "@/stores/auth";
import { ref } from 'vue';
import { useRouter} from 'vue-router';
import { useGenerateStore } from '../stores/generate';
const gen = useGenerateStore()
</script>

<template>
  <div class="row justify-content-center .align-items-center" style="height: 80vh;">
    <div id="gensys" v-show="response" class="col-lg-10 col-md-10 col-sm-10 col-xs-12 mx-2 my-2 fs-4">
      {{ response }}
    </div>
  </div>
  <div
    class="row justify-content-center .align-items-center position-sticky sticky-bottom .start-50 .bottom-0 .translate-middle-x">

    <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
      <div class="row justify-content-between my-2">
        <div class="col-8">
          <button class="btn btn-outline-warning" v-show="gen.disable" @click="gen.stopGen">
            <i class="bi bi-stop-fill"></i>
          </button>
          <button class="btn btn-outline-warning" @click="gen.tts()" v-show="gen.response">
            <i class="bi bi-mic-fill"></i>
          </button>

          <button data-bs-toggle-tooltip="Copy AI response" class="btn btn-outline-warning" v-show="response"
            @click="gen.copyOutput">
            <i class="bi bi-clipboard"></i></button>
          <!--button title="Copy response to clipboard" data-bs-toggle="tooltip" data-bs-placement="top"
            class="btn btn-outline-warning" @click="copyOutput" v-show="response">Copy</button-->
          <button class="btn btn-outline-warning" @click="gen.clearOutput" v-show="response">Clear</button>
        </div>
        <div class="col-4">
          <h2 class="text-light text-end" v-show="gen.response">
            {{ gen.total_duration.toFixed(2) }} T/s
          </h2>
        </div>
      </div>
      <div class="input-group">
        <!--button class="input-group-text bg-warning text-dark" id="basic" @click="tts()">
          <i class="bi bi-mic-fill"></i>
      </button-->
        <button class="input-group-text bg-warning text-dark" id="basic" v-show="disable">
          <span class="spinner-border spinner-border-sm" aria-hidden="true">
          </span>
        </button>
        <input class="form-control" aria-describedby="basic" placeholder="I am your AI Doctor. How are you feeling?"
          v-model="prompt" @keyup.enter="gen.getChat()">
        <button class="input-group-text bg-warning text-dark" id="basic" @click="getChat()">
          <i class="bi bi-play-fill"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
textarea {
  outline-color: yellow;
}

div#gensys {
  overflow-y: scroll;
  white-space: pre-line;
  color: yellow !important;
  max-height: 80vh;
}
</style>
