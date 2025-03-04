import { createStore } from 'vuex';

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    products:[]
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
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    setProducts(state, products) {
      state.products = products;
  },
  singleProduct(state, product) {
    state.product = product;
},

  },
  actions: {

async fetchProducts({ commit }) {
  try {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    commit('setProducts', data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
},
    async register({ commit }, { userData, router }) {
      try {
        const response = await fetch('http://localhost:3000/users/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData)
        });
        const data = await response.json();

        if (response.ok) {
          commit('setUser', data.user);
          commit('setToken', data.token);
          alert('Registration successful');
          router.push('/login');
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error(error);
        alert('Registration failed');
      }
    },

    async login({ commit }, { loginData, router }) {
      try {
        const response = await fetch('http://localhost:3000/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginData)
        });
        const data = await response.json();

        if (!response.ok) {
          alert(data.message || 'Login failed');
          return;
        }

        commit('setToken', data.token);
        commit('setUser', data.user);
        alert('Login successful');
        router.push('/');
      } catch (error) {
        console.error(error);
        alert('Login failed');
      }
    },

    async singleProduct({ commit }) {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        commit('singleProduct', data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
  }
},
  getters:{
    allProducts: (state) => state.products,
  }
}); 
