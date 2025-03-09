import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  
  state: {

    token: localStorage.getItem('authToken') || null,
    isLoggedIn: !!localStorage.getItem('authToken'),
    products: [],
    user: null,
    cart: [],
    order: null,
    payment: null
  },
  
  mutations: {
    setLoggedIn(state, status) {
      state.isLoggedIn = status;
    },
    setUserData(state, payload) {
      try {
        state.userData = JSON.parse(payload);  // Ensure payload is valid JSON
      } catch (e) {
        console.error("Failed to parse user data:", e);
      }
    }
,
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('authToken', token);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.cart = [];
      localStorage.removeItem('user');
      localStorage.removeItem('authToken');
    },
    setProducts(state, products) {
      state.products = products;
    },
    setCart(state, cartItems) {
      state.cart = cartItems;
      // Updating cart item count
      state.cartItemCount = state.cart.reduce((count, item) => count + item.quantity, 0);
    },
    addCartItem(state, item) {
      const exists = state.cart.find(cartItem => cartItem.product_id === item.product_id);
      if (exists) {
        exists.quantity += item.quantity;
      } else {
        state.cart.push(item);
         // Updating cart item count
      state.cartItemCount = state.cart.reduce((count, item) => count + item.quantity, 0);

      }
    },
    removeCartItem(state, product_id) {
      state.cart = state.cart.filter(item => item.product_id !== product_id);
    },
    updateQuantity(state, { product_id, quantity }) {
      const item = state.cart.find(cartItem => cartItem.product_id === product_id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
    setOrder(state, order) {
      state.order = order;
    },
    setPayment(state, payment) {
      state.payment = payment;
    },

  setUser(state, user) {
    state.user = user;
  },
},


  actions: {
    async register({ commit }, userData) {
      try {
        const { data } = await axios.post('http://localhost:3000/users/register', userData);
        commit('setUser', data.user);
        commit('setToken', data.token);
        alert('Registration successful');
      } catch (error) {
        console.error("Registration failed:", error.response ? error.response.data : error);
        throw new Error(error.response?.data?.message || "Registration failed. Please try again."); // Throw error
      }
    },
    


    async login({ commit }, loginData) {
      try {
        const response = await axios.post('http://localhost:3000/users/login', loginData);
        commit('setUserData', response.data.user);
      } catch (error) {
        console.error("Login failed:", error.response ? error.response.data : error);
        throw new Error('Invalid login credentials');
      }
    },
    

    logout({ commit }) {
      commit('logout');
      commit("setUser", null);

    },

    async getCart({ commit, state }) {
      if (!state.user) return;
      try {
          const response = await axios.get(`http://localhost:3000/cart/${state.user.user_id}`, {
              headers: { Authorization: `Bearer ${state.token}` }
          });
          commit('setCart', response.data.cart);
      } catch (error) {
          console.error("Error fetching cart:", error);
          commit('setCart', []);
      }
  },

  async fetchProducts({ commit }) {
    try {
      const { data } = await axios.get("http://localhost:3000/products");
      console.log(data.products); // Check that the data is in the expected format
      commit('setProducts', data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
  

    async addCartItem({ commit, state }, { product_id, quantity}) {
      if (!state.user || !state.token) {
        alert("Please log in first!");
        return;
      }
    
      console.log("Token being sent:", state.token); // Debugging
    
      try {
        await fetch(
          "http://localhost:3000/cart/add",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${state.token}`
            },
            body: JSON.stringify({user_id: state.user.user_id, product_id, quantity})
          },
          
        );
        commit("addCartItem", { product_id, quantity});
      } catch (error) {
        console.error("Error adding the item to cart", error.response ? error.response.data : error);
      }
    },    
    async removeCartItem({ commit, state }, product_id) {
      if (!state.user) return alert("Please log in first!");
      try {
        await axios.delete("http://localhost:3000/cart/remove", {
          data: { user_id: state.user.user_id, product_id }
        });
        commit("removeCartItem", product_id);
      } catch (error) {
        console.error("Error removing the item from cart:", error);
      }
    },
    async updateQuantity({ commit, state }, { product_id, quantity }) {
      try {
          await axios.put(`http://localhost:3000/cart/update`, {
              user_id: state.user.user_id,
              product_id,
              quantity
          });
          commit('updateQuantity', { product_id, quantity });
      } catch (error) {
          console.error("Error updating quantity:", error);
      }
  },

    async checkout({ commit, state }, shipping_address) {
      if (!state.user) return alert("Please log in first!");
      try {
        const { data } = await axios.post("http://localhost:3000/payments/create-payment-intent", {
          user_id: state.user.user_id,
          shipping_address
        });
        commit("setOrder", data.order_id);
        commit("setClientSecret", data.clientSecret);
        return data.clientSecret;
      } catch (error) {
        console.error("Checkout error", error);
        throw error;
      }
    },

    async confirmPayment({ commit }, { order_id, payment_status }) {
      try {
          await axios.post("http://localhost:3000/payments/confirm-payment", {
              order_id,
              payment_status
          });
          commit('clearCart');
          commit('setOrder', null);
      } catch (error) {
          console.error("Payment confirmation error:", error);
      }
  },
    async increaseQuantity({ commit, state }, item) {
      await this.updateQuantity({ product_id: item.product_id, quantity: item.quantity + 1 });
    },
    async decreaseQuantity({ commit, state }, item) {
      if (item.quantity > 1) {
        await this.updateQuantity({ product_id: item.product_id, quantity: item.quantity - 1 });
      }
    },
    async removeFromCart(product_id) {
      await this.removeCartItem(product_id);
    },
    async clearCartAfterPayment({ commit }, user_id) {
      fetch("http://localhost:3000/cart/clear", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id })
      })
      .then(() => {
          commit("clearCart");
      })
      .catch(error => {
          console.error('Error clearing cart after payment:', error);
      });
  }, 
  
  
    
  },

  getters: {
    allProducts: (state) => state.products,
    isLoggedIn: (state) => state.isLoggedIn,
    user: (state) => state.user,
    cartItems: (state) => state.cartItems,
    cartTotal: (state) => state.cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0),
    cartItemCount: (state) => state.cart.reduce((count, item) => count + item.quantity, 0)
  }
});
