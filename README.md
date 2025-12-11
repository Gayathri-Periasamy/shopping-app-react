🍲 MMFoods – Homemade Snacks Ordering App

A modern, responsive React application for browsing and ordering authentic South Indian homemade snacks.

📌 Overview

MMFoods is a fully functional React + Vite + TailwindCSS application that allows users to browse products, view detailed descriptions, manage cart items, and place pickup orders.
This project demonstrates real-world frontend skills including:

Component-based architecture

State management using React Context

Routing with Wouter

Responsive UI using TailwindCSS

Dynamic product pages, persistent mini-cart, and order confirmation flow


This application was built as part of my frontend portfolio to showcase clean architecture, UI/UX thinking, and production-ready React development.

🚀 Features
🛍️ Product Catalogue

Displays a list of homemade snack items

Each item includes price, description, and image

Product detail page with adjustable quantity

🛒 Shopping Cart

Add, update, or remove items

Real-time cart quantity visible in the navigation bar

Mini-cart popup confirming additions

📦 Order Placement

Simple checkout flow

User-friendly order form (name, phone, pickup time, etc.)

Smart pickup slot system:

Shows “Today” slots only before 5 PM

Shows “Tomorrow” slots after 5 PM

📱 Responsive Design

Fully optimized for mobile, tablet, and desktop

Hamburger navigation for small screens

Touch-friendly inputs

🖼️ TailwindCSS Styling

Clean, modern, consistent UI

Utility-first styling for fast iteration

Custom components using reusable classes

🧰 Tech Stack
Category	Technology
Frontend Framework	React (Vite)
State Management	React Context API
Routing	Wouter
UI Styling	TailwindCSS
Build Tool	Vite
Assets	Locally stored images + generated snack visuals
📁 Project Structure (Simplified)
my-homemade-food-app/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── ProductCard/
│   │   ├── MiniCart/
│   │   └── CartItem/
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductPage.jsx
│   │   ├── Cart.jsx
│   │   └── OrderConfirmation.jsx
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   └── main.jsx
└── README.md

🧪 Upcoming Enhancements

These are planned for upcoming releases:

Persistent cart using localStorage

Dedicated Storybook setup for component documentation

Per-product stock/availability indicators

Basic admin panel for managing product list

💡 Why This Project Matters

This project demonstrates my ability to build a production-style application with:

Clean React component design

Realistic shopping cart flows

UX-driven decisions

Attention to responsive design

Practical use of context/state

Real-world routing logic

Progressive enhancement mindset

🔧 Getting Started
1. Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

2. Install dependencies
npm install

3. Run the development server
npm run dev

4. Build for production
npm run build
