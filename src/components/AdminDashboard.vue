<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar">
      <div class="logo-container">
        <router-link to="/">
          <img
            src="https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/est%202025/icon_logo-transparent.png"
            alt="Lumiere Logo"
            class="logo-img"
          />
        </router-link>
      </div>
      <div class="nav-right">
        <button v-if="isLoggedIn" @click="handleLogout" class="ml-4 bg-red-500 text-white px-3 py-1 rounded">
          Logout
        </button>
        <router-link v-else to="/login" class="ml-4">Login</router-link>
      </div>
    </nav>

    <!-- Dashboard Content -->
    <div class="dashboard">
      <h1>Welcome, Matthew</h1>
      <!-- <p>Email: {{ user?.email }}</p> -->
      <p>Role: Purchasing Officer</p>

      <!-- PRODUCTS MANAGEMENT -->
      <section>
        <h2>Manage Products</h2>
        <button @click="addProduct" class="btn-add">Add Product</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.product_name }}</td>
              <td>{{ product.product_type }}</td>
              <td> R {{ product.price }}</td>
              <td>{{ product.stock_quantity }}</td>
              <td>{{ product.description }}</td>
              <td><img :src="product.image_url" alt="Product Image" class="product-image" /></td>
              <td>
                <button @click="updateProduct(product)">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- BLOG MANAGEMENT -->
      <section>
        <h2>Manage Blogs</h2>
        <button @click="addBlog" class="btn-add">Add Blog</button>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="blog in blogs" :key="blog.id">
              <td>{{ blog.title }}</td>
              <td>{{ blog.content }}</td>
              <td><img :src="blog.image" alt="Blog Image" class="blog-image" /></td>
              <td>
                <button @click="editBlog(blog)">Edit</button>
                <button @click="deleteBlog(blog.id)" class="btn-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- ORDER MANAGEMENT -->
      <section>
        <h2>Manage Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Shipping Address</th>
              <th>Total</th>
              <th>Payment Status</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.user_name }}</td>
              <td>{{ order.shipping_address }}</td>
              <td>R {{ order.total_price }}</td>
              <td>{{ order.payment_info }}</td>
              <td>{{ order.status }}</td>
              <td>
                <button @click="acceptOrder(order)">Accept</button>
                <button @click="editOrder(order)">Edit</button>
                <button @click="deleteOrder(order.id)" class="btn-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
  <FooterLine />
</template>

<script>
import { mapState, mapActions } from "vuex";
import FooterLine from "./FooterLine.vue";

export default {
  name: "AdminDashboard",
  computed: {
    ...mapState({
      user: (state) => state.user,
      products: (state) => state.products,
      blogs: (state) => state.blogs,
      orders: (state) => state.orders,
      isLoggedIn: (state) => state.isLoggedIn,
    }),
  },
  methods: {
    ...mapActions([
      "fetchUser", "fetchProducts", "fetchBlogs", "fetchOrders", "addProduct", "updateProduct", "addBlog", "editBlog", "deleteBlog", "acceptOrder", "editOrder", "deleteOrder", "logout"
    ]),
    handleLogout() {
      this.logout();
      this.$router.push("/login");
    }
  },
  mounted() {
  this.fetchUser();
  this.fetchProducts().then(() => console.log("Products:", this.products));
  this.fetchBlogs().then(() => console.log("Blogs:", this.blogs));
  this.fetchOrders().then(() => console.log("Orders:", this.orders));
}

};
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7); /* semi-transparent black */
  padding: 10px 20px;
  height: 75px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.logo-container {
  text-align: center;
}

.logo-img {
  width: 100px;
  transition: transform 0.5s ease;
}

.nav-right button {
  background-color: transparent;
  border: 1px solid white;
  padding: 5px 10px;
  cursor: pointer;
  color: white;
}

.nav-right button:hover {
  background-color: white;
  color: black;
}

/* Dashboard Styles */
.dashboard {
  padding: 100px 20px 20px; /* Adjusted padding for navbar spacing */
}

h2 {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
button {
    width: 100%;
    padding: 10px;
    background-color: black;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: white;
    color: black;
  }
  .product-image,
.blog-image {
  width: 100px; /* Adjust width as needed */
  height: 100px; /* Adjust height to maintain aspect ratio */
  object-fit: cover; /* Ensures the image fits inside the box without distortion */
}

</style>