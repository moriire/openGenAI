<template>
    <div class="container">
        <div class="row justify-content-center vh-100 align-items-center">
            <!--div class="col-lg-6">
                hello
            </div-->
            <div class="m-2 col-lg-6 col-sm-8 col-xs-8 bg-dark py-5">
                <h2 class="text-light text-center">Sign up</h2>
                <form @submit.prevent="handleLogin">
                    <div class="form-group m-3 p-3">
                        <input class="form-control" v-model="credential.username" type="email" placeholder="Email"
                            required />
                    </div>
                    <div class="form-group m-3 p-3">
                        <input class="form-control" v-model="credential.password" type="password" placeholder="Password"
                            required />
                        <!--div class="justify-content-end d-flex">
                            <a href="#" class="btn btn-link text-decoration-none">forgot password?</a>
                        </div-->

                    </div>
                    <div class="form-group text-center d-block d-grid m-3 p-3">
                        <button type="submit" class="btn btn-outline-warning">Register</button>
                    </div>
                </form>
                <div class="text-light text-center">
                    You already have an account?
                    <RouterLink to="/login" class="btn btn-link text-decoration-none">Login</RouterLink>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { ref, reactive } from "vue"
import {
  RouterLink,
} from 'vue-router';

export default {
    components: [ RouterLink ],
    setup() {
        const credential = reactive({
            email: '',
            password: ''
        });
        const authStore = useAuthStore();

        const handleSignup = async () => {
            try {
                await authStore.register(credential.email, credential.password);
                // Redirect to a protected route or home page
            } catch (error) {
                console.error('Signup error:', error);
            }
        };

        return { credential, handleSignup };
    },
};
</script>
