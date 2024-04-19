<template>
    <div class="container">
        <div class="row justify-content-center vh-100 align-items-center">
            <!--div class="col-lg-6">
                hello
            </div-->
<button @click="handleLogin" class="btn btn-light" >alert</button>
            <div class="m-2 col-lg-6 col-sm-8 col-xs-8 bg-dark py-5">
                <h2 class="text-light text-center">Login {{ credential }}

</h2>
                <form @submit.prevent="handleLogin">
                    <div class="form-group mb-3 p-3">
                        <input class="form-control" v-model="credential.username" type="email" placeholder="Email"
                            hrequired />
                    </div>
                    <div class="form-group mb-3 p-3">
                        <input class="form-control" v-model="credential.password" type="password" placeholder="Password"
                            hrequired />
                    </div>
                    <div class="form-group text-center d-md-block d-grid mb-3 p-3">
                        <button type="submit" class="btn btn-outline-warning" >Login</button>
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
    setup() {

	const shAlert = () => {
	alert("hello2")

	}
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
		shAlert();
            } catch (error) {
                console.error('Login error:', error);
            }
        };

        return { credential, handleLogin, shAlert };
    },
};
</script>
