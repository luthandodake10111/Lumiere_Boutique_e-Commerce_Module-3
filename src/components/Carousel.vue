<template>
  <div class="carousel-container">
    <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
        <img :src="slide" alt="Carousel slide" />
        <div class="hero-overlay" v-if="index === currentIndex">
          <h2>Embrace Elegance, Wear Lumiere.</h2>
          <p>Elevate your style with our premium collection.</p>
          <button class="btn">Shop Now</button>
        </div>
      </div>
    </div>

    <button @click="prevSlide" class="carousel-prev">&#10094;</button>
    <button @click="nextSlide" class="carousel-next">&#10095;</button>

    <div class="carousel-dots">
      <span 
        v-for="(slide, index) in slides" 
        :key="'dot-' + index" 
        :class="{ 'active': currentIndex === index }" 
        @click="goToSlide(index)" 
        class="dot"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
      "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/Carousel%201.jpg",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/Carousel%202.jpg",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/carousel%203.jpg",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/carousel%204.jpg",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/carousel%205.jpg",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/carousel%206.jpg",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/Red%20and%20White%20Scarf.jpg",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/Scarf%20with%20a%20bag.jpg",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/first%20one.jpg"
      ],
      currentIndex: 0,
      interval: null,
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startAutoSlide() {
      this.interval = setInterval(this.nextSlide, 3000);
    },
    stopAutoSlide() {
      clearInterval(this.interval);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  margin: auto;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  position: relative;
  min-width: 100%;
}

.carousel-slide img {
  width: 100%;
  height: 700px;
  /* object-fit: cover; */
}

.hero {
  text-align: center;
  padding: 5rem 2rem;
  background: linear-gradient(to right, #f8f9fa, #e0e0e0);
  color: #003366;
  position: relative;
  width: 100%;
  height: 500px; /* Adjust based on your carousel height */
}


.hero-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.8);
  opacity: 0.8;
  /* color: #D4AF37; */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.overlay h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.overlay p {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.overlay .btn {
  background-color: gold;
  color: black;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.overlay .btn:hover {
  background-color: darkgoldenrod;
}

.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
}

.carousel-prev {
  left: 10px;
}

.carousel-next {
  right: 10px;
}

.carousel-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.dot {
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background-color: #fff;
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

.btn:hover {
  background-color: #D4AF37;
}
</style>







/* Ensure the carousel is behind the text */
Carousel {
  position: relative;
  z-index: 1;
}
