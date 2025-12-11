import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "wouter";

function NotFound() {
  return (
    <Layout>
      <div className="p-4">
        {/* Call-to-Action */}
        <section className="bg-orange-50 py-10">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-lg font-semibold mb-8 text-gray-800 px-2 py-4">
              Sorry, the page you look for does not exist.
            </p>
            <Link
              href="/products"
              className="bg-yellow-300 text-black px-6 py-3 rounded hover:bg-yellow-400 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default NotFound;
