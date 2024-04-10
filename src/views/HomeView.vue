<script>
import { ref } from "vue";
//import "vue3-typer/dist/vue-typer.css";
import { Typer } from 'vue3-typer';
import "vue3-typer/dist/vue-typer.css";
import {
  RouterLink
} from 'vue-router'
export default {
    components: { Typer },
    setup() {
        const tales = ref("hello");
        return {
            tales
        }
    }
}
</script>
<template>
    <div class="row h-100  justify-content-end align-items-center p-4"
        style="background-image: url('src/assets/doctor-1.png'); background-position: center; background-size: cover; background-repeat: no-repeat; opacity: 0.7;">
       

        <div class="col-lg-8 col-sm-6 my-5 p-2">
            <h2 class="text-light">
                openGenAI
            </h2>
            <p class="lead-4 text-light">
                Welcome to AI Physician, a component of openGenAI, your personalized AI-powered medical assistant designed to revolutionize your healthcare experience. AI Physician is here to support you on your journey to better health. What out for other components for Law, Education etc
            </p>
            <h2 class="text-warning fw-bold">I am an AI Physician</h2>
            <p class="h2 text-light">
                I can <Typer
                    :text="['provide insights and potential diagnoses and recommendations', 'provide instant medical guidance and support anytime, anywhere.']"
                    erase-style='clear' repeat='Infinity'></Typer>
            </p>
            <div class=" text-center">
                <RouterLink class="btn btn-warning text-dark" to="/chat">Chat Now!</RouterLink>
               
            </div>
        </div>

    </div>

</template>
<style>
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

a {
    color: var(--bs-warning) !important;
}

a:hover {
    color: #fff !important;
}
</style>