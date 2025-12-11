🍲 ReactJs based Shopping App ( Homemade Snacks - Ordering App- for a fictional brand(MM Foods) )

A modern, responsive React + Vite + TailwindCSS application for browsing and ordering authentic South Indian homemade snacks.

📌 Overview

MMFoods is a fully functional shopping experience built with React, featuring product browsing, cart management, order flow, and a mobile-friendly UI.

This project demonstrates real-world frontend skills including:

Component-based architecture

React Context for global state

Wouter for routing

TailwindCSS for clean, modern styling

Responsive UI/UX

A realistic checkout + order confirmation flow

Built as part of my frontend portfolio to showcase clean architecture, UI thinking, and production-ready React development.

🚀 Features
🛍️ Product Catalogue

Browse homemade snack items

Prices, descriptions, images

Dedicated product detail page with adjustable quantity

🛒 Shopping Cart

Add / update / remove items

Real-time cart counter in the Navbar

Mini-cart popup confirming added items

📦 Order Placement

Smooth checkout flow

User-friendly customer form (name, phone, pickup time)

Smart pickup slot logic

Shows “Today” slots before 5 PM

Shows “Tomorrow” slots after 5 PM

📱 Responsive Design

Fully optimized for mobile, tablet, and desktop

Accessible navigation (hamburger menu for mobile)

Touch-friendly controls

🎨 TailwindCSS UI

Clean, minimal, modern look

Utility-first CSS for rapid changes

Custom reusable components

🧰 Tech Stack
Category	Technology
Frontend Framework	React (Vite)
State Management	React Context API
Routing	Wouter
UI Styling	TailwindCSS
Build Tool	Vite
Assets	Local images + generated visuals
📸 Screenshots

Below are key screens from the MMFoods React application demonstrating the user flow from browsing to checkout.

🛍️ Products
![Products](./screenshots/Products.png)

📄 Product Details
![Product Details](./screenshots/ProductDetails.png)

📝 Order Form
![Order Form](./screenshots/OrderForm.png)

🛒 Cart
![Cart](./screenshots/Cart.png)

✅ Order Confirmation
![Order Confirmation](./screenshots/OrderConfirmation.png)


📁 Project Structure
mm-foods/
│
├── public/
│
└── src/
    ├── assets/
    │
    ├── components/
    │   ├── Footer/
    │   │   └── Footer.jsx
    │   ├── Header/
    │   ├── Layout/
    │   ├── Minicart/
    │   ├── OrderForm/
    │   ├── PickupTimeSelector/
    │   ├── ProductCard/
    │   ├── ProductDetails/
    │   └── ScrollToTop/
    │
    ├── context/
    │   └── CartContext/
    │       └── CartContext.jsx
    │
    ├── data/
    │   └── products.js
    │
    ├── pages/
    │   ├── About.jsx
    │   ├── CartPage.jsx
    │   ├── Checkout.jsx
    │   ├── Contact.jsx
    │   ├── Home.jsx
    │   ├── NotFound.jsx
    │   ├── OrderConfirmation.jsx
    │   ├── ProductPage.jsx
    │   ├── Products.jsx
    │   └── ShippingEnquiry.jsx
    │
    ├── app.css
    ├── app.jsx
    ├── index.css
    └── index.jsx
│
└── README.md

🧪 Upcoming Enhancements

Planned improvements:

Persistent cart using localStorage

Storybook for component documentation

Stock/availability indicators per product

Simple admin dashboard for managing product list

💡 Why This Project Matters

It demonstrates my ability to build a realistic, production-style frontend app with:

Clean React component patterns

Practical shopping-cart logic

Thoughtful UX

Mobile-first design

Routing + state management

Progressive enhancement mindset

🔧 Getting Started
1️⃣ Clone the repository
git clone https://github.com/Gayathri-Periasamy/shopping-app-react.git
cd shopping-app-react

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

4️⃣ Build for production
npm run build