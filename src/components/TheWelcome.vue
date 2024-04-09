<script>
import axios from 'axios';
import moment from 'moment';
import TTS from 'text-to-speech-offline';
import { useVoiceSettingsStore } from '@/stores/counter';
import { ref } from 'vue';
export default {
  setup() {
    let controller;
    const glob = useVoiceSettingsStore();
    const disable = ref(false);
    const total_duration = ref(0);
    const prompt = ref("");
    const msg = ref('');
    const response = ref("");
    const formatTime = (x) => {
      return moment(x).seconds()
    }
    const getChat = async () => {
      disable.value = true;
      msg.value = prompt.value;
      prompt.value = "";
      controller = new AbortController();
      const signal = controller.signal;
      //const message = { role: 'user', content: msg.value };

      try {
        const res = await axios.post(`https://moriire-opengenai.hf.space/generate`,
          {
           "question": msg.value,
          
            },
       
          { signal }
        );    
       
        response.value = res.data.choices[0].message.content
      } catch (errors) {
        console.log(errors)
      }
      finally {
        disable.value = false
      }
    }

    const stopGen = () => {
      if (controller) {
        controller.abort();
        alert("Chat Aborted!!!")
      }
    };
    const tts = () => {
      TTS(response.value || 'nothing to talk about', { language: "english", volume: glob.voiceParams.vol, rate: glob.voiceParams.rate, pitch: glob.voiceParams.pitch })
    };

    const clearOutput = async () => {
      response.value = "";
      alert("cleared!!!")
    }

    const copyOutput = () => {
      let res = document.getElementById("cop")
      res.select();
      navigator.clipboard.writeText(res.value);

      // Alert the copied text
      alert("Copied to clipboard");
    }
    const copyQ = () => {
      let res = document.getElementById("prompt-msg")
      res.select();
      navigator.clipboard.writeText(res.value);

      // Alert the copied text
      alert("Copied to clipboard");
    }

    return {
      formatTime, glob, getChat, msg, prompt, response, disable, clearOutput, copyOutput, stopGen, copyQ, tts, total_duration
    }
  }
}
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
          <button class="btn btn-outline-warning" v-show="disable" @click="stopGen">
            <i class="bi bi-stop-fill"></i>
          </button>
          <button class="btn btn-outline-warning" @click="tts()" v-show="response">
            <i class="bi bi-mic-fill"></i>
          </button>

          <button data-bs-toggle-tooltip="Copy AI response" class="btn btn-outline-warning" v-show="response"
            @click="copyOutput">
            <i class="bi bi-clipboard"></i></button>
          <!--button title="Copy response to clipboard" data-bs-toggle="tooltip" data-bs-placement="top"
            class="btn btn-outline-warning" @click="copyOutput" v-show="response">Copy</button-->
          <button class="btn btn-outline-warning" @click="clearOutput" v-show="response">Clear</button>
        </div>
        <div class="col-4">
          <h2 class="text-light text-end" v-show="response">
            {{ total_duration.toFixed(2) }} T/s
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
          v-model="prompt" @keyup.enter="getChat()">
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
