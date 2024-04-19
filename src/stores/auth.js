// src/stores/auth.js

import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('jwtToken') || null,
    }),
    actions: {
        async login(username, password) {
            try {
                const response = await axios.post(`https://moriire-opengenai.hf.space/auth/jwt/login`, { username, password });
		alert(1)
                const { access_token } = response.data;
                this.token = access_token;
                this.user = user;
                localStorage.setItem('jwtToken', token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            } catch (error) {
		alert(error);
                console.error('Login failed:', error);
                throw error;
            }
        },
        async register(email, password) {
            try {
                const response = await axios.post('https://moriire-opengenai.hf.space/auth/register', { email, password });
                const { token, user } = response.data;
                this.token = token;
                this.user = user;
                localStorage.setItem('jwtToken', token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
