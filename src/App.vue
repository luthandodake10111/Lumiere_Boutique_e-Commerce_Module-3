<template>
  <router-view></router-view>
</template>


<style>

@font-face {
  font-family: 'Bodoni';
  src: url('./assets/fonts/libre-bodoni-font/LibrebodoniBolditalic-9AqB.otf') format('truetype');
}

@font-face {
  font-family: 'Raleway';
  src: url('./assets/fonts/raleway-font/Raleway-BVpl.ttf') format('truetype');
}

/* Apply font to your elements */
h1, h2, h3, h4, h5, h6 .heading .btn {
  font-family: 'Bodoni', serif;
  /* position: relative; */
  text-align: center;

}

body, p, .text .nav {
  font-family: 'Raleway', sans-serif;
  text-align: center;

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

</style>
<script>
export default {

  async mounted() {
    this.$store.dispatch('fetchProducts')
  
  },
};
</script>
