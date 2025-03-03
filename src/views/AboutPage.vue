<template>
  <div>
    <NavbarPage />

    <br><br><br><br><br><br>
    <h1>About Lumiere Boutique</h1>
    <div class="grid-container">
      <div class="card">
        <h5>Why Lumiere Boutique Was Started</h5>
        <p>Lumiere Boutique was founded with the vision of bringing timeless elegance and sophistication to the world of fashion. We believe that luxury is not just about style but also about the experience, and our carefully curated collection of scarves reflects this ethos.</p>
      </div>
      <div class="card">
        <h5>What Lumiere Boutique is About</h5>
        <p>At Lumiere Boutique, we specialize in offering high-end, exquisitely crafted scarves made from the finest materials. Our brand is dedicated to quality, sophistication, and making every customer feel unique and special.</p>
      </div>
      <div class="card">
        <h5>Why Luxury Scarves?</h5>
        <p>Luxury scarves are more than just accessories; they are timeless pieces that elevate any outfit. Crafted with precision and using premium materials, our scarves exude elegance and class, making them a must-have for fashion-forward individuals.</p>
      </div>
      <div class="card">
        <h5>Why Elegant Scarves?</h5>
        <p>An elegant scarf is a statement of refinement and grace. Whether draped over the shoulders or styled creatively, our scarves add a touch of sophistication to any wardrobe.</p>
      </div>
      <div class="card">
        <h5>Why Premium Quality Scarves?</h5>
        <p>Quality is at the heart of Lumiere Boutique. We source only the best materials to ensure that every scarf is soft, durable, and designed to stand the test of time.</p>
      </div>
      <div class="card">
        <h5>What are Cotton and Silk Scarves?</h5>
        <p>Cotton and silk scarves offer the perfect balance of comfort and luxury. The softness of silk combined with the breathability of cotton makes them versatile, lightweight, and perfect for any season.</p>
      </div>
      <div class="card">
        <h5>What Are Bandanas?</h5>
        <p>Bandanas are stylish, multi-functional accessories that can be worn in a variety of ways. Whether as a headband, neck scarf, or wrist wrap, they add a touch of flair to any outfit.</p>
      </div>
      <div class="card">
        <h5>Why Silk Bandanas?</h5>
        <p>Silk bandanas offer a luxurious feel and an exquisite shine that sets them apart. They are lightweight, elegant, and perfect for those who appreciate fine fashion details.</p>
      </div>
      <div class="card">
        <h5>Worldwide Shipping</h5>
        <p>Wherever you are in the world, Lumiere Boutique brings luxury to your doorstep. We offer reliable worldwide shipping to ensure that our customers can enjoy premium quality scarves no matter their location.</p>
      </div>
    </div>
  </div>
  <FooterPage />
</template>

<script>
import NavbarPage from "@/components/NavbarPage.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: {
    NavbarPage,
    FooterPage
  }
}
</script>

<style scoped>


.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}

.card {
  background: whitesmoke !important;
  padding: 1.5rem;
  margin: 2rem auto;
  box-shadow: 0px 4px 6px ;
  border-radius: 8px;
  font-size: medium;
}

.card h5 {
  font-size: 20px !important;
  color: #D4AF37;
}
</style>
