<template>
  <div class="carousel-container">
    <div class="hero-overlay">
      <h2>Embrace Elegance, Wear Lumiere.</h2>
      <p>Elevate your style with our premium collection.</p>
      <button class="btn">Shop Now</button>
    </div>

    <div
      class="carousel"
      :style="{ transform: `translateX(-${currentIndex * 100}%)`, transition: transitioning ? 'transform 0.5s ease-in-out' : 'none' }"
      @transitionend="handleTransitionEnd"
    >
      <div v-for="(slide, index) in displayedSlides" :key="index" class="carousel-slide">
        <img :src="slide" alt="Carousel slide" />
      </div>
    </div>

    <button @click="prevSlide" class="carousel-prev">&#10094;</button>
    <button @click="nextSlide" class="carousel-next">&#10095;</button>

    <div class="carousel-dots">
      <span
        v-for="(_, index) in slides"
        :key="'dot-' + index"
        :class="{ 'active': currentIndex === index }"
        @click="goToSlide(index)"
        class="dot"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
     "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/c1.webp",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/c3.webp",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/c4.webp",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/c5.webp",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/c6.jpg",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/c7.jpg",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/carousel%206%20landscape.jpg",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/carousel%204%20landscape.jpg",

"https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/first%20one.jpg"
      ],
      currentIndex: 0,
      transitioning: true,
      interval: null
    };
  },
  computed: {
    displayedSlides() {
      return [...this.slides, this.slides[0]];
    }
  },
  methods: {
    nextSlide() {
      if (this.currentIndex >= this.slides.length) {
        this.transitioning = false;
        this.currentIndex = 0;
      } else {
        this.transitioning = true;
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex === 0) {
        this.transitioning = false;
        this.currentIndex = this.slides.length;
      } else {
        this.transitioning = true;
        this.currentIndex--;
      }
    },
    goToSlide(index) {
      this.transitioning = true;
      this.currentIndex = index;
    },
    startAutoSlide() {
      this.interval = setInterval(this.nextSlide, 5000);
    },
    stopAutoSlide() {
      clearInterval(this.interval);
    },
    handleTransitionEnd() {
      if (this.currentIndex >= this.slides.length) {
        this.transitioning = false;
        this.currentIndex = 0;
      }
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  }
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  margin: 0;
  border-radius: 10px;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-slide {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
}

.carousel-slide img {
  width: 100%;
  object-fit: cover;
  height: 100%;
  max-height: 800px;
  border-radius: 10px;
}

.hero-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.4);
  padding: 20px 30px;
  border-radius: 10px;
  text-align: center;
  z-index: 10;
  width: 60%;
  max-width: 600px;
}

.hero-overlay h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}
.hero-overlay .wear-lumiere {
  font-style: italic;
}

.hero-overlay p {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.hero-overlay .btn {
  background-color: black;
  color: whitesmoke;
  padding: 10px 50px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.hero-overlay .btn:hover {
  background-color: #D4AF37;
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
  z-index: 5;
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
  z-index: 5;
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
@media (max-width:768px) {
  .carousel-slide img {
    height: 100%;
    max-height: 600px;

  }
  
}
.btn:hover {
  background-color: #D4AF37;
}
</style>
