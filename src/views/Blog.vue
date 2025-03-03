<template>
  <NavbarPage />
  <br><br><br><br><br><br>
  <div class="grid-container">
    <div class="card">
      <div class="container my-5">
        <h1 class="text-center">Lumiere Boutique Blog</h1>
        <div class="row mt-4">
          <div v-for="post in blogPosts" :key="post.id" class="col-md-4">
            <div class="card shadow-lg mb-4">
              <img :src="post.image_url" class="card-img-top" alt="Blog Image">
              <div class="card-body">
                <br><br><br>
                <h3 class="card-title">{{ post.title }}</h3>
                <br><br>
                <p class="card-text">{{ post.excerpt }}</p>
                <br><br>
                <router-link :to="'/blog/' + post.id" class="btn">
                  Read More
                </router-link>
                <br><br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br><br>
  <FooterPage />
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import axios from 'axios';

export default {
  components: {
    NavbarPage,
    FooterPage
  },
  data() {
    return {
      blogPosts: []
    };
  },
  created() {
    // Fetch the blog posts from the API
    axios.get('http://localhost:3000/api/blog-posts')
      .then(response => {
        this.blogPosts = response.data;
      })
      .catch(error => {
        console.error("There was an error fetching the blog posts:", error);
      });
  }
};
</script>

<style scoped>

.card {
  background: whitesmoke !important;
  padding: 1.5rem;
  margin: 2rem auto;
  box-shadow: 0px 4px 6px ;
  border-radius: 8px;
  font-size: medium;
}
  h3{
    color: #D4AF37;
  }
  .card {
    border-radius: 15px;
    transition: transform 0.3s ease-in-out;
  }
  .card:hover {
    transform: scale(1.05);
  }
  .btn {
  padding: 0.75rem 1.5rem;
  background-color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  color: white;
}

button:hover {
  color: #D4AF37;
}
  </style>
  