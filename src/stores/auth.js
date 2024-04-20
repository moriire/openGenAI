// src/stores/auth.js

import { defineStore } from 'pinia';
import axios from 'axios';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        router: useRouter(),
        user: null,
        token: localStorage.getItem('jwtToken') || null,
    }),
    actions: {
        async login(email, password) {
            const loginData = new URLSearchParams();
            loginData.append('username', email);
            loginData.append('password', password);
            try {
                const response = await axios.post(`https://moriire-opengenai.hf.space/auth/jwt/login`,
                `username=${email}&password=${password}`,
                loginData,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                  }
                });
                const { access_token } = response.data;
                this.token = access_token;
                //this.user = user;
                localStorage.setItem('jwtToken', this.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
                this.router.push('/chat')
            } catch (error) {
		alert(error);
                console.error('Login failed:', error);
                throw error;
            }
        },
        async register(email, password) {
            try {
                const response = await axios.post('https://moriire-opengenai.hf.space/auth/register', { 'email': email, 'password': password, 'is_active': true, 'is_verified': true });
                const { access_token } = response.data;
                this.token = access_token;
                //this.user = user;
                localStorage.setItem('jwtToken', this.token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
                this.router.push('/auth/login')
            } catch (error) {
                console.error('Registration failed:', error);
                throw error;
            }
        },
        logout() {
            this.token = null;
            this.user = null;
            localStorage.removeItem('jwtToken');
            delete axios.defaults.headers.common['Authorization'];
        },
   }
});
