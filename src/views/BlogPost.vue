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
        allPosts: [],
      };
    },
    created() {
      const postId = this.$route.params.id;
      this.post = this.allPosts.find(p => p.id == postId);
    },
  };
  </script>
  