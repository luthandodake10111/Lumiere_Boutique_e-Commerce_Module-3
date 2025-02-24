<template>
    <div class="container my-5">
      <h1 class="text-center">Lumiere Boutique Blog</h1>
      <div class="row mt-4">
        <div v-for="post in blogPosts" :key="post.id" class="col-md-4">
          <div class="card shadow-lg mb-4">
            <img :src="post.image" class="card-img-top" alt="Blog Image">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.excerpt }}</p>
              <router-link :to="'/blog/' + post.id" class="btn btn-outline-dark">
                Read More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blogPosts: [
          {
            id: 1,
            title: "The Art of Styling Silk Scarves",
            excerpt: "Learn how to wear silk scarves in multiple ways to elevate your outfit.",
            image: "https://via.placeholder.com/300",
          },
          {
            id: 2,
            title: "Why Silk is the Ultimate Luxury Fabric",
            excerpt: "Silk has been a symbol of luxury for centuries. Find out why.",
            image: "https://via.placeholder.com/300",
          },
          {
            id: 3,
            title: "5 Must-Have Accessories for 2025",
            excerpt: "Complete your look with these trendy accessories.",
            image: "https://via.placeholder.com/300",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #D4AF37;
  }
  .card {
    border-radius: 15px;
    transition: transform 0.3s ease-in-out;
  }
  .card:hover {
    transform: scale(1.05);
  }
  </style>
  