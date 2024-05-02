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
  
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-lg-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white min-vh-100">
          <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-2 weight-bold d-none d-sm-inline fst-italic fw-bolder text-decoration-underline">OpenGenAI</span>
            <i class="d-md-none">OGA</i>
          </a>
         
          <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
           
            <li class="nav-item">
              <RouterLink to="/" class="nav-link align-middle px-0">
                <i class="fs-3 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
              </RouterLink>

            </li>
            <li>
              <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-robot"></i> <span class="ms-1 d-none d-sm-inline">ChatBots</span> </a>
              <ul class="collapse show nav flex-column ms-lg-5" id="submenu1" data-bs-parent="#menu">
                <!--li class="w-100">
                  <RouterLink to="/discover" class="nav-link px-0">
                    <i class="fs-4 bi-h-square"></i>
                    <span class="ms-1 d-none d-sm-inline">Discover</span>
                    
                  </RouterLink>
                </li--> <li class="w-100">
                  <RouterLink to="/gen" class="nav-link px-0">
                    <i class="fs-4 bi-h-square"></i>
                    <span class="ms-1 d-none d-sm-inline">Instruct</span>
                    
                  </RouterLink>
                </li>
                <li class="w-100">
                  <RouterLink to="/chat" class="nav-link px-0">
                    <i class="fs-4 bi-h-square"></i>
                    <span class="ms-1 d-none d-sm-inline">Chat</span>
                   
                  </RouterLink>
                </li>
                
              </ul>
            </li>
            <li>
              <a href="#" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">About</span></a>
            </li>
            <!--li>
              <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a>
              <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                <li class="w-100">
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
              <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                <li class="w-100">
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                </li>
              </ul>
            </li-->
            <li>
              <a href="#" class="nav-link px-0 align-middle" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <i class="fs-3 bi-gear"></i> <span class="ms-1 d-none d-sm-inline">Settings </span> </a>
            </li>
          </ul>
          <hr>
          <div class="dropdown pb-4">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="/src/assets/dummy.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
              <span class="d-none d-sm-inline mx-1">Loggedin</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
              <!--li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#" >Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li-->
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" type="button" @click="user.logout()">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col .py-3 m-0 p-0">
        
        <RouterView />
      </div>
    </div>
  </div>
  <div class="container">
    <div class="offcanvas offcanvas-end bg-light" sdata-bs-scroll="true" data-bs-backdrop="static" tabindex="-1"
      id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h2 class="offcanvas-title text-dark" id="offcanvasNavbarLabel">Settings </h2>
        <button type="button" class="btn-close close" data-bs-dismiss="offcanvas" aria-label="Close" >
        
        </button>
      </div>

      <div class="offcanvas-body">
        <div class="row justify-content-center">
          <div class="col-lg-10 my-2">
            <SliderControl v-model="params.modelParams.temperature" label="Temperature" :min="0" :max="1" :step=".1"
              :caliber="params.modelParams.temperature" @change="params.changeModelParams" />
          </div>

          <div class="col-lg-10 my-2">
            <SliderControl v-model="params.modelParams.top_p" label="Top_p" :caliber="params.modelParams.top_p" :min="0"
              :max="1.0" :step="0.05" @change="params.changeModelParams" />
          </div>

          <div class="col-lg-10 my-2">
            <SliderControl v-model="params.modelParams.top_k" label="Top_k" :caliber="params.modelParams.top_k" :min="0"
              :max="100" :step="5" @change="params.changeModelParams" />
          </div>
          <div class="col-lg-10 my-2">
            <SliderControl v-model="params.modelParams.n_ctx" label="num_ctx" :caliber="params.modelParams.n_ctx"
              :min="126" :max="8192" :step="126" @change="params.changeModelParams" />
          </div>

          <div class="col-lg-10 my-2">
            <SliderControl v-model="params.modelParams.seed" label="seed"
              :caliber="params.modelParams.seed"  :min="0" :max="100"
              @change="params.changeModelParams" />
          </div>
          <div class="col-lg-10 my-3">
          <button class="btn btn-sm btn-outline-warning" @click="reset">reset</button>
        </div>
        </div>
      </div>
    </div>

  </div>

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