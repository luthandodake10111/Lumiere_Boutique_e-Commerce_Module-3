CREATE DATABASE Lumiere_Boutique;
USE lumiere_boutique;

-- Users Table (Stores general information about the users.)
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(55) NOT NULL,
    last_name VARCHAR(55) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15),
    address TEXT
);

-- `````````````````````````````````````````````````````````````````````````````````````````````````````
-- email marketing Table (Manages user subscription preferences for email marketing.)
CREATE TABLE email_marketing (
    email_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    subscribed BOOLEAN DEFAULT TRUE,
    receives_promotions BOOLEAN DEFAULT TRUE,
    receives_vouchers BOOLEAN DEFAULT TRUE,
    receives_new_arrivals BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);	

-- `````````````````````````````````````````````````````````````````````````````````````````````````````
-- Product Table (Stores product information eg.scarves, banadanas) NB!!!!!!!!!!!!!!!!!!products
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(55) NOT NULL,
    product_type VARCHAR(55) NOT NULL, 
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    stock_quantity INT NOT NULL CHECK (stock_quantity >= 0),
    description TEXT
);
-- eg 
INSERT INTO products (product_id, product_name, product_type, price, stock_quantity, description)
VALUES
		(1, 'Cotton Silk blue and grey Scarf', 'Cotton Silk Scarf', 700.00, 100, 'Luxurious eco-friendly silk scarf'),
    	(2, 'Soil Brown Scarf', 'Cotton silk Scarf', 400.00, 100, 'Luxurious eco-friendly silk scarf'),
		(3, 'Sea Blue Scarf', 'Cotton Silk Scarf', 900.00, 100, 'Luxurious eco-friendly silk scarf'),
		(4, 'Evergreen Scarf', 'Cotton Silk Scarf', 500.00, 100, 'Luxurious eco-friendly silk scarf'),
        (5, 'Pink 1', 'Silk Scarf', 000.00, 100, 'Luxurious eco-friendly silk scarf'),
		(6, "Pink 2", 'Silk Scarf', 000.00, 100, 'Luxurious eco-friendly silk scarf'),
		(7, 'Pink 3', 'Silk Scarf', 000.00, 100, 'Luxurious eco-friendly silk scarf'),
		(8, 'Pink 4', 'Silk Scarf', 000.00, 100, 'Luxurious eco-friendly silk scarf'),
        (9, 'Pink 5', 'Silk Scarf', 000.00, 100, 'Luxurious eco-friendly silk scarf'),
		(10, 'Black 1', 'Silk Bandanas', 111.00, 200, 'Luxurious eco-friendly silk bandana scarf'),
		(11, 'Black 2', 'Silk Bandanas', 111.00, 200, 'Luxurious eco-friendly silk bandana scarf'),
		(12, 'Black 3', 'Silk Bandanas', 111.00, 200, 'Luxurious eco-friendly silk bandana scarf'),
		(13, 'Black 4', 'Silk Bandanas', 111.00, 200, 'Luxurious eco-friendly silk bandana scarf'),
		(14, 'Black 5', 'Silk Bandanas', 111.00, 200, 'Luxurious eco-friendly silk bandana scarf');
        
-- `````````````````````````````````````````````````````````````````````````````````````````````````````
-- Product Images Table (Stores multiple of images in each product)
CREATE TABLE product_images(
image_id INT AUTO_INCREMENT PRIMARY KEY,
product_id INT NOT NULL,
image_url VARCHAR(255) NOT NULL, 
is_primary BOOLEAN DEFAULT FALSE, -- Main product image
FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);
INSERT INTO product_images (product_id, image_url, is_primary) 
VALUES
	(1, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/cotton%20silk%20scarfs/1/silk%20cotton%20blue%20and%20grey.jpg', TRUE),  -- Main image first image 
	(1, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/cotton%20silk%20scarfs/1/silk%20cotton%20blue%20and%20grey%202.jpg', FALSE),  -- Side view
	(1, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/cotton%20silk%20scarfs/1/silk%20cotton%20grey%20and%20black.jpg', FALSE),  -- Back view
	(2, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/cotton%20silk%20scarfs/Brown.jpg', TRUE), -- Main image
	(3, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/cotton%20silk%20scarfs/silk%20cotton%20blue.jpg', TRUE), -- Main image
	(4, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/cotton%20silk%20scarfs/silk%20cotton%20green.jpg', TRUE), -- Main image
	(5, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/1/Silk-coral.webp', TRUE), -- Main image (HAVE TO CONSULT)
    (5, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/1/Silk-coral.webp', FALSE), -- Side view (HAVE TO CONSULT)
    (5, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/1/Silk-coral%202.webp', FALSE), -- Model (HAVE TO CONSULT)
    (6, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/2/Scarf_pink_backdrop%204.webp', TRUE), -- Main image
    (6, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/2/Scarf_pink_backdrop%202.webp', FALSE),
    (6, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/2/Scarf_pink_backdrop%203.webp', FALSE),
    (7, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/3/Grace_zebra_pink_scarf.webp', TRUE), -- Main image (HAVE TO CONSULT)
    (7, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/3/Grace_zebra_pink_scarf%202.webp', FALSE),
    (7, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/3/Grace_zebra_pink_scarf%203.webp', FALSE),
    (8, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/4/cream%202.webp', TRUE), -- Main image (HAVE TO CONSULT)
    (8, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/4/cream.webp', FALSE),
    (8, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/4/cream%203.webp', FALSE),
    (9, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/5%20maybe/Elzahn%20Nel%20and%20Lara%20Kruger%20Karoo%20Night%20Silk%20Twill%20Scarf%202.webp', TRUE), -- Main image (HAVE TO CONSULT)
    (9, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/Scarfs(silk)/5%20maybe/Lara%20Kruger%20Karoo%20Night%20Silk%20Scarf%203.webp', FALSE),
    (10, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/1/brown%20and%20white.jpg', TRUE), -- Main image
    (10, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/1/Bandana.jpg', FALSE),
    (10, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/1/Brown%20bandana.jpg', FALSE),
    (11, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/2/blue%20leopard%20print.jpg', TRUE),-- Main image
    (11, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/2/blue%20with%20flowers.jpg', FALSE),
    (11, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/2/Blue.jpg', FALSE),
    (12, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/3/Wanderland_Silk-twill-scarf-matriarch-coral2.webp', TRUE), -- Main image(Consult)
    (12, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/3/Pink%20Silk%20Scarf.webp', FALSE),
    (12, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/3/Pink%20Silk%20Scarf%202.webp', FALSE),
    (13, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/4/Grey%20Scarf%20Necklace.webp', TRUE), -- Main image(Consult)
    (13, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/4/MML_scarf_pink_backdrop.webp', FALSE), 
    (13, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/4/Grey%20Scarf.webp', FALSE),
    (14, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/5/Red%20and%20orange.jpg', TRUE), -- Main Image 
    (14, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/5/red%20and%20orange%20bandana.jpg', FALSE),
    (14, 'https://raw.githubusercontent.com/luthandodake10111/Lumiere_Boutique_e-Commerce_Module-3/refs/heads/main/Vero%20Social%20images%20and%20icons/Images/silk%20bandanas/5/Orange%20bandana.jpg', FALSE);
    
-- ```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
CREATE TABLE cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0) ,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);


-- Customers Order Table (Tracks customer oders)
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) NOT NULL,
    shipping_address TEXT,
    status ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled', 'Returned') DEFAULT 'Pending',
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- `````````````````````````````````````````````````````````````````````````````````````````````````````
-- Payement Table (Records payment details for orders)
CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    payment_method VARCHAR(50) NOT NULL,  -- eg., Paystack, PayPal, Credit Card
    payment_status VARCHAR(50) DEFAULT 'Pending',
    payment_amount DECIMAL(10, 2) NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE
);

-- `````````````````````````````````````````````````````````````````````````````````````````````````````
-- Shipping Table (Stores shipping information for orders.)
CREATE TABLE shipping (
    shipping_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    shipping_address TEXT,
    shipping_method VARCHAR(50) NOT NULL,
    shipping_status VARCHAR(50) DEFAULT 'Pending',
    shipped_date TIMESTAMP,
    estimated_delivery TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE
);

-- `````````````````````````````````````````````````````````````````````````````````````````````````````
-- Product Review Table (Allows users to leave reviews on products.)
CREATE TABLE product_reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    rating INT NOT NULL,  -- 1 to 5 stars
    review_text TEXT,
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- ``````````````````````````````````````````````````````````````````````````````````````````````
-- Vouchers Table (Stores voucher codes for discounts.)
CREATE TABLE voucher(
    voucher_id INT AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    discount_percentage INT NOT NULL,  -- E.g., 10 for 10% off
    valid_from TIMESTAMP NOT NULL,
    valid_until TIMESTAMP NOT NULL,
    usage_limit INT NOT NULL 
);
INSERT INTO voucher (voucher_id, code, discount_percentage, valid_from, valid_until, usage_limit)
VALUES
(1, 'SAVE10', 10, '2025-02-21', '2025-03-21', 30),
(2, 'SPECIAL20', 25, '2025-03-01', '2025-03-31', 40),
(3, 'BLACK FRIDAY50', 50, '2025-03-07', '2025-03-07', 2);

-- `````````````````````````````````````````````````````````````````````````````````````````````````````
--  Order Voucher Table (Tracking which voucher codes are used for specific orders.)
CREATE TABLE order_voucher (
    order_voucher_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    voucher_id INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (voucher_id) REFERENCES voucher(voucher_id) ON DELETE CASCADE
);



