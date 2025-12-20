🍲 MMFoods – Homemade Snacks Ordering App

A React-based ordering experience for freshly prepared South Indian snacks (fictional brand).

📌 Overview

MMFoods is a modern, responsive shopping and ordering application built using React, Vite, and TailwindCSS.
The app allows users to browse homemade snack items, manage a cart, and place pickup orders with clear preparation and timing expectations.

This project was built as part of my frontend portfolio to demonstrate real-world React development, UX thinking, and clean component architecture.

✨ Key Concepts Modeled

Orders are prepared fresh after placement

Preparation requires 2–3 hours

Same-day pickup is available only for orders placed before noon

Orders placed later are prepared for next business day pickup

These rules are communicated clearly in the UI without overcomplicating the logic.


🚀 Features
🛍️ Product Catalogue

Browse a list of homemade snack items

Prices, descriptions, and images

Dedicated product detail page with adjustable quantity

🛒 Shopping Cart

Add, update, and remove items

Real-time cart quantity indicator in the navbar

Mini-cart popup confirming item additions

📦 Order Placement & Pickup

Simple, user-friendly checkout form

Mandatory pickup-time selection (no defaults)

Clearly communicated preparation & pickup rules

Order confirmation with pickup day and time

📱 Responsive Design

Fully optimized for mobile, tablet, and desktop

Hamburger navigation for smaller screens

Touch-friendly inputs and controls

🎨 TailwindCSS UI

Clean, minimal, modern design

Utility-first styling

Reusable, well-scoped components


🧰 Tech Stack
Category	Technology
Frontend Framework	React (Vite)
State Management	React Context API
Routing	Wouter
Styling	TailwindCSS
Build Tool	Vite
Assets	Local images + generated visuals


📸 Screens & User Flow
🏠 Homepage

Introduces the brand and guides users into the product catalogue.

🛍️ Products

A structured list of available snacks with pricing and visuals.

📄 Product Details

Detailed product view with description and quantity selection.

📝 Checkout / Order Form

Collects customer details and pickup time, with clear preparation guidance.

🛒 Cart

Review, update, or remove items before placing the order.

✅ Order Confirmation

Confirms successful order placement and pickup timing.

ℹ️ About / 📞 Contact

Supporting pages describing the app and providing contact information.


mm-foods/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Layout/
│   │   ├── MiniCart/
│   │   ├── OrderForm/
│   │   ├── PickupTimeSelector/
│   │   ├── ProductCard/
│   │   └── ProductDetails/
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── Checkout.jsx
│   │   ├── OrderConfirmation.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   └── index.jsx
└── README.md

🧪 Planned Enhancements

Persist shopping cart using localStorage

Storybook for component documentation and visual testing

Minor UX refinements based on feedback


💡 Why This Project Matters

This project demonstrates my ability to:

Build a realistic, end-to-end frontend application

Model business rules cleanly in UI logic

Design for clarity and user trust

Implement state management and routing effectively

Deliver a responsive, production-ready UI


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


