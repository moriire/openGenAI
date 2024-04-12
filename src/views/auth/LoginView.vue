// src/components/Login.vue

<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
            <input v-model="credential.username" type="username" placeholder="username" required />
            <input v-model="credential.password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
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
        const credential = reactive({username: '',
            password: '',});
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