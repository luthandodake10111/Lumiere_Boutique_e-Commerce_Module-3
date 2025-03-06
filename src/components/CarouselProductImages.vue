<template>
  <div class="carousel-container">
    <button class="carousel-button prev" @click="prevImage">←</button>
    <div class="carousel-images">
      <img :src="currentImage" alt="Product Image" class="carousel-image" />
    </div>
    <button class="carousel-button next" @click="nextImage">→</button>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
};
</script>

<style scoped>
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.carousel-images {
  max-width: 600px;
  max-height: 400px;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  font-size: 18px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
