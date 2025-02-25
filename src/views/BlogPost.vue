<template>
    <div class="container my-5">
      <div v-if="post">
        <h1 class="text-center">{{ post.title }}</h1>
        <img :src="post.image" class="img-fluid my-4" alt="Blog Image">
        <p>{{ post.content }}</p>
        <router-link to="/blog" class="btn btn-outline-dark">Back to Blog</router-link>
      </div>
      <div v-else>
        <h2 class="text-center text-danger">Post not found</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: null,
        allPosts: [
          {
            id: 1,
            title: "The Art of Styling Silk Scarves",
            content: "Detailed content about styling scarves...",
            image: "https://via.placeholder.com/600",
          },
          {
            id: 2,
            title: "Why Silk is the Ultimate Luxury Fabric",
            content: "Silk has many benefits...",
            image: "https://via.placeholder.com/600",
          },
          {
            id: 3,
            title: "5 Must-Have Accessories for 2025",
            content: "Accessories can transform your look...",
            image: "https://via.placeholder.com/600",
          },
        ],
      };
    },
    created() {
      const postId = this.$route.params.id;
      this.post = this.allPosts.find(p => p.id == postId);
    },
  };
  </script>
  