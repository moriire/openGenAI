// src/components/Login.vue

<template>
    <div class="container">
        <div class="row justify-content-center vh-100 align-items-center">
            <div class="col-lg-6">
                hello
            </div>
            <div class="col-lg-6">
                <h2>Login</h2>
                <form @submit.prevent="handleLogin">
                    <div class="form-group mb-3">
                        <input class="form-control" v-model="credential.username" type="username" placeholder="username"
                            required />
                    </div>
                    <div class="form-group mb-3">
                        <input class="form-control" v-model="credential.password" type="password" placeholder="Password"
                            required />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-outline-warning">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import { useAuthStore } from '@/stores/auth';
import { ref, reactive } from "vue"
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    setup() {
        const credential = reactive({
            username: '',
            password: '',
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
