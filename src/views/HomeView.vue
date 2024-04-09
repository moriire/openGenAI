<script>
import { ref } from "vue";
// ES6
import { Typer } from 'vue3-typer';
import "vue3-typer/dist/vue-typer.css";

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
    <div class="row align-items-center" style="min-height: 100%;">
        <div class="col-6">

        </div>
        <div class="col-6 bg-light">
            <h2 class="bg-light">
                <Typer :text="['Hello World! I was registered locally!', 'thank you']" erase-style='clear' repeat='Infinity'></Typer>
            </h2>
        </div>
    </div>

</template>
<style scoped>
.vue-typer {
  font-family: Copperplate, 'Copperplate Gothic Light', fantasy;
}

.vue-typer .custom.char.typed {
  color: #607D8B;
}
.vue-typer .custom.char.selected {
  color: #607D8B;
  background-color: transparent;
  text-decoration: line-through;
}

.vue-typer .custom.caret {
  display: none;
}
</style>