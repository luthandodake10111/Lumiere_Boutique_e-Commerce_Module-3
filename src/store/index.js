import { createStore } from 'vuex';


export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  },
  actions: {
    async register({commit}, userData) {
      try {
        const response = await fetch('http://localhost:3000/users/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData) // Sending the entire userData object
        });
        const data = await response.json();
        if (response.ok) {
          commit('setUser', data.user);  // Save the user info in Vuex store
          commit('setToken', data.token);  // Save the JWT token in Vuex store
          alert('Registration successful');
          this.$router.push('/login'); // Redirect to login page after registration
        } else {
          alert(data.message); // Display error message from the backend
        }
      } catch (error) {
        console.error(error);
        alert('Registration failed');
      }
    },

    async login({commit}, loginData) {
      try {
        const response = await fetch('http://localhost:3000/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginData) // Send the login data
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem('token', data.token); // Store token in localStorage
          commit('setToken', data.token);
          commit('setUser', data.user); // Store user info in Vuex
          alert('Login successful');
          this.$router.push('/'); // Redirect to dashboard after login
        } else {
          alert(data.message); // Show error message
        }
      } catch (error) {
        console.error(error);
        alert('Login failed');
      }
    },
    logout({ commit }) {
      commit('logout');
    }
  }
});
