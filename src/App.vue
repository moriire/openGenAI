<script setup>
import SliderControl from "@/components/SliderControll.vue"
import { useVoiceSettingsStore } from '@/stores/counter';
import axios from 'axios';
import { useAuthStore } from "@/stores/auth";
import { useRouter} from 'vue-router';
const params = useVoiceSettingsStore();
import {
  RouterLink,
  RouterView
} from 'vue-router'
const router = useRouter();
    const user = useAuthStore();
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
const reset = ()=>{
  localStorage.clear()
}
</script>

<template>
  
        <RouterView />
   
</template>

<style .scoped>
.btn-close{
--bs-btn-close-color: white;
color: white !important;
}
* {
  box-sizing: border-box !important;
}
body,
div.cont {
  background-color: black;
  height: 100vh;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--bs-warning)
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>