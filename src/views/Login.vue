<template>
    <div>
      <div class="login-container">
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="loginData.email" type="email" placeholder="Email" required />
        <input v-model="loginData.password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div class="register-link">
        <h4>Don't have an account?</h4>
        <router-link to="/register" class="btn">Register</router-link>
      </div>
    </div>
  </div>
    <br>
      
</div>

    
</template>

<script>

import { mapActions } from 'vuex';

export default {
  data() {
    return {
      loginData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapActions(['login']),
    async login() {
      try {
        await this.$store.dispatch('login', { loginData: this.loginData, router: this.$router });
      } catch (error) {
        console.error('Login failed:', error.message);
      }
    }
  }
};
</script>


<style scoped>
.btn {
  padding: 0.5rem 1rem;
  background-color: black;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn:hover {
  background-color: #d4af37;
}

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.login-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1) #2c3e50;
  ;
  text-align: center;
  max-width: 400px;
  width: 100%;
  justify-content: center;

}

input {
  width: 100%;
  padding: 0.8rem;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}


h2 {
  color: black;
  margin-bottom: 1.5rem;
}


button {
  width: 100%;
  padding: 0.8rem;
  background-color: black;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #d4af37;
}

.register-link {
  margin-top: 10px;
}


.register-link button {
  background-color: transparent;
  border: none;
  color: #D4AF37;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: underline;
}




</style>