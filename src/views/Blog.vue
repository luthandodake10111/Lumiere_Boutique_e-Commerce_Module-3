<template>
  <NavbarPage />
  <br><br><br><br><br>
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
              <br><br><br><br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarPage from '../components/NavbarPage.vue';
  export default {
    name: "Blog",
    components: {
      NavbarPage
    },
    data() {
      return {
        blogPosts: [
          {
            id: 1,
            title: "The Art of Styling Silk Scarves",
            excerpt: "Learn how to wear silk scarves in multiple ways to elevate your outfit.",
            image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/galary/Orange%20Scarf.jpg",
          },
          {
            id: 2,
            title: "Why Silk is the Ultimate Luxury Fabric",
            excerpt: "Silk has been a symbol of luxury for centuries. Find out why.",
            image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/galary/Yellow%20bandana.jpg",
          },
          {
            id: 3,
            title: "5 Must-Have Accessories for 2025",
            excerpt: "Complete your look with these trendy accessories.",
            image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/galary/elegant%20designs%20of%20silk%20scarves.jpg",
          },
          {
            id: 4,
            title: "How to Choose the Perfect Silk Scarf for Every Occasion",
            excerpt: "Selecting the ideal silk scarf for any occasion can be tricky, but we’re here to help..",
            image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/galary/White%20scarf.jpg",
          },
          {
            id: 5,
            title: "How to Care for Your Silk Scarf ?",
            excerpt: "Proper care can ensure your silk scarf lasts for years to come...",
            image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/galary/Scarf%20with%20cap.jpg",
          },
          {
            id: 6,
            title: "Silk has been a symbol of luxury for centuries. Find out why.",
            excerpt: "For centuries, silk has been synonymous with luxury, elegance, and refinement..",
            image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/blog%20images/carousel%20%20landscape.jpg",
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
.card-img-top {
  height: 200px; /* Adjust the height as needed */
  object-fit: cover; /* Ensures the image scales nicely */
}
  </style>
  