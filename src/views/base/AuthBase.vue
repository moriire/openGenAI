<script setup>
//import { useVoiceSettingsStore } from '@/stores/counter';
import axios from 'axios';
import { useAuthStore } from "../../stores/auth.js";
import { Typer } from 'vue3-typer';
import "vue3-typer/dist/vue-typer.css";
import {
    RouterView
} from 'vue-router'
const user = useAuthStore();
axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

</script>

<template>
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="col-lg-6 .bg-light d-md-block d-none"
                style="background-image:url(ai-2.png); height: 90vh; background-repeat: no-repeat; background-position: center; background-size: cover;" >
            </div>
            <div class="col-lg-6 row h-100 py-4">
                <div>
                    <h2 class="text-center my-4">
                        open<span class="text-warning">GenAI</span>
                    </h2>
                    <p class="h4 text-center">
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

[data-bs-theme="dark"] .vue-typer{
    --char-typed-color: var(--bs-light) !important;
}
[data-bs-theme="light"] .vue-typer{
    --char-typed-color: var(--bs-dark) !important;
}
/*
.vue-typer {
    --char-typed-color: var(--bs-dark);
    --char-selected-color: black;
    --char-typed-background-color: transparent;
    --char-selected-background-color: #ACCEF7;

    --caret-idle-color: black;
    --caret-typing-color: var(--bs-dark);
    --caret-selecting-color: black;
    --caret-erasing-color: black;
    --caret-complete-color: var(--bs-dark);

    cursor: default;
    user-select: none;
}*/
</style>