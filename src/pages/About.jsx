import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "wouter";

function About() {
  return (
    <Layout>
      {/* About Section */}
      <h2 className="text-2xl text-gray-900 font-semibold p-4 mb-4">
        Welcome to MM Foods!{" "}
      </h2>
      <section className="bg-yellow-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Who are we
          </h2>
          <p className="text-gray-700">
            We’re a home-run kitchen based in Bernau bei Berlin in Germany,
            passionate about bringing authentic Indian flavors to your plate.
            Everything is handmade in small batches using trusted family
            recipes, quality ingredients, and zero preservatives.
          </p>
        </div>
      </section>

      <section className="bg-orange-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            What we do
          </h2>
          <p className="text-gray-700">
            MM Foods is born out of a desire to satisfy the snack cravings of
            Non-Resident Indians living in Germany. We prepare authentic Indian
            sweets and snacks right here in Germany with love that brings back
            the good old memories of homeland.
          </p>
        </div>
      </section>

      <section className="bg-yellow-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Why MM Foods
          </h2>
          <p className="text-gray-700">
            We believe that food is a source of comfort and joy. That's why
            we're committed to creating products that are fresh, healthy and
            more enjoyable. Our products are carefully crafted using traditional
            recipes and high-quality ingredients to ensure that every dish is
            not only delicious but also nutritious.
          </p>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-orange-50 py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Craving Already?
          </h2>
          <Link
            href="/products"
            className="bg-yellow-300 text-black px-6 py-3 rounded hover:bg-yellow-400 transition"
          >
            Order Now!
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export default About;
