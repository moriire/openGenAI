<template>
    <div class="container">
        <div class="row justify-content-center vh-100 align-items-center">
            <!--div class="col-lg-6">
                hello
            </div-->
            <div class="m-2 col-lg-6 col-sm-8 col-xs-8 bg-dark py-5">
                <h2 class="text-light text-center">Sign up</h2>
                <form @submit.prevent="handleSignup">
                    <div class="form-group mb-3 p-3">
                        <input class="form-control" v-model="credential.email" type="email" placeholder="email"
                            required />
                    </div>
                    <div class="form-group mb-3 p-3">
                        <input class="form-control" v-model="credential.password" type="password" placeholder="Password"
                            required />
                    </div>
                    <div class="form-group text-center">
                        <button type="submit" class="btn btn-outline-warning">Register</button>
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
            email: '',
            password: '',
        };
    },
    setup() {
        const credential = reactive({
            email: '',
            password: ''
        });
        const authStore = useAuthStore();

        const handleSignup = async () => {
            try {
                await authStore.register(...credential.username, credential.password);
                // Redirect to a protected route or home page
            } catch (error) {
                console.error('Signup error:', error);
            }
        };

        return { credential, handleSignup };
    },
};
</script>
