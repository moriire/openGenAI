<template>

    <!--div class="m-2 col-lg-6 col-sm-8 col-xs-8 bg-dark py-5"-->
    <h2 class="text-light text-center">Login

    </h2>
    <form @submit.prevent="handleLogin">
        <div class="form-group m-3 p-3">
            <input class="form-control" v-model="credential.username" type="email" placeholder="Email" required />
        </div>
        <div class="form-group m-3 p-3">
            <input class="form-control" v-model="credential.password" type="password" placeholder="Password" required />
            <div class="justify-content-end d-flex">
                <a href="#" class="btn btn-link text-warning text-decoration-none">forgot password?</a>
            </div>

        </div>
        <div class="form-group text-center d-block d-grid m-3 p-3">
            <button type="submit" class="btn btn-outline-warning">Login</button>
        </div>
    </form>
    <div class="text-light text-center">
        Don't have an account yet?
        <RouterLink to="/auth/register" class="btn btn-link text-warning text-decoration-none">Sign up</RouterLink>
    </div>
    <!--/div-->

</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { ref, reactive } from "vue"
import {
    RouterLink,
} from 'vue-router';

export default {
    components: [RouterLink],
    setup() {
        const credential = reactive({
            username: '',
            password: '',
            is_active: true,
            is_verified: true
        });
        const authStore = useAuthStore();

        const handleLogin = async () => {
           
            try {
                await authStore.login(credential.username, credential.password);
                // Redirect to a protected route or home page

            } catch (error) {
                console.error('Login error:', error);
            }
        };

        return { credential, handleLogin };
    },
};
</script>
