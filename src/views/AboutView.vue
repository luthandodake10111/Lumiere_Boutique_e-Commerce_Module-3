<template>
  <div class="about">
    <h1>About Lumiere Boutique</h1>
    <p>Lumiere Boutique was founded with a passion for elegance and sophistication. We believe in crafting premium quality scarves that embody luxury and timeless beauty.</p>
    
    <h2>Why It Was Started</h2>
    <p>We started Lumiere Boutique to bring high-quality, stylish scarves to individuals who appreciate luxury and refined craftsmanship.</p>
    
    <h2>What is Lumiere Boutique About?</h2>
    <p>We specialize in silk and cotton blend scarves, offering a variety of elegant designs that complement any outfit.</p>
    
    <h2>Why Luxury Scarves?</h2>
    <p>Luxury scarves elevate your style, adding a touch of sophistication to any look while providing comfort and warmth.</p>
    
    <h2>Why Elegant Scarves?</h2>
    <p>Our scarves are designed to blend timeless beauty with modern fashion trends, making them perfect for any occasion.</p>
    
    <h2>Why Premium Quality Scarves?</h2>
    <p>We use the finest materials to ensure durability, softness, and a premium feel that lasts.</p>
    
    <h2>What Are Cotton and Silk Scarves?</h2>
    <p>These scarves combine the softness of cotton with the luxurious sheen of silk, offering a perfect balance of comfort and elegance.</p>
    
    <h2>What Are Bandanas?</h2>
    <p>Bandanas are versatile accessories that can be worn in various styles, adding a stylish touch to your outfit.</p>
    
    <h2>Why Silk Bandanas?</h2>
    <p>Silk bandanas offer a luxurious feel and a stylish statement, making them a must-have fashion accessory.</p>
    
    <div class="features">
      <h2>Our Features</h2>
      <div class="grid-container">
        <div class="card" v-for="feature in features" :key="feature.title">
          <img :src="feature.image" :alt="feature.alt" :style="{ width: feature.size }" />
          <h5>{{ feature.title }}</h5>
          <p>{{ feature.description }}</p>
          <a :href="feature.link" class="btn">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: "Premium Quality",
          description: "Our scarves are crafted with the finest silk and cotton blends.",
          image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/cotton%20silk%20scarfs/Brown.jpg",
          alt: "Premium Quality",
          link: "#premium-quality",
          size: "180px"
        },
        {
          title: "Elegant Designs",
          description: "Timeless patterns that complement any outfit.",
          image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/galary/elegant%20designs%20of%20silk%20scarves.jpg",
          alt: "Elegant Designs",
          link: "#elegant-designs",
          size: "180px"
        },
        {
          title: "Luxury Silk Scarves",
          description: "Explore our finest collection of silk and cotton blend scarves, crafted for elegance.",
          image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/carousel%20slides/silk%20cotton%20carousel%202.jpg",
          alt: "Elegant Scarf",
          link: "#premium-quality",
          size: "190px"
        },
        {
          title: "Worldwide Shipping",
          description: "We deliver luxury right to your doorstep with efficiency.",
          image: "https://luthandodake10111.github.io/Lumiere_Boutique_e-Commerce_Module-3/Vero%20Social%20images%20and%20icons/Images/galary/worldwide-shipping-icon-5.jpg",
          alt: "Worldwide Shipping",
          link: "#worldwide-shipping",
          size: "190px"
        }
      ]
    };
  }
};
</script>

<style scoped>
.about {
  text-align: center;
  padding: 2rem;
  color: black;
}

h1, h2 {
  color: #D4AF37;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}

.card {
  background: whitesmoke;
  padding: 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.btn {
  padding: 0.75rem 1.5rem;
  background-color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}

.btn:hover {
  background-color: #D4AF37;
}
</style>
