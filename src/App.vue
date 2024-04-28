<script setup>
import {
  RouterView
} from 'vue-router'

</script>

<template>
  
        <RouterView />
   
</template>
<style .scoped>
* {
    box-sizing: border-box !important;
}

body,
div.cont {
    background-color: black;
    height: 100vh;
}
a.nav-link {
  color: var(--bs-warning)
}
</style>