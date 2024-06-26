import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
//import axios from 'axios';
//import { useAuthStore } from './auth';

export const useVoiceSettingsStore = defineStore('voice', () => {
   
 //model parameter settings
//const user = useAuthStore();
 const temperature = computed(() => getParam('modelparams', 'temperature') || 0.7)
 const top_p = computed(() => getParam('modelparams', 'top_p') || 1)
 const top_k = computed(() => getParam('modelparams', 'top_k') || 1)
 const n_ctx = computed(() => getParam('modelparams', 'n_ctx'))
 const seed = computed(() => getParam('modelparams', 'seed') || 101)
 const repeat_penalty = computed(() => getParam('modelparams', 'repeat_penalty') || 1.1)
 // end parameter

  //voice
  const volume = computed(() => getParam('voice', 'vol') || 20)
  const rate = computed(() => getParam('voice', 'rate') || 1)
  const pitch = computed(() => getParam('voice', 'pitch') || 1)
  const model = computed(() => getParam('model', 'model'))
  const modelParams = reactive({temperature: temperature.value, seed: seed.value, top_k: top_k.value, top_p: top_p.value, n_ctx: n_ctx.value}) // JSON.parse(localStorage.getItem('modelparams'))
  const voiceParams = reactive({ vol: volume.value, rate: rate.value, pitch: pitch.value})

 //Model settings
 const selectedModel = ref(localStorage.getItem('model'));


 const selectModel = ()=>{
  window.alert(selectedModel.value)
  localStorage.setItem('model', selectedModel.value)
}
 //end model settings
  const changeVoiceParams = () => {
    localStorage.removeItem('voice')
    localStorage.setItem('voice', JSON.stringify(voiceParams))
    console.log('params changed')
  }
  const changeModelParams = () => {
    localStorage.removeItem('modelparams')
    localStorage.setItem('modelparams', JSON.stringify(modelParams))
    console.log('params changed')
  }
  
  function getParam(p, q) {
    if (localStorage.getItem(p)){
      return JSON.parse(localStorage.getItem(p))[q]
    }
    return null
  }
  
  return { getParam, volume, rate, changeVoiceParams, changeModelParams, modelParams, voiceParams,
  //models settings
  selectedModel,
  selectModel,
  model,
  temperature,
  top_p,
  top_k,
  n_ctx,
  repeat_penalty,
  seed
  }
})
