
<script>
import { useAuthStore } from '../../stores/auth';
import { reactive } from "vue"
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

        return { credential, handleLogin, authStore };
    },
};
</script>

<template>
    <template v-if="authStore.token">
        <h2 class="text-center">You are already logged in</h2>
        <div class="text-center">
            <button @click="authStore.logout()" class="btn btn-warning">Logout</button>
        </div>
    </template>
    <template v-else>
        <h2 class="text-light text-center">Login</h2>
        <form @submit.prevent="handleLogin">
            <div class="form-group m-3 p-3">
                <input class="form-control" v-model="credential.username" type="email" placeholder="Email" required />
            </div>
            <div class="form-group m-3 p-3">
                <input class="form-control" v-model="credential.password" type="password" placeholder="Password"
                    required />
                <div class="justify-content-end d-flex">
                    <a href="#" class="btn btn-link text-warning text-decoration-none">forgot password?</a>
                </div>

            </div>
            <div class="form-group text-center d-block d-grid m-3 p-3">
                <button type="submit" class="btn btn-outline-warning">Login</button>
            </div>
        </form>
        <div class="text-center">
            Don't have an account yet?
            <RouterLink to="/auth/register" class="btn btn-link text-warning text-decoration-none">Sign up</RouterLink>
        </div>
    </template>
    <!--/div-->

</template>
