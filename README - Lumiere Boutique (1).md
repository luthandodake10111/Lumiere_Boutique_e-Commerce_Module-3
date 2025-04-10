# Lumiere Boutique - E-Commerce Website

[![Screenshot of Homepage](path/to/homepage_screenshot.png)](link/to/live_demo)
[![Animated GIF of Adding to Cart](path/to/add_to_cart_animation.gif)](link/to/live_demo)

A fully functional e-commerce website built by Luthando Dake, Asive Simoki, Tarryn Masunda, and Azola Ndoda for the e-Commerce project. Lumiere Boutique offers high-quality, eco-friendly silk scarves, with a luxury shopping experience.

## Table of Contents
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Key Features](#key-features)
- [Usage Instructions](#usage-instructions)
- [Potential Improvements](#potential-improvements)
- [Credits](#credits)
- [Author](#author)

## Live Demo
(#Not hosted yet)

## Technologies Used
- **Front-end:**
  - Vue.js
  - Axios

- **Styling:**
  - [Custom CSS]
  - [Font awesome]  

- **Back-end:**
  - **Express.js** - Web framework for Node.js
  - **CORS** - Middleware to enable cross-origin requests
  - **dotenv** - Environment variable management
  - **Body-Parser** - Middleware to parse incoming request bodies
  - **Express Routers**:
    - **usersRouter** - Handles user authentication and management routes
    - **cartRouter** - Manages cart functionality
    - **paymentRouter** - Manages payment routes
    - **productRoutes** - Handles product-related operations
    - **blogRoutes** - Manages blog-related routes

- **Database:**
  - MySQL 

- **Other:**
  - Axios for API requests
  - Logo created with Canva

## Setup Instructions

### 1. Prerequisites:
   - Node.js (version >= 14.0)
   - MySQL database server installed
   - npm (Node Package Manager)
   - A web browser for testing

### 2. Clone the Repository:
```bash
git clone https://github.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3.git
cd Lumiere_Boutique_e-Commerce_Module-3
3. Install Frontend Dependencies:
Navigate to the frontend directory and install the required dependencies:

bash
cd frontend
npm install
4. Install Backend Dependencies:
Navigate to the backend directory and install the required dependencies:

bash

cd backend
npm install
5. Database Setup:
Create a new database named lumiere_boutique in your MySQL server.

Import the database schema from the provided SQL file.(MySQL Workbench)

bash

6. Configure Environment Variables:
In the backend, configure the environment variables by creating a .env file:

bash

DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASS=your_database_password
JWT_SECRET=your_jwt_secret
7. Start the Development Servers:
Backend: Navigate to the backend directory and run the backend server:

bash

cd backend
node --watch index.js
Frontend: Navigate to the frontend directory and start the frontend server:

bash

cd frontend
npm run serve
8. Access the Website:
Open your browser and go to http://localhost:8080 to view the website.

Key Features
User Registration & Login: Secure user registration and login functionality using JWT for authentication.

Product Catalog: Displaying a range of high-quality, eco-friendly silk scarves with detailed descriptions, images, and pricing.

Shopping Cart: Users can add, remove, and modify items in their shopping cart.

Admin Dashboard: An administrative interface for managing products, orders, and customer insights.

Responsive Design: The website is designed to be fully responsive across desktop, tablet, and mobile devices.

Order Management: Admins can manage and process customer orders efficiently.

Usage Instructions
As a Customer:
Browse the product catalog and select your desired items.

Register an account or log in if you already have one.

Add items to your shopping cart.

Proceed to checkout and enter your payment information.

Complete your purchase and view order confirmation.

As an Admin:
Log in to the admin panel using admin credentials.

View product statistics, customer insights, and order management.

Manage products, including adding, editing, and deleting products.

Potential Improvements
Advanced filtering options for products ( by material,style e.t.c).

Product reviews and ratings system.

Loyalty program for regular customers.

Multi-language support for a global audience.

Integration with a third-party payment gateway.

Credits
Vue.js: Link to Vue.js

Axios: Link to Axios

Express.js: Link to Express.js

Canva: Link to Canva (For logo design)

Author

Luthando Dake 
github : luthandodake10111
emmail : luthandodakeskhu@gmail.com

Asive Simoki
github : asive05-web
emmail : danielasivesimoki05@gmail.com

Tarryn Masunda
github : tarryn-masunda
emmail : tarrynmasunda@gmail.com

Azola Ndoda
github : AzolaNdoda
email : azolah99@gmail.com