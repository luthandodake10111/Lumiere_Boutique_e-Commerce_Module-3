import { createStore } from 'vuex';
import axios from "axios";

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    products: [],
    product: [], 
    messages: [],
    cart: [],
    order: null,
    clientSecret: null  // For Stripe payment
  },
  mutations: {
    setLoggedIn(state, status) {
      state.isLoggedIn = status;
    },
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
    setProductsImage(state, products) {
      state.products = products;
    },
    setProduct(state, product) { 
      state.product = product;
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
    setClientSecret(state, clientSecret) {
      state.clientSecret = clientSecret;
    },
    setMessages(state, messages) { 
      state.messages = messages;
    },
    addMessage(state, message) {
      state.messages.push(message);
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/products");
        console.log(response.data.products);
        commit('setProducts', response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async register({ commit }, { userData, router }) {
      try {
        const response = await axios.post("http://localhost:3000/users/register", userData);
        if (response.status === 201) {
          commit('setUser', response.data.user);
          commit('setToken', response.data.token);
          alert('Registration successful');
          router.push('/login');
        } else {
          alert(response.data.message);
        }
      } catch (error) {
        console.error(error);
        alert('Registration failed');
      }
    },
    async login({ commit }, { loginData, router }) {
      try {
        const response = await axios.post("http://localhost:3000/users/login", loginData);
        if (response.status === 200) {
          commit('setToken', response.data.token);
          commit('setUser', response.data.user);
          alert('Login successful');
          router.push('/');
        } else {
          alert(response.data.message || 'Login failed');
        }
      } catch (error) {
        console.error(error);
        alert('Login failed');
      }
    },
    logout({ commit }) {
      commit('logout');
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
    async fetchSingleProduct({ commit }, productId) { // Renamed action for clarity
      try {
        const response = await axios.get(`http://localhost:3000/products/${productId}`);
        commit('setProduct', response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    },
    async fetchMessages({ commit }) {
      try {
        const response = await axios.get("http://localhost:3000/contact/messages");
        commit('setMessages', response.data.messages); // Fixed missing commit
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }
  },
  getters: {
    isLoggedIn: (state) => !!state.token, 
    allProducts: (state) => state.products,
    allMessages: (state) => state.messages,
    singleProduct: (state) => state.product, 
    user: (state) => state.user,
    cart: (state) => state.cart || [],
    cartTotal: (state) => {
      if (!state.cart || state.cart.length === 0) return 0; 
      return state.cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 1), 0);
    },
    cartItemCount: (state) => (state.cart ? state.cart.reduce((count, item) => count + (item.quantity || 1), 0) : 0)
  }
});  
