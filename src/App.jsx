import { useState } from "react";
import { Route, Switch } from "wouter";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ShippingEnquiry from "./pages/ShippingEnquiry";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import Footer from "./components/Footer/Footer";
import MiniCart from "./components/MiniCart/MiniCart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container flex flex-col min-h-screen">
        <main className="flex-grow p-8">
          <ScrollToTop />
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/order-confirmation" component={OrderConfirmation} />
            <Route>
              {" "}
              <NotFound />{" "}
            </Route>{" "}
            {/* Fallback route */}
          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
