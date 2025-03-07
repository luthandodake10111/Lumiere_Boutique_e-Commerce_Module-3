# Module3_Lumiere_Boutique_E-Commerce

GROUP MEMBERS:

Asive Simoki
Luthando Dake
Tarryn Masunda
Azola Ndoda

LUMIERE BOUTIQUE - OVERVIEW:

Lumiere Boutique is a luxury e-commerce platform specializing in high-quality, elegant silk scarves. Our vision is to offer sophisticated and timeless accessories that elevate every outfit with style and grace. Lumiere Boutique combines elegance with functionality, catering to those who appreciate luxury, craftsmanship, and exclusive design. We aim to provide a seamless shopping experience with an exceptional selection of scarves made from the finest silk, perfect for any occasion.

FEATURES:

EXCLUSIVE SILK SCARVES – A curated collection of premium silk scarves, featuring classic and contemporary designs.
SECURE PAYMENTS – We ensure secure transactions with multiple payment methods, including credit/debit cards.
GIFT WRAPPING – A luxurious gift-wrapping option for all orders.
DETAILED PRODUCT DESCRIPTIONS – View high-resolution images, care instructions, and design details for every product.
WORLDWIDE SHIPPING – We offer reliable shipping worldwide, ensuring that your purchases arrive safely and on time.

OFF SCOPE:

CUSTOMER REVIEWS – Read customer reviews and ratings to make informed purchasing decisions.
LOYALTY PROGRAM – Earn points with every purchase and enjoy exclusive discounts and offers.

TECH STACK:

FRONTEND:

Vue.js – This is used to build the user interface with seamless, reactive experiences.
Vuex – State management to handle user interactions and cart functionality.
Axios – This is for making API requests to interact with the backend services.

BACKEND:

Node.js with Express.js – Robust backend API for handling user data, product management, and transactions.
MySQL – Database management for storing customer orders, product details, and transaction data.
JWT Authentication – Secure user authentication and session management for safe login and registration.

INSTALLATION & SETUP:
PREREQUISITES:

Node.js & npm
MySQL database
BACKEND SETUP:

Clone the repository:
git clone https://github.com/lumiere-boutique/backend.git
Install dependencies:
npm install
Configure environment variables (.env file):


DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASS=your_database_password
JWT_SECRET=your_jwt_secret

Start the backend server:
node --watch index.js

FRONTEND SETUP:
Navigate to the frontend directory:
cd frontend

Install dependencies:
npm install

Run the development server (frontend):
npm run serve
WHAT TO INSTALL:

npm i @fontsource/playfair-display @fontsource/poppins @fortawesome/fontawesome-free @fortawesome/free-brands-svg-icons @stripe/stripe-js axios bootstrap core-js lucide-vue-next register-service-worker vue@3.2.13 vue-router@4.5.0 vuex@4.0.0
axios


npm install --save-dev @vue/cli-plugin-babel@~5.0.0 @vue/cli-plugin-pwa@~5.0.0 @vue/cli-plugin-router@~5.0.0 @vue/cli-plugin-vuex@~5.0.0 @vue/cli-service@~5.0.0

FOLDER STRUCTURE:
FRONTEND:

E-COMMERCE_FRONTEND/
├── src/
│   ├── components/
│   │   ├── Checkout.vue
│   │   ├── FooterPage.vue
│   │   ├── loading.vue
│   │   ├── NavbarPage.vue
│   │   ├── OrderPage.vue
│   │   ├── ProductCard.vue
│   │   ├── ProductDetail.vue
│   │   ├── ScarfPayment.vue
│   │   ├── SuccessPage.vue
│   ├── router/
│   │   ├── index.js
│   ├── store/
│   │   ├── index.js
│   ├── views/
│   │   ├── AboutPage.vue
│   │   ├── CartPage.vue
│   │   ├── ContactPage.vue
│   │   ├── FAQsPage.vue
│   │   ├── Home.vue
│   │   ├── Login.vue
│   │   ├── ProductPage.vue
│   │   ├── Register.vue
│   │   ├── SocialResponsibilityPage.vue
│   │   ├── TrackOrderPage.vue
│   ├── App.vue
│   ├── main.js
│   ├── registerServiceWorker.js
├── .gitignore
├── babel.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
├── vue.config.js

BACKEND:

E-COMMERCE_BACKEND/
├── backend/
├── config/
├── controller/
│   ├── blogController.js
│   ├── cartController.js
│   ├── contactController.js
│   ├── paymentController.js
│   ├── productController.js
│   ├── usersController.js
├── middleware/
├── model/
│   ├── blogModel.js
│   ├── cartDb.js
│   ├── contactModel.js
│   ├── ordersDb.js
│   ├── productModel.js
│   ├── usersDb.js
├── node_modules/
├── routes/
│   ├── blogRoutes.js
│   ├── cartRouter.js
│   ├── contactRoutes.js
│   ├── ordersDb.js
│   ├── paymentRouter.js
│   ├── productRoutes.js
│   ├── usersRouter.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── server.js
