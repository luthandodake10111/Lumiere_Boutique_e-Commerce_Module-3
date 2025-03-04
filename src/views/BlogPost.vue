<template>
  <NavbarPage />
  <div class="container my-5">
    <div v-if="post">
      <h1 class="text-center">{{ post.title }}</h1>
      <br>
      <img :src="post.image_url" class="img-fluid my-4" alt="Blog Image"><br><br>
      <p>{{ post.content }}</p>
      <br><br>
      <router-link to="/blog" class="btn btn-outline-dark">Back to Blog</router-link>
    </div>
    <div v-else>
      <h2 class="text-center text-danger">Post not found</h2>
    </div>
    <br>
  </div>
  <FooterPage />
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: null
    };
  },
  created() {
    const postId = this.$route.params.id;
    axios.get(`http://localhost:3000/blog-posts/${postId}`)
      .then(response => {
        this.post = response.data;
      })
      .catch(error => {
        console.error("There was an error fetching the post:", error);
      });
  }
};
</script>

<style scoped>

</style>
