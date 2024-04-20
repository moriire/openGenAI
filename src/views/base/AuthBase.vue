<script setup>
import SliderControl from "@/components/SliderControll.vue"
import { useVoiceSettingsStore } from '@/stores/counter';
import axios from 'axios';
import { useAuthStore } from "@/stores/auth";
import { useRouter } from 'vue-router';
import { Typer } from 'vue3-typer';
import "vue3-typer/dist/vue-typer.css";
const params = useVoiceSettingsStore();
import {
    RouterLink,
    RouterView
} from 'vue-router'
const router = useRouter();
const user = useAuthStore();
axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
const reset = () => {
    localStorage.clear()
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="col-lg-6 .bg-light d-md-block d-none"
                style="background-image:url(src/assets/ai-2.png); height: 90vh; background-repeat: no-repeat; background-position: center; background-size: cover;" >
            </div>
            <div class="col-lg-6 row h-100">
                <div>
                    <h2 class="text-center text-white my-4">
                        open<span class="text-warning">GenAI</span>
                    </h2>
                    <p class="h4 text-light text-center">
                        <Typer
                            :text="['I am openGenAI', 'I was created to help Human', 'I can be your Personal Assistant', 'Watch out for more useful tools']"
                            erase-style='clear' repeat='Infinity'></Typer>
                    </p>
                </div>
                <div>
                    <RouterView />
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped>
.btn-close {
    --bs-btn-close-color: white;
    color: white !important;
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
.vue-typer {
    --char-typed-color: var(--bs-light);
    --char-selected-color: black;

    --char-typed-background-color: transparent;
    --char-selected-background-color: #ACCEF7;

    --caret-idle-color: black;
    --caret-typing-color: black;
    --caret-selecting-color: black;
    --caret-erasing-color: black;
    --caret-complete-color: black;

    cursor: default;
    user-select: none;
}
</style>