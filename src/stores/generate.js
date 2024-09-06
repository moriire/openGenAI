import { ref } from 'vue'
import { defineStore } from 'pinia';
import axios from 'axios';
import moment from 'moment';
import { useAuthStore } from "@/stores/auth";
import TTS from 'text-to-speech-offline';
import { useVoiceSettingsStore } from '@/stores/counter.js';
import router from '../router';
export const useGenerateStore = defineStore('generate', () => {
  let controller;
  
  const user = useAuthStore()
  const glob = useVoiceSettingsStore();
  const disable = ref(false);
  const total_duration = ref(0);
  const prompt = ref("");
  const msg = ref("");
  const response = ref("");
  const formatTime = (x) => {
    return moment(x).seconds()
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

  const getChat = async () => {
    disable.value = true;
    msg.value = prompt.value;
    prompt.value = "";
    controller = new AbortController();
    const signal = controller.signal;
    //const message = { role: 'user', content: msg.value };

    try {
      const res = await axios.post(`https://moriire-opengenai.hf.space/llm/generate`,
        {
          "question": msg.value,

          "temperature": glob.modelParams.temperature,
          "top_k": glob.modelParams.top_k,
          "n_ctx": glob.modelParams.n_ctx,
          "seed": glob.modelParams.seed,
        },

        { signal }
      );

      response.value = res.data.choices[0].message.content
    } catch (errors) {
      console.log(errors)
     
        user.logout()
        router.push('/auth/login')
      
    }
    finally {
      disable.value = false
    }
  }

  return {
    formatTime, 
    getChat, 
    msg, prompt, response, disable, 
    stopGen,
    tts, 
    total_duration
  }
})